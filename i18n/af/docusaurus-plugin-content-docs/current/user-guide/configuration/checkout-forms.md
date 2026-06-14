---
title: Kassak Formuliere
sidebar_position: 19
_i18n_hash: b7b1bf89a2997f8916c9f3a3a2cb255b
---
# Afrekeningsvorms

Afrekeningsvorms is 'n maklike en buigsame manier om verskillende benaderings te eksperimenteer wanneer jy probeer om nuwe kliënte te konverteer.

Ultimate Multisite 2.0 bied 'n Afrekeningsvorm-redigeerder wat jou toelaat om soveel vorms te skep as wat jy wil, met verskillende velde, produkte wat aangebied word, ens.

Om hierdie funksie te bereik, gaan na die Afrekeningsvorms-menu aan die linkerkantbalk.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Op hierdie bladsy kan jy al die afrekeningsvorms sien wat jy het.

Die lys-tabel sluit 'n **Status**-kolom in sodat jy kan bevestig of elke vorm tans beskikbaar is vir kliënte:

| Status | Betekenis |
|---|---|
| **Active** | Die vorm kan enige plek gebruik word waar sy shortcode of registrasiebladsy gepubliseer is. |
| **Inactive** | Die vorm word gestoor maar gedeaktiveer. Kliënte kan nie afreken met dit nie totdat jy dit weer aktiveer. |

Gebruik die statuskolom voordat jy 'n openbare registrasieproses redigeer, veral wanneer jy konsep- of seisoenale afrekeningsvorms saam met jou lewendige vorms hou.

As jy 'n nuwe wil skep, klik net op 'Add Checkout Form' bo-op die bladsy.

Jy kan een van hierdie drie opsies as jou beginpunt kies: single step, multi-step of blank. Klik dan op om na die Redigeerder te gaan.

Wanneer jy **single step** of **multi-step** as jou beginpunt kies, sluit die vormsjabloon nou standaard 'n **Template Selection**-veld in. Hierdie veld laat jou kliënte toe om 'n webwerf-sjabloon te kies tydens die registrasieproses. Jy kan dit op plek laat, dit verwyder, of dit herplaas soos enige ander veld in die redigeerder.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternatief kan jy die vorms wat jy reeds het, redigeer of duplikaat deur op die opsies onder die naam te klik. Daar sal jy ook die opsies vind om die vorm se shortcode te kopieer of die vorm te verwyder.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Oorsig van die Afrekeningsvorm-redigeerder

Die afrekeningsvorm-redigeerder bied 'n omvattende koppelvlak vir die bou van jou registrasievorms. Hier is 'n oorsig van die redigeerder-indeling:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Redigeer 'n Afrekeningsvorm

Jy kan afrekeningsvorms vir verskillende doeleindes skep. In hierdie voorbeeld sal ons op 'n registrasievorm werk.

Nadat jy na die afrekeningsvorm-redigeerder navigeer, gee jou vorm 'n naam (wat slegs vir interne verwysing gebruik sal word) en 'n slug (gebruik om shortcodes te skep, byvoorbeeld).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Vorms bestaan uit stappe en velde. Jy kan 'n nuwe stap byvoeg deur op 'Add New Checkout Step' te klik.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Op die eerste tab van die modale venster, vul die inhoud van jou vorm se stap in. Gee dit 'n ID, 'n naam en 'n beskrywing. Hierdie items word meestal intern gebruik.

![Checkout form step](/img/config/checkout-form-step.png)

Dankons, stel die sigbaarheid van die stap in. Jy kan kies tussen "Always show", "Only show for logged in users" of "Only show for guests".

![Checkout form step](/img/config/checkout-form-step.png)

Laastens, konfigureer die stapstyl. Dit is opsionele velde.

![Checkout form step](/img/config/checkout-form-step.png)

Nou is dit tyd om velde by ons eerste stap by te voeg. Klik net op 'Add New Field' en kies die tipe seksie wat jy wil hê.

![Checkout form step with fields](/img/config/checkout-form-step.png)

Elke veld het verskillende parameters wat ingevul moet word. Vir hierdie eerste inskrywing, sal ons die "Username"-veld kies.

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

Jy kan soveel stappe en velde byvoeg as wat jy nodig het. Om jou produkte te wys vir jou kliënte om een te kies, gebruik die Pricing Table-veld. As jy wil hê dat jou kliënte 'n sjabloon kan kies, voeg die Template Selection-veld by. En so verder.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Let wel:** username, email, password, site title, site URL, order summary, payment, en submit button is verpligte velde om 'n afrekeningsvorm te skep._

Terwyl jy aan jou afrekeningsvorm werk, kan jy altyd die Preview-knoppie gebruik om te sien hoe jou kliënte die vorm sal sien. Jy kan ook wissel tussen view as an existing user of a visitor

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

Laastens, op Advanced Options kan jy die boodskap vir die "Thank You"-bladsy konfigureer, snippets byvoeg om konversies te volg, aangepaste CSS aan jou afrekeningsvorm byvoeg, of dit beperk tot sekere lande.

![Advanced Options](/img/config/checkout-form-advanced.png)

Jy kan ook jou afrekeningsvorm handmatig aktiveer of deaktiveer deur hierdie opsie in die regterkolom om te skakel, of die vorm permanent verwyder.

![Active toggle](/img/config/checkout-form-active.png)

Om 'n vorm te verwyder, klik op die verwyder-opsie in die vormaksies:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Moenie jou afrekeningsvorm vergeet om te stoor!

![Save button](/img/config/checkout-form-save.png)

Om jou vorm se shortcode te kry, klik op 'Generate Shortcode' en kopieer die resultaat wat op die modale venster getoon word.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Die Pricing Table Veld

Die **Pricing Table**-veld wys jou produkte op die afrekeningsvorm sodat kliënte 'n plan kan kies. Wanneer jy hierdie veld redigeer, kan jy verskeie opsies konfigureer:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Hier is hoe die prysitafel op die frontend registrasieformulier verskyn:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

* **Products**: Kies watter produkte wat getoon moet word en in watter volgorde.
* **Force Different Durations**: Wanneer dit geaktiveer is, word alle produkte getoon ongeag of hulle 'n pasgemaakte prysverandering het vir die tans geselekteerde faktuurperiode. Wanneer dit gedeaktiveer is (standaard), word produkte sonder 'n variasie vir die geselekteerde periode verberg.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
* **Hide when Pre-Selected**: Verberg die prysitafel wanneer 'n plan reeds via die URL geselekteer is (bv. `/register/premium`).
* **Pricing Table Template**: Kies die visuele sjabloon vir die prysitafel (Simple List, Legacy, ens.).

As jy 'n produk by die Pricing Table voeg voordat die vorm die velde insluit wat nodig is om daardie produk se afrekeningsproses te voltooi, wys die redigeerder nou 'n waarskuwing. Gebruik die waarskuwing om die ontbrekende verpligte veld by te voe voordat jy veranderings vir 'n lewendige registrasieformulier publiseer of stoor.

### Byvoeg van 'n Periode-keuse-toggle

As jy [Price Variations](creating-your-first-subscription-product#price-variations) op jou produkte gekonfigureer het (bv. maandelikse en jaarlikse pryse), kan jy 'n **Period Selection**-veld by jou afrekeningsvorm byvoeg. Hierdie veld wys 'n toggle wat kliënte toelaat om tussen faktuurperiodes te skakel, en die prysitafel word in real time dinamies opgedateer.

#### Stap 1: Stel Prysvariasies op jou Produkte in

Voordat jy die Period Selection-veld byvoeg, maak seker dat jou produkte prysvariasies gekonfigureer het. Gaan na **Ultimate Multisite > Products**, redigeer 'n produk, en navigeer na die **Price Variations**-tab om alternatiewe faktuurperiodes by te voe (bv. Jaarliks teen 'n afslagprys).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Stap 2: Voeg die Period Selection-veld by jou Afrekeningsvorm by

1. Gaan na **Ultimate Multisite > Checkout Forms** en redigeer jou afrekeningsvorm.

2. Skrol na die stap wat jou **Pricing Table**-veld bevat en klik op **Add new Field**.

3. In die veldtipe-keuse dialoog, klik op **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfigureer die periode-opsies. Elke opsie benodig:
   * **Duration**: Die nommer (bv. `1`)
   * **Duration unit**: Die tipe periode (Dae, Weeke, Maande of Jare)
   * **Label**: Die teks wat kliënte sal sien (bv. "Maandeliks", "Jaarliks")

5. Klik op **+ Add Option** om meer periodekeuses by te voeg. Hierdie opsies moet ooreenstem met die prysvariasies wat jy op jou produkte gekonfigureer het.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

Jy kan ook die veldopsies direk konfigureer:

<!-- Screenshot unavailable: Period selection field options -->

6. Kies 'n **Period Selector Template** (Clean is die standaard, wat 'n eenvoudige gestileerde keuse skep wat gereed is vir aangepaste CSS).

7. Klik op **Save Field**.

#### Stap 3: Plaseer die Veld Bo-die Pricing Table

Vir die beste gebruikerservaring, maak seker dat die Period Selection-veld **voor** die Pricing Table-veld in jou afrekeningsstap verskyn. Jy kan velde sleep om hulle in die afrekeningsvorm-redigeerder te herrangskik. Op hierdie manier kies kliënte eers 'n faktuurperiode en sien dan pryse vir daardie periode.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Hoe Dit Werk op die Frontend

Sodra dit gekonfigureer is, sal kliënte wat jou registrasiebladsy besoek, die periode-kiezer bo-die prysitafel sien. Wanneer hulle na 'n ander faktuurperiode klik:

* Die prysitafel word onmiddellik opgedateer om pryse vir die geselekteerde periode te wys (geen bladsyherlaai vereis nie).
* As **Force Different Durations** op die Pricing Table-veld gedeaktiveer is, word produkte sonder 'n prysvariasie vir die geselekteerde periode verberg.
* As **Force Different Durations** geaktiveer is, bly alle produkte sigbaar selfs as hulle nie 'n variasie vir die geselekteerde periode het nie (hulle sal hul standaardprys wys).

#### Voor-seleksie van 'n Faktuurperiode via URL

Jy kan ook 'n produk en faktuurperiode vooraf kies deur die URL. Ultimate Multisite ondersteun hierdie URL-patrone:

* `/register/premium` — Kies slegs die "Premium" produk vooraf
* `/register/premium/12` — Kies die produk en 12-maande duur vooraf
* `/register/premium/1/year` — Kies die produk met 'n 1-jaar duur vooraf

### Die Template Selection Veld

Die **Template Selection**-veld laat kliënte toe om 'n webwerf-sjabloon te kies tydens die afrekening. Dit word nou standaard ingesluit in die **single step** en **multi-step** afrekeningsvormsjabloon wat in Ultimate Multisite v2.6.1 bygevoeg is.

#### Die veld handmatig byvoeg

As jy met 'n vorm werk wat voor v2.6.1 geskep is, of wat vanaf 'n blanke sjabloon begin:

1. Gaan na **Ultimate Multisite > Checkout Forms** en redigeer jou afrekeningsvorm.
2. In die stap waar webwerfbesonderhede ingesamel word, klik op **Add new Field**.
3. Kies **Template Selection** uit die veldtipe-dialoog.
4. Konfigureer die veld:
   - **Label** — Die kop wat kliënte bo-die sjabloonrooster sien (bv. "Kies 'n webwerf-sjabloon").
   - **Required** — Of kliënte 'n sjabloon moet kies voordat hulle kan voortgaan.

#### Hoe Dit Werk

Wanneer 'n kliënt 'n sjabloon tydens die afrekening kies, gebruik Ultimate Multisite dit wanneer dit hul nuwe webwerf voorsien. Die sjablone wat getoon word, kom van jou **Site Templates**-lys (**Ultimate Multisite > Site Templates**). Slegs sjablone wat gemerk is as beskikbaar vir kliënte, verskyn hier.

#### Die Veld Verwyder

As jy nie webwerf-sjablone aanbied nie, verwyder die Template Selection-veld van jou vorm. Kliënte sal dan enige standaard sjabloon ontvang wat onder **Ultimate Multisite > Settings > Site Templates** gekonfigureer is.
