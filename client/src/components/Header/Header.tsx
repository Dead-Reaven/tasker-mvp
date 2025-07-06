import { Center, Flex, Spacer } from '@chakra-ui/react'
import Wrapper from '../ui/Wrapper'

import BurgerMenu from './BurgerMenu'
import Avatar from '../ui/Avatar'
import { MenuItems } from './MenuItems'
import useBreakPoint from '@/hooks/useBreakPoint'

export default function Header() {
	const hook = useBreakPoint()

    console.log(hook)
	return (
		<Center pos={'relative'} w={'full'} h={'80px'} bg="white">
			<Wrapper pos={'fixed'} bg="white" h={'80px'}>
				<Flex
					boxSize={'full'}
					fontSize={['sm', 'md', 'lg', 'xl']}
					justify={'center'}
					align={'center'}
					wrap="wrap"
					gap={[1, 4, 6, 8]}
				>
					<MenuItems />
					<BurgerMenu />
					<Spacer />
					<Avatar />
				</Flex>
			</Wrapper>
		</Center>
	)
}
