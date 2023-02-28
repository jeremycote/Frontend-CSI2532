// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Hotel } from '@/src/types/hotel';
import type { NextApiRequest, NextApiResponse } from 'next';

const hotels: Hotel[] = [
  {
    name: 'American Hotel',
    id: 0,
    stars: 5,
    address: '',
    nRooms: 64,
    phonenumbers: ['613 123 4567'],
    emails: ['email@example.com'],
    chainId: 0,
    photos: [
      'https://source.unsplash.com/random/?hotel,sunny',
      'https://source.unsplash.com/random/?hotel,warm',
      'https://source.unsplash.com/random/?hotel,beach',
    ],

    minPrice: 1000,
  },
  {
    name: 'Canadian Hotel',
    id: 1,
    stars: 5,
    address: '',
    nRooms: 64,
    phonenumbers: ['613 123 4567'],
    emails: ['email@example.com'],
    chainId: 0,
    photos: [
      'https://source.unsplash.com/random/?hotel,winter',
      'https://source.unsplash.com/random/?hotel,cold',
      'https://source.unsplash.com/random/?hotel,dark',
    ],
    minPrice: 1000,
  },
  {
    name: 'French Hotel',
    id: 2,
    stars: 5,
    address: '',
    nRooms: 64,
    phonenumbers: ['613 123 4567'],
    emails: ['email@example.com'],
    chainId: 0,
    photos: [
      'https://source.unsplash.com/random/?hotel,green',
      'https://source.unsplash.com/random/?hotel,trees',
      'https://source.unsplash.com/random/?hotel,plants',
    ],
    minPrice: 1000,
  },
  {
    name: 'English Hotel',
    id: 2,
    stars: 5,
    address: '',
    nRooms: 64,
    phonenumbers: ['613 123 4567'],
    emails: ['email@example.com'],
    chainId: 0,
    photos: [
      'https://source.unsplash.com/random/?hotel,british',
      'https://source.unsplash.com/random/?hotel,tea',
      'https://source.unsplash.com/random/?hotel,english',
    ],
    minPrice: 1000,
  },
  {
    name: 'Spanish Hotel',
    id: 2,
    stars: 5,
    address: '',
    nRooms: 64,
    phonenumbers: ['613 123 4567'],
    emails: ['email@example.com'],
    chainId: 0,
    photos: [
      'https://source.unsplash.com/random/?hotel,coastal',
      'https://source.unsplash.com/random/?hotel,spanish',
    ],
    minPrice: 1000,
  },
  {
    name: 'Belgian Hotel',
    id: 2,
    stars: 5,
    address: '',
    nRooms: 64,
    phonenumbers: ['613 123 4567'],
    emails: ['email@example.com'],
    chainId: 0,
    photos: [
      'https://source.unsplash.com/random/?hotel,waffle',
      'https://source.unsplash.com/random/?hotel,belgian',
    ],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hotel[]>,
) {
  res.status(200).json(hotels.concat(hotels).concat(hotels));
}
