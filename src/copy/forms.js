import {
  authOxfordEmpire,
  personalHealthRecord,
  nyHipaaRelease,
  facialDisabilityIndex,
  tmjDisabilityIndex,
  vertigo,
  balance,
  neck,
  back,
  upperExtremity,
  lowerExtremity,
} from '../assets/documents/';


const listOfForms = [
  {
    name: 'Authorization Form for Oxford/Empire Plan',
    downloadLink: authOxfordEmpire,
    description: 'A required authorization form for your Oxford/Empire plan...'
  },
  {
    name: 'Personal Health Record',
    downloadLink: personalHealthRecord,
    description: 'Please provide your contact information and past medical history.'
  },
  {
    name: 'NY HIPAA Release Form',
    downloadLink: nyHipaaRelease,
    description: 'Please complete this form if you would like your medical records released to a third-party.'
  },
  {
    name: 'Facial Disability Index',
    downloadLink: facialDisabilityIndex,
    description: 'If you have a facial nerve disorder, please complete this form to assess your difficulties with daily living.'
  },
  {
    name: 'TMJ Disability Index',
    downloadLink: tmjDisabilityIndex,
    description: 'If you have a temporomandibular joint dysfunction (TMJ) disorder, please complete this form to assess your difficulties with daily living.'
  },
  {
    name: 'Vertigo',
    downloadLink: vertigo,
    description: 'If you are experiencing symptoms of vertigo like dizziness, please complete this form to assess your difficulties with daily living.'
  },
  {
    name: 'Balance / Gait',
    downloadLink: balance,
    description: 'If you are having trouble with balancing and your gait, please complete this form to assess your difficulties during these activities.'
  },
  {
    name: 'Neck',
    downloadLink: neck,
    description: 'If you experiencing pain in the general area of your neck, please complete this form to assess your difficulties with daily living.'
  },
  {
    name: 'Back',
    downloadLink: back,
    description: 'If any of your pain is located in the back area, please complete this form to assess your difficulties with daily living.'
  },
  {
    name: 'Upper Extremity',
    downloadLink: upperExtremity,
    description: 'If you are experiencing pain in your upper extremities, such as your arms, hands or shoulders, please complete this form to assess your difficulties with daily living.'
  },
  {
    name: 'Lower Extremity',
    downloadLink: lowerExtremity,
    description: 'If you are experiencing pain in your lower extremities, such as your hips and your legs, please complete this form to assess your difficulties with daily living.'
  }
];


export default listOfForms;
