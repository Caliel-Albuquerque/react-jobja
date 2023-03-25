import React, { useState, useEffect } from "react";
// import JOBS from "../../data/data";

import "./style/AddvagaStyle.css"

export function Addvaga() {

    const [nameCompany, setNameCompany] = useState("");
    const [nameJob, setNameJob] = useState("");
    const [description, setDescription] = useState("");
    const [salaty, setSalary] = useState("");

    const [listJobs, setListJobs] = useState([])

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
        const newJob = { index: listJobs.indexOf.length, nameCompany: nameCompany, nameJob: nameJob, description: description, salary: salaty }

        setListJobs([...listJobs, newJob])


    }

    useEffect(() => {
        localStorage.setItem("vagas", JSON.stringify(listJobs));
    }, [listJobs]);


    return (
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