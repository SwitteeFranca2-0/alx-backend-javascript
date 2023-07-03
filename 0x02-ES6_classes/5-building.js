/**
 * Implementing a class, Building
 */

export default class Building {
    /**
     * Constructing a building class
     * @param {number} sqft - the area of the building
     */
    constructor(sqft) {
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    evacuationWarningMessage () {
        
    }
}