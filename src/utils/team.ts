import { v4 as uuidv4 } from 'uuid';
import teamOne from '../../src/assets/images/team/team-1.jpg';
import teamTwo from '../../src/assets/images/team/team-2.jpg';
import teamThree from '../../src/assets/images/team/team-3.jpg';
import teamFour from '../../src/assets/images/team/team-4.jpg';

interface ITeam {
  id: string;
  name: string;
  occupation: string;
  src: string;
}

export const team: ITeam[] = [
  {
    id: uuidv4(),
    name: 'Walter White',
    occupation: 'Chief Executive Officer',
    src: teamOne,
  },
  {
    id: uuidv4(),
    name: 'Sarah Jhonson',
    occupation: 'Product Manager',
    src: teamTwo,
  },
  {
    id: uuidv4(),
    name: 'William Anderson',
    occupation: 'CTO',
    src: teamThree,
  },
  {
    id: uuidv4(),
    name: 'Amanda Jepson',
    occupation: 'Accountant',
    src: teamFour,
  },
];
