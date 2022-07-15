export default class Sauce{
    constructor(private _sauceType : string){};

    get sauceType() : string{
        return this._sauceType;
    }

    set sauceType(value : string){
        this._sauceType = value;
    }
}