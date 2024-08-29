import { useState } from 'react'
import { AiFillAndroid, AiFillApple } from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import { ReactComponent as Berkeleytime } from '../../assets/berkeleytime.svg'
import bm from '../../assets/logos/bm.jpg'
import bt from '../../assets/logos/bt.jpg'
import { FullWidthPageLayout } from '../../components/Layout/Page.layout'
import { Companies } from './Companies.component'
import './bt_logo.css'

const Home = () => {
    const navigate = useNavigate()

    const [join_us_arrow_animating, set_join_us_arrow_animating] =
        useState(false)

    return (
        <FullWidthPageLayout>
            <section
                id='welcome-container'
                className='w-screen h-[90vh] relative top-0'
            >
                <div className='w-full h-full absolute bg-gradient-to-b from-sky-200 to-white' />
                <div className='flex flex-row sm:flex-col-reverse w-2/3 h-full mx-auto'>
                    <Parallax
                        speed={-15}
                        className='relative flex items-center basis-3/5 sm:basis-full sm:mt-10'
                    >
                        <div className='flex flex-col gap-6 animate-showing'>
                            <h1 className='text-cal-blue select-none'>
                                Using technology to improve the campus
                                experience at{' '}
                                <span className='text-cal-blue'>
                                    UC Berkeley
                                </span>
                            </h1>
                            <button
                                onClick={() => {
                                    set_join_us_arrow_animating(true)
                                    setTimeout(() => {
                                        window.open("https://forms.gle/H5zK22hBEvbRoEJ97", "_blank")
                                        /*navigate('/apply')*/
                                    }, 300)
                                }}
                                className='bg-cal-gold py-1 px-2 rounded-lg text-xl font-semibold font-dm grow-0 w-max'
                            >
                                Join Us{' '}
                                <FaArrowRight
                                    className={`inline h-4 mb-0.5 ${
                                        join_us_arrow_animating &&
                                        'animate-leavingRight'
                                    }`}
                                />
                            </button>
                        </div>
                    </Parallax>
                    <Parallax
                        speed={15}
                        id='animation-container'
                        className='relative z-10 flex items-center basis-2/5 sm:hidden'
                    >
                        <Berkeleytime className='drop-shadow-xl backdrop-blur-lg' />
                    </Parallax>
                </div>
            </section>

            <section
                id='stats-container'
                className='bg-white px-40 sm:px-20 py-10'
            >
                <div className='flex flex-row flex-wrap gap-10 mx-auto justify-center text-center [&>*]:flex-1'>
                    <div>
                        <h1>9</h1>
                        <span>Years Supporting Berkeley</span>
                    </div>
                    <div>
                        <h1>50k+</h1>
                        <span>Average Monthly Users</span>
                    </div>
                    <div>
                        <h1>56</h1>
                        <span>Team Members</span>
                    </div>
                </div>
            </section>

            <section
                id='projects-container'
                className='bg-slate-100 pt-15 pb-10 px-40 sm:px-20 space-y-8'
            >
                <div className='flex justify-between items-end mb:flex-wrap'>
                    <h2>Our Flagship Products</h2>
                    <h6
                        className='cursor-pointer whitespace-nowrap'
                        onClick={() => {
                            navigate('/projects')
                        }}
                    >
                        View all projects <FaArrowRight className='inline' />
                    </h6>
                </div>
                <div className='flex flex-row sm:flex-col flax-wrap gap-10 [&>*]:flex-1'>
                    <div className='shadow-card duration-300 hover:shadow-card-hover ease-out bg-slate-100 p-6 rounded-xl flex gap-6 mb:flex-col mb:gap-4'>
                        <img
                            src={bt}
                            alt='berkeleytime logo'
                            className='w-12 h-12 rounded-lg'
                        />
                        <div>
                            {/* @todo link to bt */}
                            <h6
                                className='font-semibold hover:text-accent cursor-pointer group duration-150'
                                onClick={() => {
                                    window.location.href =
                                        'https://berkeleytime.com/'
                                }}
                            >
                                Berkeleytime{' '}
                                <FaArrowRight className='inline text-gray-700 group-hover:text-accent group-hover:translate-x-4 ease-in-out duration-150 ml-4 mb-0.5 cursor-pointer' />{' '}
                            </h6>
                            <p className='mt-2'>
                                Berkeley's beloved course discovery and
                                scheduling platform.
                            </p>
                        </div>
                    </div>
                    <div className='shadow-card duration-300 hover:shadow-card-hover ease-out bg-slate-100 p-6 rounded-xl flex gap-6 mb:flex-col mb:gap-4'>
                        <img
                            src={bm}
                            alt='berkeley mobile logo'
                            className='w-12 h-12 rounded-lg'
                        />
                        <div>
                            <h6 className='font-semibold'>
                                Berkeley Mobile{' '}
                                <AiFillApple
                                    className='inline ml-4 mb-0.5 hover:text-accent duration-150 cursor-pointer'
                                    onClick={() => {
                                        window.location.href =
                                            'https://apps.apple.com/us/app/berkeley-mobile/id912243518'
                                    }}
                                />
                                <AiFillAndroid
                                    className='inline ml-2 mb-0.5 hover:text-accent duration-150 cursor-pointer'
                                    onClick={() => {
                                        window.location.href =
                                            'https://play.google.com/store/apps/details?id=com.asuc.asucmobile'
                                    }}
                                />
                            </h6>
                            <p className='mt-2'>
                                Berkeley's student-created app for campus
                                resources, events, and safety.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id='about-us-container'
                className='pt-15 pb-10 px-40 sm:px-20'
            >
                <h2>What we do</h2>
                <div className='flex flex-row sm:flex-col flex-wrap gap-8 [&>*]:flex-1 mt-10 font-normal leading-8'>
                    <p>
                        The ASUC Office of the CTO (OCTO) was founded in Spring
                        of 2014 with one goal in mind:{' '}
                        <b>
                            to improve the campus technology experience for
                            Berkeley students and staff
                        </b>
                        . We strive to help our fellow students more efficiently
                        navigate Berkeley's complex bureaucracy and allow them
                        to better access campus resources.
                    </p>
                    <p>
                        As an executive level office of the ASUC representing
                        over 43,000 students, our multifaceted team of
                        developers, designers, and analysts diligently works to
                        address technology needs, from course discovery to
                        access to community information.{' '}
                        <b>
                            OCTO creates best in class software and tech
                            products - for Bears, by Bears.
                        </b>
                    </p>
                </div>
            </section>

            <section
                id='career-container'
                className='bg-slate-100 pt-15 pb-10 px-40 sm:px-20'
            >
                <h2>Where we've gone</h2>
                <div className='flex flex-row flex-wrap gap-8 justify-center mt-10'>
                    {Companies}
                </div>
            </section>
        </FullWidthPageLayout>
    )
}

export default Home
