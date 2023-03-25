import React, { useState, useEffect } from "react";


export function Home() {

    const [vagasLocalStorage, setVagasLocalStorage] = useState([]);
    
    const array = []

    const vagasArmazenados = JSON.parse(localStorage.getItem("vagas")) ;
    
    const newArray = [...array, vagasArmazenados]

    // useEffect(() => {

    //     const localStorageGet = () => {
    //         const vagasArmazenados = localStorage.getItem("vagas");
    //         // setVagasLocalStorage(JSON.parse(vagasArmazenados));

    //         // if (vagasArmazenados) {
    //         //     setVagasLocalStorage(JSON.parse(vagasArmazenados));

                
                
    //         // }
    //     }

    //    localStorageGet();
        


    // }, [vagasLocalStorage]);

    
    console.log(newArray);
    

    return (
        <>
            {/* {
                vagasLocalStorage.map((vaga) => (
                    <h1>{vaga.nameCompany}</h1>
                ))
            } */}
        </>
    )
}