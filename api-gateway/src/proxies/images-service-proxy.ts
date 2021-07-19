import { createProxyMiddleware } from 'http-proxy-middleware';
import { v4 as uuidv4 } from 'uuid';

const onProxyReq = function (proxyReq: any, req: any, res: any) {
  proxyReq.setHeader('X-Correlation-ID', uuidv4());
}

export const imageServiceProxy = createProxyMiddleware({
  target: `http://image-service:${process.env.IMAGE_SERVICE_PORT}`,
  changeOrigin: true,
  onProxyReq: onProxyReq,
  timeout: 1000
});