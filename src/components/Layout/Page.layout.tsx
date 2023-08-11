const PageLayout = ({ children }: any) => {
    return (
        <div className='min-h-[90vh] mx-40 mt-48 flex flex-col gap-10'>
            {children}
        </div>
    )
}

export default PageLayout

export const WidePageLayout = ({ children }: any) => {
    return (
        <div className='min-h-[90vh] mx-20 mt-48 flex flex-col gap-10 [&>*:last-child]:mb-40'>
            {children}
        </div>
    )
}

export const FullWidthPageLayout = ({ children }: any) => {
    return (
        <div className='min-h-[90vh] flex flex-col gap-10'>
            {children}
        </div>
    )
}
