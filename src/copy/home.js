import {
  practiceOutsideEdited,
  hengAndFamilyEdited,
  backMassage,
} from '../assets/images';
import {
  gym,
  gymOffice,
  waitingRoom
} from '../assets/images/office';


const headerContent = {
  title: '',
  description: 'We take pride in our ability to provide one-on-one exceptional care by the most qualified licensed physical therapists through your entire course of treatment, without any aides, assistants or interns.',
}

const bannerContent = [
  {
    title: 'Our Location',
    description: 'We are conveniently located in the Rye Ridge Shopping Center.  The closest entrance to our office is in front of building #10, next to Coco Nails & Spa.  You can take the elevator or the stairs to our suite on the 2nd floor.  We have private treatment rooms and a shared gym area with all the necessary exercise equipment for rehabilitation.',
    image: practiceOutsideEdited,
  },
  {
    title: 'Our Story',
    description: 'For the past 33 years, we have successfully treated infants through geriatrics with a variety of conditions.  Our physical therapists have the most specialized training to help you get back in motion and they are trusted healthcare professionals with extensive training in diagnosing and treating conditions that limit the body\'s ability to move and function in daily life.  We also have experienced front desk staff who can help you too.',
    image: gymOffice,
  },
  {
    title: 'Our Purpose',
    description: 'We promise to help you improve your mobility and your quality of life, as an alternative or as an adjunct to surgery and pain medication.  We will offer the highest quality of care to each individual and we will treat you with the respect you deserve.  Our experience front desk will help you to navigate your insurance benefits by answering any questions or concerns with the most personable and professional service.',
    image: backMassage,
  },
];

export {
  bannerContent,
  headerContent
};

export default bannerContent;
