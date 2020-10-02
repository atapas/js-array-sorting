// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Sorting String elements
{
  let artists = ['John White Abbott', 'Leonardo da Vinci', 'Charles Aubry', 'Anna Atkins', 'Barent Avercamp'];

  artists.sort();
  console.log('Sort the artist names(Ascending)', artists);


  artists.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
  console.log('Sort the artist names(Descending)', artists);

  artists.reverse();
  console.log('Reverse the artist name order', artists);

  let names = ['Bob', 'bakshi', 'adam', 'Maya', 'carl'];
  names.sort();
  console.log(names);

  names.sort(function (a, b) {
    let left = a.toUpperCase();
    let right = b.toUpperCase();

    return (left === right) ? 0 : left > right ? 1 : -1;
  });
  console.log(names);
}

// Sorting numbers
{
  let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

  ages.sort();

  console.log(ages);

  // function(a,b) {return a-b} ascending

  ages.sort(function(a,b) {return a-b});
  console.log(ages);

  ages.sort((a,b) => a-b);

  // function(a,b) {return b-a} descending
  ages.sort(function(a,b) {return b-a})
  console.log(ages);
}

// Sorting non-ASCII characters
{
  let items = ['communiqué', 'zèbre', 'adieu', 'éclair'];

  items.sort();

  console.log(items);

  items.sort((a,b) => a.localeCompare(b));
  console.log(items);
}

// Sorting object
{
  let users = [
    {'name': 'Joe', 'address': 'Huston', 'dob':'February 9, 1991', 'income': 87654},
    {'name': 'Bob', 'address': 'London', 'dob':'July 1, 1986', 'income': 47974},
    {'name': 'Carl', 'address': 'Bangalore', 'dob':'December 25, 1982', 'income': 97351},
    {'name': 'Amanda', 'address': 'Lagos', 'dob':'March 19, 2001', 'income': 57753},
  ];

  console.table(users);

  // Sort by names - Ascending

  users.sort(function(a, b) {
    let left = a.name;
    let right = b.name;
    return left === right ? 0 : left > right ? 1 : -1;
  });

  console.table(users);

  // Sort by address - Descending

  users.sort(function(a, b) {
    let left = a.address;
    let right = b.address;
    return left === right ? 0 : left > right ? -1 : 1;
  });
  console.table(users)

  // Sort by income - Ascending
  users.sort((a,b) => (a.income - b.income));
  console.table(users);

  // Sort by income - Descending
  users.sort((a,b) => (b.income - a.income));
  console.table(users);

  // Sort by dob - Ascending
  console.log(new Date('March 19, 2001')); // Date object
  users.sort((a,b) => (new Date(a.dob) - new Date(b.dob)));
  console.table(users);

  // Sort by dob - Descending
   users.sort((a,b) => (new Date(b.dob) - new Date(a.dob)));
  console.table(users);
}

