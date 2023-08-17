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


const fetcher = async () =>{
    let url = '/api/quizzes';
    const res = 
        await fetch(url)
            .then((res) => res.json())
            .then((json) => setQuizList(json))
}

export default async function page({params}: Props) {
    const [quiz, setQuiz] = useState([]);
    
    const getQuiz = async () => (id: number): Promise<Quiz> {
        const url = `/api/quizzes/${id}`;
        console.log(url);
        const res = 
            await fetch(url)
                .then((res) => res.json())
                .then((json) => setQuiz(json))
    }
      
    
    return (
        <div>page</div>
    )
}
