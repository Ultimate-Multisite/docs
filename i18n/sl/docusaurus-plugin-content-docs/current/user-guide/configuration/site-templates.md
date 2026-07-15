---
title: Štiri za spletne strani
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site šabloni (v2)

_**OPOMENKA: Ta članek se nanaša na Ultimate Multisite verzijo 2.x. Če uporabljate verzijo 1.x,**_ **pogledajte ta članek.**_

Naš cilj pri ustvarjanju premium mreže z Ultimate Multisite je automatizirati čim več procesov, hkrati pa ponuditi našim strankam fleksibilnost in različne možnosti za izbiro ob ustvarjanju njihovih spletnih strani. En način doseganja tega uravnoteženja je uporaba funkcije Site Templates v Ultimate Multisite.

## Kaj je Site Template? {#what-is-a-site-template}

Kot kaže ime, Site Template je osnovna stran (boilerplate site), ki lahko služi kot podlaga pri ustvarjanju novih strani v vašoj mreži.

To pomeni, da lahko ustvarite osnovno stran, aktivirate različne pluginove, postavite aktivno temo in jo prilagodite na svoj način. Nato, ko vaš stranke ustvarijo novo račun, ne bodo dobili standardne WordPress strani brez smiselnega vsebine, ampak bodo dobili kopijo vaše osnovne strani z vsemi prilagoditvami in vsebino že postavljeno.

To zvuči super, vendar kako ustvariti novo site template? Je to čim bolj preprosto kot je mogoče.

## Ustvarjanje in ureditev nove Site Template {#creating-and-editing-a-new-site-template}
Site Templates so le običajne strani na vaši mreži. Novo šablon ustvarite lahko preprosto idete do **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Gumb za dodaj stran v seznamu strani](/img/config/site-templates-list.png)**

To bo odprlo modalno okno, kjer se bodo vprašali po **Naslovu strani (Site title), Domenju/potih strani strani (Site Domain/path)** in **Vrsti strani (Site type)**. Pod izberovalnikom **Vrste strani (Site Type)** se prepričajte, da ste izbrali **Site Template** *.

_![Modal za dodaj site template z izberovalnikom vrste strani](/img/config/site-templates-list.png)_

Lahko lahko dodate opis namenjen strankam, ki pojasni, kaj šablon vključuje:

![Opis polja za predhodno obrazec na strani urejanja šablona](/img/config/site-template-edit-description.png)

Na dnu oblika boste videli preklopnik **Copy Site** (Kopiraj stran). Ta vam omogoča, da ustvarite novo šablon stran na podlagi že obstoječega šablona kot začetne točko, da boste lahko štedili čas in ne morali šablon ustvarjati od nič.

![Modal za dodajanje šablona z preklopnikom kopiranja strani](/img/config/site-templates-list.png)

### Uporaba vsebine Šablona Stranje {#customizing-the-contents-of-a-site-template}

Da bi prilagodili svoj šablon stran, le navigirajte do njegove dashboard panel in vnesite spremembe, ki jih potrebujete. Lahko ustvarjate nove objave, strani, aktivirate pluginove in spremenite aktivno temo. Lahko čakate tudi na Customizerju in spremenite vse vrste opcija za prilagoditev.

![Sprememba za urejanje šablona stran](/img/config/site-template-edit.png)

Vsota ta podatkovna podlaga bo prenesena, ko kupec ustvari novo stran na podlagi tega Šablona Stranje.

### Napredne možnosti {#advanced-options}

Če imate nekaj znanja o prilagajanju koda, lahko uporabite naš Search and Replace API za avtomatizirano nadomestitev informacij na novem spletnem mestu po njegovem ustvarjanju. To je koristno za stvari kot so nadomestitev imen podjetja na strani "O nas", nadomestitev e-pošte za stik na strani za stike in tako naprej.

### Uporaba Šablonov Stranj {#using-site-templates}
Dobro, ste ustvarili veliko različnih Šablonov Stranj z različnimi dizajni, temami in nastavitvami. Kako jih lahko zdaj naredite uporabne v svoji mreži?

Osnovno je, da lahko zdaj uporabite dve pristopu (ne hkrati):

  * Prilaga en šablon strani vsakemu vašemu Planu

**ALI**

  * Dajte svojim strankam možnost sami izbrati šablone strani med registracijo.

#### Mode 1: Načrtovanje Šablona Stranje {#mode-1-assign-site-template}

V tem načinu ne bodo vaši klienci mogli izbrati šablon pri kreiranju računa, ampak vi boste sami določili kateri šablon naj se uporabi na vsakem od vaših Planov.

Za to morate iti v **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

To vas bo peljalo do strani **Edit Product**. Pod razdelkom **Product Options** najdete tabu **Site template** in izberite možnost **Assign Site Template** iz spora polja. To bo odprlo seznam na voljo šablonov za spletne strani in omogočilo vam da izberete samo en šablon za vsak produkt.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Način 2: Izberite na voljo šablon {#mode-2-choose-available-site-template}
V tem načinu boste kliencem dali možnost izbire med procesom registracije. Bodo lahko izbirali med različnimi šabloni za spletne strani, ki jih določite pod nastavitvami produkta. Imate možnost omejiti šablone, iz katerih lahko izbrete, pod izbranim produktom. To vam omogoča, da imate različne skupine šablonov za vsako produkt, kar je idealno za poudarjanje različnih funkcij in lastnosti pri bolj cenjenih izdelkih.

Na strani **Uredbe izdelka**. Pod razdelkom **Product Options** najdete tabu **Site template** in izberite možnost **Choose Available Site Template** iz spiska. To vam bo prikazal seznam na voljo templatov in boste lahko izbrali templat, ki želite biti na voljo. Lahko to storite tako, da izberete njegovo vedenje: **Available** (Na voljo), če želite, da je templat v seznamu. _**Not Available**_ (Ne na voljo), če ne želite, da se templat prikazuje kot možnost. In **Pre-selected** (Predizbran), če želite, da je ena iz templatov na seznamu predizbrana kot zadnja.

![Izberite na voljo templete z opcijami vedenja](/img/config/product-site-templates.png)

### Predvoljni način: Izbira templatov na strani za plačilo (Checkout form) {#default-mode-site-template-selection-on-the-checkout-form}

Če želite, da so vsi vaši templatovi na voljo med registracijo ali morda ne želite dodatnega dela pri dodelovanju ali določanju templatov pod vsako izdelek, lahko preprosto nastavite izbiro templatov pod vašo **Checkout Form**. Za to gre do **Ultimate Multisite > Checkout Forms** in kliknite na **Edit** pod formo, ki jo želite konfigurirati.

To vam bo prikazalo stran **Edit Checkout Form**. Poiščite polje **Template Selection** in kliknite na **Edit** pod njim.

Bo se pojavilo modalno okno. Pod poljem **Template Sites** lahko izberete in seznam vsi templatovi, ki želite biti na voljo med registracijo. Templete templatov, ki jih določite tukaj, bodo na voljo ne glede na to kateri izdelek je uporabnik izbral.

![Polje za izbiro templatov v redaktoru forme za plačilo](/img/config/checkout-form-template-step.png)

Na spletni strani vidijo kupci izberovalec templatov med plačilom in lahko izbrešče začetno namestitvo za svoj novi spletni strani.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Opcje šablona za spletno stran {#site-template-options}

Na voljo je še druga funkcije šablonov za spletne strani, ki jih lahko vklopite ali izklopite pod nastavitvami Ultimate Multisite.

![Opcje šablonov za spletne strani v nastavitvah Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Omogočite spremembo šablona {#allow-template-switching}

Vklop te opcije omogoča vašim strankam, da lahko spremenijo šablon, ki ga izbirajo med procesom registracije, po ustvaritvi računa in spletne strani. To je koristno zanj perspektive stranke, ker jim omogoča ponovno izbiro šablona, če pozne odkrijeta, da je prvotna izbira ni bila najboljša za njihove specifične potrebe.

#### Omogočite uporabnikom uporabo svoje strani kot šablonov {#allow-users-to-use-their-site-as-templates}

Ker uporabniki podstrani splej (subsite) posvetijo čas gradnji in oblikovanja lastne strani, bodo morda želeli klonirati in uporabiti jo kot eno od na voljo šablonov pri ustvarjanju druge podstrane v vašeta omrežju. Ta opcija jim bo omogočila to.

#### Kopiranje medijev pri duplikiranju šablona {#copy-media-on-template-duplication}

Preverjanje te opcije bo kopiralo medije, ki so bili obdelani na šablonski strani, na novo ustvarjene strani. To lahko prenašanje nadomeščajo na vsakih načrtah (plans).

#### **Preprečite iskanje motorjev za iskalni shablone za spletne strani** {#prevent-search-engines-from-indexing-site-templates}

Šabloni za spletne strani, kot je pogosto opisano v tej članku, so osnovna struktura (boilerplate), vendar pa so še vedno del vašega omrežja, kar pomeni, da jih iskanje motorjev lahko najde. Ta opcija vam bo omogočila skritanje šablona za spletne strani tako, da ga iskanje motorjev ne more iskal.

## Prednapredno popunjavanje šablona za spletne strani z avtomatizirano iskanjem in nadomestitvijo {#pre-populating-site-templates-with-auto-search-and-replace}

En ena najmo močnih funkcij Ultimate Multisite je možnost dodajanja proizvoljnega besedila, barv in polja na registracijski obrazec. Ko imamo te podatke zbrani, lahko uporabimo jih za predpopolnjenje vsebine v določenih delih izbran šablonske teme. Nato, ko se nov spletni dom dodaja, Ultimate Multisite bo nadomestil mestne zamenske (placeholders) z dejanskimi informacijami, ki so vnosjene med registracijo.

Na primer, če želite pridobiti ime podjetja uporabnika na registraciji in ga samodejno postaviti na domačo stran. Na svoji šablonski strani za domačo stran morate dodati mestne zamenske, kot je prikazano na sliki spodaj (mestne zamenske morajo biti obvrstile z dvojnimi ceļimi - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Potem lahko preprosto dodate ustrezne polje za registracijo na vaš obrazec za plačilo, da bi zbrali te podatke. Enako editor obrazca za plačilo, ki se uporablja za izbiro šablone, vam omogoča, da postavite prilagojena polja ob izberi šablone:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Vaš kupce bodo lahko nato to polje zapolnili med registracijo.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite bo nato mestne zamenske nadomestil z pododatki, ki jih je prinesel kupec.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Reševanje problema "šablona polna mestnih zamensk" {#solving-the-template-full-of-placeholders-problem}

Vse to je super, vendar imamo neugodo: našim šablonim stranem - ki jih lahko obiščejo naši kupci - so popolnoma polni mestne zamenske, ki ne povejo veliko.

Da bi to rešili, ponujamo možnost nastavitve lažnih vrednosti za placeholderje in te vrednosti uporabljamo za iskanje in zamenjavo njihovih vsebine na templatnih spletnih strani med obiskami vaših strank.

Na editor placeholderjev imate dostop s navigacijo **Ultimate Multisite > Settings > Sites**, nato pa na levi strani kliknete na povezavo **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

To vas bo peljalo do editorja vsebine placeholderjev, kjer lahko dodate placeholderje in njihovo pripadajo vsebine.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
