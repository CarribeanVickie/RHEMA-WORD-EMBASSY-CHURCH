export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/visit", label: "Visit" }
];


export const announcement = {
  eyebrow: "This week",
  title: "Join us for worship, prayer, and Bible exposition in Roysambu.",
  details: "Tuesday Prayer Hour at 5:30 PM, Thursday Service at 5:30 PM, and Sunday Worship from 11:00 AM to 1:00 PM."
};

export const serviceAdvert = {
  title: "Current service advert",
  embedUrl: "https://www.youtube.com/embed/GOBFjjoj5-I",
  watchUrl: "https://youtube.com/live/GOBFjjoj5-I?feature=share",
  thumbnailUrl: "https://img.youtube.com/vi/GOBFjjoj5-I/maxresdefault.jpg"
};

export const serviceTimes = [
  {
    title: "Sunday Worship Service",
    time: "Every Sunday, 11:00 AM - 1:00 PM",
    text: "Gather for worship, Bible exposition, prayer, and fellowship as a church family."
  },
  {
    title: "Tuesday Prayer Hour",
    time: "Every Tuesday, 5:30 PM - 7:00 PM",
    text: "A focused time of intercession and standing together in prayer."
  },
  {
    title: "Tuesday Online Prayer Hour",
    day: 2, // 0=Sunday, 1=Monday, 2=Tuesday...
    start: "21:00",
    end: "21:30",
    bufferEnd: "22:00", // when "ENDED" stops showing
    time: "Every Tuesday, 9:00 PM - 9:30 PM",
    text: "A focused time of intercession and standing together in prayer.",
    Link: "https://meet.google.com/ctu-ajks-msu"
  },
  {
    title: "Thursday Service",
    time: "Every Thursday, 5:30 PM - 7:00 PM",
    text: "Midweek teaching and encouragement rooted in the Word."
  },
  {
    title: "Friday Deborah Service",
    time: "Every Friday, 4:00 PM - 5:30 PM",
    text: "A gathering centered on ministry, strengthening, and fellowship."
  },
  {
    title: "Friday C.R.O.S.S Service",
    day: 5,
    start: "21:00",
    end: "21:40",
    bufferEnd: "22:00",
    time: "Every Friday, 9:00 PM - 9:40 PM",
    text: "A weekly online service focused on teaching.",
    Link: "https://meet.google.com/zjz-bjpj-bjk"
  },
];

export const ministryHighlights = [
  {
    title: "Word and Doctrine",
    text: "Teaching that helps believers grow in truth, purpose, and Kingdom living."
  },
  {
    title: "Prayer and Fellowship",
    text: "Regular gatherings that strengthen faith, unity, and spiritual formation."
  },
  {
    title: "Children Ministry",
    text: "A welcoming space for children to learn, worship, and grow in Christ."
  }
];

export const aboutBlocks = [
  {
    title: "Vision",
    text: "To be changed by Truth and become agents of change in our generation."
  },
  {
    title: "Mission",
    text: "To declare, communicate, share, and demonstrate the purpose, power, and principles of the Kingdom of God to every nation."
  },
  {
    title: "Mission Strategy",
    text: "We focus on accurate ministry assignment, strong leadership, a well-fed flock, environmental influence, and reaching both the world and the body of Christ."
  }
];

export const leadershipPrinciples = [
  "Accurate focus on the church assignment given by Jesus Christ.",
  "Strong leadership developed through training and discipleship.",
  "Feeding the flock with sound doctrine and spiritual stability.",
  "Influencing the environment through transformed lives.",
  "Reaching the world through outreach and faithful witness.",
  "Equipping the body of Christ through teaching and training."
];

export const resourceSections = [
  {
    title: "Books",
    eyebrow: "Library",
    description: "Printed and downloadable book resources will appear here once they are prepared.",
    emptyState: "Currently not available"
  },
  {
    title: "Sunday Sermons / Services",
    eyebrow: "Sunday archive",
    description: "THEME: LAUNCHING INTO THE DEEP (L.I.T.D)",
    description2: "Click the links below to watch or listen to past sermons and services.",
    items: [
      { label: "L.I.T.D PART 10 (2ND SESSION)", href: "https://youtube.com/live/GOBFjjoj5-I?feature=share" },
      { label: "L.I.T.D PART 10 (1ST SESSION)", href: "https://youtube.com/live/Ns4Tk0-yvbE?feature=share" },
      { label: "L.I.T.D PART 09 (2ND SESSION)", href: "https://youtube.com/live/2LCZ_c-cFng?feature=share" },
      { label: "L.I.T.D PART 09 (1ST SESSION)", href: "https://youtube.com/live/Wu9wVffpmJ8?feature=share" }
    ]
  },
  {
    title: "C.R.O.S.S Online Service",
    eyebrow: "Friday online service",
    description: "Every Friday from 9:00 PM to 9:40 PM.",
    items: [
      { label: "C.R.O.S.S Service VOL 065", href: "https://youtu.be/AyaQ2C-wFGU" },
      { label: "C.R.O.S.S Service VOL 064", href: "https://youtu.be/74G5WnoEf1o" },
      { label: "C.R.O.S.S Service VOL 063", href: "https://youtu.be/5ReQeO6yKX0" },
      { label: "C.R.O.S.S Service VOL 062", href: "https://youtu.be/KcoyfYxs6Mw" }
    ]
  }
];

export const socialLinks = [
  { href: "https://www.facebook.com/profile.php?id=61554704211443", label: "Facebook" },
  { href: "https://www.instagram.com/the_rhema_word_embassy_church?igsh=Njl0NXJna3FucjJp", label: "Instagram" },
  { href: "https://youtube.com/@the_rhema_word_embassy_church?si=z9ikbroTLyJ4PCh5", label: "YouTube" },
  { href: "https://www.tiktok.com/@the_rhema_word_embassy_c?_r=1&_t=ZS-94s3fPq741S", label: "TikTok" }
];

export const contactDetails = {
  phone: "+254 721720660",
  email: "therhemawordembassy@gmail.com",
  location: "Roysambu, Nairobi",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d853.0991035165357!2d36.88822476951375!3d-1.2158573591200474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f0d512790a7%3A0xa380687f76493ea5!2sTHE%20RHEMA%20WORD%20EMBASSY%20CHURCH%2C%20ROYSAMBU%20SANCTUARY!5e1!3m2!1sen!2ske!4v1681474433118!5m2!1sen!2ske"
};

export const givingDetails = {
  paybill: "247247",
  account: "720660",
  note: "Use this channel for giving and contributions. Specific giving notes such as tithes, offerings, or project support can be added here later."
};
