qs = ["What is your name? ",
      "What is your favorite color? ",
      "What is your quest? "]
n = 0
while True:
    print("Type q to quit")
    a = input(qs[n])
    if a == "q":
        break
    n = (n+1) % 3

