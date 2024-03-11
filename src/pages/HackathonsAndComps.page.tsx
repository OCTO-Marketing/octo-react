import { PiCards } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, TwoToOneGrid } from '../components/Layout/Columns.layout'
import { WidePageLayout } from '../components/Layout/Page.layout'
import type { hackathonsAndCompsCard } from '../data/hackathonsandcomps'
import hackathonsAndComps from '../data/hackathonsandcomps'

const HackathonsAndComps = () => {
    return (
        <WidePageLayout>
            <div>
                <h1>Hackathons And Competitions</h1>
                <h5 className='mt-4'>
                    A curated list of various hackathons and competitions designed to provide students with opportunities for experiential learning and skill development.
                </h5>
            </div>
            <TwoToOneGrid>
                {hackathonsAndComps.map(({ resource_name, img_path, descriptions }) => {
                    return (
                        <Card
                            key={resource_name}
                            resource_name={resource_name}
                            img_path={img_path}
                            descriptions={descriptions}
                        />
                    )
                })}
            </TwoToOneGrid>
        </WidePageLayout>
    )
}

export default HackathonsAndComps

const Card = ({ resource_name, descriptions, img_path }: hackathonsAndCompsCard) => {
    const navigate = useNavigate()
    return (
        <div
            className='px-8 py-6 bg-white rounded-xl shadow-card duration-300 hover:shadow-card-hover ease-out flex content-center animate-showing'
            onClick={() => {
                navigate('')
            }}
        >
            <CenterAlignColumns>
                <img
                    src={img_path}
                    alt={`team icon for ${resource_name}`}
                    className='w-24 h-24 sm:w-16 sm:h-16 rounded-md'
                />
                <div>
                    <h3 className='text-lg font-bold'>{resource_name}</h3>
                    <p className='mt-2 mb-1 text-sm leading-6 font-medium'>
                        {descriptions}
                    </p>
                </div>
            </CenterAlignColumns>
        </div>
    )
}
