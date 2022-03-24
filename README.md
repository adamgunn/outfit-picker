# Usage
Fill each folder in `public` with their respective images, cropped with backgrounds removed. Name each of the images `0.png`, `1.png`, etc. for however many images there are. Then, in `src/IMAGE_COUNTS.js`, modify the number of each image to match how many are in each directory. For example if we have tops labeled `0.png` through `12.png`, we would have `tops: 13` in `IMAGE_COUNTS`.

To run, do `npm i` then `npm start`. You should see the application open on http://localhost:3000 on your browser. Enjoy!