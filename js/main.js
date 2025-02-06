import { utilsImportTest, getYYYY } from './utils.js';

const start = () => {
  console.log("JS is working");
  utilsImportTest();

  // replace copyright notice
  console.log("replacing year in copyright notice");
  document.getElementById("replacable-year").innerHTML = getYYYY();
};


window.addEventListener('DOMContentLoaded', start);

