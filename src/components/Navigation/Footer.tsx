import { Fragment } from 'react'
import { ReactComponent as Email } from '../../assets/email.svg'
import { PFooterCategory, PFooterItem, footer_categories } from 'data/footer'

// @todo add a sitemap, contact & address, privacy, copy right, link to ASUC, land acknowledgement
const Footer = () => {
    return (
        <Fragment>
            <FooterBanner />
            <SiteMap />
        </Fragment>
    )
}

const FooterBanner = () => {
    return (
        <footer
            id='footer'
            className='w-screen mb:flex justify-center text-center items-center mx-auto h-[10vh] hidden'
        >
            <span className='text-slate-600 text-[15px]'>
                &copy; Copyright <strong>ASUC OCTO</strong>.<br />
                All Rights Reserved.{' '}
                <a
                    href='https://policies.google.com/technologies/partner-sites?hl=en-GB&gl=uk'
                    target='_blank'
                    rel='noreferrer'
                >
                    Privacy Policy
                </a>
                .
                <a
                    href='mailto:technology@asuc.org'
                    target='_blank'
                    rel='noreferrer'
                >
                    <Email className='inline ml-1' />
                </a>
            </span>
        </footer>
    )
}

const SiteMap = () => {
    return (
        <footer
            id='footer'
            className='w-3/5 mx-[20vw] flex gap-8 justify-center text-left min-h-[10vh] mb:hidden py-8 font-dm'
        >
            {footer_categories.map(FooterCategory)}
        </footer>
    )
}

export default Footer

const FooterCategory = ({ label, items }: PFooterCategory) => (
    <div key={label} className='flex-1'>
        <h6>{label}</h6>
        <div className='flex flex-col gap-4 mt-4'>{items.map(FooterItem)}</div>
    </div>
)

const FooterItem = ({ Icon, label, link }: PFooterItem) => (
    <div
        key={label}
        className={`flex flex-row gap-2 ${
            link && 'cursor-pointer hover:text-accent duration-150'
        }`}
        onClick={() => {
            if (link) {
                window.location.href = link
            }
        }}
    >
        <Icon className='mt-1' />
        <span>{label}</span>
    </div>
)
