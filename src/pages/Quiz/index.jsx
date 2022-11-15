import { useState } from "react";
import { Link } from "react-router-dom";
import {questions} from '../../constants/questions'
import './style.css'

function Quiz() {
    const length= questions.length;
    const [answers, setAnswers] = useState(questions[0].list);
    const [index, setIndex] =useState(1);
    const [active, setActive] =useState(0);
    const [results, SetResult] = useState(Array(length));
    // console.log(results);
    const handleNext=() =>{
        if(index<= questions.length-1){
            let newIndex= index+1;
            setIndex(newIndex);
            setAnswers(questions[newIndex-1].list);
        }
        setActive(0);
    }
    const handlePrev=() =>{
        if(index<=1){
            setIndex(1);
            setAnswers(questions[0].list);
        }
        else{
            let newIndex= index-1;
            setIndex(newIndex)
            setAnswers(questions[newIndex-1].list);
        }
        setActive(0);
    }
    const handleChooseAnswer= (value,i) =>{
        const newResult= results;
        newResult[index-1]= value;
        SetResult(newResult)
        setActive(i+1);
    }
    const handleReset= () =>{
        setAnswers(questions[0].list);
        setIndex(1);
        SetResult(Array(length));
        setActive(0);
    }
    const handleSubmit =()=>{
        let score=0;
        questions.forEach((question , index) =>{
            if(question.answer===results[index]){
                
                score+=1;
            }
            // console.log(score);
        })
        // console.log(`Diem so cua ban la : ${score}/${length}`);
        alert(`Your score :  ${score}/${length}`)
    }
    return ( 
        <div className="quiz container w-full m-auto pt-28 ">
            <Link to='/' className=" block text-center">{'<-'}Back home</Link>
            <h3 className="text-3xl text-blue-900 font-bold text-center"> Quiz app</h3>
            
            <div className="quiz-content flex  justify-center mt-10 p-6">
                <div className="answer w-80">
                    <h3 className="text-xl font-bold mb-6">Question {index}: {questions[index-1].question} ?</h3>
                    {answers.map((item,index) =>(
                        <div onClick={()=>handleChooseAnswer(item,index)} key={item} 
                        className={`itemAnswer p-2 bg-white mb-4 cursor-pointer ${active===index+1? "bg-gray-200": ''}`}>{item}</div>
                    ))}
                </div>
                <div className="quiz-right pl-8 ">
                    <div className="progress flex justify-center">
                        <progress className="mb-4 w-80 mt-1 mr-2" value={index} max={length} ></progress><span>{index}/{length}</span>
                    </div>
                    <div className="directiry flex justify-between">
                        <button 
                            onClick={handlePrev} 
                            className={`${index<=1?'opacity-10' :''} block rounded-lg pt-2 pb-2 pr-6 pl-6 bg-blue-900 text-white`}
                            disabled={index<=1 ?true: false}
                        >Previous</button>
                        <button 
                            onClick={handleNext} 
                            className={`${index===length ||active=== 0?'opacity-10' :''} block rounded-lg pt-2 pb-2 pr-6 pl-6 bg-blue-900 text-white`}
                            disabled={index===length || active=== 0?true: false}
                        >Next</button>
                    </div>
                    <button 
                        onClick={handleSubmit} 
                        disabled={index<=length-1 || active=== 0?true: false} 
                        className={`${index<=length-1 || active=== 0?'opacity-10' :''} block mt-10 rounded-lg pt-2 pb-2 pr-6 pl-6 bg-blue-900 text-white`}>Submit</button>
                    <button 
                        onClick={handleReset} 
                        disabled={index<=length-1 || active=== 0?true: false} 
                        className={`${index<=length-1 || active=== 0?'opacity-10' :''} block mt-10 rounded-lg pt-2 pb-2 pr-6 pl-6 bg-blue-900 text-white`}>Reset</button>
                </div>
            </div>
        </div>
     );
}

export default Quiz;