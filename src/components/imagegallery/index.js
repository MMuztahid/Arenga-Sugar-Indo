import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Foto1 from "./1.jpg";
import Foto2 from "./2.jpg";
import Foto3 from "./3.jpg";
import Foto4 from "./4.png";
import Foto5 from "./5.png";
import Foto6 from "./6.png";
import Foto7 from "./7.png";
import Foto8 from "./8.png";
import Foto9 from "./9.jpg";
import Foto10 from "./10.jpeg";
import Foto11 from "./11.jpeg";
import Foto12 from "./12.jpeg";

export default function ImageGallery() {
  return (
    <ImageList sx={{ width: '900px', height:'450px', justifyContent: 'center' }} cols={3} rowHeight={295}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img:  Foto1,
    title: 'Breakfast',
  },
  {
    img: Foto2,
    title: 'Burger',
  },
  {
    img: Foto3,
    title: 'Camera',
  },
  {
    img: Foto4,
    title: 'Coffee',
  },
  {
    img: Foto5,
    title: 'Hats',
  },
  {
    img: Foto6,
    title: 'Honey',
  },
  {
    img: Foto7,
    title: 'Basketball',
  },
  {
    img: Foto8,
    title: 'Fern',
  },
  {
    img: Foto9,
    title: 'Mushrooms',
  },
  {
    img: Foto10,
    title: 'Tomato basil',
  },
  {
    img: Foto11,
    title: 'Sea star',
  },
  {
    img: Foto12,
    title: 'Bike',
  },
];
