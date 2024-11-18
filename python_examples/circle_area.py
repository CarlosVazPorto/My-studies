from math import pi

class Circle():
    def __init__(self, radius):
        self.radius = radius

    def circle_area(self):
        return pi * (self.radius ** 2)

circle1 = Circle(25)
print(circle1.circle_area())

circle2 = Circle(30)
print(circle2.circle_area())

circle3 = Circle(35)
print(circle3.circle_area())

