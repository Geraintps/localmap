class TopLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', signedin: false };
  }

  render() {
    if (this.state.signedin) {
      return <div className="topLeft">
        <label>Signed In</label>
        <button>?</button>
        <button>+</button>
        <button>🏠</button>
        <br></br>
        <input></input>
      </div>
    }
    return <div className="topLeft">
    <button onClick={() => this.setState({ signedin: true})}>Sign In</button>
    <button>?</button>
    <button>+</button>
    <button>🏠</button>
    <br></br>
    <input></input>
  </div>
  }
}

class TopRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
  }

  render() {
    return <div className="topRight">
      <button>+</button>
      <button>-</button>
    </div>
  }
}

class BottomLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', translated: false };
  }

  render() {
    if (this.state.translated) {
      return <div className="bottomLeft">
        <input></input>
        <button>Tags</button>
        <button>New!</button>
        <button onClick={() => this.setState({ translated: false})}>English</button>
      </div>
    }
    return <div className="bottomLeft">
    <input></input>
    <button>Tags</button>
    <button>New!</button>
    <button onClick={() => this.setState({ translated: true})}>Cymraeg</button>
  </div>
  }
}

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { popupOpen: false };
  }

  backgroundDim() {
    let background = document.getElementById("image");
    if (this.state.popupOpen) {
      background.style.opacity = "0.5";
    } else {
      background.style.opacity = "1";
    }
  }

  render() {
    this.backgroundDim();
    if (!this.state.popupOpen) {
      return <div className="popupButton">
        <button onClick={() => this.setState({ popupOpen: true })}>Open Popup</button>
      </div>
    } else {
      return <div className="popupButton">
        <button onClick={() => this.setState({ popupOpen: false })}>Close Popup</button>
        <div className="popupBox">
          <button className="tags">Animals</button>
          <button className="tags">Plants</button>
          <button className="tags">Rocks</button>
          <button className="tags">People</button>
          <button className="tags">Weather</button>
          <button className="tags">Me</button>
          <button onClick={() => this.setState({ popupOpen: false })} className="closePopup">X</button>
          <label>Username</label>
          <br></br>
          <br></br>
          <input className="title" placeholder="Title"></input>
          <br></br>
          <br></br>
          <input className="description" placeholder="Description"></input>
        </div>
      </div>
    }
  }
}








ReactDOM.render(React.createElement(BottomLeft, null), document.getElementById('bottomLeftControls'));

ReactDOM.render(React.createElement(TopRight, null), document.getElementById('topRightControls'));

ReactDOM.render(React.createElement(TopLeft, null), document.getElementById('topLeftControls'));

ReactDOM.render(React.createElement(Popup, null), document.getElementById('popupContainer'));