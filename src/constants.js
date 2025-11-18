import Hero from "./sections/hero/Hero";
import Bio from "./sections/bio/Bio";
import Packages from "./sections/packages/Packages";
import Contacts from "./sections/contacts/Contacts";
import Reviews from "./sections/reviews/Reviews";
import Certifications from "./sections/certifications/Certifications";

export const BUSINESS_NAME = "Ignite Fitness";

export const SECTIONS = [
  {
    component: Hero,
    id: "Hero",
    title: "",
  },
  {
    component: Bio,
    id: "Bio",
    title: "Bio",
  },
  {
    component: Packages,
    id: "Packages",
    title: "Packages",
  },
  {
    component: Contacts,
    id: "Contacts",
    title: "Contacts",
  },
  {
    component: Reviews,
    id: "Reviews",
    title: "Reviews",
  },
  {
    component: Certifications,
    id: "Certifications",
    title: "Certifications",
  },
];

export const PACKAGES = [
  // {
  //   id: "gold-package",
  //   title: "Gold",
  //   icon: "/imgs/ranks/gold-rank.webp",
  //   rewards: ["8 Week Program PDF", "Weight Loss PDF", "Muscle Gain PDF"],
  //   payment: "One Time Purchase",
  //   durations: ["One Time Purchase"],
  //   prices: [80],
  // },
  // {
  //   id: "platinum-package",
  //   title: "Platinum",
  //   icon: "/imgs/ranks/platinum-rank.webp",
  //   rewards: [
  //     "Online Consultation",
  //     "Online Training",
  //     "Trainerize Program",
  //     "Nutrition Plan",
  //     "Habit Tracking",
  //     "Weekly Check-ins",
  //   ],
  //   payment: "Monthly Payments",
  //   durations: ["3 Months", "6 Months"],
  //   prices: [1500, 2500],
  // },
  {
    id: "diamond-package",
    title: "Diamond",
    icon: "/imgs/ranks/diamond-rank.webp",
    rewards: [
      "Mindset Mastery",
      "Traning Plan",
      "Nutrition Plan",
      "Lifestyle Habits and Accountability",
      "Like-Minded Community",
      "Premium Access to Me",
    ],
    num_months_duration: 3,
    prices: [
      { price: 1800, payments: 2 },
      { price: 2000, payments: 3 },
      { price: 1500, payments: 1 },
    ],
  },
  {
    id: "master-package",
    title: "Master",
    icon: "/imgs/ranks/master-rank.webp",
    rewards: [
      "Mindset Mastery",
      "Traning Plan",
      "Nutrition Plan",
      "Lifestyle Habits and Accountability",
      "Like-Minded Community",
      "Premium Access to Me",
    ],
    num_months_duration: 6,
    prices: [
      { price: 3000, payments: 2 },
      { price: 3300, payments: 3 },
      { price: 2500, payments: 1 },
    ],
  },
];

export const ADD_ONS = [
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

export const CONTACTS = [
  {
    id: "calendly",
    icon: "/icons/calendly.svg",
    text: "Book Coaching Consultation",
    link: "https://calendly.com/ignitefitness-mh/new-client-consultation",
  },
  {
    id: "email",
    icon: "/icons/email.svg",
    text: "ignitefitness.mh@yahoo.com",
    link: "mailto:ignitefitness.mh@yahoo.com",
  },
  {
    id: "instagram",
    icon: "/icons/instagram.svg",
    text: "ignite.fitness.mh",
    link: `https://www.instagram.com/ignite.fitness.mh`,
  },
  {
    id: "tiktok",
    icon: "/icons/tiktok.svg",
    text: "ignite.fitness.mh",
    link: "https://www.tiktok.com/@ignite.fitness.mh",
  },
];

export const REVIEWS = [
  {
    name: "Pete Chen",
    numStars: 5,
    text: `I've worked with a handful of personal trainers over the years, but Miguel is hands down the best trainer I've ever had.\n
Not only is he incredibly knowledgeable (he really knows his anatomy, biomechanics, exercise physiology, but he actually applies it in ways that's made a real difference to help me improve my knowledge and confidence in lifting.\n
For example, if I'm trying to target quads on the leg press but my foot position is actually shifting the load onto my hamstrings/glutes, he's quick to catch and correct it and I get that immediate feedback which is amazing. Or, when he notices I'm not getting enough time under tension on a lift, he'll cue me to slow down the eccentric or hold the contraction.\n
I've been working with him for hypertrophy training, and he's built a solid program for me where I've seen actual results. Within 6 months I've gained nearly 10 lbs of lean muscle and even lost a few body fat % along the way (which wasn't even my goal, but he's been awesome with nutrition/supplementation coaching too).\n
I originally just wanted to make it to the gym twice a week, which to me 6 months ago was already daunting. Now I’m going 4-5x/week, feeling strong and looking much better in the mirror, and genuinely looking forward to the gym because of how motivating and encouraging he is.\n
I really can't say enough good things about Miguel. I mean, he's one of the most popular/requested/booked up personal trainers at fitness world (if not the most popular) for a good reason!`,
  },

  {
    name: "Ruba Fares",
    numStars: 5,
    text: `I've been training with Miguel for the last month and I can't remember the last time I felt this good! I'm getting stronger and stronger every week and he's reignited my passion for my workouts! If you are looking for a great trainer I can't recommend him more!`,
  },
  {
    name: "Monica Alves",
    numStars: 5,
    text: `I wanted to take a moment to shoutout my personal trainer Miguel Hombrebueno for his amazing guidance and support during our 5 sessions together. His knowledge of fitness, diet, and overall wellness really stood out to me and it was great to learn about the how and why behind every move. He set daily goals that helped me stay motivated and his positive energy made each session fun! I feel stronger and more confident to keep my fitness journey going. Highly recommend.`,
  },
  {
    name: "Veronica Dumas",
    numStars: 5,
    text: `Just shouting out my trainer Miguel. He worked with my friend and I to build confidence and form while working out at this facility as both of us have been put off by the gym for YEARS. Both of us are 30+ and have had various skeletal muscle injuries and Migueal was great at offering us alternative exercises to mitigate exacerbations. He truly has made our reentry into working out smooth and comfortable and I look forward to finishing Nursing school and making $$ again so that I can afford more training sessions. I will absolutely book with Miguel in the future! Go Team Nurses!!`,
  },
  {
    name: "Jesica Wiens",
    numStars: 5,
    text: `Miguel is a great trainer that is go genuine and wants to see you improve and hit your goals. He was willing to work with my physio to ensure that I had a program that worked for my recovery. I would definitely recommend him especially if you are returning to the gym after an injury.`,
  },
  {
    name: "Alex Coley",
    numStars: 5,
    text: `I've been doing personal training sessions under Miguel, and let me tell you, he is your best option to help you with your fitness journey. He's knowledgable, personable, and helps you with roadmap where you want to go with your goals. 10/10 would highly recommend`,
  },
  {
    name: "Ronak Salamat",
    numStars: 5,
    text: `I had tandem training sessions with my close friend and Miguel! Miguel was super understanding and fun to work with and made coming to the gym a positive experience.`,
  },
  {
    name: "Masi Nouri",
    numStars: 5,
    text: `I have had a very good experience with Miguel, the personal trainer who is very keen, energetic and expert in what he does. He knows very well how to motivate to do difficult exercises. The sessions with him goes so fast and I am always looking forward to the next one.`,
  },
  {
    name: "Andrea K",
    numStars: 5,
    text: `Just started going to the gym a month ago and my trainer Miguel is absolutely amazing. Really appreciate the supportive and informative sessions!`,
  },
  {
    name: "Ben Chong",
    numStars: 5,
    text: `I recently had the pleasure of working with Miguel as my personal trainer at Fitness World, and I can't recommend him enough! From the very beginning, he was professional, approachable, and truly invested in helping me achieve my fitness goals. He took the time to understand my strengths, weaknesses, and any limitations I had, tailoring each session to suit my needs. His expertise in exercise techniques, coupled with his motivational attitude, made every workout both challenging nd enjoyable. I'm already seeing progress and feel more confident in my fitness journey thanks to his guidance. If you're looking for a knowledgeable and dedicated trainer. Miguel is definitely someone you should work with!`,
  },
  {
    name: "Marguerite Bauder",
    numStars: 5,
    text: `I found my personal trainer, Miguel Hombrebueno, to be very helpful and supportive and made me feel like a part of the fitness world family. He made me feel comfortable as I had previous gym experiences that led me to not return there. He is a very good person for this job.`,
  },
];

export const CERTIFICATIONS = [
  {
    title: "Bachelor of Kinesiology",
    img: "/imgs/certifications/ubc-certificate.jpg",
  },
  {
    title: "Certified Personal Trainer",
    img: "/imgs/certifications/certified-personal-trainer.jpg",
  },
  {
    title: "Certified Nutrition Coach",
    img: "/imgs/certifications/certified-nutrition-coach.jpg",
  },
  {
    title: "Stretching & Flexibilty Coach",
    img: "/imgs/certifications/stretch-flexibility-coach.jpg",
  },
];
