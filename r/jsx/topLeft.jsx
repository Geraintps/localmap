class TopLeft extends TopLayer {
    constructor(props) {
        super(props);
        this.state = {};
    }

    windowtrackeronPauseButton() {
        window.tracker.onPauseButton();
    }

    FileSelectDialog() {
        showFileSelectDialog("uploadButton");
    }

    UploadFiles() {
        doUploadFiles(uploadButton, g("uploadButton").files, null);
    }

    AddPlaceButton() {
        onAddPlaceButton(this);
    }

    _handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Tab") {
          this.codeAddress(e.target.value);
        }
    }

    codeAddress(address) {
        let cleanAddress = address.replace(/[|&;$%@"<>(){}#~:^£!*]/g, "").trim();
        if (!cleanAddress) return;
        map.gotoAddress(cleanAddress);
    }

    render() {
        return <div id='topLeftControls' className="buttonPanel">
            <div id="usernamediv" className="panelButton whiteButton">
                <span id="usernamespan"></span>
                <input id="signInButtonTop" type='button' onClick={signin} value='Sign in'
                    title="Sign in to add places and comments" />
                <img id="settingsButton" src="img/settings.png"
                    style={{ display: "none", width: 25, height: 25, verticalAlign: "middle" }} title="Settings"
                    onClick={onSettingsButton} />
            </div>
            <div id='pauseButton' className="panelButton whiteButton" style={{ display: "none" }} onClick={this.windowtrackeronPauseButton}
                title="Pause/resume tracking">
                <img src='img/tracking.png' />
            </div>
            <div id='showHelpButton' className="panelButton whiteButton" onClick={dohelp} title="help/about">?</div>
            <div id="addFileButton" className="panelButton addButton" title="Upload pics and then place them on the map"
                onClick={this.FileSelectDialog} style={{ display: "none" }}>++</div>
            <input id="uploadButton" style={{ display: "none", opacity: 0 }} onChange={this.UploadFiles}
                type="file" title="upload" name="uploadButton" multiple />
            <div id="addPlaceButton" className="panelButton addButton"
                title="Put notes and pictures on the map at the target point" onClick={this.AddPlaceButton}
                style={{ display: "none" }}>+</div>
            <div id="workingTitle" className="panelButton whiteButton"></div>
            <div id="picLaundryFlag" className="panelButton"
                title="Picture or place upload in progress, or waiting for connection">^</div>
            <br></br>
            <input id="addressSearchBox" className="geoSearch searchInput panelButton whiteButton" type="textbox"
            placeholder="Postcode or place" onKeyDown={this._handleKeyDown}/>
        </div>
    }
}

ReactDOM.render(React.createElement(TopLeft, null), document.getElementById('topLeftContainer'));