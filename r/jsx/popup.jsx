class Popup extends React.Component {
    constructor(props) {
      super(props);
      this.state = { popupOpen: false };
    }

  
    backgroundDim() {
      let background = document.getElementById("theMap");
      if (this.state.popupOpen) {
        background.style.opacity = "0.5";
      } else {
        background.style.opacity = "1";
      }
    }
  

    render() {
      this.backgroundDim();
      if (!this.state.popupOpen) {
        return <div>
          <button className="openPopup" onClick={() => this.setState({ popupOpen: true })}>Open Popup</button>
        </div>
      } else {
        return <div>
          <button className="openPopup" onClick={() => this.setState({ popupOpen: false })}>Close Popup</button>
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




//ReactDOM.render(React.createElement(Popup, null), document.getElementById('popupContainer'));