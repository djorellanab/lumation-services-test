module.exports = {
    protocol: process.env.SITE_PROTOCOL || 'http',
    domain: process.env.SITE_DOMAIN || 'localhost',
    port: process.env.SITE_PORT || '3003',
    name: process.env.SITE_NAME || 'API'
};