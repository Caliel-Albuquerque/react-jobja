import React, { useState, useEffect } from "react";
import { v4 as uuidv4, v4 } from 'uuid';
import { Navigate } from 'react-router-dom';
// import JOBS from "../../data/data";

import "./style/AddvagaStyle.css"


export function Addvaga() {

    const [nameCompany, setNameCompany] = useState("");
    const [nameJob, setNameJob] = useState("");
    const [description, setDescription] = useState("");
    const [salaty, setSalary] = useState("");

    const [listJobs, setListJobs] = useState([])
    const [redirect, setRedirect] = useState(false);

    const handlenameCompany = (value) => {
        setNameCompany(value.target.value)
    }

    const handlenameJob = (value) => {
        setNameJob(value.target.value)
    }

    const handleDescription = (value) => {
        setDescription(value.target.value)
    }

    const handleSalary = (value) => {
        setSalary(value.target.value)
    }

    const handleAddJob = (event) => {
        event.preventDefault();
        const newJob = { id: v4(), nameCompany: nameCompany, nameJob: nameJob, description: description, salary: salaty }

        setListJobs([...listJobs, newJob])

        window.alert("Vaga adicionada")

        const timer = setTimeout(() => {
            setRedirect(true);
        }, 3000);
        return () => clearTimeout(timer);
    }

    useEffect(() => {
        sessionStorage.setItem('vagas', JSON.stringify(listJobs));
    }, [listJobs]);




    return redirect ? <Navigate to="/home" /> : (
        <>

            <h1 className="title">Adicione a sua Vaga</h1>


            <form className="formAddvaga" onSubmit={handleAddJob} action="">

                <input value={nameCompany} onChange={handlenameCompany} type="text" required placeholder="nome da empresa" />
                <input value={nameJob} onChange={handlenameJob} type="text" required placeholder="nome da vaga" />
                <input value={description} onChange={handleDescription} type="text" required placeholder="descição da vaga" />
                <input value={salaty} onChange={handleSalary} type="number" required placeholder="Salário" />


                <button className="btnForm" type="submit">Cadastrar</button>
            </form>
        </>
    )
}