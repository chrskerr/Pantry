
// deps
import { createContext } from "react";

//
// Pantry / Views / App / Services
//


export const Auth = createContext({
	authUser: {},
	isAuthenticating: false,
	isAuthenticated: false,
	isAdmin: false,
	updateAuth: () => {},
});

export const UI = createContext({
	panel: {},
	openPanel: () => {},
	closePanel: () => {},
	notifications: [{}],
	addNotification: () => {},
});
