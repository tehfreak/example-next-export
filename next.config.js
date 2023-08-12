/** @type {import('next').NextConfig} */
module.exports = {
    output: "export",
    assetPrefix: process.env.NODE_ENV === "production" ? 'https://tehfreak.github.io/example-next-export/' : '',
}
