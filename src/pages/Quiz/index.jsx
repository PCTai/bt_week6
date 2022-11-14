import { useState } from "react";
import {questions} from '../../constants/questions'
function Quiz() {
    const [answers, setAnswers] = useState(questions[0].list);
    const [index, setIndex] =useState(1);
    console.log(answers);
    const handleNext=() =>{
        if(index< questions.length-1){
            let newIndex= index+1;
            setIndex(newIndex);
            setAnswers(questions[index-1].list);
        }
    }
    return ( 
        <div className="quiz container w-full m-auto pt-28">
            <h3 className="text-3xl text-blue-900 font-bold text-center"> Quiz app</h3>
            <h3 className="text-xl font-bold mt-10">Question {index}: {questions[index].question} ?</h3>
            <div className="answer mt-4">
                {answers.map(item =>(
                    <div key={item} className="itemAnswer p-2 bg-white mb-4 cursor-pointer">{item}</div>
                ))}
            </div>
            <button onClick={handleNext} className="rounded-lg pt-2 pb-2 pr-6 pl-6 bg-blue-900 text-white">Next</button>
            <button disabled={index===questions.length-1?false: true} className={`${index<questions.length-1?'opacity-10' :''} block mt-10 rounded-lg pt-2 pb-2 pr-6 pl-6 bg-blue-900 text-white`}>Submit</button>
        </div>
     );
}

export default Quiz;