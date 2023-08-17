'use client';
import { Button } from '@mui/material';
import React, {useState} from 'react'

export default function Quizzes() {
    const [quizList, setQuizList] = useState([]);

    const fetcher = async () =>{
        let url = '/api/quizzes';
        const res = 
            await fetch(url)
                .then((res) => res.json())
                .then((json) => setQuizList(json))
    }

    if (quizList.length < 1){
        fetcher();
    }
    console.log(quizList);

    return (
        <div className='container'>
            <div className='row'>
                    {quizList.map((item, index) => 
                        <div className='col-md-5 col-sm-11 p-2' key={index}>
                            <div className=' border bg-light rounded'>
                                <div className='row row-cols-2 p-2'>
                                    <div className='col ps-4 text-left'>{item.title}</div>
                                    <div className='col  text-center'>Not played yet</div>
                                    {/* <div className='col'>{(item.createdAt.localCompare(item.playedAt < 0)) ? 'Last played:' + item.playedAt : 'Not played yet' }</div> */}
                                </div>
                                <div className='row row-cols-2 p-2'>
                                    <div className='col ms-3 fw-bold text-muted' style={{border:"solid 2px #DDD", borderRadius:"18px", width:"fit-content", paddingTop:"5px"}}>{item.questionIds.length} QUESTIONS</div>
                                    <Button sx={{margin:"auto", width:"fit-content", borderRadius:"18px"}} variant='contained'>PLAY {item.id}</Button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
  )
}
