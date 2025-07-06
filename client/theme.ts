import {
    createSystem,
    defaultConfig,
    defineConfig,
} from '@chakra-ui/react'


export const breakpoints = {
    sm: '420px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1440px',
}

const config = defineConfig({
    theme: {
        breakpoints
    },
})
export const theme = createSystem(defaultConfig, config)

// console.log(system.breakpoints.keys())
