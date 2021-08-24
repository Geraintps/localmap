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
    <button onClick={() => this.setState({ signedin: true })}>Sign In</button>
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









ReactDOM.render(React.createElement(BottomLeft, null), document.getElementById('bottomLeftControls'));

ReactDOM.render(React.createElement(TopRight, null), document.getElementById('topRightControls'));

ReactDOM.render(React.createElement(TopLeft, null), document.getElementById('topLeftControls'));

