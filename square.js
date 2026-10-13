const n = Number(process.argv[2]);

if (!Number.isInteger(n) || n < 1) {
  console.error("Usage: node square.js <N>");
  console.error("N must be a positive integer.");
  process.exit(1);
}

const row = "*".repeat(n);
for (let i = 0; i < n; i++) {
  console.log(row);
}
