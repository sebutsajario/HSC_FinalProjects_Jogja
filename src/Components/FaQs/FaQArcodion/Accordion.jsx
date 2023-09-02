import React, { useState } from 'react'
import './accordion.css'

const Accordion = ({ question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
      setIsExpanded(!isExpanded);
    };
    return (
        <div className="accordion">
            <div className="accordion-header gap-1" onClick={toggleAccordion}>
                <h3 className={`font-Lora
                    md:text-lg
                    lg:font-semibold
                    ${isExpanded ? 'font-bold' : ''}`}>
                    {question}
                </h3>
                <span className={`arrow ${isExpanded ? 'expanded' : ''}`}>
                    <ion-icon name="caret-down-outline"></ion-icon>
                </span>
            </div>
            {isExpanded && (
                <div className="accordion-content font-Poppins">
                {answer}
                </div>
            )}
        </div>

    )
}

export default Accordion
