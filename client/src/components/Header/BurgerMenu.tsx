import { CloseButton, Drawer, Portal, VStack } from '@chakra-ui/react'
import Avatar from '../ui/Avatar'
import { FiAlignJustify } from 'react-icons/fi'
import { NavItems } from './NavItems'

export default function BurgerMenu() {
	return (
		<Root size={'lg'} placement={'start'}>
			<Trigger asChild>
				<FiAlignJustify size={40} />
			</Trigger>
			<Portal>
				<Backdrop />
				<Positioner padding={1}>
					<Content r={'16px'} rounded={20} h={'full'}>
						<Header>
							<Title>
								<Avatar />
							</Title>
						</Header>
						<Context>
							{(state) => (
								<Body h={'full'}>
									<VStack
										gap={10}
										fontSize={40}
										justify={'center'}
										h={'full'}
									>
										<NavItems
											onClick={() => state.setOpen(false)}
										/>
									</VStack>
								</Body>
							)}
						</Context>

						<CloseTrigger asChild>
							<CloseButton size="lg" />
						</CloseTrigger>
					</Content>
				</Positioner>
			</Portal>
		</Root>
	)
}

const {
	Root,
	Backdrop,
	Body,
	CloseTrigger,
	Content,
	Header,
	Positioner,
	Title,
	Trigger,
	Context,
} = Drawer
