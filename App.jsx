import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faXmark } from '@fortawesome/free-solid-svg-icons';
import './custom_scrollbar.css';
import Content from './component/Content'

function App() {
  const [weight, setWeight] = useState(75);
  const [height, setHeight] = useState(169);
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [isVisible,setIsvisible]=useState(true)
  const [sub,setSub]=useState(false)
  
  const calculate = () => {
    if (weight === 0 || height === 0) {
      setBmi(null);
      setMessage("No Result");
      alert("Enter the Parameters");
    } else {
      const bmiValue = (weight / (height * height)) * 10000;
      setBmi(bmiValue.toFixed(2));

      if (bmiValue > 25) {
        setMessage("Overweight");
        
      } else if (bmiValue <= 25 && bmiValue > 18.5) {
        setMessage("Normal Weight");
        
      } else {
        setMessage("Under Weight");
        
      }
    }
  };


  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setMessage("");
    
  };
  const hide=(isVisible)=>{
    if(isVisible===false) return 'none'
  }
  
  return (
    <>
      <div className={`text-[16px] flex items-center justify-center font-semibold h-screen bg-blue-500`} style={{display:hide(isVisible)}}>
        <div className='bg-white p-6 rounded-xl space-y-3 w-[20rem] shadow-2xl'>
          <h1 className='text-blue-800 font-extrabold font-sans shadow-black text-3xl text-center'>BMI Calculator</h1>
          <p>Weight (in Kilograms): <br />
            <input className="border-2 border-slate-300 w-full" 
              type="number" 
              value={weight} 
              onChange={(e) => setWeight(Number(e.target.value))} />
          </p>
          <p>Height (in Centimeters): <br />
            <input className="border-2 border-slate-300 w-full" 
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))} />
          </p>
          <button className="bg-blue-600 text-white rounded w-[48%]  mr-2 min-h-[2.5rem]" 
            type="submit" 
            onClick={()=>{calculate(),setSub(true)}}
            >
            Submit
          </button>
          <button className="bg-blue-600 text-white rounded w-[48%] min-h-[2.5rem]" 
            type="submit" 
            onClick={()=>{setIsvisible(false)}}
            disabled={!sub}
            >
            Exercise
          </button><br />
          <button 
            className="bg-slate-500 text-white rounded w-full min-h-[2rem]"
            onClick={reset}>
            Reset
          </button>
          <p>Your Body Mass Index is: <span>{bmi}</span></p>
          <p>Result: <span className='text-black'>{message}</span></p>
        </div>     
      </div>
      <div className={`font-sans bg-blue-500 h-screen flex items-center justify-center`} style={{display:hide(!isVisible)}}>
        <div className='bg-white w-[65%] p-5 rounded-md  text-[1.2rem]'>
          <div className='overflow-scroll scrollbar space-y-3 w-[65%-1rem] max-h-[15rem]'>
            <FontAwesomeIcon icon={faXmark} className='p-4 text-slate-600 font-serif'onClick={()=>{setIsvisible(true)}}/>
            <p className='font-extrabold pl-6 text-2xl'>Exercise</p>
            <div className='pl-6 text-slate-700'>{Content(bmi)}</div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default App;
