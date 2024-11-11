import csv

movies_list = [["Top Gun", "Risky Business", "Minority Report"],
               ["Titanic", "The Revenant", "Inception"],
               ["Training Day", "Man on Fire", "Flight"]]

with open("movies.csv", "w", newline='') as m:
    w = csv.writer(m, delimiter=",")
    for row in range(len(movies_list)):
        w.writerow(movies_list[row])

with open("movies.csv", "r") as m:
    r = csv.reader(m, delimiter=",")
    for row in r:
        print(", ".join(row))

