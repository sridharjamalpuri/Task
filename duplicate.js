function repeating(string) {
 
 var rep = {};

 for (var i=0; i<string.length;i++) 
    {
        var char = string.charAt(i);

         if (rep[char]) 
           {
             rep[char]++;

             } else {

             rep[char] = 1;
           }
    }

return rep;
};

console.log(repeating('sri'));
