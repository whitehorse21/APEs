import faqQuestions from "../../data/faq";
import { AccordionContainer, FaqContainer, AccordionItem,
  AccordionHeader, AccordionBody } from "./accordion-styles";


const Faq = () => {
  return (
    <FaqContainer>
      <AccordionContainer>
        { faqQuestions.map((question, index) => (
          <AccordionItem key={index} eventKey={index}>
            <AccordionHeader>{question.question}</AccordionHeader>
            <AccordionBody>{question.answer}</AccordionBody>
          </AccordionItem>
        ))}
      </AccordionContainer>
    </FaqContainer>
  )
}

export default Faq;