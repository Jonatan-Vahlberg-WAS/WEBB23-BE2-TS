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
    return false;
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
//TODO: 1 get all comic books
//TODO: filter for inColor param
console.log(searchWorks("vendetta"));
