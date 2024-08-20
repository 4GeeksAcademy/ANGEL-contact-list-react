const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agendName: "",
			contacts: []
		},
		actions: {
			//Listar contactos
			loadAgend: () => {
				const AGEND_NAME = 'https://playground.4geeks.com/contact/agendas/AngelSv'
				fetch(AGEND_NAME)
				.then(async res => {
					if(res.ok){
						return res.json()
					}else if(res.status === 404){
						const res_1 = await fetch(AGEND_NAME, {
							method: 'POST',
							headers: {
								'Content-type': 'application/json'
							},
							body: JSON.stringify({ 'slug': 'AngelSv' })
						});
						return await res_1.json();
					}else{
						throw new Error("Error al obtener la agenda")
					}
				})
				.then(data => {
					setStore({
						agendName: data.slug,
						contacts: data.contacts
					})
				})
				.catch(error => console.error('Error:', error))
			},
			
			//Añadir contacto
			addNewContact: (newContact) => {
				fetch('https://playground.4geeks.com/contact/agendas/AngelSv/contacts', {
					method: "POST",
					headers : {
						'Content-type': 'application/json'
					},
					body : JSON.stringify(newContact)
				})
				.then(res => res.json())
				.then(data => {
					setStore({
						contacts: [...store.contacts, data]
					})
				})
				.catch(error => console.error("Error:", error))
			},

			//Eliminar contacto
			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/AngelSv/contacts/${id}`, {
					method: 'DELETE',
				})
				.then(res => {
					if(!res.ok){
						throw new Error("Error al eliminar contacto")
					}
					getActions().loadAgend()
				})
				.catch(error => {
					console.error('Error', error)
				})
			},

			//Editar contacto
			updateContact: (id, updatedContact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/AngelSv/contacts/${id}`,{
					method: 'PUT',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify(updatedContact)
				})
				.then(res => res.json())
				.then(data => {
					const store = getStore()
					const updateContacts = store.contacts.map(contact => 
						contact.id === id ? data : contact
					)
					setStore({contacts: updateContacts})
				})
				.catch(error => {
					console.error("Error al actualizar contacto: ", error)
				})
			}
		}
	};
};

export default getState;
