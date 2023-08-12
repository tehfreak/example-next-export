/** @type {import('next').NextConfig} */
module.exports = {
    output: "export",
    basePath: process.env.BASE_URL,
    env: {
        BASE_URL: process.env.BASE_URL,
    }
}
