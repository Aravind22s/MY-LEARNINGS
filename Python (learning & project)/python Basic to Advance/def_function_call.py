def info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")
        if key == "name":
            print(f"Hello, {value}!")
        if key == "age":
            print(f"You are {value} years old.")
            if isinstance(value, int) and value > 18:
                print("You are an adult.")
                print("You can vote.")
            else:
                print("You are a minor.")



