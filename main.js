// // Reinforcement Learning

// // knowledge.push(
// // 	{input: [1, 0], output: [1]}
// // );

// const net = new brain.recurrent.LSTM();

// // const knowledge = [
// // 	{input: [0,0], output: [0]},
// // 	{input: [0,1], output: [1]},
// // 	{input: [1,0], output: [1]},
// // 	{input: [1,1], output: [0]}
// // ];

// const knowledge = [
// 	{input:"Adam Brickhill - Cyber Security Consultant - Edith Cowan University", output:"Job Title"},
// 	{input:"Adam Brickhill Cyber Security Consultant", output:"Job Title"},
// 	{input:"ECU students Adam Brickhill", output:"Job Title"}
// ];

// // Brain Training
// net.train(knowledge);

// // const result = net.run([1,0]);

// document.getElementById('prediction').innerHTML = net.run("Adam Brickhill")+'<br>';
var net = new brain.recurrent.LSTM();
net.train([
  {input: "my unit-tests failed.", output: "software"},
  {input: "tried the program, but it was buggy.", output: "software"},
  {input: "i need a new power supply.", output: "hardware"},
  {input: "the drive has a 2TB capacity.", output: "hardware"},
  {input: "unit-tests", output: "software"},
  {input: "program", output: "software"},
  {input: "power supply", output: "hardware"},
  {input: "drive", output: "hardware"},
]);

console.log("output = "+net.run("drive"));