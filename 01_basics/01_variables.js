const accountId = 1222
let accountEmail = "komal@gmail.com"
var accountPassword = "12344"
accountCity = "Jaipur"

//accountId = 2 // not allowed

accountEmail = "testing@gmail.com"
accountPassword = "11111"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table ([accountId, accountEmail, accountPassword, accountCity])

