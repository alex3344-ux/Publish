let data = [
    {
        "id": 1,
        "name": "A Smarter Way to Learn JavaScript",
        "publication": "March 20, 2014",
        "author": "Mark Myers",
        "isbn-13": "978-1497408180",
        "language": "English",
        "image": "https://m.media-amazon.com/images/I/412w7SEE1aL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
      "id": 2,
      "name": "Head First JavaScript Programming: A Brain-Friendly Guide",
      "publication": "May 6, 2014",
      "author": "Elisabeth Robson",
      "isbn-13": "978-1449340131",
      "language": "English",
      "image": "https://m.media-amazon.com/images/I/519dx5KHv-L._SX430_BO1,204,203,200_.jpg"
    },
    {
      "id": 3,
      "name": "Eloquent JavaScript",
      "publication": "December 4, 2018",
      "author": "Marijn Haverbeke",
      "isbn-13": "978-1593279509",
      "language": "English",
      "image": "https://m.media-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg"
    },
    {
      "id": 4,
      "name": "JavaScript: The Definitive Guide",
      "publication": "June 23, 2020",
      "author": "David Flanagan",
      "isbn-13": "978-1491952023",
      "language": "English",
      "image": "https://m.media-amazon.com/images/I/51HbNW6RzhL._SX375_BO1,204,203,200_.jpg"
    },
    {
      "id": 5,
      "name": "Secrets of the JavaScript Ninja",
      "publication": "September 10, 2016",
      "author": "John Resig, Bear Bibeault, and Josip Maras",
      "isbn-13": "978-1617292859",
      "language": "English",
      "image": "https://m.media-amazon.com/images/I/51u9Pg4riRL._SX397_BO1,204,203,200_.jpg"
    },
    {
      "id": 6,
      "name": "JavaScript: The Good Parts",
      "publication": "May 1, 2008",
      "author": "Douglas Crockford",
      "isbn-13": "978-0596517748",
      "language": "English",
      "image": "https://m.media-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg"
    },
    {
      "id": 7,
      "name": "JavaScript and jQuery: Interactive Front-End Web Development",
      "publication": "July 21, 2014",
      "author": "Jon Duckett",
      "isbn-13": "978-1118871652",
      "language": "English",
      "image": "https://m.media-amazon.com/images/I/41R+ew8f3lL._SX400_BO1,204,203,200_.jpg"
    },
    {
      "id": 8,
      "name": "You Don't Know JS: ES6 and Beyond",
      "publication": "January 1, 2016",
      "author": "Kyle Simpson",
      "isbn-13": "978-9352134199",
      "language": "English",
      "image": "https://m.media-amazon.com/images/I/41Z5kHqNo1L._SX330_BO1,204,203,200_.jpg"
    },
    {
      "id": 9,
      "name": "Professional JavaScript for Web Developers",
      "publication": "January 18, 2012",
      "author": "Nicholas C. Zakas",
      "isbn-13": "978-1118026694",
      "language": "English",
      "image": "https://m.media-amazon.com/images/I/51FUfPqTe6L._SX394_BO1,204,203,200_.jpg"
    },
    {
      "id": 10,
      "name": "Learn JavaScript VISUALLY with Interactive Exercises: The Beautiful New Way to Learn a Programming Language",
      "publication": "July 18, 2014",
      "author": "Ivelin Demirov",
      "isbn-13": "978-1495233005",
      "language": "English",
      "image": "https://m.media-amazon.com/images/I/51FBiYXXHSL._SX398_BO1,204,203,200_.jpg"
    }
];


let lst = document.querySelector('.elemLst');


function func001() {
  data.map(function(element) {
    let card = document.createElement('li');
    let image = document.createElement('img');
    let name = document.createElement('a');
    name.href = '#';
    let author = document.createElement('div');
    let publication = document.createElement('div');

    card.id = element.id;
    image.src = element.image;
    name.textContent = element.name;
    author.textContent = `Author: ${element.author}`;
    publication.textContent = `Publication: ${element.publication}`;

    card.classList.add('elem');
    image.classList.add('elemImg');
    name.classList.add('elemName');
    author.classList.add('elemAuthor');
    publication.classList.add('elemPublication');

    card.append(image, name, author, publication);

    lst.append(card);

  });
};

func001();
