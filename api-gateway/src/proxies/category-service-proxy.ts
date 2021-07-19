import { createProxyMiddleware, Filter } from 'http-proxy-middleware';
import { v4 as uuidv4 } from 'uuid';

const filter = function(pathname: any, req: any) {
  return pathname.match('^/api/categories') && req.method === 'GET';
}

const onProxyReq = function (proxyReq: any, req: any, res: any) {
  proxyReq.setHeader('X-Correlation-ID', uuidv4());
}

export const categoryServiceProxy = createProxyMiddleware(filter, {
  target: `http://category-service:${process.env.CATEGORY_SERVICE_PORT}`,
  changeOrigin: true,
  onProxyReq: onProxyReq,
  timeout: 1000
});