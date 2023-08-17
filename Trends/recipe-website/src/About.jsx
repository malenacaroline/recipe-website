import React from "react";
import { useTrail, animated } from "react-spring";

function About() {
  const sectionProps = useTrail(4, {
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { mass: 1, tension: 280, friction: 18 },
  });

  const sections = [
    {
      title: "About Us",
      content:
        "Welcome to CulinaryDelights, a captivating culinary haven that invites you to embark on a delightful journey through the realm of gastronomy. As passionate food enthusiasts, we have curated this space to be your ultimate go-to destination, where your taste buds will dance to the symphony of flavors, and your culinary curiosity will find its perfect sanctuary. \n At CulinaryDelights, we believe that cooking is not merely a task; it's an art form that allows you to create masterpieces that tantalize both the palate and the soul. Whether you're taking your first steps in the culinary world or you're a seasoned connoisseur, our platform has been thoughtfully crafted to cater to all levels of expertise. We understand that the kitchen is your canvas, and our goal is to provide you with the brushes of inspiration to paint delectable creations. Our commitment to excellence resonates in every facet of our endeavor. From the selection of recipes that span continents, cultures, and cravings, to the meticulous detail in our step-by-step guides that ensure your success, we strive to be your trusted companion in your culinary exploits. We not only celebrate the end result, but we also revel in the journey that each dish takes, from raw ingredients to the moment it graces your table.",
      image: "/images/about.jpg",
    },
    {
      title: "Our Story",
      content:
        "CulinaryDelights began its remarkable journey as a modest kitchen experiment, ignited by a flicker of curiosity that soon blazed into an all-encompassing passion project. The visionary mind behind this culinary marvel is none other than [Founder's Name], a dedicated culinary enthusiast driven by an insatiable appetite for creating and savoring exceptional flavors. Emily's adventure took flight with a fervent desire to craft a haven where individuals who share an unwavering love for food could congregate, exchange knowledge, and weave stories around their shared culinary adventures. What initially unfolded as a personal exploration soon metamorphosed into a dynamic online haven - a hub pulsating with life and bubbling with creativity - where the heartwarming aroma of freshly cooked dishes and the thrill of culinary discoveries intertwine. The genesis of CulinaryDelights was marked by Emily's resolute commitment to crafting a sanctuary that bridges the gap between novices taking their first culinary steps and seasoned gastronomes aiming to push the boundaries of their expertise. The foundation was built on the pillars of inspiration, learning, and community engagement. Every recipe, every tip, and every anecdote shared on this platform is a testament to Emily's unwavering vision. As Emily's culinary odyssey flourished, so did the CulinaryDelights community. What was once a solitary pursuit evolved into an exuberant congregation of like-minded souls, bonded by their shared passion for gastronomy. The platform emerged as a tapestry woven with diverse voices, each thread contributing to the vibrant mosaic of culinary experiences. At CulinaryDelights, we celebrate the sublime artistry of cooking - a blend of science and intuition, precision and experimentation. We cherish the moments of triumph and embrace the lessons from the occasional missteps, recognizing that every kitchen endeavor is an opportunity for growth. It's a virtual kitchen table where both beginners and experts gather to not only exchange recipes but also to share the stories that each dish tells, the memories they evoke, and the joy they bring.",
      image: "/images/our-story.jpg",
    },
    {
      title: "Our Mission",
      content:
        "At CulinaryDelights, our mission is to empower and inspire individuals to embrace their inner chef and explore the world of gastronomy. We believe that cooking is more than just preparing meals; it's a form of self-expression that brings people together. Through our curated recipes, cooking tips, and engaging content, we aim to make the culinary journey accessible to everyone, irrespective of their skill level. We're passionate about fostering a community where culinary enthusiasts can learn, grow, and share their unique perspectives.\n Nurtured by our unwavering belief in the power of culinary exploration, CulinaryDelights is dedicated to creating a welcoming space where culinary enthusiasts of all backgrounds can embark on a journey of self-discovery through the art of cooking.\nAt the heart of our endeavor at CulinaryDelights lies a fervent mission: to provide a platform where individuals can not only master the art of cooking but also uncover a new dimension of self-expression and togetherness.\n But CulinaryDelights is more than just a repository of recipes; it's a thriving community where culinary aficionados converge to learn, exchange insights, and grow together. We're captivated by the kaleidoscope of perspectives that our community members bring, each adding a unique hue to the tapestry of flavors we celebrate. It's a place where culinary enthusiasts, no matter their background or experience, find a space to kindle their passion, broaden their culinary horizons, and share the magic they create in their kitchens.",
      image: "/images/our-mission.jpg",
    },
    {
      title: "Meet the Team",
      content:
        "Behind the scenes of CulinaryDelights is a dedicated team of food enthusiasts, culinary experts, photographers, and writers who work tirelessly to bring you exceptional content. Allow us to introduce some of the faces behind the flavors:",
      teamMembers: [
        {
          name: "Emily Johnson",
          role: "Founder & Head Chef",
          description:
            "With a lifelong passion for cooking, Emily brings creativity and expertise to every recipe shared on our platform.",
          image: "/images/member1.jpg",
        },
        {
          name: "Alexander Martinez",
          role: "Culinary Curator",
          description:
            "Alexander scours the culinary world for the most exciting and innovative recipes, ensuring that our collection remains diverse and engaging.",
          image: "/images/member2.jpg",
        },
        {
          name: "Olivia Williams",
          role: "Food Photographer",
          description:
            "A master of capturing food's essence, Olivia skillfully translates flavors into mesmerizing visuals that inspire you to get cooking.",
          image: "/images/member3.jpg",
        },
        {
          name: "Ethan Thompson",
          role: "Content Writer",
          description:
            "Ethan crafts compelling stories, cooking guides, and informative articles, enhancing your culinary experience beyond the kitchen.",
          image: "/images/member4.jpg",
        },
      ],
    },
  ];

  return (
    <div className="container about-container">
      <div className="about-grid">
        {sections.map((section, index) => (
          <animated.section
            key={index}
            className="about-section"
            style={sectionProps[index]}
          >
            {section.image && (
              <div className="about-image">
                <img src={section.image} alt={section.title} />
              </div>
            )}
            <div className="about-content">
              <h2 className="text-warning text-center my-4">{section.title}</h2>
              <p>{section.content}</p>
              {section.teamMembers && (
                <div className="team-members-section">
                  {section.teamMembers.map((member, memberIndex) => (
                    <div className="team-member-details" key={memberIndex}>
                      <img src={member.image} alt={member.name} />
                      <div>
                        <h5 className="text-secondary text-center">
                          {member.name}
                        </h5>
                        <p className="text-secondary text-center">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </animated.section>
        ))}
      </div>
    </div>
  );
}

export default About;
