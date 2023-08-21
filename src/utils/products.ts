import app1 from '../assets/images/products/portfolio-1.jpg';
import app2 from '../assets/images/products/portfolio-2.jpg';
import app3 from '../assets/images/products/portfolio-3.jpg';
import app4 from '../assets/images/products/portfolio-4.jpg';
import app5 from '../assets/images/products/portfolio-5.jpg';
import app6 from '../assets/images/products/portfolio-6.jpg';
import app7 from '../assets/images/products/portfolio-7.jpg';
import app8 from '../assets/images/products/portfolio-8.jpg';
import app9 from '../assets/images/products/portfolio-9.jpg';

export interface IProduct {
  title: string;
  src: string;
  categories: string[];
}

export const products: IProduct[] = [
  {
    title: 'app-1',
    src: app1,
    categories: ['all', 'app'],
  },
  {
    title: 'web-3',
    src: app2,
    categories: ['all', 'web'],
  },
  {
    title: 'app-2',
    src: app3,
    categories: ['all', 'app'],
  },
  {
    title: 'card-2',
    src: app4,
    categories: ['all', 'card'],
  },
  {
    title: 'web-2',
    src: app5,
    categories: ['all', 'web'],
  },
  {
    title: 'app-3',
    src: app6,
    categories: ['all', 'app'],
  },
  {
    title: 'card-1',
    src: app7,
    categories: ['all', 'card'],
  },
  {
    title: 'card-3',
    src: app8,
    categories: ['all', 'card'],
  },
  {
    title: 'web-4',
    src: app9,
    categories: ['all', 'web'],
  },
];
