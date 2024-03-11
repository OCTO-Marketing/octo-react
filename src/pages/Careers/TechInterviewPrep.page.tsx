import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, TwoToOneGrid, Columns } from '../../components/Layout/Columns.layout'
import { WidePageLayout } from '../../components/Layout/Page.layout'
import TECH_INTERVIEW_PREP_RESOURCES from '../../data/techinterviewprep'
import type { TechInterviewPrepCard } from '../../data/techinterviewprep'
import { TbLink } from 'react-icons/tb'

const TechInterviewPrep = () => {
    return (
        <WidePageLayout>
            <div>
                <h1>Tech Interview Preperation Resources</h1>
                <h5 className='mt-4'>
                    Explore a curated selection of resources, including technical interview practice platforms, 
                    coding challenge sites, and expert guidance, to sharpen your skills, build confidence, and stand out in the competitive
                    market of tech internships, new grad roles, and research openings.
                </h5>
            </div>
            <Resources />
        </WidePageLayout>
    )
}

const Resources = () => (
    <TwoToOneGrid>
        {TECH_INTERVIEW_PREP_RESOURCES.map(({ tool_name, description, img_path, tool_link }) => (
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
}: TechInterviewPrepCard) => {
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

export default TechInterviewPrep
