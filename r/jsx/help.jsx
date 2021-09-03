class Help extends TopLayer {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div id="basehelp" className="helpBox" style={{display:"none"}}>
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
    }
}

ReactDOM.render(React.createElement(Help, null), document.getElementById('helpContainer'));