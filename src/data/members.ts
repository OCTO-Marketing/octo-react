/*import vedha_santhosh from '../assets/members/vedha_santhosh.jpeg'
import srikar_hanumanula from '../assets/members/srikar_hanumanula.jpeg'
import kev_wang from '../assets/members/kev_wang.jpeg'
import sukhamrit_singh from '../assets/members/sukhamrit_singh.jpeg'
import joanne_tran from '../assets/members/joanne_tran.jpeg'
import rachelhu from '../assets/members/rachelhu.jpeg'
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
import gauribahl from '../assets/members/Gauri_Bahl.jpeg'
import justinwong from '../assets/members/Justin_Wong.jpeg'
import khankamolkongrukgreatiyos from '../assets/members/Khankamol_Kongrukgreatiyos.jpeg'
import leohuang from '../assets/members/Leo_Huang.jpeg'
import mahathiryali from '../assets/members/Mahathi_Ryali.png'
import nathandai from '../assets/members/Nathan_Dai.jpeg'
import shloksooch from '../assets/members/Shlok_Sooch.jpeg'
import subhashprasad from '../assets/members/Subhash_Prasad.jpg'
import sukhamritsingh from '../assets/members/Sukhamrit_Singh.jpg'



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


}

export const TEAMS = [
    'Leadership',
    'Berkeleytime',
    'Berkeley Mobile',
    'Marketing',
    'ABSA',
    'Member Development',
    'Project Management',
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
        name: 'Michelle Tran',
        team: 'Berkeleytime',
        title: 'Product Manager & Product Designer',
    },
    {
        name: 'Matthew Rowland',
        team: 'Berkeleytime',
        title: 'Technical Product Manager & Frontend Lead',
    },
    {
        name: 'Mary Tran',
        team: 'Berkeleytime',
        title: 'Design Lead',
    },
    {
        name: 'Max Wang',
        team: 'Berkeleytime',
        title: 'Backend Lead',
    },
        {
        name: 'Advay Ratan',
        team: 'Berkeleytime',
        title: 'Internal Chair & Engineer',
    },
    {
        name: 'Abhishek Suresh',
        team: 'Berkeleytime',
        title: 'Engineer',
    },
    {
        name: 'Aditya Balasubramania',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: adityabalasubramanian,
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
        name: 'Mahathi Ryali',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: mahathiryali,
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
        name: 'Subhash Prasad',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: subhashprasad,
    },
    {
        name: 'Arhum Khan',
        team: 'Berkeleytime',
        title: 'Engineer',
        photo: arhumkhan,
    },
    {
        name: 'Amber Le',
        team: 'Berkeleytime',
        title: 'Product Designer',
        photo: amberle,
    },
    {
        name: 'Lily Yang',
        team: 'Berkeleytime',
        title: 'Product Designer',
    },
    {
        name: 'Yuki Han',
        team: 'Berkeleytime',
        title: 'Product Designer',
    },
    {
        name: 'Sean Lim',
        team: 'Berkeleytime',
        title: 'User Researcher',
    },
    {
        name: 'Lope Akinntire',
        team: 'Berkeleytime',
        title: 'User Researcher',
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
        name: 'Serena Yung',
        team: 'Berkeley Mobile',
        title: 'UI Designer',
    },
    {
        name: 'Isha Tailor',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
    },
    {
        name: 'Kaashvi Agnihotri',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
    },
    {
        name: 'Matthew Gerardi',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
    },
    {
        name: 'Gauri Bahl',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
        photo: gauribahl,
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
        name: 'Dylan Chhum',
        team: 'Berkeley Mobile',
        title: 'iOS Developer',
        photo: dylanchhum,
    },

    
]


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
        name: 'Timothy Zheng',
        team: 'Website',
        title: 'Developer',
    },
    {
        name: 'Richa Jos',
        team: 'Website',
        title: 'Developer',
    },
    {
        name: 'Jocelyn Tao',
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
        name: 'Twesha Ghosh',
        team: 'Website',
        title: 'Developer',
    },
];


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
