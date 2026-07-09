import pandas as pd
import joblib
from google import genai
from google.genai import types
import markdown
from IPython.display import HTML, display
import os
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(api_key=os.getenv("Gemini_api_key"))

model = joblib.load('cluster_model.pkl')
scaler = joblib.load('Cluster_scaler.pkl')

customer_details = {
    "Channel": int(input("Enter Channel (1 or 2): ")),
    "Region": int(input("Enter Region (1, 2, or 3): ")),
    "Fresh": float(input("Enter Fresh amount: ")),
    "Milk": float(input("Enter Milk amount: ")),
    "Grocery": float(input("Enter Grocery amount: ")),
    "Frozen": float(input("Enter Frozen amount: ")),
    "Detergents_Paper": float(input("Enter Detergents_Paper amount: ")),
    "Delicassen": float(input("Enter Delicassen amount: "))
}

new_customer = pd.DataFrame([customer_details])
new_customer_scaled = scaler.transform(new_customer)
cluster = model.predict(new_customer_scaled)[0]
print(f"cluster:{cluster}")

cluster_labels = {
    0: "Medium",
    1: "Poor",
    2: "Rich"
}
customer_category = cluster_labels[cluster]
print(f"customer category:{customer_category}")



def get_response(prompt, model="gemini-3.1-flash-lite"):
    response = client.models.generate_content(
        model=model,
        contents=prompt,
        config=types.GenerateContentConfig(
            thinking_config=types.ThinkingConfig(thinking_level="high"),
            temperature=0.2
        )
    )
    return response.text

prompt = f"""
you are expert in finanical advising.

customer details: {customer_details}

cusromer category: {customer_category}

Provide:
    1. Financial status analysis
    2. Spending behavior insights
    3. Savings recommendations
    4. Investment suggestions
    5. Risk level
    6. Future financial improvement plan

Give the response in bullet points.
"""

html_content = markdown.markdown(get_response(prompt))
with open("financial_report.html", "w", encoding="utf-8") as file:
    file.write(html_content)

print("Report saved as financial_report.html")