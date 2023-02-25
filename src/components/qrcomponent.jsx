import React, { useEffect, useState } from "react";

const QrComponent = (props) => {

    

    const [qrs, setQrs] = useState([]);
    const [error, setError] = useState(null);
    const size = props.size;
    const mensaje = props.mensaje;



useEffect(()=>{
    
    const url =`https://chart.googleapis.com/chart?cht=qr&chs=${size}x${size}&chl=${mensaje}`   
    fetch(url)
       .then(response => {
           console.log("el response es: " , response)
           
           console.log("la data es:" ,response.url)
           setQrs(response.url)

       } ,
       (error) => { 
        setError(error);
       }
       )
}, [size,mensaje])

if(error){
    return <div>Error: {error.message}</div>
} else {
    return(
        <>
            <img src={qrs} alt="QRImage"></img>
        </>
    )
}

}

export default QrComponent;