import React, { useContext } from 'react'
import { MyContext } from '../Context/Context'

const QuizResult = ({retry}) => {
    const {result} = useContext(MyContext)
  return (
    <div className='result-screen'>
        <h2>Result : {result.value} / {result.total}</h2>
        <p>Slelected {result.correct} correct options out of {result.total} questions.</p>
        <button onClick={retry}>Retry</button>
    </div>
  )
}

export default QuizResult