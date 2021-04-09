
// This test requires running once: 
// npm install --save-dev cypress-file-upload
// See   https://www.npmjs.com/package/cypress-file-upload

import 'cypress-file-upload';
import { MapTest } from "../bits/MapTest.js";

describe("Pic tests", function () {

    it("Can add a picture to a place", function () {
        // TODO: Fix choice of smedia|media azuredb.js:184
        cy.viewport(1200, 800); // Ensure we're looking at media, not smedia
        let mapTest = new MapTest(this);
        mapTest.addPlaceAtPostcode("SE10 8XJ", (editorTest) => {
            editorTest.textInput("Test pix 1", "petri");
            editorTest.addFile("p01-2013-geo.jpg", 1);
        });
    });

    it("Can re-title a picture", function () {
        // Pic is still there from previous test:
        let mapTest = new MapTest(this);
        mapTest.openEditorWithPics("Test pix", 1, (editorTest) => {
            editorTest.retitleFile("Cockchafer");
        });
        mapTest.openLightbox("Test pix", 1, function () {
            cy.get("#oneCaption").contains("Cockchafer");
        });
    });

    it("Can add a 2nd picture", function () {
        let mapTest = new MapTest(this);
        mapTest.openEditorWithPics("Test pix", 1, (editorTest) => {
            editorTest.addFile("p02-2013-no-geo.jpg", 2);
        });
        mapTest.openLightbox("Test pix", 2, function () {
            cy.get("#lbPicCaptionContainer").then(pics => {
                cy.wrap(pics).contains("Cockchafer");
                expect(pics.children()).to.have.length(2);
            });
        });
    });

    it("Can delete pictures", function () {
        let mapTest = new MapTest(this);
        mapTest.deleteFiles("Test pix", 2, (editorTest) => {
            editorTest.textInput("{del}");
        })
    });

    // This test depends on specific dates and locations of the
    // three pictures
    it("Add multiple pics", function () {
        let mapTest = new MapTest(this);
        // [++] button
        mapTest.uploadFilesAndCreatePlaces([
            // Known loc, will shift map and create a place:
            '../fixtures/p01-2013-geo.jpg', 
            // Unknown loc, map unmoved, will add to same place:
            '../fixtures/p02-2013-no-geo.jpg',
            // Known loc, will shift and create new place:
            '../fixtures/p03-2015-geo.jpg']);
        // Two pics with a known location; 3 places on index in total
        mapTest.indexContains("Pics ", 3);
        // Place with two pics:
        mapTest.openLightbox("Pics 2013", 2, () =>{});
        // Place with one pic:
        mapTest.openLightbox("Pics 2015", 1, () =>{});

        // Delete the places:
        mapTest.deleteFiles("Pics 2013", 2, (editorTest) => {
            editorTest.textInput("{del}");
        });
        mapTest.deleteFiles("Pics 2015", 1, (editorTest) => {
            editorTest.textInput("{del}");
        });
    });

})