---
title: Personalizacija vaše registracijske forme
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Prilagoditev vaše registracijske forme

Da bi vaša mreža izgledala edinstveno med vsemi drugimi SaaS rešitvami zgrajenimi na platformi WordPress, Ultimate Multisite vam omogoča prilagajanje vaših strani za registracijo in prijavljanje s našo funkcijo **Checkout Forms**.

Čeprav so preprosta in fleksibilna način za eksperimentiranje z različnimi pristopi, ko poskušate premakniti nove stranke, se uporabljajo predvsem za ustvarjanje personaliziranih registracijskih form. Ta članek ima za cilj pokazati vam kako to storite.

## Strani za prijavljanje in registracijo:

Ob namestitvi Ultimate Multisite samodejno ustvari prilagojene strani za prijavljanje in registracijo na vašem glavnem spletu. Te domne strani lahko vsak čas spremenite, če grete pod stran **Ultimate Multisite > Settings > Login & Registration**.

![Login and Registration settings page](/img/config/settings-general.png)

Tukaj je celoten pregled strani za nastavitve prijavljanja in registracije:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Pojdičemo skozi vsako možnost, ki lahko prilagodite na strani **Login & Registration**:

  * **Enable registration (Omogoči registracijo):** Ta možnost omogoča ali onemogoča registracijo v vašeta mreži. Če je isključena, vaši uporabniki ne bodo mogli se registrirati in predskupiti z vašimi izdelki.

  * **Enable email verification (Omogoči potrditev e-poštenjem):** Če je ta možnost vklopljena, uporabniki, ki se predskupijo za brezplačni paket ali plačljiv paket s območjem za poskušanje, prejmejo potrditveno sporočilo po e-pošti in bodo morali klikniti na povezavo za potrditev, da bi imeli svoje spletne strani ustvarjene.

* **Default registracijska stran:** To je standardna stran za registracijo. Na tej strani morate objaviti stran na svoji spletni strani in imeti obrazec za registracijo (tako pa ga imenujemo tudi obrazec za nakup) – kjer bodo vaši klienci naročili na vaše izdelke. Lahko lahko ustvarite toliko registracijskih strani in obrazcev za nakup, kot želite, le se spomnite, da morate v registracijsko stran dodati shortcode za obrazec za nakup, saj bo drugače ne prikazan.

* **Uporabi prilagojeno stran za prijavljanje:** Ta možnost vam omogoča uporabo prilagojene strani za prijavljanje, ki ni standardna stran `wp-login.php`. Če je ta možnost vklopljena, lahko izberete, kakšna stran bo uporabljena za prijavljanje na možnosti **Standardna stran za prijavljanje** (tako pa spodaj).

* **Obveščite (skrijte) originalno URL za prijavljanje (`wp-login.php`):** Če želite skriti originalno URL za prijavljanje, lahko vklopljete to možnost. To je koristno, da preprečite napade typu brute-force. Če je ta možnost aktivna, Ultimate Multisite bo prikazal 404 napako, ko uporabnik poskuša dostopati do originalne povezave `wp-login.php`.

* **Natisnite sinhronno objavo strani:** Po temeljitvi naročanja na izdelek v mreži mora biti novostavna stran spremenjena v dejansko mrežo. Proces objave se odvija asihhronno preko Job Queue. Vklopite to možnost, da se objava forsira v isti zahtev kot registracija.

Zdaj, давайте pogledamo druge opcije, ki so še vedno relevantne za proces prijavljanja in registracije. So neposredno pod **Drugi odbi** na istoj strani za prijavljanje in registracijo:

* **Standardna uloga:** To je uloga, ki jo bodo vaši klienci imeli na svoji spletni strani po postopku registracije.

* **Omre Enable Jumper:** Omre omre enablira kratko povezavo Jumper v admin območju. Jumper omre administratorjem omogoča hitro preskakanje na ekrane Ultimate Multisite, mrežne objekte in druge podporne destinacije brez pregledu skozi vsovo meni. Ga izklopite, če boste bolj previdni in želite ta hitri navigacijski alat skriti od admin interfejsev.

* **Dodajte uporabnike na glavni omre:** Omre vključitev te možnosti bo tudi dodala uporabnika na glavni omre vaše mreže po proces registracije. Če to možnost omre vključite, se spodaj pojavita opcija za urejanje **default role** (osnovne role) teh uporabnikov na vašem spletnem mestu.

* **Omre Enable več računov:** Omre dovolijo uporabnikom, da imajo račune na različnih mestih vaše mreže z eno slično e-poštno naslovom. Če je ta možnost izklopena, vaši kupci ne bodo lahko ustvarili računa na drugih spletnih mestih, ki delujejo v vaših omre, z eno slično e-poštno naslovom.

In to so vse opcije povezane z prijavą in registracijo, ki jih lahko prilagodite! Ne pozabite shraniti svoje nastavitve po dokončanju urejanja.

## Uporaba več registracijskih form:

Ultimate Multisite 2.0 ponuja editor za obrazce plačila (checkout form editor), ki omogoča, da ustvarite povsod toliko obrazcev, kot želite, z različnimi polji, ponujanimi izdelki in tako in drugimi.

Oba strani za prijavu in registracijo so vključena kratka kode: **[wu_login_form]** na strani za prijavu in **[wu_checkout]** za stran za registracijo. Registracijsko stran lahko še bolj prilagodite, ustvarjanjem ali uporabo obrazcev plačila (checkout forms).

Za dostop do te funkcije se obiščite v meniju **Checkout Forms**, na levi strani.

![Menijo Checkout Forms v levi strani](/img/config/checkout-forms-list.png)

Na tej strani lahko vidite vse svoje objekte za plačilo (checkout forms).

Če želite ustvariti nov, le kliknite na **Add Checkout Form** zgoraj na strani.

Iber lahko izberete eno od treh možnosti kot začetek: enostopni, večstopni ali prazno. Nato kliknite na **Go to the Editor** (Idi v editor).

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternativno lahko uredite ali duplirate forme, ki ste jih že imate, tako, da kliknete na možnosti pod njihovim imenom. Tam boste tudi videli možnosti za kopiranje shortcode-a forme ali za brisanje forme.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Če izberete enostopni ali večstopni načrt, je forma za plačilo že prednapolnoma preizpolnjena z osnovnimi koraki, ki jo omogočajo delovanje. Nato, če želite, lahko dodate dodatne korake.

### Ureditev forme za plačilo:

Kot smo že omenili, lahko ustvarjate forme za plačilo za različne namene. V tem primer bomo delali na registracijsko formi.

Po navigaciji do editorja forme za plačilo mu dajte ime (ki bo uporabljeno le za notranjo referenco) in slug (ki se uporablja za ustvarjanje shortcode-ov, na primer).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Forme so sestavljene iz korakov in polj. Novo korako lahko dodate, kliknjo na **Add New Checkout Step** (Dodaj novo korako za plačilo).

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Na prvi tabu okna modalne window se vnesite vsebino vašega koraka forme. Dajte mu ID, ime in opis. Ti elementi so večinoma uporabljani le notranje.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Naslednje, nastavite vidljivost koraka. Lahko izberete med **Always show** (Vedno prikazano), **Only show for logged in users** (Prikazano le za prijavljene uporabnike) ali **Only show for guests** (Prikazano le za goste).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Na končamo z konfiguracijo sloga koraka. To so opchoice, ki niso obvezne.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Zdaj je čas dodati polja na naš prvi korak. Samo kliknite na **Add New Field** (Dodaj novo polje) in izberite tip sekcije, ki jo želite.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Vsako polje ima različne parametre, ki jih morate zapolniti. Za to prvo vstopamo izbrezemo polje **Username** (Uporabnik).

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Lahko dodate toliko korakov in polj, kot vam je treba. Za prikaz vaših izdelkov, ki bodo kupci mogli izbrati, uporabite polje **Pricing Table** (Tablica cen). Če želite dovoliti svojim strankam, da izbrešče template, dodajte polje **Template Selection** (Izbira template). In tako naprej.

_**Opomba:** Če ustvarite izdelek po ustvaritvi vaše forme za plačilo, boste morali ga dodati v sekcijo Pricing Table. Če ga ne dodate, se izdelek ne bo pojavil vašim strankam na strani za registracijo._

_**Opomba 2:** username, email, password, site title (naslov spletne strani), site URL (URL spletne strani), order summary (izbira naročila), payment (plačilo) in submit button (gumb za oddajo) so obvezna polja za ustvarjanje forme za plačilo._

Med tem, ko delate na svoji informaciji za plačilo, lahko vedno uporabite gumb **Preview** (Predogled), da vidite kako bodo kupci videli formo. Lahko tudi preprečujete med pregledom, ali ste obstajajo kot že registrirani uporabniki ali kot obiskovalci.

![Preview gumb na obrazec za editor oblika blaga](https://example.com/img/config/checkout-form-preview-button.png)![Predogled oblika blaga kot gostje ali obstojeega uporabnika](/img/config/checkout-form-preview-modal.png)

Na koncu, v **Advanced Options** lahko konfigurirate sporočilo za stran **Thank You**, dodate fragmente za sledenje spremembam (conversion tracking), dodate prilagojen CSS za vaš oblika blaga ali ga omejite na določene države.

![Napredne možnosti z stranjo Thank You, sledenjem sprememb in prilagojeno CSS](/img/config/checkout-form-advanced.png)

Ob tem lahko vaš oblika blaga vključite ali izključite tako, da preklopite to opcijo na desni strani, ali ga dokončno obrišete.

![Aktivna preklopna možnost in možnost brisanja za oblika blaga](/img/config/checkout-form-active.png)

Ne pozabite shraniti svoj oblika blaga!

![Gumb Shranjaj oblika blaga](/img/config/checkout-form-save.png)

Da bi dosegli svoj shortcode za oblika blaga, kliknite na **Generate Shortcode** in kopirajte rezultat, ki se prikazuje v modalni okno.

![Modal Generate Shortcode z shortcode za kopiranje](/img/config/checkout-form-editor.png)

_**Opomba:** Boste morali dodati ta shortcode na svojo stran za registracijo, da bi bil dober oblika blaga dodan tam._

## Predizbičanje izdelkov in obrazcev preko URL parametrov:

Če želite ustvariti prilagojene tabele cen za vaše izdelke in predizbrati na obliku blaga izbran produkt ali obrazec, ki ga kupec izbere iz vaše tabele cen ali strani z obrazci, lahko uporabite URL parametre za to.

### **Za načrte (plans):**

Idi na **Ultimate Multisite > Products > Select a plan**. Na vrhu strani boste videli gumb **Click to copy Shareable Link**. To je povezava, ki jo lahko uporabite za predizbičanje tega določenega načrta na vašem obliku blaga.

![Stran z izdelkom s gumbom za deljenje](https://example.com/img/config/products-list.png)

Opomba, ta deljiva povezava je veljavna le za **Pläne** (Pakete). Deljive povezave ne smeš uporabljati za pakete ali storitve.

### Za templete:

Če želiš predodbrane izbrati templete na svoji strani za nakup, lahko uporabiš parameter: **?template_id=X** na URL-u tvoje strani za registracijo. "X" mora biti zamenjan s **ID številko templete**. To številko naj boš dobiš v meniju **Ultimate Multisite > Sites**.

Klikni na **Manage** (Upravljanje) neposredno pod templetom, ki ga želiš uporabiti. Tam boš videl ID številko strani. Samo uporabi ta številko za določeno temu templete, da je predodbrane izbrana na tvoji strani za nakup. V našem primeru bi bil URL parameter **?template_id=2**.

![Lista strani z ID-om templete](/img/config/site-templates-list.png)

Pretvorimo to tako, da je na tvoji mreži strani [**www.mynetwork.com**](http://www.mynetwork.com) in stran za registracijo s formo za nakup se nahaja na **/register**. Celotna URL z predodbranim templetom bo izgledala kot [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

In če želiš, lahko predodbrane izbereš tako in pakete kot templete na tvoji strani za nakup. Vse, kar moraš storiti, je kopirati deljivo povezavo za plan in na končico vstaviti parameter za templet. Bo izgledalo kot [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
