import PageLayout from '../components/Layout/Page.layout'
import CompeittionGraphics from '../assets/competition_graphic.png'

const CaseComp = () => {
    return (
        <PageLayout>
            <h1>OCTO Summer Case Competition 2023</h1>
            <div id='intro-container' className='flex flex-row gap-4'>
                <div id='description-container' className='basis-3/5'>
                    <h4 className='mt-4'>
                        Second Annual Competition 8/1/2023 - 8/10/2023
                    </h4>
                    <p className='mt-10'>
                        The Office of the Chief Technology Officer (OCTO) at the
                        ASUC is partnering with SAP SE, a leading global
                        software company, to host the first annual OCTO Summer
                        Case Competition. We welcome UC Berkeley students of all
                        years and majors to come together and put their ideas
                        toward enhancing the Berkeley student experience.
                        Register through the link below. If you have any
                        questions, feel free to email us.
                    </p>
                </div>
                <div id='image-container' className='basis-2/5'>
                    <img src={CompeittionGraphics} alt='title graphics' />
                </div>
            </div>

            <div id='timeline-container'>
                <h3>Important Dates</h3>
                <p>Everything you need to know about our Competition.</p>
            </div>
        </PageLayout>
    )
}

export default CaseComp
