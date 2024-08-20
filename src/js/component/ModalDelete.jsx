import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export default function ModalDelete({onClose, onDelete}) {

    return(
        <div className="modal-container">
            <div className="modal-delete">
                <div>
                    <h3>¿Seguro que desea eliminar este contacto?</h3>
                </div>
                <div className="modal-delete-buttons">
                    <button className="modal-delete-btn-delete" onClick={onDelete}>Eliminar</button>
                    <button className="modal-delete-btn-close" onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>
    )
}