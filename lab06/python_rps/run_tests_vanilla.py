"""
Run these tests from the CLI (from within the python_rps directory)
as follows:

    python3 run_tests_vanilla.py

"""

from helpers import assert_print, run_all_tests
from your_task import hello_world, rps


def test_hello_world():
    return assert_print(hello_world() == "Hello world!", 'It returns "Hello world!"')


def test_paper_beats_rock():
    return assert_print(rps("rock", "paper") == "Paper wins!", "Paper beats rock")


def test_paper_beats_rock_flipped():
    return assert_print(
        rps("paper", "rock") == "Paper wins!", "Paper beats rock"
    )
def test_scissors_beats_paper():
    return assert_print(rps("paper", "scissors") == "Scissors wins!", "Scissors beats paper")

def test_scissors_beats_paper_flipped():
    return assert_print(
        rps("scissors", "paper") == "Scissors wins!", "Scissors beats paper"
    )
def test_rock_beats_scissors():
    return assert_print(rps("rock", "scissors") == "Rock wins!", "Rock beats scissors")

def test_rock_beats_scissors_flipped():
    return assert_print(
        rps("scissors", "rock") == "Rock wins!", "Rock beats scissors"
    )
def test_tie_with_rock():
    return assert_print(rps("rock", "rock") == "Tie!")

def test_tie_with_paper():
    return assert_print(rps("paper", "paper") == "Tie!")

def test_tie_with_scissors():
    return assert_print(rps("scissors", "scissors") == "Tie!")

def test_invalid_input():
    return assert_print(rps("rock", "car") == "Invalid")

# don't forget to add any new tests to the list of tests to be run:
run_all_tests([test_hello_world,
    test_paper_beats_rock,
    test_paper_beats_rock_flipped,
    test_scissors_beats_paper,
    test_scissors_beats_paper_flipped,
    test_rock_beats_scissors,
    test_rock_beats_scissors_flipped,
    test_tie_with_rock,
    test_tie_with_paper,
    test_tie_with_scissors,
    test_invalid_input])
