
// deps
import React, { useState } from "react";

// app
import { Auth, UI } from "./services";
import Router from "./router";
import ApolloProvider from "./apollo";
import { Panel } from "../index";

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
	const [ ui, setUI ] = useState({
		panel: {},
		openPanel: payload => setUI( ui => ({ ...ui, panel: payload })),
		closePanel: () => setUI( ui => ({ ...ui, panel: {}})),
		notifications: [{}],
		addNotification: () => {},
	});

	return (
		<div className="App">
			<Auth.Provider value={ auth }>
				<UI.Provider value={ ui }>
					<ApolloProvider>
						<Panel />
						<Router />
					</ApolloProvider>
				</UI.Provider>
			</Auth.Provider>
		</div>
	);
}
