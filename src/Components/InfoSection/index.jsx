import React from "react";
import { Button } from "../Navbar/NavBar.styled";
import { InfoData } from "../../Data/InfoData";
import {
  Section,
  ColumnLeft,
  ColumnRight,
  Container,
} from "./InfoSection.styled";

const InfoSection = () => {
  return (
    <Section>
      {InfoData.map((info, index) => {
        return (
          <Container key={index}>
            <ColumnLeft>
              <h1>{info.heading}</h1>
              <p>{info.paragraphOne}</p>
              <p>{info.paragraphTwo}</p>
              <Button to="/homes" primary="true">
                {info.buttonLabel}
              </Button>
            </ColumnLeft>
            <ColumnRight reverse={info.reverse}>
              <img src={info.image} alt="home" />
            </ColumnRight>
          </Container>
        );
      })}
    </Section>
  );
};

export default InfoSection;
