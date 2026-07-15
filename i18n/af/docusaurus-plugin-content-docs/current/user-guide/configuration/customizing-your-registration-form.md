---
title: Pas jou registrasievorm aan
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Pas jou registrasievorm aan

Om jou netwerk uniek te laat lyk teenoor al die ander SaaS wat op die WordPress-platform gebou is, laat Ultimate Multisite jou toe om jou registrasie- en aanmeldbladsye met ons **Afrekenvorms**-funksie aan te pas.

Alhoewel dit ’n maklike en buigsame manier is om met verskillende benaderings te eksperimenteer wanneer jy nuwe kliënte probeer omskakel, word dit meestal gebruik om gepersonaliseerde registrasievorms te skep. Hierdie artikel is daarop gemik om jou te wys hoe jy dit kan doen.

## Aanmeld- en registrasiebladsye: {#login-and-registration-pages}

Met Ultimate Multisite-installasie skep dit outomaties pasgemaakte aanmeld- en registrasiebladsye op jou hoofwebwerf. Jy kan hierdie verstekbladsye enige tyd verander deur na jou **Ultimate Multisite > Instellings > Aanmelding & Registrasie**-bladsy te gaan.

![Aanmeld- en registrasie-instellingsbladsy](/img/config/settings-general.png)

Hier is ’n volledige aansig van die aanmeld- en registrasie-instellingsbladsy:

![Volledige aanmeld- en registrasie-instellingsbladsy](/img/config/settings-login-registration-full.png)

Kom ons kyk na elkeen van die opsies wat jy op die **Aanmelding & Registrasie**-bladsy kan aanpas:

  * **Aktiveer registrasie:** Hierdie opsie sal die registrasie op jou netwerk aktiveer of deaktiveer. As dit afgeskakel is, sal jou kliënte nie kan registreer en op jou produkte inteken nie.

  * **Aktiveer e-posverifikasie:** As hierdie opsie aangeskakel is, sal kliënte wat op ’n gratis plan of ’n betaalde plan met ’n proeftydperk inteken ’n verifikasie-e-pos ontvang en op die verifikasieskakel moet klik sodat hul webwerwe geskep kan word.

  * **Verstekregistrasiebladsy:** Dit is die verstekbladsy vir registrasie. Hierdie bladsy moet op jou webwerf gepubliseer wees en ’n registrasievorm hê (ook bekend as ’n afrekenvorm) - waar jou kliënte op jou produkte sal inteken. Jy kan soveel registrasiebladsye en afrekenvorms skep as wat jy wil, onthou net om die afrekenvorm-kortkode op die registrasiebladsy te plaas, anders sal dit nie verskyn nie.

  * **Gebruik pasgemaakte aanmeldbladsy:** Hierdie opsie laat jou toe om ’n aangepaste aanmeldbladsy te gebruik, anders as die verstek wp-login.php-bladsy. As hierdie opsie aangeskakel is, kan jy kies watter bladsy vir aanmelding gebruik sal word in die **Verstekaanmeldbladsy**-opsie (direk hieronder).

  * **Verdoesel die oorspronklike aanmeld-URL (wp-login.php)** : As jy die oorspronklike aanmeld-URL wil versteek, kan jy hierdie opsie aanskakel. Dit is nuttig om brute-force-aanvalle te voorkom. As hierdie opsie geaktiveer is, sal Ultimate Multisite ’n 404-fout wys wanneer ’n gebruiker probeer om toegang tot die oorspronklike wp-login.php-skakel te kry

  * **Dwing sinchroniese webwerf-publikasie af:** Nadat ’n kliënt op ’n produk op ’n netwerk ingeteken het, moet die nuwe hangende webwerf in ’n regte netwerkwebwerf omgeskakel word. Die publikasieproses gebeur via Job Queue, asinchroon. Aktiveer hierdie opsie om te dwing dat die publikasie in dieselfde versoek as die registrasie gebeur.

Kom ons kyk nou na ander opsies wat steeds relevant is vir die aanmeld- en registrasieproses. Hulle is direk onder **Ander opsies** op dieselfde Aanmelding & registrasie-bladsy:

  * **Verstekrol:** Dit is die rol wat jou kliënte ná die registrasieproses op hul webwerf sal hê.

  * **Aktiveer Jumper:** Aktiveer die Jumper-kortpad in die admin-area. Jumper laat administrateurs vinnig na Ultimate Multisite-skerms, netwerkvoorwerpe en ander ondersteunde bestemmings spring sonder om deur elke kieslys te blaai. Skakel dit af as jy verkies om daardie vinnige navigasiehulpmiddel van die admin-koppelvlak te versteek.

  * **Voeg gebruikers ook by die hoofwebwerf:** Deur hierdie opsie te aktiveer sal die gebruiker ná die registrasieproses ook by die hoofwebwerf van jou netwerk gevoeg word. As jy hierdie opsie aktiveer, sal ’n opsie om die **verstekrol** van hierdie gebruikers op jou webwerf te stel ook direk hieronder verskyn.

  * **Aktiveer veelvuldige rekeninge:** Laat gebruikers toe om rekeninge op verskillende webwerwe van jou netwerk met dieselfde e-posadres te hê. As hierdie opsie af is, sal jou kliënte nie met dieselfde e-posadres ’n rekening op ander webwerwe kan skep wat op jou netwerk loop nie.

En dit is al die opsies wat met aanmelding en registrasie verband hou wat jy kan aanpas! Moenie vergeet om jou instellings te stoor nadat jy klaar is met die redigering daarvan nie.

## Gebruik veelvuldige registrasievorms: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 bied ’n afrekenvorm-redigeerder wat jou toelaat om soveel vorms te skep as wat jy wil, met verskillende velde, produkte wat aangebied word, ens.

Beide die aanmeld- en registrasiebladsye word met kortkodes ingebed: **[wu_login_form]** op die aanmeldbladsy en**[wu_checkout]** vir die registrasiebladsy. Jy kan die registrasiebladsy verder aanpas deur afrekenvorms te bou of te skep.

Om toegang tot hierdie funksie te kry, gaan na die **Afrekenvorms**-kieslys, aan die linkerkantbalk.

![Afrekenvorms-kieslys in die sybalk](/img/config/checkout-forms-list.png)

Op hierdie bladsy kan jy al die afrekenvorms sien wat jy het.

As jy ’n nuwe een wil skep, klik net op **Voeg afrekenvorm by** boaan die bladsy.

Jy kan een van hierdie drie opsies as jou beginpunt kies: enkelstap, multi-stap of leeg. Klik dan op **Gaan na die redigeerder**.

![Voeg afrekenvorm by met enkelstap-, multi-stap- of leë opsies](/img/config/checkout-forms-list.png)

Alternatiewelik kan jy die vorms wat jy reeds het redigeer of dupliseer deur op die opsies onder die naam daarvan te klik. Daar sal jy ook die opsies vind om die vorm se kortkode te kopieer of om die vorm te verwyder.

![Afrekenvorm-sweefaksies met redigeer, dupliseer en verwyder](/img/config/checkout-form-hover-actions.png)

As jy enkelstap of multi-stap kies, sal die afrekenvorm reeds vooraf ingevul wees met die basiese stappe sodat dit kan werk. Dan, as jy wil, kan jy ekstra stappe daarby voeg.

### Redigeer ’n afrekenvorm: {#editing-a-checkout-form}

Soos ons vroeër genoem het, kan jy afrekenvorms vir verskillende doeleindes skep. In hierdie voorbeeld sal ons aan ’n registrasievorm werk.

Nadat jy na die afrekenvorm-redigeerder gegaan het, gee jou vorm ’n naam (wat slegs vir interne verwysing gebruik sal word) en ’n slug (gebruik om byvoorbeeld shortcakes te skep).

![Afrekenvorm-redigeerder met naam- en slug-velde](/img/config/checkout-form-name-slug.png)

Vorms bestaan uit stappe en velde. Jy kan ’n nuwe stap byvoeg deur op **Voeg nuwe afrekenstap by** te klik.

![Voeg nuwe afrekenstap by-knoppie](/img/config/checkout-form-add-step.png)

Op die eerste oortjie van die modale venster, vul die inhoud van jou vorm se stap in. Gee dit ’n ID, ’n naam en ’n beskrywing. Hierdie items word meestal intern gebruik.

![Afrekenstap-inhoudsoortjie met ID, naam en beskrywing](/img/config/checkout-form-step-content.png)

Stel daarna die sigbaarheid van die stap. Jy kan kies tussen **Wys altyd** , **Wys slegs vir aangemelde gebruikers** of **Wys slegs vir gaste**.

![Afrekenstap-sigbaarheidsopsies](/img/config/checkout-form-step-visibility.png)

Laastens, konfigureer die stapstyl. Hierdie is opsionele velde.

![Afrekenstap-stylkonfigurasie](/img/config/checkout-form-step-style.png)

Nou is dit tyd om velde by ons eerste stap te voeg. Klik net op **Voeg nuwe veld by** en kies die tipe afdeling wat jy wil hê.

![Voeg nuwe veld by-knoppie](/img/config/checkout-form-add-field-button.png)![Veldtipe-keuse-aftreklys](/img/config/checkout-form-field-type-dropdown.png)

Elke veld het verskillende parameters wat ingevul moet word. Vir hierdie eerste inskrywing sal ons die **Gebruikernaam**-veld kies.

![Gebruikernaam-veldkonfigurasie](/img/config/checkout-form-username-content.png)![Gebruikernaam-veldparameters](/img/config/checkout-form-username-visibility.png)![Bykomende Gebruikernaam-veldinstellings](/img/config/checkout-form-username-style.png)

Jy kan soveel stappe en velde byvoeg as wat jy nodig het. Om jou produkte te vertoon sodat jou kliënte een kan kies, gebruik die Prysstabel-veld. As jy jou kliënte ’n sjabloon wil laat kies, voeg die Sjabloonkeuse-veld by. En so aan.

![Afrekenvorm-redigeerder met sjabloonkeuse-veld](/img/config/checkout-form-with-template-field.png)

_**Nota:** As jy ’n produk skep nadat jy jou afrekenvorm geskep het, sal jy die produk in die Prysstabel-afdeling moet byvoeg. As jy dit nie byvoeg nie, sal die produk nie aan jou kliënte op die registrasiebladsy verskyn nie._

_**Nota 2:** gebruikernaam, e-pos, wagwoord, webwerftitel, webwerf-URL, bestelopsomming, betaling en indien-knoppie is verpligte velde om ’n afrekenvorm te skep._

Terwyl jy aan jou afrekenvorm werk, kan jy altyd die Voorskou-knoppie gebruik om te sien hoe jou kliënte die vorm sal sien. Jy kan ook wissel tussen aansig as ’n bestaande gebruiker of ’n besoeker.

![Voorskou-knoppie op die afrekenvorm-redigeerder](/img/config/checkout-form-preview-button.png)![Afrekenvormvoorskou as besoeker of bestaande gebruiker](/img/config/checkout-form-preview-modal.png)

Laastens, onder **Gevorderde opsies** kan jy die boodskap vir die **Dankie**-bladsy konfigureer, brokkies byvoeg om omskakelings na te spoor, pasgemaakte CSS by jou afrekenvorm voeg of dit tot sekere lande beperk.

![Gevorderde opsies met Dankie-bladsy, omskakelingnasporing en pasgemaakte CSS](/img/config/checkout-form-advanced.png)

Jy kan ook jou afrekenvorm handmatig aktiveer of deaktiveer deur hierdie opsie in die regterkolom aan of af te skakel, of die vorm permanent verwyder.

![Aktief-skakelaar en verwyder-opsie vir afrekenvorm](/img/config/checkout-form-active.png)

Moenie vergeet om jou afrekenvorm te stoor nie!

![Stoor afrekenvorm-knoppie](/img/config/checkout-form-save.png)

Om jou vorm se kortkode te kry, klik op **Genereer kortkode** en kopieer die resultaat wat in die modale venster gewys word.

![Genereer kortkode-modale venster met kortkode om te kopieer](/img/config/checkout-form-editor.png)

_**Nota:** Jy sal hierdie kortkode by jou registrasiebladsy moet voeg sodat hierdie afrekenvorm daarby gevoeg word._

## Produkte en sjablone vooraf kies via URL-parameters: {#pre-selecting-products-and-templates-via-url-parameters}

As jy pasgemaakte prysstabelle vir jou produkte wil skep en op die afrekenvorm die produk of sjabloon wat jou kliënt van jou prysstabel of sjablonebladsy kies vooraf wil kies, kan jy URL-parameters hiervoor gebruik.

### **Vir planne:** {#for-plans}

Gaan na **Ultimate Multisite > Produkte > Kies ’n plan**. Jy behoort die **Klik om deelbare skakel te kopieer**-knoppie boaan die bladsy te sien. Dit is die skakel wat jy kan gebruik om hierdie spesifieke plan op jou afrekenvorm vooraf te kies.

![Produkbladsy met deelbare skakel-knoppie](/img/config/products-list.png)

Let daarop dat hierdie deelbare skakel slegs geldig is vir **Planne**. Jy kan nie deelbare skakels vir pakkette of dienste gebruik nie.

### Vir sjablone: {#for-templates}

As jy webwerfsjablone op jou afrekenvorm vooraf wil kies, kan jy die parameter gebruik: **?template_id=X** op jou registrasiebladsy-URL. Die "X" moet vervang word deur die **webwerfsjabloon-ID-nommer**. Om hierdie nommer te kry, gaan na **Ultimate Multisite > Webwerwe**.

Klik op **Bestuur** direk onder die webwerfsjabloon wat jy wil gebruik. Jy sal die SITE ID-nommer sien. Gebruik net hierdie nommer vir hierdie spesifieke webwerfsjabloon om vooraf op jou afrekenvorm gekies te word. In ons geval hier sou die URL-parameter **?template_id=2** wees.

![Webwerwelys wat webwerfsjabloon-ID wys](/img/config/site-templates-list.png)

Kom ons sê ons netwerkwebwerf is [**www.mynetwork.com**](http://www.mynetwork.com) en ons registrasiebladsy met ons afrekenvorm is op die **/register**-bladsy geleë. Die hele URL met hierdie webwerfsjabloon vooraf gekies sal lyk soos [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

En as jy wil, kan jy beide produkte en sjablone vooraf vir jou afrekenvorm kies. Al wat jy hoef te doen is om die deelbare skakel van die plan te kopieer en die sjabloonparameter aan die einde te plak. Dit sal lyk soos [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
