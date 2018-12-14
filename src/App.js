import React, { Component } from 'react';
import Modal from './components/Modal';
import './App.css';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'linear-gradient(to top right, purple, pink)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'lato'
  }
};

class App extends Component {
  state = { showModal: false };
  render() {
    return (
      <div style={styles.container}>
        <Clickable onClick={() => this.setState({ showModal: true })}>
          <Title>sign up</Title>
        </Clickable>
        {this.state.showModal && (
          <Modal onClose={() => this.setState({ showModal: false })}>
            This is my signup modal
          </Modal>
        )}
      </div>
    );
  }
}

const titleStyle = {
  fontSize: 90,
  textTransform: 'uppercase',
  letterSpacing: 6
};

class Clickable extends Component {
  state = {
    hover: false,
    down: false
  };

  mouseOver = () => this.setState({ hover: true });
  mouseOut = () => this.setState({ hover: false });
  mouseDown = () => this.setState({ down: true });
  mouseUp = () => this.setState({ down: false });

  render() {
    return (
      <div
        style={{
          color: this.state.down ? 'black' : 'white',
          opacity: this.state.hover ? 0.5 : 1,
          cursor: 'pointer',
          userSelect: 'none'
        }}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        onMouseDown={this.mouseDown}
        onMouseUp={this.mouseUp}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}

const Title = ({ children }) => <div style={titleStyle}>{children}</div>;

export default App;
