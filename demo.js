function searchImages() {
    // Declare variables
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let gallery = document.getElementById("gallery");
    let images = gallery.getElementsByTagName('img');
  
    // Loop through all gallery images and hide those that don't match the search query
    for (let i = 0; i < images.length; i++) {
      let caption = images[i].alt.toUpperCase();
      if (caption.indexOf(filter) > -1) {
        images[i].parentNode.style.display = "";
      } else {
        images[i].parentNode.style.display = "none";
      }
    }
  }
  