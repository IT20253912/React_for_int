import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from 'styled-components';

const Contact = () => {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    const datafetching = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      const data = await res.json();

      if (data) {
        console.log(data);
        setMainData(data);
      }
    };

    datafetching();
  }, []);


  return (
    <ContactContainer>
      <h1>Contact page</h1>
      <ContactBlock>
        {mainData?.map(({ id, title }) => (
          <Link to={`/contact/${id}`} key={id}>
            <ContactBlockUnit>
              <h3>{title}</h3>
            </ContactBlockUnit>
          </Link>
        ))}
      </ContactBlock>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.main`
    background-color:yellow;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContactBlock = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: auto;
    gap: 25px;
`;

const ContactBlockUnit = styled.div`
    padding: 20px;
    border-radius: 7px;
    background-color: #FFB07F;
    border: 2px solid #FFB07F;
    transition: all 400ms ease-in;

    &:hover{
        background-color: inherit;
    }

`;
