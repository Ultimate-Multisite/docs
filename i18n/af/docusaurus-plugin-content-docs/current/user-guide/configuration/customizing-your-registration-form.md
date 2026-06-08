---
title: Aanpas van jou registrasieformulier
sidebar_position: 17
_i18n_hash: b0e3b7cddd099b4260e5cf01fead8685
---
# Pas jou Registrasieformulier aan

Om jou netwerk uniek te laat lyk van al die ander SaaS wat op die WordPress-platform gebou is, laat Ultimate Multisite jou toe om jou registrasie- en aanmeldbladsye aan te pas met ons **Checkout Forms**-funksie.

Alhoewel dit 'n maklike en buigsame manier is om te eksperimenteer met verskillende benaderings wanneer jy probeer om nuwe kliënte te konverteer, word dit meestal gebruik om gepersonaliseerde registrasieformuliere te skep. Hierdie artikel het beoog om jou te wys hoe jy dit kan doen.

## Aanmeld- en registrasiebladsye:

Nadat Ultimate Multisite geïnstalleer is, skep dit outomaties aangepaste aanmeld- en registrasiebladsye op jou hoofwebwerf. Jy kan hierdie standaardbladsye enige tyd verander deur na jou **Ultimate Multisite > Settings > Login & Registration** bladsy te gaan.

![Login and Registration settings page](/img/config/settings-general.png)

Hier is 'n volledige uitsig van die aanmeld- en registrasie-instellingsbladsy:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Kom ons kyk na elke opsie wat jy op die **Login & Registration** bladsy kan aanpas:

*   **Enable registration:** Hierdie opsie sal die registrasie op jou netwerk moontlik maak of nie. As dit afgeskakel is, sal jou kliënte nie kan registreer en kan nie vir jou produkte inskryf nie.

*   **Enable email verification:** As hierdie opsie aangeskakel is, sal kliënte wat inskryf vir 'n gratis plan of 'n betaalde plan met 'n proefperiode, 'n verifikasie-e-pos ontvang en op die verifikasielink moet klik sodat hul webwerwe geskep kan word.

*   **Default registration page:** Dit is die standaardbladsy vir registrasie. Hierdie bladsy moet op jou webwerf gepubliseer word en moet 'n registrasieformulier (ook bekend as 'n checkout form') hê – waar jou kliënte vir jou produkte sal inskryf. Jy kan soveel registrasiebladsye en checkout forms skep as wat jy wil, maar onthou net om die checkout form shortcode op die registrasiebladsy te plaas, anders sal dit nie verskyn nie.

*   **Use custom login page:** Hierdie opsie laat jou toe om 'n aangepaste aanmeldbladsy te gebruik, anders as die standaard wp-login.php bladsy. As hierdie opsie aangeskakel is, kan jy kies watter bladsy vir aanmelding gebruik sal word op die **Default login page** opsie (reg onder).

*   **Obfuscate the original login url (wp-login.php)** : As jy die oorspronklike aanmeld-URL wil verberg, kan jy hierdie opsie aan. Dit is nuttig om brute-force aanvalle te voorkom. As hierdie opsie ingeskakel is, sal Ultimate Multisite 'n 404 fout wys wanneer 'n gebruiker probeer om die oorspronklike wp-login.php skakel te bereik.

*   **Force synchronous site publication:** Nadat 'n kliënt vir 'n produk op 'n netwerk inskryf, moet die nuwe uitstaande webwerf in 'n werklike netwerkwebwerf omskep word. Die publikasieproses gebeur via Job Queue, asynchrone. Skakel hierdie opsie in om die publikasie te dwing om in dieselfde versoek as die inskrywing te gebeur.

Nou, kom ons kyk na ander opsies wat steeds relevant is vir die aanmeld- en registrasieproses. Hulle is reg onder **Other options** op dieselfde Login & registration bladsy:

*   **Default role:** Dit is die rol wat jou kliënte op hul webwerf sal hê na die inskrywingsproses.

*   **Enable Jumper:** Maak die Jumper-skakels in die admin-gebied moontlik. Jumper laat administrateurs toe om vinnig na Ultimate Multisite-skerms, netwerkobjekte en ander ondersteunde bestemmings te spring sonder om deur elke meny te blaai. Skakel dit uit as jy verkies om daardie vinnige navigasiehulpmiddel van die admin-koppelvlak te verberg.

*   **Add users to the main site as well:** Om hierdie opsie in te skakel, sal die gebruiker ook by die hoofwebwerf van jou netwerk gevoeg word na die inskrywingsproses. As jy hierdie opsie inskakel, sal ook 'n opsie om die **default role** van hierdie gebruikers op jou webwerf te stel, reg onder verskyn.

*   **Enable multiple accounts:** Laat gebruikers rekeninge hê in verskillende webwerwe van jou netwerk met dieselfde e-posadres. As hierdie opsie uit is, sal jou kliënte nie kan 'n rekening skep op ander webwerwe wat op jou netwerk loop met dieselfde e-posadres nie.

En dit is al die opsies wat verband hou met aanmelding en registrasie wat jy kan aanpas! Moenie vergeet om jou instellings te stoor nadat jy klaar is met die redigering nie.

## Gebruik van verskeie registrasieformuliere:

Ultimate Multisite 2.0 bied 'n checkout form-redigeerder wat jou toelaat om soveel forme as wat jy wil skep, met verskillende velde, produkte wat aangebied word, ens.

Beide aanmeld- en registrasiebladsye is ingebed met shortcodes: **[wu_login_form]** op die aanmeldbladsy en **[wu_checkout]** vir die registrasiebladsy. Jy kan die registrasiebladsy verder aanpas deur checkout forms te bou of te skep.

Om hierdie funksie te bereik, gaan na die **Checkout Forms**-menu, aan die linkerkantbalk.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Op hierdie bladsy kan jy al die checkout forms sien wat jy het.

As jy een nuut wil skep, klik net op **Add Checkout Form** bo-op die bladsy.

Jy kan een van hierdie drie opsies as jou beginpunt kies: single step, multi-step of blank. Klik dan om na **Go to the Editor** te gaan.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternatief kan jy die forme wat jy reeds het, redigeer of duplikaat deur op die opsies onder sy naam te klik. Daar sal jy ook die opsies vind om die form se shortcode te kopieer of die form te verwyder.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

As jy single step of multi-step kies, sal die checkout form reeds voorgelaai wees met die basiese stappe sodat dit werk. Dan, indien jy wil, kan jy ekstra stappe byvoeg.

### Redigeer 'n Checkout Form:

Soos ons vroeër genoem het, kan jy checkout forms vir verskillende doeleindes skep. In hierdie voorbeeld sal ons op 'n registrasieformulier werk.

Nadat jy na die checkout form-redigeerder navigeer het, gee jou form 'n naam (wat slegs vir interne verwysing gebruik sal word) en 'n slug (gebruik om shortcodes te skep, byvoorbeeld).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Formuliere bestaan uit stappe en velde. Jy kan 'n nuwe stap byvoeg deur op **Add New Checkout Step** te klik.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Op die eerste tab van die modale venster, vul die inhoud van jou form se stap in. Gee dit 'n ID, 'n naam en 'n beskrywing. Hierdie items word meestal intern gebruik.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

Dankons, stel die sigbaarheid van die stap in. Jy kan kies tussen **Always show** , **Only show for logged in users** of **Only show for guests**.

![Checkout step visibility options](/img/config/checkout-form-step.png)

Laastens, konfigureer die stapstyl. Dit is opsionele velde.

![Checkout step style configuration](/img/config/checkout-form-step.png)

Nou, dit is tyd om velde by ons eerste stap by te voeg. Klik net op **Add New Field** en kies die tipe afdeling wat jy wil hê.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

Elke veld het verskillende parameters wat ingevul moet word. Vir hierdie eerste invoer, sal ons die **Username** veld kies.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

Jy kan soveel stappe en velde byvoeg as wat jy nodig het. Om jou produkte te wys vir jou kliënte om een te kies, gebruik die Pricing Table veld. As jy wil hê dat jou kliënte 'n sjabloon kan kies, voeg dan die Template Selection veld by. En so verder.

_**Let wel:** As jy 'n produk skep nadat jy jou checkout form geskep het, sal jy die produk in die Pricing table-afdeling moet byvoeg. As jy dit nie byvoeg nie, sal die produk nie vir jou kliënte op die registrasiebladsy verskyn nie._

_**Let wel 2:** username, email, password, site title, site URL, order summary, payment, en submit-knoppie is verpligte velde om 'n checkout form te skep._

Terwyl jy aan jou checkout form werk, kan jy altyd die Preview-knoppie gebruik om te sien hoe jou kliënte die form sal sien. Jy kan ook wissel tussen view as 'n bestaande gebruiker of 'n besoeker.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

Laastens, op **Advanced Options** kan jy die boodskap vir die **Thank You** bladsy konfigureer, snippets byvoeg om konversies te volg, aangepaste CSS aan jou checkout form byvoeg of dit beperk tot sekere lande.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Jy kan ook jou checkout form handmatig inskakel of uitskakel deur hierdie opsie aan die regterkolom te bewerkstellig, of die form permanent verwyder.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Moenie vergeet om jou checkout form te stoor!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Om jou form se shortcode te kry, klik op **Generate Shortcode** en kopieer die resultaat wat op die modale venster getoon word.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Let wel:** Jy sal hierdie shortcode by jou registrasiebladsy moet voeg om hierdie checkout form daarin te laat voeg._

## Voor-keuse van produkte en sjablone via URL-parameters:

As jy aangepaste prysitelle vir jou produkte wil skep en op die checkout form die produk of sjabloon wil voor-keus wat jou kliënt van jou prysitelle of sjablonbladsy kies, kan jy URL-parameters hiervoor gebruik.

### **Vir planne:**

Gaan na **Ultimate Multisite > Products > Select a plan**. Jy behoort die **Click to copy Shareable Link**-knoppie bo-op die bladsy te sien. Dit is die skakel wat jy kan gebruik om hierdie spesifieke plan op jou checkout form voor-te-keus te stel.

![Product page with shareable link button](/img/config/products-list.png)

Let op dat hierdie deelbare skakel slegs geldig is vir **Planne**. Jy kan deelbare skakels nie vir pakkette of dienste gebruik nie.

### Vir sjablone:

As jy webwerf-sjablone op jou checkout form wil voor-keus stel, kan jy die parameter gebruik: **?template_id=X** op jou registrasiebladsy-URL. Die "X" moet vervang word deur die **site template ID nommer**. Om hierdie nommer te kry, gaan na **Ultimate Multisite > Sites**.

Klik op **Manage** reg onder die webwerf-sjabloon wat jy wil gebruik. Jy sal die SITE ID nommer sien. Gebruik net hierdie nommer vir hierdie spesifieke webwerf-sjabloon om op jou checkout form voor-gesit te word. In ons geval hier, sal die URL-parameter **?template_id=2** wees.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Kom ons sê ons netwerkwebwerf is [**www.mynetwork.com**](http://www.mynetwork.com) en ons registrasiebladsy met ons checkout form is geleë op die **/register** bladsy. Die hele URL met hierdie webwerf-sjabloon voor-gesit sal lyk soos [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

En indien jy wil, kan jy beide produkte en sjablone op jou checkout form voor-keus stel. Alles wat jy hoef te doen, is om die deelbare skakel van die plan te kopieer en die sjabloonparameter aan die einde te plak. Dit sal lyk soos [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
