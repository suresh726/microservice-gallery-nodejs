import { createProxyMiddleware } from 'http-proxy-middleware';
import { v4 as uuidv4 } from 'uuid';

const onProxyReq = function (proxyReq: any, req: any, res: any) {
  proxyReq.setHeader('X-Correlation-ID', uuidv4());
}

export const categoryServiceAdminProxy = createProxyMiddleware({
  target: `http://category-service:${process.env.CATEGORY_SERVICE_PORT}`,
  pathRewrite: {
    '^/api/admin' : '/api'
  },
  changeOrigin: true,
  onProxyReq: onProxyReq,
  timeout: 1000
});