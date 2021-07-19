import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Link from 'next/link';

import Header from '../../components/header';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';

const AdminPage = ({Component, categories}) => {
  
  const onSubmit = async (event) => {
    event.preventDefault();
    doRequest({withCredentials: true});
  }

  async function deleteCategory(id) {
    await axios.delete(`http://localhost:3001/api/admin/categories/${id}`);
    Router.push('/admin');
  }

  return (
      <>
        <Header />
        <span className="image-heading">Category CRUD</span>
        <Link href={`/admin/categories/new`}>
          <a className="back-gallery-link">Add New</a>
        </Link><br/><br/>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { categories && categories.map(category => {
              return (
                <tr key={category.id}>
                  <td>{category.title}</td>
                  <td><button onClick={() => deleteCategory(category.id)}>Delete</button></td>
                </tr>
              );
            }) }
          </tbody>

        </table>
      </>
  );
};
AdminPage.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/categories');
  console.log(data);
  return { 
    categories: data,
  };
}
export default AdminPage;