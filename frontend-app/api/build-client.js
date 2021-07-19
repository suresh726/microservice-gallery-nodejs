import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    
    // we are on server
    console.log('server');
    console.log(req.url);
    return axios.create({
      // baseURL: `${process.env.BACKEND_URL}:3001`,
      baseURL: 'localhost:30001',
      headers: req.headers
    });
  } else {
    // we are on browser
    console.log('browser');
    return axios.create({
      baseURL: 'localhost:30001',
      // baseURL: `${process.env.BACKEND_URL}:3001`,
    }); 
  }
}

export default buildClient;