
// deps
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

// app
import { Auth } from "./services";

//
// Pantry / Views / App / Apollo Provider
//


export default function Apollo ({ children }) {
	const { authUser, isAuthenticated } = useContext( Auth );

	const client = new ApolloClient({
		uri: "https://pantry-hasura-service.herokuapp.com/v1/graphql",
		headers: isAuthenticated 
			? { Authorization: `Bearer ${ authUser.token }` } 
			: {},
	});

	// const [ modal, setModal ] = useState( false );
	// const [ formData, setFormData ] = useState({});
	// const [ loginError, setLoginError ] = useState();
	// const [ loading, setLoading ] = useState( false );

	// useEffect(() => {
	// 	return firebase.auth().onAuthStateChanged( async user => {
	// 		if ( user ) {
	// 			const token = await user.getIdToken();
	// 			const idTokenResult = await user.getIdTokenResult();
	// 			const hasuraClaim = idTokenResult.claims[ "https://hasura.io/jwt/claims" ];
	// 			if ( hasuraClaim ) setAuthState({ user, token });
	// 		} else {
	// 			setAuthState( false );
	// 		}
	// 	});
	// }, []);

	// const handleLogin = async e => {
	// 	e.preventDefault();
	// 	setLoginError( false );
	// 	const { email, password } = formData;

	// 	try {	
	// 		setLoading( true );
	// 		await firebase.auth().signInWithEmailAndPassword( email, password );
	// 		setFormData({});
	// 		setModal( false );
	// 		setAuthState( true );
	// 	} 
	// 	catch ( err ) {
	// 		setLoginError( err );
	// 		setFormData({ ...formData, password: "" });

	// 	} 
	// 	finally {
	// 		setLoading( false );
	// 	}
	// };

	// const logOut = () => {
	// 	firebase.auth().signOut();
	// 	setAuthState( false );
	// };

	return (
		<ApolloProvider client={ client }>
			{ children }
		</ApolloProvider>
	);
}
Apollo.propTypes = {
	children: PropTypes.node,
};