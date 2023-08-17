'use client';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react'
import {getQuestion, getQuiz} from '../../api/fetcher';
import useSWR from "swr";
import { Quiz } from '@/app/model/Quiz';

type Props = {
    params: { id: number } 
}


export default function page({params}: Props) {
    let questions = [];
    const { data, error, isLoading } = useSWR(`quizzes/${params.id}`, getQuiz);
    let quiz = data;

    console.log({quiz:quiz, questions:quiz?.questionIds});
    if (quiz && quiz?.questionIds && quiz?.questionIds?.length){
        quiz?.questionIds.map((item:string, index:number) =>{
            const { data, error } = useSWR(`${item}`, getQuestion);
            questions.push(data);
        });
    }
    return (
        <>
            <h1>{quiz?.title}</h1>   
            <h5>{quiz?.questionIds}</h5>
        </>
    )
}
