import React from "react";

import "./../styles/FormsLogin.css"

export function FormsLogin(props){

    console.log(props)
    return(
        <>
        
            <div className="containerFormsLogin">


                <div className={props.styleStudant}>
                    <form className="formStudant" action="">
                        <input type="text" required placeholder="email"/>
                        <input type="password" required placeholder="senha"/>

                        <button type="submit">Entrar</button>
                    </form>

                </div>

                <div className={props.styleCompany}>
                    <form className="formCompany" action="">
                        <input type="text" required placeholder="cnpj"/>
                        <input type="password" required placeholder="senha"/>

                        <button type="submit">Entrar</button>
                    </form>

                </div>



            </div>
        
        
        </>
    )
}