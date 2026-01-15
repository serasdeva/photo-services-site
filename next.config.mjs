/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',          // оставь пустым
        pathname: '/**',   // разрешает любые пути на этом домене
      },
      // Если потом добавишь другие источники (например Supabase Storage), добавь сюда же
      // {
      //   protocol: 'https',
      //   hostname: 'your-supabase-project.supabase.co',
      //   pathname: '/storage/v1/object/public/**',
      // },
    ],
  },
  // Можно добавить другие настройки, если нужно
};

export default nextConfig;