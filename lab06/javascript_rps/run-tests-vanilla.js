import { helloWorld, rps } from "./your-task.js";
import { assertPrint, runAllTests } from "./helpers.js";

function testHelloWorld() {
    return assertPrint(
        helloWorld() === "Hello world!",
        'it returns "Hello world!"',
    );
}

function testPaperBeatsRock() {
    return assertPrint(
        rps("rock", "paper") === "Paper wins!", "paper beats rock",
    );
}

function testPaperBeatsRockCommutes() {
    return assertPrint(
        rps("paper", "rock") === "Paper wins!", "paper beats rock",
    );
}

// add more test functions here to exhaustively test your rps function...

function testRockBeatsScissors() {
    return assertPrint(
        rps("rock", "scissors") === "Rock wins!", "rock beats scissors",
    );
}

function testScissorsBeatsPaper() {
    return assertPrint(
        rps("scissors", "paper") === "Scissors wins!", "scissors beats paper",
    );
}

function testTieWithRock() {
    return assertPrint(rps("rock", "rock") === "It's a tie!", "rock ties with rock");
}

function testTieWithPaper() {
    return assertPrint(rps("paper", "paper") === "It's a tie!", "paper ties with paper");
}

function testTieWithScissors() {
    return assertPrint(rps("scissors", "scissors") === "It's a tie!", "scissors ties with scissors");
}

function testInvalidInput() {
    return assertPrint(rps("rock", "car") === "Invalid");
}

// Once you have defined each test function, don't forget to
// add the function definition to the test harness:
runAllTests([
    testHelloWorld,
    testPaperBeatsRock,
    testPaperBeatsRockCommutes,
    testRockBeatsScissors,
    testScissorsBeatsPaper,
    testTieWithRock,
    testTieWithPaper,
    testTieWithScissors,
    testInvalidInput,
]);
