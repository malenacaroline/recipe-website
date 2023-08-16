import React from 'react';
import { useTrail, animated } from 'react-spring';

function About() {
  const sectionProps = useTrail(4, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { mass: 1, tension: 280, friction: 18 },
  });

  const sections = [
    {
      title: 'About Us',
      content: 'Welcome to our culinary world! We are passionate food enthusiasts on a mission to share our love for cooking...',
      image: '/images/about-us.jpg',
    },
    {
      title: 'Our Story',
      content: 'Our journey began with a simple idea: to create a platform where food lovers from around the globe can connect...',
      image: '/images/our-story.jpg',
    },
    {
      title: 'Our Mission',
      content: 'We are committed to spreading the joy of cooking and inspiring people to explore new flavors, experiment with ingredients...',
      image: '/images/our-mission.jpg',
    },
    {
      title: 'Meet the Team',
      content: 'Our team is a diverse group of food enthusiasts, chefs, writers, and photographers who share a common love for culinary arts...',
      image: '/images/meet-the-team.jpg',
    },
  ];

  return (
    <div className="container">
      <div className="about-grid">
        {sections.map((section, index) => (
          <animated.section key={index} className="about-section" style={sectionProps[index]}>
            <div className="about-image">
              <img src={section.image} alt={section.title} />
            </div>
            <div className="about-content">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          </animated.section>
        ))}
      </div>
    </div>
  );
}

export default About;
