import React, { useState } from "react";
// import JOBS from "../../data/data";

export function Addvaga(){

    const [nameCompany, setNameCompany] = useState("");
    const [nameJob, setNameJob] = useState("");
    const [description, setDescription] = useState("");
    const [salaty, setSalary] = useState(0);

    const [listJobs, setListJobs] = useState([
        {
            index: 0 ,
            nameCompany: "", 
            nameJob: "", 
            description: "", 
            salary: "",
            logo: "C:\Users\calie\Documents\T.I\JobJá\react-jobja\public\imgs\Company logo.png",
            bg: "C:\Users\calie\Documents\T.I\JobJá\react-jobja\public\imgs\backgroundJob.png"

        }
    ])

    const handlenameCompany = (value) =>{
        setNameCompany(value.target.value)
    }

    const handlenameJob = (value) =>{
        setNameJob(value.target.value)
    }

    const handleDescription = (value) =>{
        setDescription(value.target.value)
    }

    const handleSalary = (value) =>{
        setSalary(value.target.value)
    }

    const handleAddJob = (event) => {
        event.preventDefault();
        const newJob = {index: listJobs.indexOf.length ,nameCompany: nameCompany, nameJob: nameJob, description: description, salary: salaty}

        setListJobs([...listJobs, newJob])

        
    }

    listJobs.map((job) => {
        console.log(job)
    })

    return(
        <>
           <form onSubmit={handleAddJob} action="">

            <input value={nameCompany} onChange={handlenameCompany} type="text" required placeholder="nome da empresa"/>
            <input value={nameJob} onChange={handlenameJob} type="text" required placeholder="nome da vaga"/>
            <input value={description} onChange={handleDescription} type="text" required placeholder="descição da vaga"/>
            <input value={salaty} onChange={handleSalary} type="number" required placeholder="Salário"/>


                <button type="submit">Cadastrar</button>
           </form>
        </>
    )
}