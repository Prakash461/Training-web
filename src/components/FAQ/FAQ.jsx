import React from "react";

const faqData = [
  {
    question: "What services does Pulseberry Health Consulting offer?",
    answer:
      "We provide food safety auditing, HACCP certification, food hygiene training, and comprehensive health and safety consultancy.",
  },
  {
    question: " Where is Pulseberry Health Consulting located?",
    answer:
      "We are an international firm headquartered in Dubai, serving clients globally.",
  },
  {
    question: "Do you offer training programs?",
    answer:
      "Yes, we offer food hygiene training and customized health and safety training sessions.",
  },
  {
    question: "How can I get certified with HACCP through Pulseberry?",
    answer: "We guide you through the HACCP certification process with audits, training, and expert consultancy.",
  },
];
const FAQ = () => {
  const [active, setActive] = React.useState(null);
  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };
  return (
    <div className="max-w-2xl mx-auto mt-20 mb-28 px-8">
      <h1 className="text-3xl font-bold text-center pb-8">
        Frequently Asked Questions
      </h1>

      {faqData.map((item, index) => (
        <div key={index} className="mb-4 py-4 border-b border-gray-300 ">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.question}
            </h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>

          {active === index && <p className="text-gray-600">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
