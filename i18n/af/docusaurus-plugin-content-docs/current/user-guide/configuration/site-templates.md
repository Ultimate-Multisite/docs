---
title: Werftemplate
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Werfsjablone (v2) {#site-templates-v2}

_**LET WEL: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x. As jy weergawe 1.x gebruik,**_ **sien hierdie artikel** _**.**_

Ons doel wanneer ons ’n premium netwerk met Ultimate Multisite skep, is om soveel prosesse as moontlik te outomatiseer terwyl ons ons kliënte buigsaamheid en verskillende opsies gee om uit te kies wanneer hulle hul webwerwe skep. Een maklike manier om hierdie balans te bereik, is om die Ultimate Multisite werfsjablone-funksie te gebruik.

## Wat is ’n werfsjabloon? {#what-is-a-site-template}

Soos die naam aandui, is ’n werfsjabloon ’n standaardwerf wat as basis gebruik kan word wanneer nuwe werwe in jou netwerk geskep word.

Dit beteken jy kan ’n basiswerf skep, verskillende inproppe aktiveer, ’n aktiewe tema stel en dit op enige manier aanpas wat jy wil. Dan, wanneer jou kliënt ’n nuwe Account skep, in plaas daarvan om ’n verstek WordPress-werf sonder betekenisvolle inhoud daarin te kry, sal hulle ’n kopie van jou basiswerf kry met al die aanpassings en inhoud reeds in plek.

Dit klink fantasties, maar hoe skep ek ’n nuwe werfsjabloon? Dit is so eenvoudig as wat dit moontlik kan wees.

## Skep en wysig ’n nuwe werfsjabloon {#creating-and-editing-a-new-site-template}

Werfsjablone is net normale werwe op jou netwerk. Om ’n nuwe sjabloon te skep, kan jy eenvoudig gaan na **Netwerkadmin > Ultimate Multisite > Werwe > Voeg werf by.**

**![Voeg werf-knoppie op die Werwe-lysbladsy by](/img/config/site-templates-list.png)**

Dit sal ’n modale venster oopmaak waar dit sal vra vir die **Werftitel, werfdomein/-pad,** en **Werftipe**. Onder die **Werftipe**-aftrekveld, maak seker dat jy **Werfsjabloon** kies *.*

_![Voeg werfsjabloon-modaal met werftipe-aftreklys by](/img/config/site-templates-list.png)_

Jy kan ook ’n kliëntgerigte beskrywing byvoeg om te verduidelik wat die sjabloon insluit:

![Werfsjabloon-beskrywingsveld op die werfsjabloon-wysigskerm](/img/config/site-template-edit-description.png)

Aan die onderkant van die vorm sal jy ’n **Kopieer werf**-wisselskakelaar opmerk. Dit sal jou toelaat om ’n nuwe werfsjabloon te skep gebaseer op ’n bestaande werfsjabloon as jou beginpunt om jou te help tyd bespaar in plaas daarvan om ’n werfsjabloon van nuuts af te skep.

![Voeg werfsjabloon-modaal met kopieer-werf-wisselskakelaar by](/img/config/site-templates-list.png)

### Pas die inhoud van ’n werfsjabloon aan {#customizing-the-contents-of-a-site-template}

Om jou werfsjabloon aan te pas, navigeer eenvoudig na sy Dashboard-paneel en maak die veranderinge wat jy nodig het. Jy kan nuwe plasings en bladsye skep, inproppe aktiveer en die aktiewe tema verander. Jy kan selfs na die Aanpasser gaan en allerhande aanpassingsopsies verander.

![Werfsjabloon-wysigkoppelvlak](/img/config/site-template-edit.png)

Al daardie data sal oorgekopieer word wanneer ’n kliënt ’n nuwe werf skep gebaseer op daardie werfsjabloon.

### Gevorderde opsies {#advanced-options}

As jy jou weg ken rondom ’n bietjie pasgemaakte kodering, kan jy van ons Soek-en-vervang-API gebruik maak om inligting op die nuwe werf outomaties ná die skepping daarvan te vervang. Dit is nuttig vir dinge soos om maatskappyname op ’n Oor-bladsy te vervang, die kontak-e-pos op die Kontak-bladsy te vervang, ens.

### Gebruik werfsjablone {#using-site-templates}

Goed, so jy het ’n klomp verskillende werfsjablone met verskillende ontwerpe, temas en instellings geskep. Hoe maak jy hulle nou nuttig op jou netwerk?

Basies is daar twee benaderings wat jy nou kan gebruik (nie gelyktydig nie):

  * Heg een werfsjabloon aan elk van jou planne

**OF**

  * Laat jou kliënte toe om self die werfsjablone tydens registrasie te kies.

#### Modus 1: Ken werfsjabloon toe {#mode-1-assign-site-template}

In hierdie modus sal jou kliënte nie ’n sjabloon kan kies wanneer hulle ’n Account skep nie, maar jy sal eerder definieer watter sjabloon op elk van jou planne gebruik moet word.

Om dit te doen, sal jy na **Ultimate Multisite > Produkte > Wysig** moet gaan.

![Wysig produk om werfsjabloon toe te ken](/img/config/product-site-templates.png)

Dit sal jou na die **Wysig produk**-bladsy bring. Onder die **Produkopsies**-afdeling, vind die **Werfsjabloon**-oortjie en kies die **Ken werfsjabloon toe**-opsie uit die aftrekveld. Dit sal die lys beskikbare werfsjablone vertoon en dit sal jou toelaat om slegs een werfsjabloon te kies wat aan die produk toegewy is.

![Produk-werfsjabloon-oortjie met ken-werfsjabloon-toe-opsie](/img/config/product-site-templates.png)

#### Modus 2: Kies beskikbare werfsjabloon {#mode-2-choose-available-site-template}

In hierdie modus sal jy jou kliënte ’n keuse tydens die registrasieproses gee. Hulle sal kan kies uit verskillende werfsjablone wat jy onder die produkinstellings definieer. Jy het ’n opsie om die werfsjabloon waaruit hulle kan kies onder die gekose produk te beperk. Dit sal jou toelaat om verskillende stelle werfsjablone onder elke produk te hê, wat ideaal is om verskillende funksies en kenmerke vir ’n duurder produk uit te lig.

Op die **Wysig produk**-bladsy. Onder die **Produkopsies**-afdeling, vind die **Werfsjabloon**-oortjie en kies die **Kies beskikbare werfsjabloon**-opsie uit die aftrekveld. Dit sal die lys beskikbare werfsjablone vertoon en dit sal jou toelaat om die werfsjabloon te kies wat jy beskikbaar wil hê. Jy kan dit doen deur sy gedrag te kies: **Beskikbaar** as jy wil hê die werfsjabloon moet op die lys ingesluit word. _**Nie beskikbaar nie**_ as jy wil hê die werfsjabloon moet nie as ’n opsie wys nie. En **Vooraf gekies** as jy wil hê een van die gelyste werfsjablone moet die verstek gekose een wees.

![Kies beskikbare werfsjablone met gedragsopsies](/img/config/product-site-templates.png)

### Verstekmodus: Werfsjabloon-keuse op die betaalvorm {#default-mode-site-template-selection-on-the-checkout-form}

As jy wil hê al jou werfsjablone moet tydens die registrasie beskikbaar wees, of dalk nie verkies om ekstra werk te doen om werfsjablone onder elke produk wat jy skep toe te ken of te spesifiseer nie. Dan kan jy eenvoudig die werfsjabloon-keuse onder jou **Betaalvorm** stel. Om dit te doen, gaan na **Ultimate Multisite > Betaalvorms** en klik **Wysig** onder die vorm wat jy wil konfigureer.

Dit sal die **Wysig betaalvorm**-bladsy vertoon. Vind die **Sjabloonkeuse**-veld en klik **Wysig** daaronder.

’n Modale venster sal verskyn. Onder die **Sjabloonwebwerwe**-veld kan jy al die webwerfsjablone kies en lys wat jy tydens registrasie beskikbaar wil hê. Die webwerfsjablone wat jy hier spesifiseer, sal beskikbaar wees ongeag watter produk die gebruiker gekies het.

![Sjabloonkeuseveld in die betaalvorm-redigeerder](/img/config/checkout-form-template-step.png)

Aan die voorkant sien kliënte die sjabloonkieser tydens die betaalproses en kan hulle die beginnende ontwerp vir hul nuwe webwerf kies.

![Voorkant-sjabloonkieser tydens registrasie](/img/config/frontend-template-chooser.png)

### Webwerfsjabloonopsies {#site-template-options}

Daar is ander webwerfsjabloonfunksies beskikbaar wat jy onder Ultimate Multisite-instellings aan of af kan skakel.

![Webwerfsjabloonopsies in Ultimate Multisite-instellings](/img/config/settings-sites-templates-section.png)

#### Laat sjabloonwisseling toe {#allow-template-switching}

As jy hierdie opsie aktiveer, sal jou kliënte die sjabloon wat hulle tydens die aansluitingsproses kies, kan verander nadat die Account en webwerf geskep is. Dit is nuttig vanuit ’n kliënt se oogpunt, aangesien dit hulle toelaat om weer ’n sjabloon te kies as hulle later uitvind dat hul oorspronklike keuse nie die beste een vir hul spesifieke behoeftes was nie.

#### Laat gebruikers toe om hul webwerf as sjablone te gebruik {#allow-users-to-use-their-site-as-templates}

Aangesien subwebwerfgebruikers tyd bestee het om hul eie webwerf te bou en te ontwerp, wil hulle dit dalk kloon en gebruik as een van die webwerfsjablone wat beskikbaar is wanneer nog ’n subwebwerf op jou netwerk geskep word. Hierdie opsie sal hulle toelaat om dit te doen.

#### Kopieer media wanneer ’n sjabloon gedupliseer word {#copy-media-on-template-duplication}

As jy hierdie opsie merk, sal die media wat na die sjabloonwebwerf opgelaai is, na die nuutgeskepte webwerf gekopieer word. Dit kan op elk van die planne oorheers word.

#### **Voorkom dat soekenjins webwerfsjablone indekseer** {#prevent-search-engines-from-indexing-site-templates}

Webwerfsjablone, soos in hierdie artikel bespreek, is standaardraamwerke maar steeds deel van jou netwerk, wat beteken dat dit steeds vir soekenjins beskikbaar is om te vind. Hierdie opsie sal jou toelaat om die webwerfsjablone te versteek sodat soekenjins hulle nie kan indekseer nie.

## Voorafinvul van webwerfsjablone met outomatiese soek-en-vervang {#pre-populating-site-templates-with-auto-search-and-replace}

Een van die kragtigste kenmerke van Ultimate Multisite is die vermoë om arbitrêre teks-, kleur- en kiesvelde by die registrasievorm te voeg. Sodra ons daardie data vasgelê het, kan ons dit gebruik om die inhoud in sekere dele van die geselekteerde webwerfsjabloon vooraf in te vul. Dan, wanneer die nuwe webwerf gepubliseer word, sal Ultimate Multisite die plekhouers vervang met die werklike inligting wat tydens registrasie ingevoer is.

Byvoorbeeld, as jy jou eindgebruiker se maatskappynaam tydens registrasie wil kry en die maatskappynaam outomaties op die tuisblad wil plaas. Op jou sjabloonwebwerf se tuisblad moet jy die plekhouers byvoeg, soos in die prent hieronder (plekhouers moet bygevoeg word omring deur dubbele krulhakies - {{placeholder_name}}).

![Tuisblad met plekhouerteks in krulhakies](/img/config/site-templates-list.png)

Dan kan jy eenvoudig ’n ooreenstemmende registrasieveld op jou betaalvorm byvoeg om daardie data vas te lê. Dieselfde betaalvorm-redigeerder wat vir sjabloonkeuse gebruik word, laat jou pasgemaakte velde langs die sjabloonkieser plaas:

![Sjabloonkeuse en registrasievelde in die betaalvorm-redigeerder](/img/config/checkout-form-template-step.png)

Jou kliënt sal dan daardie veld tydens registrasie kan invul.

![Voorkant-betaalvorm met sjabloonkieser](/img/config/frontend-template-chooser.png)

Ultimate Multisite sal dan die plekhouers outomaties vervang met die data wat deur die kliënt verskaf is.

![Plekhouers vervang met kliëntdata op die webwerf](/img/config/site-templates-list.png)

### Los die “sjabloon vol plekhouers”-probleem op {#solving-the-template-full-of-placeholders-problem}

Dit alles is wonderlik, maar ons loop wel ’n lelike probleem raak: nou is ons webwerfsjablone - wat deur ons kliënte besoek kan word - vol lelike plekhouers wat nie veel sê nie.

Om dit op te los, bied ons die opsie om vals waardes vir die plekhouers te stel, en ons gebruik daardie waardes om hul inhoud op die sjabloonwebwerwe te soek en te vervang terwyl jou kliënte dit besoek.

Jy kan toegang tot die sjabloonplekhouer-redigeerder kry deur na **Ultimate Multisite > Settings > Sites** te gaan en dan, in die sybalk, op die **Wysig plekhouers**-skakel te klik.

![Webwerfsjablooninstellings onder die Sites-instellingsbladsy](/img/config/settings-sites-templates-section.png)

Dit sal jou na die plekhouers se inhoudsredigeerder neem, waar jy plekhouers en hul onderskeie inhoud kan byvoeg.

![Ingangspunt vir sjabloonplekhouers se inhoudsredigeerder](/img/config/settings-sites-templates-section.png)
