import React, {useState, useEffect} from 'react';
import Error from './Error';


const Form = ({result, setResult, consult, setConsult, setError, error}) => {

    //state
    const [search, setSearch] = useState({
        city: '',
        country: ''
    });
    // const [consult, setConsult] = useState(false);


    const {city, country} = search;

    useEffect(() => {
        // console.log(ciudad);
        const consultAPI = async () => {
          if(consult){
            const appId = 'e3ca0bfb3931429c58d0c27a225d6254';
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${appId}`;
  
            const res = await fetch(url);
            const resultAPI = await res.json();
  
            setResult(resultAPI); //PASAMOS LA CONSULTA DE LA API AL STATE
            setConsult(false);
  
            //VALIDACION DE ERROR
            // if(resultAPI.cod === '404'){
            //   guardarError(true);
            // }else{
            //   guardarError(false)
            // }
          }

        }
  
        consultAPI();
      }, [consult]);



    //functions
    const handleChange = e => {
        setSearch({
            ...search, 
            [e.target.name] : e.target.value  
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
         
        //VALIDAR
        if(city.trim() === '' || country.trim() === ''){
            setError(true);
            // console.log('error');
            return;
        }
        setError(false);

        //PASARLO AL COMPONENTE PRINCIPAL
        setConsult(true);
        setTimeout(() => {
            setSearch({
                city: '',
                country: ''
            })
        }, 1000);
    }


    return (  
        <>
            <form 
                className="px-8 pt-6 pb-8 mb-4 w-96"
                onSubmit={handleSubmit}
            >   
                <h1 className='text-3xl mb-5 text-center font-bold'>Weather Consult</h1>
                {error && <Error />}
                <div className="mb-4">
                    <label 
                        className="block text-lg font-bold mb-2" 
                        htmlFor="username"
                    >
                        City
                    </label>
                    <input 
                        className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="City"
                        name='city' 
                        value={city}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label 
                        className="block text-lg font-bold mb-2" 
                        htmlFor="password"
                    >
                        Country
                    </label>
                    <div className="flex justify-center">
                        <div className="mb-3 w-full">
                            <select 
                                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                aria-label=".form-select-lg example"
                                value={country}
                                name='country'
                                onChange={handleChange}
                            >
                                <option value="">Open this select a country</option>
                                <option value="US">USA</option>
                                <option value="MX">Mexico</option>
                                <option value="AR">Argentina</option>
                                <option value="CO">Colombia</option>
                                <option value="CR">Costa Rica</option>
                                <option value="ES">Spain</option>
                                <option value="PE">Perú</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <input 
                        className=" bg-purple-700 w-full hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block cursor-pointer" 
                        type="submit"
                        value="Search"
                    />
                </div>
            </form>
        </>
    );
}
 
export default Form;