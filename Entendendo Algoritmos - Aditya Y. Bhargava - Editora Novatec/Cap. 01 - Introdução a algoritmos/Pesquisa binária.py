# Programa Python para pesquisa binária
# Do livro "Entendendo Algoritmos", de Aditya Y. Bhargava, Novatec Editora , 2017
# Carlos S. V. Porto Jr.
# Março de 2024

# Define a função de busca binária
def pesquisa_binaria(lista, item):
# As variáveis baixo e alto acompanham a parte da lista que estamos procurando
    baixo = 0
    alto = len(lista) - 1

# Loop while que, enquanto ainda não chega a um único elemento...
    while baixo <= alto:
# ... verifica o elemento central da array
        meio = (baixo + alto) / 2
        palpite = lista[meio]
# Se achar o item
        if palpite == item:
            return meio
# Se o palpite foi muito alto
        if palpite > item:
            alto = meio - 1
# Se o palpite foi muito baixo
        else:
            baixo = meio + 1
# Se o item pesquisado não existir
    return None

# Declara array com números a ser pesquisados
minha_lista = [1, 3, 5, 7, 9]

# Testando...
print(pesquisa_binaria(minha_lista, 3))
print(pesquisa_binaria(minha_lista, -1))
