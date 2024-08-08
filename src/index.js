import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="image_react.jpg" alt="Reaching for the sun" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Mario Crezzulinni</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        quibusdam sunt consectetur soluta magni aspernatur recusandae distinctio
        error.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((respectiveSkill) => (
        <Skill
          skillName={respectiveSkill.skill}
          skillLevel={respectiveSkill.level}
          skillColor={respectiveSkill.color}
        />
      ))}
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.skillColor }}>
      <span>{props.skillName}</span>
      <span>
        {props.skillLevel === "advanced"
          ? "💪"
          : props.skillLevel === "intermediate"
          ? "👍"
          : "👶"}
      </span>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
