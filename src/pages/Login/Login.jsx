import React, { useState } from "react";

import { FormsLogin } from "./components/FormsLogin";

export function Login(){

    const [styleNoneStudant, setStyleNoneStudant] = useState("")
    const [styleNoneCompany, setStyleNoneCompany] = useState("noneForm")

    function handleStyleButtonCompany()  {
        setStyleNoneStudant("noneForm")
        setStyleNoneCompany("")
    }

    function handleStyleButtonStudant()  {
        setStyleNoneStudant("")
        setStyleNoneCompany("noneForm")
    }
    
    return(
        <>

            <img className="logoSenac" src="public\imgs\LogoSenac.png" width={180}/>

            <div className="containerBtn">
                <button onClick={handleStyleButtonStudant}>Estudante</button>
                <button onClick={handleStyleButtonCompany}>Empresa</button>
            </div>



            <FormsLogin 
                styleStudant={styleNoneStudant}
                styleCompany={styleNoneCompany}
            />
        </>
    )
}