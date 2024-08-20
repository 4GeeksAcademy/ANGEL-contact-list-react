import React from "react";

export default function Contact({name, address, tel, email}) {
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
                    <button>Editar</button>
                    <button>Eliminar</button>
                </div>
            </div>
        </>
    )
}