import colors from 'tailwindcss/colors'

declare global {
  export type Colors = keyof typeof colors

  export interface UIProps<T> { ui?: T }
}

export {}
