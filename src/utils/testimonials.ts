import { v4 as uuidv4 } from 'uuid';
import testimonialOne from '../../src/assets/images/testimonials/testimonials-1.jpg';
import testimonialTwo from '../../src/assets/images/testimonials/testimonials-2.jpg';
import testimonialThree from '../../src/assets/images/testimonials/testimonials-3.jpg';
import testimonialFour from '../../src/assets/images/testimonials/testimonials-4.jpg';
import testimonialFive from '../../src/assets/images/testimonials/testimonials-5.jpg';
import testimonialSix from '../../src/assets/images/testimonials/testimonials-6.jpg';

export interface ITestimonial {
  id: string;
  name: string;
  occupation: string;
  comment: string;
  src: string;
}

export const testimonials: ITestimonial[] = [
  {
    id: uuidv4(),
    name: 'Saul Goodman',
    occupation: 'COO & Founder',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt mi bibendum mi semper, vel ornare sem malesuada. Pellentesque volutpat quam eu ex imperdiet mattis.',
    src: testimonialOne,
  },
  {
    id: uuidv4(),
    name: 'Sara Wilsson',
    occupation: 'Designer',
    comment:
      'Morbi dolor sapien, convallis eu porta eu, egestas interdum lacus. Etiam eget pellentesque nunc. Integer eget vestibulum massa. Nulla finibus quam quis bibendum lacinia.',
    src: testimonialTwo,
  },
  {
    id: uuidv4(),
    name: 'Jena Karlis',
    occupation: 'Programmer',
    comment:
      'Sed et tincidunt sapien, aliquet accumsan neque. Duis eget lacinia augue. Ut et ultrices leo. Sed iaculis massa vitae molestie vulputate. Integer sed diam non metus dictum tristique.',
    src: testimonialThree,
  },
  {
    id: uuidv4(),
    name: 'Matt Brandon',
    occupation: 'Freelancer',
    comment:
      'Vivamus eu neque sed leo bibendum sagittis nec ut tortor. In porta, magna tincidunt laoreet tincidunt, enim sapien semper neque, ac malesuada mauris metus id eros.',
    src: testimonialFour,
  },
  {
    id: uuidv4(),
    name: 'John Larsson',
    occupation: 'Store Owner',
    comment:
      'Duis fermentum enim posuere tristique faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam viverra placerat vestibulum.',
    src: testimonialFive,
  },
  {
    id: uuidv4(),
    name: 'Patrick Jane',
    occupation: 'Entrepreneur',
    comment:
      'Fusce lobortis elit eget tellus dignissim hendrerit. In laoreet sollicitudin pellentesque. Curabitur nisi purus, tincidunt eu dignissim ac, congue mattis sapien. Pellentesque condimentum.',
    src: testimonialSix,
  },
];
