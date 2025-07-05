import Header from '@/components/Header'
import Wrapper from '@/components/ui/Wrapper'
import { Outlet } from 'react-router'

export default function RootLayout() {
	return (
		<Wrapper minH="100vh">
			<Header />
			<Outlet />
		</Wrapper>
	)
}
