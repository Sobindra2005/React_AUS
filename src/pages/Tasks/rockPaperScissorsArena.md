## 01. Capture the player's choice

### Basic
- When a player clicks a choice, save it.
- Display the selected emoji in the Your Choice section.
### Hint

Use setPlayerChoice(choice) and remember that choice is an object.

## 02. Generate computer choice
- The computer must randomly choose Rock, Paper, or Scissors.
- Display its emoji in the Computer Choice section.
### Hint

Use Math.random() and Math.floor() to generate a random index from the choices array.

## 03. Determine the winner
- Rock beats Scissors.
- Scissors beats Paper.
- Paper beats Rock.
- If both choices are the same, it's a draw.
### Hint

First check whether both choices have the same name. Then use conditional statements to check the winning combinations.

## 04. Update the score
- Increase the player's score when the player wins.
- Increase the computer's score when the computer wins.
- Do not change either score for a draw.
### Hint

Use setPlayerScore() and setComputerScore(). Consider using the previous state value when updating scores.

## 05. Display game result
- Show "You Win!" when the player wins.
- Show "Computer Wins!" when the computer wins.
- Show "It's a Draw!" when both choices match.
### Hint

Use setResult() with conditional logic.

## 06. Reset the game
- Reset both scores to zero.
- Clear both player and computer choices.
- Restore the initial result message.
### Hint

Reset all five state variables to their initial values.

## Bonus challenges:
- Display a winning streak counter.
- Highlight the winner's choice with a green border.
- First player to reach 5 points wins the match.