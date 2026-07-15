import random
from words import eWords

def pickRandomWords(arr):
    word = arr[random.randint(0, len(arr)-1)]
    return word


def word_guessing():
    score = 0
    comp = 0
    mainKey = True
    while mainKey:

        word = pickRandomWords(eWords).lower()
        num_of_attempt = len(word) + 2
        key = True
        guess_display = ["_"] * len(word)
        guesed_words = []
        while key:
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
            if "_" not in guess_display:
                print('\n\nYou Win!')
                print(f'The word is {word}')
                score += 1
                key = False
            if num_of_attempt == 0 and "_" in guess_display:
                print(f'\n\nYou loose. The word is "{word}"')
                comp += 1
                key = False
        decision = input("Do want to play again: ")
        print(f'\n\nYour Score: {score}  Computer Score: {comp}')
        if decision.lower() == 'no':
            mainKey = False


if __name__ == '__main__':
    word_guessing()
