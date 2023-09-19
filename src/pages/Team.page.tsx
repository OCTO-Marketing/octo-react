import { IMember, Leadership } from '../data/members'
import { WidePageLayout } from '../components/Layout/Page.layout'
import { Columns, MdColumn } from '../components/Layout/Columns.layout'

import default_profile from '../assets/members/default.png'
import { PieChart } from 'react-minimal-pie-chart'
import { MAJORS } from '../data/majors'
import { Parallax } from 'react-scroll-parallax'
import ALUMNI from '../data/alumni.json'

const Alumni = ALUMNI.map(({ name, position, team }) => {
    return {
        name: name,
        title: position,
        team: team,
    }
})

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
                    <Parallax
                        speed={-20}
                        className='w-full flex justify-center mt-20'
                    >
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
                    </Parallax>
                </MdColumn>
            </Columns>
            <LeadershipSection key='leadership' members={Leadership} />
            <AlumniSection key='alumni' members={Alumni} />
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
        <section className='flex gap-10 flex-col'>
            <h2>Leadership</h2>
            {MemberCard(members[0])}
            <ul className='mb-8 flex gap-10 flex-wrap justify-between'>
                {members.slice(1).map((member) => {
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
