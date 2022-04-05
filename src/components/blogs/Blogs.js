import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (

 <div className='m-5'>
     
   <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header> <strong>What is context API and what is its function?</strong> </Accordion.Header>
    <Accordion.Body>
     The React Context API is a way
     for a React app to effectively produce global variables that can be passed around.This is the substitute
     for moving props from main parent to child to parent <br /><br />
     React.createContext() is all you need.It returns a consumer and a provider.Provider is a component that as it 's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store.    
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header> <strong>What is a semantic tag ?</strong> </Accordion.Header>
    <Accordion.Body>
     A semantic element clearly describes its meaning to both the browser and the developer.These elements clearly define its content.In other terms, semantic tags are those tags whose names can easily
     let you know which type of content takes place in it.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    < Accordion.Header > <strong> What 's the Difference between block elements and inline elements?</strong> </Accordion.Header>
    <Accordion.Body>
     The inline and block elements of HTML are one of the important areas where web developers often get confused because they were unable to know which are inline and block elements which may cause clumsiness in a webpage in
         case he assumes some element to be a block but it is an inline element which causes next element comes next to it.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            
</div>
    );
};

export default Blogs;