'use strict';

// 1. printIndices
function printIndices(items) {
  // Print each item in the list, followed by its index.

  // for i in range(len(items)):
  //     print(f'{items[i]} {i}')
  for (let i = 0; i < items.length; i++) {
    console.log(items[i], i)
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  // Print a list of every other item in `items`
//   result = []

//   for i in range(len(items)):
//       if i % 2 == 0:
//           result.append(items[i])

//   print(result)
  let result = []

  for (let i = 0; i < items.length; i++) {
    if (i % 2 === 0) {
      result.push(items[i])
    }
  }

  console.log(result)
 }

// 3. smallestNItems
function smallestNItems(items, n) {
  // Print a list of the `n` smallest integers in `items`.

  // sorted_items = sorted(items)
  // sorted_n_items = sorted_items[:n]
  // sorted_n_items.reverse()

  // print(sorted_n_items)
  items.sort((a,b) => a - b);
  console.log(items.slice(0, n))
}
