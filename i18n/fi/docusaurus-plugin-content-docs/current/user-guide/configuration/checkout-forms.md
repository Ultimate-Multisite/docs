---
title: Kassaportaalit
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Kassapulomakkeet {#checkout-forms}

Kassapulomakkeet ovat helppo ja joustava tapa kokeilla erilaisia lähestymistapoja uuden asiakkaan hankkimisessa.

Ultimate Multisite 2.0 tarjoaa Kassapulomakkeen editorin, jonka avulla voit luoda kuinka monta lomaketta haluat, eri kentillä, tuotteilla ja jne.

Tämän ominaisuuteen pääset menulla Checkout Forms vasemmassa sivupalkissa.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Tällä sivulla näet kaikki kassapulomakkeesi.

Listatyyppi sisältää **Status** -sarakkeen, jolla voit varmistaa, onko jokainen lomake tällä hetkellä saatavilla asiakkaille:

| Status | Merkitys |
|---|---|
| **Active** (Aktiivinen) | Lomaketta voidaan käyttää missä tahansa sen lyhytkoodi tai rekisteröintisivu julkaistaan. |
| **Inactive** (Inaktiivinen) | Lomake on tallennettu mutta poistettu käytöstä. Asiakkaat eivät voi suorittaa kassalle sitä ennen kuin aktivoit lomakkeen uudelleen. |

Käytä status-saraketta ennen julkisen rekisteröintiprosessin muokkaamista, erityisesti kun pidät luonnoksia tai kausittaisia kassapulomakkeita käytössä samalla kun sinulla on elossa olevia lomakkeita.

Jos haluat luoda uuden, klikkaa sivun yläosassa Add Checkout Form -painiketta.

Voit valita näistä kolmesta vaihtoehdosta lähtöpisteenä: yksivaiheinen (single step), monivaiheinen (multi-step) tai tyhjä (blank). Valitse sitten ja klikkaa Siirry Editoriin.

Kun valitset **single step** tai **multi-step** lähtöpisteeksi, lomakkeen mallissa on oletuksena **Template Selection** -kenttä. Tämä kenttä antaa asiakkaillesi valita sivustomallin rekisteröintiprosessin aikana. Voit jättää sen paikoilleen, poistaa sen tai sijoittaa uudelleen kuin mitä minkä tahansa muun kentän kanssa editorissa.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Voit vaihtoehtoisesti muokata tai kopioida jo olemassa olevia lomakkeita napsauttamalla niitä kohdalla, missä on annettu valinnat. Siellä löydät myös vaihtoehdot lomakkeen shortcodeen kopioimiseen tai sen poistamiseen.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor - yleiskatsaus {#checkout-form-editor-overview}

Checkout Form Editor tarjoaa kattavan käyttöliittymän lomakkeidesi rakentamiseen. Tässä on yleiskatsaus editorin asettelusta:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Checkout Form -muokkaaminen {#editing-a-checkout-form}

Voit luoda checkout-lomakkeita eri tarkoituksiin. Tässä esimerkissä teemme työtä rekisteröintilomakkeen kanssa.

Siirtyäksesi checkout-lomakeeditoriin, anna lomakkeelles nimen (jota käytetään vain sisäiseen viittaukseen) ja slugin (jota käytetään shortcodejen luomiseen, esimerkiksi).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Lomakkeet koostuvat vaiheista ja kentistä. Voit lisätä uuden vaiheen napsauttamalla "Add New Checkout Step" -painiketta.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Modaalin ikkunan ensimmäisellä välilehdellä täytä lomakkeen vaiheen sisältö. Anna sille ID:n, nimen ja kuvauksen. Nämä kohdat käytetään pääasiassa sisäisesti.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Seuraavaksi aseta vaiheen näkyvyys. Voit valita vaihtoehdon "Always show" (Näytä aina), "Only show for logged in users" (Näytä vain kirjautuneille käyttäjille) tai "Only show for guests" (Näytä vain vieraille).

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Lopuksi määrittele vaiheen tyyli. Nämä ovat valinnaisia kenttiä.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Nyt on aika lisätä kenttiä ensimmäiseen vaiheese. Napsauta "Add New Field" -painiketta ja valitse haluamasi osion tyyppi.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Jokaisella kenttä on erilainen kuin toisella, ja jokaiselle kentälle on täytettävä eri parametreja. Tässä ensimmäisessä vaiheessa valitsemme "Username" (käyttäjänimi) -kentän.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Voit lisätä kuinka monta vaihetta ja kenttää tahansa tarvitaksesi. Tuotteidesi näyttämiseen asiakkaiden valitsemiseksi käytä Pricing Table (Hinnoittelutaulukko) -kenttää. Jos haluat antaa asiakkaillesi valita mallin, lisää Template Selection (Mallivalinta) -kenttä. Ja niin edelleen.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Huomautus:** username, email, password, site title (sivuston nimi), site URL (sivuston osoite), order summary (tilaussummary), payment (maksutapa) ja submit button (lähetä-painike) ovat pakollisia kenttiä tilauslomakkeen luomiseksi._

Kun työskentelet tilauslomakkeesi, voit aina käyttää Preview (Esikatselu) -painiketta nähdäksesi, miltä lomake näyttää asiakkaalle. Voit myös vaihtaa näkymää olemassa olevana käyttäjänä tai vierailijana.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Lopuksi Advanced Options (Lisäasetukset) -osiossa voit määrittää viestin "Thank You" (Kiitos) -sivulle, lisätä osia konversioiden seurantaan, lisätä omaa CSS:ää tilauslomakkeeseesi tai rajoittaa sitä tiettyihin muihin maihin.

![Advanced Options](/img/config/checkout-form-advanced.png)

Voit myös käynnistää tai sammuttaa tilauslomakkeen manuaalisesti kytkemällä tätä vaihtoehtoa oikean sarakkeen painikkeessa, tai poistaa lomakkeen pysyvästi.

![Active toggle](/img/config/checkout-form-active.png)

Lomakemistä lomaketta varten klikkaa "Delete"-vaihtoehtoa lomakkeen toimintojen kohdalta:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Älä unohda tallentaa kassalomakettasi!

![Save button](/img/config/checkout-form-save.png)

Lomakkeen lyhyen koodin (shortcode) saamiseksi klikkaa "Generate Shortcode" ja kopioi modaaliikkun ikkunassa näkyvä tulos.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Hinnoittelutaulukko -kenttä {#the-pricing-table-field}

**Pricing Table** (Hinnoittelutaulukko) -kenttä näyttää tuotteesi kassalomakkeella, jotta asiakkaat voivat valita suunnitelman. Kun muokkaat tätä kenttää, voit määrittää useita vaihtoehtoja:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Tässä on, miltä hinnoittelutaulukko näyttää etusivun rekisterilomakkeessa:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products** (Tuotteet): Valitse, mitkä tuotteet näytetään ja millä järjestyksessä ne ilmestyvät.
  * **Force Different Durations** (Pakota eri kestoja): Kun tämä on aktiivinen, kaikki tuotteet näytetään riippumatta siitä, onko niillä vastaava hinnan vaihtoehto tällä hetkellä valitulla laskutusajanjaksolla. Kun se on poistettu käytöstä (oletus), tuotteet ilman vaihtoehtoa valitulle ajanjaksolle piilotetaan.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Piilota, kun on valittu etukäteen): Piilottaa hinnoittelutaulukon, jos suunnitelma on jo valittu URL:n kautta (esim. `/register/premium`).
  * **Pricing Table Template** (Hinnoittelutaulukkon malli): Valitse visuaalinen malli hinnoittelutaulukolle (Yksinkertainen lista, Legacy jne.).

Jos lisäät tuotteen Hinnoittelutaulukkoon ennen kuin lomake sisältää kentät, jotka ovat tarpeen kyseisen tuotteen kassavirran täyttämiseen, editor näyttää nyt varoituksen. Käytä varoitusta puuttuvän vaaditun kentän lisäämiseen ennen muutosten julkaisemista tai tallentamista elävälle rekisterilomakkeelle.

### Lisää ajanjakson valintapainike {#adding-a-period-selection-toggle}

Jos olet konfiguroinut [Price Variations](creating-your-first-subscription-product#price-variations) -vaihtelut tuotteillesi (esim. kuukausi- ja vuosimaksu), voit lisätä **Ajanjakson valintapainikkeen** ostoskori-/maksuaformaasiisi. Tämä kenttä näyttää kytkimen, jolla asiakkaat voivat vaihtaa laskutusjaksojen välillä, ja hinnoittelutaulukko päivittyy dynaamisesti reaaliajassa.

#### Vaihe 1: Aseta hinta-vaihtelut tuotteillesi {#step-1-set-up-price-variations-on-your-products}

Ennen ajanjakson valintapainikkeen lisäämistä varmista, että tuotteillasi on konfiguroitu hinta-vaihteluita. Mene kohtaan **Ultimate Multisite > Products**, muokkaa tuotetta ja siirry välilehdelle **Price Variations** lisätä vaihtoehtoisia laskutusjaksoja (esim. Vuosimaksu alennuksella).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Vaihe 2: Lisää ajanjakson valintapainike ostoskori-/maksuaformaasiisi {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Mene kohtaan **Ultimate Multisite > Checkout Forms** ja muokkaa ostoskori-/maksuaformaasiisi.

2. Vieritä alas siihen vaiheeseen, jossa on kenttä **Pricing Table** (Hinnoittelutaulukko) ja napsauta **Add new Field** (Lisää uusi kenttä).

3. Kentän tyyppivalinnan dialogissa valitse **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfiguroi jaksoasetukset. Jokaisella vaihtoehdolla tarvitaan:
   * **Duration** (Kesto): Luku (esim. `1`)
   * **Duration unit** (Kestoyksikkö): Jakson tyyppi (Päivät, Viikot, Kuukaudet tai Vuodet)
   * **Label** (Tunniste): Teksti, jonka asiakkaat näkevät (esim. "Kuukausi", "Vuosi")

5. Napsauta **+ Add Option** (Lisää vaihtoehto) lisätä lisää jaksovalintoja. Nämä vaihtoehdot on oltava samat kuin hinta-vaihtelut, jotka olet konfiguroinut tuotteillesi.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Valitse **Period Selector Template** (Clean on oletusarvo, joka renderöi yksinkertaisen tyylitellyn valitsimen, jota voidaan muokata CSS:llä).

7. Napsauta **Save Field**.

#### Vaihe 3: Sijoita kenttä hinnoittelatabelin yläpuolelle {#step-3-position-the-field-above-the-pricing-table}

Paras käyttökokemus varmistetaan, jos Period Selection -kenttä ilmestyy **ennen** Pricing Table -kenttää kassaprosessissa. Voit vetää kenttiä uudelleen järjestelläksesi ne kassavalikon muokkaustilassa. Näin asiakkaat valitsevat ensin laskutusjakson ja näkevät sen jälkeen hinnan kyseiselle ajanjaksolle.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Miten se toimii etupäässä (Frontend) {#how-it-works-on-the-frontend}

Kun olet konfiguroinut kentän, asiakkaat, jotka vierailevat rekisteröitymissivullasi, näkevät jaksovalitsimen hinnoittelatabelin yläpuolella. Kun he napsauttavat eri laskutusjaksoa:

  * Hinnoittelatavla päivittyy välittömästi näyttämään hinnat valitulle ajanjaksolle (sivun uudelleenlatausta ei tarvita).
  * Jos **Force Different Durations** on poistettu käytöstä Pricing Table -kentällä, tuotteet, joilla ei ole hintavaihtelua valitulle ajanjaksolle, piilotetaan.
  * Jos **Force Different Durations** on päällä, kaikki tuotteet pysyvät näkyvissä, vaikka niillä ei olisi vaihtelua valitulle ajanjaksolle (ne näyttävät oletushinnan).

#### Laskutusjakson esivalinta URL-osoitteen kautta {#pre-selecting-a-billing-period-via-url}

Voit myös esivalita tuotteen ja laskutusjakson URL-osoitteen avulla. Ultimate Multisite tukee näitä URL-mallinnuksia:

  * `/register/premium` — Esivalitsee vain "Premium"-tuotteen
  * `/register/premium/12` — Esivalitsee tuotteen ja 12 kuukauden kestön
  * `/register/premium/1/year` — Esivalitsee tuotteen 1 vuoden kestolla

### Mallin valintakenttä (Template Selection Field) {#the-template-selection-field}

**Template Selection** -kenttä antaa asiakkaille valita sivustomallin kassalla. Se on nyt oletuksena sisällytetty **single step** ja **multi-step** kassavalikon malleihin, jotka lisätään Ultimate Multisite v2.6.1:ssä.

#### Kentän lisääminen manuaalisesti {#adding-the-field-manually}

Jos työskentelet lomakkeen kanssa, joka on luotu ennen versiota v2.6.1 tai aloitettu tyhjältä mallilla:

1. Mene **Ultimate Multisite > Checkout Forms** -osioon ja muokkaa kassalomakettasi.
2. Vaiheessa, jossa kerät sivustotietoja, napsauta **Add new Field** (Lisää uusi kenttä).
3. Valitse kenttätyyppivalikosta **Template Selection** (Mallin valinta).
4. Konfiguroi kenttä:
   - **Label** (Tunniste) — Otsikko, jonka asiakkaat näkevät malligridin yläpuolella (esim. "Valitse sivustomalli").
   - **Required** (Vaadittu) — Tieto siitä, onko asiakkaan täytynyt valita malli ennen jatkamista.

#### Miten se toimii {#how-it-works}

Kun asiakas valitsee mallin kassalla, Ultimate Multisite käyttää sitä uuden sivuston luomiseen. Näytettävät mallit tulevat sinun **Site Templates** -listalta (**Ultimate Multisite > Site Templates**). Tässä näkyvät vain ne mallit, jotka on merkitty saatavilla asiakkaille.

### Checkout-form base domains (Kassalomakkeen perusdomeenit) {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 käsittelee kassalomakkeen **Site URL** -kentissä määritettyjä domeeneja verkkojen perusdomeeneina. Käytä kentän saatavilla olevia domain-asetuksia, kun haluat asiakkaiden luovan sivustoja yhden tai useamman yhteisen rekisteröintidomeenin alla, kuten `example.com` ja `sites.example.com`.

Yhteiset kassalomakkeen perusdomeenit eivät ole per-sivuston mukaisia custom domain -määrityksiä. Kun asiakas luo alikansion sivuston jommankaikkien näistä perustoista, Ultimate Multisite ei luo mappattua domeenia rekisteriä, joka tekisi yhteisen isännän omaksi vain kyseiselle sivustolle. Yhteinen isäntä pysyy saatavilla sisar-sivustoille, jotka käyttävät samaa kassalomakkeen perusdomeenia.

Pidä custom domainit yksittäisille asiakkaille mappatuille isännöille, kuten `customer-example.com`. Pidä kassalomakkeen perusdomeenit yhteisiä rekisteröintihisäntöjä varten, joita monet sivustot voivat käyttää.

#### Kentän poistaminen {#removing-the-field}

Jos et tarjoa sivustotempleja, poista Template Selection -kenttä lomakkeestasi. Asiakkaat saavat sen sijaan automaattisesti valitun oletustemppelin, joka on määritetty **Ultimate Multisite > Settings > Site Templates** -kohdassa.
