import { createProxyMiddleware } from 'http-proxy-middleware';
import { v4 as uuidv4 } from 'uuid';

const onProxyReq = function (proxyReq: any, req: any, res: any) {
  proxyReq.setHeader('X-Correlation-ID', uuidv4());
}

const onProxyRes = function (proxyRes: any, req: any, res: any) {
  proxyRes.headers['Access-Control-Allow-Credentials'] =  true;
  delete proxyRes.headers['x-powered-by'];
}

export const userServiceProxy = createProxyMiddleware({
  target: `http://user-service:${process.env.USER_SERVICE_PORT}`,
  changeOrigin: true,
  onProxyReq,
  onProxyRes,
  timeout: 1000,
  cookieDomainRewrite: {
    '*': "localhost"
  }
});