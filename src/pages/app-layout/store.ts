import { atomWithStorage } from 'jotai/utils'

export type LightMode = 'white' | 'blue'

export const lightModeAtom = atomWithStorage<LightMode>('lightMode', 'white')
