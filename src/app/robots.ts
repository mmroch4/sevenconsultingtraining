import { MetadataRoute } from 'next';

const BASE_URL = process.env.BASE_URL as string;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: BASE_URL + '/sitemap.xml',
  };
}
