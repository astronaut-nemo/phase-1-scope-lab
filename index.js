// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'could be bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer(){
    bestCustomer = 'not bob';
}

console.log(bestCustomer);

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'definitely bob';
}