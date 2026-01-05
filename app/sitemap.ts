import { MetadataRoute } from 'next';
import treatyDataRaw from '@/data/treaties.json';

interface Treaty {
  pair: string;
}

const treatyData = (treatyDataRaw as unknown) as Treaty[];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://globaltax.lifecalc.app';

  // Otomatis menggenerasi link untuk seluruh data di JSON
  const treatyUrls = treatyData.map((t) => {
    const parts = t.pair.split(/[-–—]/);
    const profession = parts[0].trim().toLowerCase().replace(/\s+/g, '-');
    const painPoint = parts[1].trim().toLowerCase().replace(/\s+/g, '-');
    
    return {
      url: `${baseUrl}/tax-treaty/tax-treaty-${profession}-to-${painPoint}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/encyclopedia`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...treatyUrls,
  ];
}