/*import vedha_santhosh from '../assets/members/vedha_santhosh.jpeg'
import srikar_hanumanula from '../assets/members/srikar_hanumanula.jpeg'
import kev_wang from '../assets/members/kev_wang.jpeg'
import sukhamrit_singh from '../assets/members/sukhamrit_singh.jpeg'
import joanne_tran from '../assets/members/joanne_tran.jpeg'
import naomiliu from '../assets/members/naomiliu.jpeg'
import qiliyang from '../assets/members/qiliyang.jpeg'*/
import rachelhu from '../assets/members/Rachel_Hu.jpg'
import adityabalasubramanian from '../assets/members/Aditya_Balasubramanian.jpg'
import amberle from '../assets/members/Amber_Le.jpeg'
import arhumkhan from '../assets/members/Arhum_Khan.jpeg'
import arvindganesh from '../assets/members/Arvind_Ganesh.png'
import atharvnaidu from '../assets/members/Atharv_Naidu.png'
import claratu from '../assets/members/Clara_Tu.jpeg'
import dylanchhum from '../assets/members/Dylan_Chhum.jpg'
import justinwong from '../assets/members/Justin_Wong.jpeg'
import khankamolkongrukgreatiyos from '../assets/members/Khankamol_Kongrukgreatiyos.jpeg'
import leohuang from '../assets/members/Leo_Huang.jpeg'
import mahathiryali from '../assets/members/Mahathi_Ryali.png'
import nathandai from '../assets/members/Nathan_Dai.jpeg'
import shloksooch from '../assets/members/Shlok_Sooch.jpeg'
import subhashprasad from '../assets/members/Subhash_Prasad.jpg'
import sukhamritsingh from '../assets/members/Sukhamrit_Singh.jpg'
import jaewonoh from '../assets/members/Jaewon_Oh.jpg'
import rodrigoortiz from '../assets/members/Rodrigo_Ortiz.jpg'
import sageaguinakang from '../assets/members/Sage_AguinaKang.jpg'

import vedha_santhosh from '../assets/members/vedha_santhosh.jpeg'

export interface IMember {
    name: string
    photo?: string
    team:
        | 'Leadership'
        | 'Berkeleytime'
        | 'Berkeley Mobile'
        | 'Marketing'
        | 'ABSA'
        | 'Internal'
        | 'Website'
        | 'Data Science'
        | 'Special Projects'
        | 'StatDASH'
        | 'AI Resource Assistant'
        | 'NexLiber'
        | 'BearBites'
        | 'MoffittStatus'
        | 'Decal'

    title:
        | 'Chief Technology Officer'
        | 'Product Manager'
        | 'Lead'
        | 'Frontend'
        | 'Frontend Lead'
        | 'Backend'
        | 'Backend Lead'
        | 'Design'
        | 'Design Lead'
        | 'Full-Stack'
        | 'iOS Dev'
        | 'iOS Lead'
        | 'Android Dev'
        | 'Android Lead'
        | 'Project Manager'
        | 'Marketing Lead'
        | 'Project Coordinator'
        | 'Chief of Staff'
        | 'Technical Product Manager & Frontend Lead'
        | 'Product Manager & Product Designer'
        | 'Developer'
        | 'UI Designer'
        | 'Web Team Lead'
        | 'Engineer'
        | 'Internal Chair & Engineer'
        | 'User Researcher'
        | 'Product Designer'
        | 'iOS Developer'
        | 'Project Manager, iOS Team Lead'
        | 'Team Lead'
        | 'Engineer'
        | 'Business/Marketing'
        | 'Backend Developer'
        | 'Member'
        | 'Pod Lead'
        | 'Product Lead'
        | 'Education Lead'
        | 'Internal Lead'
        | 'Co-Chief of Staff'
        | 'Full-Stack Engineer'
        | 'UI/UX Engineer'
        | 'Designer'
        | 'Data Team Lead'
        | 'Business Lead'
        | 'Tech Lead'
        | 'UX Designer'
}

export const TEAMS = [
    'Leadership',
    'Berkeleytime',
    'Berkeley Mobile',
    'Marketing',
    'WebDev',
    'BearBites',
    'MoffittStatus',
    'Decal',
    'ABSA',
    'Member Development',
    'Project Management',
    'Alumni'
]

// export const CTO: IMember[] = [
//     {
//         name: 'Vedha Santhosh',
//         team: 'Leadership',
//         title: 'Chief Technology Officer',
//         photo: vedha_santhosh,
//     },
// ]

export const Leadership: IMember[] = [
    {
        name: 'Shlok Sooch',
        team: 'Leadership',
        title: 'Chief Technology Officer',
        photo: shloksooch
    },
    {
        name: 'Sameer Rahman',
        team: 'Leadership',
        title: 'Co-Chief of Staff'
    },
    {
        name: 'Praneel Chellapilla',
        team: 'Leadership',
        title: 'Co-Chief of Staff'
    },
    {
        name: 'Simar Kaur',
        team: 'Leadership',
        title: 'Co-Chief of Staff'
    }
]

export const BerkeleytimeMembers: IMember[] = [
    {
        name: 'Advay Ratan',
        team: 'Berkeleytime',
        title: 'Product Lead'
    },
    {
        name: 'Max Wang',
        team: 'Berkeleytime',
        title: 'Education Lead'
    },
    {
        name: 'Lily Yang',
        team: 'Berkeleytime',
        title: 'Design Lead'
    },
    {
        name: 'Nathan Dai',
        team: 'Berkeleytime',
        title: 'Internal Lead',
        photo: nathandai
    },
    {
        name: 'Abhishek Suresh',
        team: 'Berkeleytime',
        title: 'Pod Lead'
    },
    {
        name: 'Daniel Li',
        team: 'Berkeleytime',
        title: 'Pod Lead'
    },
    {
        name: 'Eric Xu',
        team: 'Berkeleytime',
        title: 'Pod Lead'
    },
    {
        name: 'Pine Nguyen',
        team: 'Berkeleytime',
        title: 'Pod Lead'
    },
    {
        name: 'Priya Venkatesan',
        team: 'Berkeleytime',
        title: 'Pod Lead'
    },
    {
        name: 'Sophie Hu',
        team: 'Berkeleytime',
        title: 'Pod Lead'
    },
    {
        name: 'Subhash Prasad',
        team: 'Berkeleytime',
        title: 'Pod Lead',
        photo: subhashprasad
    },
    {
        name: 'Aurelia Wang',
        team: 'Berkeleytime',
        title: 'Engineer'
    },
    {
        name: 'Garima Upadhyay',
        team: 'Berkeleytime',
        title: 'Engineer'
    },
    {
        name: 'Jacky Wong',
        team: 'Berkeleytime',
        title: 'Engineer'
    },
    {
        name: 'Leo Huang',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: leohuang
    },
    {
        name: 'Nicole Lee',
        team: 'Berkeleytime',
        title: 'Engineer'
    },
    {
        name: 'Quincy Thai',
        team: 'Berkeleytime',
        title: 'Engineer'
    },
    {
        name: 'Aashna Patel',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Aayush Shah',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Aditya Ohri',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Amelie Tran',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Angela Huynh',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Anne Que',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Annie Lin',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Carys Atmodjo',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Cheyenne Paw',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Christine Nam',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Hannah Shiohara',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Isabel Bayani',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Jathin Korrapati',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Jerry Chu',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Julie Liu',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Karin Liu',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Leo Liao',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Nomin-Erdene Batchuluun',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Renee Ou',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Ritam Chakraborty',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Ryan Barretto',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Sam Bai',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Sasha Murray',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Shreyas Thumathy',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Song-Ze Yu',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Sriya Sthanikam',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Tayler Nguyen',
        team: 'Berkeleytime',
        title: 'Member'
    },
    {
        name: 'Zakaria Al-Alie',
        team: 'Berkeleytime',
        title: 'Member'
    }
]

export const BerkeleyMobileMembers: IMember[] = [
    {
        name: 'Justin Wong',
        team: 'Berkeley Mobile',
        title: 'Project Manager, iOS Team Lead',
        photo: justinwong
    },
    {
        name: 'Dylan Chhum',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
        photo: dylanchhum
    },
    {
        name: 'Rachel Chen',
        team: 'Berkeley Mobile',
        title: 'Designer'
    },
    {
        name: 'Gujri Singh',
        team: 'Berkeley Mobile',
        title: 'Designer'
    },
    {
        name: 'Devansh Ojha',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Huzaifa Taha Rangwala',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Iyu Lin',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Jansen Mok',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Jayana Nanayakkara',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Ananya Dua',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Karthik Subramanian',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Katy Yang',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Lin Tsai',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Ozaid Nasri',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Salihah Aljifri',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Zaid Madanat',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    }
]

export const WebDevMembers: IMember[] = [
    {
        name: 'Rodrigo Ortiz',
        team: 'Website',
        title: 'Team Lead',
        photo: rodrigoortiz
    },
    {
        name: 'Nataly Lopez',
        team: 'Website',
        title: 'UI/UX Engineer'
    },
    {
        name: 'Yoko Furukawa',
        team: 'Website',
        title: 'UI/UX Engineer'
    },
    {
        name: 'Matthew Qi',
        team: 'Website',
        title: 'Full-Stack Engineer'
    },
    {
        name: 'Sage Aguina-Kang',
        team: 'Website',
        title: 'Full-Stack Engineer',
        photo: sageaguinakang
    }
]

export const BearBitesMembers: IMember[] = [
    {
        name: 'Yash Natu',
        team: 'BearBites',
        title: 'Team Lead'
    }
]

export const MoffittStatusMembers: IMember[] = [
    {
        name: 'Apple Zhou',
        team: 'MoffittStatus',
        title: 'Data Team Lead'
    },
    {
        name: 'Camila Gutierrez',
        team: 'MoffittStatus',
        title: 'Business Lead'
    },
    {
        name: 'Robert Meli',
        team: 'MoffittStatus',
        title: 'Tech Lead'
    },
    {
        name: 'Kayla Su',
        team: 'MoffittStatus',
        title: 'UX Designer'
    }
]

export const DecalMembers: IMember[] = [
    {
        name: 'Angad Singh Josan',
        team: 'Decal',
        title: 'Team Lead'
    }
]

export const AlumniMembers: IMember[] = [
    {
        name: 'Sukhamrit Singh',
        team: 'Leadership',
        title: 'Chief Technology Officer',
        photo: sukhamritsingh
    },
    {
        name: 'Vedha Santhosh',
        team: 'Leadership',
        title: 'Chief Technology Officer'
        // photo: vedha_santhosh
    },
    {
        name: 'Aditi Telang',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Arnav Podichetty',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Baurzhan Abenov',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Hetvi Patel',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Isha Tailor',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Jacob Shahatit',
        team: 'Berkeley Mobile',
        title: 'Backend Developer'
    },
    {
        name: 'Jaewon Oh',
        team: 'Berkeley Mobile',
        title: 'Backend Developer',
        photo: jaewonoh
    },
    {
        name: 'Matthew Gerardi',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Sahana Bharadwaj',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Yihang Chen',
        team: 'Berkeley Mobile',
        title: 'iOS Developer'
    },
    {
        name: 'Aditya Balasubramanian',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: adityabalasubramanian
    },
    {
        name: 'Amber Le',
        team: 'Berkeleytime',
        title: 'Product Designer',
        photo: amberle
    },
    {
        name: 'Arhum Khan',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: arhumkhan
    },
    {
        name: 'Arvind Ganesh',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: arvindganesh
    },
    {
        name: 'Atharv Naidu',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: atharvnaidu
    },
    {
        name: 'Clara Tu',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: claratu
    },
    {
        name: 'Hwanhee Kim',
        team: 'Berkeleytime',
        title: 'Engineer'
    },
    {
        name: 'Jessica Le',
        team: 'Berkeleytime',
        title: 'Engineer'
    },
    {
        name: 'Khankamol Kongrukgreatiyos',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: khankamolkongrukgreatiyos
    },
    {
        name: 'Kyle Chu',
        team: 'Berkeleytime',
        title: 'Engineer'
    },
    {
        name: 'Lope Akinnitire',
        team: 'Berkeleytime',
        title: 'User Researcher'
    },
    {
        name: 'Mahathi Ryali',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: mahathiryali
    },
    {
        name: 'Mary Tran',
        team: 'Berkeleytime',
        title: 'Design Lead'
    },
    {
        name: 'Matthew Rowland',
        team: 'Berkeleytime',
        title: 'Technical Product Manager & Frontend Lead'
    },
    {
        name: 'Michelle Tran',
        team: 'Berkeleytime',
        title: 'Product Manager & Product Designer'
    },
    {
        name: 'Raymond Tsao',
        team: 'Berkeleytime',
        title: 'Engineer'
    },
    {
        name: 'Sean Lim',
        team: 'Berkeleytime',
        title: 'User Researcher'
    },
    {
        name: 'Yuki Han',
        team: 'Berkeleytime',
        title: 'Product Designer'
    },
    {
        name: 'Sean She',
        team: 'MoffittStatus',
        title: 'Engineer'
    },
    {
        name: 'Akshaj Molukutla',
        team: 'Website',
        title: 'Developer'
    },
    {
        name: 'Andrew Cheng',
        team: 'Website',
        title: 'Web Team Lead'
    },
    {
        name: 'Jason Chan',
        team: 'Website',
        title: 'Developer'
    },
    {
        name: 'Jerry Yang',
        team: 'Website',
        title: 'Developer'
    },
    {
        name: 'Maaz Dhalech',
        team: 'Website',
        title: 'Developer'
    },
    {
        name: 'Narah Quazi',
        team: 'Website',
        title: 'UI Designer'
    },
    {
        name: 'Qi Yang',
        team: 'Website',
        title: 'Developer'
    },
    {
        name: 'Rachel Hu',
        team: 'Website',
        title: 'Web Team Lead',
        photo: rachelhu
    },
    {
        name: 'Richa Jos',
        team: 'Website',
        title: 'Developer'
    },
    {
        name: 'Vivan Sinha',
        team: 'Website',
        title: 'Developer'
    },
    {
        name: 'Arvind Vivekanandan',
        team: 'AI Resource Assistant',
        title: 'Full-Stack'
    },
    {
        name: 'Har Vey Yuen',
        team: 'AI Resource Assistant',
        title: 'Full-Stack'
    },
    {
        name: 'Jordan Camel',
        team: 'AI Resource Assistant',
        title: 'Full-Stack'
    },
    {
        name: 'Srikar Hanamanula',
        team: 'AI Resource Assistant',
        title: 'Project Manager'
    },
    {
        name: 'Nyx Iskandar',
        team: 'NexLiber',
        title: 'Full-Stack'
    },
    {
        name: 'Ron Wang',
        team: 'StatDASH',
        title: 'Full-Stack'
    },
    {
        name: 'Serena Yung',
        team: 'StatDASH',
        title: 'Design'
    },
    {
        name: 'Tommy Hang',
        team: 'StatDASH',
        title: 'Project Manager'
    },
    {
        name: 'Yunze Du',
        team: 'StatDASH',
        title: 'Backend'
    }
]

//currently StatDASH and AI Resource Assistant
/*export const SpecialProjectsMembers: IMember[] = [
    {
        name: 'Tommy Hang',
        team: 'StatDASH',
        title: 'Project Manager',
        
    },
    {
        name: 'Serena Yung',
        team: 'StatDASH',
        title: 'Design',
        
    }, 
    {
        name: 'Yunze Du',
        team: 'StatDASH',
        title: 'Backend',
        
    }, 
    {
        name: 'Ron Wang',
        team: 'StatDASH',
        title: 'Full-Stack',
        
    }, 
    {
        name: 'Srikar Hanamanula',
        team: 'AI Resource Assistant',
        title: 'Project Manager',
        
    }, 
    {
        name: 'Har Vey Yuen',
        team: 'AI Resource Assistant',
        title: 'Full-Stack',
        
    }, 
    {
        name: 'Arvind Vivekanandan',
        team: 'AI Resource Assistant',
        title: 'Full-Stack',
        
    }, 
    {
        name: 'Jordan Camel',
        team: 'AI Resource Assistant',
        title: 'Full-Stack',
        
    }, 
    {
        name: 'Nyx Iskandar',
        team: 'NexLiber',
        title: 'Full-Stack',
        
    }, 
    
]
*/

const MEMBERS = [
    ...Leadership,
    ...BerkeleytimeMembers,
    ...BerkeleyMobileMembers
]

export default MEMBERS
