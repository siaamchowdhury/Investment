import CalculateButton from '../Button/Calculate'
import ResetButton from '../Button/Reset'
import React, {useState} from 'react'

const Form = (props) => {

    const [enteredValue, setEnteredValue] = useState({
        currentSaving: '',
        yearlySaving: '',
        expectedInterest: '',
        interestDuration: ''
    })


    const onChangeHanler = (identifier, data) => {
        if (identifier === 'currentSaving') {
            setEnteredValue(prevState => ({
                ...prevState,
                currentSaving: data
            }))
        }
        else if (identifier === 'yearlySaving') {
            setEnteredValue(prevState => ({
                ...prevState,
                yearlySaving: data
            }))
        }
        else if (identifier === 'expectedInterest') {
            setEnteredValue(prevState => ({
                ...prevState,
                expectedInterest: data
            }))
        }
        else if (identifier === 'interestDuration') {
            setEnteredValue(prevState => ({
                ...prevState,
                interestDuration: data
            }))
        }
        
        
    }

    const [isClicked, setIsClicked] = useState(false)
    const calculateClickHandler = (clicked) => {
        props.onGetEnteredValue(enteredValue)
    }


    return (
        <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input onChange={(event) => {
                onChangeHanler('currentSaving', event.target.value)
            }} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange={(event) => {
                onChangeHanler('yearlySaving', event.target.value)
            }} type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
        
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange={(event) => {
                onChangeHanler('expectedInterest', event.target.value)
            }} type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={(event) => {
                onChangeHanler('interestDuration', event.target.value)
            }} type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <ResetButton/>
          <CalculateButton isClicked={calculateClickHandler}/>
        </p>
      </form>
    )
}


export default Form