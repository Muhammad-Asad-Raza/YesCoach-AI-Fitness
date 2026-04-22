const fs = require('fs');
const files = [
  'src/components/Layout/Layout.jsx',
  'src/pages/HelpCenter.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\\\$/g, '$');
  fs.writeFileSync(file, content);
});
console.log('Fixed escape sequences');
