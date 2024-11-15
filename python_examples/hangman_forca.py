# Jogo da forca / hangman game
# Do livro "Programador Autodidata", de Cory Althoff
# From the book "The Self-Taught Programmer", by Cory Althoff
# Novembro/2024 - November/2024
# Carlos S. V. Porto Jr.
# Python 3.13.0

def hangman(word):
    wrong = 0
    stages = ["",
              "__________          ",
              "|                   ",
              "|         |         ",
              "|         O         ",
              "|        /|\\        ",
              "|        / \\        ",
              "|                   ",
              ]
    rletters = list(word)
    board = ["_"] * len(word)
    win = False
    print("Welcome to Hangman")
    print("Bem vindo ao Jogo da Forca")

    while wrong < len(stages) - 1:
        print("\n")
        msg = "Guess a letter / Adivinhe uma letra: "
        char = input(msg)
        if char in rletters:
            cind = rletters \
                   .index(char)
            board[cind] = char
            rletters[cind] = '$'
        else:
            wrong += 1
        print((" ".join(board)))
        e = wrong + 1
        print("\n"
              .join(stages[0: e]))
        if "_" not in board:
            print("\nYou win! Você venceu!")
            print(" ".join(board))
            win = True
            break

    if not win:
            print("\n"
                  .join(stages[0: \
                               wrong]))
            print("\nYou lose! Você perdeu!")
            print("It was... A palvra era... {}."
                  .format(word))

hangman("cat")

