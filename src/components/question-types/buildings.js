import React, {useState} from "react";
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';


import { useGlobalContext } from "../context";

const Buildings = (props) => {
  const{checkAnswer} = useGlobalContext();
  const [picIndex,setPicIndex]=useState(0);

  const checkNumber=(number)=>{
    if(number>props.ans.length-1) return 0;
    else return number
  }

  const nextPic =()=>{
    setPicIndex((actual)=>{
      let next = actual+1;
      return checkNumber(next);
    })
  }

  const prevPic =()=>{
    setPicIndex((actual)=>{
      let prev = actual-1;
      console.log('Prev is: ',prev)
      if(prev<0){
        prev = props.ans.length-1;
      }
      return checkNumber(prev);
    })
  }


  return (
    <>
      <h2 dangerouslySetInnerHTML={{ __html: props.qtext }} />
      {console.log('Answers: ',props.ans)}
      <div className="buildings-container">
      <button className='prev-btn' onClick={prevPic}>
          <FaChevronLeft />
        </button>
        <img className='img-container' src={`pics/${props.ans[picIndex]}.jpg`} alt="eiffel" />
          <button className='next-btn' onClick={nextPic}>
          <FaChevronRight />
        </button>
      </div>
      <div className='check-answer-container' onClick={()=>checkAnswer(props.corr_ans===props.ans[picIndex])}>
        <button className='check-answer'>
          Check
        </button>
      </div>
    </>
  );
};

export default Buildings;
