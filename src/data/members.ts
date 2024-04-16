import vedha_santhosh from '../assets/members/vedha_santhosh.jpeg'
import srikar_hanumanula from '../assets/members/srikar_hanumanula.jpeg'
import kev_wang from '../assets/members/kev_wang.jpeg'
import sukhamrit_singh from '../assets/members/sukhamrit_singh.jpeg'
import joanne_tran from '../assets/members/joanne_tran.jpeg'

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
        name: 'Michelle Tran',
        team: 'Berkeleytime',
        title: 'Product Manager',
        
    },
    {
        name: 'Sukhamrit Singh ',
        team: 'Berkeley Mobile',
        title: 'Product Manager',
        photo: sukhamrit_singh,
    },
    {
        name: 'Srikar Hanumanula',
        team: 'ABSA',
        title: 'Product Manager',
        photo: srikar_hanumanula,
    },
    {
        name: 'Joanne Tran',
        team: 'Website',
        title: 'Lead',
        photo: joanne_tran,
    },
    {
        name: 'Shlok Sooch',
        team: 'Internal',
        title: 'Project Coordinator',
     
    },
    {
        name: 'Jenna Rizzi',
        team: 'Internal',
        title: 'Marketing Lead',
     
    },

    // {
    //     name: 'Marketing Lead',
    //     team: 'Marketing',
    //     title: 'Lead',
    // },
    // {
    //     name: 'Data Science PM',
    //     team: 'Data Science',
    //     title: 'Lead',
    // },
]

export const BerkeleytimeMembers: IMember[] = [
    {
        name: 'Michelle Tran',
        team: 'Berkeleytime',
        title: 'Product Manager',
        
    },
    {
        name: 'Matthew Rowland',
        team: 'Berkeleytime',
        title: 'Frontend Lead',
        
    },
    {
        name: 'Max Wang',
        team: 'Berkeleytime',
        title: 'Backend Lead',
        
    },
    {
        name: 'Kara Rizzardi',
        team: 'Berkeleytime',
        title: 'Frontend',
        
    },
    {
        name: 'Advay Ratan',
        team: 'Berkeleytime',
        title: 'Backend',
        
    },
    {
        name: 'Rachel Hua',
        team: 'Berkeleytime',
        title: 'Design Lead',
        
    },
    {
        name: 'Chengming Li',
        team: 'Berkeleytime',
        title: 'Backend',
        
    },
    {
        name: 'Ethan Chng',
        team: 'Berkeleytime',
        title: 'Design',
        
    },
    {
        name: 'Leo Huang',
        team: 'Berkeleytime',
        title: 'Frontend',
        
    },
    {
        name: 'Mary Tran',
        team: 'Berkeleytime',
        title: 'Design',
        
    },
    {
        name: 'Arhum Khan',
        team: 'Berkeleytime',
        title: 'Frontend',
        
    },
    {
        name: 'Subhash Prasad',
        team: 'Berkeleytime',
        title: 'Backend',
        
    },
    {
        name: 'Sarah Suen',
        team: 'Berkeleytime',
        title: 'Design',
        
    },
    {
        name: 'Xue Han',
        team: 'Berkeleytime',
        title: 'Design',
        
    },
    {
        name: 'Kevin Wang',
        team: 'Berkeleytime',
        title: 'Backend',
        
    },
    {
        name: 'Jaden Moore',
        team: 'Berkeleytime',
        title: 'Frontend',
        
    },
    {
        name: 'Elsie Xu',
        team: 'Berkeleytime',
        title: 'Backend',
        
    },
    {
        name: 'Clara Tu',
        team: 'Berkeleytime',
        title: 'Frontend',
        
    },
    {
        name: 'Kartavya Sharma',
        team: 'Berkeleytime',
        title: 'Backend',
        
    },
    
]

export const BerkeleyMobileMembers: IMember[] = [
    {
        name: 'Sukhamrit Singh',
        team: 'Berkeley Mobile',
        title: 'Project Manager',
        
    },
    {
        name: 'Justin Wong',
        team: 'Berkeley Mobile',
        title: 'iOS Lead',
        
    },
    {
        name: 'Aditi Telang',
        team: 'Berkeley Mobile',
        title: 'iOS Dev',
        
    },
    {
        name: 'Gauri Bahl',
        team: 'Berkeley Mobile',
        title: 'iOS Dev',
        
    },
    {
        name: 'Richard Yu',
        team: 'Berkeley Mobile',
        title: 'Backend',
        
    },
    {
        name: 'Minjae Kwak',
        team: 'Berkeley Mobile',
        title: 'Backend',
        
    },
    {
        name: 'Mehar Gulati',
        team: 'Berkeley Mobile',
        title: 'iOS Dev',
        
    },
    
]


export const WebDevMembers: IMember[] = [
    {
        name: 'Joanne Tran',
        team: 'Website',
        title: 'Lead',
        photo: joanne_tran,
    },
    {
        name: 'Qi Li Yang',
        team: 'Website',
        title: 'Frontend',
        
    }, 
    {
        name: 'Naomi Liu',
        team: 'Website',
        title: 'Frontend',
        
    }, 
    {
        name: 'Narah Quazi',
        team: 'Website',
        title: 'Design',
        
    }, 
    {
        name: 'Rachel Hu',
        team: 'Website',
        title: 'Frontend',
        
    }, 
    {
        name: 'Justin Song',
        team: 'Website',
        title: 'Frontend',
        
    }, 
    {
        name: 'Andrew Cheng',
        team: 'Website',
        title: 'Frontend',
        
    }, 
    {
        name: 'Jared Andrew Casiano Basilio',
        team: 'Website',
        title: 'Frontend',
        
    }, 
    {
        name: 'Jinnie Kim',
        team: 'Website',
        title: 'Frontend',
        
    }, 
    {
        name: 'Teja Mandadi',
        team: 'Website',
        title: 'Frontend',
        
    }, 

]

//currently StatDASH and AI Resource Assistant
export const SpecialProjectsMembers: IMember[] = [
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


const MEMBERS = [
    ...Leadership,
    ...BerkeleytimeMembers,
    ...BerkeleyMobileMembers,
]

export default MEMBERS
