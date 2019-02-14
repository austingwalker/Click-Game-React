import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import pictures from "./pictures.json";
import "./App.css";

class App extends Component {
  state = {
    pictures,
    count: 0
  };

  countPicture = () => {

    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count)
  };


  render() {
    return (
      <div>
        <Navbar />
        <Title backgroundImage="http://i64.tinypic.com/f9gl00.jpg">
          
          <h2>Click on an image to earn points, but don't click on any of them more than once!</h2>
        </Title>
        
          <Container>
           <Row>
             <Col size="md-10">
                {this.state.pictures.map(picture => (
                  <PictureCard
                    countPicture={() => this.countPicture()}
                    id={picture.id}
                    key={picture.id}
                    image={picture.image}
                  />
                ))}
                </Col>
            </Row>
          </Container>
        
        <Footer />
      </div>
    );
  }
}

export default App;
