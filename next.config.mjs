const isDev = process.argv.includes("dev")
const isBuild = process.argv.includes("build")

if (isDev || isBuild) {
	const { build } = await import("velite")
	await build({ watch: isDev, clean: !isDev })
}

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default nextConfig
