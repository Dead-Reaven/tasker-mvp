import { Button, Flex, Input } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'

export default function SearchBoard() {
	return (
		<Flex
			gap={2}
			w={'full'}
			pos={'sticky'}
			top={20}
			bg={'white'}
			pb={4} /*  pt={2} */
		>
			<Input type="text" placeholder="Enter board name..."></Input>
			<Button colorPalette={'purple'} variant={'solid'}>
				<BiSearch></BiSearch>
			</Button>
			{/* <Button colorPalette={'purple'} variant={'outline'}>
							<IoAdd />
						</Button> */}
		</Flex>
	)
}
