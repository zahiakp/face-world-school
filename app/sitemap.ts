import { MetadataRoute } from 'next';

// This function generates the sitemap.xml file at build time.
export default function sitemap(): MetadataRoute.Sitemap {
  // Define the base URL of your primary domain.
  const baseUrl = 'https://www.faceschool.in';

  // Array of your static pages.
  // Add any other static pages your site has to this list.
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
    },
    {
      url: `${baseUrl}/corepillars`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/facefoundation`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/impact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/leadership`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/ourstory`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/programoverview`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/vision-mission`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/whatprovide`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
    },
  ];

  // --- Example for Dynamic Routes ---
  // If you have a blog, news section, or course pages, you would fetch
  // that data from your CMS or database here and map over it.

  // Placeholder: Replace this with your actual data fetching logic.
//   const dynamicPosts = [
//     { slug: 'our-vision-for-future-leaders', updatedAt: '2024-05-20T00:00:00.000Z' },
//     { slug: 'student-success-story-jane-doe', updatedAt: '2024-05-15T00:00:00.000Z' },
//   ];

//   const blogRoutes = dynamicPosts.map((post) => ({
//     url: `${baseUrl}/blog/${post.slug}`,
//     lastModified: new Date(post.updatedAt),
//     changeFrequency: 'weekly' as const,
//   }));


  // Combine static and dynamic routes and return them.
  return staticRoutes;
}
