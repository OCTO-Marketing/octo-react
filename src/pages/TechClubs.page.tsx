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
            <AlumniSection key='techclubs' members={TechClubs} />
        </WidePageLayout>
    )
}

export default TechClubs

const AlumniSection = ({
    members,
}: {
    members: { name: string; title: string; team: string }[]
}) => {
    return (
        <section className='flex gap-10 flex-col mt-10'>
            <h2>OCTO Members</h2>

            <ul className='mb-8 flex gap-10 flex-wrap justify-between'>
                {members.map(({ name, title, team }) => {
                    return (
                        <div className='text-left w-56 bg-white shadow-card duration-300 hover:shadow-card-hover ease-out p-6 rounded-xl animate-showing relative'>
                            <h5 className='font-bold'>{name}</h5>
                            <span className='text-xs font-medium block text-sky-800 rounded-md'>
                                {title}
                            </span>
                            <span className='text-xs font-medium block mt-1 text-slate-400 relative bottom-0 right-0'>
                                {team}
                            </span>
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}
*/