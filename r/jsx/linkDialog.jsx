class LinkDialog extends TopLayer {
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

ReactDOM.render(React.createElement(LinkDialog, null), document.getElementById('linkDialog'));