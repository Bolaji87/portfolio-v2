import React from "react";

const mySkills = [
  {
    name: "HTML",
    id: crypto.randomUUID(),
    photo: "./port-images/html.png",
  },

  {
    name: "CSS",
    id: crypto.randomUUID(),
    photo: "./port-images/css.png",
  },
  {
    name: "Javascript",
    id: crypto.randomUUID(),
    photo: "./port-images/javascript.png",
  },
  {
    name: "React",
    id: crypto.randomUUID(),
    photo: "./port-images/react.png",
  },
  {
    name: "Git",
    id: crypto.randomUUID(),
    photo: "./port-images/git.png",
  },
  {
    name: "Github",
    id: crypto.randomUUID(),
    photo: "./port-images/github.png",
  },
  {
    name: "Tailwind CSS",
    id: crypto.randomUUID(),
    photo: "./port-images/tailwind.png",
  },
];
function Skills() {
  console.log(mySkills);
  return (
    <div id="skills-section">
      <h1>My Skills</h1>
      <p>These are the technologies i have worked with so far</p>
      <ul>
        {mySkills.map((skill) => (
          <Skill key={skill.id} name={skill.name} image={skill.photo} />
        ))}
      </ul>
    </div>
  );
}

function Skill({ name, image }) {
  return (
    <li className="skill-lists">
      <img src={image} alt={name} />
      <h4>{name}</h4>
    </li>
  );
}
export default Skills;
