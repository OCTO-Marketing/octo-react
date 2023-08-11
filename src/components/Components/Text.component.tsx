export const SkewedText = ({ children }: any) => {
    return (
        <span className='relative inline-block'>
            <span
                className='block absolute -inset-1 -skew-y-2 bg-accent'
                aria-hidden='true'
            ></span>
            <span className='relative text-white inline-block'>{children}</span>
        </span>
    )
}
