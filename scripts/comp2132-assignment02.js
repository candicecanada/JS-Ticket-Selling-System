/*
these data points represent different 
aspects of the show...
(do not change these values)
*/
const ticketCostDollarsCDN      = 30;
const minimumAgeToAttend        = 21;
/* tax rate is 10%, defined here as 0.10 */
const taxRate                   = 0.10;

/*
these data points represent information
about the current user
NOTE: since this data would in theory be
supplied by the user, all values 
(even numeric) here are strings... 
- change these values as you test your script!
*/
const userName              = "Shania Smith";
const age                   = "21";
const cashOnHandDollarsCDN  = "32";
const quantityOfTickets     = "3";

const assignment_purpose = document.getElementById('assignment_purpose')
assignment_purpose.innerHTML = `Demonstrating using variables, handling different data types, operators and conditional desicions.`
const username1 = document.getElementById('username1')
username1.innerHTML = `${userName}`
const quotation = document.getElementById('quotation')
quotation.innerHTML = `${userName} says: "Let's buy some tickets to the big virtual concert!"`

// user data section
const user_data = document.getElementById('user_data')
user_data.innerHTML = `User Data:`
const username2 = document.getElementById('username2')
const user_age = document.getElementById('user_age')
const ticket_qty = document.getElementById('ticket_qty')
const cash = document.getElementById('cash')

username2.innerHTML = `User Name: ${userName}`
user_age.innerHTML = `User Age: ${age}`
ticket_qty.innerHTML = `Ticket Qty: ${quantityOfTickets}`
cash.innerHTML = `Cash: ${cashOnHandDollarsCDN}`

// concert data section
const concert_data = document.getElementById('concert_data')
concert_data.innerHTML = `Concert Data:`
const minimum_age_to_attend = document.getElementById('minimum_age_to_attend')
const cost_per_ticket = document.getElementById('cost_per_ticket')
const tax_rate = document.getElementById('tax_rate')

minimum_age_to_attend.innerHTML = `Minimum Age To Attend: ${minimumAgeToAttend}`
cost_per_ticket.innerHTML = `Cost Per Ticket: ${ticketCostDollarsCDN}`
taxRate.innerHTML = `Tax Rate: ${taxRate}`

// processing purchase section
const processing_purchase = document.getElementById('processing_purchase')
processing_purchase.innerHTML = `Processing Purchase:`
const before_tax_cost = document.getElementById('before_tax_cost')
const after_tax_cost = document.getElementById('after_tax_cost')
const user_can_afford = document.getElementById('user_can_afford')
user_can_afford.innerHTML = ``
const user_exactly_old_enough = document.getElementById('user_exactly_old_enough')
user_exactly_old_enough.innerHTML = ``
const user_more_than_old_enough = document.getElementById('user_more_than_old_enough')
user_more_than_old_enough.innerHTML = ``

const beforeTaxCost = quantityOfTickets * ticketCostDollarsCDN
const afterTaxCost = beforeTaxCost + beforeTaxCost * taxRate
before_tax_cost.innerHTML = `Purchasing ${quantityOfTickets} ticket(s) at $${ticketCostDollarsCDN}: ${beforeTaxCost}`
after_tax_cost.innerHTML = `After tax total cost: $${afterTaxCost}`

const user_cannot_afford_error = document.getElementById('user_cannot_afford_error')
user_cannot_afford_error.innerHTML = ``
const user_not_old_enough_error = document.getElementById('user_not_old_enough_error')
user_not_old_enough_error.innerHTML = ``
const no_error = document.getElementById('no_error')
no_error.innerHTML = ``

let containError = false
// check if user can afford the price:
const priceDifference = afterTaxCost - cashOnHandDollarsCDN
if(priceDifference <= 0){
    // the user can afford this
    user_can_afford.innerHTML = `The user can afford this.`
}
else{
    // the user cannot afford this
    user_cannot_afford_error.innerHTML = `Sorry, ${userName}, you cannot afford this! You need $${priceDifference} more.`
    containError = true
}

// check if user is old enough to attend the show
const ageDifference = minimumAgeToAttend - age
if(ageDifference < 0){
    // the user is more than old enough to attend the show
    user_more_than_old_enough.innerHTML = `User is old enough to attend the show by ${minimumAgeToAttend} year(s).`
}
else if(ageDifference == 0){
    // the user is exactly old enough to attend the show
    user_exactly_old_enough.innerHTML = `User is exactly old enough to attend the show! Proceeding with ticket sales...`
}
else{
    // the user is not old enough to attend the show
    user_not_old_enough_error.innerHTML = `Sorry, you are ${age} and that's not old enough to attend this show. You would need to be ${ageDifference} year(s) older than you actually are. Too bad, kiddo!`
    containError = true
}

// results section:
const results = document.getElementById('results')
results.innerHTML = `Results:`
if(containError == false){
    no_error.innerHTML = `There are no error messages to report. Enjoy the show!`
}