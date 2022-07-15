import IBuilder from "../builders/interfaces/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private builder : IBuilder){};

    constructXsaladaSanduiche(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(Bread.PAOHAMBURGUER);
        this.builder.setProtein(Protein.HAMBURGUERFRANGO);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.addSauces(new Sauce("Maionese"));
        this.builder.addSauces(new Sauce("Barbecue"));
    }

    constructHotDogSanduiche(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.PAOHOTDOG);
        this.builder.setProtein(Protein.SALSICHA);
        this.builder.setSalad(Salad.MILHO);
        this.builder.addSauces(new Sauce("Maionese"));
        this.builder.addSauces(new Sauce("Ketchup"));
        this.builder.addSauces(new Sauce("Mostarda"));
    }
}