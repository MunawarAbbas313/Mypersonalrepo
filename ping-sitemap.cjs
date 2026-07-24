// ping-sitemap.js
// This script pings Google and Bing to inform them of your new sitemap.
// This is the fastest way to get your pages indexed without using Google Search Console directly.

const https = require('https');

const sitemapUrl = 'https://alarbabtravels.pk/sitemap.xml';

const searchEngines = [
  { name: 'Google', url: `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
  { name: 'Bing', url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` }
];

console.log('🌍 Pinging search engines to index your sitemap...');
console.log(`Sitemap: ${sitemapUrl}\n`);

searchEngines.forEach((engine) => {
  https.get(engine.url, (res) => {
    if (res.statusCode === 200) {
      console.log(`✅ Successfully pinged ${engine.name}! They will crawl your site soon.`);
    } else {
      console.log(`❌ Failed to ping ${engine.name} (Status: ${res.statusCode}).`);
    }
  }).on('error', (e) => {
    console.error(`❌ Error pinging ${engine.name}:`, e.message);
  });
});

console.log('\nNote: For even faster indexing, submit this sitemap directly in your Google Search Console account.');
