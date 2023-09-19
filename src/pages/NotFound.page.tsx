import { WidePageLayout } from '../components/Layout/Page.layout'
import { Columns, MdColumn } from '../components/Layout/Columns.layout'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {}, [])
    return (
        <WidePageLayout>
            <div className='custom_description'>
                <h1>
                    Not Found{' '}
                    <span className='bg-slate-400 text-white py-0.5 px-2 rounded-full text-[15px] align-middle'>
                        404
                    </span>
                </h1>
                <Columns>
                    <MdColumn grow>
                        <p>
                            The page you are looking for is not found, sorry. If
                            you believe this is a mistake, please{' '}
                            <a
                                className='text-accent'
                                href='mailto:technology@asuc.org'
                            >
                                emailing us
                            </a>
                            .
                        </p>
                        <h6
                            className='font-semibold hover:text-accent cursor-pointer group duration-150'
                            onClick={() => {
                                navigate('/')
                            }}
                        >
                            Back to homepage{' '}
                            <FaArrowRight className='inline text-gray-700 group-hover:text-accent group-hover:translate-x-4 ease-in-out duration-150 ml-4 mb-0.5 cursor-pointer' />{' '}
                        </h6>
                    </MdColumn>
                </Columns>
            </div>
        </WidePageLayout>
    )
}

export default NotFound
