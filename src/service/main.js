import { initializeApp } from "firebase/app"
import { getDatabase, ref, onValue } from "firebase/database"

const firebaseConfig = {
	apiKey: "AIzaSyDtZIZUZ2zDTbOJBAnFRfCs6gAxYf0QXuo",
	authDomain: "aulaiot-e0c90.firebaseapp.com",
	databaseURL: "https://aulaiot-e0c90-default-rtdb.firebaseio.com/",
	projectId: "aulaiot-e0c90",
	storageBucket: "aulaiot-e0c90.appspot.com",
	messagingSenderId: "560068316386",
	appId: "1:560068316386:web:2b85179480c8418eaee2bb",
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const tableRef = ref(database, "centimeters")

export default tableRef
