import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, TwoToOneGrid } from '../components/Layout/Columns.layout'
import { WidePageLayout } from '../components/Layout/Page.layout'
import type { PTeamCard } from '../data/teams'
import TEAMS from '../data/teams'

const Projects = () => {
    return (
        <WidePageLayout>
            <div>
                <h1>Projects</h1>
                <h5 className='mt-4'>
                    Using the power of technology to help all Berkeley students
                </h5>
            </div>
            <TwoToOneGrid>
                {TEAMS.map(({ team_name, img_path, descriptions }) => {
                    return (
                        <TeamCard
                            key={team_name}
                            team_name={team_name}
                            img_path={img_path}
                            descriptions={descriptions}
                        />
                    )
                })}
            </TwoToOneGrid>
        </WidePageLayout>
    )
}

export default Projects

const TeamCard = ({ team_name, descriptions, img_path }: PTeamCard) => {
    const navigate = useNavigate()
    return (
        <div
            className='px-8 py-6 bg-white rounded-xl shadow-card duration-300 hover:shadow-card-hover ease-out flex content-center animate-showing'
            onClick={() => {
                navigate('')
            }}
        >
            <CenterAlignColumns>
                <img
                    src={img_path}
                    alt={`team icon for ${team_name}`}
                    className='w-24 h-24 sm:w-16 sm:h-16 rounded-md'
                />
                <div>
                    <h3 className='text-lg font-bold'>{team_name}</h3>
                    <p className='mt-2 mb-1 text-sm leading-6 font-medium'>
                        {descriptions}
                    </p>
                </div>
            </CenterAlignColumns>
        </div>
    )
}
