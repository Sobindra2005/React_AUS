# Your task: Complete the Memory Match game using React's useState hook.

The game should allow players to flip two cards at a time. If both cards have the same value, they should remain visible. Otherwise, they should be hidden again.

## Requirements and hints

### 01. Flip a card

**Basic**

- When a player clicks a card, reveal its emoji.
- Clicking an already flipped or matched card should do nothing.

**Hint**

Check whether the card ID already exists in flippedCards or matchedCards. Use setFlippedCards() to update the array.

### 02. Allow only two cards at a time

- Players should not be able to flip more than two unmatched cards.
- Increase the moves counter when the second card is flipped.

**Hint**

Check the length of flippedCards before adding another card. Use setMoves() to update the counter.

### 03. Match the cards

- Compare the values of the two flipped cards.
- If they match, add both IDs to matchedCards.
- Matched cards should remain visible.

**Hint**

Use cards.find() to retrieve a card using its ID and compare their value properties.

### 04. Hide unmatched cards

- If the two cards don't match, hide them again.
- Reset the flipped cards so the player can continue.

**Hint**

Use setFlippedCards([]) to clear the selection. For an extra challenge, implement a short delay using setTimeout.

### 05. Restart the game

- Reset the moves counter.
- Hide all cards.
- Remove all matched cards.

**Hint**

Reset all three state variables to their initial values.

**Bonus challenge:** Shuffle the cards whenever the player clicks Restart.