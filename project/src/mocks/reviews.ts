import {Reviews} from '../types/reviews';

export const reviews: Reviews[] = [
  {
    id: 1,
    user: {
      id: 14,
      name: 'Corey',
    },
    rating: 1.6,
    comment: 'I personally found this movie to be boring. Definitely one of the most boring movies I\'ve ever seen.',
    date: '2022-01-22T15:13:26.388Z',
  },
  {
    id: 2,
    user: {
      id: 15,
      name: 'Kendall',
    },
    rating: 9.6,
    comment: 'This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.',
    date: '2022-02-28T21:48:13.678Z',
  },
  {
    id: 3,
    user: {
      id: 17,
      name: 'Kendall',
    },
    rating: 2.8,
    comment: 'This movie is just plain bad.',
    date: '2022-03-28T21:48:13.678Z',
  },
];
