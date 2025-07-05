import Header from '@/components/Header'
import { Container } from '@chakra-ui/react'

export default function RootLayout() {
	return (
		<Container centerContent minH="100vh">
			<Header />
			<slot></slot>
		</Container>
	)
}
