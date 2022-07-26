import { searchRoute } from '@/utils/auto-router';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { rootRouter } from '.';

const AuthRouter = (props: any) => {
  const location = useLocation();
  const router = searchRoute(location.pathname, rootRouter);
  return props.children;
};

export default AuthRouter;
