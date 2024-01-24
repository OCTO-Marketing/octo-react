import { FaArrowDown } from 'react-icons/fa'
import { TbBrandZoom, TbLink } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { SkewedText } from '../components/Components/Text.component'
import {
    CenterAlignColumns,
    Columns,
    LgColumn,
    MdColumn,
    TwoToOneGrid
} from '../components/Layout/Columns.layout'
import { WidePageLayout } from '../components/Layout/Page.layout'
import { Stack } from '../components/Layout/Stack.layout'
import TEAMS, { PTeamCard } from '../data/teams'

const Apply = () => {
    return (
        <WidePageLayout>
            <h2>Fall 2023 Recruitment is officially concluded!</h2>
            <Descriptions />
            <Teams />
            <Infosessions />
            <hr className="mt-10 mb-4" />
            <ApplicationProcess />
        </WidePageLayout>
    )
}

export default Apply

const Descriptions = () => (
    <Columns>
        <LgColumn>
            <Stack>
                <h5>
                    We are a <b>team of innovators</b> with visions to
                    technologically <b>enhance and transform our campus</b> to
                    better suit the student body needs.
                </h5>
                <h5>
                    We're recruiting for projects across our office's portfolio,
                    including signature projects like{' '}
                    <SkewedText>Berkeleytime</SkewedText> and{' '}
                    <SkewedText>Berkeley Mobile</SkewedText> and newer additions
                    like <SkewedText>ABSA</SkewedText> and{' '}
                    <SkewedText>Data Science</SkewedText>. As one of the
                    foremost ASUC executive offices,{' '}
                    <b>we have a role for everyone no matter your background</b>{' '}
                    - from engineers to designers to social media wizards.
                </h5>
                {/* <h5 className='font-bold'>
                    Join us for an infosession
                    <FaArrowDown
                        className='inline text-accent h-4 mb-0.5 animate-jumping delay-300 cursor-pointer'
                        onClick={() => {
                            const element =
                                document.getElementById('infosession')
                            if (element) {
                                const elementPosition =
                                    element.getBoundingClientRect().top +
                                    window.scrollY
                                window.scrollTo({
                                    top: elementPosition - 150,
                                    behavior: 'smooth',
                                })
                            }
                        }}
                    />{' '}
                    or{' '}
                    <SkewedText yellow small>
                        <a
                            className='text-accent underline cursor-pointer'
                            href='https://calendly.com/vedha-santhosh/asuc-chief-technology-officer-coffee-chat'
                            target='_blank'
                            rel='noreferrer'
                        >
                            schedule a coffee chat with the CTO
                        </a>
                    </SkewedText>{' '}
                    to learn more about the opportunities within our office.
                </h5>
                <h5 className='font-bold '>
                    Browse our available roles below and apply today!
                </h5> */}
            </Stack>
        </LgColumn>
    </Columns>
)

const Teams = () => (
    <TwoToOneGrid>
        {TEAMS.map(({ team_name, positions, img_path, app_links }) => (
            <TeamCard
                key={team_name}
                team_name={team_name}
                positions={positions}
                img_path={img_path}
                app_links={app_links}
            />
        ))}
    </TwoToOneGrid>
)

const Infosessions = () => (
    <Columns>
        <MdColumn grow>
            <h3 id="infosession" className="mt-10">
                Info Sessions
            </h3>
            <Stack>
                <p>
                    Attending Info Sessions are the best way to learn about
                    OCTO, our projects & planned projects, and the amazing team
                    leads.
                </p>
                <div className="hidden w-full flex flex-row flex-wrap gap-8 justify-between">
                    <div>
                        <b className="block">Info Session 1:</b>
                        8/31/2023, 7 pm
                        <a
                            className="text-accent block"
                            href="https://berkeley.zoom.us/j/3353390194?pwd=cC81b0tjbXFpT3JNTk5laDhBem54dz09"
                        >
                            <TbBrandZoom className="inline" /> Zoom link
                        </a>
                    </div>
                    <div>
                        <b className="block">Info Session 2:</b>
                        9/7/2023, 7 pm
                        <a
                            className="text-accent block"
                            href="https://berkeley.zoom.us/j/3353390194?pwd=cC81b0tjbXFpT3JNTk5laDhBem54dz09"
                        >
                            <TbBrandZoom className="inline" /> Zoom link
                        </a>
                    </div>
                </div>
            </Stack>
        </MdColumn>
    </Columns>
)

const ApplicationProcess = () => (
    <Columns>
        <LgColumn>
            <Stack id="application-process-container">
                <h2>Application Process</h2>
                <p>Go apply to as many positions and projects you see fit!</p>
                <ol className="list-decimal list-outside ml-10 space-y-4">
                    <li className="pl-4">
                        <b>Fill out the application(s)</b> by clicking on the
                        project(s)/position(s) you are interested in. No worries
                        if you need more info about OCTO and its projects. Come
                        join us at the Info Sessions!
                    </li>
                    <li className="pl-4">
                        If chosen for an interview, the team will reach out via
                        email to schedule a quick <b>meeting</b> for us to get
                        to know you and for you to ask questions about us.
                    </li>
                    <li className="pl-4">
                        The team will reach out to you again as soon as they
                        make a decision. If we haven't responded within a week
                        of the interview, please feel free to contact us to
                        follow up.
                    </li>
                </ol>
                <p>
                    Note: Each team application has its own requirements
                    separate from other teams due to the different skillsets
                    necessary to contribute to each project. Please be noted of
                    that.
                </p>
            </Stack>
        </LgColumn>
    </Columns>
)

const TeamCard = ({
    team_name,
    positions,
    img_path,
    app_links,
    hidden
}: PTeamCard & { hidden?: boolean }) => {
    const navigate = useNavigate()
    return (
        <div className="p-6 bg-white rounded-xl shadow-card animate-showing duration-300 hover:shadow-card-hover ease-out">
            <CenterAlignColumns>
                <img
                    src={img_path}
                    alt={`team icon for ${team_name}`}
                    className="w-24 h-24 sm:w-16 sm:h-16 rounded-md"
                />
                <div className="w-auto overflow-auto">
                    <h3 className="text-lg font-bold">Apply for {team_name}</h3>
                    <p className="mt-2 mb-1 text-sm leading-6 font-medium">
                        <b className="font-semibold">Positions open:</b>{' '}
                        {positions}
                    </p>
                    <Columns wrapping>
                        {!hidden &&
                            app_links &&
                            app_links.map(({ position, link }) => {
                                return (
                                    <li
                                        key={position}
                                        className="text-accent list-none text-sm cursor-pointer whitespace-nowrap"
                                        onClick={() => {
                                            window.location.href = link
                                        }}
                                    >
                                        <TbLink className="inline" /> {position}
                                    </li>
                                )
                            })}
                    </Columns>
                </div>
            </CenterAlignColumns>
        </div>
    )
}
