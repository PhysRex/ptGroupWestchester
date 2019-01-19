import React from 'react';
import { Container } from 'semantic-ui-react'

import { HeaderBanner } from '../templates';
import { BiographyBanner } from './Staff/';
import { hengAndFamily, doctorGeneric } from '../../assets/images';

const bioContent = [
  {
    name: 'Henry Hengjia Chen',
    role: 'Chief Executive Officer',
    degrees: 'PT, DPT',
    description: 'Henry earned a Bachelor of Science degree from Binghamtom University in Psychobiology in 2007, and by 2010 graduated from Upstate Medical University with a Doctoral degree in Physical Therapy with a concentration in Orthopedic Physical Therapy. From 2010 to 2018, Henry worked in a small town of Montrose, Pennsylvania (NEPA), where he served as the Clinic Director for seven and a half years. Through Henry\'s relentless focus on patient care and clinical results, the clinic in Montrose went through a massive growth and became the preferred choice for outpatient physical therapy in NEPA. In July 2018, Henry decided to move back home to Westchester County to care for his aging parents. He is happily married to his wife Li, with two energetic little boys. Henry will strive to serve the community for many years to come.',
    quote: 'My aim is to connect with every patient in a real and authentic way',
    image: hengAndFamily,
  },
  {
    name: 'Lana Kornfeld',
    role: 'Physical Therapist',
    degrees: 'PT, DPT',
    description: 'Lana graduated from the University of Illinois with a degree in Physical Therapy with High Honors in 1998. She went on to receive her Doctorate degree in Physical Therapy from the MGH Institute of Health Professions in Boston in 2007. Lana\'s vast post graduate education includes McKenzie courses in the diagnosis and treatment of spine conditions, numerous manual therapy courses in soft tissue and joint mobilization, ergonomics and functional orthopedic courses, kinesiotaping, as well as acute, chronic and post-surgical rehabilitation. Lana has extensive experience as a physical therapist where she has worked in a number of outpatient clinics throughout the Midwest and here in Westchester county treating individuals with a variety of complex orthopedic and neurological conditions. She joined the Physical Therapy Group of Westchester in 2005. Lana continues to expand her knowledge with ongoing continuing education courses and she integrates new evidence-based techniques in her approach to treatment. She strongly believes in combining hands-on manual therapy and targeted exercises with patient education to allow her patients to maximize their recovery.',
    quote: 'My aim is to connect with every patient in a real and authentic way',
    image: doctorGeneric,
  },
  {
    name: 'Karen Morrissey',
    role: 'Physical Therapist',
    degrees: 'MS, PT',
    description: ' Karen graduated from St. Thomas Aquinas College, Magna Cum Laude with a Bachelor of Science degree in Marketing in 1995. After a brief career in Advertising, she realized that she wanted a career that would allow her to focus on helping others. In the year 2000, she reached her goal and graduated with her Masters degree in Physical Therapy from New York Medical College in Valhalla. The first 13 years of her career were spent working in outpatient orthopedics here in Westchester county, where she gained vast experience treating a variety of post surgical and sports-related injuries. In 2013, a strong interest in the aging population led her to spend time working in Assisted Living Facilities in both New York and New Jersey. During this time, Karen enjoyed providing individualized, function based rehabilitation for a variety of gait, balance, orthopedic and neurologic conditions affecting the older population. Karen joined the team at Physical Therapy Group of Westchester in 2015. She has since been busy taking continuing education classes concerning vestibular issues, fall prevention and exercise for the elderly. She is planning to pursue her certification in Vestibular Rehabilitation. She is at home in Rockland County, where she was born and raised. During her free time, Karen enjoys spending time with her husband and her three sons.',
    quote: 'My aim is to connect with every patient in a real and authentic way',
    image: doctorGeneric,
  },
  {
    name: 'Jeanette Bartoline',
    role: 'Physical Therapist',
    degrees: 'PT',
    description: 'Jeanette graduated with honors from Stony Brook University in 1997 with a degree in Physical Therapy. She started her career in Westchester County, and has worked in hospital, outpatient, and skilled nursing facility settings. Jeanette\'s clinical experience includes: hospital acute care and post-operative orthopedics, outpatient orthopedic and neurological rehabilitation, and geriatric rehabilitation. She has extensive experience working with patients who have undergone total joint replacements. Jeanette also has a special interest in working with patients who have osteoporosis and postural dysfunction. She has continued to study advanced physical therapy techniques, including courses in manual therapy (Institute of Physical Art), osteoporosis (Sara Meeks) and geriatric rehabilitation (Carole Lewis). Through mobilization, soft tissue release techniques, patient education and individualized exercises programs, Jeanette is able to assist her patients improve their mobility and quality of life.',
    quote: 'My aim is to connect with every patient in a real and authentic way',
    image: doctorGeneric,
  },
  {
    name: 'Jennifer Robbins',
    role: 'Physical Therapist',
    degrees: 'MPT',
    description: 'Jennifer Robbins, MPT graduated from the University of Miami with a Bachelor\'s degree in Biology and Exercise Science, and completed her Master\'s degree in Physical Therapy from Nova Southeastern University in 2001. She has extensive experience treating adult and adolescent individuals with a variety of orthopedic conditions in both acute inpatient and outpatient departments, as well as providing services to individuals in need of geriatric rehabilitation and sports physical therapy. She has been certified for Cancer Rehabilitation in 2013. Since 2008, a special interest in disorders affecting vestibular function began by obtaining advanced training at Emory University and the University of Pittsburgh. She has completed certifications from the America Institute of Balance 2013 and IMPACT 2017, where she is skilled in using Vestibular Rehabilitation Therapy (VRT) to address balance, dizziness and overall fitness in creating patient-centered therapy programs for improvement of vestibularocular control, better postural strategies and increased levels of motor control for movement. Training also included treatments for concussion and cervical spine. In addition, Jennifer is a member of the American Physical Therapy Association Vestibular Special Interest Group and the Vestibular Disorders Association.',
    quote: 'My aim is to connect with every patient in a real and authentic way',
    image: doctorGeneric,
  },
];


const Staff = () => (
  <Container fluid>
    <HeaderBanner
      className="banner-background-bannerPrimary flex align-items-center justify-content-center"
      content='Staff'
      subheader='Meet our amazing team of caring and experienced professionals'
    />
    <BiographyBanner
      content={bioContent}
    />
  </Container>
);


export default Staff;
