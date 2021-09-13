/*class TopLeft extends React.Component {
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
}*/

class TheMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return <h2>
      <br />
      <br /><span id="loadingMapStatus">Loading the map...</span>
    </h2>
  }

}

class TopLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openIndex: true };
    this.openSideIndex = this.openSideIndex.bind(this);
    this.closeSideIndex = this.closeSideIndex.bind(this);
    updateIndexState = updateIndexState.bind(this);
  }
  
  openSideIndex() {
    this.setState({ openIndex: true })
  }
  closeSideIndex() {
    this.setState({ openIndex: false })
  }

  render() {
    if(this.state.openIndex){
    return <div>
      <div id="loosePicsShow"></div>
      
      <div id='topMessage' className='noselect' style={{visibility: "hidden"}}></div>
        <div id="target" className="target" style={{pointerEvents:"none"}}
            title="Position a place under here then click the button on the right to add notes">
            <div className="noselect" style={{position:"relative", top:10}}>^</div>
        </div>

        <a href="#" target="_blank" id="fullWindowButton" style={{display:"none"}} onClick={frameBreakout}><img
                className="panelButton" title="full window" src="img/expand.png" /></a>
        
        <div id="infowindow-content">
            <span id="place-name" className="title"></span><br />
            <strong>Place ID</strong>: <span id="place-id"></span><br />
            <span id="place-address"></span>
        </div>

        <div id="groupSelectorBox"></div>
        <div id="indexSidebar"style={{display:"block"}}></div>
        <div id="indexFlag" style={{display:"none"}}>
            <div onClick={this.closeSideIndex}>&gt;</div>
        </div>

        <div id="NLScredit">Historical maps: <a href="https://maps.nls.uk/" target="_blank">National Library of Scotland</a></div>

    </div>
    } else {
      return <div>
      <div id="loosePicsShow"></div>
      
      <div id='topMessage' className='noselect' style={{visibility: "hidden"}}></div>
        <div id="target" className="target" style={{pointerEvents:"none"}}
            title="Position a place under here then click the button on the right to add notes">
            <div className="noselect" style={{position:"relative", top:10}}>^</div>
        </div>

        <a href="#" target="_blank" id="fullWindowButton" style={{display:"none"}} onClick={frameBreakout}><img
                className="panelButton" title="full window" src="img/expand.png" /></a>
        
        <div id="infowindow-content">
            <span id="place-name" className="title"></span><br />
            <strong>Place ID</strong>: <span id="place-id"></span><br />
            <span id="place-address"></span>
        </div>

        <div id="groupSelectorBox"></div>
        <div id="indexSidebar" style={{marginLeft:"-98%"}}></div>
        <div id="indexFlag" style={{display:"block"}}>
            <div onClick={this.openSideIndex}>&gt;</div>
        </div>

        <div id="NLScredit">Historical maps: <a href="https://maps.nls.uk/" target="_blank">National Library of Scotland</a></div>

    </div>
    }
  }

}











//ReactDOM.render(React.createElement(BottomLeft, null), document.getElementById('bottomLeftControls'));

//ReactDOM.render(React.createElement(TopRight, null), document.getElementById('topRightControls'));

//ReactDOM.render(React.createElement(TopLeft, null), document.getElementById('topLeftControls'));

ReactDOM.render(React.createElement(TheMap, null), document.getElementById('theMap'));
ReactDOM.render(React.createElement(TopLayer, null), document.getElementById('topLayer'));





