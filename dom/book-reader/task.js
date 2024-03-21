const fontSize = Array.from(document.getElementsByClassName("font-size"));
const color = Array.from(document.getElementsByClassName("color"));
const book = document.querySelector(".book");

let activeIndex = 1;

for (let i = 0; i < fontSize.length; i++) {
  fontSize[i].addEventListener('click', 
    function(event) {
      event.preventDefault();
      
  	  if (!fontSize[i].classList.contains("font-size_active")) {
  	    fontSize[activeIndex].classList.remove("font-size_active");
  	    fontSize[i].classList.add("font-size_active");

        if (fontSize[i].classList.contains("font-size_small")) {
          book.classList.remove("book_fs-big");
          book.classList.add("book_fs-small");
        } else {
          if (fontSize[i].classList.contains("font-size_big")) {
        	book.classList.remove("book_fs-small");
        	book.classList.add("book_fs-big");
	        } else {
            book.classList.remove("book_fs-small");
            book.classList.remove("book_fs-big");
	        }
	      }
	      activeIndex = i; 
	    }
  	}
  )
}
