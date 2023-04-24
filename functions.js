'use strict';

// 1. isHometown

// def is_hometown(town):
//     """Given a `town`, return `True` if `town` is 'San Francisco'.

//     Arguments:
//         town (str): A town

//     Returns:
//         bool: True if `town` is 'San Francisco'
//     """

//     return town == "San Francisco"
function isHometown(town) {
    return town === 'San Francisco'
}



// 2. getFullName
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}


// 3. calculateTotal
function calculateTotal(basePrice, state, tax=0.05) {
    let subtotal = basePrice * (1 + tax)

    let fee = 0
    if (state == "CA") {
        fee = 0.03 * subtotal
    } else if (state == "PA") {
        fee = 2
    } else if (state == "MA") {
        if (basePrice <= 100) {
            fee = 1
        } else {
            fee = 3
        }
    }

    return subtotal + fee
}

// Define your function here
