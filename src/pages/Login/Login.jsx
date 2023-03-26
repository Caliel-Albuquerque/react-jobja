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

            <img className="logoSenac" src="/imgs/LogoSenac.png" width={180}/>

            <div className="containerBtn">
                <button className="styleBtn" onClick={handleStyleButtonStudant}>Estudante</button>
                <button className="styleBtn" onClick={handleStyleButtonCompany}>Empresa</button>
            </div>



            <FormsLogin 
                styleStudant={styleNoneStudant}
                styleCompany={styleNoneCompany}
            />
        </>
    )
}