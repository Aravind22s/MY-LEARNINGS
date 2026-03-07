card_number = input("Enter card Number: ")
pin = input("Enter pin number: ")
option = input("Choose an option: check_balance, deposit, withdraw: ").strip().lower()

class ATM:
    authenticate = { '123456789012':'123',
                    '234567890123':'234'}  
    def __init__(self, card_number, pin,balance=0):
        self.__card_number = card_number
        self.__pin = pin
        self.__balance = balance

        if self.__card_number in ATM.authenticate and self.__pin == ATM.authenticate[self.__card_number]:
            print("Authentication successful.")
        else:
            print("Authentication failed. Invalid card number or PIN.")

    # Method to check balance
    # This method checks if the card number is authenticated before displaying the balance
    def check_balance(self):
        if self.__card_number in ATM.authenticate:
            amount = self.__balance  
            print(f"Current Balance: {amount}")

    # Method to deposit money
    # This method checks if the card number is authenticated before allowing deposit
    def deposit(self, dep_amount,):
        if self.__card_number in ATM.authenticate:
            self.__balance += dep_amount  
            print(f"\nDeposited: {dep_amount}")
            print(f"New Balance: {self.__balance}")

    # Method to withdraw money
    # This method checks if the card number is authenticated before allowing withdrawal    
    def withdraw(self, with_amount):
        if self.__card_number in ATM.authenticate:
            self.__balance -= with_amount
            print(f"\nWithdrawn: {with_amount}")
            print(f"New Balance: {self.__balance}")
        

atm = ATM(card_number, pin)  

option1 = None  # Initialize option1 to avoid NameError

if option == "check_balance":
    atm.check_balance()
    check = input("Are you want to deposit/withdraw? (yes/no): ").strip().lower()
    if check == "yes":
        option1 = input("Enter next option (deposit/withdraw): ").strip().lower()
if option == "deposit" or option1 == "deposit":
    dep_amount = float(input("Enter amount to deposit: "))
    atm.deposit(dep_amount)
elif option == "withdraw" or option1 == "withdraw":
    with_amount = float(input("Enter amount to withdraw: "))
    atm.withdraw(with_amount)

