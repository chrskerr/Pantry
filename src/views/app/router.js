
// deps
import React, { useContext } from "react";

// app
import { UI } from "./services";

//
// Pantry / Views / App / App
//


export default function Router () {
	const { openPanel, closePanel } = useContext( UI );
	return (
		<div className="App">
			<button onClick={ () => openPanel({ panel: "test", props: { id: "123" }}) }>Open</button>
			<button onClick={ () => closePanel() }>Close</button>
		</div>
	);
}
