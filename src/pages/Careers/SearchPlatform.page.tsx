import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, TwoToOneGrid, Columns } from '../../components/Layout/Columns.layout'
import { WidePageLayout } from '../../components/Layout/Page.layout'
import {TECH_JOB_SERACH_PLATFORM, CAREER_PATH_RESOURCES} from '../../data/jobsearchplatform'
import type { TechJobSearchPlatformCard } from '../../data/jobsearchplatform'
import { TbLink } from 'react-icons/tb'

const SearchPlatform = () => {
    return (
        <WidePageLayout>
            <div>
                <h1>Job Search Platforms</h1>
                <h5 className='mt-4'>
                These websites are designed to connect you with your ideal job. From tech to teaching, finance to freelancing, they cater to all industries and experience levels.
                </h5>
            </div>
            <Resources resources={TECH_JOB_SERACH_PLATFORM}/>
            <div>
                <h1>Career Path Resources</h1>
                <h5 className='mt-4'>
                Whether you're just starting your journey, looking to pivot your career, or seeking to deepen your expertise in a specific tech domain, we are here to help in navigating the plethora of opportunities available in the tech industry.
                </h5>
            </div>
            <Resources resources={CAREER_PATH_RESOURCES}/>
        </WidePageLayout>
    )
}

const Resources = ({resources}: {resources: TechJobSearchPlatformCard[]}) => (
    <TwoToOneGrid>
        {resources.map(({ tool_name, description, img_path, tool_link }) => (
            <ResourceCard
                key={tool_name}
                tool_name={tool_name}
                img_path={img_path}
                description={description}
                tool_link={tool_link}
            />
        ))}
    </TwoToOneGrid>
)

const ResourceCard = ({
    tool_name,
    img_path,
    tool_link,
    description
}: TechJobSearchPlatformCard) => {
    const navigate = useNavigate()
    return (
        <div className="p-6 bg-white rounded-xl shadow-card animate-showing duration-300 hover:shadow-card-hover ease-out">
            <CenterAlignColumns>
                <img
                    src={img_path}
                    alt={`team icon for ${tool_name}`}
                    className="w-24 h-24 sm:w-16 sm:h-16 rounded-md"
                />
                <div className="w-auto overflow-auto">
                    <h3 className="text-lg font-bold">{tool_name}</h3>
                    <p className="mt-2 mb-1 text-sm leading-6 font-medium">
                        {description}
                    </p>
                    <Columns wrapping>
                        {tool_link &&
                        <li
                            key={tool_link?.label}
                            className="text-accent list-none text-sm cursor-pointer whitespace-nowrap"
                            onClick={() => {
                                window.location.href = tool_link?.link
                            }}
                        >
                            <TbLink className="inline" /> {tool_link?.label}
                        </li>}
                    </Columns>
                </div>
            </CenterAlignColumns>
        </div>
    )
}

export default SearchPlatform