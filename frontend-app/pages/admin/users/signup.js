import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../../hooks/use-request';

const Signup =  () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { doRequest, errors } = useRequest({
    url: 'http://localhost:3001/api/users/signup',
    method: 'post',
    body: {
      fullname, email, password
    },
    onSuccess: () => Router.push('/admin')
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    doRequest({withCredentials: true});
  }

  return (
    <div className="container auth-form">
       <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={onSubmit}>
              <h1>Signup</h1>
              {errors}
              <div className="form-group">
                <label>Fullname</label>
                <input 
                  value={fullname}
                  onChange={e => setFullname(e.target.value)}
                  className="form-control" 
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="form-control" 
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  className="form-control" 
                />
              </div>
              <button className="btn btn-primary submit-btn">Sign Up</button>
            </form>
          </div>
       </div>
    </div>
  );
}

export default Signup;