import { useBreakpoint } from '@chakra-ui/react'
import { breakpoints } from '../../theme'

export default function useBreakPoint() {
	const current = useBreakpoint({
		breakpoints: Object.keys(breakpoints),
	}) as keyof typeof breakpoints

	const width = window.innerWidth

	const isMobile = width <= parsePxToNumber('md')
	const isTablet =
		width >= parsePxToNumber('md') && width <= parsePxToNumber('lg')
	const isScreen = width >= parsePxToNumber('lg')

	return { current, isMobile, isTablet, isScreen }
}

function parsePxToNumber(str: keyof typeof breakpoints) {
	return parseInt(breakpoints[str])
}
