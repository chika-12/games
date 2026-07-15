
def check_guess(guess):
    print(" ".join(guess_display))
    guess = input("Guess a letter in this word: ").lower()
    if len(guess) <= 0:
        print('Please enter a letter')
        continue
    if guess in guesed_words:
        print('\n\n\nYou have guessed this letter before')
        continue
    if len(guess) > 1:
        print("Please Enter a letter not a word")
        continue
    if guess in word:
        for i, char in enumerate(word):
            if char == guess:
                guess_display[i] = guess
                print('\n\n')
            else:
                print(f'\n\nWrong!')
                num_of_attempt -= 1
                print(f'You have {num_of_attempt} attemps left')
    guesed_words.append(guess)


