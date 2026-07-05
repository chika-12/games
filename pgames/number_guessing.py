import random
secret = random.randint(0, 100)
key = True
num_of_attempt = 6
while key:
    num = int(input("Guess the secret num: "))

    if num > secret:
        print('Too high')
    if num < secret:
        print('Too low')
    if num == secret:
        print('Correct you win')
        key = False
    if num_of_attempt == 1:
        print(f'You loose! the number is {secret}')
        key = False
    num_of_attempt -= 1
    print(f'number of attempts left is {num_of_attempt}')


