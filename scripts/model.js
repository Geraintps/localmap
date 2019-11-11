var knownTags = [
    { id: "fauna", name: "Anifeiliaid", color: "#a00000", tip: "Anything that moves" },
    { id: "flora", name: "Planhigion", color: "#00a000", tip: "Botany" },
    { id: "petri", name: "Cerrig", color: "#909090", tip: "Geology" },
    { id: "pop", name: "Pobl", color: "#c0a000", tip: "History, archaeology, stories" },
    { id: "met", name: "Tywydd", color: "#40a0ff", tip: "Sea, sky, climate" },
    { id: "ego", name: "Fi", color: "#ffff00", tip: "Notes, memoirs, feelings, ideas" }];

function lightColour(c) {
    var rx = c.substr(1,2), gx = c.substr(3,2), bx = c.substr(5,2);
    var r = Number('0x'+rx), g = Number('0x'+gx), b = Number('0x'+bx);
    return "rgba({0},{1},{2},0.2)".format(r,g,b);
}

for(var i=0;i<knownTags.length;i++) {
    knownTags[i].lightColour = lightColour(knownTags[i].color);
}

class Place {
    constructor(project, lon, lat) {
        this.loc = { e: lon, n: lat };
        this.id = project.replace(" ", "+") + "|" + this.NewId(this.loc);
        this.text = "";
        this.pics = [];
        this.tags = "";
        this.isNew = true;
    }
    get Stripped() {
        return this.text.replace(/(<div|<p|<br)[^>]*>/g, "¬¬¬").replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/^[ ¬]*/g, "").replace(/¬¬[ ¬]*/g, "<br/>");
    }
    get Title() {
        return this.RawTitle || s("noTitlePrompt", "(No title)");
    }
    get RawTitle() {
        return this.Stripped.match(/[^<]*/)[0].replace(/&amp;/g, "&");
    }
    get Short() {
        var t = this.Stripped;
        if (t.length < 200) return t;
        return t.substr(0, 200) + "...";
    }
    get Hash() {
        var h = "" + this.text + this.loc.e + this.loc.n;
        if (this.pics) this.pics.forEach(function (pic, i, a) { h += pic.id + pic.caption; });
        if (this.tags) h += this.tags.toString();
        return hashCode(h);
    }

    get IsEditable() {
        return window.isAdmin || !this.user || usernameIfKnown() == this.user;
    }

    HasTag(tag) { return !tag || !this.tags || this.tags.indexOf(tag)>=0; }
    
        // Create a unique id for a pin by interleaving digits of the lat & long.
        // The idea of doing it from the lat & long is that when searched in the table,
        // pins that are near to each other on the ground will be near in the table.
        // So a rough "find all the nearby pins" is just a matter of truncating the id as a search term.
    NewId (loc) {
        var x = (loc.e + 300).toFixed(6);
        var y = (loc.n + 200).toFixed(6);
        var key = "";
        for (var i = 0; i < x.length; i++) {
            if (x.charAt(i) != ".") {
                key += x.charAt(i) + y.charAt(i);
            }
        }
        // Add some random digits in case several points in same location.
        return key + Date.now()%1000;
    }

}

var seqid = 100;

// An image or other media file attached to a place
class Picture {
    constructor(place, extension) {
        this.id = this.newId(place, extension.toLowerCase());
        this.caption = "";
        this.date = "";
        this.type = ""; // image/jpg etc
        this.sound = null; // plays while pic is showing. Only if this isPicture.
        this.youtube = null;
    }

    get extension() {
        return this.id.match(/\.[^.]*$/)[0].toLowerCase();
    }
    get isPicture() {
        return ".jpeg.jpg.gif.png".indexOf(this.extension) >= 0;
    }
    get isAudio() {
        return ".wav.mp3.avv.ogg".indexOf(this.extension) >= 0;
    }
    get transform () {
        return "rotate(" +
            (this.orientation == 6 ? "0.25"
                : this.orientation == 3 ? "0.5"
                    : this.orientation == 8 ? "0.75"
                        : "0") + "turn)";
    }

    rot90 () {
        this.orientation = (this.orientation == 6 ? 3
        : this.orientation == 3 ? 8
            : this.orientation == 8 ? 1
                : 6);
    }

    newId (place, extension) {
        if (!place) {
            return new Date().toUTCString() + seqid++ + extension;
        } else {
            return place.id.toLowerCase().replace(/[^a-zA-Z0-9_]/g,"_") + "-" + Date.now()%1000 + seqid++ + extension;
        }
    }
}


