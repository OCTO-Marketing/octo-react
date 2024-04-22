import { useNavigate } from 'react-router-dom'
import { FourToOneGrid } from '../components/Layout/Columns.layout'
import { WidePageLayout } from '../components/Layout/Page.layout'
import type { PColdEmailCard } from '../data/coldEmail'
import COLD_EMAIL from '../data/coldEmail'
import { TbLink } from 'react-icons/tb'
import '../styles/coldEmailCustom.css'

const ColdEmail = () => {
    return (
        <WidePageLayout>
            <div>
                {/* Page title and description */}
                <h1>Cold Email and Research Email Templates </h1>
                    <h5 className='mt-4'>
                        Resources to email faculty and find research opportunities
                    </h5>
            </div>
            {/* Four-to-one grid layout */}
            <FourToOneGrid>
                {/* Map through research data to render ResearchCard components */}
                {COLD_EMAIL.map(({ name, img_path, descriptions, links }) => {
                    return (
                        <ColdEmailCard
                            key={name} // Unique key for each ResearchCard
                            name={name}
                            img_path={img_path}
                            descriptions={descriptions}
                            links={links}
                        />
                    )
                })}
            </FourToOneGrid>
        </WidePageLayout>
    )
}
export default ColdEmail

// ResearchCard component
const ColdEmailCard = ({
    name,
    descriptions,
    img_path,
    links,
}: PColdEmailCard) => {
    const navigate = useNavigate()
    return (
        <div className='px-6 py-32 bg-white rounded-xl shadow-card animate-showing duration-300 hover:shadow-card-hover ease-out'>

            {/* Centered columns layout */}

                {/* Image */}
                <img
                    src={img_path}
                    alt={`icon for ${name}`}
                    className='custom-size sm:w-18 sm:h-18 rounded-md mt-12'
                />
                <div>
                    {/* Research name */}
                    <h3 className='text-lg font-bold mt-12'>{name}</h3>
                    {/* Research descriptions */}
                    <p className='mt-2 mb-1 text-sm leading-6 font-medium'>
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

        </div>
    )
}