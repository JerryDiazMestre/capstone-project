import React from 'react';
type question = {
    id: string;
    text: string;
}
type Props = {
    questions: question[];
}

export default function QuestionBankList({questions}: Props) {
  return (
    <>
        <ul className="list-group">
            {questions.map((question, index) => {
                return <li className="list-group-item" key={index}>{question.text}</li>
            })}
        </ul>
    </>
  )
}
