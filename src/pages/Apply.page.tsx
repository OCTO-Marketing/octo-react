import { useNavigate } from 'react-router-dom'
import {
    CenterAlignColumns,
    Column,
    Columns,
    MdColumn,
} from '../components/Layout/Columns.layout'
import { WidePageLayout } from '../components/Layout/Page.layout'
import { Stack } from '../components/Layout/Stack.layout'
import { TbBrandZoom, TbLink } from 'react-icons/tb'
import TEAMS, { PTeamCard } from '../data/teams'

const Apply = () => {
    return (
        <WidePageLayout>
            <div id='title-container'>
                <h2>Fall 2023 Recruitment is now LIVE!</h2>
            </div>
            <Columns>
                <MdColumn>
                    <Stack>
                        <h5>
                            Calling all developers, project managers, graphic
                            designers, and marketers !
                        </h5>
                        <h5>
                            We are a team of innovators with visions to
                            technologically enhance and transform our campus to
                            better suit the student body needs.
                        </h5>
                        <h5>
                            We're recruiting for our signature projects,
                            Berkeleytime and Berkeley Mobile. Our marketing team
                            is also looking to fill a couple positions for
                            designing & production. Check them out on the right!
                        </h5>
                    </Stack>
                    <div>
                        <h3>Info Sessions</h3>
                        <Stack>
                            <p>
                                Attending Info Sessions are the best way to
                                learn about OCTO, our projects & planned
                                projects, and the amazing team leads.
                            </p>
                            <div>
                                <b className='block'>
                                    Info Session 1 (Remote):
                                </b>
                                Friday, January 20th 6:30-7:30 pm via zoom
                                <a
                                    className='text-accent block'
                                    href='https://berkeley.zoom.us/j/99448983595?pwd=N1hpSVZTTTAxMzZ0VFZIcStTSHFHdz09'
                                >
                                    <TbBrandZoom className='inline' /> Zoom link
                                </a>
                            </div>
                            <div>
                                <b className='block'>
                                    Info Session 2 (In-person):
                                </b>
                                Tuesday, January 24th 6:30-7:30 pm @ Senate
                                Chambers in Eshleman Hall 5th Floor.
                                <a
                                    className='text-accent block'
                                    href='https://berkeley.zoom.us/j/98652831217?pwd=WG0xMzJteU5OSVlYYjlMU1JweDVxdz09'
                                >
                                    <TbBrandZoom className='inline' /> Zoom
                                    alternative
                                </a>
                            </div>
                        </Stack>
                    </div>
                </MdColumn>
                <MdColumn>
                    {TEAMS.map(({ team_name, positions, img_path, links }) => (
                        <TeamCard
                            team_name={team_name}
                            positions={positions}
                            img_path={img_path}
                            links={links}
                        />
                    ))}
                </MdColumn>
            </Columns>

            <hr className='mt-10 mb-4' />

            <Stack id='application-process-container'>
                <h2>Application Process</h2>
                <p>Go apply to as many positions and projects you see fit!</p>
                <ol className='list-decimal list-outside ml-10'>
                    <li className='pl-4'>
                        <b>Fill out the application(s)</b> by clicking on the
                        project(s)/position(s) you are interested in. No worries
                        if you need more info about OCTO and its projects. Come
                        join us at the Info Sessions!
                    </li>
                    <li className='pl-4'>
                        If chosen for an interview, the team will reach out via
                        email to schedule a quick <b>meeting</b> for us to get
                        to know you and for you to ask questions about us.
                    </li>
                    <li className='pl-4'>
                        The team will reach out to you again as soon as they
                        make a decision. If we haven't responded within a week
                        of the interview, please feel free to contact us to
                        follow up.
                    </li>
                </ol>
                <p>
                    Note: Each application has its own requirements and deadline
                    separate from other applications. Please be noted of that.
                </p>
            </Stack>
        </WidePageLayout>
    )
}

export default Apply

const TeamCard = ({ team_name, positions, img_path, links }: PTeamCard) => {
    const navigate = useNavigate()
    return (
        <div className='px-8 py-6 bg-white rounded-xl shadow-card'>
            <CenterAlignColumns>
                <img
                    src={img_path}
                    alt={`team icon for ${team_name}`}
                    className='w-24 h-24 rounded-md'
                />
                <Column>
                    <h3 className='text-lg font-bold'>Apply for {team_name}</h3>
                    <p className='mt-2 mb-1 text-sm leading-6 font-medium'>
                        <b className='font-semibold'>Positions open:</b>{' '}
                        {positions}
                    </p>
                    <Columns>
                        {links.map(({ position, link }) => {
                            return (
                                <li
                                    key={position}
                                    className='text-accent list-none text-sm cursor-pointer'
                                    onClick={() => {
                                        navigate(link)
                                    }}
                                >
                                    <TbLink className='inline' /> {position}
                                </li>
                            )
                        })}
                    </Columns>
                </Column>
            </CenterAlignColumns>
        </div>
    )
}
