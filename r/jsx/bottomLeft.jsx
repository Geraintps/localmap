class BottomLeft extends TopLayer {
    constructor(props) {
        super(props);
        this.state = {};
    }

    indexDoRecent() {
        index.doRecent();
    }

    __handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Tab") {
          index.doSearch(e.target.value.trim())
        }
    }

    searchCancel() {
        g('searchButton').value='';
        index.doSearch('')
    }

    

    render() {
        return <div id="bottomLeftPanel">
            <div style={{ display: "inline-block", position: "relative" }}>
                <input id="searchButton" type="text" className="searchInput panelButton smallButton"
                    placeholder="Search index" onKeyDown={this.__handleKeyDown} title="search" />
                <span id="searchCount"
                    style={{ position: "absolute", left: 4, top: 2, color: "darkred", fontSize: "small" }}></span>
                <span id="searchCancel" style={{ position: "absolute", right: 15, top: 3, color: "red", display: "none" }}
                    onClick={this.searchCancel}>X</span>
            </div>
            <div id="tagKeyButton" className="panelButton smallButton" onClick={showTagsKey} title="Filter by tag">Tags
            </div>
            <div id="recentButton" className="panelButton smallButton" onClick={this.indexDoRecent}
                title="Recent changes and additions">New!</div>
            <div id="toggleLanguageButton" className="panelButton smallButton" onClick={toggleLanguage}>Cymraeg</div>
            
            <div id="tagsKey" onClick={hideTagsKey}>
                <div id="tagsKeyPanel">
                    <div id="id2">
                        <div className="tagKeyButton"></div> Rocks
                    </div>
                </div>
            </div>
            
        </div>
    } 
}

ReactDOM.render(React.createElement(BottomLeft, null), document.getElementById('bottomLeftContainer'));