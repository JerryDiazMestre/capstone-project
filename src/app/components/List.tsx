import React from 'react'


export default function SubHeader() {
  return (
    <>
        <div className='pt-4 pb-1' style={{borderBottom:"solid 3px"}}>
            <div className='d-flex justify-content-around'>
                <h3>ALL QUIZES</h3>
                <button className='px-3 bg-white' style={{borderRadius: "20px", height:"26px"}}>BUILD NEW QUIZ</button>
            </div>
        </div>
    </>
  )
}
