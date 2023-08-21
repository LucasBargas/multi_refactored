import { v4 as uuidv4 } from 'uuid';

interface IPricing {
  id: string;
  plan: string;
  value: string;
  topics: Array<{
    topicId: string;
    topic: string;
    valid: boolean;
  }>;
}

export const pricing: IPricing[] = [
  {
    id: uuidv4(),
    plan: 'Free',
    value: '0',
    topics: [
      {
        topicId: uuidv4(),
        topic: 'Quam adipiscing vitae proin',
        valid: true,
      },
      {
        topicId: uuidv4(),
        topic: 'Nec feugiat nisl pretium',
        valid: true,
      },
      {
        topicId: uuidv4(),
        topic: 'Nulla at volutpat diam uteera',
        valid: true,
      },
      {
        topicId: uuidv4(),
        topic: 'Pharetra massa massa ultricies',
        valid: false,
      },
      {
        topicId: uuidv4(),
        topic: 'Massa ultricies mi quis hendrerit',
        valid: false,
      },
    ],
  },
  {
    id: uuidv4(),
    plan: 'Business',
    value: '29',
    topics: [
      {
        topicId: uuidv4(),
        topic: 'Quam adipiscing vitae proin',
        valid: true,
      },
      {
        topicId: uuidv4(),
        topic: 'Nec feugiat nisl pretium',
        valid: true,
      },
      {
        topicId: uuidv4(),
        topic: 'Nulla at volutpat diam uteera',
        valid: true,
      },
      {
        topicId: uuidv4(),
        topic: 'Pharetra massa massa ultricies',
        valid: true,
      },
      {
        topicId: uuidv4(),
        topic: 'Massa ultricies mi quis hendrerit',
        valid: false,
      },
    ],
  },
  {
    id: uuidv4(),
    plan: 'Developer',
    value: '49',
    topics: [
      {
        topicId: uuidv4(),
        topic: 'Quam adipiscing vitae proin',
        valid: true,
      },
      {
        topicId: uuidv4(),
        topic: 'Nec feugiat nisl pretium',
        valid: true,
      },
      {
        topicId: uuidv4(),
        topic: 'Nulla at volutpat diam uteera',
        valid: true,
      },
      {
        topicId: uuidv4(),
        topic: 'Pharetra massa massa ultricies',
        valid: true,
      },
      {
        topicId: uuidv4(),
        topic: 'Massa ultricies mi quis hendrerit',
        valid: true,
      },
    ],
  },
];
