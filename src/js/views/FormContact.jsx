import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { number } from "prop-types";

export function FormContact() {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const { actions } = useContext(Context) 
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newContact ={
            name: fullName,
            email: email,
            phone: phone,
            address: address,
            agenda_slug: "AngelSv"
        }
        actions.addNewContact(newContact)

        setFullName("")
        setEmail("")
        setPhone("")
        setAddress("")
    }


    return(
        <>
        <div className="form-div">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-title">
                    <p>Add a new contact</p>
                </div>
                <div>
                    <label>Full Name</label>
                    <input type="text" value={fullName || ""} onChange={(e) => setFullName(e.target.value)} placeholder="Full name" />
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" value={address || ""} onChange={(e) => setAddress(e.target.value)} placeholder="Enter adress"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email || ""} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
                </div>
                <div>
                    <label>Phone</label>
                    <input type="number" value={phone || ""} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone"/>
                </div>
                <button className="btn-form-save">Save</button>
            </form>
            <div className="btn-form-return">
            <button onClick={() => navigate('/home')}>or get back to contacts</button>
            </div>
        </div>
        </>
    )

}
