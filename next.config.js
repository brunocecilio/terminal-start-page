const { version } = require("./package.json")

const withPWA = require("next-pwa")({
	dest: "public",
	disable: process.env.NODE_ENV === "development",
	register: true
})

const nextConfig = withPWA({
	reactStrictMode: true,
	output: "export",
	publicRuntimeConfig: {
		version
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**"
			}
		]
	},
	headers: () => [
		{
			source: "/:path*",
			headers: [
				{
					key: "Cache-Control",
					value: "no-store"
				}
			]
		}
	]
})

module.exports = nextConfig
