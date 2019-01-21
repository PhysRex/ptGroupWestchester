import React from 'react';
import { Container } from 'semantic-ui-react'

import { HeadBanner, ContentBanner, DividedBanner, ServiceBanner } from '../templates';
import {
  practiceOutside,
  practiceAerialView,
  hengAndFamily,
} from '../../assets/images';

const bannerContent = [
  {
    title: 'Our Location',
    description: 'Deven Chopra was born in Mumbai and spent much of his life in Hong Kong, moving to Paris at the age of 18 to study fine art at the École des Beaux-Arts. His work is known for blurring the line between technology and art and has been selected for display at exhibitions in Paris, Shanghai, and New York.',
    image: practiceOutside,
  },
  {
    title: 'Our Story',
    description: 'We met in 2009, at a backpacker hostel in Amsterdam. We hit it off immediately, bonding over our love of Gauguin and jazz. We had a magical time together in France during Anya\'s first year at grad school, and we both knew it was time. We were engaged in March 2014, and now we\'re getting married!',
    image: hengAndFamily,
  },
  {
    title: 'Our Purpose',
    description: 'Anya Pillai grew up in the Bay Area, spending much of her childhood in Palo Alto and Cupertino. She studied at Harvard and worked in New York for two years before going to get her MBA at INSEAD in Fontainebleau and Singapore. Today, she works as an associate at Washburne Ventures in London.',
    image: practiceAerialView,
  },
];

const serviceContent = [ 
  {
    category: 'cat1',
    services: [
      "Cervical spine",
      "Frozen shoulder",
      "Sprains / strains",
      "Pre- and post operative rehabilitation",
      "ACL reconstruction",
      "Ankle tendonitis / repairs",
      "Tendonitis/Bursitis",
      "Plantar fascitis",
    ]
  },
  {
    category: 'cat2',
    services: [
      "Bunionectomy",
      "Tennis elbow",
      "Carpal tunnel syndrome",
      "Balance and gait disorders",
      "Neck pain",
      "Chronic Pain Syndrome",
      "Sports-related injuries",
    ]
  },
  {
    category: 'cat3',
    services: [
      "Fall prevention",
      "Myofascial pain syndromes",
      "TMJ dysfunction",
      "Brachial plexus injuries",
      "Sports-related injuries and sports-specific training and conditioning",
      "Neurological disorders including Multiple Sclerosis, Parkinson's and post CVA",
      "Pre and post natal dysfunction",
      "Post Mastectomy",
    ]
  },
  {
    category: 'cat4',
    services: [
      "Work-related injuries",
      "Arthritis",
      "Back pain",
      "Osteoporosis / Osteopenia",
      "Scoliosis",
      "Rotator cuff disorders / repairs",
      "Vestibular Rehabilitation Therapy",
      "Vertigo",
    ]
  },
]

const Home = (props) => (
  <Container fluid>
    <HeadBanner
      className="banner-image-dryBark flex align-items-center justify-content-center"
      content='Home'
      subheader='A brief description of the game, possibly rules'
    />
    <ServiceBanner
      content={serviceContent}
    />
    <ContentBanner
      className="font-xl text-align-center margin-top-bottom-70"
      content='Our goal is to improve and maintain your overall health and to empower you with an understanding of your condition and wellness plan.'
    />
    <DividedBanner content={bannerContent} />
  </Container>
);


export default Home;
