import { useEffect } from 'react';
import Router from 'next/router';

import useRequest from '../../../hooks/use-request';

const Signout = () => {
  const { doRequest } = useRequest({
    url: 'http://localhost:3001/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/admin/users/signin')
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out....</div>;
}

export default Signout;
