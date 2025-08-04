export const BUSINESS_NAME = "Pivotal Fitness";

export const BUSINESS_EMAIL = "pivotal.fitness@yahoo.com";

export const BUSINESS_INSTAGRAM = "pivotal.fitness_";
export const INSTAGRAM_LINK = "https://www.instagram.com/pivotal.fitness_/";

export const BUSINESS_TIKTOK = "pivotal.fitness_";
export const TIKTOK_LINK = "https://www.tiktok.com/@pivotal.fitness_";

export const bioText = [
  `I am a UBC Kinesiology graduate, competitive powerlifter, certified
   personal trainer, and more. But I didn’t start here...  `,

  `Growing up, I struggled with confidence, especially as one of the
   shortest guys in the room. After suffering an injury that left me
   sidelined, I felt even more disconnected from my body and unsure of
   myself. That’s when I found the gym. What started as rehab turned into
   a lifelong passion. Lifting gave me more than physical strength, it
   helped me rebuild my mindset and redefine what it meant to feel powerful.`,

  `Through powerlifting, I found confidence, resilience, and a community
   that thrives on progress over perfection. Now, I coach with that same
   mindset: helping others overcome self-doubt, bounce back from injury,
   and build lasting strength—physically and mentally.`,

  `Whether you are just starting or chasing your next PR, I’ll help you
   train with purpose, backed by science and real experience. No matter
   your size, background, or starting point, everyone deserves to feel
   strong in their own body.`,
];

export const packages = [
  {
    id: "gold",
    title: "Gold",
    icon: "/imgs/ranks/gold-rank.webp",
    rewards: ["8 Week Program PDF", "Weight Loss PDF", "Muscle Gain PDF"],
    payment: "One Time Purchase",
    durations: ["One Time Purchase"],
    prices: [80],
  },
  {
    id: "platinum",
    title: "Platinum",
    icon: "/imgs/ranks/platinum-rank.webp",
    rewards: [
      "Online Consultation",
      "Online Training",
      "Trainerize Program",
      "Nutrition Plan",
      "Habit Tracking",
      "Weekly Check-ins",
    ],
    payment: "Monthly Payments",
    durations: ["1 Month", "2 Months"],
    prices: [300, 550],
  },
  {
    id: "diamond",
    title: "Diamond",
    icon: "/imgs/ranks/diamond-rank.webp",
    rewards: [
      "Packaged Payments",
      "In-Person Consultation",
      "In-Person Training",
      "Trainerize Program",
      "Nutrition Plan",
      "Habit Tracking",
      "Weekly Check-ins",
    ],
    payment: "Paid in Full",
    durations: ["6 Sessions", "12 Sessions", "24 Sessions"],
    prices: [510, 960, 1800],
  },
  {
    id: "master",
    title: "Master",
    icon: "/imgs/ranks/master-rank.webp",
    rewards: [
      "Weekly Payments",
      "In-Person Consultation",
      "In-Person Training",
      "Trainerize Program",
      "Nutrition Plan",
      "Habit Tracking",
      "Weekly Check-ins",
    ],
    payment: "Weekly Payments",
    durations: ["1x per week", "2x per week", "3x per week", "4x per week"],
    prices: [90, 170, 240, 300],
  },
];

export const addOns = [
  {
    id: "consultation",
    title: "30 Minute Consultation",
    sessions: [1],
    prices: ["Free"],
  },
  {
    id: "stretching",
    title: "30 Minute Assisted Stretching Session",
    sessions: [1, 4],
    prices: ["$30", "$100"],
  },
  {
    id: "nutrition",
    title: "30 Minute Nutrition Consultation",
    sessions: [1],
    prices: ["$25"],
  },
];
