import React from "react";

export default function App() {
    const [skill, setSkill] = React.useState("");
    const [skills, setSkills] = React.useState(["HTML", "CSS", "JavaScript"]);
function handleChangeInput(event) {
    setSkill(event.target.value);
    } 
    function handleAddSkill() {
    setSkills(skills.concat(skill));
    } 
    const handleRemoveSkill = React.useCallback((skill) => {
    setSkills(skills.filter((s) => s !== skill));
    }, [skills])
    return (
    <>
    <input onChange={handleChangeInput} />
    <button onClick={handleAddSkill}>Add Skill</button>
    <SkillList skills={skills} handleRemoveSkill={handleRemoveSkill} />
    </>
    );
    } 
    const SkillList = React.memo(({ skills, handleRemoveSkill }) => {
    console.log('re-rendered whenever parent state is updated!')
    return (
    <ul>
    {skills.map((skill) => (
    <li key={skill} onClick={() => handleRemoveSkill(skill)}>
    {skill}
    </li>
    ))}
    </ul>
    );
    });
