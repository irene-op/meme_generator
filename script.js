let form = document.querySelector("#add-meme-form");

function addMeme (event){
    event.preventDefault();
    let imageURL = document.querySelector("#image-url");
    //console.log(`hi there ${imageURL.value}`);
     
    const addMemeSection = document.querySelector("#add-memes-section");
    
    const newMeme = document.createElement("img");
    newMeme.setAttribute("src", `${imageURL.value}`);

    //const imgContentDiv = document.createElement("div");
    //imgContentDiv.classList.add("img-content");
    // need to create a div as a parent to the img and the text. The div and img would have absolute positioning and the text relative 
    //document.body.append(newMeme);
    addMemeSection.appendChild("newMeme");
}

form.addEventListener("submit", addMeme);

// function deleteMeme (event){
//     event.preventDefault();
//     image.remove();
    
// }

document.addEventListener('click', function(e) {
  if (e.target.tagName === 'IMG') {
    e.target.remove();
  }
});