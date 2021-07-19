import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../../hooks/use-request';
import Header from '../../../components/header';

const CategoryCreate =  () => {
  const [title, setTitle] = useState('');
  
  const { doRequest, errors } = useRequest({
    url: 'http://localhost:3001/api/admin/categories',
    method: 'post',
    body: {
      title
    },
    onSuccess: () => Router.push('/admin')
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    doRequest();
  }

  return (
    <div className="container">
      <Header />
       <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={onSubmit}>
              <h1>New Category</h1>
              {errors}
              <div className="form-group">
                <label>Title</label>
                <input 
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="form-control" 
                />
              </div>
              <button className="btn btn-primary submit-btn">Save</button>
            </form>
          </div>
       </div>
    </div>
  );
}

export default CategoryCreate;