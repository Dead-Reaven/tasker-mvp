import { Center, Flex, Spacer } from '@chakra-ui/react'
import Wrapper from '../ui/Wrapper'

import BurgerMenu from './BurgerMenu'
import Avatar from '../ui/Avatar'
import { NavItems } from './NavItems'
import useBreakPoint from '@/hooks/useBreakPoint'

export default function Header() {
	const breakpoint = useBreakPoint()
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
					{breakpoint.isMobile ? <BurgerMenu /> : <NavItems />}
					<Spacer />
					<Avatar />
				</Flex>
			</Wrapper>
		</Center>
	)
}
