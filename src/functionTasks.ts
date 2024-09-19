type User = {
    id: number;
    name: string;
    email: string;
};

//! Return types

// Uppgift 1:
// Skapa en funktion `formatDate` som tar ett `Date`-objekt och returnerar en sträng
// i formatet "YYYY-MM-DD".
// Specificera returtypen explicit som en sträng (string).

// Din kod här
function formatDate(date: Date) {
    // Implementation
}

//! Flera returtyper

// Uppgift 2:
// Skapa en funktion `findUser` som tar ett användar-ID.
// Om användaren finns, returnera ett objekt med användarens information;
// annars, returnera null.
// Använd en unionstyp för returtypen.

// Din kod här
function findUser(userId: number) {
    // Implementation
}

// Uppgift 3:
// Skriv en funktion `loadData` som försöker hämta data från en server.
// Om lyckad, returnera datan (t.ex. ett objekt); om misslyckad, returnera ett felmeddelande som en sträng.
// Använd en unionstyp för returtypen.

// Din kod här
function loadData(url: string) {
    // Implementation
}

//! Void-returer

// Uppgift 4:
// Skriv en funktion `saveLog` som tar ett meddelande och sparar det i en loggfil.
// Specificera returtypen som void. 

// Din kod här
function saveLog(message: string) {
    // Implementation
}

// Uppgift 5:
// Implementera en funktion `sendNotification` som skickar en notifikation till en användare,
// men inte returnerar något värde.
// Se till att funktionens returtyp är void.

// Din kod här
function sendNotification(userId: number, message: string) {
    // Implementation
}



// Uppgift 6:
// Skapa en funktion `processUserNotification` som tar ett `userId` och ett `message`.
// Funktionen ska:
// - Försöka hitta användaren med `findUser`.
//   - Om användaren hittas, skicka en notifikation med `sendNotification` och returnera en sträng som bekräftar att meddelandet skickades (explicit returtyp).
//   - Om användaren inte hittas, logga ett felmeddelande med `saveLog` och returnera en sträng som indikerar att användaren inte hittades (använd unionstyp om nödvändigt).
// - Specificera alla returtyper explicit.
// - Använd funktionerna `findUser`, `sendNotification`, och `saveLog` i din implementation.



function processUserNotification(userId: any, message: any) {
    // Implementation

}