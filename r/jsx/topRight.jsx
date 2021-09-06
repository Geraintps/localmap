class TopRight extends TopLayer {
    constructor(props) {
        super(props);
        this.state = {};
    }

    maptoggleType() {
        map.toggleType(event);
    }
    
      maptoggleOpacity() {
        map.toggleOpacity();
    }

    render() {
        return  <div>
         <div className="dropdown" id="cartographyDropdown">
        <div id="cartographyButton" onClick={selectCartography}
            className="whiteButton panelButton">Cartography&#8681;</div>
        <div id="mapDropdown" className="dropdown-content">
            <a id="dropdownSelection1" onClick={() => mapSelect("google")}>Google</a>
            <a id="dropdownSelection2" onClick={() => mapSelect("bing")}>Bing</a>
            <a id="dropdownSelection3" onClick={() => mapSelect("osm")}>OpenStreetMap</a>
        </div>
        <div className="panelButton whiteButton" id="opacitySlider" onClick={opacitySlider}>Labels</div>
        </div>
        <img id="mapbutton" className="panelButton" onClick={this.maptoggleType} onContextMenu={this.maptoggleOpacity} title="Aerial/map. CTRL for transparent overlay" src="/localmap/img/map-icon.png" />
        
    </div>
    }
}

ReactDOM.render(React.createElement(TopRight, null), document.getElementById('topRightContainer'));