import fs from 'fs';

const src = 'lib/ScrollSpy.d.ts';
const dest = 'dist/react-scrollspy.d.ts';

fs.copyFileSync(src, dest);
console.log('Copied:', src, '→', dest);
