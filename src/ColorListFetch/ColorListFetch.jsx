import { useEffect, useState } from "react";

const ColorListFetch = () => {
    const fakeFetch = () =>{
        return Promise.resolve(
            ['Red', 'Green', 'Blue']
        )
    }

    const [colors, setColors] = useState([]);

    useEffect(() => {      
        fakeFetch().then(colors => setColors(colors));
    }, []);

    const renderColors = colors.map((color, index) => {
        return <li key={index}>{color}</li>
    })
    return (
      <ul>
          {renderColors}
      </ul>
    );
  };
  
  export default ColorListFetch;