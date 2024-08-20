import React, { useCallback, useContext, useState } from "react";
import { Context } from "../store/appContext";
import ModalUpdate from "./ModalUpdate.jsx";
import ModalDelete from "./ModalDelete.jsx";

export default function Contact({id, name, address, tel, email}) {

    const { actions } = useContext(Context)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)

    
    const openModalEdit = () => {
        setShowModalEdit(true)
    }
    const closeModalEdit = () => {
        setShowModalEdit(false)
    }

    const openModalDelete = () => {
        setShowModalDelete(true)
    }
    const closeModalDelete = () => {
        setShowModalDelete(false)
    }
    const handleDelete = useCallback(() => {
        actions.deleteContact(id)
        closeModalDelete()
    }, [actions, id])

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
                    <button onClick={openModalEdit}>Editar</button>
                    <button onClick={() => openModalDelete()}>Eliminar</button>
                </div>
            </div>
            {showModalEdit && (
                <ModalUpdate
                    id={id}
                    name={name}
                    address={address}
                    email={email}
                    tel={tel}
                    onClose={closeModalEdit}
                />
            )}
            {showModalDelete && (
                <ModalDelete
                    id={id}
                    onClose={closeModalDelete}
                    onDelete={handleDelete}
                />
            )}
        </>
    )
}