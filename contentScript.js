
// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'replaceImages') {
      // Select all the images on the page
      const images = document.getElementsByTagName('img');
  
      // Loop through the images and replace the src with a random dancing cats GIF
      for (let i = 0; i < images.length; i++) {
        const randomCatIndex = Math.floor(Math.random() * 10) + 1;
        const dancingCatsGIF = `dancing-cats${randomCatIndex}.gif`;
        images[i].src = chrome.extension.getURL(dancingCatsGIF);
      }
    }
  });

/*
//-------------
// a div for the area of the screen that we are using 
const divMain = document.createElement('div');

// center to position the div
divMain.style.position = 'fixed';
divMain.style.left = '0';
divMain.style.top = '0';

// bring the div to the front
divMain.style.zIndex = '9999';

// we want the div to cover the page (make transparent later)
divMain.style.width = '50%';
divMain.style.height = '99%';

// make it transparent green or grey
divMain.style.backgroundColor = 'rgba(0, 100, 0, 0.5)';

// add it to the body end
document.body.appendChild(divMain);

// add a class to the div so we can make other manual changes
divMain.classList.add('ourMainDiv');


// HOW WE ADD THINGS TO THE MAIN DIV - PUT EVERTHING ON IT :D 
/*
// add a dancing animal to the div
// file namecatDance1.gif
const image = document.createElement('img');
image.src = chrome.runtime.getURL('https://usagif.com/dancing-cats-gifs/');
image.style.width = '100px'; // Adjust the width as needed
image.style.height = '100px'; // Adjust the height as needed
image.style.position = 'absolute';
image.style.top = '10px'; // Adjust the top position as needed
image.style.left = '10px'; // Adjust the left position as needed

// Append the image to the div
divMain.appendChild(image);



// add a class to the div so we can make other manual changes
divMain.classList.add('ourMainDiv');










































// console.log("Hello")
























// have a document
  // have a action, when the persons clic on pop up 

// declare a body to select the body 

// event 
//invoke a function after google extention is click 
  // button attached to top right of document. on 'clock'

  // cat image 
    // check, if the 
// const test = document.querySelectorAll("div");
// for(let i = 0;i<test.length;i++){
//   test[i].style.color = red;
//   test[i].style.backgroundColor = red;
// }

// // test.style.color = green;
// setTimeout(()=>{

// // const someDiv = document.querySelectorAll('div');
//  const mainTitle = document.querySelector('#curriculum');
// // someDiv.forEach(el => el.setAttribute('class', 'someDiv'));
// mainTitle.style.color = "red";
// // someDiv.setAttribute('class', 'someDiv');
// // someDiv.style = 
// // console.log(body.style);

// const catImage = document.createElement("img");
// catImage.setAttribute("class", "cats");
// catImage.setAttribute("src", "cat1.jpeg");
// // document.querySelector("body")
// mainTitle.appendChild(catImage);
// // body.setAttribute('class', 'body');

// // create a div on top of anything
// const div = document.createElement('div');
// div.style.position = 'fixed';
// div.style.left = '0';
// div.style.top = '0';
// div.style.width = '20%';
// div.style.height = '90%';
// div.style.backgroundColor = 'red';
// // append floading div
// document.body.appendChild(div);
// // put div on top
// div.style.zIndex = '9999'




// },3000)

// // console.log(bodyPage);

//   console.log('hello WORld Rick Ross')
*/