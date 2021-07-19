import 'bootstrap/dist/css/bootstrap.css';

import SideBar from '../components/sidebar';

const LandingPage = ({ pageProps, categories }) => {
  return (
      <div className="container auth-form">
        <div className="row">
          <div className="col-md-2">
            <SideBar categories={categories} />
          </div>
        </div>
      </div>
  );
};
LandingPage.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/categories');
  console.log(data);
  return { categories: data};
}

export default LandingPage;