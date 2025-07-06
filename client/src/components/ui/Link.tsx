import { chakra } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { NavLink, useLocation } from "react-router";

const StyledNavLink = chakra(NavLink)

export default function Link({ href, children }: { href: string; children: ReactNode }) {
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
		>
			{children}
		</StyledNavLink>
	)
}

