import sys

name = sys.argv[1] 

# Check if the name argument is provided because sys.argv[0] is the script name
if len(sys.argv) == 1 :
    print("Usage: python email_creation.py <name>")
    sys.exit(1)

email = name.lower() + "@example.com"
print(f"Generated email: {email}")