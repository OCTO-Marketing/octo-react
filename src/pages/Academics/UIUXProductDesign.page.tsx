import { link } from 'node:fs'
import { PiCards } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, TwoToOneGrid } from '../../components/Layout/Columns.layout'
import { WidePageLayout } from '../../components/Layout/Page.layout'
import type { UIUXPDCard } from '../../data/uiuxproductdesign'
import UIUXPD from '../../data/uiuxproductdesign'
import { TbLink } from 'react-icons/tb'

const UIUXProductDesign = () => {
    return (
        <WidePageLayout>
            <div>
                <h1>UI/UX & Product Design</h1>
                <h5 className='mt-4'>
                    Accelerate your learning and elevate your skills in UI/UX and Product Design by engaging with the following resources.
                </h5>
            </div>
            <TwoToOneGrid>
                {UIUXPD.map(({ resource_name, img_path, descriptions, link }) => {
                    return (
                        <Card
                            key={resource_name}
                            resource_name={resource_name}
                            img_path={img_path}
                            descriptions={descriptions}
                            link={link}
                        />
                    )
                })}
            </TwoToOneGrid>
        </WidePageLayout>
    )
}

export default UIUXProductDesign

const Card = ({ resource_name, descriptions, img_path, link }: UIUXPDCard) => {
    const navigate = useNavigate()
    return (
        <div
            className='px-8 py-6 bg-white rounded-xl shadow-card duration-300 hover:shadow-card-hover ease-out flex content-center animate-showing'
            onClick={() => {
                navigate('')
            }}
        >
            <CenterAlignColumns>
                <img
                    src={img_path}
                    alt={`team icon for ${resource_name}`}
                    className='w-24 h-24 sm:w-16 sm:h-16 rounded-md'
                />
                <div>
                    <h3 className='text-lg font-bold'>{resource_name}</h3>
                    <p className='mt-2 mb-1 text-sm leading-6 font-medium'>
                        {descriptions}
                    </p>
                    <TbLink className="text-accent list-none text-sm cursor-pointer whitespace-nowrap inline" /> <a className="text-accent list-none text-sm cursor-pointer whitespace-nowrap" href={link} >Link</a>
                </div>
            </CenterAlignColumns>
        </div>
    )
}
