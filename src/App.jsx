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
          
        <div className="lg:flex justify-center items-center h-screen p-2">
          <motion.div 
            className="grid grid-cols-3 gap-0 h-90 "
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
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
          </motion.div>
        </div>
      </div>
    // </div>
  )
}

export default App
