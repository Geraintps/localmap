class TopRight extends TopLayer {
    constructor(props) {
        super(props);
        this.state = { dropdown: false }; 

    }

    maptoggleType() {
        map.toggleType(event);
    }
    
      maptoggleOpacity() {
        map.toggleOpacity();
    }

    


    render() {
        if (!this.state.dropdown){
        return  <div>
         <div className="dropdown" id="cartographyDropdown">
        <div id="cartographyButton" onClick={() => this.setState({dropdown: true})}
            className="whiteButton panelButton">Cartography&#8681;</div>
        <div id="mapDropdown" className="dropdown-content" style={{display: "none"}}>
            <a id="dropdownSelection1" onClick={() => mapSelect("google")}>Google</a>
            <a id="dropdownSelection2" onClick={() => mapSelect("bing")}>Bing</a>
            <a id="dropdownSelection3" onClick={() => mapSelect("osm")}>OpenStreetMap</a>
        </div>
        <div className="panelButton whiteButton" id="opacitySlider" onClick={opacitySlider}>Labels</div>
        </div>
        <img id="mapbutton" className="panelButton" onClick={this.maptoggleType} onContextMenu={this.maptoggleOpacity} title="Aerial/map. CTRL for transparent overlay" src="img/map-icon.png" />
        
    </div>
        } else {
            return  <div>
         <div className="dropdown" id="cartographyDropdown">
        <div id="cartographyButton" onClick={() => this.setState({dropdown: false})}
            className="whiteButton panelButton">Cartography&#8681;</div>
        <div id="mapDropdown" className="dropdown-content" style={{display:"block"}}>
            <a id="dropdownSelection1" onClick={() => mapSelect("google")}>Google</a>
            <a id="dropdownSelection2" onClick={() => mapSelect("bing")}>Bing</a>
            <a id="dropdownSelection3" onClick={() => mapSelect("osm")}>OpenStreetMap</a>
        </div>
        <div className="panelButton whiteButton" id="opacitySlider" onClick={opacitySlider}>Labels</div>
        </div>
        <img id="mapbutton" className="panelButton" onClick={this.maptoggleType} onContextMenu={this.maptoggleOpacity} title="Aerial/map. CTRL for transparent overlay" src="img/map-icon.png" />
        
    </div>
        }
    }
}

ReactDOM.render(React.createElement(TopRight, null), document.getElementById('topRightContainer'));