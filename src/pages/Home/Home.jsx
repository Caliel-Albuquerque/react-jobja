import React, { useState, useEffect } from "react";
import { v4 as uuidv4, v4 } from 'uuid';

import "./styles/Home.css"
import { Link } from "react-router-dom";

export function Home() {

    const [vagasArray, setVagasArray] = useState([
        {
            id: v4(), 
            nameCompany: "Microsoft", 
            nameJob: "Front-end", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil aut, distinctio consectetur officia id repudiandae velit, delectus alias aliquam deleniti sunt aperiam ullam quidem nam, ipsam nostrum! Fugiat, neque sed.", 
            salary: 1500, 
            logo: "/imgs/logoCompany.png"
        }
    ])




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
            <ul className="listJobs">

                {
                    vagasArray.map((vaga) => (
                        <li key={vaga.id}>
                            <img src={vaga.logo} alt="" />
                            <div className="content">
                                <h1>{vaga.nameCompany}</h1>
                                <h3>{vaga.nameJob}</h3>
                                <h4>{vaga.salary}</h4>
                            </div>
                        </li>
                    ))
                }

            </ul>


            <div>
                <Link to="/vagas">Adicionar vagas</Link>
            </div>
        </>
    )
}