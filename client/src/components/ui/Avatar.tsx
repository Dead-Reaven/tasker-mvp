import { Center, Icon } from '@chakra-ui/react'
import { BiUser } from 'react-icons/bi'

export default function Avatar() {
	return (
		<Center gap={2}>
			Anonymus
			<Icon
				as={BiUser}
				bg={'gray.200'}
				boxSize={['10', '11', '12', '13']}
				p={2}
				color={'white'}
				rounded={'md'}
			/>
		</Center>
	)
}
