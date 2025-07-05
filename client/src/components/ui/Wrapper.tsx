import { Container, type ContainerProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'

type IWrapper = {
	children: ReactNode
} & ContainerProps

export default function Wrapper({ children, ...props }: IWrapper) {
	return (
		<Container
			centerContent

			px={[2, 4, 6, 8]}
			pos={'relative'}
			{...props}
		>
			{children}
		</Container>
	)
}
