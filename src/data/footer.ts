import {
    FiGithub,
    FiInstagram,
    FiLock,
    FiMail,
    FiMapPin,
    FiUsers,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import { TbCopyright } from 'react-icons/tb'
import { PiMountains } from 'react-icons/pi'

export interface PFooterCategory {
    label: string
    items: PFooterItem[]
}
export interface PFooterItem {
    Icon: IconType
    label: string
    link?: string
}

export const footer_categories: PFooterCategory[] = [
    {
        label: 'Contact Us',
        items: [
            {
                Icon: FiMail,
                label: 'technology@asuc.org',
                link: 'mailto:technology@asuc.org',
            },
            {
                Icon: FiMapPin,
                label: '412 Eshleman Hall',
            },
        ],
    },
    {
        label: 'External Links',
        items: [
            {
                Icon: FiUsers,
                label: 'ASUC',
                link: 'https://asuc.org/',
            },
            {
                Icon: FiInstagram,
                label: 'Instagram',
                link: 'https://instagram.com/asuc_octo',
            },
            {
                Icon: FiGithub,
                label: 'Github',
                link: 'https://github.com/asuc-octo',
            },
        ],
    },
    {
        label: 'Statements',
        items: [
            {
                Icon: FiLock,
                label: 'Privacy',
                link: 'https://policies.google.com/technologies/partner-sites?hl=en-GB&gl=uk',
            },
            {
                Icon: PiMountains,
                label: 'Land Acknowledgement',
                link: 'https://diversity.berkeley.edu/ohlone-land#:~:text=The%20Division%20of%20Equity%20%26%20Inclusion%20acknowledges%20that,of%20the%20sovereign%20Verona%20Band%20of%20Alameda%20County.',
            },
            { Icon: TbCopyright, label: 'ASUC OCTO' },
        ],
    },
]
