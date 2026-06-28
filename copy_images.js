const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'bday_pics');
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));

const targetNames = [
  'story-1.jpg',
  'story-2.jpg',
  'story-3.jpg',
  'memory-1.jpg',
  'memory-2.jpg',
  'gallery-1.jpg',
  'gallery-2.jpg',
  'gallery-3.jpg',
  'gallery-4.jpg',
  'gallery-5.jpg',
  'gallery-6.jpg',
  'gallery-7.jpg',
  'gallery-8.jpg',
  'gallery-9.jpg',
  'gallery-10.jpg',
];

files.forEach((file, index) => {
  if (index < targetNames.length) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, targetNames[index]));
  }
});
console.log('Images copied and renamed successfully!');
