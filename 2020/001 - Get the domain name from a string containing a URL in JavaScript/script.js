const url = "https://www.michaelburrows.xyz/blog?search=hello&world";

/*
domain = domain.hostname;
console.log(domain); //www.michaelburrows.xyz
*/

/*
domain = domain.hostname.replace('www.','');
console.log(domain); //michaelburrows.xyz
*/

const domain = new URL(url).hostname.replace("www.", "");

console.log(domain); //michaelburrows.xyz
