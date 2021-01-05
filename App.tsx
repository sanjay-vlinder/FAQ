
import React from 'react';
import Faq from './src/FAQ';


const faqData = {
heading:'FAQ',
defaultActiveKey:"1",

data:[

  {
    key:"1",
    icon:"check",
    question: 'Will my jewelry be protected under Property Insurance?',
    answer: ' Since Jewelry in itself is a significant possession, it is not covered in a standalone policy but, you can opt for the add-on (depending on your insurer) and extend your coverage to protect for your jewelry items at home too.',
  },
  {
    key:"2",
    icon:"check",
    question: 'What is the purpose of Property Insurance?',
    answer: 'this is answer',
  },
  {
    key:"3",
     icon:"check",
    question: ' Is a Property Insurance mandatory by Indian laws?',
    answer: 'this is answer',
  },
]}

const headingStyle = {
  textAlign:"center"
}

const iconStyle = {
  marginRight:"5px"
}

const containerStyle = {
  width:"80%",
  margin:"auto"
}


function App() {
  return (
    <div>
     <Faq
     faqData={faqData}
     headingStyle={headingStyle}
     iconStyle={iconStyle}
     containerStyle={containerStyle}
     accordion={true}
     bordered={true}
     />
    </div>
  );
}

export default App;
