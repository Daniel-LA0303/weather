import React, {useState, useEffect} from 'react';
import Form from "./conponents/Form";
import Wheater from "./conponents/Wheater";
import Description from './conponents/Description';



import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
      opacity: 0,
      x: "100px"
  },
  show: {
      opacity: 1,
      x: 0,
      transition: {
          delay: 1,
          duration: 2,
          stiffness: 5
      }
  }
}


function App() {

  //state
  const [result, setResult] = useState({});
  const [consult, setConsult] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // console.log(ciudad);
    const consultAPI = async () => {

        const appId = 'e3ca0bfb3931429c58d0c27a225d6254';
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=chicago,us&appid=${appId}`;

        const res = await fetch(url);
        const resultAPI = await res.json();

        setResult(resultAPI); //PASAMOS LA CONSULTA DE LA API AL STATE
        setConsult(false);

        // VALIDACION DE ERROR
        if(resultAPI.cod === '404'){
          guardarError(true);
        }else{
          guardarError(false)
        }
    }

    consultAPI();
  }, []);

  let component;
  if(error){
    component = <Wheater result={result}/>
  }else{
    component = <Wheater result={result}/>
  }



  return (
    // <div className="content">
      <div 
        className=" container m-auto content"

      >
          
        <motion.div 
          className="lg:flex justify-center flex-col items-center h-screen p-2"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <h1 className=' text-center text-white text-4xl my-2'>Code-LA</h1>
          <p className=' text-center text-white my-1'>This page was developed with the api <span className='font-bold'><a href="https://openweathermap.org/api" target="_blank">Open Weather</a></span></p>
          <div className="grid grid-cols-3 gap-0 h-90 "> 
            <div className="box col-span-3 lg:col-span-2 m-1">
              <div className=" flex justify-center items-center h-full">
                {component}
              </div>
            </div>
            <div className="box col-span-3 lg:col-span-1 rounded m-1">
              <div className="p-1 bg-box2 flex justify-center items-center h-full rounded">
                <Form 
                  result={result}
                  setResult={setResult}
                  consult={consult}
                  setConsult={setConsult}
                  setError={setError}
                  error={error}
                />
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    // </div>
  )
}

export default App
