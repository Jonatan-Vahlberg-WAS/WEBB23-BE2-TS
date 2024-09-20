//@ts-ignore
import books from "../data/books.js";
//@ts-ignore
import comicBooks from "../data/comicBooks.js";
const importedWorks = [...books, ...comicBooks];
function lowerCompare(fullText, match) {
    return fullText.toLowerCase().includes(match.toLowerCase());
}
function isComicBook(work) {
    if (work.ilustrator !== undefined) {
        return true;
    }
    if ("ilustratorr" in work) { //alternative
        return true;
    }
    return false;
}
function sortWorks(a, b, sort) {
    if (sort === "title") {
        return a.title.localeCompare(b.title);
    }
    else if (sort === "author-fname") {
        return a.author.firstName.localeCompare(b.author.firstName);
    }
    else if (sort === "author-lname") {
        return a.author.lastName.localeCompare(b.author.lastName);
    }
    return 0;
}
function searchWorks(query) {
    query = query.toLowerCase();
    const filtredBooks = importedWorks.filter((work) => {
        const authorName = `${work.author.firstName} ${work.author.lastName}`;
        let isMatch = lowerCompare(work.title, query) || lowerCompare(authorName, query);
        if (!isMatch && isComicBook(work)) {
            isMatch = isMatch || lowerCompare(work.ilustrator, query);
        }
        return isMatch;
    });
    return filtredBooks;
}
//Get comic books only from our works and have a optional filter of if they have to be in color that can be applied as a param
function getComicBooks(inColor, sort) {
    let comicBooks = importedWorks.filter(isComicBook);
    if (typeof inColor === "boolean") {
        comicBooks = comicBooks.filter(comicBook => comicBook.inColor === inColor);
    }
    if (sort) {
        return comicBooks.sort((a, b) => sortWorks(a, b, sort));
    }
    return comicBooks;
}
//!EXTRA add a sort param that sets what the order should be example sort="author" as firstName or sort="title" (harder)
// console.log(searchWorks("david"))
// console.log("All Comicbooks: ",getComicBooks(undefined, "title"))
// console.log("All Comicbooks in color:",getComicBooks(true).length)
// console.log("All Comicbooks in BW: ",getComicBooks(false).length)
// console.clear()
console.log("All Comicbooks sorted on author first name: ", getComicBooks(undefined, "author-lname"));
