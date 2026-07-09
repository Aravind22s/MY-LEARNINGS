export async function fetchQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random"); //this url it randomly given 
    // instead of use this apihttps://api.adviceslip.com/advice

    if (!response.ok) {
      throw new Error("Network response failed");
    }

    const data = await response.json();

    return {
      content: data.slip.advice,
      author: "Advice API"
    };
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
