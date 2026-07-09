---
title: Maksude käsitlemine
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Maksude käsitlemine

Ultimate Multisite’il on maksude kogumise moodul sisse ehitatud meie põhipluginasse, seega kui pead oma plaanidelt, pakettidelt ja teenustelt müügimakse koguma, saad seda hõlpsasti teha ilma lisamooduleid paigaldamata.

Euroopas asuvatele ettevõtetele pakume **lisamoodulit**, mis lisab tööriistu ja funktsioone, et paremini **toetada VAT** nõuete täitmist.

Ultimate Multisite ei esita ega kanna makse sinu nimel valitsusele; me lihtsalt aitame sul tehingu hetkel koguda asjakohased maksud. **Maksud pead siiski ise üle kandma.**

## Maksude kogumise lubamine

Maksude kogumine ei ole vaikimisi lubatud. Selle lubamiseks pead minema jaotisse **Ultimate Multisite > Seaded > Maksud** ja lülitama sisse sätte Luba maksud.

![Luba maksud lüliti Maksude seadete lehe ülaosas](/img/config/settings-taxes-enable.png)

Siin on maksuseadete lehe täielik vaade:

![Maksuseadete täielik leht](/img/config/settings-taxes-full.png)

Saad vaadata ka üksikute toodete maksuseadeid:

![Toodete maksuseaded](/img/config/settings-taxes.png)

### Maks välja arvatud vs. maks hinna sees

Vaikimisi on kõigi sinu toodete hinnad maksuta, mis tähendab, et maksud **ei sisaldu** toote hinnas. Kui tuvastame, et klient peab antud ostu pealt makse tasuma, lisame maksud **lisaks** vahesummale.

Kui eelistad, et maksud sisalduksid sinu toote hinnas, saad seda teha, lubades sätte **Maks hinna sees**.

![Maks hinna sees lüliti rida sätte Luba maksud all](/img/config/settings-taxes-inclusive.png)

Ära unusta tehtud muudatusi **salvestada**.

###

## Maksumäärade loomine

Pärast maksude kogumise lubamist pead looma konkreetsete asukohtade jaoks maksumäärad, kasutades meie maksumäärade redaktorit.

Redaktorile pääsed ligi, klõpsates maksuseadete lehe külgribal nuppu **Halda maksumäärasid**.

![Halda maksumäärasid link seadete lehe Maksumäärade paneelis](/img/config/settings-taxes-manage-rates.png)

Maksumäärade redaktori lehel saad lisada uusi maksumäärasid, klõpsates nuppu **Lisa uus rida**.

![Maksumäärade redaktori tabel nupuga Lisa uus rida ülaosas](/img/config/tax-rates-editor.png)

Peaksid igale maksumäärale andma **pealkirja** (kasutatakse arvetel). Seejärel saad valida **riigi** (kohustuslik), **osariigi/maakonna** ja **linna** (mõlemad valikulised), kus seda maksu rakendatakse. Lõpuks lisa **maksumäär protsentides**.

### Maksukategooriad

Saad luua ka mitu maksukategooriat, et lisada erinevat tüüpi toodetele erinevad maksumäärad.

Klõpsa **Lisa uus maksukategooria**, seejärel kirjuta oma kategooria nimi ja vajuta **Loo**.

![Lisa uus maksukategooria nupp maksumäärade redaktori ülaosas](/img/config/tax-categories-add.png)

![Maksukategooria nime sisestusväli kategooria loomise modaaliaknas](/img/config/tax-categories-create-modal.png)

Kategooriate sirvimiseks klõpsa **Vaheta** ja vali kategooria, kuhu soovid uusi makse lisada.

![Vaheta rippmenüü nupp maksukategooriate vahel vahetamiseks](/img/config/tax-categories-switch.png)

![Maksukategooria valiku rippmenüü, mis näitab saadaolevaid kategooriaid](/img/config/tax-categories-select.png)

Konkreetse toote maksukategooria saad määrata, minnes **toote muutmise lehele** ja seejärel Maksude vahekaardile.

![Toote maksude vahekaart maksukategooria ja maksustatavuse lülitiga](/img/config/product-taxes.png)

Samal ekraanil saad lüliti **Kas on maksustatav?** välja lülitada, et anda Ultimate Multisite’ile teada, et selle konkreetse toote pealt ei tohiks makse koguda.

## Euroopa VAT tugi

Nagu varem mainitud, on meil EL-is asuvatele klientidele saadaval lisamoodul, kellel on Euroopa VAT regulatsioonidest tulenevalt täiendavad nõuded.

Meie VAT tööriistad aitavad paari olulise asjaga:

  * EL-i VAT määrade lihtne laadimine;

  * VAT numbri kogumine ja valideerimine – ning pöördmaksustamine VAT-vabastusega üksustele (näiteks kehtiva VAT numbriga ettevõtetele);

Selle lisamooduli paigaldamiseks mine jaotisse **Ultimate Multisite > Seaded** ja seejärel klõpsa külgriba linki **Vaata meie lisamooduleid**.

![Seadete lehe külgriba lingiga Vaata meie lisamooduleid](/img/config/settings-taxes-addons-link.png)

Sind suunatakse meie lisamoodulite lehele. Seal saad otsida **Ultimate Multisite VAT lisamoodulit** ja selle paigaldada.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Seejärel mine jaotisse **Võrgu haldus > Pluginad** ja aktiveeri see lisamoodul kogu võrgus.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Kui naased **Maksuseadete vahekaardile**, näed uusi saadaolevaid valikuid. Lülita sisse valik **Luba VAT tugi**, et uued VAT tööriistad lubada. Ära unusta oma seadeid **salvestada**!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT maksumäärade tõmbamine

Üks tööriistadest, mille meie integratsioon lisab, on võimalus laadida EL-i liikmesriikide maksumäärasid. Seda saab teha, külastades maksumäärade redaktori lehte pärast EL-i VAT toe lubamist.

Lehe allosas näed VAT tõmbamise valikuid. Määra tüübi valimine ja nupu **Uuenda EL-i VAT määrasid** klõpsamine tõmbab üles ning täidab tabeli automaatselt iga EL-i liikmesriigi maksumääradega. Seejärel pead selle ainult salvestama.

![Uuenda EL-i VAT määrasid nupp maksumäärade redaktori allosas](/img/config/tax-rates-vat-pull.png)

Saad väärtusi pärast nende tõmbamist ka muuta. Selleks muuda lihtsalt vajalikku tabelirida ja klõpsa uute väärtuste salvestamiseks.

### VAT valideerimine

Kui VAT tugi on lubatud, lisab Ultimate Multisite kassavormile arveldusaadressi välja alla täiendava välja. Väli kuvatakse ainult EL-is asuvatele klientidele.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite valideerib seejärel VAT Numberi ja kui see osutub kehtivaks, rakendatakse pöördmaksustamise mehhanismi ning selle tellimuse maksumääraks määratakse 0%.
