import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import ModalUpdate from "./ModalUpdate.jsx";

export default function Contact({id, name, address, tel, email}) {

    const { actions } = useContext(Context)
    const [showModal, setShowModal] = useState(false)

    const deleteContact = () => {
        actions.deleteContact(id)
    }

    const handleEdit = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }

    return(
        <>
            <div className="contact">
                <div className="contact-info">
                    <div><img className="img-contact" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6lZJ1sgRzwv6DARHJdNx3IImEukvu5DHbA&s"/></div>
                    <div className="contact-info-text">
                        <p>{name}</p>
                        <p>{address}</p>
                        <p>{tel}</p>
                        <p>{email}</p>
                    </div>
                </div>
                <div className="contact-actions">
                    <button onClick={handleEdit}>Editar</button>
                    <button onClick={() => deleteContact()}>Eliminar</button>
                </div>
            </div>
            {showModal && (
                <ModalUpdate
                    id={id}
                    name={name}
                    address={address}
                    email={email}
                    tel={tel}
                    onClose={closeModal}
                />
            )}
        </>
    )
}