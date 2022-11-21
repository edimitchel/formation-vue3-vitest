import { resolve } from 'path'
import { defineUnoSetup } from '@slidev/types'

export default defineUnoSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '**/*.{vue,ts}'),
    ],
  },
  shortcuts: {
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#000] text-[#fff])',
  },
}))
