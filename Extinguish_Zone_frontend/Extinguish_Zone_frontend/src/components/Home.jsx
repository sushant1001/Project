import React from "react";
import { Container } from "react-bootstrap";

import Footer from "./Footer";
import CardComponent from "./Card";
import Slide from "./Slide";
import NavigationBar from "./NavigationBar";

export function Home() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Container>
        <h1>
          <center>Welcome to Fire Extinguishers World.....</center>
        </h1>
      </Container>

      <Container>
        <Slide />
      </Container>

      <Container>
        <CardComponent />
      </Container>

      <Footer />
    </>
  );
}
