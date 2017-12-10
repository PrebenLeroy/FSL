class Diesel{

    

    calculateFuelScanLight(currentFuel, vehicletype){
        if(currentFuel.toLowerCase() === "diesel" && (vehicletype === "SCV" || vehicletype === "MCV")){
            return "Referentie";
        } else if (vehicletype === "SCV" || vehicletype === "MCV"){
            /*if(Wegingsfactoren.Gemiddelde belading van het voertuig != 0){
                return (
            Wegingsfactoren.duurzaamheidBronnenWaardeDiesel
            * DuurzaamheidVanBronnen%)
            +(Wegingsfactoren.Duurzaamheid (TonCO2/ Ton vervoerde goederen)Waardediesel
            *Duurzaamheid(TONCO2/TONVERVOERDEGOEDEREN)%)
            +(Wegingsfactoren.Kostprijs van brandstofDieselWaarde 
            *Kostprijs van brandstof%)
            +(Wegingsfactoren.Houdbaarheid van brandstofkwaliteitDieselWaarde
            *Houdbaarheid van brandstofkwaliteit%)
            +(Wegingsfactoren.SnelheidBrandstoftankenDieselWaarde*SnelheidBrandstoftanken%)
            +(Wegingsfactoren.GeluidsOverlastDieselWaarde*geluidsoverlast%);
                }else{
                 return 0; 
                }*/
            return 0;
        } else{
                return "Out of Scope";
        }
    }
}