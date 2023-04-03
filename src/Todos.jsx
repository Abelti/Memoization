import { memo } from "react";

const Todos = ({ todoState }) => {
    console.log("Yemtseraw sera alek");
    return (
    <>
        <h2>My Todos</h2>
        {todoState.map((todo, index) => {
        return <p key={index}>{todo}</p>;
        })}
    </>
    );
};

//export default Todos;

export default memo(Todos)