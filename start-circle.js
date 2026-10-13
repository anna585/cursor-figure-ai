const r = Number(process.argv[2]);
const mode = process.argv[3] ?? "fill";

if (!Number.isInteger(r) || r < 1 || (mode !== "fill" && mode !== "outline")) {
  console.error("Usage: node start-circle.js <R> [fill|outline]");
  console.error("R must be a positive integer.");
  process.exit(1);
}

const r2 = r * r;
const inner2 = (r - 1) * (r - 1);
const outline = mode === "outline";

for (let y = -r; y <= r; y++) {
  let row = "";
  for (let x = -2 * r; x <= 2 * r; x++) {
    const dx = x / 2;
    const d2 = dx * dx + y * y;
    const inside = d2 <= r2;
    const onRing = inside && d2 > inner2;
    row += (outline ? onRing : inside) ? "*" : " ";
  }
  console.log(row);
}
