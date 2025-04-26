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
        |'Project Manager, iOS Team Lead'
        | 'Team Lead'
        | 'Engineer'
        | 'Business/Marketing'
        | 'Backend Developer'


}

export const TEAMS = [
    'Leadership',
    'Berkeleytime',
    'Berkeley Mobile',
    'Marketing',
    'WebDev',
    'BearBites',
    'MoffittStatus',
    'ABSA',
    'Member Development',
    'Project Management',
    'Alumni',
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
        name: 'Sukhamrit Singh',
        team: 'Internal',
        title: 'Chief Technology Officer',
        photo: sukhamritsingh,
    },
    {
        name: 'Shlok Sooch',
        team: 'Internal',
        title: 'Chief of Staff',
        photo: shloksooch,
     
    },
]

export const BerkeleytimeMembers: IMember[] = [
    {
        name: 'Abhishek Suresh',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Aditya Balasubramanian',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: adityabalasubramanian,
    },
    {
        name: 'Advay Ratan',
        team: 'Berkeleytime',
        title: 'Internal Chair & Engineer',
    },
    {
        name: 'Amber Le',
        team: 'Berkeleytime',
        title: 'Product Designer',
        photo: amberle,
    },
    {
        name: 'Arvind Ganesh',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: arvindganesh,
    },
    {
        name: 'Atharv Naidu',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: atharvnaidu,
    },
    {
        name: 'Aurelia Wang',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Clara Tu',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: claratu,
    },
    {
        name: 'Daniel Li',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Eric Xu',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Garima Upadhyay',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Hwanhee Kim',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Iyu Lin',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Jacky Wong',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Jessica Le',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Khankamol Kongrukgreatiyos',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: khankamolkongrukgreatiyos,
    },
    {
        name: 'Kyle Chu',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Leo Huang',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: leohuang,
    },
    {
        name: 'Lily Yang',
        team: 'Berkeleytime',
        title: 'Product Designer',
    },
    {
        name: 'Lope Akinnitire',
        team: 'Berkeleytime',
        title: 'User Researcher',
    },
    {
        name: 'Mahathi Ryali',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: mahathiryali,
    },
    {
        name: 'Mary Tran',
        team: 'Berkeleytime',
        title: 'Design Lead',
    },
    {
        name: 'Matthew Rowland',
        team: 'Berkeleytime',
        title: 'Technical Product Manager & Frontend Lead',
    },
    {
        name: 'Max Wang',
        team: 'Berkeleytime',
        title: 'Backend Lead',
    },
    {
        name: 'Michelle Tran',
        team: 'Berkeleytime',
        title: 'Product Manager & Product Designer',
    },
    {
        name: 'Nathan Dai',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: nathandai,
    },
    {
        name: 'Nicole Lee',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Pine Nguyen',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Raymond Tsao',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Sean Lim',
        team: 'Berkeleytime',
        title: 'User Researcher',
    },
    {
        name: 'Subhash Prasad',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: subhashprasad,
    },
    {
        name: 'Yuki Han',
        team: 'Berkeleytime',
        title: 'Product Designer',
    },
    {
        name: 'Arhum Khan',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: arhumkhan,
    },
];



export const BerkeleyMobileMembers: IMember[] = [
    {
        name: 'Justin Wong',
        team: 'Berkeley Mobile',
        title: 'Project Manager, iOS Team Lead',
        photo: justinwong,
    },
    {
        name: 'Isha Tailor',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
    },
    {
        name: 'Dylan Chhum',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
        photo: dylanchhum,
    },
    {
        name: 'Yihang Chen',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
    },
    {
        name: 'Matthew Gerardi',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
    },
    {
        name: 'Arnav Podichetty',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
    },
    {
        name: 'Iyu Lin',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
    },
    {
        name: 'Sahana Bharadwaj',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
    },
    {
        name: 'Aditi Telang',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
    },
    {
        name: 'Baurzhan Abenov',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
    },
    {
        name: 'Hetvi Patel',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
    },
    {
        name: 'Jacob Shahatit',
        team: 'Berkeley Mobile',
        title: 'Backend Developer',
    },
    {
        name: 'Jaewon Oh',
        team: 'Berkeley Mobile',
        title: 'Backend Developer',
        photo: jaewonoh,
    },
];



export const WebDevMembers: IMember[] = [
    {
        name: 'Andrew Cheng',
        team: 'Website',
        title: 'Web Team Lead',
    },
    {
        name: 'Rachel Hu',
        team: 'Website',
        title: 'Web Team Lead',
        photo: rachelhu,
    },
    {
        name: 'Jerry Yang',
        team: 'Website',
        title: 'Developer',
    },
    {
        name: 'Qi Yang',
        team: 'Website',
        title: 'Developer',
    },
    {
        name: 'Richa Jos',
        team: 'Website',
        title: 'Developer',
    },
    {
        name: 'Maaz Dhalech',
        team: 'Website',
        title: 'Developer',
    },
    {
        name: 'Jason Chan',
        team: 'Website',
        title: 'Developer',
    },
    {
        name: 'Vivan Sinha',
        team: 'Website',
        title: 'Developer',
    },
    {
        name: 'Narah Quazi',
        team: 'Website',
        title: 'UI Designer',
    },
    {
        name: 'Akshaj Molukutla',
        team: 'Website',
        title: 'Developer',
    },
];

export const BearBitesMembers: IMember[] = [
    {
        name: 'Yash Natu',
        team: 'BearBites',
        title: 'Team Lead',
    },
    {
        name: 'Yousif Yacoby',
        team: 'BearBites',
        title: 'Engineer',
    },
];

export const MoffittStatusMembers: IMember[] = [
    {
        name: 'Camila Gutierrez-Mendez',
        team: 'MoffittStatus',
        title: 'Business/Marketing',
    },
    {
        name: 'Simar Kaur',
        team: 'MoffittStatus',
        title: 'Business/Marketing',
    },
    {
        name: 'Apple Zhou',
        team: 'MoffittStatus',
        title: 'Engineer',
    },
    {
        name: 'Praneel Chellapilla',
        team: 'MoffittStatus',
        title: 'Engineer',
    },
    {
        name: 'Robert Meli',
        team: 'MoffittStatus',
        title: 'Engineer',
    },
    {
        name: 'Sameer Rahman',
        team: 'MoffittStatus',
        title: 'Engineer',
    },
    {
        name: 'Sean She',
        team: 'MoffittStatus',
        title: 'Engineer',
    },
];

export const AlumniMembers: IMember[] = [
    {
        name: 'Vedha Santhosh',
        team: 'Leadership',
        title: 'Chief Technology Officer',
        //photo: vedha_santhosh,
    },
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
    ...BerkeleyMobileMembers,
]

export default MEMBERS
