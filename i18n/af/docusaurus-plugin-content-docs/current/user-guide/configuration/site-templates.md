---
title: Webwerkskeuëls
sidebar_position: 4
_i18n_hash: da303a4b11e2b54bb7892c08b88a4d24
---
# Webwerf Sjabloon (v2)

_**LETSEL: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x. As jy weergawe 1.x gebruik,**_ **kyk na hierdie artikel** _**.**_

Ons doelwit wanneer ons 'n premium netwerk met Ultimate Multisite skep, is om soveel prosesse moontlik te outomatiseer terwyl ons kliënte buigsaamheid en verskillende opsies gee om uit te kies wanneer hulle hul webwerwe skep. 'n Maklike manier om hierdie balans te bereik, is om die Ultimate Multisite Webwerf Sjabloon-funksie te gebruik.

## Wat is 'n Webwerf Sjabloon?

Soos die naam voorgestel, is 'n Webwerf Sjabloon 'n basiswebwerf wat as 'n basis kan dien wanneer jy nuwe webwerwe in jou netwerk skep.

Dit beteken jy kan 'n basiswebwerf skep, verskillende plugins aktiver, 'n aktiewe tema stel, en dit op enige manier aanpas wat jy wil. Dan, wanneer jou kliënt 'n nuwe rekening skep, sal hulle nie 'n standaard WordPress-webwerf met geen betekenisvolle inhoud binne nie, maar hulle sal 'n kopie van jou basiswebwerf ontvang met al die aanpassings en inhoud reeds op plek.

Dit klink fantasties, maar hoe skep ek 'n nuwe webwerf sjabloon? Dit is net so eenvoudig soos dit kan wees.

## Skep en Wysig 'n nuwe Webwerf Sjabloon

Webwerf Sjablone is net normale webwerwe op jou netwerk. Om 'n nuwe sjabloon te skep, kan jy eenvoudig na **Netwerk Admin > Ultimate Multisite > Sites > Add Site** gaan.

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Dit sal 'n modale venster oopmaak waar dit vra vir die **Webwerf Titel, Webwerf Domein/pad,** en **Webwerf Tipe**. Onder die **Webwerf Tipe**-drop-down veld, maak seker dat jy **Webwerf Sjabloon** kies.

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Jy kan ook die webwerf sjabloon beskrywing sien:

![Site template description](/img/config/site-template-description.png)

Aan die onderkant van die formulier, sal jy 'n **Copy Site** (Kopieer Webwerf) omskakelaar merk. Dit sal jou toelaat om 'n nuwe webwerf sjabloon te skep op grond van 'n bestaande webwerf sjabloon as jou beginpunt, wat jou help om tyd te spaar in plaas daarvan om 'n sjabloon van die begin af te skep.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Aanpas die inhoud van 'n Webwerf Sjabloon

Om jou webwerf sjabloon aan te pas, navigeer eenvoudig na sy dashboard paneel en maak die veranderinge wat jy benodig. Jy kan nuwe plase, bladsye skep, plugins aktiver, en die aktiewe tema verander. Jy kan selfs na die Customizer gaan en alle soorte aanpasinstellings verander.

![Site template edit interface](/img/config/site-template-edit.png)

Al hierdie data sal oorgedra word wanneer 'n kliënt 'n nuwe webwerf skep op grond van daardie Webwerf Sjabloon.

### Voortgesette Opsies

As jy weet hoe om met bietjie aangepaste kodering om te gaan, kan jy gebruik maak van ons Search and Replace API om inligting op die nuwe webwerf outomaties te vervang nadat dit geskep is. Dit is nuttig vir dinge soos die vervanging van maatskappyname op 'n Oor Ons-bladsy, die vervanging van die kontak-e-pos op die Kontak-bladsy, ens.

### Gebruik Webwerf Sjablone

Goed, jy het 'n hele reeks verskillende Webwerf Sjablone met verskillende ontwerpe, temas en instellings geskep. Hoe maak jy hulle nou nuttig op jou netwerk?

Basies is daar twee benaderings wat jy nou kan gebruik (nie gelyktydig nie):

  * Een Webwerf Sjabloon aan elke een van jou Planne koppel

**OF**

  * Jou kliënte toelaat om self die webwerf sjablone tydens registrasie te kies.

#### Modus 1: Webwerf Sjabloon Toewys

In hierdie modus sal jou kliënte nie 'n sjabloon kan kies wanneer hulle 'n rekening skep nie, maar jy sal definieer watter sjabloon op elke een van jou Planne gebruik moet word.

Om dit te doen, moet jy na **Ultimate Multisite > Products > Edit** gaan.

![Edit product to assign site template](/img/config/product-site-templates.png)

Dit bring jou na die **Edit Product** bladsy. Onder die **Product Options** afdeling, vind die **Site template** tab en kies die **Assign Site** **Template** opsie uit die drop-down veld. Dit sal die lys van beskikbare webwerf sjablone oopmaak en dit sal jou toelaat om net een webwerf sjabloon te kies wat aan die produk gekoppel is.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Modus 2: Kies Beskikbare Webwerf Sjabloon

In hierdie modus sal jy jou kliënte 'n keuse gee tydens die registrasieproses. Hulle sal in staat wees om uit verskillende webwerf sjablone te kies wat jy onder die produkinstellings definieer. Jy het 'n opsie om die webwerf sjabloon wat hulle kan kies te beperk onder die geselekteerde produk. Dit sal jou toelaat om verskillende stel webwerf sjablone onder elke produk te hê, wat ideaal is om verskillende funksies en kenmerke vir 'n hoër-gepryste produk te beklemtoon.

Op die **Edit Product** bladsy. Onder die **Product Options** afdeling, vind die **Site template** tab en kies die **Choose Available Site Template** opsie uit die drop-down veld. Dit sal die lys van beskikbare webwerf sjablone oopmaak en dit sal jou toelaat om die webwerf sjabloon te kies wat beskikbaar moet wees. Jy kan dit doen deur sy Gedrag te kies: **Available** as jy wil hê dat die webwerf sjabloon op die lys ingesluit moet wees. _**Not Available**_ as jy wil hê dat die webwerf sjabloon nie as 'n opsie moet verskyn nie. En **Pre-selected** as jy wil hê dat een van die webwerf sjablone wat gelys is, die standaard geselekteerde moet wees.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Standaard Modus: Webwerf sjabloonkeuse op die Checkout-formulier

As jy wil hê dat al jou webwerf sjablone beskikbaar moet wees tydens registrasie, of miskien verkies jy nie om ekstra werk te doen deur webwerf sjablone toe te wy of te spesifiseer onder elke produk wat jy skep nie. Dan kan jy eenvoudig die webwerf sjabloonkeuse onder jou **Checkout Form** stel. Om dit te doen, moet jy net na **Ultimate Multisite > Checkout Forms** gaan. Klik dan op **Edit** onder die formulier wat jy wil konfigureer.

![Checkout forms list page](/img/config/checkout-forms-list.png)

Dit sal die **Edit Checkout Form** bladsy oopmaak. Vind die **Template Selection** veld en klik daaronder op **Edit**.

![Checkout form editor with template selection field](/img/config/checkout-form-editor.png)

'n Modale venster sal verskyn. Onder die **Template Sites** veld kan jy al die webwerf sjablone wat jy beskikbaar wil hê tydens registrasie, kies en lys. Die webwerf sjablone wat jy hier spesifiseer, sal beskikbaar wees ongeag watter produk die gebruiker gekies het.

![Template sites field in checkout form editor](/img/config/checkout-form-step.png)

### Webwerf Sjabloon Opsies

Daar is ander webwerf sjabloon funksies beskikbaar wat jy kan aan of afskakel onder Ultimate Multisite instellings.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites.png)

#### Toelaat Sjabloonwisseling

Die aktivering van hierdie opsie sal jou kliënte toelaat om die sjabloon wat hulle kies tydens die registrasieproses te verander nadat die rekening en webwerf geskep is. Dit is nuttig vanuit 'n kliënt se oogpunt, aangesien dit hulle toelaat om 'n sjabloon te herkoes as hulle later uitvind dat hul oorspronklike keuse nie die beste was vir hul spesifieke behoeftes nie.

#### Toelaat Gebruikers om hul Webwerf as sjablone te gebruik

Aangesien subwerfgebruikers tyd spandeer het om hul eie webwerf te bou en te ontwerp, wil hulle dalk dit kloneer en gebruik as een van die webwerf sjablone wat beskikbaar is wanneer hulle 'n ander subwerf op jou netwerk skep. Hierdie opsie sal hulle toelaat om dit te bereik.

#### Kopieer Media by Sjabloonduplikasie

Die aankruising van hierdie opsie sal die media wat op die sjabloonwebwerf geplaas is, na die nuut geskepde webwerf kopieer. Dit kan op elke plan oorgeneem word.

#### **Voorkom dat Soekmasjiene Webwerf Sjablone indekseer**

Webwerf sjablone, soos bespreek in hierdie artikel, is basiswebwerwe maar steeds deel van jou netwerk, wat beteken dat dit steeds beskikbaar is vir soekmasjiene om te vind. Hierdie opsie sal jou toelaat om die webwerf sjablone te verberg sodat soekmasjiene dit nie kan indekseer nie.

## Webwerf Sjablone Vooraf Vul met outo soek-en-vervang

Een van die kragtigste kenmerke van Ultimate Multisite is die vermoë om willekeurige teks, kleur en keusevelde op die registrasieformulier by te voeg. Sodra ons daardie data vasgevang het, kan ons dit gebruik om die inhoud in sekere dele van die geselekteerde webwerf sjabloon vooraf te vul. Dan, wanneer die nuwe webwerf gepubliseer word, sal Ultimate Multisite die platheidsvervangers met die werklike inligting wat tydens registrasie ingevoer is, vervang.

Byvoorbeeld, as jy die maatskappynaam van jou eindgebruiker tydens registrasie wil kry en outomaties die maatskappynaam op die hoofblad wil plaas. Op jou sjabloonwebwerf hoofblad moet jy die platheidsvervangers byvoeg, soos in die beeld hieronder (platheidsvervangers moet omring word deur dubbele kurleëhakies - {{platheidsvervanger_naam}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Dan kan jy eenvoudig 'n ooreenstemmende registrasieveld op jou checkout-formulier byvoeg om daardie data vas te vang:

![Checkout form with matching registration field](/img/config/checkout-form-editor.png)

Jou kliënt sal dan daardie veld tydens die registrasie kan invul.

![Registration field filled by customer](/img/config/checkout-form-step.png)

![Preview of the registration form](/img/config/checkout-form-editor.png)

Ultimate Multisite sal dan die platheidsvervangers outomaties met die data wat deur die kliënt verskaf is, vervang.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Oplos die "sjabloon vol platheidsvervangers" probleem

Al hierdie is wonderlik, maar ons kom wel teë 'n lelike probleem: nou is ons webwerf sjablone - wat deur ons kliënte besoek kan word - vol lelike platheidsvervangers wat nie veel vertel nie.

Om dit op te los, bied ons die opsie om valse waardes vir die platheidsvervangers te stel, en ons gebruik daardie waardes om hul inhoud op die sjabloonwebwerwe te soek en te vervang terwyl jou kliënte besoek.

Jy kan toegang kry tot die sjabloonplatheidsvervanger-redigeerder deur na **Ultimate Multisite > Settings > Sites** te gaan, en dan, op die sybalk, die **Edit Placeholders** skakel te klik.

![Placeholder settings under Sites settings page](/img/config/settings-sites.png)

Dit sal jou na die platheidsvervanger-inhoudredigeerder neem, waar jy platheidsvervangers en hul ooreenstemmende inhoud kan byvoeg.

![Template placeholders content editor](/img/config/settings-sites.png)
