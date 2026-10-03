const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

files.forEach(f => {
    const fullPath = path.join(__dirname, f);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // We replace `.svc-hero{padding:4rem 0 0;}` with `.svc-hero{padding:7.5rem 0 0;}`
    if (content.includes('.svc-hero{padding:4rem 0 0;}')) {
        content = content.replace(/\.svc-hero\{padding:4rem 0 0;\}/g, '.svc-hero{padding:7.5rem 0 0;}');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${f}`);
    }
});
