"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let _firstName = "Jonatan"; // Implicit typing
let _lastName = "Vahlberg"; // Explicit typing through type declaration
const user1 = {
    id: 1,
    name: "John doe",
    email: "john.doe@test.com",
};
const users = [
    user1,
    {
        id: 2,
        name: "Jane doe",
        email: "jane.doe2@test.com",
    },
];
//! Return types
// Uppgift 1:
// Skapa en funktion `formatDate` som tar ett `Date`-objekt och returnerar en sträng
// i formatet "YYYY-MM-DD".
// Specificera returtypen explicit som en sträng (string).
// Din kod här
function formatDate(date) {
    let formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return formattedDate;
}
//! Flera returtyper
// Uppgift 2:
// Skapa en funktion `findUser` som tar ett användar-ID.
// Om användaren finns, returnera ett objekt med användarens information;
// annars, returnera null.
// Använd en unionstyp för returtypen.
// Din kod här
function findUser(userId) {
    return users.find(user => user.id === userId) || null;
}
// Uppgift 3:
// Skriv en funktion `loadData` som försöker hämta data från en server.
// Om lyckad, returnera datan (t.ex. ett objekt); om misslyckad, returnera ett felmeddelande som en sträng.
// Använd en unionstyp för returtypen.
// Din kod här
function loadData(url) {
    // Implementation
    const endpoints = users.map(user => `api/v1/users/${user.id}`);
    if (!endpoints.includes(url)) {
        return "Error: User not found";
    }
    const id = url.substring(url.lastIndexOf("/") + 1);
    const user = findUser(Number(id));
    if (!user) {
        return "Error: User not found";
    }
    return user;
}
//! Void-returer
// Uppgift 4:
// Skriv en funktion `saveLog` som tar ett meddelande och sparar det i en loggfil.
// Specificera returtypen som void.
// Din kod här
function saveLog(message) {
    // Implementation
    console.log(`saved message "${message}"to log_${formatDate(new Date())}.txt`);
    return;
}
function saveLogToDb(message) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`saved message "${message}"to log_${formatDate(new Date())}.txt`);
        return Promise.resolve();
    });
}
function updateUser(userId, name) {
    const user = findUser(userId);
    if (user) {
        user.name = name;
        console.log("User: name updated");
        return;
    }
    console.log("Error: user not found");
}
// Uppgift 5:
// Implementera en funktion `sendNotification` som skickar en notifikation till en användare,
// men inte returnerar något värde.
// Se till att funktionens returtyp är void.
// Din kod här
function sendNotification(userId, message) {
    // Implementation
    const user = findUser(userId);
    if (user) {
        console.log(`User ${user.email} was sent "${message}"`);
        return;
    }
}
// Uppgift 6:
// Skapa en funktion `processUserNotification` som tar ett `userId` och ett `message`.
// Funktionen ska:
// - Försöka hitta användaren med `findUser`.
//   - Om användaren hittas, skicka en notifikation med `sendNotification` och returnera en sträng som bekräftar att meddelandet skickades (explicit returtyp).
//   - Om användaren inte hittas, logga ett felmeddelande med `saveLog` och returnera en sträng som indikerar att användaren inte hittades (använd unionstyp om nödvändigt).
// - Specificera alla returtyper explicit.
// - Använd funktionerna `findUser`, `sendNotification`, och `saveLog` i din implementation.
function processUserNotification(userId, message) {
    const user = findUser(userId);
    if (user) {
        sendNotification(user.id, message);
        return "200 Message sent";
    }
    saveLog("Message could not be sent");
    return new Error("Message could not be sent");
    // Implementation
}
console.clear();
console.log(formatDate(new Date()));
console.log(findUser(1));
console.log(findUser(4));
console.log(loadData("api/v1/users/2"));
console.log(loadData("api/v1/users/8"));
saveLog("Users fetched");
updateUser(1, "James");
updateUser(4, "James");
sendNotification(1, "Hello James remember to switch your email");
sendNotification(4, "Hello James remember to switch your email");
const response = processUserNotification(5, "Allready done");
if (typeof response === "string") {
    console.log(response);
}
else {
    console.error(response);
    //TODO: handle error
}
