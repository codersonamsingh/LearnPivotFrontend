import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
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
    img: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg',
    title: 'Developer',
  },
  {
    img: 'https://www.shutterstock.com/image-photo/close-back-rear-behind-photo-260nw-1451794208.jpg',
    title: 'Coder',
  },
  {
    img: 'https://media.foundit.in/career-advice/wp-content/uploads/2021/10/Coding-and-programming-interview-questions.jpg',
    title: 'Camera',
  },
  {
    img: 'https://www.shutterstock.com/image-photo/digital-technology-software-development-concept-600nw-2111828198.jpg',
    title: 'Started',
  },
  {
    img: 'https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg',
    title: 'code',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJINtcFt6m7vpw5SWhcDTOwZShGd5HzGHfaQ&usqp=CAU',
    title: 'Women in coding',
  },
  {
    img: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202012/MIT-Coding-Brain-01-press_0.jpg',
    title: 'Brain Coding',
  },
  {
    img: 'https://iabac.org/blog/uploads/images/202305/image_870x_646f3831c8e4a.jpg',
    title: 'is code required',
  },
  {
    img: 'https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/Coding_Blog_Header_1500x750.jpg.optimal.jpg',
    title: 'At home',
  },
  {
    img: 'https://www.codingal.com/resources/wp-content/uploads/2023/12/Coding-in-Everyday-Life.png',
    title: 'Coding at Everyday Life',
  },
  {
    img: 'https://static.tnn.in/thumb/msid-107313198,thumbsize-87742,width-1280,height-720,resizemode-75/107313198.jpg',
    title: 'Code at python',
  },
  {
    img: 'https://us.123rf.com/450wm/robird/robird2209/robird220900116/192887415-digital-technology-software-development-iot-concept-woman-programmer-software-developer-working-on.jpg',
    title: 'Bike',
  },
];