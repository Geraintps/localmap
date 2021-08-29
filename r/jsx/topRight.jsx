class topRight extends topLayer {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="dropdown" id="cartographyDropdown">
        <div id="cartographyButton" onClick={selectCartography}
            className="whiteButton panelButton">Cartography&#8681;</div>
        <div id="mapDropdown" className="dropdown-content">
            <a id="dropdownSelection1" onClick={() => selectedMap = 'google', mapSelect}>Google</a>
            <a id="dropdownSelection2" onClick={() => selectedMap = 'bing', mapSelect}>Bing</a>
            <a id="dropdownSelection3" onClick={() => selectedMap = 'osm', mapSelect}>OpenStreetMap</a>
        </div>
        <div className="panelButton whiteButton" id="opacitySlider" onClick={opacitySlider}>Labels</div>
        <img id="mapbutton" className="panelButton" onClick={this.maptoggleType} onContextMenu={this.maptoggleOpacity} title="Aerial/map. CTRL for transparent overlay" src="/localmap/img/map-icon.png" />
        
    </div>
    }
}

ReactDOM.render(React.createElement(topRight, null), document.getElementById('topRightContainer'));