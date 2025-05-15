const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	let count = 0;
	for (i in library){
		if (library["readingStatus"]== "true"){
			
			count=count+1;
			console.log("hello")
			
		}
	}
};

// Do not change the code below


console.log(numberOfBooksRead());
