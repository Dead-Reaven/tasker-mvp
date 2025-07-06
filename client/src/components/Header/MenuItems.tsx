import { chakra, Link } from '@chakra-ui/react'
import { BiHome } from 'react-icons/bi'
import { MdDashboardCustomize } from 'react-icons/md'

function Menu() {
	return (
		<>
			<Link href="/">
				<BiHome /> Home
			</Link>
			<Link href="/dashboards">
				<MdDashboardCustomize /> Dashboard
			</Link>
		</>
	)
}

export const MenuItems = chakra(Menu)
