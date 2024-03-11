import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, TwoToOneGrid } from '../components/Layout/Columns.layout'
import { WidePageLayout } from '../components/Layout/Page.layout'
import type { PResearchCard } from '../data/research'
import RESEARCH from '../data/research'
import { TbLink } from 'react-icons/tb'

const Research = () => {
    return (
        <WidePageLayout>
            <div>
                {/* Page title and description */}
                <h1>Academic Papers and Resources for Tech</h1>
                    <h5 className='mt-4'>
                        Some helpful resources to get you started on your research endevours
                    </h5>
            </div>
            {/* Two-to-one grid layout */}
            <TwoToOneGrid>
                {/* Map through research data to render ResearchCard components */}
                {RESEARCH.map(({ name, img_path, descriptions, links }) => {
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
export default Research

// ResearchCard component
const ResearchCard = ({
    name,
    descriptions,
    img_path,
    links,
}: PResearchCard) => {
    const navigate = useNavigate()
    return (
        <div
            // Card container with styling and click event
            className='px-8 py-6 bg-white rounded-xl shadow-card duration-300 hover:shadow-card-hover ease-out flex content-center animate-showing'
            onClick={() => {
                navigate('')
            }}
        >
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
                    <p className='mt-2 mb-1 text-sm leading-6 font-medium'>
                        {descriptions}
                    </p>
                    {/* Render links if available */}
                    {links && links.length > 0 && (
                       <div>
                           {/* Map through links to render anchor tags */}
                           {links.map(({ position, link }) => (
                               <div key={position}>
                                   {/* Anchor tag for each link */}
                                   <a
                                      key={position} // Unique key for each link
                                      href={link} // URL
                                      target='_blank' // Open in new tab
                                      rel='noopener noreferrer' // Security attributes
                                      className='text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out' // Styling
                                   >
                                      {/* Icon and position */}
                                      <TbLink className="inline" /> {position}
                                   </a>
                               </div>
                           ))}
                       </div>
                    )}
                </div>
            </CenterAlignColumns>
        </div>
    )
}