import pymysql  

try:
    conn = pymysql.connect(
        host="localhost",
        user="root",
        password="@Aravind2004",  # Use the actual password string here, not URL encoded       
    )
    print("Connected!")
except pymysql.MySQLError as e:
    print(f"Connection failed: {e}")
    conn = None

if conn:
    cursor = conn.cursor()
    cursor.execute("USE ATM_MINI_PROJECT")

    '''# create database 
    cursor.execute("CREATE DATABASE IF NOT EXISTS ATM_MINI_PROJECT")
    

    # Create table for user_info
    cursor.execute("DROP TABLE IF EXISTS user_info")  
    cursor.execute("""CREATE TABLE  IF NOT EXISTS user_info(
                   id INT AUTO_INCREMENT PRIMARY KEY,
                   card_number VARCHAR(20) NOT NULL UNIQUE,
                   user_name VARCHAR(50) NOT NULL,
                   pin VARCHAR(4) NOT NULL UNIQUE,
                    balance DECIMAL(10, 2) DEFAULT 0.00 
                    )
                """)

    # create table for transactions_log
    cursor.execute("""drop table if exists transactions_log""")

    cursor.execute(""" CREATE TABLE IF NOT EXISTS transactions_log(
                   card_number VARCHAR(20) NOT NULL,
                   transaction_type VARCHAR(20) NOT NULL,
                   amount DECIMAL(10, 2) NOT NULL,
                   transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                   balance DECIMAL(10, 2) DEFAULT 0.00)
                   """)
    
    # Insert multiple user rows (FIXED: use executemany)
    users = [
    ('123456789012', 'Alice', '1234', 1000.00),
    ('234567890123', 'Bob', '2345', 1200.00),
    ('345678901234', 'Charlie', '3456', 900.00),
    ('456789012345', 'David', '4567', 1500.00),
    ('567890123456', 'Eve', '5678', 2000.00)
    ]
    # Insert data
    cursor.executemany("INSERT INTO user_info (card_number, user_name, pin, balance) VALUES (%s, %s, %s, %s)", users)
    '''
    conn.commit()
    
    # Read data
    cursor.execute("SELECT * FROM user_info")
    for row in cursor.fetchall():
        print(row)

    cursor.close()
    conn.close()
