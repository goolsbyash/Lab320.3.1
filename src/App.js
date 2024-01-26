import { learnerData } from "./data/learnerData";
import Learner from "./Components/Learner";
import { useState } from "react";

function App() {
  const [learners, setLearners] = useState(learnerData);

  return (
    <div className="learner-app">
      <h1> Learner App</h1>
      <Learner learners={learners}/>
    </div>
  );
}

export default App;
