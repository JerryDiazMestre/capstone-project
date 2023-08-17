import React from 'react'
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

async function getQuiz(id: number): Promise<Quiz> {
    const res = await fetch(
      `/api/quizzes/${id}`);
    return res.json();
}
  
export default async function page({params}: Props) {
    const quiz = await getQuiz(params.id)

    return (
        <div>page</div>
    )
}
