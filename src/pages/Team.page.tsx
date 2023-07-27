import { useEffect, useState } from 'react'
import MEMBERS, { IMember, TEAMS } from '../data/members'
import { WidePageLayout } from '../components/Layout/Page.layout'
import { Columns, MdColumn } from '../components/Layout/Columns.layout'

import default_profile from '../assets/members/default.png'

const Team = () => {
    const [filtered_members, set_filtered_members] = useState(MEMBERS)

    const [selected_teams, set_selected_teams] = useState<string[]>([])

    useEffect(() => {
        if (selected_teams.length === 0) {
            set_filtered_members(MEMBERS)
        } else {
            set_filtered_members(
                MEMBERS.filter((member) => {
                    return selected_teams.includes(member.team)
                })
            )
        }
    }, [selected_teams])

    const TitleSection = ({ title }: { title: string }) => {
        return <div></div>
    }

    const TeamSection = ({ team }: { team: string }) => {
        return (
            <section>
                <h2>{team}</h2>
                <ul>
                    {filtered_members
                        .filter((member) => {
                            return member.team === team
                        })
                        .map((member) => {
                            return MemberCard(member)
                        })}
                </ul>
            </section>
        )
    }

    const MemberCard = ({ name, photo, title, team }: IMember) => {
        return (
            <div className='w-64 bg-white shadow-card p-8 rounded-xl text-center'>
                <img
                    src={photo ?? default_profile}
                    alt=''
                    className='w-40 h-40 mx-auto rounded-xl'
                />
                <h5 className='font-bold my-3'>{name}</h5>
                <span className='text-xs font-medium block bg-sky-800/10 text-sky-800 p-1 rounded-md mx-auto'>
                    {title}
                </span>
                <span className='text-xs font-medium block mt-1 text-slate-400'>
                    {team}
                </span>
            </div>
        )
    }

    return (
        <WidePageLayout>
            <Columns>
                <MdColumn>
                    <h1>Our Mission</h1>
                    <p>
                        The ASUC Office of the Chief Technology Officer was
                        founded in the spring of 2014 to address the critical
                        need for student voices in rapidly changing campus
                        technology spaces through advocacy, awareness, and
                        actual technology product development.
                    </p>
                </MdColumn>
            </Columns>
            <div className='h-12'></div>
            {TEAMS.map((team) => {
                return <TeamSection key={team} team={team} />
            })}
        </WidePageLayout>
    )
}

export default Team
