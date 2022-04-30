// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

function isPangram(input) {
    // Define a list of 26 letters.

    // Option1
    // var checkList = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]    
    // var checkList = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,u,v,w,x,y,z]
    // var checkList = [a,b,c,d,e,f]    // false!
    // var checkList = []    // true!

    // Option2
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
    // checkList.g = true     // to check something off the list, set it to true.
    // checkList['g'] = true  // is another way of doing the same thing

    // var letterFromSentence = 'T';
    // // next iteration, it becomes:
    // var letterFromSentence = 'h';
    // // next iteration, it becomes:
    // var letterFromSentence = 'e';
    // // next iteration, it becomes:
    // var letterFromSentence = 'q';

    //  for letterFromSentence = 0 , check if it's on list, 0+1, check if on list, until s
    //  i=0;i<Count;i++

    // Create a variable called "i" and set it to 0. For each time we iterate through the loop, increase i by 1. Stop when (i < sentence.length) is no longer true.
    for (var i = 0; i < sentence.length; i++) {
        var letterFromSentence = sentence[i];  // get the letter at the "i-th" index
        
        // If you see a space, a number, or a punctuation, just move on to the next index.


        // Check the letter off the checkList.


    }
}

// INPUT
let sentence = "The quick brown fox jumps over the lazy dog";   // 43 chars long
let sentenceLength = sentence.length;

// EXECUTE
let output = isPangram(sentence);

// OUTPUT
console.log(output);




1. Make a list of the 26 letters (let's call this the checklist)
2. For each letter in the sentence, do: 
   a) Go through the checklist and find a match.
   b) When we have found a match, check it off.
   c) Repeat with the next letter in the sentence, until there are no more letters in the sentence
3. If at least one item on the checklist is not checked, then return false (If everything is checked on the checklist, then return true)




var person = {
    firstName: "Sam",
    lastName: "Wong",
    isTall: true,
    age: 43,
    address: {
        city: "Toronto",
        province: "Ontario"
    },
    kids: [ "Esther", "Hannah", "Simon" ]
}

console.log("Hello, " + person.firstName + " " + person.lastName);   // "Hello, Sam Wong"
console.log("He lives in " + person.address.city);   // "He lives in Toronto"
console.log("He has kids named " + person.kids[0] + ", " + person.kids[1] + ", " + person.kids[2]);  // "He has kids named Esther, Hannah, Simon"

