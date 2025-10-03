import { IMember, Leadership, BerkeleyMobileMembers, WebDevMembers, BerkeleytimeMembers, BearBitesMembers, MoffittStatusMembers, AlumniMembers, DecalMembers } from '../data/members'
import { WidePageLayout } from '../components/Layout/Page.layout'
import { Columns, MdColumn } from '../components/Layout/Columns.layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect, useRef } from 'react'

import default_profile from '../assets/members/default.png'
import robot_bear from '../assets/octo robot bear.png'
import { PieChart } from 'react-minimal-pie-chart'
import { MAJORS } from '../data/majors'
import { useParallax } from 'react-scroll-parallax'
import { idText } from 'typescript'
import React from 'react'


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
    const sections = [
        { id: "Leadership", label: "Leadership" },
        { id: "Berkeleytime", label: "Berkeleytime" },
        { id: "BerkeleyMobile", label: "Berkeley Mobile" },
        { id: "WebDev", label: "Web Dev" },
        { id: "BearBites", label: "Bear Bites" },
        { id: "MoffittStatus", label: "Moffitt Status" },
        { id: "Decal", label: "Decal" },
        { id: "Alumni", label: "Alumni" },
      ];
    
    const [activeSection, setActiveSection] = useState("");
    const [showSidebar, setShowSidebar] = useState(false);
  
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY >= 400) {   //value when at top of leadership section
              setShowSidebar(true);
            } else {
              setShowSidebar(false);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  const id = entry.target.id;
                  setActiveSection(id);
                }
              });
            },
            {
              root: null,
              rootMargin: '-50% 0px -50% 0px',
              threshold: 0, 
            }
          );

        const sectionsElements = Object.values(sectionRefs.current);
        sectionsElements.forEach((section) => {
            if (section) observer.observe(section);
        });

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // trigger on load
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
          sectionsElements.forEach((section) => {
            if (section) observer.unobserve(section);
          });
        };
      }, [sectionRefs]);

      const handleScrollTo = (id: string) => {
        const section = sectionRefs.current[id];
        if (section) {
          const yOffset = -90; // account for navbar height
          const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      
          window.scrollTo({ top: y, behavior: "smooth" });
        }
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
                <MdColumn secondary>
                    <img
                        src={robot_bear}
                        alt={"OCTO robot teddy bear :)"}
                        width={350}
                        height={350}
                        style={{ alignSelf: 'center' }}
                    />
                </MdColumn>
            </Columns>
            <LeadershipSection ref={(el) => (sectionRefs.current["Leadership"] = el)} key='Leadership' members={Leadership} />
            <BerkeleytimeSection ref={(el) => (sectionRefs.current["Berkeleytime"] = el)} key='Berkeleytime' members={BerkeleytimeMembers} />
            <BerkeleyMobileSection ref={(el) => (sectionRefs.current["BerkeleyMobile"] = el)} key='BerkeleyMobile' members={BerkeleyMobileMembers} />
            <WebDevSection ref={(el) => (sectionRefs.current["WebDev"] = el)} key='WebDev' members={WebDevMembers} />
            <BearBitesSection ref={(el) => (sectionRefs.current["BearBites"] = el)} key='BearBites' members={BearBitesMembers} />
            <MoffittStatusSection ref={(el) => (sectionRefs.current["MoffittStatus"] = el)} key='MoffittStatus' members={MoffittStatusMembers} />
            <DecalSection ref={(el) => (sectionRefs.current["Decal"] = el)} key='Decal' members={DecalMembers} />
            <AlumniSection ref={(el) => (sectionRefs.current["Alumni"] = el)} key='Alumni' members={AlumniMembers} />

            <aside className={`fixed right-5 top-28 w-48 space-y-2 transition-all duration-700 ease-out ${showSidebar ?
                 "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"}`}>
                {sections.map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => handleScrollTo(id)}
                        className={`block px-3 py-2 rounded text-xs text-gray-500 font-medium hover:bg-gray-200 transition ${activeSection === id ? "underline font-extrabold text-gray-600" : ""
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </aside>


 
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

const LeadershipSection = React.forwardRef<HTMLElement, { members: IMember[] }>(
    ({ members }, ref) => {
      return (
        <section ref={ref} id="Leadership" className="flex gap-10 flex-col mb-20">
          <h2 className="top-8">Leadership</h2>
          <ul className="mb-8 flex gap-10 flex-wrap justify-start">
            {members.map((member) => MemberCard(member))}
          </ul>
        </section>
      );
    }
  );

  const BerkeleytimeSection = React.forwardRef<HTMLElement, { members: IMember[] }>(
    ({ members }, ref) => {
      return (
        <section ref={ref} id="Berkeleytime" className="flex gap-10 flex-col mb-20">
          <h2 className="top-8">Berkeleytime</h2>
          <ul className="mb-8 flex gap-10 flex-wrap justify-start">
            {members.map((member) => MemberCard(member))}
          </ul>
        </section>
      );
    }
  );


  const BerkeleyMobileSection = React.forwardRef<HTMLElement, { members: IMember[] }>(
    ({ members }, ref) => {
      return (
        <section ref={ref} id="BerkeleyMobile" className="flex gap-10 flex-col mb-20">
          <h2 className="top-8">Berkeley Mobile</h2>
          <ul className="mb-8 flex gap-10 flex-wrap justify-start">
            {members.map((member) => MemberCard(member))}
          </ul>
        </section>
      );
    }
  );
  

  const WebDevSection = React.forwardRef<HTMLElement, { members: IMember[] }>(
    ({ members }, ref) => {
      return (
        <section ref={ref} id="WebDev" className="flex gap-10 flex-col mb-20">
          <h2 className="top-8">WebDev</h2>
          <ul className="mb-8 flex gap-10 flex-wrap justify-start">
            {members.map((member) => MemberCard(member))}
          </ul>
        </section>
      );
    }
  );

  const BearBitesSection = React.forwardRef<HTMLElement, { members: IMember[] }>(
    ({ members }, ref) => {
      return (
        <section ref={ref} id="BearBites" className="flex gap-10 flex-col mb-20">
          <h2 className="top-8">BearBites</h2>
          <ul className="mb-8 flex gap-10 flex-wrap justify-start">
            {members.map((member) => MemberCard(member))}
          </ul>
        </section>
      );
    }
  );

  const MoffittStatusSection = React.forwardRef<HTMLElement, { members: IMember[] }>(
    ({ members }, ref) => {
      return (
        <section ref={ref} id="MoffittStatus" className="flex gap-10 flex-col mb-20">
          <h2 className="top-8">MoffittStatus</h2>
          <ul className="mb-8 flex gap-10 flex-wrap justify-start">
            {members.map((member) => MemberCard(member))}
          </ul>
        </section>
      );
    }
  );

  const DecalSection = React.forwardRef<HTMLElement, { members: IMember[] }>(
    ({ members }, ref) => {
      return (
        <section ref={ref} id="Decal" className="flex gap-10 flex-col mb-20">
          <h2 className="top-8">Decal</h2>
          <ul className="mb-8 flex gap-10 flex-wrap justify-start">
            {members.map((member) => MemberCard(member))}
          </ul>
        </section>
      );
    }
  );

  const AlumniSection = React.forwardRef<HTMLElement, { members: IMember[] }>(
    ({ members }, ref) => {
      return (
        <section ref={ref} id="Alumni" className="flex gap-10 flex-col mb-20">
          <h2 className="top-8">Alumni</h2>
          <ul className="mb-8 flex gap-10 flex-wrap justify-start">
            {members.map((member) => MemberCard(member))}
          </ul>
        </section>
      );
    }
  );

  LeadershipSection.displayName = 'LeadershipSection';
  BerkeleytimeSection.displayName = 'BerkeleytimeSection';
  BerkeleyMobileSection.displayName = 'BerkeleyMobileSection';
  WebDevSection.displayName = 'WebDevSection';
  MoffittStatusSection.displayName = 'MoffittStatusSection';
  AlumniSection.displayName = 'AlumniSection';
  DecalSection.displayName = 'DecalSection';










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