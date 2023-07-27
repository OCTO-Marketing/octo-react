export const Columns = ({ children }: any) => {
    return <div className='flex flex-row gap-10'>{children}</div>
}

export const CenterAlignColumns = ({ children }: any) => {
    return (
        <div className='flex flex-row gap-10 items-center justify-center'>
            {children}
        </div>
    )
}

export const Column = ({ children }: any) => {
    return <div>{children}</div>
}

export const SmColumn = ({ children }: any) => {
    return <div className='basis-2/5 flex flex-col gap-10'>{children}</div>
}

export const LgColumn = ({ children }: any) => {
    return <div className='basis-3/5 flex flex-col gap-10'>{children}</div>
}

export const MdColumn = ({ children }: any) => {
    return <div className='basis-1/2 flex flex-col gap-10'>{children}</div>
}
