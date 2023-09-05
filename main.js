// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.querySelector('.like-glyph').addEventListener('click', mimicServerCall () 
 .then((resp) => {
    document.querySelector('.like-glyph').textContent = '♥';
    document.querySelector('.like-glyph').classList.add('activated-heart');
  })
  .catch((error) => {
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.add('hidden');
  }, 3000);
  })

)
document.querySelector('.like-glyph').addEventListener('dblclick', () => {
  document.querySelector('.like-glyph').textContent = '♡';
  document.querySelector('.like-glyph').classList.remove('activated-heart')
  }
)  


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
