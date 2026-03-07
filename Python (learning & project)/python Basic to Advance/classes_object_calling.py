class Student:
    def __init__(self, name, roll, grade, password):
        self.name = name                # Public attribute
        self._grade = grade             # Protected attribute
        self.__password = password      # Private attribute
        self.roll = roll                # Public attribute

    def display_public_info(self):
        print(f"Name: {self.name}, Roll No: {self.roll}")

    def display_protected_info(self):
        print(f"Grade (protected): {self._grade}")

    def __display_private_info(self):
        print(f"[Private] Password: {self.__password}")

    def access_private_info(self):
        print("Accessing private info safely:")
        self.__display_private_info()