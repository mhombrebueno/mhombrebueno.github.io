import "./Reviews.css";

import ReviewCard from "../../components/review-card/ReviewCard";
import Section from "../Section";

function Reviews(props) {
  return (
    <Section {...props}>
      <ReviewCard
        name="Pete Chen"
        numStars={5}
        review={[
          `I've worked with a handful of personal trainers over the years, but Miguel is hands 
            down the best trainer I've ever had.`,

          `Not only is he incredibly knowledgeable (he really knows his anatomy, biomechanics, 
            exercise physiology, but he actually applies it in ways that's made a real difference 
            to help me improve my knowledge and confidence in lifting.`,

          `For example, if I'm trying to target quads on the leg press but my foot position 
            is actually shifting the load onto my hamstrings/glutes, he's quick to catch and 
            correct it and I get that immediate feedback which is amazing. Or, when he notices 
            I'm not getting enough time under tension on a lift, he'll cue me to slow down the 
            eccentric or hold the contraction.`,

          `I've been working with him for hypertrophy training, and he's built a solid program 
            for me where I've seen actual results. Within 6 months I've gained nearly 10 lbs of 
            lean muscle and even lost a few body fat % along the way (which wasn't even my goal, 
            but he's been awesome with nutrition/supplementation coaching too).`,

          `I originally just wanted to make it to the gym twice a week, which to me 6 months 
            ago was already daunting. Now I’m going 4-5x/week, feeling strong and looking much
            better in the mirror, and genuinely looking forward to the gym because of how 
            motivating and encouraging he is.`,

          `I really can't say enough good things about Miguel. I mean, he's one of the most 
            popular/requested/booked up personal trainers at fitness world (if not the most popular) 
            for a good reason!`,
        ]}
      />
      <ReviewCard
        name="Ruba Fares"
        numStars={5}
        review={[
          `I've been training with Miguel for the last month and I can't remember 
            the last time I felt this good! I'm getting stronger and stronger every week and
            he's reignited my passion for my workouts! If you are looking for a great trainer
            I can't recommend him more!`,
        ]}
      />
      <ReviewCard
        name="Monica Alves"
        numStars={5}
        review={[
          `I wanted to take a moment to shoutout my personal trainer Miguel Hombrebueno 
            for his amazing guidance and support during our 5 sessions together. His knowledge 
            of fitness, diet, and overall wellness really stood out to me and it was great to 
            learn about the how and why behind every move. He set daily goals that helped me stay
            motivated and his positive energy made each session fun! I feel stronger and more 
            confident to keep my fitness journey going. Highly recommend.`,
        ]}
      />
      <ReviewCard
        name="Veronica Dumas"
        numStars={5}
        review={[
          `Just shouting out my trainer Miguel. He worked with my friend
            and I to build confidence and form while working out at this facility 
            as both of us have been put off by the gym for YEARS. Both of us are 
            30+ and have had various skeletal muscle injuries and Migueal was great
            at offering us alternative exercises to mitigate exacerbations. He truly 
            has made our reentry into working out smooth and comfortable and I look
            forward to finishing Nursing school and making $$ again so that I can 
            afford more training sessions. I will absolutely book with Miguel in the 
            future! Go Team Nurses!!`,
        ]}
      />
      <ReviewCard
        name="Jesica Wiens"
        numStars={5}
        review={[
          `Miguel is a great trainer that is go genuine and wants to see you
            improve and hit your goals. He was willing to work with my physio to ensure
            that I had a program that worked for my recovery. I would definitely recommend
            him especially if you are returning to the gym after an injury.`,
        ]}
      />
      <ReviewCard
        name="Alex Coley"
        numStars={5}
        review={[
          `I've been doing personal training sessions under Miguel, and let me tell you, he is 
            your best option to help you with your fitness journey. He's knowledgable, personable,
            and helps you with roadmap where you want to go with your goals. 10/10 would highly 
            recommend`,
        ]}
      />
      <ReviewCard
        name="Ronak Salamat"
        numStars={5}
        review={[
          `I had tandem training sessions with my close friend and Miguel! Miguel was super 
            understanding and fun to work with and made coming to the gym a positive experience.`,
        ]}
      />
      <ReviewCard
        name="Masi Nouri"
        numStars={5}
        review={[
          `I have had a very good experience with Miguel, the personal trainer who is very
             keen, energetic and expert in what he does. He knows very well how to motivate to do 
             difficult exercises. The sessions with him goes so fast and I am always looking forward
             to the next one.`,
        ]}
      />
      <ReviewCard
        name="Andrea K"
        numStars={5}
        review={[
          `Just started going to the gym a month ago and my trainer Miguel is absolutely
            amazing. Really appreciate the supportive and informative sessions!`,
        ]}
      />
      <ReviewCard
        name="Ben Chong"
        numStars={5}
        review={[
          `I recently had the pleasure of working with Miguel as my personal trainer at Fitness 
            World, and I can't recommend him enough! From the very beginning, he was professional,
            approachable, and truly invested in helping me achieve my fitness goals. He took the time
            to understand my strengths, weaknesses, and any limitations I had, tailoring each session
            to suit my needs. His expertise in exercise techniques, coupled with his motivational 
            attitude, made every workout both challenging nd enjoyable. I'm already seeing progress 
            and feel more confident in my fitness journey thanks to his guidance. If you're looking 
            for a knowledgeable and dedicated trainer. Miguel is definitely someone you should work
            with!`,
        ]}
      />
      <ReviewCard
        name="Marguerite Bauder"
        numStars={5}
        review={[
          `I found my personal trainer, Miguel Hombrebueno, to be very helpful and supportive 
            and made me feel like a part of the fitness world family. He made me feel comfortable as I 
            had previous gym experiences that led me to not return there. He is a very good person for
            this job.`,
        ]}
      />
    </Section>
  );
}

export default Reviews;
