import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
import Contact from "../component/Contact.jsx";

export function Home(){

    const { store, actions } = useContext(Context)

    const navigate = useNavigate()

    useEffect(() => {
        actions.loadAgend()
    },[])

    return(
        <>
            <header className="header">
                <button className="btn-home" onClick={() => navigate('/new-contact')}>Add new contact</button>
            </header>
            <main className="main">
                {store.contacts.map((item, index) => {
                    return(
                        <Contact 
                        key={item.id}
                        name={item.name}
                        address={item.address}
                        tel={item.phone}
                        email={item.email}
                        />
                    )
                })}
            </main>
        </>
    )

}
    
    