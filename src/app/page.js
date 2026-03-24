"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { SectionIntro } from "@/components/section-intro";
import {
  announcement,
  contactDetails,
  ministryHighlights,
  serviceAdvert,
  serviceTimes,
} from "@/content/site";

export default function HomePage() {
  // ⏱️ live clock (updates every minute)
  const [timeNow, setTimeNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // 🧠 service status logic (SAFE)
  const getServiceStatus = (item) => {
    // only process items with time data
    if (!item.start || !item.end || !item.bufferEnd || item.day === undefined) {
      return null;
    }

    const now = timeNow;

    const currentDay = now.getDay();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const [startH, startM] = item.start.split(":").map(Number);
    const [endH, endM] = item.end.split(":").map(Number);
    const [bufferH, bufferM] = item.bufferEnd.split(":").map(Number);

    const startTime = startH * 60 + startM;
    const endTime = endH * 60 + endM;
    const bufferEndTime = bufferH * 60 + bufferM;

    if (currentDay !== item.day) return "UPCOMING";

    if (currentTime >= startTime && currentTime <= endTime) {
      return "LIVE";
    }

    if (currentTime > endTime && currentTime <= bufferEndTime) {
      return "ENDED";
    }

    return "UPCOMING";
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero-panel">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="hero-copy__eyebrow">
              Welcome to Rhema Word Embassy Church
            </p>
            <h1>Called to Be Changed, And Become agents of Change.</h1>
            <p className="hero-copy__lead">
              A church family in Roysambu, Nairobi committed to sound teaching,
              prayer, and equipping believers.
            </p>

            <div className="hero-actions">
              <Link className="button button--primary" href="/visit">
                Plan your visit
              </Link>
              <Link className="button button--ghost" href="/about">
                Learn about the church
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual__frame">
              <Image
                src="/images/image.png"
                alt="Church welcome visual"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </section>


      {/* HOST MINISTERS */}
      <section className="section section--compact">
        <div className="shell">
          <div className="host-ministers">
            <p>
              Host Ministers: <strong>Pastor John</strong> & <strong>Mary Mwaura</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT */}
      <section className="section section--compact">
        <div className="shell announcement-card">
          <div>
            <p className="announcement-card__eyebrow">
              {announcement.eyebrow}
            </p>
            <h2>{announcement.title}</h2>
          </div>
          <p>{announcement.details}</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="shell">
          <SectionIntro
            eyebrow="Gather"
            title="Weekly church life"
          />

          <div className="card-grid card-grid--four">
            {serviceTimes.map((item) => {
              const status = getServiceStatus(item);
              const isOnline = !!item.Link;

              return (
                <article className="info-card" key={item.title}>
                  <p className="info-card__kicker">{item.time}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  {/* ONLY for online services */}
                  {isOnline && (
                    <>
                      {/* 🔴 LIVE */}
                      {status === "LIVE" && (
                        <p className="info-card__cta-text live">
                          🔴 Service is LIVE — join now 👇
                        </p>
                      )}

                      {/* ⚫ ENDED */}
                      {status === "ENDED" ? (
                        <p className="info-card__cta-text ended">
                          ⚫ Service has ended
                        </p>
                      ) : (
                        <Link
                          className="info-card__link"
                          href={item.Link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="info-card__link-content">
                            {/* ✅ FIXED ICON */}
                            <svg
                              className="info-card__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                              fill="currentColor"
                            >
                              <path d="M17 10.5V6c0-1.1-.9-2-2-2H3C1.9 4 1 4.9 1 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.5l5 5v-13l-5 5z"/>
                            </svg>

                            <span>Google Meet</span>
                          </span>
                        </Link>
                      )}
                    </>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MINISTRY */}
      <section className="section section--tinted">
        <div className="shell split-grid">
          <div>
            <SectionIntro
              eyebrow="Ministry"
              title="A local house with room to grow"
            />

            <div className="stack-list">
              {ministryHighlights.map((item) => (
                <article className="stack-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="media-card media-card--compact">
            <div className="media-card__image">
              <Image
                src="/images/IMG_1111.jpg"
                alt="Prayer and teaching"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className="cross_logo"
                priority       // 🔥 ensures Next/Image loads it eagerly
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}