import React from "react";

import { FormsLogin } from "./components/FormsLogin";

export function Login(){
    return(
        <>
            <div className="containerBtn">
                <button>Estudante</button>
                <button>Empresa</button>
            </div>



            <FormsLogin/>
        </>
    )
}