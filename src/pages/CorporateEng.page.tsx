import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, FourToOneGrid, TwoToOneGrid } from '../components/Layout/Columns.layout'
import { WidePageLayout } from '../components/Layout/Page.layout'
import type { PResearchCard } from '../data/research'
import {CORPORATE_ENG, CORPORATE_OTHER} from '../data/corporateEng'
import { TbLink } from 'react-icons/tb'

const CorporateEng = () => {
    return (
        <WidePageLayout>
            <div>
                {/* Page title and description */}
                <h1>Corporate Engineering Resources</h1>
                    <h5 className='mt-4'>
                        Some helpful resources to understand how modern tech companies build scalable products
                    </h5>
            </div>
            {/* Two-to-one grid layout */}
            <TwoToOneGrid>
                {/* Map through research data to render ResearchCard components */}
                {CORPORATE_ENG.map(({ name, img_path, descriptions, links }) => {
                    return (
                        <ResearchCard
                            key={name} // Unique key for each ResearchCard
                            name={name}
                            img_path={img_path}
                            descriptions={descriptions}
                            links={links}
                        />
                    )
                })}
            </TwoToOneGrid>
            
            <div> <div className="border-b border-black"></div> </div>
            
            <TwoToOneGrid>
                {CORPORATE_OTHER.map(({ name, img_path, descriptions, links }) => {
                        return (
                            <ResearchCard
                                key={name} // Unique key for each ResearchCard
                                name={name}
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
export default CorporateEng;

// ResearchCard component
const ResearchCard = ({
    name,
    descriptions,
    img_path,
    links,
}: PResearchCard) => {
    const navigate = useNavigate()
    return (
        <div className='px-10 py-4 bg-white rounded-xl shadow-card animate-showing duration-300 hover:shadow-card-hover ease-out'>

            {/* Centered columns layout */}
            <CenterAlignColumns>
                {/* Image */}
                <img
                    src={img_path}
                    alt={`icon for ${name}`}
                    className='w-24 h-24 sm:w-16 sm:h-16 rounded-md'
                />
                <div>
                    {/* Research name */}
                    <h3 className='text-lg font-bold'>{name}</h3>
                    {/* Research descriptions */}
                    <p className='mt-2 text-sm leading-6 font-medium'>
                        {descriptions}
                    </p>
                    {/* Render links if available */}
                        {links && links.length > 0 &&
                            links.map(({ position, link }) => {
                                return (
                                    <a
                                        key={position} // Unique key for each link
                                        href={link} // URL
                                        target='_blank' // Open in new tab
                                        rel='noopener noreferrer' // Security attributes
                                        className='text-sm text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out' // Styling
                                    >
                                        {/* Icon and position */}
                                        <TbLink className="inline" /> {position}
                                    </a>
                                )
                            })
                        }
                </div>
            </CenterAlignColumns>
        </div>
    )
}