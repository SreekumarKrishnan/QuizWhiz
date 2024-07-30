import { useContext, useEffect, useState } from 'react';
import QuestionList from '../data/questions.json';
import QuizResult from './QuizResult';
import Questions from './Questions';
import { MyContext } from '../Context/Context';

const QuizScreen = ({ retry }) => {
  const {setResult} = useContext(MyContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnsewrs, setMarkedAnswers] = useState(
    new Array(QuestionList.length),
  );
  const calculateResult = () => {
    let correct = 0;
    QuestionList.forEach((question, index) => {
      if (question.correctOptionIndex == markedAnsewrs[index]) {
        correct++;
      }
    });
    return {
      total: QuestionList.length,
      correct: correct,
      value: correct,
    };
  };
  useEffect(() => {
    if (currentQuestionIndex === QuestionList.length) {
      const updatedResult = calculateResult();
      setResult(updatedResult);
    }
  }, [currentQuestionIndex, setResult]);
  
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;
  return (
    <div className="quiz-screen">
      {isQuestionEnd ? (
        <QuizResult retry={retry} />
      ) : (
        <Questions
          question={QuestionList[currentQuestionIndex]}
          totalQuestions={QuestionList.length}
          currentQuestion={currentQuestionIndex + 1}
          setAnswer={(index) => {
            setMarkedAnswers((arr) => {
              let newArr = [...arr];
              newArr[currentQuestionIndex] = index;
              return newArr;
            });
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }}
        />
      )}
    </div>
  );
};

export default QuizScreen;
