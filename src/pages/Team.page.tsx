import { IMember, Leadership, BerkeleyMobileMembers, WebDevMembers, BerkeleytimeMembers } from '../data/members'
import { WidePageLayout } from '../components/Layout/Page.layout'
import { Columns, MdColumn } from '../components/Layout/Columns.layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

import default_profile from '../assets/members/default.png'
import { PieChart } from 'react-minimal-pie-chart'
import { MAJORS } from '../data/majors'
import { Parallax } from 'react-scroll-parallax'
import vedha_santhosh from '../assets/members/vedha_santhosh.jpeg'
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
    const [scrolled, setScrolled] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 48) {
            setScrolled(true)
        } else if (scrolled) {
            setScrolled(false)
        }
    })

    const [activeTab, setActiveTab] = useState<string>('#Leadership');

    const handleTabClick = (tab: string): void => {
        setActiveTab(tab);
    };

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
            </Columns>
            {/*<nav className={`navbar sticky ${scrolled ? 'top-22' : 'top-8'} navbar-expand-lg navbar-light bg-sky-100 rounded-full items-stretch py-0 h-10`}>
                <div className="flex justify-between w-full h-full items-stretch">
                    <a className={`nav-link w-1/5 h-full flex items-center justify-center rounded-full ${activeTab === '#Leadership' ? 'bg-amber-50 shadow-lg font-bold' : ''}`} href="#Leadership" onClick={() => handleTabClick('#Leadership')}>Leadership</a>
                    <a className={`nav-link w-1/5 h-full flex items-center justify-center rounded-full ${activeTab === '#Berkeleytime' ? 'bg-amber-50 shadow-lg font-bold' : ''}`} href="#Berkeleytime" onClick={() => handleTabClick('#Berkeleytime')}>Berkeleytime</a>
                    <a className={`nav-link w-1/5 h-full flex items-center justify-center rounded-full ${activeTab === '#BerkeleyMobile' ? 'bg-amber-50 shadow-lg font-bold' : ''}`} href="#BerkeleyMobile" onClick={() => handleTabClick('#BerkeleyMobile')}>BerkeleyMobile</a>
                    <a className={`nav-link w-1/5 h-full flex items-center justify-center rounded-full ${activeTab === '#WebDev' ? 'bg-amber-50 shadow-lg font-bold' : ''}`} href="#WebDev" onClick={() => handleTabClick('#WebDev')}>Web Dev</a>
                    <a className={`nav-link w-1/5 h-full flex items-center justify-center rounded-full ${activeTab === '#SpecialProj' ? 'bg-amber-50 shadow-lg font-bold' : ''}`} href="#SpecialProj" onClick={() => handleTabClick('#SpecialProj')}>Special Projects</a> 
                </div>
            </nav > 
            */}
            <LeadershipSection key='leadership' members={Leadership} />
            <BerkeleytimeSection members={BerkeleytimeMembers} />
            <BerkeleyMobileSection members={BerkeleyMobileMembers} />
            <WebDevSection members={WebDevMembers} />
            {/*<SpecialProjSection members={SpecialProjectsMembers} />*/}
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
    const [scrolled, setScrolled] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 48) {
            setScrolled(true)
        } else if (scrolled) {
            setScrolled(false)
        }
    })
    
    return (
        <section className='flex gap-10 flex-col' id='Leadership'>
            <h2 className={`${scrolled ? 'pt-10 mt-40' : 'top-8'}`}>Leadership</h2>
            {/*<div className='flex flex-row gap-6 bg-white shadow-card duration-300 hover:shadow-card-hover ease-out px-6 py-8 rounded-xl items-center animate-showing'>
                <img src={vedha_santhosh} className='w-32 h-32 object-cover rounded-xl'/>
                <div className='text-left'>
                    <h5 className='font-bold'>Sukhamrit Singh</h5>
                    <span className='text-xs font-medium block text-sky-800 rounded-md'>
                        Chief Technology Officer
                    </span>
                    <span className='text-xs font-medium block mt-1 text-slate-400'>
                        Leadership
                    </span>
                </div>
            </div>*/}
            <ul className='mb-8 flex gap-10 flex-wrap justify-start'> 
                {members.map((member) => {
                    return MemberCard(member)
                })}
            </ul>
        </section>
    )
}


const BerkeleytimeSection = ({ members }: { members: IMember[] }) => {
    const [scrolled, setScrolled] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 48) {
            setScrolled(true)
        } else if (scrolled) {
            setScrolled(false)
        }
    })
    return (
        <section className='flex gap-10 flex-col' id='Berkeleytime'>
            <h2 className={`${scrolled ? 'pt-10 mt-40' : 'top-8'}`}>Berkeleytime</h2>
            <ul className='mb-8 flex gap-10 flex-wrap justify-start'>
                {members.map((member) => {
                    return MemberCard(member)
                })}
            </ul>
        </section>
    )
}


const BerkeleyMobileSection = ({ members }: { members: IMember[] }) => {
    const [scrolled, setScrolled] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 48) {
            setScrolled(true)
        } else if (scrolled) {
            setScrolled(false)
        }
    })
    return (
        <section className='flex gap-10 flex-col' id='BerkeleyMobile'>
            <h2 className={`${scrolled ? 'pt-10 mt-40' : 'top-8'}`}>Berkeley Mobile</h2>
            <ul className='mb-8 flex gap-10 flex-wrap justify-start'>
                {members.map((member) => {
                    return MemberCard(member)
                })}
            </ul>
        </section>
    )
}

const WebDevSection = ({ members }: { members: IMember[] }) => {
    const [scrolled, setScrolled] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 48) {
            setScrolled(true)
        } else if (scrolled) {
            setScrolled(false)
        }
    })
    return (
        <section className='flex gap-10 flex-col' id='WebDev'>
            <h2 className={`${scrolled ? 'pt-10 mt-40' : 'top-8'}`}>WebDev</h2>
            <ul className='mb-8 flex gap-10 flex-wrap justify-start'>
                {members.map((member) => {
                    return MemberCard(member)
                })}
            </ul>
        </section>
    )
}

/*const SpecialProjSection = ({ members }: { members: IMember[] }) => {
    const [scrolled, setScrolled] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 48) {
            setScrolled(true)
        } else if (scrolled) {
            setScrolled(false)
        }
    })
    return (
        <section className='flex gap-10 flex-col' id='SpecialProj'>
            <h2 className={`${scrolled ? 'pt-10 mt-40' : 'top-8'}`}>Special Projects</h2>
            <ul className='mb-8 flex gap-10 flex-wrap justify-start'>
                {members.map((member) => {
                    return MemberCard(member)
                })}
            </ul>
        </section>
    )
}*/