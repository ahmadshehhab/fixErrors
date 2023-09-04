import { useState } from "react";
export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });
  /* we cant write player.score++ this is not how we use state we should use setPlayer to set data */
  const handlePlusClick = () =>{
    setPlayer({
      ...player,
      score:player.score + 1
    })
  }
  const handleFirstNameChange =(e) =>{
    setPlayer({
      ...player,
      firstName : e.target.value
    })
  }
  /* handleLastNameChange : if we just write setPlayer({lastName:e.target.value}) we will remove all data in object and put lastName which is what we dont want */
  const handleLastNameChange = (e) => {
    setPlayer({
      ...player,
      lastName:e.target.value
    })
    
  }
  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
