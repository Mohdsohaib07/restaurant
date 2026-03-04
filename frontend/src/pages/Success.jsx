import React, { useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useNavigate,Link } from 'react-router-dom';

const Success = () => {
  const [countDown,setCountDown] = useState(10);
  const navigate= useNavigate();

  useEffect(()=>{
    const timeoutId = setInterval(()=>{
      setCountDown((prevCount)=>{
        if(prevCount===1){
          clearInterval(timeoutId);
          navigate('/');
        }
        return prevCount-1;
      });
      return ()=>clearInterval(timeoutId);
    },1000);
  },[navigate]);
  return (
    <>
    <section className='notFound'>
      <div className="container">
        <img src="/sandwich.png" alt="success" />
        <h1>Redirecting to Home in {countDown} seconds..</h1>
        <Link to={'/'}> Back To Home <HiOutlineArrowNarrowRight/>
        </Link>
      </div>
    </section>
      
    </>
  )
}

export default Success
