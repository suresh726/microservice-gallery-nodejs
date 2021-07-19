import 'bootstrap/dist/css/bootstrap.css';
import '../css/styles.css'
import buildClient from '../api/build-client';

const AppComponent = ({Component, pageProps, currentUser}) => {
  return (
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
  );
};

AppComponent.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');
  console.log(data);
  // fetching page props
  let pageProps = {};
  
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data);
  }
  return {
    pageProps,
    ...data
  };
}
export default AppComponent;