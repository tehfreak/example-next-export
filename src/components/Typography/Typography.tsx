import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'

const typography = tv({
    base: "",

    variants: {
        variant: {
            title1: "text-4xl lg:text-6xl font-display font-bold !leading-tight",
            tagline1: "text-xl lg:text-2xl font-display font-light !leading-relaxed",
            h2: "text-2xl font-bold",
            text1: "text-lg font-medium",
        },
    },

    defaultVariants: {
        variant: "title1",
    },

})

type TypographyProps<E extends React.ElementType> = React.ComponentPropsWithRef<E> & VariantProps<typeof typography> & {
    asChild?: boolean;
}

export const Typography = React.forwardRef(function Typography(props: TypographyProps<'div'>, ref: any) {
    const { className, variant, asChild, ...otherProps } = props
    const Component = asChild ? Slot : 'div'
    return (
        <Component className={typography({ className, variant })} ref={ref} {...otherProps}/>
    )
})
