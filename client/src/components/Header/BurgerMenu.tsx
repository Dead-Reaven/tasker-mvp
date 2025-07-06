import { Button, CloseButton, Drawer, Portal } from '@chakra-ui/react'
import Avatar from '../ui/Avatar'

export default function BurgerMenu() {
	return (
		<Drawer.Root size={'lg'}>
			<Drawer.Trigger asChild>
				<Button variant="outline">Open Drawer</Button>
			</Drawer.Trigger>
			<Portal>
				<Drawer.Backdrop />
				<Drawer.Positioner padding={1}>
					<Drawer.Content r={'16px'} rounded={20}>
						<Drawer.Header>
							<Drawer.Title>
								<Avatar />
							</Drawer.Title>
						</Drawer.Header>

						<Drawer.Body></Drawer.Body>

						<Drawer.CloseTrigger asChild>
							<CloseButton size="sm" />
						</Drawer.CloseTrigger>
					</Drawer.Content>
				</Drawer.Positioner>
			</Portal>
		</Drawer.Root>
	)
}
