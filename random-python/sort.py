# this is a thing that sorts a list

sort = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "@", "!", "#", "$", "%", "^", "&", "*", "(", ")",]

print(sorted(sort))

sort = []

for i in range(len(input(""))):
    sort.insert(i, input("give me a word to add to the sorted list: "))

print(sorted(sort))