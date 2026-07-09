---
title: Prilagajanje vašega registracijskega obrazca
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Prilagajanje vašega registracijskega obrazca

Da bo vaše omrežje videti edinstveno v primerjavi z vsemi drugimi SaaS rešitvami, zgrajenimi na platformi WordPress, vam Ultimate Multisite omogoča prilagajanje strani za registracijo in prijavo z našo funkcijo **Checkout Forms**.

Čeprav so preprost in prilagodljiv način za preizkušanje različnih pristopov pri poskusu pretvorbe novih strank, se večinoma uporabljajo za ustvarjanje prilagojenih registracijskih obrazcev. Namen tega članka je pokazati, kako lahko to storite.

## Strani za prijavo in registracijo:

Ob namestitvi Ultimate Multisite samodejno ustvari prilagojene strani za prijavo in registracijo na vašem glavnem spletnem mestu. Te privzete strani lahko kadar koli spremenite na strani **Ultimate Multisite > Settings > Login & Registration**.

![Stran z nastavitvami za prijavo in registracijo](/img/config/settings-general.png)

Tukaj je celoten pogled strani z nastavitvami za prijavo in registracijo:

![Celotna stran z nastavitvami za prijavo in registracijo](/img/config/settings-login-registration-full.png)

Oglejmo si vsako od možnosti, ki jih lahko prilagodite na strani **Login & Registration**:

  * **Enable registration:** Ta možnost bo omogočila ali onemogočila registracijo v vašem omrežju. Če je izklopljena, se vaše stranke ne bodo mogle registrirati in naročiti na vaše izdelke.

  * **Enable email verification:** Če je ta možnost vklopljena, bodo stranke, ki se naročijo na brezplačen paket ali plačljiv paket s preizkusnim obdobjem, prejele potrditveno e-pošto in bodo morale klikniti potrditveno povezavo, da bodo njihova spletna mesta ustvarjena.

  * **Default registration page:** To je privzeta stran za registracijo. Ta stran mora biti objavljena na vašem spletnem mestu in imeti registracijski obrazec (znan tudi kot obrazec za zaključek nakupa) – kjer se bodo vaše stranke naročile na vaše izdelke. Ustvarite lahko poljubno število registracijskih strani in obrazcev za zaključek nakupa, le ne pozabite dodati kratke kode obrazca za zaključek nakupa na registracijsko stran, sicer se ne bo prikazal.

  * **Use custom login page:** Ta možnost vam omogoča uporabo prilagojene strani za prijavo namesto privzete strani wp-login.php. Če je ta možnost vklopljena, lahko izberete, katera stran bo uporabljena za prijavo v možnosti **Default login page** (tik spodaj).

  * **Obfuscate the original login url (wp-login.php)** : Če želite skriti izvirni URL za prijavo, lahko vklopite to možnost. To je uporabno za preprečevanje napadov z grobo silo. Če je ta možnost omogočena, bo Ultimate Multisite prikazal napako 404, ko uporabnik poskuša dostopati do izvirne povezave wp-login.php

  * **Force synchronous site publication:** Ko se stranka naroči na izdelek v omrežju, je treba novo čakajoče spletno mesto pretvoriti v pravo omrežno spletno mesto. Postopek objave poteka prek Job Queue, asinhrono. Omogočite to možnost, da prisilite objavo, da se izvede v isti zahtevi kot prijava.

Zdaj si oglejmo še druge možnosti, ki so še vedno pomembne za postopek prijave in registracije. Nahajajo se tik pod **Other options** na isti strani Login & registration:

  * **Default role:** To je vloga, ki jo bodo vaše stranke imele na svojem spletnem mestu po postopku prijave.

  * **Enable Jumper:** Omogoči bližnjico Jumper v skrbniškem območju. Jumper skrbnikom omogoča hiter skok na zaslone Ultimate Multisite, omrežne predmete in druge podprte cilje, ne da bi morali brskati po vsakem meniju. Izklopite ga, če želite to orodje za hitro navigacijo skriti iz skrbniškega vmesnika.

  * **Add users to the main site as well:** Omogočanje te možnosti bo uporabnika po postopku prijave dodalo tudi na glavno spletno mesto vašega omrežja. Če omogočite to možnost, se bo tik spodaj prikazala tudi možnost za nastavitev **privzete vloge** teh uporabnikov na vašem spletnem mestu.

  * **Enable multiple accounts:** Dovoli uporabnikom, da imajo račune na različnih spletnih mestih vašega omrežja z istim e-poštnim naslovom. Če je ta možnost izklopljena, vaše stranke ne bodo mogle ustvariti računa na drugih spletnih mestih, ki delujejo v vašem omrežju, z istim e-poštnim naslovom.

In to so vse možnosti, povezane s prijavo in registracijo, ki jih lahko prilagodite! Ne pozabite shraniti nastavitev, ko jih končate urejati.

## Uporaba več registracijskih obrazcev:

Ultimate Multisite 2.0 ponuja urejevalnik obrazcev za zaključek nakupa, ki vam omogoča ustvarjanje poljubnega števila obrazcev z različnimi polji, ponujenimi izdelki itd.

Tako strani za prijavo kot registracijo sta vdelani s kratkimi kodami: **[wu_login_form]** na strani za prijavo in**[wu_checkout]** za registracijsko stran. Registracijsko stran lahko dodatno prilagodite z izdelavo ali ustvarjanjem obrazcev za zaključek nakupa.

Za dostop do te funkcije pojdite v meni **Checkout Forms** v levi stranski vrstici.

![Meni Checkout Forms v stranski vrstici](/img/config/checkout-forms-list.png)

Na tej strani lahko vidite vse obrazce za zaključek nakupa, ki jih imate.

Če želite ustvariti novega, preprosto kliknite **Add Checkout Form** na vrhu strani.

Kot izhodišče lahko izberete eno od teh treh možnosti: en korak, več korakov ali prazno. Nato kliknite **Go to the Editor**.

![Dodajanje Checkout Form z možnostmi enega koraka, več korakov ali praznega obrazca](/img/config/checkout-forms-list.png)

Druga možnost je, da obstoječe obrazce uredite ali podvojite s klikom na možnosti pod njihovim imenom. Tam boste našli tudi možnosti za kopiranje kratke kode obrazca ali brisanje obrazca.

![Dejanja ob premiku miške nad obrazec za zaključek nakupa z urejanjem, podvajanjem in brisanjem](/img/config/checkout-form-hover-actions.png)

Če izberete en korak ali več korakov, bo obrazec za zaključek nakupa že vnaprej izpolnjen z osnovnimi koraki, potrebnimi za njegovo delovanje. Nato mu lahko po želji dodate dodatne korake.

### Urejanje Checkout Form:

Kot smo že omenili, lahko obrazce za zaključek nakupa ustvarite za različne namene. V tem primeru bomo delali na registracijskem obrazcu.

Ko se premaknete v urejevalnik obrazca za zaključek nakupa, svojemu obrazcu dodelite ime (ki bo uporabljeno samo za interno referenco) in slug (uporabljen na primer za ustvarjanje kratkih kod).

![Urejevalnik obrazca za checkout z polji za ime in slug](/img/config/checkout-form-name-slug.png)

Obrazci so sestavljeni iz korakov in polj. Nov korak lahko dodate s klikom na **Add New Checkout Step**.

![Gumb Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na prvem zavihku modalnega okna izpolnite vsebino koraka obrazca. Dodelite mu ID, ime in opis. Ti elementi se večinoma uporabljajo interno.

![Zavihek vsebine koraka checkout z ID-jem, imenom in opisom](/img/config/checkout-form-step-content.png)

Nato nastavite vidnost koraka. Izbirate lahko med **Always show** , **Only show for logged in users** ali **Only show for guests**.

![Možnosti vidnosti koraka checkout](/img/config/checkout-form-step-visibility.png)

Na koncu konfigurirajte slog koraka. Ta polja so izbirna.

![Konfiguracija sloga koraka checkout](/img/config/checkout-form-step-style.png)

Zdaj je čas, da v naš prvi korak dodamo polja. Samo kliknite **Add New Field** in izberite vrsto razdelka, ki ga želite.

![Gumb Add New Field](/img/config/checkout-form-add-field-button.png)![Spustni meni za izbiro vrste polja](/img/config/checkout-form-field-type-dropdown.png)

Vsako polje ima različne parametre, ki jih je treba izpolniti. Za ta prvi vnos bomo izbrali polje **Username**.

![Konfiguracija polja Username](/img/config/checkout-form-username-content.png)![Parametri polja Username](/img/config/checkout-form-username-visibility.png)![Dodatne nastavitve polja Username](/img/config/checkout-form-username-style.png)

Dodate lahko toliko korakov in polj, kot jih potrebujete. Za prikaz svojih izdelkov, med katerimi lahko vaše stranke izberejo enega, uporabite polje Pricing Table. Če želite svojim klientom omogočiti izbiro predloge, dodajte polje Template Selection. In tako naprej.

![Urejevalnik obrazca za checkout s poljem za izbiro predloge](/img/config/checkout-form-with-template-field.png)

_**Opomba:** Če izdelek ustvarite po ustvarjanju obrazca za checkout, boste morali izdelek dodati v razdelek Pricing table. Če ga ne dodate, se izdelek ne bo prikazal vašim strankam na registracijski strani._

_**Opomba 2:** uporabniško ime, e-pošta, geslo, naslov spletnega mesta, URL spletnega mesta, povzetek naročila, plačilo in gumb za oddajo so obvezna polja za ustvarjanje obrazca za checkout._

Med delom na obrazcu za checkout lahko vedno uporabite gumb Preview, da vidite, kako bodo vaše stranke videle obrazec. Prav tako lahko preklapljate med ogledom kot obstoječi uporabnik ali obiskovalec.

![Gumb Preview v urejevalniku obrazca za checkout](/img/config/checkout-form-preview-button.png)![Predogled obrazca za checkout kot obiskovalec ali obstoječi uporabnik](/img/config/checkout-form-preview-modal.png)

Na koncu lahko v **Advanced Options** konfigurirate sporočilo za stran **Thank You**, dodate izseke za sledenje konverzijam, dodate CSS po meri v svoj obrazec za checkout ali ga omejite na določene države.

![Advanced Options s stranjo Thank You, sledenjem konverzijam in CSS po meri](/img/config/checkout-form-advanced.png)

Obrazec za checkout lahko tudi ročno omogočite ali onemogočite s preklopom te možnosti v desnem stolpcu ali obrazec trajno izbrišete.

![Preklop Active in možnost brisanja za obrazec za checkout](/img/config/checkout-form-active.png)

Ne pozabite shraniti obrazca za checkout!

![Gumb Save Checkout Form](/img/config/checkout-form-save.png)

Za pridobitev kratke kode obrazca kliknite **Generate Shortcode** in kopirajte rezultat, prikazan v modalnem oknu.

![Modal Generate Shortcode s kratko kodo za kopiranje](/img/config/checkout-form-editor.png)

_**Opomba:** To kratko kodo boste morali dodati na svojo registracijsko stran, da bo ta obrazec za checkout dodan nanjo._

## Predizbira izdelkov in predlog prek URL-parametrov:

Če želite ustvariti prilagojene cenovne tabele za svoje izdelke in v obrazcu za checkout predizbrati izdelek ali predlogo, ki jo vaša stranka izbere na vaši cenovni tabeli ali strani s predlogami, lahko za to uporabite URL-parametre.

### **Za pakete:**

Pojdite na **Ultimate Multisite > Products > Select a plan**. Na vrhu strani bi morali videti gumb **Click to copy Shareable Link**. To je povezava, ki jo lahko uporabite za predizbiro tega določenega paketa v svojem obrazcu za checkout.

![Stran izdelka z gumbom za deljivo povezavo](/img/config/products-list.png)

Upoštevajte, da je ta deljiva povezava veljavna samo za **Plans**. Deljivih povezav ne morete uporabiti za pakete ali storitve.

### Za predloge:

Če želite predizbrati predloge spletnega mesta v svojem obrazcu za checkout, lahko na URL-ju svoje registracijske strani uporabite parameter: **?template_id=X**. "X" je treba zamenjati z **ID-številko predloge spletnega mesta**. Za pridobitev te številke pojdite na **Ultimate Multisite > Sites**.

Kliknite **Manage** tik pod predlogo spletnega mesta, ki jo želite uporabiti. Videli boste številko SITE ID. To številko uporabite za to določeno predlogo spletnega mesta, da bo predizbrana v vašem obrazcu za checkout. V našem primeru bi bil URL-parameter **?template_id=2**.

![Seznam Sites, ki prikazuje ID predloge spletnega mesta](/img/config/site-templates-list.png)

Recimo, da je naše omrežno spletno mesto [**www.mynetwork.com**](http://www.mynetwork.com) in da je naša registracijska stran z našim obrazcem za checkout na strani **/register**. Celoten URL s predizbrano to predlogo spletnega mesta bo videti tako: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Če želite, lahko v obrazcu za checkout predizberete tako izdelke kot predloge. Vse, kar morate storiti, je, da kopirate deljivo povezavo paketa in na konec prilepite parameter predloge. Videti bo tako: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
