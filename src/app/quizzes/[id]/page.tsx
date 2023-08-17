'use client';
import React, {useState} from 'react'
type Props = {
    params: { id: number } 
}

type Quiz = {
    id: number,
    title: string,
    questions: string[],
    createdAT: string,
    // playedAt: string
}


export default function page({params}: Props) {
    const [quiz, setQuiz] = useState([]);

    const getQuiz = async (id: number) => {
        let url = `/api/quizzes/${id}`;
        const res = 
            await fetch(url)
                .then((res) => res.json())
                .then((json) => setQuiz(json));

    console.log(quiz);
    }

    if (quiz.length < 1){
        getQuiz(params.id);
    }
    console.log(quiz);

      
    
    return (
        <div>HElp me!</div>
    )
}
