import Sauce from "../components/Sauce";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Bread from "../components/Bread";

export default class Sanduiche{
    private _sanduicheType : SanduicheType;
    private _bread : Bread;
    private _protein : Protein;
    private _salad : Salad;
    private _addSauce : Sauce[] = [];

    get sanduicheType() : SanduicheType{
        return this._sanduicheType;
    }

    set sanduicheType(value : SanduicheType){
        this._sanduicheType = value;
    }

    get bread() : Bread{
        return this._bread;
    }

    set bread(value : Bread){
        this._bread = value;
    }

    get protein() : Protein{
        return this._protein;
    }

    set protein(value : Protein){
        this._protein = value;
    }
    get salad() : Salad{
        return this._salad;
    }

    set salad(value : Salad){
        this._salad = value;
    }
    
    addSauces(sauce : Sauce){
        this._addSauce.push(sauce);
    }

    get sauce() : Sauce[]{
        return this._addSauce;
    }
    
    get sauceTotal() : number{
        return this._addSauce.length;
    }


}