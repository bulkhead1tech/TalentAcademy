/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:"dnsqp2kag",
      NEXT_PUBLIC_CLOUDINARY_PRESET_NAME:"ml_default"
    },
    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      if (config.cache && !dev) {
        config.cache = Object.freeze({
          type: 'memory',
        })
      }
      // Important: return the modified config
      return config
    },
  }
   
  export default nextConfig