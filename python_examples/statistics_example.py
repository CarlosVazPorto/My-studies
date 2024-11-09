import statistics

nums = [1, 5, 33, 12, 46, 33, 2]

print("Uso de algumas funções do módulo statistics")
print("-------------------------------------------")
print("Para a seguinte lista: ")
print(nums)
print("Temos que: ")

# mean / média
nums_mean = statistics.mean(nums)
print(f"A média é {nums_mean}.")

# median / mediana
nums_median = statistics.median(nums)
print(f"A mediana é {nums_median}.")

# mode / moda

nums_mode = statistics.mode(nums)
print(f"A moda é {nums_mode}.")


