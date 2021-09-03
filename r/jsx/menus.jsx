class Menus extends TopLayer {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '', translated: false };
    }

    menuClick(x, y) {
        onmenuclick(x, y);
    }

    hideMenu(x) {
        hide(x);
    }

    render() {
        return <div>
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

ReactDOM.render(React.createElement(Menus, null), document.getElementById('menusContainer'));