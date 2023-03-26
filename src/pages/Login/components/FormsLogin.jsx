import React, { useState } from "react";


import { Navigate } from 'react-router-dom';

import "./../styles/FormsLogin.css"
import USER_COMPANY from "../../../data/data";



export function FormsLogin(props) {

    const [cnpjCompany, setCnpjCompany] = useState("")
    const [passwordCompany, setPasswordCompany] = useState("")
    const [redirect, setRedirect] = useState(false);


    const handleCnpjCompany = (value) => {
        setCnpjCompany(value.target.value)
    }


    const handlePasswordCompany = (value) => {
        setPasswordCompany(value.target.value)


    }

    const isLoginSubmitCompany = (event) => {
        event.preventDefault();

        if (cnpjCompany == USER_COMPANY.cnpj && passwordCompany == USER_COMPANY.password) {
            window.alert("Bem-vindo")

            const timer = setTimeout(() => {
                setRedirect(true);
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            window.alert("cnpj ou senha errados")
        }


    }


    return redirect ? <Navigate to="/vagas" /> : (
        <>

            <div className="containerFormsLogin">


                <div className={props.styleStudant}>
                    <form className="formStudant" action="">
                        <input type="text" required placeholder="Email" />
                        <input type="password" required placeholder="Senha" />

                        <button type="submit">Entrar</button>
                    </form>

                </div>

                <div className={props.styleCompany}>
                    <form onSubmit={isLoginSubmitCompany} className="formCompany" action="">
                        <input value={cnpjCompany} onChange={handleCnpjCompany} type="text" required placeholder="cnpj" />
                        <input value={passwordCompany} onChange={handlePasswordCompany} type="password" required placeholder="senha" />

                        <button  type="submit" className="btnForm">Entrar</button>
                    </form>
                    {/* <button className="btnForm"><Link style={{textDecoration: 'none', color: '#fff'}} to={"/vagas"}>Entrar</Link></button> */}
                </div>



            </div>

            <span>user company: 12345 || password: 12345</span>
        </>
    )
}