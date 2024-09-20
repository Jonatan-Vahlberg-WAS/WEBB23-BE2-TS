//@ts-ignore
import books from "../data/books.js";
//@ts-ignore
import comicBooks from "../data/comicBooks.js";
import type { Work, ComicBook } from "../types/book";

const importedWorks: Work[] = [...books, ...comicBooks];

function lowerCompare(fullText: string, match: string) {
    return fullText.toLowerCase().includes(match.toLowerCase())
}

function isComicBook(work: Work): work is ComicBook {
    if((work as ComicBook).ilustrator !== undefined){
        return true
    }
    if("ilustratorr" in work) { //alternative
        return true
    }
    return false
}

type WorkSort = "title" | "author-fname" | "author-lname"

function sortWorks(a: Work, b: Work, sort: WorkSort) {
    if(sort === "title") {
        return a.title.localeCompare(b.title)
    }
    else if(sort === "author-fname") {
        return a.author.firstName.localeCompare(b.author.firstName)
    }
    else if(sort === "author-lname") {
        return a.author.lastName.localeCompare(b.author.lastName)
    }
    return 0
}
 
function searchWorks(query: string) {
    query = query.toLowerCase();
    const filtredBooks = importedWorks.filter((work) => {
        const authorName = `${work.author.firstName} ${work.author.lastName}`
        let isMatch = lowerCompare(work.title, query) || lowerCompare(authorName, query)
        if(!isMatch && isComicBook(work)){
            isMatch = isMatch || lowerCompare(work.ilustrator, query)
        }
        return isMatch
    });
    return filtredBooks;
}

//Get comic books only from our works and have a optional filter of if they have to be in color that can be applied as a param
function getComicBooks(inColor?: boolean, sort?: WorkSort) {
    let comicBooks = importedWorks.filter(isComicBook)
    if(typeof inColor === "boolean") {
        comicBooks = comicBooks.filter(comicBook => comicBook.inColor === inColor)
    }
    if(sort) {
        return comicBooks.sort((a, b) => sortWorks(a,b, sort))
    }
    return comicBooks
}
//!EXTRA add a sort param that sets what the order should be example sort="author" as firstName or sort="title" (harder)

// console.log(searchWorks("david"))

// console.log("All Comicbooks: ",getComicBooks(undefined, "title"))
// console.log("All Comicbooks in color:",getComicBooks(true).length)
// console.log("All Comicbooks in BW: ",getComicBooks(false).length)
// console.clear()
console.log("All Comicbooks sorted on author first name: ",getComicBooks(undefined, "author-lname"))
