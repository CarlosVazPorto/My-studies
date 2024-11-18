class Triangle():
    def __init__(self, base, height):
        self.base = base
        self.height = height
    def triangle_area(self):
        return (self.base * self.height) / 2

triangle1 = Triangle(3, 5)
print(triangle1.triangle_area())

triangle2 = Triangle(3, 4)
print(triangle2.triangle_area())
