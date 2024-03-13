import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, TwoToOneGrid } from '../components/Layout/Columns.layout'
import { WidePageLayout } from '../components/Layout/Page.layout'
import type { PResearchCard } from '../data/research'
import RESEARCH from '../data/research'
import { TbLink } from 'react-icons/tb'

const Research = () => {
    return (
        <WidePageLayout>
            <div>
                {/* Page title and description */}
                <h1>Academic Papers and Resources for Tech</h1>
                    <h5 className='mt-4'>
                        Some helpful resources to get you started on your research endevours
                    </h5>
            </div>
            {/* Two-to-one grid layout */}
            <TwoToOneGrid>
                {/* Map through research data to render ResearchCard components */}
                {RESEARCH.map(({ name, img_path, descriptions, links }) => {
                    return (
                        <ResearchCard
                            key={name} // Unique key for each ResearchCard
                            name={name}
                            img_path={img_path}
                            descriptions={descriptions}
                            links={links}
                        />
                    )
                })}
            </TwoToOneGrid>
            <div>
                {/* Page title and description */}
                <h1>How Do I Get Into Research?</h1>
                <div className="mt-4 mb-4">
                    <h5 className='mt-4 mb-4'>
                        We understand that getting into research can be hard! Here are some programs to get started
                    </h5>
                    <h3 className='mt-4 mb-4'>
                    Research Programs
                    </h3>
                    <div className="border-b border-black"></div>
                </div>

                <div className="mt-4 mb-4">
                    <h4 className='mt-4 mb-4'>
                        <a href="https://data.berkeley.edu/discovery" target="_blank" rel="noopener noreferrer">
                            Data Science Discovery Program
                        </a>
                    </h4>
                    
                    <p className='mt-4 mb-4'>
                        The Discovery Program incubates and accelerates data science and AI research in academia, government, non-profit, and industry. Discovery is a program of DSUS in partnership with BIDS, D-Lab, Research IT, the Library.
                    </p>
                    <p className='mt-4 mb-4'>
                        Student researchers have the opportunity to work on semester-long discovery projects of their choice and apply data science to real-world problems with a variety of companies, from startups to NGOs to well-established corporations.
                    </p>
                    <p className='mt-4 mb-4'>
                        Discover projects allows student researcher to worked on projects in all kinds of impact areas. We continually seek to engage with new partners operating in different industries: Business, Natural Sciences, Physical Science/Engineering, Humanities, Industry, etc...
                    </p>
                    
                    <div className="border-b border-black"></div>
                </div>

                <div className="mt-4 mb-4">
                    <h4 className='mt-4 mb-4'>
                        <a href="https://research.berkeley.edu/urap/" target="_blank" rel="noopener noreferrer">
                            Undergraduate Research Apprentice Program (URAP)
                        </a>
                    </h4>
                    <p className='mt-4 mb-4'>
                    The Undergraduate Research Apprentice Program (URAP) provides an opportunity for Berkeley undergraduates to work with faculty members and research staff on cutting-edge research projects. Working closely with mentors, students will deepen their knowledge and skills in areas of special interest, while experiencing what it means to be part of an intellectual community engaged in research. The program is designed to stimulate awareness of advanced research and interest in graduate study. Students are not paid for their participation; instead, they earn 1 unit of academic credit for every 3 hours of research work completed (limited to 4 units per term).
                    </p>
                    <div className="border-b border-black"></div>
                </div>

                <div className="mt-4 mb-4">
                    <h4 className='mt-4 mb-4'>
                        <a href="https://data.berkeley.edu/discovery" target="_blank" rel="noopener noreferrer">
                            Science Undergraduate Laboratory Internship Program (SULI)
                        </a>
                    </h4>
                    <p className='mt-4 mb-4'>
                        The DOE’s SULI, or Science Undergraduate Laboratory Internship program, encourages undergraduates from two- and four-year colleges, post-baccalaureates, and graduate students to pursue STEM careers by providing research internships at one of 17 DOE National Laboratories.
                    </p>
                    <p className='mt-4 mb-4'>
                        Applications are solicited annually for three separate internship terms. Internships last ten weeks during the summer term (May through August) or 16 weeks during the fall (August through December) and spring (January through May) terms.
                    </p>
                    <div className="border-b border-black"></div>
                </div>

                <div className="mt-4 mb-4">
                    <h4 className='mt-4 mb-4'>
                        <a href="https://education.lbl.gov/internships/suli/" target="_blank" rel="noopener noreferrer">
                            Summer Undergraduate Research Fellowship Program (SURF)
                        </a>
                    </h4>
                    <p className='mt-4 mb-4'>
                        SURF L&S provides undergraduates in the College of Letters and Science with funding to undertake concentrated summer research in preparation for a senior thesis or other major capstone project. Fellows receive a summer stipend of $5,000. SURF L&S fellows should ideally be entering their final year or final semester and have no other research funding. These fellowships are supported by a number of private donors.
                    </p>
                    <div className="border-b border-black"></div>
                </div>

                <div className="mt-4 mb-4">
                    <h4 className='mt-4 mb-4'>
                        <a href="https://shinstitute.org/sustainable-research-pathways/" target="_blank" rel="noopener noreferrer">
                            Sustainable Research Pathways
                        </a>
                    </h4>
                    <p className='mt-4 mb-4'>
                        Sustainable Research Pathways (SRP) at Berkeley Lab is a Computing Sciences program designed to bring professor-and-student teams, as well as undergraduate and graduate students, to the lab to work on research projects. The program, developed with Sustainable Horizons Institute, builds research collaborations and expands opportunities for emerging scientists. The faculty track consists of professor-and-student teams. Students may also apply without faculty member teammates via a newly added student track.
                    </p>
                    <p className='mt-4 mb-8'>
                        Every year, Computing Sciences sponsors a workshop to recruit participants for the following summer. This workshop is designed for faculty and students from a variety of institutions, including minority-serving Institutions (MSI) and women’s and community colleges serving students from under-represented or underprivileged backgrounds. At the workshop, faculty teams and unaccompanied students explore possible areas of overlap and cooperation between their own research and that of Berkeley Lab staff. Matched participants conduct collaborative summer research at Berkeley Lab.
                    </p>
                    <div className="border-b border-black"></div>
                </div>
            </div>

            
        </WidePageLayout>
    )
}
export default Research

// ResearchCard component
const ResearchCard = ({
    name,
    descriptions,
    img_path,
    links,
}: PResearchCard) => {
    const navigate = useNavigate()
    return (
        <div className='px-10 py-4 bg-white rounded-xl shadow-card animate-showing duration-300 hover:shadow-card-hover ease-out'>

            {/* Centered columns layout */}
            <CenterAlignColumns>
                {/* Image */}
                <img
                    src={img_path}
                    alt={`icon for ${name}`}
                    className='w-24 h-24 sm:w-16 sm:h-16 rounded-md'
                />
                <div>
                    {/* Research name */}
                    <h3 className='text-lg font-bold'>{name}</h3>
                    {/* Research descriptions */}
                    <p className='mt-2 text-sm leading-6 font-medium'>
                        {descriptions}
                    </p>
                    {/* Render links if available */}
                        {links && links.length > 0 &&
                            links.map(({ position, link }) => {
                                return (
                                    <a
                                        key={position} // Unique key for each link
                                        href={link} // URL
                                        target='_blank' // Open in new tab
                                        rel='noopener noreferrer' // Security attributes
                                        className='text-sm text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out' // Styling
                                    >
                                        {/* Icon and position */}
                                        <TbLink className="inline" /> {position}
                                    </a>
                                )
                            })
                        }
                </div>
            </CenterAlignColumns>
        </div>
    )
}