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

  windowtrackeronPauseButton() {
    window.tracker.onPauseButton();
  }

  FileSelectDialog() {
    showFileSelectDialog("uploadButton");
  }

  UploadFiles() {
    doUploadFiles(this, this.files, null);
  }

  AddPlaceButton() {
    onAddPlaceButton(this);
  }

  maptoggleType() {
    map.toggleType(event);
  }

  maptoggleOpacity() {
    map.toggleOpacity();
  }

  _handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      this.codeAddress(e.target.value);
    }
  }
  __handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      index.doSearch(e.target.value.trim())
    }
  }
  formatDoc(string1, string2) {
    //onFormatDoc(string1, string2);
  }

  searchCancel() {
    g('searchButton').value='';
    index.doSearch('')
  }

  codeAddress(address) {
    let cleanAddress = address.replace(/[|&;$%@"<>(){}#~:^£!*]/g, "").trim();
    if (!cleanAddress) return;
    map.gotoAddress(cleanAddress);
  }

  uploadPlaceToButton() {
    doUploadFiles(this, this.files, g('popup').placePoint);
  }

  addPicToPlaceButton() {
    showFileSelectDialog('uploadToPlaceButton');
  }

  getLinkButton() {
    showLink(g('popup').placePoint.place, event);
  }

  menuClick(x, y) {
    onmenuclick(x, y);
  }
  hideMenu(x) {
    hide(x);
  }
  openSideIndex() {
    index.openIndex();
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
        <div id='pauseButton' className="panelButton whiteButton" style={{ display: "none" }} onClick={this.windowtrackeronPauseButton}
          title="Pause/resume tracking">
          <img src='/localmap/img/tracking.png' />
        </div>
        <div id='showHelpButton' className="panelButton whiteButton" onClick={dohelp} title="help/about">?</div>
        <div id="addFileButton" className="panelButton addButton" title="Upload pics and then place them on the map"
          onClick={this.FileSelectDialog} style={{display:"none"}}>++</div>
        <input id="uploadButton" style={{display:"none", opacity: 0}} onChange={this.UploadFiles}
          type="file" title="upload" name="uploadButton" multiple />
        <div id="addPlaceButton" className="panelButton addButton"
          title="Put notes and pictures on the map at the target point" onClick={this.AddPlaceButton}
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

        <img id="mapbutton" className="panelButton" onClick={this.maptoggleType} onContextMenu={this.maptoggleOpacity} title="Aerial/map. CTRL for transparent overlay" src="/localmap/img/map-icon.png" />
        <input id="addressSearchBox" className="geoSearch searchInput panelButton whiteButton" type="textbox"
            placeholder="Postcode or place" onKeyDown={this._handleKeyDown}/>
        <div id="infowindow-content">
            <span id="place-name" className="title"></span><br />
            <strong>Place ID</strong>: <span id="place-id"></span><br />
            <span id="place-address"></span>
        </div>

        <div id="groupSelectorBox"></div>
        <div id="indexSidebar"></div>
        <div id="indexFlag" style={{display:"none"}}>
            <div onClick={this.openSideIndex}>&gt;</div>
        </div>

        <div id="bottomLeftPanel">
            <div style={{display:"inline-block", position:"relative"}}>
                <input id="searchButton" type="text" className="searchInput panelButton smallButton"
                    placeholder="Search index" onKeyDown={this.__handleKeyDown} title="search" />
                <span id="searchCount"
                    style={{position:"absolute", left:4, top:2, color:"darkred", fontSize:"small"}}></span>
                <span id="searchCancel" style={{position:"absolute", right:15, top:3, color:"red", display:"none"}}
                    onClick={this.searchCancel}>X</span>
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
                    <div className="toolbutton" onClick={this.formatDoc('formatblock','h4')} id="toolHead" title="Sub heading">
                        H
                    </div>
                    <div className="toolbutton" onClick={this.formatDoc('formatblock','div')} id="toolPara"
                        title="Plain paragraph">¶</div>
                    <div id="welshKeys" style={{display:"inline-block"}}>
                        <div className="toolbutton" onClick={this.formatDoc('InsertText','â')}>â</div>
                        <div className="toolbutton" onClick={this.formatDoc('InsertText','ê')}>ê</div>
                        <div className="toolbutton" onClick={this.formatDoc('InsertText','î')}>î</div>
                        <div className="toolbutton" onClick={this.formatDoc('InsertText','ô')}>ô</div>
                        <div className="toolbutton" onClick={this.formatDoc('InsertText','û')}>û</div>
                        <div className="toolbutton" onClick={this.formatDoc('InsertText','ŵ')}>ŵ</div>
                        <div className="toolbutton" onClick={this.formatDoc('InsertText','ŷ')}>ŷ</div>
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

        <div id="audiodiv" className="avbox"></div>

        <div id="petals">
        </div>

        <div id="lightbox"> </div>

        <div id="loosePicMenu" className="menu" onMouseLeave={() => this.hideMenu("loosePicMenu")}>
            <div>&nbsp;</div>
            <div id="placeLoosePicMenu" onClick={() => this.menuClick("placeLoosePicMenu", placeLoosePicCmd)} >Place at focus mark</div>
        </div>

        <div id="openAuthorMenu" className="menu" onMouseLeave={() => this.hideMenu("openAuthorMenu")}>
            <div>&nbsp;</div>
            <div id="openAuthorMenuItem" onClick={() => this.menuClick("openAuthorMenuItem", openAuthorCmd)} >Open authorship</div>
            <div id="editAuthorMenuItem" onClick={() => this.menuClick("editAuthorMenuItem", editAuthorCmd)} >Change author name</div>
            <div id="editTrackingRangeItem" onClick={() => this.menuClick("editTrackingRangeItem", editRangeCmd)} >Change tracking range</div>
        </div>
        <div id="petalMenu" className="menu" onMouseLeave={() => this.hideMenu("petalMenu")}>
            <div>&nbsp;</div>
            <div id="retitlePicMenu" onClick={() => this.menuClick("retitlePicMenu", titlePicCmd)} >Re-title pic/file</div>
            <div id="deletePicMenu" onClick={() => this.menuClick("deletePicMenu", deletePicCmd)} >Delete pic/file</div>
            <div id="attachSoundMenu" onClick={() => this.menuClick("attachSoundMenu", attachSoundCmd)} >Attach a sound file</div>
            <div id="attachYouTubeMenu" onClick={() => this.menuClick("attachYouTubeMenu", attachYouTube)} >Attach a YouTube video</div>
            <div id="rot90Menu" onClick={() => this.menuClick("rot90Menu", rotatePicCmd)} >Rotate 90deg</div>
            </div>

    </div>
  }

}

class rangeDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', translated: false };
  }

  hideMenu(x) {
    hide(x);
  }
  blurWhenDone() {
    var element = document.getElementById("rangeInput");
    whenDone(element.innerText);
  }

  render() {
    return <div onClick={() => this.hideMenu("rangeDialog")}
      style={{ display: "none", position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div
        style={{ borderRadius:10, position:"relative", top:"30%", maxWidth:"80%", width:500, margin: "0 auto", backgroundColor:"whitesmoke", border: "2 solid blue", padding:10 }}>
        <p id="editRangePrompt">Edit the tracking range</p>
        <div id="rangeInput" type="text"
          style={{ width:"90%", height:50, margin:"auto", overflow:"hidden", backgroundColor: "white", color:"black", border: "1px solid blue", padding:4 }}
          contentEditable="true" onBlur={() => this.blurWhenDone()}></div>
      </div>
    </div>
  }
}

class linkDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', translated: false };
  }

  render() {
    return <div>
      <div onClick={noPropagate(event)}>Paste a link to a web page here:
                <br />
                <input id="linkRef" type="text" size="20" pattern="https?://.+|\.\/\?place=[0-9]{3}"
                    placeholder="http://..." />
                <input type="button" onClick={CompleteCreateLink} value="Link" />
                <span id="linkRemoveOption">
                    - or -
                    <br />
                    <input type="button" onClick={CompleteRemoveLink} value="Remove link" />
                </span>
            </div>
    </div>
  }
  
}

class splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', translated: false };
  }

  dropSplash() {
    splashScreen.dropSplash();
  }

  render() {
    return <div id="splashPanel">

      <div className="splashScroller" id="spanSplash">
        <div>
          <img src="img/favicon96.png" align="left" /> <span id="aboutEN">
            <h1>Map Digi Penfro</h1>
            <h3>Exploring Pembrokeshire from many perspectives</h3>
            <p>Welcome to the Beta version of Map Digi Penfro, a digital mapping tool
              that allows you to record what you think is important about the places of
              Pembrokeshire.
              The map is a work in progress to which you are invited to contribute.
            </p>
            <p>The points on this map record nature, poetry, science, art and history. They have
              been
              placed
              here by people young, old and in between who have contributed their knowledge,
              memories
              and ideas.</p>
            <p>Move the map around, click the coloured points, and discover the places we've roamed.
            </p>
            <p>You can add your own places to the map.
            </p>
            <p>The map is a bilingual space where you will encounter entries written in Welsh and
              English and other languages too.
              You are invited to contribute in the language of your choice. </p>
            <p>Here's a <a href="https://youtu.be/WXjlWxNtUto" target="video">video about making the
              map.</a></p>
            <p>Map Digi Penfro is a pilot project developed by Span Digidol tackling rural isolation
              and community well-being through innovative digital arts projects.</p>
          </span>
          <span id="aboutCYM" style={{color:"darkblue"}}>
            <h1>Map Digi Penfro</h1>
            <h3>Archwilio Sir Benfro o sawl safbwynt.</h3>
            <p>Croeso i fersiwn Beta Map Digi Penfro, arf mapio digidol sy’n caniatáu i chi
              recordio beth rydych chi’n meddwl sydd yn bwysig am leoedd Sir Benfro.
              Gwaith ar y gweill yw’r map ac fe'ch gwahoddir i gyfrannu ato.</p>
            <p>Mae’r pwyntiau ar y map hwn yn cofnodi natur, barddoniaeth, gwyddoniaeth, celf a
              hanes.
              Fe’u gosodwyd yma gan bobl ifanc, pobl hen a phobl o bob oedran rhyngddynt,
              sydd wedi cyfrannu eu gwybodaeth, eu hatgofion a’u syniadau.</p>
            <p>Symudwch y map o gwmpas, cliciwch ar y pwyntiau lliw, a darganfyddwch y
              lleoedd rydyn ni wedi crwydro.</p>
            <p>Gallwch hefyd ychwanegu’r lleoedd sy’n bwysig i chi i’r map.
            </p>
            <p>Dyma <a href="https://youtu.be/WXjlWxNtUto" target="video">fideo am wneud y map</a>.
            </p>
            <p>Datblygwyd Map Digi Penfro trwy Span Digidol prosiect peilot sy’n archwilio
              ffyrdd y gall y celfyddydau a thechnoleg ddigidol
              weithio ochr yn ochr i fynd i’r afael â materion megis lles cymunedol ac ynysiad
              gwledig.</p>
          </span>
        </div>
        <div id="bottombox">
          <hr />
          <p id="loadingFlag" style={{ backgroundColor: "yellow" }}>Loading... | Llwytho...</p>
          <p>This site uses cookies. | Mae'r wefan hon yn defnyddio cwcis.
            <button id="continueButton" style={{ display: "none" }} className="continueButton"
              onClick={this.dropSplash}>Continue
              | Parhewch</button>
          </p>
          <p><small><a href="https://www.span-arts.org.uk/" target="_blank" id="spanArtsLink">Span
            Arts</a> |
            <span id="privacyOpenLink">
              <a href="privacy.html#privacy" title="open in new window" target="_blank">Privacy
                | Preifatrwydd</a> </span>
            | <a href="img/user-guide.pdf" target="_blank" id="userGuideLink">User guide |
              Canllaw
              defnyddiwr</a>
            | <a href='#' onClick={toggleLanguage} id="toggleLanguageLink">Cymraeg</a>
          </small></p>
          <div>
            <img src="img/logo-ccc.jpg" />
            <img src="img/logo-eu.jpg" />
            <img src="img/logo-arwain.jpg" />
            <img src="img/logo-pcc.jpg" />
          </div>
        </div>
      </div>
      <div className="closeX boxClose" onClick={this.dropSplash} style={{display:"none"}} id="splashCloseX">
        X</div>
    </div>

  }
}





//ReactDOM.render(React.createElement(BottomLeft, null), document.getElementById('bottomLeftControls'));

//ReactDOM.render(React.createElement(TopRight, null), document.getElementById('topRightControls'));

//ReactDOM.render(React.createElement(TopLeft, null), document.getElementById('topLeftControls'));

ReactDOM.render(React.createElement(theMap, null), document.getElementById('theMap'));

ReactDOM.render(React.createElement(topLayer, null), document.getElementById('topLayer'));

ReactDOM.render(React.createElement(rangeDialog, null), document.getElementById('rangeDialog'));

ReactDOM.render(React.createElement(linkDialog, null), document.getElementById('linkDialog'));

ReactDOM.render(React.createElement(splash, null), document.getElementById('splash'));