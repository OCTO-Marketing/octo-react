import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, TwoToOneGrid, Columns } from '../../components/Layout/Columns.layout'
import { WidePageLayout } from '../../components/Layout/Page.layout'
import {VENTURE_CAPITAL_PORTFOLIOS, STANDARD_SEARCH_TOOLS, AREA_SPECIFIC_TOOLS} from '../../data/techjobsearchtools'
import type { TechJobSearchToolCard } from '../../data/techjobsearchtools'
import { TbLink } from 'react-icons/tb'

// Layout of Page alternating between section information on its resources
const TechSearchTools = () => {
    return (
        <WidePageLayout>
            <div>
                <h1>Tech Job Search Tools</h1>
                <h5 className='mt-4'>
                Streamline your career internship, new grad, research roles and more using these convenient search tools                </h5>
            </div>
            <Resources resources={STANDARD_SEARCH_TOOLS}/>
            <div>
                <h1>Province/State Specific Company Lists</h1>
                <h5 className='mt-4'>
                Streamline your career internship, new grad, research roles and more using these convenient search tools                </h5>
            </div>
            <Resources resources={AREA_SPECIFIC_TOOLS}/>
            <div>
                <h1>Venture Capital Portfolios</h1>
                <h5 className='mt-4'>
                Search through top Venture Capital companies for potential job opportunities</h5>
            </div>
            <Resources resources={VENTURE_CAPITAL_PORTFOLIOS}/>
        </WidePageLayout>
    )
}

// Maps a list of resources to a two column table
const Resources = ({resources}: {resources: TechJobSearchToolCard[]}) => (
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

// Card for each resource
const ResourceCard = ({
    tool_name,
    img_path,
    tool_link,
    description
}: TechJobSearchToolCard) => {
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

export default TechSearchTools
