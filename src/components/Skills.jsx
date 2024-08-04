import React from "react";
const skills = [
  {
    id: 1,
    name: "HTML",
    image: "./port-images/html.png",
  },
  {
    id: 2,
    name: "CSS",
    image: "./port-images/css.png",
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    image: "./port-images/javascript.png",
  },
  {
    id: 4,
    name: "REACT",
    image: "./port-images/react.png",
  },
  {
    id: 5,
    name: "TAILWIND CSS",
    image: "./port-images/tailwind.png",
  },
  {
    id: 6,
    name: "GITHub",
    image: "./port-images/github.png",
  },
  {
    id: 7,
    name: "GIT",
    image: "./port-images/git.png",
  },
];

function Skills() {
  return (
    <>
      <div id="skills-section">
        <h1>My Skills</h1>
        <p>These are the technologies i have worked with.</p>

        <ul>
          {skills.map((skill) => (
            <Skill key={skill.id} photo={skill.image} name={skill.name} />
          ))}
        </ul>
      </div>
      <hr className="custom-hr" />
    </>
  );
}
const Skill = ({ photo, name }) => {
  console.log(photo);
  return (
    <li className="skill-lists">
      <img src={photo} alt={name} />
      <h4>{name}</h4>
    </li>
  );
};
export default Skills;
