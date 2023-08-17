'use client';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react'
import {getQuiz} from '../../api/fetcher';
import useSWR from "swr";
import { Quiz } from '@/app/model/Quiz';

type Props = {
    params: { id: number } 
}


export default function page({params}: Props) {
    // let questions = [];
    // const [questions, setQuestions] = useState<any>([]);
    const { data, error, isLoading } = useSWR(`quizzes/${params.id}`, getQuiz);
    let quiz = data;

    console.log({quiz:quiz, questions:quiz?.questionIds});

    if (quiz && quiz?.questionIds && quiz?.questionIds?.length > 0){
        // quiz?.questionIds.map((item:string, index:number) =>{
        //     const { data, error } = useSWR(`${item}`, getQuestion);
        //     setQuestions([...questions, data]);
            // questions.push(data);
        // });
    }

    return (
        <>
            <h1>{quiz?.title}</h1>   
            {/* <Question /> */}
        </>
    )
}
