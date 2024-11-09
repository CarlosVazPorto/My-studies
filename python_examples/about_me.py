about_me = {"Name":
            "Eu",
            "Height":
            1.87,
            "Color":
            "Orange",
            "Authors":
            "Robert E. Howard, J. R. R. Tolkien, Bernard Cornwell"}

choice = input("Choose a fact about me (Name, Height, Color or Authors): ")

if choice in about_me:
    print(about_me[choice])
else:
    print("You must pick a valid option")

