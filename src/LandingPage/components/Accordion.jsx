import React, { useState } from "react";
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:mb-2 mb-2 lg:mx-0 mx-2 h-relative"> {/* Reduced bottom margin */}
      <div
        className="flex justify-center items-center p-2 cursor-pointer bg-[#3c4043]"
        onClick={toggleAccordion}
      >
        <div className="flex-grow text-lg text-center bg-[#3c4043] font-semibold text-white">
          {title}
        </div>
        {isOpen ? (
          <MdArrowDropDown className=" ml-2" size={36} />
        ) : (
          <MdArrowRight className="ml-2" size={36} />
        )}
      </div>
      {isOpen && (
        <>
          <div className="bg-[#3c4043] p-1 mb-2"> {/* Removed top and bottom margin */}
            <p className="text-white bg-[#3c4043] text-center">{content}</p>
          </div>
        </>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="w-full flex flex-col justify-start max-w-2xl mx-auto mt-6">
      <AccordionItem
        title="How does the AI-powered app assist in solving consumer court cases?"
        content="The app uses advanced AI algorithms to analyze case details, identify legal precedents, and provide guidance on how to proceed. It can help users draft complaints, gather necessary evidence, and even estimate the potential outcomes based on previous cases."
      />
      <AccordionItem
        title="Is the AI legally qualified to provide accurate advice?"
        content="While the AI offers data-driven insights based on historical cases and legal frameworks, it should be used as a supplementary tool. Users are advised to consult a qualified lawyer for complex legal matters. The AI is not a substitute for professional legal advice."
      />
      <AccordionItem
        title="Can the app represent me in court?"
        content=" No, the app cannot represent you in court. However, it can assist in preparing legal documents, provide guidance on court procedures, and help you understand the strengths and weaknesses of your case."
      />
      <AccordionItem
        title="What types of consumer cases can the app handle?"
        content=" The app is designed to handle a wide range of consumer complaints, including product defects, unfair trade practices, fraudulent transactions, delayed services, and warranty issues. It can assist in both small and complex consumer disputes."
      />
      <AccordionItem
        title="Is my personal information safe and secure with the app?"
        content="Yes, the app takes data privacy seriously and uses encryption and secure servers to protect your personal and case-related information. Your data will not be shared with third parties without your consent."
      />
      <AccordionItem
        title="How long does it take to get a response or resolution through the app?"
        content="The time frame varies depending on the complexity of the case. For simple queries and document preparation, the AI can provide assistance in minutes. For more detailed legal analysis, it may take longer, but the app aims to expedite the process compared to traditional methods."
      />
    </div>
  );
};

export default Accordion;
