const firstNames = [
  "Aarav",
  "Vivaan",
  "Aditya",
  "Krishna",
  "Arjun",
  "Rahul",
  "Ananya",
  "Priya",
  "Sneha",
  "Neha",
  "Riya",
  "Simran",
  "Karan",
  "Rohit",
  "Amit",
  "Pooja",
  "Kavya",
  "Ishita",
  "Varun",
  "Nikhil",
];

const lastNames = [
  "Sharma",
  "Singh",
  "Kumar",
  "Patel",
  "Verma",
  "Gupta",
  "Yadav",
  "Mishra",
  "Jain",
  "Kapoor",
  "Agarwal",
  "Saxena",
];

const departments = [
  "Sales",
  "Marketing",
  "Finance",
  "HR",
  "IT",
  "Operations",
];

function randomItem(array) {
  return array[
    Math.floor(Math.random() * array.length)
  ];
}

export const employees = Array.from(
  { length: 200 },
  (_, index) => ({
    id: index + 1,

    name: `${randomItem(firstNames)} ${randomItem(
      lastNames
    )}`,

    department: randomItem(departments),

    revenue:
      Math.floor(Math.random() * 900000) +
      100000,
  })
);