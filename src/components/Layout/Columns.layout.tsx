export const Columns = ({ children, wrapping }: {children: any, wrapping?: boolean}) => {
    return <div className={`flex flex-row gap-x-10 ${wrapping && 'flex-wrap gap-y-2'}`}>{children}</div>
}

export const CenterAlignColumns = ({ children }: any) => {
    return (
        <div className='flex flex-row gap-10 mb:gap-6 items-center mb:items-start justify-left mb:flex-col'>
            {children}
        </div>
    )
}

export const TwoToOneGrid = ({ children }: any) => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-1 gap-8'>{children}</div>
    )
}

//Add Four-to-One-Grid layout
export const FourToOneGrid = ({ children }: any) => {
    return (
        <div className='grid grid-cols-4 sm:grid-cols-1 gap-8'>{children}</div>
    )
}


export const SmColumn = ({ children }: any) => {
    return <div className='basis-2/5 flex flex-col gap-10 sm:hidden'>{children}</div>
}

export const LgColumn = ({ children }: any) => {
    return <div className='basis-3/5 flex flex-col gap-10 sm:basis-full'>{children}</div>
}

export const MdColumn = ({
    children,
    grow,
    secondary,
}: {
    children: any
    grow?: boolean
    secondary?: boolean
}) => {
    return (
        <div
            className={`${grow && 'sm:basis-4/5 mb:basis-full'} ${
                secondary && 'sm:hidden'
            } basis-1/2 flex flex-col gap-10`}
        >
            {children}
        </div>
    )
}
