import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MENU_DATA } from '../data/menu';

export const usePageName = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState({
    id: 0,
    url: '/',
    title: 'پیدا نشد که ...'
  });

  useEffect(() => {
    const currentUrl = router.asPath;

    const matchingRoute = MENU_DATA.find(({ url }) => {
      const routeUrl = url === '/' ? url : url.substring(0, url.length - 1);
      return routeUrl === currentUrl;
    });

    if (matchingRoute) {
      setCurrentPage(matchingRoute);
    }
  }, [router.asPath]);

  return currentPage;
};
