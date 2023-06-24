import {Route, Routes} from "react-router-dom";
import {ROUTES_DATA} from "./mockData/routes.js";
import Main from "./pages/main";
import NotFound from "./pages/notfound/";
import './App.css'
function App() {
	return (
		<>
			<Routes>
				<Route path={ROUTES_DATA.Main} element={<Main />}/>
				<Route path={ROUTES_DATA.NotFound} element={<NotFound />}/>
			</Routes>
		</>
	)
}

export default App
