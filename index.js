import { deck, users } from "./setup.js";

//Given a deck of cards
//Write a function that draw x cards and tell the user the remaining number of cards in each suit and each value
//
//i.e.
// {
//  hand:
//  [
//   {
//     suit: "Clubs",
//     value: "7"
//   },
//   ...
// ],
//   remainingSuits: {
//     spades: 1,
//     hearts: 2,
//     ...
//   },
//   remainingValues: {
//     A: 2,
//     K: 2,
//     Q: 3,
//     ...
//   }
// }

function popTop(arr, x) {
  return arr.splice(0, x);
}

function drawCards(deck, num) {
  popTop(deck, num);

  const remainingSuits = {
    Spades: 0,
    Hearts: 0,
    Diamonds: 0,
    Clubs: 0,
  };

  const remainingValues = {};

  for (var i = 0; i < deck.length; i++) {
    const suit = deck[i].suit;
    remainingSuits[suit] += 1;

    const value = deck[i].value;

    if (!remainingValues.hasOwnProperty(value)) {
      remainingValues[value] = 0;
    }

    remainingValues[value] += 1;
  }

  console.log("Remaining Suits:", remainingSuits);
  console.log("Remaining Values:", remainingValues);

  return [deck, num];
}

drawCards(deck, 5);

// ------------------------------------

// Given an array of users
// Write a function that will remove any duplicates from the users array and show the number of total duplicates
// The duplicated user should be reduced to one insntace in the array
// i.e.
// userIn = [
//   {
//     name: 'Smith, John',
//     eyeColor: 'blue',
//     hairColor: 'red'
//   },
//   {
//     name: 'Smith, John',
//     eyeColor: 'blue',
//     hairColor: 'red'
//   }
// ]
// returnArray = {
//   returnUsers: {
//     name: 'Smith, John',
//     eyeColor: 'blue',
//     hairColor: 'red'
//   },
//   dupeCount: 1
// }

function deepEqual(a, b) {
  return (
    a.user.name === b.user.name &&
    a.user.eyeColor === b.user.eyeColor &&
    a.user.hairColor === b.user.hairColor
  );
}

function deduplicateUsers(users) {
  const returnUsers = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    const returnUser = {
      user: user,
      dupeCount: 0,
    };

    const existsIndex = returnUsers.findIndex((item) =>
      deepEqual(item, returnUser)
    );

    if (existsIndex == -1) {
      returnUsers.push(returnUser);
    } else {
      returnUsers[existsIndex].dupeCount += 1;
    }
  }

  return returnUsers;
}

console.log(users, deduplicateUsers(users));

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// --------NON CODING CHALLENGE--------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------

//Given a system that will allow users to create "events" that will be stored in a database
//And given that the database only allows searching by a "single field"
//And given that not all fields need to be "viewable by a user"
//How would you design a "record object" to allow you to search for events by multiple fields
//Given that you can control the object schema
//And given that all user editable fields are limited to numbers and letters
//NOTE: This question does not have a correct answer, it is a design question to see how you think about the problem

// we concatenate all the fields that we want to be searchable into a single field called "search_index".
// This field will contain a space-separated string of all relevant information.
// When a user wants to search for events, we can perform a search on this single field.
// all the hidden fields are saved on private_notes which is not included in the search_index.
// {
//   "event_id": "evt_123",
//   "title": "TechMeetup2026",
//   "city": "Kathmandu",
//   "organizer": "AIOtech",
//   "category": "Technology",
//   "year": "2026",
//   "private_notes": "VIP event",
//   "search_index": "techmeetup2026 kathmandu aiotech technology 2026"
// }
