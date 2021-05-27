/**
 * Draw proximity polygons around a set of pins.
 */


class LineCalcs {
    /** Nearest point equidistant between two points */
    midway2(p1, p2) {
        return { e: (p2.e + p1.e) / 2, n: (p2.n + p1.n) / 2 };
    }
    /** Formula for line equidistant from two points - calc N from E */
    perpMidLineN(p1, p2) {
        return E =>
            (p1.n - p2.n) / 2 -
            (E - (p1.e - p2.e) / 2) * (p1.n - p2.n) / (p1.e - p2.e);
    }
    /** Formula for line equidistant from two points - calc E from N */
    perpMidLineE(p1, p2) {
        return N =>
            (p1.e - p2.e) / 2 -
            (N - (p1.n - p2.n) / 2) * (p1.e - p2.e) / (p1.n - p2.n);
    }
    /** Safer to calculate N from E or E from N? */
    MidLineCalcNfromE(p1, p2) {
        return Math.abs(p1.e - p2.e) > Math.abs(p1.n - p2.n);
    }

    /** A bounded line equidistant from two points */
    perpMidLineEnds(p1, p2) {
        if (!this.latFactor) {
            this.latFactor = Math.cos(p1.n/57.3);
        }
        let mid = { e: (p1.e + p2.e) / 2, n: (p1.n + p2.n) / 2 };
        let dp1 = { e: (p1.e - p2.e) / 2, n: (p1.n - p2.n) / 2 };
        let roughScale = dp1.e+dp1.n;
        let extendFactor = 4; //(0.0003 - roughScale) / roughScale;
        let m1 = { e: mid.e + extendFactor * dp1.n/this.latFactor, n: mid.n - extendFactor * dp1.e*this.latFactor };
        let m2 = { e: mid.e - extendFactor * dp1.n/this.latFactor, n: mid.n + extendFactor * dp1.e*this.latFactor };
        return [m1, m2];
    }
    /**
     * Equidistant from three points
     * @param {*} p1 
     * @param {*} p2 
     * @param {*} p3 
     * @returns 
     * @see https://en.wikipedia.org/wiki/Circumscribed_circle#Circumcenter_coordinates
     */
    midway3(p1, p2, p3) {
        let d = 2 * (p1.e * (p2.n - p3.n) + p2.e * (p3.n - p1.n) + p3.e * (p1.n - p3.n));
        let me = ((p1.e * p1.e + p1.n * p1.n) * (p2.n - p3.n) +
            (p2.e * p2.e + p2.n * p2.n) * (p3.n - p1.n) +
            (p3.e * p3.e + p3.n * p3.n) * (p1.n - p2.n)) / d;
        let mn = ((p1.e * p1.e + p1.n * p1.n) * (p3.e - p2.e) +
            (p2.e * p2.e + p2.n * p2.n) * (p1.e - p2.e) +
            (p3.e * p3.e + p3.n * p3.n) * (p2.e - p3.e)) / d;
        return { e: me, n: mn };
    }
}

class ProximityPolygons extends LineCalcs {
    constructor(pins) {
        super();
        this.pins = pins || [];
    }

    clear() {
        this.pins = [];
    }

    setSelection(pinsOrPlaces) {
        this.pins = [];
        pinsOrPlaces.forEach(pinOrPlace => {
            let pin = pinOrPlace.place ? pinOrPlace : map.placeToPin[pinOrPlace.id];
            this.pins.push(pin);
            if (!pin.midLines) pin.midLines = [];
        });
    }

    removeLines() {
        for (let i = 0; i < this.pins.length; i++) {
            this.pins[i].midLines.forEach(line => {
                line.setMap(null);
            });
            this.pins[i].midLines = [];
        }
    }

    showMidLines() {
        for (let i = 0; i < this.pins.length; i++) {
            for (let j = i + 1; j < this.pins.length; j++) {
                let [p1, p2] = this.perpMidLineEnds(this.pins[i].place.loc, this.pins[j].place.loc);
                let line = map.drawLine(p1, p2);
                this.pins[i].midLines.push(line);
                this.pins[j].midLines.push(line);
                //line.pin1 = pins[i];
                //line.pin2 = pins[j];
            }
        }
    }

}