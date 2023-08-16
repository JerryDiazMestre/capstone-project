'use client';
import React from 'react'
import { useRouter } from "next/navigation";


export default function SubHeader() {
    const router = useRouter();
    const goToQuizBuilder = () => {
        const path = '/quiz_builder';
        router.push(path);
    }
    return (
        <>
            <div className='pt-4 pb-1'>
                <div className='d-flex justify-content-around'>
                    <h3>ALL QUIZES</h3>
                    <button onClick={goToQuizBuilder} className='px-3 bg-white' style={{borderRadius: "20px", height:"26px"}}>BUILD NEW QUIZ</button>
                </div>
            </div>
            <hr style={{borderBottom:"#000 solid 3px"}} />
        </>
    
  )
}
