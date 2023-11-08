/** @type {import('next').NextConfig} */
const nextConfig = {
   images: { domains: ["links.papareact.com", "a0.muscache.com"] },
   env: {
      mapbox_key:
         "pk.eyJ1Ijoic2w5OTk5IiwiYSI6ImNsb3B5NDVheDBjam0ycG5xcGpoazUxeWwifQ.xm_DO8ARboyCWVPPjxZIFg",
   },
};

module.exports = nextConfig;
