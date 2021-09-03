class Popup extends TopLayer {
  constructor(props) {
      super(props);
      this.state = {};
  }
 


  render() {
      return <div id="popup" className="floatingPopup">
      <div id="popuptextgroup">
      <div></div>
            <div id="groupEditorBox"></div>
            <div id="toolBar1">
                <div className="toolbutton" onClick={() => this.formatDoc('formatblock','h4')} id="toolHead" title="Sub heading">
                    H
                </div>
                <div className="toolbutton" onClick={() => this.formatDoc('formatblock','div')} id="toolPara"
                    title="Plain paragraph">¶</div>
                <div id="welshKeys" style={{display:"inline-block"}}>
                    <div className="toolbutton" onClick={() => this.formatDoc('InsertText','â')}>â</div>
                    <div className="toolbutton" onClick={() => this.formatDoc('InsertText','ê')}>ê</div>
                    <div className="toolbutton" onClick={() => this.formatDoc('InsertText','î')}>î</div>
                    <div className="toolbutton" onClick={() => this.formatDoc('InsertText','ô')}>ô</div>
                    <div className="toolbutton" onClick={() => this.formatDoc('InsertText','û')}>û</div>
                    <div className="toolbutton" onClick={() => this.formatDoc('InsertText','ŵ')}>ŵ</div>
                    <div className="toolbutton" onClick={() => this.formatDoc('InsertText','ŷ')}>ŷ</div>
                </div>
                <div className="toolbutton" onClick={onCreateLink} id="insertLinkButton" title="Insert link"><img
                        src="/localmap/img/link.png" width="18px" height="18px"/></div>
                <div id="popupTimestampTextBox" className="toolbutton"
                    style={{position:"absolute", right:0, backgroundColor:"rgba(0,0,0,0)", color:"black"}}></div>
            </div>
            <div className="popupTextBox">
                <div id="editorTitleDescriptionPrompt" className="popupTextTopLine">TITLE<br /><br />DESCRIPTION
                </div>
                <div className="popupcontent">
                    <div id="popuptext" contentEditable="true" onClick={event.stopPropagation}>
                    </div>
                    <div id="popupComments"></div>
                </div>
            </div>
            <div id="picturebar" className="picturebar">
                <span id="picPrompt">Add pictures &gt;</span>
                <div id="thumbnails"></div>
                
                <div className="panelButton addButton " id="addPicToPlaceButton"
                    onClick={this.addPicToPlaceButton}
                    title="Add photos, sound files or videos to this note">+</div>
                
                <input id="uploadToPlaceButton" style={{display:"none", opacity: 0}}
                    onChange={this.uploadPlaceToButton} type="file" title="upload"
                    name="uploadToPlaceButton" multiple />
                <div id="voiceRecorder" className="panelButton addButton " onClick={showVoiceRecorder}
                    title="Voice recorder"><img src="/localmap/img/recorder.png" height="25px" style={{padding: 3}} /></div>
                <div id="getLinkButton" className="panelButton addButton "
                    onClick={this.getLinkButton} title="Share a link to this place">
                    <img src="/localmap/img/getlink.png" />
                </div>
                <div id="editorHelpButton" className="panelButton addButton " onClick={showEditorHelp} title="Help">?
                </div>
            </div>
      </div>

      <div id="tags"> </div>
      <div id="author"> </div>
      <div id="popclose" onClick={closePopup}>X</div>

      <div id="recorderPopup">
      </div>

      <div id="editorHelp">
            <div id="editorHelpContent">
                <p id="eh1">Type a title and notes related to this place.You need at least the first line, which is
                    the
                    title. </p>
                <p id="eh2">Select one or more coloured tags to show roughly what this is about.</p>
                <p id="eh3">Add pictures, sound files, or other files. The pictures will play in sequence like a
                    slide show. Drag a thumbnail to change the sequence. Right-click/long-touch a picture to give it
                    a title.
                    To have a sound file play while the slides change, upload the file here.</p>
                <p id="eh4">To synchronise sounds and pictures, use a sound app to snip the sound file into separate
                    parts for each picture.
                    Right-click/long-touch each picture to attach its sound file.</p>
                <p id="eh5">To attach a YouTube video, first add a picture. Then in YouTube, get a share link like
                    https://youtu.be/...
                    Then back here, right-click/long-touch the picture and paste the link.
                </p>
                <button id="closeEditorHelpButton" onClick={closeEditorHelp}>Close</button>
                <a href="img/user-guide.pdf" target="_blank"><button>User guide</button></a>
            </div>
            <div id="editorHelpCloser" className="closeX boxClose" onClick={closeEditorHelp}>X</div>
            <svg id="editorHelpSvg"></svg>
        </div>
    </div>
  }
}

ReactDOM.render(React.createElement(Popup, null), document.getElementById('popupContainer'));























/*class Popup extends React.Component {
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




//ReactDOM.render(React.createElement(Popup, null), document.getElementById('popupContainer'));*/