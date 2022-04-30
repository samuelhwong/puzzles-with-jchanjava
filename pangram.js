// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

function isPangram(sentence) {
    // Define a list of 26 letters.

    // Option1
    // var checkList = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]    
    // var checkList = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,u,v,w,x,y,z]
    // var checkList = [a,b,c,d,e,f]    // false!
    // var checkList = []    // true!

    // Option2 - Let's build a checkList of 26 letters. If a letter is true,
    // it means we've found that letter in the sentence. If a letter is false,
    // it means we haven't found it yet.
    var checkList = {
        a: false, // not found (not checked off)
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
        k: false,
        l: false,
        m: false,
        n: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        u: false,
        v: false,
        w: false,
        x: false,
        y: false,
        z: false
    };

    /////////////////////////
    // MAIN PROGRAM
    /////////////////////////
     
    console.log("Yay, we got a sentence. It is " + sentence.length + " characters long.");

    // Create a variable called "i" and set it to 0. For each time we iterate through the loop, increase i by 1. Stop when (i < sentence.length) is no longer true.
    for (var i = 0; i < sentence.length; i++) {
        var letter = sentence[i];  // get the letter at the "i-th" index
        console.log("We are at letter: " + letter);

        // If you see a space, a number, or a punctuation, just move on to the next letter.
        // This is because spaces, numbers, and punctuation doesn't count in a pangram.
        if (letter === " ") {
            console.log("  This is a space, so we'll ignore");
            continue;
        }

        console.log("   This is not a space, let's continue");

        // Check the letter off the checkList.
        checkList[letter.toLowerCase()] = true;

    }
    
    console.log(`Here is the checklist: ${JSON.stringify(checkList)}`);
    
    var arrayOfLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (var item = 0; item < arrayOfLetters.length; item++) {
        console.log("  Checking letter: " + arrayOfLetters[item]);
        var checkListItem = checkList[arrayOfLetters[item]];
        if (checkListItem === false) {
            console.log("  Found a false, so this is not a pangram");
            return false;
        } else {
            console.log("  Found a true, this could be a pangram so let's keep going");
        }
    }
    
    // If we are here, then we know it's a pangram. Return true.
    return true;
}

// INPUT
var sentence = "The quic333333,3781292834671!@#$%_3k brown fox jumps over the lazy dog";

// EXECUTE
var result = isPangram(sentence);

// OUTPUT
if (result === true) {
    console.log(">>>>>>>> We found a pangram");
} else {
    console.log(">>>>>>>> We did not find a pangram");
}




// 1. Make a list of the 26 letters (let's call this the checklist)
// 2. For each letter in the sentence, do: 
//    a) Go through the checklist and find a match.
//    b) When we have found a match, check it off.
//    c) Repeat with the next letter in the sentence, until there are no more letters in the sentence
// 3. If at least one item on the checklist is not checked, then return false (If everything is checked on the checklist, then return true)

