import pymysql

class ATM:
    def __init__(self, card_number, pin):
        self.conn = pymysql.connect(
            host="localhost",
            user="root",
            password="@Aravind2004",
            database="ATM_MINI_PROJECT"
        )
        self.cursor = self.conn.cursor()
        self.__card_number = card_number
        self.__pin = pin
        self.__balance = None
        self.authenticated = False

        # Authenticate
        self.cursor.execute(
            "SELECT balance FROM user_info WHERE card_number=%s AND pin=%s",
            (card_number, pin)
        )
        result = self.cursor.fetchone()
        if result:
            self.__balance = float(result[0])
            self.authenticated = True
        else:
            self.authenticated = False

    def check_balance(self):
        if not self.authenticated:
            return "Authentication failed."
        return f"Current Balance: ₹{self.__balance:.2f}"

    def deposit(self, amount):
        if not self.authenticated:
            return "Authentication failed."
        self.__balance += amount
        self.cursor.execute(
            "UPDATE user_info SET balance=%s WHERE card_number=%s",
            (self.__balance, self.__card_number)
        )
        self.cursor.execute(
            "INSERT INTO transactions_log (card_number, transaction_type, amount, balance) VALUES (%s, %s, %s, %s)",
            (self.__card_number, "Deposit", amount, self.__balance)
        )
        self.conn.commit()
        return f"Deposited ₹{amount:.2f}. New balance: ₹{self.__balance:.2f}"

    def withdraw(self, amount):
        if not self.authenticated:
            return "Authentication failed."
        if amount > self.__balance:
            return "Insufficient balance."
        self.__balance -= amount
        self.cursor.execute(
            "UPDATE user_info SET balance=%s WHERE card_number=%s",
            (self.__balance, self.__card_number)
        )
        self.cursor.execute(
            "INSERT INTO transactions_log (card_number, transaction_type, amount, balance) VALUES (%s, %s, %s, %s)",
            (self.__card_number, "Withdraw", amount, self.__balance)
        )
        self.conn.commit()
        return f"Withdrew ₹{amount:.2f}. New balance: ₹{self.__balance:.2f}"

    def close(self):
        self.cursor.close()
        self.conn.close()
