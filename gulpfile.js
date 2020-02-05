var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');

var myData = require("./project/app/data");

var JsonData;

// myData.then(res => {
//     JsonData = res;

//     runTask();
//     console.log(JsonData)
//   });


async function runTask(){
  let JsonData = await myData;
  console.log(JsonData);
  
  setTimeout(() => {
    return gulp.task('nunjucks', function() {
      // Gets .html and .nunjucks files in pages
      return gulp.src('./project/app/pages/index.njk')
      // Renders template with nunjucks
      .pipe(data(function() {
        console.log("here");
         return {
          "images": [{
            "src": "",
            "alt": "Image one alt text"
          }]
        };
      }))
      .pipe(nunjucksRender({
          path: ['./project/app/templates/']
        }))
      // output files in app folder
      .pipe(gulp.dest('.project/app'))
    });
  }, 10000);
}


exports.nunjucks = runTask;
// async function runTask(){
//   JsonData = await myData;
//   console.log(JsonData);

  

// }

// function runTask(){
//   gulp.series('nunjucks');
// }

// setTimeout(() => {
  
// }, 10000)

// runTask();



// gulp.task('nunjucks', function() {
//   return gulp.src('./project/app/pages/index.njk')
//   // Renders template with nunjucks
//   .pipe(data(function() {
//     // console.log("here");
//      return JsonData;
//   }))
//   .pipe(nunjucksRender({
//       path: ['./project/app/templates/']
//     }))
//   // output files in app folder
//   .pipe(gulp.dest('.project/app'))  
// });