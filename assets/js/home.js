let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.addEventListener("scroll", calcScrollValue);
window.onload = calcScrollValue;
(function () {
  // wrap code in IIFE to keep it from global scope
  let links = document.querySelectorAll(".tabs"); // grab all <a> tags that trigger the image gallery
  let imageContainer = document.querySelector(".image-container"); // grab the div that will contain the images
  let imagesCollection = document.querySelectorAll(".image-container img");
  function displayImage(imgs, album) {
    // function to check the data-album attr and check against the button that was clicked
    imgs.forEach((image) => {
      if (image.dataset.album == album) {
        image.classList.remove("hide");
      } else {
        image.classList.add("hide");
      }
    });
  }
  links.forEach((link) => {
    // loop through <a> tags and create click event on each
    link.addEventListener("click", (e) => {
      e.preventDefault();
      // links.body.style.backgroundColor = "#7cc576";
      switch (
        link.textContent // check name of link clicked
      ) {
        case "CASHCRY": // link 1 text
          displayImage(imagesCollection, "album 1"); //display images from album 1

          break;
        case "MAHAMANIA": // link 2 text
          displayImage(imagesCollection, "album 2"); //display images from album 2

          break;
        case "NETALAS": // link 3 text
          displayImage(imagesCollection, "album 3"); //display images from album 3

          break;

        case "All": // // link 4 text - display all images at once
          imagesCollection.forEach((image) => {
            image.classList.remove("hide");
          });

          break;
      }
    });
  });
})();
