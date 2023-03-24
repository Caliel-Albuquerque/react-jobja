import React, { useState } from "react";



import "./../styles/FormsLogin.css"
import { Link } from "react-router-dom";



export function FormsLogin(props) {

    const [cnpjCompany, setCnpjCompany] = useState("")
    const [passwordCompany, setPasswordCompany] = useState("")
    

    const handleCnpjCompany = (value) => {
        setCnpjCompany(value.target.value)
    }


    const handlePasswordCompany = (value) => {
        setPasswordCompany(value.target.value)


    }



    return (
        <>

            <div className="containerFormsLogin">
            

                <div className={props.styleStudant}>
                    <form className="formStudant" action="">
                        <input  type="text" required placeholder="Email"/>
                        <input  type="password" required placeholder="Senha"/>

                        <button type="submit">Entrar</  button>
                    </form>

                </div>

                <div className={props.styleCompany}>
                    <form className="formCompany" action="">
                        <input value={cnpjCompany} onChange={handleCnpjCompany} type="text" required placeholder="cnpj" />
                        <input value={passwordCompany} onChange={handlePasswordCompany} type="password" required placeholder="senha" />

                       
                    </form>
                    <button><Link style={{textDecoration: 'none', color: '#000'}} to={"/vagas"}>Entrar</Link></button>
                </div>



            </div>


        </>
    )
}