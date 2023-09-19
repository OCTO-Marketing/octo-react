export const SkewedText = ({
    children,
    yellow,
    small,
}: {
    children: any
    yellow?: boolean
    small?: boolean
}) => {
    return (
        <span className='relative inline-block'>
            <span
                className={`block absolute -inset-1 ${small ? '-skew-y-1': '-skew-y-2'} ${
                    yellow ? 'bg-yellow-300' : 'bg-accent'
                }`}
                aria-hidden='true'
            ></span>
            <span className='relative text-white inline-block'>{children}</span>
        </span>
    )
}
