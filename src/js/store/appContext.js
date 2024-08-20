import React, { useState } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null)

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35

const Provider = ({children}) => {
	const [state, setState] = useState(
		getState({
			getStore: () => state.store,
			getActions: () => state.actions,
			setStore: updateStore => 
				setState({
					store: Object.assign(state.store, updateStore),
					actions: {...state.actions}
				})
		})
	)

	return(
		<Context.Provider value={state}>
			{children}
		</Context.Provider>
	)
}


export default Provider;
