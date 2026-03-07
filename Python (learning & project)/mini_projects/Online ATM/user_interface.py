import streamlit as st
from atmproject import ATM  # Ensure atmproject.py contains your updated class

st.set_page_config(page_title="ATM Simulator", page_icon="💳")
st.title("💳 ATM Mini Project")

# Input fields for login
card_number = st.text_input("Enter Card Number")
pin = st.text_input("Enter PIN", type="password")

if card_number and pin:
    if 'atm' not in st.session_state:
        st.session_state.atm = ATM(card_number, pin)

    atm = st.session_state.atm

    if atm.authenticated:
        st.success("✅ Authentication successful")

        option = st.selectbox("Choose an option", ["Check Balance", "Deposit", "Withdraw"])

        if option == "Check Balance":
            if st.button("Check Balance"):
                msg = atm.check_balance()
                st.info(msg)

        elif option == "Deposit":
            dep_amount = st.number_input("Enter deposit amount", min_value=0.0, step=100.0)
            if st.button("Deposit"):
                msg = atm.deposit(dep_amount)
                st.success(msg)

        elif option == "Withdraw":
            with_amount = st.number_input("Enter withdrawal amount", min_value=0.0, step=100.0)
            if st.button("Withdraw"):
                msg = atm.withdraw(with_amount)
                if "Insufficient" in msg:
                    st.error(msg)
                else:
                    st.success(msg)

        if st.button("Logout"):
            atm.close()
            del st.session_state.atm
            st.experimental_rerun()

    else:
        st.error("❌ Authentication failed. Please check your card number and PIN.")
