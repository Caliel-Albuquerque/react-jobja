import React, { useState, useEffect } from "react";


export function Home() {

    const [vagasLocalStorage, setVagasLocalStorage] = useState([]);

    const vagas = [{}]

    // useEffect(() => {
    //     const vagasArmazenados = localStorage.getItem("vagas");
    //     if (vagasArmazenados) {
    //         setVagasLocalStorage(JSON.parse(vagasArmazenados));

    //         vagasLocalStorage.map((item) => {
    //             vagas.push(item)
    //         })
    //     }
    // }, []);

    console.log(vagas)

    return (
        <>
            {
                vagas.map((vaga) => (
                    <h1>{vaga.nameCompany}</h1>
                ))
            }
        </>
    )
}