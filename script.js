const form = document.getElementById('add-meme-form');




function addMeme (event){
    event.preventDefault();

    const imageURL = document.getElementById('image-url');
    const addedMemes = document.getElementById('added-memes');
    const textTop = document.getElementById('text-top');
    const textTopValue = textTop.value;
    const textBottom = document.getElementById('text-bottom');
    const textBottomValue = textBottom.value;
    
    const newMeme = document.createElement('img');
    newMeme.setAttribute('src', `${imageURL.value}`);

    addedMemes.appendChild(newMeme);
}

form.addEventListener('submit', addMeme);


document.addEventListener('click', function(e) {
if (e.target.tagName === 'IMG') {
e.target.remove();
}
});