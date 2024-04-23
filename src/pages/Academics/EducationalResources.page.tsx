import { link, linkSync } from 'node:fs'
import { PiCards, PiLinkSimple } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, TwoToOneGrid } from '../../components/Layout/Columns.layout'
import { WidePageLayout } from '../../components/Layout/Page.layout'
import type { EduResCard } from '../../data/educationalresources'
import EduRes from '../../data/educationalresources'
import { TbLink } from 'react-icons/tb'

const EducationalResources = () => {
    return (
        <WidePageLayout>
            <div>
                <h1>Educational Resources</h1>
                <h5 className='mt-4'>
                    Dive into frontend and backend development with these educational resources.
                </h5>
            </div>
            <TwoToOneGrid>
                {EduRes.map(({ resource_name, img_path, descriptions, links }) => {
                    return (
                        <Card
                            key={resource_name}
                            resource_name={resource_name}
                            img_path={img_path}
                            descriptions={descriptions}
                            links={links}
                        />
                    )
                })}
            </TwoToOneGrid>
        </WidePageLayout>
    )
}

export default EducationalResources

const Card = ({ resource_name, descriptions, img_path, links }: EduResCard) => {
    const navigate = useNavigate()
    const listLinks = links.map(links => <li className="px-1 inline"><TbLink className="text-accent list-none text-sm cursor-pointer whitespace-nowrap inline" /> <a className="text-accent list-none text-sm cursor-pointer whitespace-nowrap inline" href={links} >Link</a></li>)
    return (
        <div
            className='px-8 py-6 bg-white rounded-xl shadow-card duration-300 hover:shadow-card-hover ease-out animate-showing grid justify-items-center'
            onClick={() => {
                navigate('')
            }}
        >   <div className='grid justify-items-center py-6'>
                <img
                    src={img_path}
                    alt={`team icon for ${resource_name}`}
                    className='rounded-md'
                />
                </div> 
                <div>
                    <h3 className='text-lg font-bold text-center'>{resource_name}</h3>
                    <p className='mt-2 mb-1 text-sm leading-6 font-medium text-center'>
                        {descriptions}
                    </p>
                    <div className="grid justify-items-center">
                    <ul className="flex">
                        {listLinks}
                    </ul>
                    </div>
                </div>
        </div>
    )
}
