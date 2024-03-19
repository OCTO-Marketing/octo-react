import { IMember, Leadership, BerkeleytimeMembers, BerkeleyMobileMembers, ABSAMembers, WebDevMembers } from '../data/members'
import { WidePageLayout } from '../components/Layout/Page.layout'
import { Columns, MdColumn } from '../components/Layout/Columns.layout'
import 'bootstrap/dist/css/bootstrap.min.css';

import default_profile from '../assets/members/default.png'
import { PieChart } from 'react-minimal-pie-chart'
import { MAJORS } from '../data/majors'
import { Parallax } from 'react-scroll-parallax'
//import ALUMNI from '../data/alumni.json'


const Team = () => {
    // const [filtered_members, set_filtered_members] = useState(MEMBERS)

    // const [selected_teams, set_selected_teams] = useState<string[]>([])

    // useEffect(() => {
    //     if (selected_teams.length === 0) {
    //         set_filtered_members(MEMBERS)
    //     } else {
    //         set_filtered_members(
    //             MEMBERS.filter((member) => {
    //                 return selected_teams.includes(member.team)
    //             })
    //         )
    //     }
    // }, [selected_teams])
    //test push

    return (
        <WidePageLayout>
            <Columns>
                <MdColumn grow={true}>
                    <h2>Our Community</h2>
                    <p>
                        Meet our exceptional office, a fusion of students across
                        years and majors, all committed to enhancing campus
                        technology. With a shared purpose, we collaborate to
                        innovate and develop a seamless digital landscape for
                        all.
                    </p>
                    <p>
                        But we're more than a technology team - we're a
                        tight-knit family. From post-coding session hangouts and
                        grabbing food on Telegraph to last semester's weekend
                        trip to Pacifica, our connections go beyond work,
                        creating lasting study buddies, mentors, and friends.
                    </p>
                </MdColumn>
                <MdColumn secondary>
                        <PieChart
                            className='w-1/2 overflow-visible'
                            data={MAJORS.sort((a, b) => {
                                return b.value - a.value
                            })}
                            lineWidth={20}
                            animate
                            paddingAngle={1}
                            label={({ dataEntry }) => {
                                return `${dataEntry.title} ${dataEntry.value}`
                            }}
                            labelPosition={110}
                            labelStyle={{
                                fill: '#212121',
                                fontSize: '4px',
                                fontFamily: '"Open Sans"',
                                opacity: 0.75,
                                pointerEvents: 'none',
                            }}
                        />
                        {/* @todo add a inner chart for years */}
                    
                </MdColumn>
            </Columns>
            <nav className="navbar sticky-top px-20 mb:px-10 py-2 navbar-expand-lg navbar-light bg-light">
                <div className="flex justify-between w-full">
                    <a className="nav-link" href="#Leadership">Leadership</a>
                    <a className="nav-link" href="#Berkeleytime">Berkeleytime</a>
                    <a className="nav-link" href="#BerkeleyMobile">BerkeleyMobile</a>
                    <a className="nav-link" href="#ABSA">ABSA</a>
                    <a className="nav-link" href="#WebDev">Web Dev</a>
                </div>
            </nav>
            <LeadershipSection key='leadership' members={Leadership} />
            <BerkeleytimeSection members={BerkeleytimeMembers} />
            <BerkeleyMobileSection members={BerkeleyMobileMembers} />
            <ABSASection members={ABSAMembers} />
            <WebDevSection members={WebDevMembers} />
        </WidePageLayout>
    )
}

export default Team

const MemberCard = ({ name, photo, title, team }: IMember) => {
    return (
        <div className='flex flex-row gap-6 w-80 bg-white shadow-card duration-300 hover:shadow-card-hover ease-out px-6 py-8 rounded-xl items-center animate-showing'>
            <img
                src={photo ?? default_profile}
                alt={name}
                className='w-32 h-32 object-cover rounded-xl'
            />
            <div className='text-left'>
                <h5 className='font-bold'>{name}</h5>
                <span className='text-xs font-medium block text-sky-800 rounded-md'>
                    {title}
                </span>
                <span className='text-xs font-medium block mt-1 text-slate-400'>
                    {team}
                </span>
            </div>
        </div>
    )
}

const LeadershipSection = ({ members }: { members: IMember[] }) => {
    return (
        <section className='flex gap-10 flex-col' id='Leadership'>
            <h2>Leadership</h2>
            <ul className='mb-8 flex gap-10 flex-wrap justify-between'>
                {members.map((member) => {
                    return MemberCard(member)
                })}
            </ul>
        </section>
    )
}

const BerkeleytimeSection = ({ members }: { members: IMember[] }) => {
    return (
        <section className='flex gap-10 flex-col' id='Berkeleytime'>
            <h2>Berkeleytime</h2>
            <ul className='mb-8 flex gap-10 flex-wrap justify-between'>
                {members.map((member) => {
                    return MemberCard(member)
                })}
            </ul>
        </section>
    )
}


const BerkeleyMobileSection = ({ members }: { members: IMember[] }) => {
    return (
        <section className='flex gap-10 flex-col' id='BerkeleyMobile'>
            <h2>Berkeley Mobile</h2>
            <ul className='mb-8 flex gap-10 flex-wrap justify-between'>
                {members.map((member) => {
                    return MemberCard(member)
                })}
            </ul>
        </section>
    )
}
const ABSASection = ({ members }: { members: IMember[] }) => {
    return (
        <section className='flex gap-10 flex-col' id='ABSA'>
            <h2>ABSA</h2>
            <ul className='mb-8 flex gap-10 flex-wrap justify-between'>
                {members.map((member) => {
                    return MemberCard(member)
                })}
            </ul>
        </section>
    )
}
const WebDevSection = ({ members }: { members: IMember[] }) => {
    return (
        <section className='flex gap-10 flex-col' id='WebDev'>
            <h2>WebDev</h2>
            <ul className='mb-8 flex gap-10 flex-wrap justify-between'>
                {members.map((member) => {
                    return MemberCard(member)
                })}
            </ul>
        </section>
    )
}






const AlumniSection = ({
    members,
}: {
    members: { name: string; title: string; team: string }[]
}) => {
    return (
        <section className='flex gap-10 flex-col mt-10'>
            <h2>OCTO Members</h2>

            <ul className='mb-8 flex gap-10 flex-wrap justify-between'>
                {members.map(({ name, title, team }) => {
                    return (
                        <div className='text-left w-56 bg-white shadow-card duration-300 hover:shadow-card-hover ease-out p-6 rounded-xl animate-showing relative'>
                            <h5 className='font-bold'>{name}</h5>
                            <span className='text-xs font-medium block text-sky-800 rounded-md'>
                                {title}
                            </span>
                            <span className='text-xs font-medium block mt-1 text-slate-400 relative bottom-0 right-0'>
                                {team}
                            </span>
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}
