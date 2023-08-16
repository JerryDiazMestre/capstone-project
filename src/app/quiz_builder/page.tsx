'use client';
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header'
import QuestionBankList from '../components/QuestionBankList';

export default function Page() {
    const [questionList, setQuestionList] = useState([{id:'1', text:'the first question'}, {id:'2', text:'the second question'}]);
    
    const addAQuestion = ()=> {
        setQuestionList([...questionList, {id:'3', text:'the third question'}]);
    }

    return (
        <div>
            <Header />
            <div className='container'>
                <form>
                    <div className="d-flex justify-content-around mt-5">
                        <div>
                            <h1  className="">
                                QUIZ BUILDER
                            </h1>
                        </div>
                        <div>
                            <label className='display-6 text-muted' htmlFor="quizName">
                                NAME:
                            </label>
                            <input className='i' type="text" name="quizName" />
                            <input type="hidden" name="questionBank" />
                        </div>
                    </div>
                    <hr style={{borderBottom:"#000 solid 3px"}} />
                </form>
                <div className='container px-5'>
                    <div>
                        <h4>QUESTION BANK:</h4>
                    </div>
                    <div>
                        <QuestionBankList questions={questionList}/>
                    </div>
                    <button onClick={addAQuestion} >Add a question</button>

                </div>
            </div>
        </div>
  )
}
