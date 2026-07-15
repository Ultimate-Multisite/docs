---
title: Betaalvorms
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Betaalvorms

Betaalvorms is ’n maklike en buigsame manier om met verskillende benaderings te eksperimenteer wanneer jy probeer om nuwe kliënte te omskep.

Ultimate Multisite 2.0 bied ’n betaalvorm-redigeerder wat jou toelaat om soveel vorms te skep as wat jy wil, met verskillende velde, produkte wat aangebied word, ens.

Om toegang tot hierdie funksie te kry, gaan na die Betaalvorms-kieslys aan die linkerkantse sybalk.

![Lys van betaalvorms](/img/config/checkout-forms-list.png)

Op hierdie bladsy kan jy al die betaalvorms sien wat jy het.

Die lystabel sluit ’n **Status**-kolom in sodat jy kan bevestig of elke vorm tans vir kliënte beskikbaar is:

| Status | Betekenis |
|---|---|
| **Aktief** | Die vorm kan gebruik word oral waar sy kortkode of registrasiebladsy gepubliseer is. |
| **Onaktief** | Die vorm is gestoor maar gedeaktiveer. Kliënte kan nie die betaalproses daarmee voltooi totdat jy dit weer aktiveer nie. |

Gebruik die statuskolom voordat jy ’n openbare registrasievloei redigeer, veral wanneer jy konsep- of seisoenale betaalvorms saam met jou lewendige vorms hou.

As jy ’n nuwe een wil skep, klik net Voeg Betaalvorm By boaan die bladsy.

Jy kan een van hierdie drie opsies as jou beginpunt kies: enkelstap, meerstap of leeg. Klik dan om na die Redigeerder te Gaan.

Wanneer jy **enkelstap** of **meerstap** as jou beginpunt kies, sluit die vormsjabloon nou by verstek ’n **Sjabloonkeuse**-veld in. Hierdie veld laat jou kliënte ’n werfsjabloon tydens die registrasieproses kies. Jy kan dit in plek laat, verwyder, of soos enige ander veld in die redigeerder herposisioneer.

![Betaalvorm-redigeerder](/img/config/checkout-form-editor.png)

Alternatiewelik kan jy die vorms wat jy reeds het redigeer of dupliseer deur op die opsies onder die naam daarvan te klik. Daar sal jy ook die opsies vind om die vorm se kortkode te kopieer of om die vorm te verwyder.

![Betaalvorm-sweefaksies](/img/config/checkout-form-hover-actions.png)

#### Oorsig van die Betaalvorm-redigeerder {#checkout-form-editor-overview}

Die betaalvorm-redigeerder bied ’n omvattende koppelvlak om jou registrasievorms te bou. Hier is ’n oorsig van die redigeerderuitleg:

![Oorsig van die Betaalvorm-redigeerder](/img/config/checkout-form-editor-overview.png)

### Redigering van ’n Betaalvorm {#editing-a-checkout-form}

Jy kan betaalvorms vir verskillende doeleindes skep. In hierdie voorbeeld sal ons aan ’n registrasievorm werk.

Nadat jy na die betaalvorm-redigeerder genavigeer het, gee jou vorm ’n naam (wat slegs vir interne verwysing gebruik sal word) en ’n slak (gebruik om byvoorbeeld kortkodes te skep).

![Betaalvorm-redigeerder](/img/config/checkout-form-editor.png)

Vorms bestaan uit stappe en velde. Jy kan ’n nuwe stap byvoeg deur op Voeg Nuwe Betaalstap By te klik.

![Voeg Nuwe Betaalstap By](/img/config/checkout-form-add-step.png)

Op die eerste oortjie van die modale venster, vul die inhoud van jou vorm se stap in. Gee dit ’n ID, ’n naam en ’n beskrywing. Hierdie items word meestal intern gebruik.

![Betaalvorm-stapinhoud-oortjie](/img/config/checkout-form-step-content.png)

Stel vervolgens die sigbaarheid van die stap. Jy kan kies tussen "Wys altyd", "Wys slegs vir aangemelde gebruikers" of "Wys slegs vir gaste".

![Betaalvorm-stapsigbaarheid-oortjie](/img/config/checkout-form-step-visibility.png)

Laastens, stel die stapstyl op. Hierdie is opsionele velde.

![Betaalvorm-stapstyl-oortjie](/img/config/checkout-form-step-style.png)

Nou is dit tyd om velde by ons eerste stap te voeg. Klik net om Nuwe Veld By te Voeg en kies die tipe afdeling wat jy wil hê.

![Betaalvorm-stap met velde](/img/config/checkout-form-step-with-fields.png)

Elke veld het verskillende parameters wat ingevul moet word. Vir hierdie eerste inskrywing sal ons die "Gebruikersnaam"-veld kies.

![Veldtipe-keuse-aftreklys](/img/config/checkout-form-field-type-dropdown.png)

![Gebruikersnaam-veldinhoudinstellings](/img/config/checkout-form-username-content.png)

![Gebruikersnaam-veldsigbaarheidinstellings](/img/config/checkout-form-username-visibility.png)

![Gebruikersnaam-veldstylinstellings](/img/config/checkout-form-username-style.png)

Jy kan soveel stappe en velde byvoeg as wat jy nodig het. Om jou produkte vir jou kliënte te vertoon sodat hulle een kan kies, gebruik die Prystabel-veld. As jy jou kliënte ’n sjabloon wil laat kies, voeg die Sjabloonkeuse-veld by. En so aan.

![Voeg Nuwe Veld By-dialoog](/img/config/checkout-form-add-field-dialog.png)

_**Nota:** gebruikersnaam, e-pos, wagwoord, werftitel, werf-URL, bestelopsomming, betaling en indien-knoppie is verpligte velde om ’n betaalvorm te skep._

Terwyl jy aan jou betaalvorm werk, kan jy altyd die Voorskou-knoppie gebruik om te sien hoe jou kliënte die vorm sal sien. Jy kan ook wissel tussen aansig as ’n bestaande gebruiker of ’n besoeker

![Betaalvorm-voorskouknoppie](/img/config/checkout-form-preview-button.png)

![Betaalvorm-voorskoumodaal](/img/config/checkout-form-preview-modal.png)

Laastens, onder Gevorderde Opsies kan jy die boodskap vir die "Dankie"-bladsy opstel, brokkies byvoeg om omskakelings na te spoor, pasgemaakte CSS by jou betaalvorm voeg of dit tot sekere lande beperk.

![Gevorderde Opsies](/img/config/checkout-form-advanced.png)

Jy kan ook jou betaalvorm handmatig aktiveer of deaktiveer deur hierdie opsie in die regterkolom te skakel, of die vorm permanent verwyder.

![Aktief-skakelaar](/img/config/checkout-form-active.png)

Om ’n vorm te verwyder, klik die verwyder-opsie in die vormaksies:

![Betaalvorm-verwyderopsie](/img/config/checkout-form-delete.png)

Moenie vergeet om jou betaalvorm te stoor nie!

![Stoor-knoppie](/img/config/checkout-form-save.png)

Om jou vorm se kortkode te kry, klik om Kortkode te Genereer en kopieer die resultaat wat in die modale venster gewys word.

![Stoor-knoppie met kortkode](/img/config/checkout-form-save.png)

### Die Prystabel-veld {#the-pricing-table-field}

Die **Prystabel**-veld vertoon jou produkte op die betaalvorm sodat kliënte ’n plan kan kies. Wanneer jy hierdie veld redigeer, kan jy verskeie opsies opstel:

![Prystabel-veldinstellings](/img/config/pricing-table-field-settings.png)

Hier is hoe die prystabel op die frontend-registrasievorm verskyn:

![Frontend checkout-prystabel](/img/config/frontend-checkout-pricing-table.png)

  * **Produkte**: Kies watter produkte om te vertoon en die volgorde waarin hulle verskyn.
  * **Dwing verskillende tydsdure af**: Wanneer dit geaktiveer is, word alle produkte gewys ongeag of hulle ’n ooreenstemmende prysvariasie vir die tans gekose faktureringstydperk het. Wanneer dit gedeaktiveer is (verstek), word produkte sonder ’n variasie vir die gekose tydperk versteek.
    ![Prystabel-opsie om tydsdure af te dwing](/img/config/pricing-table-force-durations.png)
  * **Versteek wanneer vooraf gekies**: Versteek die prystabel wanneer ’n plan reeds via die URL gekies is (bv. `/register/premium`).
  * **Prystabel-sjabloon**: Kies die visuele sjabloon vir die prystabel (Eenvoudige lys, Erfenis, ens.).

As jy ’n produk by die Prystabel voeg voordat die vorm die velde insluit wat nodig is om daardie produk se checkout-vloei te voltooi, wys die redigeerder nou ’n waarskuwing. Gebruik die waarskuwing om die ontbrekende vereiste veld by te voeg voordat jy veranderinge vir ’n lewendige registrasievorm publiseer of stoor.

### Voeg ’n tydperk-keuseskakelaar by {#adding-a-period-selection-toggle}

As jy [Prysvariasies](creating-your-first-subscription-product#price-variations) op jou produkte gekonfigureer het (bv. maandelikse en jaarlikse pryse), kan jy ’n **Tydperk-keuse**-veld by jou checkout-vorm voeg. Hierdie veld vertoon ’n skakelaar wat kliënte toelaat om tussen faktureringstydperke te wissel, en die prystabel werk dinamies in reële tyd by.

#### Stap 1: Stel prysvariasies op jou produkte op {#step-1-set-up-price-variations-on-your-products}

Voordat jy die Tydperk-keuse-veld byvoeg, maak seker jou produkte het prysvariasies gekonfigureer. Gaan na **Ultimate Multisite > Products**, wysig ’n produk, en navigeer na die **Prysvariasies**-oortjie om alternatiewe faktureringstydperke by te voeg (bv. Jaarliks teen ’n afslagprys).

![Prysvariasies-oortjie op ’n produk](/img/config/product-price-variations-tab.png)

#### Stap 2: Voeg die Tydperk-keuse-veld by jou checkout-vorm {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Gaan na **Ultimate Multisite > Checkout Forms** en wysig jou checkout-vorm.

2. Rol af na die stap wat jou **Prystabel**-veld bevat en klik **Voeg nuwe veld by**.

3. Klik in die veldtipe-keusedialoog op **Tydperk-keuse**.

![Voeg nuwe veld-dialoog by wat Tydperk-keuse wys](/img/config/checkout-form-add-field-dialog.png)

4. Konfigureer die tydperk-opsies. Elke opsie benodig:
   * **Tydsduur**: Die nommer (bv. `1`)
   * **Tydsduur-eenheid**: Die tydperktipe (Dae, Weke, Maande, of Jare)
   * **Etiket**: Die teks wat kliënte sal sien (bv. "Maandeliks", "Jaarliks")

5. Klik **+ Voeg opsie by** om meer tydperk-keuses by te voeg. Hierdie opsies moet ooreenstem met die prysvariasies wat jy op jou produkte gekonfigureer het.

![Tydperk-keuse-veldinstellings](/img/config/period-selection-field-settings.png)

6. Kies ’n **Tydperkkieser-sjabloon** (Skoon is die verstek, wat ’n eenvoudige gestileerde kieser weergee wat gereed is vir pasgemaakte CSS).

7. Klik **Stoor veld**.

#### Stap 3: Plaas die veld bo die prystabel {#step-3-position-the-field-above-the-pricing-table}

Vir die beste gebruikerservaring, maak seker die Tydperk-keuse-veld verskyn **voor** die Prystabel-veld in jou checkout-stap. Jy kan velde sleep om hulle in die checkout-vormredigeerder te herrangskik. Op hierdie manier kies kliënte eers ’n faktureringstydperk en sien dan pryse vir daardie tydperk.

![Checkout-vormredigeerder wat veldvolgorde wys](/img/config/checkout-form-editor-with-fields.png)

#### Hoe dit op die Frontend werk {#how-it-works-on-the-frontend}

Sodra dit gekonfigureer is, sal kliënte wat jou registrasiebladsy besoek die tydperkkieser bo die prystabel sien. Wanneer hulle op ’n ander faktureringstydperk klik:

  * Die prystabel werk onmiddellik by om pryse vir die gekose tydperk te wys (geen bladsyherlaai vereis nie).
  * As **Dwing verskillende tydsdure af** op die Prystabel-veld gedeaktiveer is, sal produkte sonder ’n prysvariasie vir die gekose tydperk versteek word.
  * As **Dwing verskillende tydsdure af** geaktiveer is, bly alle produkte sigbaar selfs as hulle nie ’n variasie vir die gekose tydperk het nie (hulle sal hul verstekprys wys).

#### Kies ’n faktureringstydperk vooraf via URL {#pre-selecting-a-billing-period-via-url}

Jy kan ook ’n produk en faktureringstydperk deur die URL vooraf kies. Ultimate Multisite ondersteun hierdie URL-patrone:

  * `/register/premium` — Kies slegs die "Premium"-produk vooraf
  * `/register/premium/12` — Kies die produk en 12-maande-tydsduur vooraf
  * `/register/premium/1/year` — Kies die produk met ’n 1-jaar-tydsduur vooraf

### Die sjabloonkeuse-veld {#the-template-selection-field}

Die **Sjabloonkeuse**-veld laat kliënte ’n webwerf-sjabloon tydens checkout kies. Dit is nou by verstek ingesluit in die **enkelstap**- en **multistap**-checkout-vormsjablone wat in Ultimate Multisite v2.6.1 bygevoeg is.

#### Voeg die veld handmatig by {#adding-the-field-manually}

As jy met ’n vorm werk wat voor v2.6.1 geskep is, of vanaf ’n leë sjabloon begin het:

1. Gaan na **Ultimate Multisite > Checkout Forms** en wysig jou checkout-vorm.
2. Klik in die stap waar webwerfbesonderhede ingesamel word op **Voeg nuwe veld by**.
3. Kies **Sjabloonkeuse** uit die veldtipe-dialoog.
4. Konfigureer die veld:
   - **Etiket** — Die opskrif wat kliënte bo die sjabloonrooster sien (bv. "Kies ’n webwerf-sjabloon").
   - **Vereis** — Of kliënte ’n sjabloon moet kies voordat hulle voortgaan.

#### Hoe dit werk {#how-it-works}

Wanneer ’n kliënt tydens checkout ’n sjabloon kies, gebruik Ultimate Multisite dit wanneer hul nuwe webwerf voorsien word. Die sjablone wat gewys word, kom uit jou **Webwerf-sjablone**-lys (**Ultimate Multisite > Site Templates**). Slegs sjablone wat as beskikbaar vir kliënte gemerk is, verskyn hier.

### Checkout-vorm-basisdomeine {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 behandel domeine wat op checkout-vorm **Webwerf-URL**-velde gekonfigureer is as netwerkbasisdomeine. Gebruik die veld se beskikbare-domein-instellings wanneer jy wil hê kliënte moet webwerwe onder een of meer gedeelde registrasiedomeine skep, soos `example.com` en `sites.example.com`.

Gedeelde checkout-form-basisdomeine word nie as per-site custom domain mappings behandel nie. Wanneer ’n kliënt ’n subgids-site op een van daardie basisse skep, skep Ultimate Multisite nie ’n mapped-domain-rekord wat die gedeelde host aan slegs daardie een site sou laat behoort nie. Die gedeelde host bly beskikbaar vir suster-sites wat dieselfde checkout form-basis gebruik.

Hou custom domains vir per-kliënt mapped hosts, soos `customer-example.com`. Hou checkout-form-basisdomeine vir gedeelde registrasie-hosts wat baie sites kan gebruik.

#### Die veld verwyder {#removing-the-field}

As jy nie site-templates aanbied nie, verwyder die Template Selection-veld uit jou vorm. Kliënte sal dan ontvang watter verstektemplate ook al onder **Ultimate Multisite > Settings > Site Templates** gekonfigureer is.
