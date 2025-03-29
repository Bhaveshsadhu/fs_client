import React, { useEffect, useState } from "react";
const financialTips = [
  {
    quote:
      "Do not save what is left after spending, but spend what is left after saving.",
    author: "Warren Buffett",
    tip: "Prioritize saving before spending to build long-term wealth.",
  },
  {
    quote:
      "A big part of financial freedom is having your heart and mind free from worry about the what-ifs of life.",
    author: "Suze Orman",
    tip: "Build an emergency fund to reduce financial stress.",
  },
  {
    quote: "The goal isn’t more money. The goal is living life on your terms.",
    author: "Chris Brogan",
    tip: "Define your financial goals based on your personal values, not just income.",
  },
  {
    quote: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
    tip: "Continuously educate yourself about money and investing.",
  },
  {
    quote:
      "The four most dangerous words in investing are: ‘this time it’s different.’",
    author: "Sir John Templeton",
    tip: "Stick to proven investment strategies; avoid emotional decisions.",
  },
  {
    quote:
      "It's not your salary that makes you rich, it’s your spending habits.",
    author: "Charles A. Jaffe",
    tip: "Develop good spending habits regardless of your income.",
  },
  {
    quote: "Know what you own, and know why you own it.",
    author: "Peter Lynch",
    tip: "Understand your investments instead of blindly following trends.",
  },
  {
    quote: "Risk comes from not knowing what you’re doing.",
    author: "Warren Buffett",
    tip: "Research thoroughly before making financial decisions.",
  },
  {
    quote: "If you live for having it all, what you have is never enough.",
    author: "Vicki Robin",
    tip: "Practice mindful spending to avoid lifestyle inflation.",
  },
  {
    quote:
      "Financial peace isn’t the acquisition of stuff. It’s learning to live on less than you make.",
    author: "Dave Ramsey",
    tip: "Avoid debt and live within your means to achieve financial peace.",
  },
];

export const FinanceQuotes = () => {
  const [showQuotes, setShowQuotes] = useState(financialTips[0]);
  const { quote, author, tip } = showQuotes;

  useEffect(() => {
    setInterval(() => {
      setShowQuotes(
        financialTips[Math.floor(Math.random() * setShowQuotes.length)]
      );
    }, 3000);
  }, []);
  return (
    <div>
      <h4>{tip}</h4>
      <div className="fw-bolder">
        "{quote}" <br></br>-{author}
      </div>
    </div>
  );
};
