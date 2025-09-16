// 1️⃣ Create branded interfaces
interface MajorCredits {
  credits: number;
  __brand: "Major"; // Unique brand property
}

interface MinorCredits {
  credits: number;
  __brand: "Minor"; // Unique brand property
}

// 2️⃣ Helper functions to create branded credit objects
function createMajorCredits(credits: number): MajorCredits {
  return { credits, __brand: "Major" };
}

function createMinorCredits(credits: number): MinorCredits {
  return { credits, __brand: "Minor" };
}

// 3️⃣ sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return createMajorCredits(subject1.credits + subject2.credits);
}

// 4️⃣ sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return createMinorCredits(subject1.credits + subject2.credits);
}

// 5️⃣ Example usage
const major1 = createMajorCredits(3);
const major2 = createMajorCredits(4);
const totalMajor = sumMajorCredits(major1, major2);
console.log("Total Major Credits:", totalMajor.credits); // 7

const minor1 = createMinorCredits(2);
const minor2 = createMinorCredits(1);
const totalMinor = sumMinorCredits(minor1, minor2);
console.log("Total Minor Credits:", totalMinor.credits); // 3
