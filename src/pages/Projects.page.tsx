import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, LgColumn, TwoToOneGrid } from '../components/Layout/Columns.layout'
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
            <LgColumn>
                {TEAMS.map(({ team_name, img_path, website_link, descriptions, preview_img_path }) => {
                    return (
                        <TeamCard
                            key={team_name}
                            team_name={team_name}
                            website_link={website_link}
                            img_path={img_path}
                            descriptions={descriptions}
                            preview_img_path={preview_img_path}
                        />
                    )
                })}
            </LgColumn>
        </WidePageLayout>
    )
}

const TeamCard = ({ team_name, img_path, website_link, descriptions, preview_img_path }: PTeamCard) => {
    const navigate = useNavigate()
    return (
        <div className='flex'>
            <div
                className='w-full px-8 py-6 bg-white rounded-xl shadow-card duration-300 hover:shadow-card-hover ease-out flex content-center animate-showing'
                onClick={() => {
                    navigate('')
                }}
            >
                <div className='flex w-full'>
                    <div className='w-2/3 flex content-center'>
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
                    <div className='w-1/3 flex items-center pl-10 pr-4'>
                        <a href={`${website_link}`}>
                            <img
                                src={preview_img_path}
                                alt={`website preview for ${team_name}`}
                                className='w-full h-auto rounded-md transition-transform duration-300 ease-out transform hover:scale-150'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
