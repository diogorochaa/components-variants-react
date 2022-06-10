import { Card } from "./components/Card"
import styles from "./App.module.css"
import tableRef from "./service/main"
import { useEffect, useState } from "react"
import { onValue } from "firebase/database"

function App() {
	const [distance, setDistance] = useState(0)

	useEffect(() => {
		onValue(tableRef, (value) => {
			setDistance(+value.val())
		})
	}, [])

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
