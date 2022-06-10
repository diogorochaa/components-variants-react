import { Card } from "./components/Card"
import styles from "./App.module.css"

import { useState } from "react"

function App() {
	const [distance, setDistance] = useState(0)

	return (
		<div className={styles.App}>
			<Card
				key="1"
				title={`Distancia atual: ${distance}`}
				children={distance > 30 ? "Você está muito longe" : "Você está perto"}
			/>
		</div>
	)
}

export default App
