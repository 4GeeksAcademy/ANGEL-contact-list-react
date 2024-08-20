import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export default function ModalUpdate({id, name, address, email, tel, onClose}) {

    const [form, setForm] = useState({
        name: name,
        address: address,
        email: email,
        phone: tel
    })

    const { actions } = useContext(Context)

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm((prevForm) => ({
            ...prevForm, [name] :value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const updatedContact = {
            name: form.name,
            address: form.address,
            email: form.email,
            phone: form.phone,
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
                            <input name="name" type="text" value={form.name || ""} onChange={handleChange} placeholder="Full name" />
                        </div>
                        <div>
                            <label>Address</label>
                            <input name="address" type="text" value={form.address || ""} onChange={handleChange} placeholder="Enter address"/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input name="email" type="text" value={form.email || ""} onChange={handleChange} placeholder="Enter email"/>
                        </div>
                        <div>
                            <label>Phone</label>
                            <input name="phone" type="number" value={form.phone || ""} onChange={handleChange} placeholder="Enter phone"/>
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