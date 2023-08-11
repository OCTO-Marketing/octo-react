import goldman from '../../assets/home/companies/goldman.png'
import salesforce from '../../assets/home/companies/salesforce.png'
import nvidia from '../../assets/home/companies/nvidia.png'
import sap from '../../assets/home/companies/sap.png'
import adobe from '../../assets/home/companies/adobe.png'
import yelp from '../../assets/home/companies/yelp.png'
import kearney from '../../assets/home/companies/kearney.png'
import nih from '../../assets/home/companies/nih.png'
import i4y from '../../assets/home/companies/i4y.png'
import tesla from '../../assets/home/companies/tesla.png'
import microsoft from '../../assets/home/companies/microsoft.png'
import apple from '../../assets/home/companies/apple.png'
import lbnl from '../../assets/home/companies/lbnl.png'
import x from '../../assets/home/companies/x.png'
import urap from '../../assets/home/companies/urap.png'
import ours from '../../assets/home/companies/ours.png'
import intel from '../../assets/home/companies/intel.png'
import uber from '../../assets/home/companies/uber.png'
import google from '../../assets/home/companies/google.png'
import facebook from '../../assets/home/companies/facebook.png'
import risk from '../../assets/home/companies/risk.png'
import amazon from '../../assets/home/companies/amazon.png'
import quantum from '../../assets/home/companies/quantum.jpeg'
import lyft from '../../assets/home/companies/lyft.png'

const companies = [
    goldman,
    salesforce,
    nvidia,
    sap,
    adobe,
    yelp,
    kearney,
    nih,
    i4y,
    tesla,
    microsoft,
    apple,
    lbnl,
    x,
    urap,
    ours,
    intel,
    uber,
    google,
    facebook,
    risk,
    amazon,
    quantum,
    lyft,
].sort()

export const Companies = companies.map((company) => {
    return (
        <img
            src={company}
            key={company}
            alt=''
            className='w-24 sm:w-16 mb:w-12 object-contain'
        />
    )
})
