import React, { Component } from "react";
import PictureCard from "../components/PictureCard";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import pictures from "../pictures.json";



class Game extends Component {
  state = {
    pictures,
    score: 0,
    topScore: 0
  };
//////////////////////////////////////////////////////////////////////////////////
  handleCorrectGuess = newData => {

    const { topScore, score } = this.state;
    if (score === 11) {
      alert(`You won! 
congratulations!`)
      this.setState({
        pictures: this.resetPictures(newData),
        score: 0
      })
    } else {
      const newScore = score + 1;
      const newTopScore = Math.max(newScore, topScore);


      this.setState({
        pictures: this.shufflePictures(newData),
        score: newScore,
        topScore: newTopScore
      })
    }

  }

  handleIncorrectGuess = data => {
    alert(`Oops! You guessed wrong, your score was ${this.state.score} - try again!`)
    this.setState({
      pictures: this.resetPictures(data),
      score: 0
    })
  }
  //////////////////////////////////////////////////////////////////////////////////
  resetPictures = data => {
    const resetPics = data.map(pic => ({ ...pic, clicked: false }))
    return this.shufflePictures(resetPics);
  
  }


  //////////////////////////////////////////////////////////////////////////////////
  pictureClicked = (id) => {

    let guessedCorrectly = false;
    const newData = this.state.pictures.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData)
  };

  //////////////////////////////////////////////////////////////////////////////////
  componentDidMount() {
    this.setState({ pictures: this.shufflePictures(this.state.pictures) });
  }
  //////////////////////////////////////////////////////////////////////////////////
  shufflePictures = pictures => {
    let i = pictures.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pictures[i];
      pictures[i] = pictures[j];
      pictures[j] = temp;
      i--;
    }
    return pictures;
  };
  //////////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Title backgroundImage="http://i64.tinypic.com/f9gl00.jpg">
          <h2>Click on an image to earn points, but don't click on any of them more than once!</h2>
        </Title>
        <Container>
          <Row>
            <Col size="md-10">
              {this.state.pictures.map(picture => (
                <PictureCard
                  id={picture.id}
                  key={picture.id}
                  image={picture.image}
                  pictureClicked={this.pictureClicked}
                />
              ))}
            </Col>
          </Row>
        </Container>
        <Footer backgroundImage="http://i64.tinypic.com/f9gl00.jpg" />
      </div>
    );
  }
}

export default Game;