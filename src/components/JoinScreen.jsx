import React from 'react'

const JoinScreen = ({start}) => {
  return (
    <div className='join-screen'>
        <h2>Join Quiz</h2>
        <p>Get ready to flex those brain muscles and test your knowledge with our fun, challenging quizzes! Whether you’re a trivia buff or just love learning new things, QuizWhiz is your go-to destination for brain-teasing excitement. Dive in, challenge your friends, and see how you stack up on the leaderboard. Let the quiz adventures begin!</p>
        <button onClick={start}>Start</button>
    </div>
  )
}

export default JoinScreen