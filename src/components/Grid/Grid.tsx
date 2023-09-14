import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'

const grid = tv({
    base: `
        [--outer-width:_theme(screens.xl)]
        [--outer-padding:_theme(spacing.6)]
        [--inner-gap-x:_theme(spacing.4)]
        [--track-number:_12]
        grid
        grid-cols-[[entire-start]_1fr_[outer-start]_var(--outer-padding)_[inner-start]_repeat(calc(var(--track-number)_-_1),_[track-start]_minmax(0,_calc((var(--outer-width)_-_var(--outer-padding)_*_2_-_var(--inner-gap-x)_*_(var(--track-number)_-_1))_/_var(--track-number)))_[track-end]_var(--inner-gap-x))_[track-start]_minmax(0,_calc((var(--outer-width)_-_var(--outer-padding)_*_2_-_var(--inner-gap-x)_*_(var(--track-number)_-_1))_/_var(--track-number)))_[track-end_inner-end]_var(--outer-padding)_[outer-end]_1fr_[entire-end]]
    `,
})

type GridProps<E extends React.ElementType> = React.ComponentPropsWithRef<E> & VariantProps<typeof grid> & {
    asChild?: boolean
}

export const Grid = React.forwardRef(function Grid(props: GridProps<'div'>, ref: any) {
    const { className, asChild, ...otherProps } = props
    const Component = asChild ? Slot : 'div'
    return (
        <Component ref={ref} className={grid({ className })} {...otherProps}/>
    )
})
