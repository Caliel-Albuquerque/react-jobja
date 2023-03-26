import React, { useState, useEffect } from "react";


export function Home() {

    const [vagasArray, setVagasArray] = useState([])




    useEffect(() => {
        // Obtém a lista de produtos armazenada no sessionStorage
        const listaDeVagas = sessionStorage.getItem('vagas');
        if (listaDeVagas) {
            // Converte a string JSON em um array de objetos
            const listaDeVagasArray = JSON.parse(listaDeVagas);
            setVagasArray(listaDeVagasArray);
        }
    }, []);






    return (
        <>
            <ul>

                {
                    vagasArray.map((vaga) => (
                        <li key={vaga.id}>
                            <h1>{vaga.nameCompany}</h1>
                        </li>
                    ))
                }

            </ul>

        </>
    )
}