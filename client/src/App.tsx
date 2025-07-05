import { Route, Routes } from 'react-router'
import DashBoardPage from './pages/DashBoard'
import HomePage from './pages/Home'
import SingleDashBoardPage from './pages/SingleDashBoard'
import RootLayout from './layout/RootLayout'

function App() {
	return (
		<Routes>
			<Route Component={RootLayout}>
				<Route index path="/" Component={HomePage} />
				<Route path="/dashboards" Component={DashBoardPage} />
				<Route path="/dashboards/:id" Component={SingleDashBoardPage} />
			</Route>
		</Routes>
	)
}

export default App
