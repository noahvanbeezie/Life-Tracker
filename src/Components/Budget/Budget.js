import React, {useState} from 'react'
import Input from '@material-ui/core/Input'
import { makeStyles } from '@material-ui/core/styles'
import './Budget.css'


const styles = makeStyles({
    input:{

    }
   
})


function Budget(){
    const style = styles();
    const [income,setIncome] = useState(0)
    const [expenses,setExpenses] = useState(0)
    const [percentSavings,setPercentSavings] = useState(0)
    
    return(
        <div>
            <h1>Budget</h1>
            <div className='holderDiv'>
                <div className='inputDiv'>
                    <h2>Income</h2>
                    <Input className={style.input} type='number' onChange={(e) => setIncome(e.target.value)}/>
                </div>
                <div className='inputDiv'>
                    <h2>Expenses</h2>
                    <Input className={style.input} type='number' onChange={(e) => setExpenses(e.target.value)}/>
                </div>
            </div>
            <div className='holderDiv'>
                <h2>Budget</h2>
                <div>
                    <h3>Expected Income:</h3>
                    <>
                        ${income}
                    </>
                </div>
                <div>
                    <h3>Expected Expenses:</h3>
                    <>
                        ${expenses}
                    </>
                </div>
                <div>
                    <h3>Income after Expenses:</h3>
                    <>
                        ${income - expenses}
                    </>
                </div>
                <div>
                    <h3>% Wanting to Save:</h3>
                    <div>
                        <Input type='range' min='0' max='100' onChange={(e) => setPercentSavings(e.target.value)}/>
                        <p>{percentSavings}%</p>
                    </div>
                </div>
                <div>
                    <h3>Dollar amount saved:</h3>
                    <>
                        ${Math.floor((income-expenses) * (percentSavings*.01))}
                    </>
                </div>
                <div>
                    <h3>Amount available after Savings:</h3>
                    <>
                        ${(income - expenses) - (Math.floor((income-expenses) * (percentSavings*.01)))}
                    </>
                </div>
            </div>
            <div className='holderDiv'>
                <h2>Spending Expenses</h2>
                <div>
                    <h3>Per Week (Rounded Down):</h3>
                    <>
                    ${Math.floor(((income - expenses) - (Math.floor((income-expenses) * (percentSavings*.01)))) / 4.5)}
                    </>
                </div>
                <div>
                    <h3>Per day (Rounded Down):</h3>
                    <>
                    ${Math.floor((((income - expenses) - (Math.floor((income-expenses) * (percentSavings*.01)))) / 4.5)/7)}
                    </>
                </div>
            </div>
        </div>
    )
}

export default Budget