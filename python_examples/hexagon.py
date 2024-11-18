from math import sqrt

class RegularHexagon():
    def __init__(self, length):
        self.length = length

    def calculate_perimeter(self):
        return self.length * 6

    def calculate_area(self):
        return (3 * (self.length ** 2) * sqrt(3)) / 2

hexagon1 = RegularHexagon(6)
print("Perimeter: " + str(hexagon1.calculate_perimeter()))
print("Area: " + str(hexagon1.calculate_area()))

hexagon2 = RegularHexagon(10)
print("Perimeter: " + str(hexagon2.calculate_perimeter()))
print("Area: " + str(hexagon2.calculate_area()))
