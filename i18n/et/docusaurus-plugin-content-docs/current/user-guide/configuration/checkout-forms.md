---
title: Tellimiskogud
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout vormidlid

Checkout Forms onab võimaldavad teil lihtsalt ja jäykalt eksperimenteerida erinevate lähenemiste viihdudega uute klientide hankimisel.

Ultimate Multisite 2.0 pakub Checkout Form editori, mis võimaldab teil luua nii palju forme kui soovite, erinevates valikutes, toodudest ja tasutustest sealhulgas.

See funktsioonile pääsuramiseks minud Checkout Forms menüüle vasakust raamist.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Selle lehel näete kõik oma checkout vormid.

List tabel sisaldab **Status** kolonniga, mis võimaldab teil kinnitada, kas iga forma on praegu klientide jaoks saadaval:

| Status | Selgitus |
|---|---|
| **Active** | Forma saab kasutada igal kohas, kus selle shortcode või registreerimispagina on avaldatud. |
| **Inactive** | Forma on salvestatud, kuid seadistatud. Klientide ei saa seda kasutada kassaprocessi lõpetamiseks enne, kui aktiveerite seda uuesti. |

Kasutage status kolonniga enne julkse registreerimispisenduse muutmise, eriti siis, kui säilitate luonnatud või sotsiaalse vormid koos oma elavate vormidega.

Kui soovite uut luua, klõpsake lehel üles "Add Checkout Form" (Lisa checkout forma).

Võite valita järgmise kolm ülesande üheks alguspunktiks: üks samm, mitme sammu või tühine. Seejärel klõpsake siia "Go to the Editor" (Minema editorile).

Kui valite **single step** (ühe samm) või **multi-step** (mitme samm) alguspunktiks, sisaldab forma mall on nüüd oletuks **Template Selection** (Mallivalikute) välja. See vaba valik võimaldab klientide valita veebilehtemalli registreerimise ajal. Saate seda säilitada, eemaldada või asuda selle ümber nagu muid vormi laines editoris.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternatiivselt saate vormide, mida juba oma on, redige või duplike klikkides selle nime allole olevate valikutele. Seal leidsed ka võimalusi kopienda vormi shortcode või vormi eemalada.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor ülevaade

Checkout Form editor annab põhjaliku kasutusepäraseks aatist registreerimise vormide lahendamiseks. Siin on ülevaade redigeja paigutuse kohta:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Checkout formi redigeamine

Saate luua checkout vorme erinevate eesmärkide jaoks. Selle näites kasutame registreerimise vormi.

Navigeerides checkout formi redigeja juurde, annate vormile nime (mis kasutatakse ainult sisemise viidamiseks) ja slug'i (mis kasutatakse shortcode loomiseks, näiteks).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formid on sammude ja väljelduste kokkuostud. Saate uut sammud lisada klõpsides "Add New Checkout Step" (Lisa uus checkout samm).

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Modal windowi esimesel tabis täita vormi sammu sisu. Annige sellele ID, nimi ja kirjeldus. Need osad kasutatakse pääsutult enam sisemise viidamiseks.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Järgmine on sammu nähtavuse seadistamine. Saate valida "Always show" (Näita alati), "Only show for logged in users" (Näita ainult logitud kasutajatele) või "Only show for guests" (Näita ainult külalestele).

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Lõpuks konfigurige sammu stiil. Need on valikuvälised väljad.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Nüüd on aeg lisada välja meie esimesele sammule. Klõpsake "Add New Field" (Lisa uus väljeldus) ja valige soovitud osakaalutuse tüüp.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Kujaga iga välja erinevaid parametre täitmiseks. Esimesel kasutuse jaoks valime "Username" (Kasuternimi) väljakoha.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Saate lisada nii palju etappeid ja väljakohteid, kui vajad. Kui soovite esitada oma tooteid, et kasutajad valikuks välja võtaksid, kasutage Pricing Table (Hindamine tabel) väljakoha. Kui soovite klientidele võimaldada valita šabloni, lisage Template Selection (Šablonivalik) väljakoh. Ja nii edasi.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Märkus:** username, email, password, site title (sitiutitel), site URL (sitiuuri URL), order summary (tellisüümi), payment (maksutamine) ja submit button (submittebuk) on pakkuva vormi luomiseks peamised väljad._

Te võite oma tellisüümi töötamise ajal kasutada alati Preview (Eelvaate) nupud, et näha, kuidas klientid vormi näha. Saate ka vahetada vaadiks oleva kasutaja või külastaja.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Lõpuks, Advanced Options (Tähtisad valikud) sektsioonist saate konfigurida sõnumi "Thank You" (Aitame!) lehel, lisada snippetsid konversioonide jälgimiseks, lisada oma tellisüümile kasutamata CSS-koodi või piirata vormi teatud riikide jaoks.

![Advanced Options](/img/config/checkout-form-advanced.png)

Saate ka kästi aktiveerida või deaktiveerida oma tellisüümi selle valiku abil paremas kolonn on, või eemaldu oma vormi pysseliselt.

![Active toggle](/img/config/checkout-form-active.png)

Formi e la loro gestione

Per eliminare un modulo, clicca sull'opzione elimina nelle azioni del modulo:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Non dimenticare di salvare il tuo modulo di checkout!

![Save button](/img/config/checkout-form-save.png)

Per ottenere lo shortcode del tuo modulo, clicca su Genera Shortcode e copia il risultato mostrato nella finestra modale.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Campo Tabella Prezzi (Pricing Table Field)

Il campo **Tabella Prezzi** mostra i tuoi prodotti sul modulo di checkout in modo che i clienti possano scegliere un piano. Quando modifichi questo campo, puoi configurare diverse opzioni:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Ecco come appare la tabella prezzi sul modulo di registrazione frontend:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Prodotti**: Seleziona quali prodotti visualizzare e l'ordine in cui appaiono.
  * **Forza Durate Diverse (Force Different Durations)**: Quando attivato, tutti i prodotti vengono mostrati indipendentemente dal fatto che abbiano una variazione di prezzo corrispondente al periodo di fatturazione attualmente selezionato. Quando disattivato (impostazione predefinita), i prodotti senza una variazione per il periodo selezionato sono nascosti.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Nascondi quando Preselezionato**: Nasconde la tabella prezzi quando un piano è già stato selezionato tramite l'URL (ad esempio `/register/premium`).
  * **Template Tabella Prezzi (Pricing Table Template)**: Scegli il template visivo per la tabella prezzi (Lista Semplice, Legacy, ecc.).

Se aggiungi un prodotto alla Tabella Prezzi prima che il modulo includa i campi necessari per completare il flusso di checkout di quel prodotto, l'editor mostra ora un avviso. Usa l'avviso per aggiungere il campo richiesto mancante prima di pubblicare o salvare le modifiche per un modulo di registrazione attivo.

### Perioodvalikkuva lauseen lisamine

Kui olete konfiguratsioonides [Price Variations](creating-your-first-subscription-product#price-variations) oma toote kohta (nt kuudlik ja aastaline hinnad), saate lisa **Perioodi valik** -välja. See välj ilmub lühendina, mis võimaldab kliendit vahetada lahkumise perioodide vahel, ja hinnatab tabell muutub reaaliajal dünaamiliselt.

#### Samuti 1: Hinnakujunduse konfiguratsioon toote kohta

Enne Perioodi valikku lisa, veenduge, et teie toote on konfigurieritud hinnakujundusega. Minenda **Ultimate Multisite > Tooted** menüüle, muuta toodet ja navige **Price Variations** -väljaile, et lisada alternatiivseid lahkumise perioode (nt aastaline allahindluse hinnaga).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Samuti 2: Perioodi valikku lisa lahkumise vormi

1. Minenda **Ultimate Multisite > Lahkumise vormid** ja muuta oma lahkumise vormi.

2. Skroolipara veidi alla, kuni leiate sammiku, kus on teie **Pricing Table** -välj, ja klõpsake **Lisa uus välj**.

3. Välja valikudest valides väljakuva tüüpi klikkige **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfigureerige perioodi valikud. Kujul on vaja:
   * **Kõigustik**: Number (nt `1`)
   * **Kõigustik üksiks**: Perioodi tüüp (Päevad, Üted, Kuud või Aastad)
   * **Täitja**: Tekst, mida kliendid näevad (nt "Kuudlik", "Aastaline")

5. Klõpsake **+ Lisa valik** lisamiseks rohkem perioodi valikuid. Need valikud peavad vastama hinnakujundusele, mida olete toote kohta konfiguri soon.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Valige **Perioodi valikku mall** (Clean on oletuks, mis annab lihtsa stiilis valiku, valmis kasutamiseks oma CSS-iga).

7. Klõpsake **Save Field**.

#### Samuti 3: Asetage polu hinnatlaudiga ülemine koht

Parima kasutuskogemuse jaoks on kindel, et Perioodi valik (Period Selection) poleid ilmub ostukorvi sammu **eelselt** Hinnatlaudi (Pricing Table) poleid. Saate poleid dragida ja järjekorra muuta ostukorvi redigeerimisvormis. See võimaldab kasutajad esmalt välja valita lahendusperioodi ja seejärel näha selle perioodi hinnad.

![Ostukorvi redigeerimise vormi näyttus polu järjekorrast](/img/config/checkout-form-editor-with-fields.png)

#### Kuidas see toimib esilehtil (Frontend)

Konfigurieritud pärast, kasutajad, kes külastavad registreerimislehte, näevad perioodi valikute hinnatlaudi üle. Kui nad klõpsavad teise lahendusperioodi:

  * Hinnatlaud uueneb kohe ja näitab valitud perioodi hinnad (üleselulevutamise vaja).
  * Kui **Force Different Durations** on vändatud välja Hinnatlaudi poleidil, on tooted ilma hinnavaariatsioonita valitud perioodil varjatud.
  * Kui **Force Different Durations** on aktiveeritud, kõik tooted jäävad nähtavaks, isegi kui nad ei ole selle perioodi jaoks varieerendit, (näitavad oma poolt määratud hinda).

#### Lahendusperioodi ettevalimine URL-i abil

Saate ka ettevalida toote ja lahendusperioodi URL-i abil. Ultimate Multisite toetab neid URL-pahte:

  * `/register/premium` — Valib esmalt ainult "Premium" toote
  * `/register/premium/12` — Valib toote ja 12-kuune kestus
  * `/register/premium/1/year` — Valib toote 1-aasta kestusega

### Šabloni valikule poleid (Template Selection Field)

**Šabloni valik** poleid võimaldab kasutajad ostukorvi ajal välja valida veebilehtšabloni. See on nüüd poolt aktiveeritud nii **üleselulehelise sammu** kui ka **mitme sammu** ostukorvi vormide šabloneides Ultimate Multisite v2.6.1 versiooniga lisatud.

#### Poleidi manuaalne lisamine

Kui vormi töötamise korral, mis on loodud v2.6.1 enne või alustatud tühjastest mallidest:

1. Minenda **Ultimate Multisite > Checkout Forms** ja muuta oma checkout-vormi.
2. Selle sammu, kus kogutakse veebilehe detailid, klõpsake **Add new Field**.
3. Valige valikust **Template Selection** (Mallide valik) väljenditüüpi dialoogus.
4. Konfigureerige välja:
   - **Label** — Pealkiri, mida kasutajad näevad mallide ruudul üleval (nt. "Vali veebilehe mall").
   - **Required** — Kas kasutaja peab valima malli enne jätkamist.

#### Kuidas see töötab

Kui klient valib checkoutil malli, Ultimate Multisite kasutab seda uue veebilehe loodudamiseks. Näidatud mallid tulevad teie **Site Templates** nimekirjast (**Ultimate Multisite > Site Templates**). Siin ilmub ainult klusternud (kasutajatele saadaval) mallid.

### Checkout-form alusdomäed

Ultimate Multisite v2.13.0 käsitleb checkouti vormi **Site URL** väljas konfiguritud domeene kui võrku alusdomeene. Kasutage välja saatavate domeenide seadistusi, kui soovite, et klientid luua veebilehi ühtest või mitmes jaotatud registreerimisdomeenil, näiteks `example.com` ja `sites.example.com`.

Jaotatud checkout-form alusdomeened ei ole per-veebilehe oma domeenide seadistusi (custom domain mappings). Kui klient luuab subdirektoriumi veebilehe ühe sellest alustamise, ei looda Ultimate Multisite mappitud domeenirekordit, mis teeks jaotatud hoosta ainult selle ühele veebilehele kuuluvaks. Jaotatud host jääb saadaval sisarveebileheditele, kes kasutavad sama checkout-formi alusdomeeni.

Haldage oma domeene per-klientide mappitud hostide jaoks, nagu `customer-example.com`. Hoidke checkout-formi alusdomeened jaotatud registreerimishostide jaoks, mida mitu veebilehe saab kasutada.

#### Välja võtmine välja

(See osane ei ole täidetud tekstiga, seega jätkatakse struktuuril)

Kui te soovitus Estonian keeles:

Kui sa oma vormist leidsid ühtegi säästlikku lahendust, siis eemaldage sellest vormist "Template Selection" (Tehniline valimine) -kentri. Estonian kasutajad saavad selle asemel see vastavalt seotud tegemist **Ultimate Multisite > Settings > Site Templates** kohta puudutav alusel olevat poolt.
