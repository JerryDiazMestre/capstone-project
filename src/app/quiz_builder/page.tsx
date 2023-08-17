'use client';
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header'
import QuestionBankList from '../components/QuestionBankList';
import Button from '@mui/material/Button';
import useSWR, { Key, SWRConfig } from 'swr';

export default function Page() {
    const [questionsAvailables, setQuestionsAvailables] = useState([]);

    const fetcher =  async (query: string) => {
        let url = `https://the-trivia-api.com/v2/questions?limit=50${query}`;

        const ret = await 
            fetch(url)
                .then((res) => res.json())
                .then((json) => setQuestionsAvailables(json));
    }
    
    const  cfl = (str:string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const stc = (str:string) =>
        str.toLowerCase().replace(/([-_][a-z])/g, group =>
            group
            .toUpperCase()
            .replace('-', ' ')
            .replace('_', ' ')
        );
    
    const categories = [
        'arts_and_literature',
        'film_and_tv',
        'food_and_drink', 
        'general_knowledge', 
        'geography', 
        'music',
        'science', 
        'society_and_culture', 
        'sport_and_leisure'
    ];

    const difficulties = [
        'easy',
        'medium',
        'hard'
    ];

    const [questionList, setQuestionList] = useState([]);

    
    const getRandomQuestions = () => {
        const data = fetcher('');
    }

    const getQuestionsFromApi = () => {
        let category = document.getElementById('categoryInput').value ?? '';
        let difficulty = document.getElementById('difficultyInput').value ?? '';
        let url = '';
        if (category != ''){
            url = url + `&categories=${category}`;
        }
        if (difficulty != ''){
            url = url + `&difficulties=${difficulty}`;
        }

        const data = fetcher(url);
    }

    const addAQuestionToTheQuiz = (e:Event)=> {
        let id = e.target.parentNode.id ?? '';
        let text = e.target.parentNode.children[0].innerText ?? '';
        if (id !== '' && text !== ''){
            setQuestionList([...questionList, {id:id, text:text}]);
            let questionBankList = document.getElementById("questionBank").value;
            if (questionBankList == ''){
                questionBankList = id;
            } else {
                questionBankList += ',' + id;
            }
            document.getElementById('questionBank').value = questionBankList;
            console.log(questionBankList);
            let removeIndex = null;
            for (let index = 0; index < questionsAvailables.length; index++) {
                if (id == questionsAvailables[index].id){
                    removeIndex = index;
                }                
            }
            if (removeIndex !== null){
                setQuestionsAvailables([...questionsAvailables.slice(0,removeIndex), ...questionsAvailables.slice(removeIndex+1)]);
            }
        }
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
                            <input type="hidden" name="questionBank" id="questionBank"/>
                        </div>
                    </div>
                    <hr style={{borderBottom:"#000 solid 3px"}} />
                    <div className='container px-5'>
                        <div>
                            <div>
                                <h4>QUESTION BANK:</h4>
                            </div>
                            <div>
                                <QuestionBankList questions={questionList}/>
                            </div>
                            <hr style={{borderBottom:"#000 solid 3px", marginTop:"4rem"}} />
                            <div style={{width: "fit-content", marginTop:"-37px", marginLeft:"auto", marginRight:"3rem"}}>
                                <Button className="bg-dark text-white h4 px-5 ms-auto me-5 text-right" type="submit" variant="contained" sx={{borderRadius:"32px"}} onClick={() => addAQuestionToTheQuiz} >SAVE</Button>
                            </div>

                            <div>
                                <h4 className="fw-bold text-muted">FIND MORE QUESTIONS:</h4>
                            </div>

                            <div className='d-flex justify-content-between'>
                                <div className='d-block'>
                                    <div>
                                        <label className="text-muted" htmlFor='categoryInput'>CATEGORY:</label>
                                        <select onChange={getQuestionsFromApi} style={{borderTop:'0px', borderLeft:'0px', borderRight:'0px', borderBottom:'2px solid #000'}} id="categoryInput">
                                            <option value="">Any</option>
                                            {categories.map((item, index) => 
                                                <option key={index} value={item}>{cfl(stc(item))}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-muted" htmlFor='difficultyInput'>DIFFICULTY:</label>
                                        <select onChange={getQuestionsFromApi} style={{borderTop:'0px', borderLeft:'0px', borderRight:'0px', borderBottom:'2px solid #000'}} id="difficultyInput">
                                            <option value="">Any</option>
                                            {difficulties.map((item, index) => 
                                                <option key={index} value={item}>{cfl(stc(item))}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <Button className='fw-bold fs-5 text-muted' onClick={getRandomQuestions}>GET RANDON<br></br> QUESTIONS</Button>
                                </div>
                            </div>

                            <div style={{height:"50vh", overflow:"auto"}}>
                                <div className='list-group'>
                                {questionsAvailables.map((item, index) => {
                                        return <div className='list-group-item d-flex justify-content-between' key={item.id} id={item.id}>
                                            <p className='mb-0 mt-2'>{item.question.text}</p>
                                            <Button onClick={addAQuestionToTheQuiz} variant="contained" sx={{minWidth:"fit-content", maxHeight:"24.5px", marginBottom:"auto", marginTop:"auto"}}>Add to Quiz</Button>
                                            </div>
                                        })
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}
