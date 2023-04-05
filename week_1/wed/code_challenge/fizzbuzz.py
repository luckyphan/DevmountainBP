numbers = range(1, 51) 
for n in numbers:
  if (n % 3 == 0 and n % 5 == 0):
    print("fizzbuzz")
  elif (n % 3 == 0):
    print("fizz")
  elif (n % 5 == 0):
    print("buzz")
  else:
    print(n)