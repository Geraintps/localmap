class RangeDialog extends TopLayer {
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
                style={{ borderRadius: 10, position: "relative", top: "30%", maxWidth: "80%", width: 500, margin: "0 auto", backgroundColor: "whitesmoke", border: "2 solid blue", padding: 10 }}>
                <p id="editRangePrompt">Edit the tracking range</p>
                <div id="rangeInput" type="text"
                    style={{ width: "90%", height: 50, margin: "auto", overflow: "hidden", backgroundColor: "white", color: "black", border: "1px solid blue", padding: 4 }}
                    contentEditable="true" onBlur={() => this.blurWhenDone()}></div>
            </div>
        </div>
    }
}

