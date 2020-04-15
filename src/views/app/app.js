
// deps
import React, { useState } from "react";

// app
import { Auth } from "./services";
import Router from "./router";
import ApolloProvider from "./apollo";

//
// Pantry / Views / App / App
//


export default function App () {
	const [ auth, setAuth ] = useState({
		authUser: {},
		isAuthenticating: false,
		isAuthenticated: false,
		isAdmin: false,
		updateAuth: payload => setAuth( auth => ({ ...auth, ...payload })),
	});

	return (
		<div className="App">
			<Auth.Provider value={ auth }>
				<ApolloProvider>
					<Router />
				</ApolloProvider>
			</Auth.Provider>
		</div>
	);
}
