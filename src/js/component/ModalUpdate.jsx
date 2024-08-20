import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export default function ModalUpdate({id, name, address, email, tel, onClose}) {

    const [fullName, setFullName] = useState(name)
    const [updatedAddress, setUpdatedAddress] = useState(address)
    const [updatedEmail, setUpdatedEmail] = useState(email)
    const [phone, setPhone] = useState(tel)

    const { actions } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const updatedContact = {
            name: fullName,
            address: updatedAddress,
            email: updatedEmail,
            phone: phone,
            agenda_slug: "AngelSv"
        }

        actions.updateContact(id, updatedContact)
        onClose()
    }


    return(
        <div className="modal-container">
            <div className="modal-update">
                <div className="form-div">
                    <form className="form-modal" onSubmit={handleSubmit}>
                        <div className="form-title">
                            <p>Add a new contact</p>
                        </div>
                        <div>
                            <label>Full Name</label>
                            <input type="text" value={fullName || ""} onChange={(e) => setFullName(e.target.value)} placeholder="Full name" />
                        </div>
                        <div>
                            <label>Address</label>
                            <input type="text" value={updatedAddress || ""} onChange={(e) => setUpdatedAddress(e.target.value)} placeholder="Enter address"/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" value={updatedEmail || ""} onChange={(e) => setUpdatedEmail(e.target.value)} placeholder="Enter email"/>
                        </div>
                        <div>
                            <label>Phone</label>
                            <input type="number" value={phone || ""} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone"/>
                        </div>
                        <button type="submit" className="btn-form-save">Save</button>
                    </form>
                    <div className="div-form-close">
                        <button className="btn-form-close" onClick={onClose}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}