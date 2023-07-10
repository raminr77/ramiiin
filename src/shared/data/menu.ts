import { ROUTES } from '../routes';

export const MENU_DATA = [
  {
    id: 1,
    title: 'خانه',
    url: ROUTES.HOME,
    icon: './images/home.svg'
  },
  {
    id: 2,
    title: 'نوشته ها',
    url: ROUTES.POSTS,
    icon: './images/quote-down.svg'
  },
  {
    id: 3,
    title: 'پادکست',
    url: ROUTES.PODCASTS,
    icon: './images/volume-high.svg'
  },
  {
    id: 4,
    title: 'عکس ها',
    url: ROUTES.PHOTOS,
    icon: './images/camera.svg'
  },
  {
    id: 5,
    title: 'درباره ما',
    url: ROUTES.ABOUT_US,
    icon: './images/user.svg'
  }
];
