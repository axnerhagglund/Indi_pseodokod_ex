// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
sum = INPUT("Hur mycket kostade kalaset?")
antalVänner = INPUT("Hur många är ni?") 
dricksIProcent = INPUT("Ange dricks i procent i decimalform (tex 0.20 för 20 % i dricks)")

dricks = sum * dricksIProcent
sumDricks = sum + dricks
kostnadPerVän = sumDricks / antalVänner

OUTPUT "Hoppas maten smakade! Det blev" kostandPerVän "Blev det per person"


*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();
function play();
    SET variabel ordbok = [EYE, BYE, LIE, LYE, LID, RYE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "EYE";
    SET variabel slutOrd till "LID";
    SET nuvarandeOrd = startOrd;
    
    OUTPUT: Nuvarande ord: "EYE";
    OUTPUT: Slutord: "LID";
    nyttOrd = INPUT = ""
    
    WHILE nuvarandeOrd inte är lika med slutOrd 
        Be spelaren ange ett nytt ord
        INPUT nyttOrd;

        *kollar om det nya ordet finns i ordboken
         if isWordInWordBook(nyttOrd, ordbok) 
            gå vidare till nästa steg
            else, OUTPUT: ordet du angav existerar ej i ordboken, försök igen tack!
        END IF
        
        *kollar så bara en bkostav skilljer mellan det nya ordet och gamla
        IF NOT isOneLetterApart(nuvarandeOrd, nyttOrd) THEN
            OUTPUT: Ej tillåtet byte! Du kan bara ändra en bokstav. Försök igen
            else, gå vidare till nästa steg
        END IF

        *om båda kontroller är passade, uppdatera nuvarande ord
        SET nuvarandeOrd = nyttOrd;
        OUTPUT "Snyggt! Nuvarande ord är: " + nuvarandeOrd;
    end WHILE

     OUTPUT "Grattis! Du klarade till slutordet '" + slutOrd + "'!";
end function


function isWordInWordBook(nyttOrd, ordbok)
    IF nyttOrd IN ordbok THEN
        returnera SANT;
    ELSE
        returnera FAlSKT;
    END IF
end function
    
function isOneLetterApart(ord, nyttOrd)
IF lenght(ord) inte lika med lenght(nyttOrd) 
        returnera FALSE;

    SET variabel diffCount till 0;

    För varje bokstav i det första ordet, kontrollera om motsvarande bokstav i det andra ordet är samma
    IF bokstaven skiljer sig, öka "diffCount" med 1.
    end IF

    IF "diffCount" är exakt 1, då har endast en bokstav ändrats
        returnera SANT.
    else IF skillnaden är 0 eller mer än 1, returnera FALSKT.
    end if
end function

*/


// när jag testar koden laggar det väldigt mycket men den fungerade iaf när det inte laggade! xD
// KOD FRÅN CHATGPT ! UTIFRÅN PSEUDOKODEN !

function play() {
    // Initiera variabler
    const ordbok = ["EYE", "BYE", "LIE", "LYE", "LID", "RYE"]; // Innehåller alla giltiga ord
    const startOrd = "EYE";
    const slutOrd = "LID";
    let nuvarandeOrd = startOrd;

    // Presentera start- och slutord
    console.log("Nuvarande ord: " + startOrd);
    console.log("Slutord: " + slutOrd);

    while (nuvarandeOrd !== slutOrd) {
        // Be användaren ange ett nytt ord
        const nyttOrd = prompt("Ange ett nytt ord:");

        // Kontrollera om det nya ordet finns i ordboken
        if (!isWordInWordBook(nyttOrd, ordbok)) {
            console.log("Ordet du angav finns inte i ordboken. Försök igen!");
            continue;
        }

        // Kontrollera om endast en bokstav skiljer sig
        if (!isOneLetterApart(nuvarandeOrd, nyttOrd)) {
            console.log("Ej tillåtet byte! Du kan bara ändra en bokstav. Försök igen!");
            continue;
        }

        // Om båda kontroller passerades, uppdatera nuvarande ord
        nuvarandeOrd = nyttOrd;
        console.log("Snyggt! Nuvarande ord är: " + nuvarandeOrd);
    }

    // Spelet avslutas
    console.log("Grattis! Du klarade till slutordet '" + slutOrd + "'!");
}

// Funktion för att kontrollera om ett ord finns i ordboken
function isWordInWordBook(nyttOrd, ordbok) {
    return ordbok.includes(nyttOrd); // Returnerar sant om ordet finns i ordboken
}

// Funktion för att kontrollera om två ord skiljer sig med exakt en bokstav
function isOneLetterApart(ord, nyttOrd) {
    if (ord.length !== nyttOrd.length) {
        return false; // Orden måste ha samma längd
    }

    let diffCount = 0;

    // Loopa igenom varje bokstav och räkna skillnader
    for (let i = 0; i < ord.length; i++) {
        if (ord[i] !== nyttOrd[i]) {
            diffCount++;
        }

        // Avbryt tidigt om det är fler än 1 skillnad
        if (diffCount > 1) {
            return false;
        }
    }

    // Returnera sant om exakt en skillnad finns, annars falskt
    return diffCount === 1;
}

// Kör spelet
play();

