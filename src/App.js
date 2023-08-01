import Header from "./components/Header/Header";
import ResultTable from "./components/ResultTable/ResultTable";
import Form from "./components/Form/Form";
import React, {useState} from "react";

function App() {


  
  const [finalRes, setFinalRes] = useState([])
  const calculateHandler = (userInput) => {
    const yearlyData = []; 
    
    let currentSavings = +userInput["currentSaving"]; 
    const yearlyContribution = +userInput["yearlySaving"];
    const expectedReturn = +userInput["expectedInterest"] / 100;
    const duration = +userInput["interestDuration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
    setFinalRes(yearlyData)
  };


  const noRecordFound = <p className="no-record">No Investment record is found!</p>
  return (
    <div>
      <Header/>
      <Form onGetEnteredValue={calculateHandler}/>

      {finalRes.length === 0 && noRecordFound}
      {finalRes.length > 0 && <ResultTable  items={finalRes}/>}
     
    </div>
  );
}

export default App;

