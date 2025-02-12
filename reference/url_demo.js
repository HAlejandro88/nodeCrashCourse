const url =  require('url');

const myUrl = new URL('http://mywebsite.com/hellow.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// Host(root domain)
console.log(myUrl.host);
// Host Name
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
// Serialized query
console.log(myUrl.search)
// PARMAS object
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append('abc', '123');
// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))