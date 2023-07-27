const PageLayout = ({ children }: any) => {
    return (
        <div className='min-h-[90vh] mx-40 mt-40 flex flex-col gap-10'>
            {children}
        </div>
    )
}

export default PageLayout

export const WidePageLayout = ({ children }: any) => {
    return (
        <div className='min-h-[90vh] mx-20 mt-40 flex flex-col gap-10 [&>*:last-child]:mb-40'>
            {children}
        </div>
    )
}
