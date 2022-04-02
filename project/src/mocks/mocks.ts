import { Film } from '../types/film';
import {name, internet, datatype, image, vehicle, lorem, music} from 'faker';
import { Reviews } from '../types/reviews';


export const makeFakeFilm = (): Film => ({
  id: datatype.number(),
  name: name.title(),
  posterImage: internet.avatar(),
  previewImage: image.image(),
  backgroundImage: image.image(),
  backgroundColor: vehicle.color(),
  videoLink: internet.avatar(),
  previewVideoLink: internet.avatar(),
  description: lorem.text(),
  rating: datatype.number(),
  scoresCount: datatype.number(),
  director: name.findName(),
  starring: new Array(3).fill(null).map(() => (name.findName())),
  runTime: datatype.number(),
  genre: music.genre(),
  released: datatype.number(),
  isFavorite: datatype.boolean(),
} as Film);

export const makeFakeReviews = (): Reviews => ({
  comment: lorem.text(),
  date: datatype.string(),
  id: datatype.number(),
  rating: datatype.number(),
  user: {
    id: datatype.number(),
    name: name.findName(),
  },
} as Reviews);

export const makeFakeAvatarUrl = (): string => (internet.avatar() as string);
