import { For, type LinkProps } from '@chakra-ui/react'
import Link from '../ui/Link'
import { BiHome } from 'react-icons/bi'
import { MdDashboardCustomize } from 'react-icons/md'

type IMenuProps = Array<
	{
		Icon: any
		name: string
		href: string
	} & LinkProps
>

const navItemsConfig: IMenuProps = [
	{ href: '/', Icon: BiHome, name: 'Home' },
	{ href: '/dashboards', Icon: MdDashboardCustomize, name: 'Dashboard' },
]

export function NavItems({ ...props }: LinkProps) {

	return (
		<For each={navItemsConfig}>
			{({ href, Icon, name, ...personal }) => (
				<Link href={href} key={href} {...props} {...personal}>
					<Icon /> {name}
				</Link>
			)}
		</For>
	)
}

// export const NavItems = chakra(Menu)
