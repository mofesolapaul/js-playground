"use strict";
/* We have some clickstream data that we gathered on our client's website. Using cookies, we collected snippets of users' anonymized URL histories while they browsed the site. The histories are in chronological order, and no URL was visited more than once per person.

Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appears in both.

Sample input:

user0 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"]
user2 = ["a", "/one", "/two"]
user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow", "/BritishRacingGreen"]
user4 = ["/pink", "/orange", "/amber", "/BritishRacingGreen", "/plum", "/blue", "/tan", "/red", "/lavender", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow"]
user5 = ["a"]
user6 = ["/pink","/orange","/six","/plum","/seven","/tan","/red", "/amber"]

Sample output:

findContiguousHistory(user0, user1) => ["/pink", "/register", "/orange"]
findContiguousHistory(user0, user2) => [] (empty)
findContiguousHistory(user0, user0) => ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
findContiguousHistory(user2, user1) => ["a"] 
findContiguousHistory(user5, user2) => ["a"]
findContiguousHistory(user3, user4) => ["/plum", "/blue", "/tan", "/red"]
findContiguousHistory(user4, user3) => ["/plum", "/blue", "/tan", "/red"]
findContiguousHistory(user3, user6) => ["/tan", "/red", "/amber"]

n: length of the first user's browsing history
m: length of the second user's browsing history
 */

const user0 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"];
const user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"];
const user2 = ["a", "/one", "/two"];
const user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow", "/BritishRacingGreen"];
const user4 = ["/pink", "/orange", "/amber", "/BritishRacingGreen", "/plum", "/blue", "/tan", "/red", "/lavender", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow"];
const user5 = ["a"];
const user6 = ["/pink","/orange","/six","/plum","/seven","/tan","/red", "/amber"];


/**
My approach:
- main focus should be on shortest array
- walk thru short array entirely (worst case)
- for each item in the short array, we check for its presence in the long array
- if it's present, then we check contiguous positions (increment i and check in both arrays)
- populate result array until we find dissonance
*/

const findContiguousHistory = (history1, history2) => {
  const shorterHistory = history1.length <= history2.length ? history1 : history2;
  const longerHistory = history1.length > history2.length ? history1 : history2;
  let result = [];
  for (let i = 0; i < shorterHistory.length; i++) {
    const history = shorterHistory[i];
    const contiguous = [];
    let index = longerHistory.indexOf(history);
    if (index !== -1) {
      contiguous.push(history);
      
      while (i < shorterHistory.length - 1) {
        if (shorterHistory[i+1] === longerHistory[index+1]) {
          contiguous.push(shorterHistory[i+1]);
          ++i;
          ++index;
        } else {
          break;
        }
      }
      
      if (result.length < contiguous.length) {
        result = [...contiguous];
      }
    }
  }
  
  return result;
};

console.log(findContiguousHistory(user0, user1));
console.log(findContiguousHistory(user0, user2));
console.log(findContiguousHistory(user0, user0));
console.log(findContiguousHistory(user2, user1));
console.log(findContiguousHistory(user5, user2));
console.log(findContiguousHistory(user3, user4));
console.log(findContiguousHistory(user4, user3));
console.log(findContiguousHistory(user3, user6));
