import { useState } from "react";
import {questions} from '../../constants/questions'
import './style.css'

function Quiz() {
    const length= questions.length;
    const [answers, setAnswers] = useState(questions[0].list);
    const [index, setIndex] =useState(1);
    const [results, SetResult] = useState(Array(length));
    console.log(results);
    const handleNext=() =>{
        if(index<= questions.length-1){
            let newIndex= index+1;
            setIndex(newIndex);
            setAnswers(questions[newIndex-1].list);
        }
    }
    const handleChooseAnswer= (value) =>{
        const newResult= results;
        newResult[index-1]= value;
        SetResult(newResult)
    }
    const handleReset= () =>{
        setAnswers(questions[0].list);
        setIndex(1);
        SetResult(Array(length));
    }
    const handleSubmit =()=>{
        let point=0;
        questions.forEach((question , index) =>{
            console.log(question.answer , results[index])
            if(question.answer===results[index]){
                
                point+=1;
            }
            // console.log(point);
        })
        console.log(`Diem so cua ban la : ${point}/${length}`);
        alert(`Your point :  ${point}/${length}`)
    }
    return ( 
        <div className="quiz container w-full m-auto pt-28 ">
            <h3 className="text-3xl text-blue-900 font-bold text-center"> Quiz app</h3>
            
            <div className="quiz-content flex  justify-center mt-10 p-6">
                <div className="answer w-80">
                    <h3 className="text-xl font-bold mb-6">Question {index}: {questions[index-1].question} ?</h3>
                    {answers.map(item =>(
                        <div onClick={()=>handleChooseAnswer(item)} key={item} className="itemAnswer p-2 bg-white mb-4 cursor-pointer">{item}</div>
                    ))}
                </div>
                <div className="quiz-right pl-8 ">
                    <div className="progress flex justify-center">
                        <progress className="mb-4 w-80 mt-1 mr-2" value={index} max={length} ></progress><span>{index}/{length}</span>
                    </div>
                    <button 
                        onClick={handleNext} 
                        className={`${index===length?'opacity-10' :''} block rounded-lg pt-2 pb-2 pr-6 pl-6 bg-blue-900 text-white`}
                        disabled={index===length?true: false}
                    >Next</button>
                    <button onClick={handleSubmit} disabled={index===length?false: true} className={`${index<=length-1?'opacity-10' :''} block mt-10 rounded-lg pt-2 pb-2 pr-6 pl-6 bg-blue-900 text-white`}>Submit</button>
                    <button onClick={handleReset} disabled={index===length?false: true} className={`${index<=length-1?'opacity-10' :''} block mt-10 rounded-lg pt-2 pb-2 pr-6 pl-6 bg-blue-900 text-white`}>Reset</button>
                </div>
            </div>
        </div>
     );
}

export default Quiz;