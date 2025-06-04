import "./Reviews.css";
import ReviewCard from "./ReviewCard";

function Reviews() {
  return (
    <section id="reviews">
      <h1>Reviews</h1>
      <div className="content">
        <ReviewCard
          name="Monica Alves"
          stars="&#9733;&#9733;&#9733;&#9733;&#9733;"
          review="I wanted to take a moment to shoutout my personal trainer 
          Miguel Hombrebueno for his amazing guidance and support during our
          5 sessions together. His knowledge of fitness, diet, and overall 
          wellness really stood out to me and it was great to learn about the
          how and why behind every move. He set daily goals that helped me stay
          motivated and his positive energy made each session fun! I feel stronger
          and more confident to keep my fitness journey going. Highly recommend."
        />
        <ReviewCard
          name="Veronica Dumas"
          stars="&#9733;&#9733;&#9733;&#9733;&#9733;"
          review="Just shouting out my trainer Miguel. He worked with my friend
          and I to build confidence and form while working out at this facility 
          as both of us have been put off by the gym for YEARS. Both of us are 
          30+ and have had various skeletal muscle injuries and Migueal was great
          at offering us alternative exercises to mitigate exacerbations. He truly 
          has made our reentry into working out smooth and comfortable and I look
          forward to finishing Nursing school and making $$ again so that I can 
          afford more training sessions. I will absolutely book with Miguel in the 
          future! Go Team Nurses!!"
        />
        <ReviewCard
          name="Jesica Wiens"
          stars="&#9733;&#9733;&#9733;&#9733;&#9733;"
          review="Miguel is a great trainer that is go genuine and wants to see you
          improve and hit your goals. He was willing to work with my physio to ensure
          that I had a program that worked for my recovery. I would definitely recommend
          him especially if you are returning to the gym after an injury."
        />
        <ReviewCard
          name="Ruba Fares"
          stars="&#9733;&#9733;&#9733;&#9733;&#9733;"
          review="I've been training with Miguel for the last month and I can't remember 
          the last time I felt this good! I'm getting stronger and stronger every week and
          he's reignited my passion for my workouts! If you are looking for a great trainer
          I can't recommend him more!"
        />
        <ReviewCard
          name="Alex Coley"
          stars="&#9733;&#9733;&#9733;&#9733;&#9733;"
          review="I've been doing personal training sessions under Miguel, and let me tell you,
          he is your best option to help you with your fitness journey. He's knowledgable, 
          personable, and helps you with roadmap where you want to go with your goals. 10/10 would
          highly recommend"
        />
        <ReviewCard
          name="Ronak Salamat"
          stars="&#9733;&#9733;&#9733;&#9733;&#9733;"
          review="I had tandem training sessions with my close friend and Miguel! Miguel was super
          understanding and fun to work with and made coming to the gym a positive experience."
        />
        <ReviewCard
          name="Masi Nouri"
          stars="&#9733;&#9733;&#9733;&#9733;&#9733;"
          review="I have had a very good experience with Miguel, the personal trainer who is very
          keen, energetic and expert in what he does. He knows very well how to motivate to do 
          difficult exercises. The sessions with him goes so fast and I am always looking forward
          to the next one."
        />
        <ReviewCard
          name="Andrea K"
          stars="&#9733;&#9733;&#9733;&#9733;&#9733;"
          review="Just started going to the gym a month ago and my trainer Miguel is absolutely
          amazing. Really appreciate the supportive and informative sessions!"
        />
        <ReviewCard
          name="Ben Chong"
          stars="&#9733;&#9733;&#9733;&#9733;&#9733;"
          review="I recently had the pleasure of working with Miguel as my personal trainer at
          Fitness World, and I can't recommend him enough! From the very beginning, he was professional,
          approachable, and truly invested in helping me achieve my fitness goals. He took the time
          to understand my strengths, weaknesses, and any limitations I had, tailoring each session
          to suit my needs. His expertise in exercise techniques, coupled with his motivational attitude,
          made every workout both challenging nd enjoyable. I'm already seeing progress and feel more 
          confident in my fitness journey thanks to his guidance. If you're looking for a knowledgeable
          and dedicated trainer. Miguel is definitely someone you should work with!"
        />
        <ReviewCard
          name="Marguerite Bauder"
          stars="&#9733;&#9733;&#9733;&#9733;&#9733;"
          review="I found my personal trainer, Miguel Hombrebueno, to be very helpful and supportive 
          and made me feel like a part of the fitness world family. He made me feel comfortable as I 
          had previous gym experiences that led me to not return there. He is a very good person for
          this job."
        />
      </div>
    </section>
  );
}

export default Reviews;
