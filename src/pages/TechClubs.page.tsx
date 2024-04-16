import { link } from 'node:fs'
import { PiCards } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, TwoToOneGrid } from '../components/Layout/Columns.layout'
import { WidePageLayout } from '../components/Layout/Page.layout'
import { TbLink } from 'react-icons/tb'
import TECHCLUBS from '../data/berkeleytechclubs.json'

/*
const TechClubs = TECHCLUBS.map(({ Name, Tags, Link }) => {
    return {
        name: Name,
        tags: Tags,
        link: Link,
    }
})

const TechClubs = () => {
    return (
        <WidePageLayout>
            <div>
                <h1>Tech Clubs</h1>
                <h5 className='mt-4'>
                    something something find tech clubs
                </h5>
            </div>
            <ClubSection key='techclubs' clubs={TechClubs} />
        </WidePageLayout>
    )
}

export default TechClubs

const ClubSection = ({
    clubs,
}: {
    clubs: { name: string; tags: string; link: string }[]
}) => {
    return (
        <section className='flex gap-10 flex-col mt-10'>
            <h2>Berkeley Tech Clubs</h2>

            <ul className='mb-8 flex gap-10 flex-wrap justify-between'>
                {clubs.map(({ name, tags, link }) => {
                    return (
                        <div className='text-left w-56 bg-white shadow-card duration-300 hover:shadow-card-hover ease-out p-6 rounded-xl animate-showing relative'>
                            <h5 className='font-bold'>{name}</h5>
                            <span className='text-xs font-medium block text-sky-800 rounded-md'>
                                {tags}
                            </span>
                            <span className='text-xs font-medium block mt-1 text-slate-400 relative bottom-0 right-0'>
                                {link}
                            </span>
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}
*/