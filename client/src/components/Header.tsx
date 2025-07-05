import { Center, Flex, Icon, Link, Spacer } from '@chakra-ui/react'
import Wrapper from './ui/Wrapper'
import { BiHome, BiUser } from 'react-icons/bi'

import { MdDashboardCustomize } from 'react-icons/md'

export default function Header() {
	return (
		<Center pos={'relative'} w={'full'} h={['90px', '100px']} bg="white">
			<Wrapper pos={'fixed'} bg="white" h={['90px', '100px']}>
				<Flex
					boxSize={'full'}
					fontSize={['sm', 'md', 'lg', 'xl']}
					align={'center'}
					justify={'space-around'}
					direction={'column'}
					css={{
						'& > *': {
							fontSize: 'inherit',
						},
					}}
				>
					<Flex
						justify={'center'}
						align={'center'}
						gap={[2, 4, 6, 8]}
						w={'full'}
						wrap="wrap"
					>
						<Link href="/">
							<BiHome /> Home
						</Link>
						<Link href="/dashboards">
							<MdDashboardCustomize /> Dashboard
						</Link>
						<Spacer hideBelow={'360px'} />

						<Center gap={2}>
							Anonymus
							<Icon
								as={BiUser}
								bg={'gray.200'}
								boxSize={['10', '11', '12', '13']}
								p={2}
								color={'white'}
								rounded={'md'}
							></Icon>
						</Center>
					</Flex>
					{/* <SearchBoard /> */}
				</Flex>
			</Wrapper>
		</Center>
	)
}
