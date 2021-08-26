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
}*/

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

class theMap extends React.Component {
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

class topLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return <div>
      <div id="loosePicsShow"></div>
      <div id='topLeftControls' className="buttonPanel">
        <div id="usernamediv" className="panelButton whiteButton">
          <span id="usernamespan"></span>
          <input id="signInButtonTop" type='button' onClick={signin} value='Sign in'
            title="Sign in to add places and comments" />
          <img id="settingsButton" src="/localmap/img/settings.png"
            style={{ display: "none", width: 25, height: 25, verticalAlign: "middle" }} title="Settings"
            onClick={onSettingsButton} />
        </div>
        <div id='pauseButton' className="panelButton whiteButton" style={{ display: "none" }}//onClick={window.tracker.onPauseButton}
          title="Pause/resume tracking">
          <img src='/localmap/img/tracking.png' />
        </div>
        <div id='showHelpButton' className="panelButton whiteButton" onClick={dohelp} title="help/about">?</div>
        <div id="addFileButton" className="panelButton addButton" title="Upload pics and then place them on the map"
          /*onClick={showFileSelectDialog("uploadButton")}*/ style={{display:"none"}}>++</div>
        <input id="uploadButton" style={{display:"none", opacity: 0}} //onChange={doUploadFiles(this, this.files, null)}
          type="file" title="upload" name="uploadButton" multiple />
        <div id="addPlaceButton" className="panelButton addButton"
          title="Put notes and pictures on the map at the target point" //onClick={onAddPlaceButton(this)}
          style={{display:"none"}}>+</div>
        <div id="workingTitle" className="panelButton whiteButton"></div>
        <div id="picLaundryFlag" className="panelButton"
          title="Picture or place upload in progress, or waiting for connection">^</div>
        <br></br>
      </div>
      <div id='topMessage' className='noselect' style={{visibility: "hidden"}}></div>
        <div id="target" className="target" style={{pointerEvents:"none"}}
            title="Position a place under here then click the button on the right to add notes">
            <div className="noselect" style={{position:"relative", top:10}}>^</div>
        </div>

        <a href="#" target="_blank" id="fullWindowButton" style={{display:"none"}} onClick={frameBreakout}><img
                className="panelButton" title="full window" src="/localmap/img/expand.png" /></a>
        <div className="dropdown" id="cartographyDropdown">
            <div id="cartographyButton" onClick={selectCartography}
                className="whiteButton panelButton">Cartography&#8681;</div>
            <div id="mapDropdown" className="dropdown-content">
                <a id="dropdownSelection1" onClick={() => selectedMap = 'google', mapSelect}>Google</a>
                <a id="dropdownSelection2" onClick={() => selectedMap = 'bing', mapSelect}>Bing</a>
                <a id="dropdownSelection3" onClick={() => selectedMap = 'osm', mapSelect}>OpenStreetMap</a>
            </div>
        </div>
        <div className="panelButton whiteButton" id="opacitySlider" onClick={opacitySlider}>Labels</div>

        <img id="mapbutton" className="panelButton" /*onClick={map.toggleType(event)} onContextMenu={map.toggleOpacity}*/ title="Aerial/map. CTRL for transparent overlay" src="/localmap/img/map-icon.png" />
        <input id="addressSearchBox" className="geoSearch searchInput panelButton whiteButton" type="textbox"
            placeholder="Postcode or place" /*onChange={window.map.codeAddress(this.value)}*//>
        <div id="infowindow-content">
            <span id="place-name" className="title"></span><br />
            <strong>Place ID</strong>: <span id="place-id"></span><br />
            <span id="place-address"></span>
        </div>

        <div id="groupSelectorBox"></div>
        <div id="indexSidebar"></div>
        <div id="indexFlag" style={{display:"none"}}>
            <div onClick={index.openIndex}>&gt;</div>
        </div>

        <div id="bottomLeftPanel">
            <div style={{display:"inline-block", position:"relative"}}>
                <input id="searchButton" type="text" className="searchInput panelButton smallButton"
                    placeholder="Search index" /*onchange={index.doSearch(this.value.trim())}*/ title="search" />
                <span id="searchCount"
                    style={{position:"absolute", left:4, top:2, color:"darkred", fontSize:"small"}}></span>
                <span id="searchCancel" style={{position:"absolute", right:15, top:3, color:"red", display:"none"}}
                    /*onClick={() => g('searchButton').value='', index.doSearch('')}*/>X</span>
            </div>
            <div id="tagKeyButton" className="panelButton smallButton" onClick={showTagsKey} title="Filter by tag">Tags
            </div>
            <div id="recentButton" className="panelButton smallButton" onClick={index.doRecent}
                title="Recent changes and additions">New!</div>
            <div id="toggleLanguageButton" className="panelButton smallButton" onClick={toggleLanguage}>Cymraeg</div>
        </div>
        <div id="NLScredit">Historical maps: <a href="https://maps.nls.uk/" target="_blank">National Library of Scotland</a></div>
        <div id="tagsKey" onClick={hideTagsKey}>
            <div id="tagsKeyPanel">
                <div id="id2">
                    <div className="tagKeyButton"></div> Rocks
                </div>
            </div>
        </div>
        <div id="basehelp" className="helpBox" style={{display:"none"}}>
            <div className="closeX boxClose" onClick={closeBaseHelp}>X</div>
            <p id="helpRefAddHead" style={{marginTop:0}}><b>Add places to the map</b></p>
            <p id="helpRefDragMap">Drag the map so that the target <span id="helpRefTarget"><b>^</b></span> points to a
                place you have something
                to show or tell about.</p>
            <p id="helpRefTracking">If you're mobile, click <b id="helpRefGT">&gt;</b> to track your position.</p>
            <p id="helpRefAdd">Click <b id="helpRefPlus">+</b> to create a place at the target. You'll then be able to
                type notes or add
                photos or sound files.</p>
            <p id="helpRefAddPics">If you have photos of several places, click <b id="helpRefPlusPlus">++</b> to put
                them on the map in one
                go.
            </p>
            <a href="img/user-guide.pdf" target="_blank">User guide</a>
            <svg id="svgBaseHelp"></svg>
        </div>
        <div id="popup" className="floatingPopup">
          <div id="popuptextgroup">
          <div></div>
                <div id="groupEditorBox"></div>
                <div id="toolBar1">
                    <div className="toolbutton" /*onClick={onFormatDoc('formatblock','h4')}*/id="toolHead" title="Sub heading">
                        H/*
                    </div>/*
                    <div className="toolbutton" /*onClick={onFormatDoc('formatblock','div')}*/ id="toolPara"
                        title="Plain paragraph">¶</div>
                    <div id="welshKeys" style={{display:"inline-block"}}>
                        <div className="toolbutton" /*onClick={onFormatDoc('InsertText','â')}*/>â</div>
                        <div className="toolbutton" /*onClick={onFormatDoc('InsertText','ê')}*/>ê</div>
                        <div className="toolbutton" /*onClick={onFormatDoc('InsertText','î')}*/>î</div>
                        <div className="toolbutton" /*onClick={onFormatDoc('InsertText','ô')}*/>ô</div>
                        <div className="toolbutton" /*onClick={onFormatDoc('InsertText','û')}*/>û</div>
                        <div className="toolbutton" /*onClick={onFormatDoc('InsertText','ŵ')}*/>ŵ</div>
                        <div className="toolbutton" /*onClick={onFormatDoc('InsertText','ŷ')}*/>ŷ</div>
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
                        <div id="popuptext" contenteditable="true" onClick={event.stopPropagation}>
                        </div>
                        <div id="popupComments"></div>
                    </div>
                </div>
                <div id="picturebar" className="picturebar">
                    <span id="picPrompt">Add pictures &gt;</span>
                    <div id="thumbnails"></div>
                    
                    <div className="panelButton addButton " id="addPicToPlaceButton"
                        onClick={showFileSelectDialog('uploadToPlaceButton')}
                        title="Add photos, sound files or videos to this note">+</div>
                    
                    <input id="uploadToPlaceButton" style={{display:"none", opacity: 0}}
                        /*onChange={doUploadFiles(this, this.files, g('popup').placePoint)}*/ type="file" title="upload"
                        name="uploadToPlaceButton" multiple />
                    <div id="voiceRecorder" className="panelButton addButton " onClick={showVoiceRecorder}
                        title="Voice recorder"><img src="img/recorder.png" height="25px" style={{padding: 3}} /></div>
                    <div id="getLinkButton" className="panelButton addButton "
                        /*onClick={showLink(g('popup').placePoint.place, event)}*/ title="Share a link to this place">
                        <img src="/localmap/img/getlink.png" />
                    </div>
                    <div id="editorHelpButton" className="panelButton addButton " onClick={showEditorHelp} title="Help">?
                    </div>
                </div>
          </div>

          <div id="tags"> </div>
          <div id="author"> </div>
          <div id="popclose" onclick={closePopup}>X</div>

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

        <div id="audiodiv" className="avbox"></div>

        <div id="petals">
        </div>

        <div id="lightbox"> </div>

        <div id="loosePicMenu" className="menu" onMouseLeave={hide(this)}>
            <div>&nbsp;</div>
            <div /*onClick={onmenuclick(this, placeLoosePicCmd)}*/ id="placeLoosePicMenu">Place at focus mark</div>
        </div>

        <div id="openAuthorMenu" className="menu" onMouseLeave={hide(this)}>
            <div>&nbsp;</div>
            <div /*onClick={onmenuclick(this, openAuthorCmd)}*/ id="openAuthorMenuItem">Open authorship</div>
            <div /*onClick={onmenuclick(this, editAuthorCmd)}*/ id="editAuthorMenuItem">Change author name</div>
            <div /*onClick={onmenuclick(this, editRangeCmd)}*/ id="editTrackingRangeItem">Change tracking range</div>
        </div>
        <div id="petalMenu" className="menu" onMouseLeave={hide(this)}>
            <div>&nbsp;</div>
            <div /*onClick={onmenuclick(this, titlePicCmd)}*/ id="retitlePicMenu">Re-title pic/file</div>
            <div /*onClick={onmenuclick(this, deletePicCmd)}*/ id="deletePicMenu">Delete pic/file</div>
            <div /*onClick={onmenuclick(this, attachSoundCmd)}*/ id="attachSoundMenu">Attach a sound file</div>
            <div /*onClick={onmenuclick(this, attachYouTube)}*/ id="attachYouTubeMenu">Attach a YouTube video</div>
            <div /*onClick={onmenuclick(this, rotatePicCmd)}*/ id="rot90Menu">Rotate 90deg</div>
            </div>

    </div>
  }

}







//ReactDOM.render(React.createElement(BottomLeft, null), document.getElementById('bottomLeftControls'));

//ReactDOM.render(React.createElement(TopRight, null), document.getElementById('topRightControls'));

//ReactDOM.render(React.createElement(TopLeft, null), document.getElementById('topLeftControls'));

ReactDOM.render(React.createElement(theMap, null), document.getElementById('theMap'));

ReactDOM.render(React.createElement(topLayer, null), document.getElementById('topLayer'));