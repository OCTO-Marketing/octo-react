import { ReactComponent as Email } from '../../assets/email.svg'

const Footer = () => {
    return (
        <footer
            id='footer'
            className='w-screen flex justify-center text-center items-center mx-auto h-[10vh]'
        >
            <span className='text-slate-600 text-[15px]'>
                &copy; Copyright <strong>ASUC OCTO</strong>. All Rights
                Reserved.{' '}
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

export default Footer
