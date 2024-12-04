import React from 'react';
import NotFound from './not-found'; 
import { isAuthenticated } from '../../util/auth';

const AuthenticatedRoute = ({ element, ...rest }) => {

  if (!isAuthenticated()) {
    return <NotFound/>;
  }

  return element;
};

export default AuthenticatedRoute;