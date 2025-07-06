import { chakra } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { NavLink, useLocation, type LinkProps } from 'react-router'

const StyledNavLink = chakra(NavLink)

export default function Link({
	href,
	children,
	...props
}: {
	href: string
	children: ReactNode
	props?: LinkProps
}) {
	const location = useLocation()
	const isActive = location.pathname === href

	return (
		<StyledNavLink
			to={href}
			bg={isActive ? 'purple.500' : 'transparent'}
			color={isActive ? 'white' : 'gray.600'}
			fontWeight={isActive ? 'bold' : 'normal'}
			p={3}
			borderRadius="md"
			_hover={{
				textDecoration: 'none',
				bg: 'purple.100',
				color: 'purple.600',
			}}
			display="flex"
			alignItems="center"
			gap={3}
			{...props}
		>
			{children}
		</StyledNavLink>
	)
}
