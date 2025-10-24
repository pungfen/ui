import { cva, cx } from 'class-variance-authority'
import { computed, defineComponent } from 'vue'

const ui = cva('inline-flex items-center gap-2', {
  compoundVariants: [
    {
      class: 'text-red-500 hover:text-red-600',
      color: 'red',
      type: 'default'
    }
  ],
  variants: {
    color: {
      cyan: '',
      gray: '',
      green: '',
      red: '',
      yellow: ''
    },
    type: {
      default: 'rounded-md px-3 py-1 text-white',
      plain: 'rounded-md px-3 py-1 ring-1 ring-inset ring-current',
      text: ''
    }
  }
})

export type ButtonColors = Extract<Colors, 'cyan' | 'gray' | 'green' | 'red' | 'yellow'>

export interface XButtonProps extends UIProps<string> {
  color?: ButtonColors
  disabled?: boolean
  type?: 'default' | 'plain' | 'text'
}

export const XButton = defineComponent(
  (props: XButtonProps, { slots }) => {
    const type = computed(() => props.type ?? 'default')

    return () => (
      <button
        class={
          cx(
            ui(
              {
                color: props.color,
                type: type.value
              }
            ),
            props.ui
          )
        }
        disabled={props.disabled}
      >
        {{ default: slots.default }}
      </button>
    )
  },
  { props: ['color', 'disabled', 'type', 'ui'] }
)
