import { link } from 'node:fs'
import { PiCards } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, TwoToOneGrid } from '../components/Layout/Columns.layout'
import { WidePageLayout } from '../components/Layout/Page.layout'
import { TbLink } from 'react-icons/tb'
import TECHCLUBS from '../data/berkeleytechclubs.json'


const Clubs = TECHCLUBS.map(({ Name, Tags, Link }) => {
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
                    Find a tech club to join!
                </h5>
            </div>
            <ClubSection key='techclubs' clubs={Clubs} />
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

            <ul className='mb-8 flex gap-10 flex-wrap justify-between'>
                {clubs.map(({ name, tags, link }) => {
                    return (
                        <div className='text-left w-56 bg-white shadow-card duration-300 hover:shadow-card-hover ease-out p-6 rounded-xl animate-showing relative'>
                            <h5 className='font-bold'>{name}</h5>
                            <span className='text-xs font-medium block text-sky-800 rounded-md'>
                                {tags}
                            </span>
                            <TbLink className="text-accent list-none text-sm cursor-pointer whitespace-nowrap inline" /> <a className="text-accent list-none text-sm cursor-pointer whitespace-nowrap" href={link}>Link</a>
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}
