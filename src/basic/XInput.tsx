import { cva, cx } from 'class-variance-authority'
import { computed, defineComponent } from 'vue'

const ui = cva('inline-flex w-full items-center overflow-hidden rounded-md px-2 ring-1 ring-inset focus-within:ring-cyan-500', {
  defaultVariants: { disabled: false },
  variants: { disabled: { true: 'cursor-not-allowed' } }
})

export interface XInputProps extends UIProps<string> {
  disabled?: boolean
  modelValue?: number | string
  placeholder?: string
  type?: XInputType
}

export type XInputType = 'number' | 'password' | 'text'

export const XInput = defineComponent(
  (props: XInputProps, { emit }) => {
    const model = computed(() => props.modelValue ?? '')

    const type = computed(() => props.type ?? 'text')
    const disabled = computed(() => props.disabled)
    const placeholder = computed(() => props.placeholder)

    const onInput = (e: Event) => {
      const v = (e.target as HTMLInputElement).value
      emit('update:modelValue', v)
    }
    const onfocus = (e: Event) => {
      emit('focus', e)
    }

    return () => (
      <div class={cx(ui({ disabled: disabled.value }), props.ui)}>
        <input
          class={cx('ml-1 min-w-0 flex-1 border-none first:ml-0', disabled.value ? 'pointer-events-none bg-gray-200' : '')}
          disabled={disabled.value}
          onFocus={onfocus}
          onInput={onInput}
          placeholder={placeholder.value}
          type={type.value}
          value={model.value}
        />
      </div>
    )
  },
  {
    emits: ['update:modelValue', 'focus'],
    props: ['type', 'disabled', 'modelValue']
  }
)
