/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
        return [
            process.env.MAINTENANCE_MODE === "1"
                ? { source: "/((?!maintenance).*)", destination: "/maintenance.html", permanent: false }
                : null,
        ].filter(Boolean);
    }
};

module.exports = nextConfig
