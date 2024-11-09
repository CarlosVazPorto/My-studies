import random

while True:
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    n = random.randint(1, 10)
    guess = int(input("Guess a number (0 to 10): "))
    if guess == n:
        print("Bravo! You're right")
    else:
        print("Nope... Try again!")

    quits = input("Quit game? y or n: ")
    if quits == "y":
        break
