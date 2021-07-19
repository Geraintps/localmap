import { MapTest } from "../bits/MapTest.js";

describe("Tracking", function () {
    it("Can click tracking", function () {
        let mapTest = new MapTest(this);
        cy.get("#pauseButton").click();
        cy.wait(5000); // shouldn't fall over
    })


    function testWithPlaceRanges(testRunner, restOfTest) {
        let mapTest = new MapTest(testRunner);
        cy.window().then(win => {win.map.moveTo(-0.125990, 51.500984, 0, 0);
            mapTest.addPlaceAtCentre((editor) => {
                editor.textInput("Test place 10m", "ego");
                cy.get("#author").click();
                cy.get("#editTrackingRangeItem").click();
                cy.get("#rangeInput").type("{selectall}" + "10")
                    .should('have.text', "10");
                cy.get("#rangeDialog").click();
                cy.get("#getLinkButton").click();
                cy.get("#msgbox").then($m => {
                    cy.wrap($m.val()).as("placeLink");
                    cy.get("#message").click(1, 1); // close msg
                })
            });
        });
        cy.window().then(win => {win.map.moveTo(-0.124551, 51.500935, 0, 0);
            mapTest.addPlaceAtCentre((editor) => {
                editor.textInput("Test place 200m", "ego");
                cy.get("#author").click();
                cy.get("#editTrackingRangeItem").click();
                cy.get("#rangeInput").type("{selectall}" + "200")
                    .should('have.text', "200");
                cy.get("#rangeDialog").click();
                cy.get("#ego").click();
                cy.get("#getLinkButton").click();
                cy.get("#msgbox").then($m => {
                    cy.wrap($m.val()).as("placeLink");
                    cy.get("#message").click(1, 1); // close msg
                })
            }).then(() => restOfTest(mapTest));
        });
    }

    it("Pops nearest place", function () {
        testWithPlaceRanges(this, function (mapTest) {
            cy.window().then(win => { 
                win.tracker.paused = false; 
                win.updatePosition({ coords: { latitude: 51.500984, longitude: -0.125990 } });
                mapTest.checkLightBox(0, "Test place 10m");
            })
            cy.window().then(win => {
                win.tracker.paused = false;
                win.updatePosition({ coords: { latitude: 51.500976, longitude: -0.125853 } });
                mapTest.checkLightBox(0, "Test place 10m");
            })
            cy.window().then(win => {
                win.tracker.paused = false;
                win.updatePosition({ coords: { latitude: 51.500935, longitude: -0.124551 } });
                mapTest.checkLightBox(0, "Test place 200m");
            })
            cy.window().then(win => {
                win.tracker.paused = false; 
                win.updatePosition({ coords: { latitude: 51.500935, longitude: -0.124551 } });
                mapTest.checkLightBox(0, "Test place 200m");
            })
            cy.get("#lightboxBack").click();
            cy.window().then(win => {
                win.paused = false;
                win.updatePosition({ coords: { latitude: 51, longitude: 0 } });
                cy.wait(500);
                cy.get("#lightbox").should("not.be.visible");
            })            
        })
    });

})