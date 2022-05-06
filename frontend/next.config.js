/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    URL : "http://localhost:5000/users/",
  }
}

module.exports = nextConfig
