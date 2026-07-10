---
title: Esimene subskriptiooniprodukti loomine
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Esimeseabõdu esimene subskriptiooniprodukti (v2) {#creating-your-first-subscription-product-v2}

_**TÄHTIS NOTE: See artikkel on ainult Ultimate Multisite versiooni 2.x kasutajatele. Kui te kasutate versiooni 1.x,**_ **_vaata seda artiklit**_**.

Võrgu käivitamiseks ja teenuste müügude algamise jaoks peab teil erinevaid subskriptioonivõimalusi. Kuidas luute neid artiste? Millise tüüpi artiste saate pakutada? Sellel artiklis käitemine on kõik, mida te peate teada nende kohta.

## Artikkeltyüp {#product-type}

Ultimate Multisite abil saate oma klientidele kaks kategorilist artiste pakkuda: **pläne** ja **add-ons (Order Bump)**. Add-onid saab jagada kaheks tüüpi: **pakettid** ja **teenused**. Näelame nende erinevusi ja eriklassid järgmises osas.

  * **Pläne**: Ultimate Multisite põhialuslik produkt. Klientil võib olla li membership ainult siis, kui see on seotud plaaniga. Plaan pakub klientidele ühe või mitu veebileht (see sõltub teie plaani konfiguratsioonidest) ja selle piiranguid, mida te asetate oma produkti redigeerimise lehel.

  * **Pakettid**: add-onid, mis mõjutavad Ultimate Multisite plaanide funktsioonele otse. Need muudavad piiranguid või lisavad uusi ressurssid, pluginid või teema originaalile plaani, mida klient on ostnud. Näiteks võib põhiline plaan võimaldada ühe kuu jooksul 1000 külastust ja saate saadaval paketti luua, mis seda arvu suurendab 10 000-le.

  * **Teenused**: add-onid, mis ei muuta Ultimate Multisite funktsioone. Need on ülesanded, mida te suutate klientide jaoks plaaniga ostnud nende lisaks realiseerida. Näiteks võib teie klient osta plaani, mis võimaldab ühe veebilehti, ja samal ajal maksuda lisateenuse eest, mis selle veebilehe disaini teeb.

## Artikkelide haldamine {#managing-products}

Paljudelised kasutajatele võib Ultimate Multisite-nimega **Products** tab (Ultimate Multisite > Products) võrrelda traditsioonilise hoolduskeskkonna plaanidega.

Ultimate Multisite'is Products tab määratleb selle konkreetse toote või teenuse jaoks kehtevad konstruktsioonid ja piirangud. Need konstruktsioonid ulatuvad toote või teenuse kirjeldusse, hinnan, podateks ja lubunditele.

See osade juhendab teid selle olulise alustiku Ultimate Multisite-is.

![Products list page](/img/config/products-list.png)

## Toote lisamine {#adding-products}

Kas see plaan on, pakett või teenus, mis uue esinemise punkt on **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Aki sisaldab kaks peamist osakonda. Vasakul on mitu välilehte, mis aitavad toote definitsioonil, ja paremal on mõned osad, mis määratlevad toote alalise hinnan, selle aktiivse staatuse ja toote pildi.

![Product edit page overview](/img/config/product-edit-full.png)

### Kirjeldus {#description}

Alustava toote teavet saab definitsionaalselt seada antudes toote nimi ja kirjeldus. Need tunnused näidatakse igal kohas, kus on vaja toote teavet, nagu plaanide ja hinnakohitamise valikud, faktuurid, uuendused ja nii.

![Product description section](/img/config/product-description.png)

### Hinnaklass {#pricing-type}

Aki paremal pool on võimalik definitsionaalselt seada alustav hinda.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite toetab kolme erinevat hinnaklassi. **Paid** (maksutud) valik küsib võrkuadministraatorilt teavet toote hinnast ja lahkumise sagedustest.

### Hinda seadmine {#pricing}

Hinda komponent määratleb alustava toote hinnan ja lahkumise intervallit.

![Pricing and save section](/img/config/product-pricing-save.png)

seega näiteks $29,99 hinnaga ja 1 kuudise seadusega on lahendus iga jooni jooksul $29,99. Samuti $89,97 hinnaga ja 3 kuudise seadusega on selle summa iga kvartali jooksul.

### Lahtimisajad (Billing Cycles) {#billing-cycles}

Lahtimisajad osas määratavad eelmänel lahenduse sagedust ja mõistatakse üldiselt lepingute või fikseeritud perioodide kontekstis.

![Pricing and save section](/img/config/product-pricing-save.png)

Näiteks, kui toote hind on $29,99 ja seadusega 1 kuu ja 12 lahtimisajad, siis toote eest tuleb iga jooni jooksul $29,99 kuud jooksul järgmiste 12 kuudise aja jooksul. Teiselt sõnastuselt see seaduseelade asub fikseeritud hinnakohana $29,99 kuud ja lõpetab lahtimise.

### Protsessikord (Trial Period) {#trial-period}

Offer trial toggle'i aktiveerimine võimaldab võrerekadministratoril määrata toote jaoks protsessikorda.

![Pricing and save section](/img/config/product-pricing-save.png)

Protsessikorda ajal on klient saab toote kasutada ja teda ei lahtita, kuni protsessikord on lõpetatud.

### Seadistamise tasu (Setup Fee) {#setup-fee}

Võite ka kohaldada seadistamise tasu oma plaanile.

![Pricing and save section](/img/config/product-pricing-save.png)

See tähendab, et teie klient maksab esimesel lahtimisega lisakohana (hinnakaasa hinnaplaani), mis vastab selle tasule, mida te definitsite selles osas.

### Aktiivne (Active) {#active}

Aktiivse toggle'i aktiveerimine määratleb tõhusalt, kas toote on saadaval klientide uute registreerimist jaoks.

![Active toggle](/img/config/product-active.png)

Kui on võimalik, et olemasoleva klientide korral selle plaan seadistuse sulgemine lüliti lahtumise asendab plaanid ja eemaldab selle tulevikus tulevate registreerimist. **Olemasolevad klientid plaanil jätkavad lahendamise** kuni nad on üülesõidu uue plaani või plaanist eemaldatud.

### Toodebild {#product-image}
**Upload Image** (Pildiku üleslaadimise) nupp võimaldab võrku administraatorit kasutada mediabibliot teadaid toote pildi valimiseks või üleslaadimiseks.

![Product image section](/img/config/product-image.png)

### Eemaldamine {#delete}
**Delete Product** (Toote eemaldamine) nupp eemaldab toote süsteemis. See ilmub pärast seda, kui toode on avaldatud.

![Delete product section](/img/config/product-delete.png)

Eemaldamise tegemise puhul ei ole toodet paigutatud korvi osas. Seetõttu eemaldamine on ütlematav.

### Toote valikud {#product-options}
Kui põhilisest toote teavet on määratletud, aitavad **Product Options** (Toote valikud) võrku administraatorit määrama toote spetsiifilisi omadusi.

#### Üldised {#general}
**General** (Üldised) tab määratleb ülestoote üldised omadused, mis ei ole kaasatud muid toote-spetsiifiliste tabidele.

![General tab](/img/config/product-general-tab.png)

Selgias **product slug** (tootelu slug) määrab selle slugi, mille abil toode on tunnistatud URL-ides ja Ultimate Multisite'i teistes osades.

Ultimate Multisite toetab mitmeid toote tüüpe: Plan (Plaani), Package (Pakendi) ja Service (Teenuse). **Product Options** tabid muudutatakse dünaamiliselt sõltuvalt määratletult toote tüübist.

**Customer Role** (Klient roll) määrab selle rolli, mille klientile on antud, kui veebileht loodakse. Tavaliselt suurim tähelepanu võtavad kõigi võrku administraatorite jaoks Ultimate Multisite oletusroll või Administrator. Ultimate Multisite oletusroli saab seada **Ultimate Multisite > Settings > Login & Registration** (Seaded > Logi ja registreerimine) sektsioonist.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Upgrade ja Allumise {#up--downgrades}

See tab määrab, millised allumise ja allaallumise võimalused on kaisa klientile oma konkreetse taseme jooksul saadaval.

Selle konsepti mõistamiseks võite kasutada näiteks esimese asja kui niche Ultimate Multisite installatsioon pakub oma klientidele õppemise juhtimise lahendusi. Selleks defineeritakse kolm plaani (Basic, Plus ja Premium) ning iga planile aktiveeritakse spetsiifilne plugin (plugin). (Pluginide aktiveerimise juhiste kohta leiate hiljem selle loogu.)

Kui Ultimate Multisite installatsioon teenib ka ärijuhtimise veebiseid või e-commerce veebiseid, võib need plaadid nõuda erinevaid pluginide paigutamist ja aktiveerimist.

Sellest pool on soovitatav ja probleemne võimaldada eLearning klientidele siiruda e-commerce plaadidele, kuna need plaadid, hinnad ja piisendused võivad olla sobimatu.

Seega, et klientide teed piirata ja juhtumate vältida, võib võrkuadministrator definitsiona pooli (plan group) ja selle pooles määrata, mille plaadidele klient saab siiruda.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Plaani pooli definointiks määrate kooskõlas olevad plaadid **plaani pooli** nimekirjas. **Tootujärjestus** määrab, kuidas plaadid järjestatakse ja näidatakse kõige madalamast kõrgele.

Ultimate Multisite sisaldab ka **order bump** funktsiooni, kus sobivaid lisatooteid ja -teenuseid saab plaadidele lisada. Need pakutakse klientile lisateemena, mida saab lisada plaadidele kassas või allumise ajal.

#### Hinnakohangud {#price-variations}

Hindratevõtme võimaldavad võrkuadministraatoril määrata alternatiivseid hinnatseja taseme sõltuvalt ajast. See settring võimaldab pakkuda sama toote jaoks erinevaid lahkumiseaegusi, nagu kuudlik, kvartalik, aastane või misige muu lahkumiseaeg. Näiteks saate määrata toote $29.99/kuus hinnaga ja diskretsiooni aastale $249.99-ga.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Hinnatseja variantide loomiseks lülitage **Enable Price Variations** (Hinnatseja variantide aktiveerimine) seadistust aktiivseks ja klõpsake **Add new Price Variation** (Lisa uus hinnatseja variant) nupul.

![Product price variations](/img/config/product-price-variations.png)

Variantiga sisestamiseks määrate lahkumiseaeg, perioodi ja variantide hind. Lisavariante saate lisada nupuga uuesti klõpsates.

Näiteks, kui teie põhitoote hind on $29.99 kuus, saate lisada:

  * **3 Kuud** 79.99-ga (väike diskretsiooni kuudlikest hinnast)
  * **1 Aasta** 249.99-ga (oluline diskretsioone aastale kinnituse korral)

:::tip Lahkumiseaegse seadistuse näitamine esitegevuskonnas (Frontend)

Hinnatseja variantid üksi väärtust ei lisa esitegevuskonna lahkumiseaegse seadistust. Et võimaldada kliendide vahetada lahkumiseaedade vahel (nt Kuudlik / Aastane), peate lisama lahkumiseaegse valikule **Period Selection** (Perioodi valik) sulgusevormi. Vaata [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) ülesande järgi samm-samme juhiste saamiseks.
:::

#### Kulud {#taxes}

**Taxes** (Kulud) tabel on seotud kulude seadistustega, mida määratakse **Ultimate Multisite > Settings > Taxes** ja konkreetseks kulude hinnatustega. Kulude aktiveerimiseks ja kehtestuste määramiseks võite vaadata dokumentatsiooni [Ultimate Multisite: Settings] all.

![Taxes tab](/img/config/product-taxes.png)

Varemise ed eelmiselises näidustuses definisime paiknes meie kohalik maksu tasand, mis on kehtiv Californias (USA) asutatud klientidele 7,25%.

Kui maksu tasand on määratud **Ultimate Multisite > Settings > Manage Tax Rates**-isessä, saab seda valita toote tasandil.

![Taxes tab](/img/config/product-taxes.png)

Et tähistada, et toode on maksetav, lülitage sisse **Is Taxable** -liit (toggle) ja valige kehtiv maksu tasand Tax Category -valikust.

#### Sitatemaid (Site Templates) {#site-templates}

Lõpulemaalt on sitatemaid täielikult WordPress-veebileht, mida klienti asutamise alguses klonitakse nende lehel.

![Site Templates tab](/img/config/product-site-templates.png)

Verkestusadministraator luuub ja konfigurub sitatemaid regulaarseks WordPress-lehelse, kus on aktiveeritud ja konfiguratsiooniga olevaid teemaid, pluginid ja sisu. Sitatemaid klonitakse täiesti samaelt klientile.

See tab võimaldab nettverksadministraatoril määrata sitatemaid käitumise uue abonnentsuse korral. Selle plaani kasutamiseks lülitage **Allow Site Templates** -liiti aktiveeritud oleva asendaminele.

Kui **Allow Site Templates** on välja lülitatud, klientide ei saa valita templatid, isegi kui ostukorvi vormi, jagatav link või URL-parameter teeks templatid saadaval oleks võimalus. Ultimate Multisite pakub seda piirust nüüd tagasiandmiseks kaudu variantide vahel: plaani seadused kontrollitakse esmalt, seejärel ostukorvi formaati templaid seadused ja lõpuks ette valitud või URL-i poolt antud templatid. See hoiab plaani piiranguid ühtlustatud ja vältib templatide ilmumist sellistest toote kohta, mis neil seda mitte pakkuda peaks.

**site template selection mode** määrab sitatemaid käitumise abonnentsuse protsessis.

See **D** **Default** nastub seguim ostuudest vormi. Kui võrkuadministrator on määratnud lahenduse valikust templati valikuvõtja protsessis ja see on määritatud templadega, siis see nastub järgib sellel sammuga asitud direktiividele.

**A** **Assign Site Template** määratmine pakuvad antud templati valikut. Järgnevalt eemaldatakse vormi lahenduse protsessist kõik templati valikuvõtja sammud.

Viimnis, **C** **Choose Available Site Templates** ületab vormi lahenduse sammuga määratud templadega sellel nastub valitud templadega. Väliväljendatud templati saab ka määratada, et aidata klienti valikuvõtja.

Lõpuks, kui võrkuadministrator soovib, et templati valikut toimuaks vormi lahenduse sammudel, siis ' _default_ ' nastub määratamine piisab. Alternatiivseks, et eemaldada ja luksta templati valikuvõtja ning delegereerida valikuvõtja plaanimäärustele, võivad olla soovitatavad ' _assign new template_ ' või ' _choose available site templates_ ' valikud.

#### Sised {#sites}

**Sites** tab on Ultimate Multisite'i piirangute funktsionaalsuse osa.

![Sites tab](/img/config/product-sites.png)

See nastub määrab, kui palju sissejuhatatud kasutaja saab oma li membershipi all luua.

Piirangut aktiveerimiseks lülitage **limit sites** registre sulge (active state) ja määratage maksimaalne numberite site allowance -väljas.

#### Kuidas {#visits}

**Visits** tab on Ultimate Multisite'i piirangute süsteemi lisakogus. See nastub võimaldab arvestada ja sellele järgnev lahendamine ainulaiste külastajate kasutaja veebile.

![Visits tab](/img/config/product-visits.png)

Marketing perspekti kui administratorid võivad kasutada seda asetust selleks, et juhatada klientide upgrade'ile nende plaanide ülesande pärast piirde ületamise korral. See asetust võib ka aitada networkadministratoril kursta ja vältida liiga suurte trafikid veebileidel, et süsteemi ressursside säilitamiseks.

Selle funktsiooni kasutamiseks lülitage **limit unique visits** (unika külastuste piir) sisse aktiivse oleku ja määratage maksimaalne arv unika külastajate **unique visits quota** (unika külastuste kvooti) välja.

Kui see piir on ületatud, ei teenida Ultimate Multisite klientide veebileid, vaid näitab sõnumit selle kohta, et piired on ületatud.

#### Kasutajad {#users}

Ultimate Multisite'i 'Users' (Kasutajad) piirused võimaldavad networkadministratoril määrata piire kasutajate loomise ja rollide küsimise arvu.

![Users tab](/img/config/product-users.png)

Piirustamise funktsiooni aktiveerimiseks lülitage **limit user** (kasutaja piir) sisse aktiivse oleku, liigutes selle paremale.

Järgmine iga rolli piirustamiseks lülitage selle kõrval olev toggle sisse aktiivse oleku ja määratage maksimaalne ülemine piir vastuvõtva välja.

#### Post Tüüpid {#post-types}

**Post Types** (Sisu tüüpid) tab võimaldab networkadministratoril määrata üksikasjalisi piire WordPressi laialikust post tüüpide üle.

![Post Types tab](/img/config/product-post-types.png)

WordPressi konstruktsioonist tõttu on sisu ja post tüüpid olulised osa selle peamist funktsionaalsest, seega Ultimate Multisite'i piirustamise süsteem on loodud aitama networkadministratoril piiride loomisel ja säilitamisel.

Selle piirustamise subsüsteemi aktiveerimiseks lülitage **limit post types** (post tüüpide piir) sisse aktiivse oleku, liigutes selle paremale.

Järgmine on iga posttüüpi jaoks piirustamise aktiveerimine: liige selle üles suunamiseks paremale ja määratage vastava välja maksimaalne ülemine väärtus õiguses oleva sälja.

#### Diski ruumi {#disk-space}

**Disk Space** tab võimaldab võrerekendjate piirata klientide poolt kasutatavae ruumi.

![Disk Space tab](/img/config/product-disk-space.png)

Tüpselt WordPress multisite'is on pealikud failid jagatud kõigis sildites, ja eraldi luodud direktorid mediafailide ja ülesannete jaoks, millele need seadused ja piirused kohalduvad.

Diski kasutamise piirustamiseks aktiveerige **limit disk size per site** liigutades selle paremale oleva olekse.

Seededes määrate maksimaalse ülemine väärtus megabajtides **disk space allowance** välja.

#### Kasutusdomaanid {#custom-domain}

See valik aktiividesel aktiveerimisel saate võimaldada kasutusdomaane ainult selle plaanil.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Teemad {#themes}

Toote valikute **Themes** tab võimaldab võrerekendjal piirata teemade kasutajatele valikuks ja valikult pakutada, samuti abiandlikult määratada teema oleku.

![Themes tab](/img/config/product-themes.png)

_**Märkus: Et teemad oleksid kasutajatele saadaval, tuleb neil aktivere võrerekendja poolt.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

**Visibility** (Nähtavus) valik määrab, kas see teema on näha klientile nende sildis **Appearance > Themes** tabist. Selle valiku seadmine **Hidden** (Salane) eemaldab teema nähtamisest ja seob selle võimaluse välja valita ja aktiveerida.

![Themes tab](/img/config/product-themes.png)

**Behavior** (Ühendusviis) valik võimaldab võrerekendjal määratada teema oleku klienti sildil luomise ajal.

Käesoleva seisundisega on teema kaisa, et kasutaja saab seda itse aktiveerida. Küll aga ebatavaline seisund on sellel kasutajal võimaluse puudutamine tema aktiveerimiseks. Viimeks **Force Activate** valik pakuvad tema valimist ja aktiveerimise pakkuja poolt, seades selle oletuseks uue veebilehva loomisel.

#### Pluginid {#plugins}

Samuti nagu Theme-välil, Ultimate Multisite võimaldab võrerekadministratoril määrata pluginide nähtavust klientidele samuti kui nende seisundit uue veebilehva loomisel.

![Plugins tab](/img/config/product-plugins.png)

**Nähtavus** valik võimaldab pluginit olla kas nähtav või varjatud klientil, kui seda vaadatakse tema veebilehel Plugin-menüü valiku abil.

Võrerekadministrator saab pluginide käitumist edasi muuta kasutades käituminevalikus olevat välja.

![Plugins tab](/img/config/product-plugins.png)

**Oletus** valik hinnatakse pluginise seisundit, mida klient on veebilehva mallis määranud. Seega pluginid, mis aktiveeruvad mallis, jäävad aktiveeritud, kui malli klienti veebilehvale klonitakse.

**Force Activate** paigutab pluginite aktiveeritud seisundi uue veebilehva loomisel ja vastupidi **Force Inactivate** deaktiveerib pluginite uue veebilehva loomisel. Mõlemates suurustes võimaldab klient manuaalselt muuta pluginide seisundit oma WordPress Plugin-menüü abil.

Lülit **Force Activate & Lock** seade toimib samuti, kuid see vähendab kasutaja võimalust muuta veebilehja staatust. Seade Force Activate ja Lock pakub pluginile force'i aktiivseks olema ja peetakse selle deaktiveerimise eest ära. Samuti pakub **Force Inactivate & Lock** seade pluginile force'i inaktiivseks olema ja peetakse kasutaja võimalust aktiveerida see ära.

Võrreja võib arvestada Force Activate & Lock ja Force Inactivate & Lock seadeid koos veebilehja mallidega, kui pluginid on aktiveeritud, kuna need seaded võivad mõjutada mallide staatust, kui neid valitud.

#### Tagastandimise piirangud {#reset-limitations}

**Reset Limitations** tab tagastab kõik sellele kasutaja määratud kogutud piirangud toote kohta. Piirangute tagastamiseks klõpsake **reset limitations** nupulile.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Tegevuse kinnitamiseks liiga **confirm reset** lühi seade parema olekuks ja klõpsake **reset limitations** nupulile.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Toote muutmise, duplikat või eemaldamine {#edit-duplicate-or-delete-product}

Käesolevaid toote saab muuta, duplikat või eemaldada navigeerides **Ultimate Multisite > Products** ja liigutades olemasoleva toote nime üle.

![Product hover actions](/img/config/product-hover-actions.png)
