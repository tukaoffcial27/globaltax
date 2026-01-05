import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Mencegah Google mengindeks halaman teknis agar AdSense fokus pada konten pSEO
      disallow: ['/auth/', '/api/'],
    },
    // Menghubungkan secara spesifik ke sitemap domain lifecalc.app Anda 
    sitemap: 'https://globaltax.lifecalc.app/sitemap.xml',
  };
}