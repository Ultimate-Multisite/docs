---
title: Ustvarjanje vaše prve pretplatne izdelke
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Ustvarjanje vaše Prve Predskupne Produktne Ponudbe (v2)

_**POMEMBNE NAPOMOTE: Ta članek je namenjen le uporabnikom Ultimate Multisite verzije 2.x. Če uporabljate verzijo 1.x,**_ **_ _glejte ta članek_**.

Da bi začeli delovati svojo mrežno in začeli prodajati svoje storitve potencialnim uporabnikom, potrebujete različne opcije predskupnine (subscription). Kako ustvarjate te izdelke? Kakšne vrste izdelkov lahko ponudite? V tem članku bomo pokrili vse, kar morate vedeti o izdelkih.

## Vrsta Izdelka

Z Ultimate Multisite lahko ponudite dve kategoriji izdelkov svojim strankam: **plani** in **dodatke (Order Bump)**. Dodatki se lahko razdelijo na dve vrste: **pakete** in **storitev**. Razliko in posebnosti bomo videli v naslednjih poglavjih.

  * **Plani**: temeljni izdelek Ultimate Multisite. Vaš stranka lahko ima članstvo le če je pripisano planu. Plan vam omogoča, da imate en ali več spletnih strani (to je odvisno od konfiguracije vašega plana) z omejitvami, ki jih postavite na stran za urejanje izdelka.

  * **Paketi**: dodatki, ki neposredno vplivajo na delovanje planov Ultimate Multisite. Oni spremenjajo omejitve ali dodajajo nove resurse, pluginove ali teme k originalnemu planu, ki ga je stranka kupila. Na primer, osnovni plan lahko dovoli 1000 obiskov na mesec in lahko ponudite paket, ki to število poveča do 10.000.

  * **Storitev**: dodatki, ki ne spremenjajo delovanja Ultimate Multisite. To so naloge, ki jih boste izpolnili za svojega stranko poleg plana, ki ga je kupila. Na primer, vaš stranka bi lahko kupila plan, ki dovoljuje eno stran, in tudi plačala dodatno storitev, ki bo oblikovala to stran.

## Upravljanje Izdelkov

Za mnogih je tab **Products** v Ultimate Multisite **(Ultimate Multisite > Products)** enake z načrti v tradicionalnem hostinskega okolja.

V Ultimate Multisite definira tab Products konstrukcijo in omejitve, ki se nanašajo na določeno produkt ali storitev. Takšne konstrukcije se razprostirajo do opisa produkta ali storitve, njegove cene, davkov in dovoljenosti.

Ta del vas bo vodil v razumeti to ključno osnovno element Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Dodajanje produktov

Bilo da je načrt, paket ali storitev začetek definiranja novega predmeta preko **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Sprememba vsebuje dva glavna oddelka. Na levi strani so več tabov, ki pomagajo pri definiranju produkta, in na desni strani so nekaj oddelkov za določitev osnovne cene, njegovega aktivnega stanja in slike predmeta.

![Product edit page overview](/img/config/product-edit-full.png)

### Opis

Osnovna informacija o produktu lahko definirate, saj navedete ime in opis produkta. Ti identifikatorji se prikazujejo vseh gor, kjer je potrebna informacija o produktu, kot so izbira načrtov in cen, računi, nadgradnje in podobno.

![Product description section](/img/config/product-description.png)

### Tip cene

Na desni strani spletne interfejse lahko definirate osnovno cenovanje.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite podpira tri različne tipe cenovanja. Opcija **paid** (plačljivo) zahteva od administratorja mreže informacije o ceni in frekvenci računanja za produkt.

### Cenovanje

Cena določa osnovno ceno produkta in interval računanja.

![Cen](/img/config/product-pricing-save.png)

tako je primer cena $29.99 z nastavitvijo 1 mesec, ki bo debitiral $29.99 vsak mesečno. Na enak način, cena $89.97 z nastavitvijo 3 mesece bo debitirana ta izdelek vsak kvartal.

### Ciklične cene (Billing Cycles)

Razdelek cikličnih cen specifikira frekvenco navedene cene in je običajno razumljiv v kontekstu pogodbenih rabatov ali fiksiranih obdobij.

![Cen](/img/config/product-pricing-save.png)

Na primer, če je cena izdelka $29.99 z intervalom od 1 meseca in 12 cikljev plačanja, bo se za izdelek debitirala $29.99 vsak mesečni obdobje skozi naslednja 12 mesecev. Drugi besedili, takšno nastavitvo ustvarja fiksno cenovno obdobje od $29.99 na mesec na 12 mesecev in nato se plačevanje ustavi.

### Vrednostno obdobje (Trial Period)

Omogočitev preklopnika ponudbe trial omogoča administratorju mreže določiti obdobje za vprašanje izdelka.

![Cen](/img/config/product-pricing-save.png)

Med obdobjem za vprašanje so uporabniki svobodni, da uporabljajo izdelek in ne bodo debitirani, dokler ni poteklo obdobje za vprašanje.

### Stroški nastavitve (Setup Fee)

Lahko lahko dodate strošek za nastavitvo na vaš plan.

![Cen](/img/config/product-pricing-save.png)

To pomeni, da bo vaš stranke plačala dodatno skupno z prvo plačilo (v nadaljevanju do cene plana), ki se nanaša na strošek, ki ste ga določili v tem razdelku.

### Aktiven (Active)

Preklopnik "Aktiven" dejansko določa, ali je izdelek na voljo za stranke za nove registracije.

![Aktiven preklopnik](/img/config/product-active.png)

Če im imate obstoječe stranke na tem paketu je vklop preklic (toggle) na stanje "disabled" dejansko odločilo, da se paket odstrani iz prihodnjih registracij. **Osobi, ki so obstoječe na paketu, bodo nadaljnje plačljene** do trenutka, ko bodo prešli na novi paket ali bodo odstranjeni z paketa.

### Slika izdelka

Gumb **Upload Image** omogoča administratorju mreže uporabo medijske knjižnice za izbiro ali vnos slike izdelka.

![Product image section](/img/config/product-image.png)

### Obriši

Gumb **Delete Product** odstrani izdelek iz sistema. Pojavi se, ko je izdelek objavljen.

![Delete product section](/img/config/product-delete.png)

Na rozdeli od drugih brisanj, izdelek ni v kakršnem koli stanje "trash". Zato je po brisanju dejanje neobratno.

### Opcije izdelka

Ko so definirana osnovne informacije o izdelku, opcije izdelka pomagajo administratorju mreže še bolj specifično definirati lastnosti izdelka.

#### Splošno

Tab **General** določa splošne lastnosti izdelka, ki niso primerno za nobene druge tabe specifične za izdelek.

![General tab](/img/config/product-general-tab.png)

Samopojasnila **product slug** določa slug s katerim je izdelek identificiran v URL strežnikih in drugih delih Ultimate Multisite.

Ultimate Multisite podpira več vrst izdelkov, med katerimi so Plan, Package in Service. Tabovi **Product Options** se dinamično prilagajajo v skladu z določenim vrsto izdelka.

**Customer Role** določa ulogu, ki je dodeljen stranki, ko je ustvarjen splet. Tipično za večino administratorjev mreže bo to Ultimate Multisite default ali Administrator. Ultimate Multisite default ulog lahko nastavite v **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Na vs. Spuščanje (Up & Downgrades)

Ta kartica določa poti za izboljšanje in spuščanje (upgrade and downgrade paths), ki so na voljo za stranke v njihovi specifični stopnji (tier).

Da bi razumeli to koncept, predstavi primer, kjer nišna Ultimate Multisite instalacija ponuja rešitve za upravljanje učenja svojim strankam. Da bi se dosegel ti tri načrti (Basic, Plus in Premium) so določeni in specifični pluginovi so aktivirani za vsak načrt (pogledajte kasneje v tej sekciji za navodila kako aktivirati pluginove).

Če Ultimate Multisite instalacija tudi služi poslovnim spletnim stranem ali e-trgovinim spletnim stranem, se lahko ti načrti zahtevajo drugačasti pluginovi, ki so nameščeni in aktivirani.

Do tega razmerja bi bilo neželeno in problematično dovoliti učiteljskim strankam prehod na načrte za e-trgovino, saj se ti načrti, cenik in omejitve morda ne bodo primerni.

Zato je, da bi omejili pot stranke in preprečili incidenta, lahko omrežni administrator določi skupino načrtov (plan group) in v tej skupini določi načrte na ki se lahko stranka prebuj.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Da bi določili skupino načrtov, navedite kompatibilne načrte v seznamu **plan group**. **Product order** (redaj izdelkov) določa, kako so načrti urejeni in prikazani od najnižjega do najvišjega.

Ultimate Multisite vključuje tudi funkcijo **order bump**, kjer lahko na sobrefikse (plans) dodate dodatne izdelke in storitve. Ti so ponujeni stranki kot dodatni elementi, ki se lahko dodajo plans med plačanjem ali med izboljšanjem.

#### Variacije cen

Variacije cen omogočajo administraciji mreže, da določi različne cene v različnih časovnih intervalih. Ta nastavitjo je mogoče ponuditi mesečne, kvartalne, letne ali kakršno koli drugo obdobje plačanja za isti produkt. Na primer lahko postavite produkt na $29.99/mesec z popustom za letno naročilo na $249.99/let.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Za ustanovitev cenovnih variacij vključite preklopnik **Enable Price Variations** in ga postavite na aktivno, nato pa kliknite gumb **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

Da bi vnesli variacijo, nastavite trajanje, obdobje in ceno te variacije. Dodatne variacije lahko vnesete z drugim klikom na gumb.

Na primer, če je cena vaše osnovne naloge $29.99 na mesec, lahko dodate:

  * **3 Meseca** za $79.99 (mal popust v primerjavi z mesečno naročnino)
  * **1 Let** za $249.99 (značilna popusta za letno obveznost)

:::tip Prikazovanje preklopnika obdobja plačanja na sprednji strani (Frontend)

Samo cenovni varianti ne dodajo preklopnika ali preklic na sprednji strani pri plačevanju. Da bi omogočili strankam izbiro med različnimi obdobji plačanja (npr. Mesečno / Letno), morate v svojo obrazec za plačevanje dodati polje **Period Selection**. Za postopek po postopku se pozabite na [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle).
:::

#### Davki (Taxes)

Tab **Taxes** je usklajen z nastavitvami davkov, ki so določeni v **Ultimate Multisite > Settings > Taxes**, in bolj specifično s definiranim stopnjami davkov. Za vključitev davkov in določitev priporočljivih stopnjen davkov se pozabite na dokumentacijo na [Ultimate Multisite: Settings](ultimate-multisite-settings).

![Taxes tab](/img/config/product-taxes.png)

V prehodni primer smo definirali lokalno davčno stopnjo od 7,25%, ki je veljala za stranke v Kaliforniji (Združenihรัฐh Amerike).

Ko je davčna stopnja definirana v **Ultimate Multisite > Settings > Manage Tax Rates**, jo se lahko izbere na ravni izdelka.

![Taxes tab](/img/config/product-taxes.png)

Da bi označili, da je izdelek podlagt davkom, vklopite preklopnik **Is Taxable** in izberite primerno davčno stopnjo iz spiska Tax Category.

#### Site Templates

Na splošno so site template (šabloni za spletne strani) popolni WordPress spletni domovci, ki se klonirajo na stranko kupca ob začetku njegove naročnine.

![Site Templates tab](/img/config/product-site-templates.png)

Administrator mreže ustvarja in konfigurira template stran kot običajen WordPress spletni domavec z aktivnimi in konfiguriranimi temami, pluginovi in vsebino. Template stran se klonira besedilo za besedilo na stranko kupca.

Ta tab omogoča administratorju mreže določiti vedenje site template (šablona strani) ob nov naročnini. Da bi lahko uporabljali site template za ta načrt, vklopite preklopnik **Allow Site Templates** v aktivno stanje.

Ko je **Allow Site Templates** izklopljen, stranke na tem načrt ne morejo izbrati template (šablone), čeprav bi jih lahko checkout form, deljavec link ali URL parameter omogočali. Ultimate Multisite zdaj ta omejitev zagotavlja prek lančne reakcije (fallback chain) preko preprosto dostopnih točk: najprej se preverja nastavitve načrta, nato nastavitve template za checkout form, nato pa predizbrani ali URL-dostavljeni template. To ohranja konzistentnost omejitev načrtov in preprečuje pojavitve template za izdelke, ki jih ne bi morali ponudovati.

**site template selection mode** določa vedenje site template med postopkom naročnine.

Nastavitev **D**efault (Predvoljni nastavitve) sledi korakom v obrazcu za nakup. Če je omrežni administrator definiral korak izbire šablona v procesu nakupa in je ta korak definiran z shabloni, ova nastavitva bo počutila na smernice, ki so postavljene v koraku nakupa.

Določitev **A**ssign Site Template (Načrtovanje shablona za mesto) prisili do izbire določenega shablona. Posledično se zameščajo v procesu nakupa vsaki korak izbire shablona.

Na koncu, **C**hoose Available Site Templates (Izberi na voljo shablone za mesta) nadomešča shablone, ki so določeni v koraku nakupa, s shabloni, ki so izbrani v tej nastavitvi. Možnost je tudi definirati predizbran shablona, da pomagamo stranki pri izbiri.

Na koncu, če omrežni administrator želi, da se izbira shablona zgodi v korakih nakupa, dovolj bo nastavitev '_default_'. Alternativno za odstranitev in zaključevanje izbire shablona ter delegiranje izbire nastavitvam načrta je lahko priporočljivo uporabiti možnosti '_assign new template_' ali '_choose available site templates_'.

#### Mesta (Sites)

Tab **Sites** (Mesta) je del funkcionalnosti omejitev Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Ta nastavitva določa največji število mest, ki lahko ustvarja uporabnik v okviru svoje članarine.

Za omogočitev omejitve postavite preklopnik **limit sites** (omejite mesta) na aktivno stanje in navedite maksimalno število mest v polju **site allowance** (določitev dovoljenja za mesta).

#### Obrazej (Visits)

Tab **Visits** (Obraji) je še en del sistema omejitev Ultimate Multisite. Ta nastavitva omogoča računanje in kasnejše omejevanje edinstvenih obiskovalcev na mesto uporabnika.

![Visits tab](/img/config/product-visits.png)

Iz perspektive marketinog pristopa omrežni administratorji lahko z uporabo te nastavitve spodbujajo stranke, da posodobijo svoj paket, ko dosežejo omejitve. Ta nastavitva lahko tudi pomaga omrežnemu administratorju, da prepreči in omeji prevelik promet na spletne strani, kar ohranja sistemske resurse.

Da bi uporabili to funkcijo, vklopite preklic **limit unique visits** (omejitev edinstvenih obiskov) in navedite največje število edinstvenih obiskovalcev v polju **unique visits quota** (kvota za edinstvene obiske).

Ko ta limit doseže, Ultimate Multisite se ne bo še nadaljeval z uporabo stranke, ampak bo prikazal sporočilo, ki kaže, da so omejitve presegli.

#### Uporabniki

Omejitve 'Users' (Uporabniki) v Ultimate Multisite omogočajo omrežnemu administratorju, da postavi omejitve na število uporabnikov, ki se lahko ustvarjajo in jim dodeljujejo role.

![Users tab](/img/config/product-users.png)

Da bi aktivirali funkcijo omejitev, vklopite preklic **limit user** (omejitev uporabnika), premikaj ga na desno.

Za vsako rol, ki bo omejena, vklopite preklic ob njem in določite največji zgornji limit v primerno polje.

#### Tipovi postov (Post Types)

Tab **Post Types** (Tipovi postov) omogoča omrežnemu administratorju, da postavi细 granularne omejitve na obsežni niz tipov postov v WordPressu.

![Post Types tab](/img/config/product-post-types.png)

Ker je WordPress zgrajen tako, da so postovi in tipovi postov pomemben del njegove osnovne funkcije, je sistem omejitev Ultimate Multisite namenjen omrežnemu administratorju pri ustanovitvi in vzdrževanju limitov.

Da bi aktivirali ta podsistem omejitev, vklopite preklic **limit post types** (omejitev tipov postov), premikaj ga na desno.

Naslednje, za vsako tip spletne strani (post type), ga vklopite tako, da ga prenesete na desno in navedete maksimalno gornjo omejitev v odgovarjajočem polju.

#### Disk prostor

Tab **Disk Space** omogoča administraciji mreže, da omeji prostor, ki ga uporabniki porabijo.

![Disk Space tab](/img/config/product-disk-space.png)

Običajno v WordPress multisite so osnovni datoteki deljene med vsi strani, in posamezne direktorije za medije in obdelave (uploads), na katere se nanašajo ti nastavitve in omejitve.

Da bi omogočili omejitev uporabe diska, postavite preklop **limit disk size per site** na aktivno stanje, prenesavanjem na desno.

Naslednje, navedite maksimalno gornjo omejitev v megabajtih v polju **disk space allowance**.

#### Custom Domain (Splošna domena)

Sprejemanjem te opcije lahko omogočite splošne domene samo na tem paketu.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes (Teme)

Tab **Themes** v možnosti izdelka omogoča administraciji mreže, da temi ponudi uporabnikom za izbiro in opcionalno prisili stanje teme.

![Themes tab](/img/config/product-themes.png)

_**Opomba: Da bi bile teme na voljo za uporabnike morajo biti vključe s strani mreže.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Opcija **visibility** določa, ali je tema vidna uporabniku, ko gleda tab **Appearance > Themes** na svoji strani. Postavitev te opcije na **Hidden** jo odstrani iz vidika in s tem omejuje možnost izbire in aktiviranja.

![Themes tab](/img/config/product-themes.png)

Izbira **behavior** omogoča administraciji mreže, da določi stanje teme ob kreiranju strani uporabnika.

V **Dostopno** stanja je tema na voljo za samodeaktivacijo stranke. Na nasprotju, v stanju **Ne dosegljivo** odstrani možnost aktivacije teme iz možnosti stranke. Na koncu možnost **Natisni aktiviraj** prisili aktivaciji in izbiro teme, kar jo postavi kot zadano pri kreiranju spletne strani.

#### Plugins

Podobno kot v tabu Themes omogoča Ultimate Multisite omrežnem administratorju določiti vidljivost pluginov za stranke ter njihov kanal (stan) ob kreiranju nove strani.

![Plugins tab](/img/config/product-plugins.png)

Spuščalnik **vidljivosti** omogoča, da je plugin vidno ali skrito za stranko, ko ga gleda na svoji strani preko možnosti v meniju Plugins.

Omrežni administrator lahko further manipulira vedenjem pluginov z uporabo opcij v spuščalniku behavior (vedenje).

![Plugins tab](/img/config/product-plugins.png)

Izbira **Default** spoštuje stanje pluginove definirano v šabloni strani, ki jo stranka izbere. Tako bodo pluginovi, ki so aktivirani v šablonu, ostali aktivirani, ko se šablon klonira na stran stranke.

**Force Activate** postavi plugin v aktivno stanje ob kreiranju strani, in nasprotno **Force Inactivate** deaktivira plugin ob kreiranju strani. Ob obeh teh okolicah lahko stanja pluginove ručno spremeni stranka preko menija Plugins na WordPressu.

Nastavitva **Force Activate & Lock** deluje na podoben način, vendar preprečuje, da uporabnik spremeni stanje dodatka. Zato nastavitva Force Activate in Lock prisili dodatek v aktivno stanje in prepreči uporabniku njegovo deaktivacijo. Na isto načino nastavitva **Force Inactivate & Lock** prisili dodatek v neaktivno stanje in prepreči uporabniku njegovo aktiviranje.

Splošni administrator mreže lahko razmišlja o nastavitvah Force Activate & Lock in Force Inactivate & Lock v povezavi z štemami spletnih strani kot dodatki, saj lahko te nastavitve vplivajo na stanja dodatka v tem štemah, če so izbrane.

#### Omejitve pri resetiranju

Tab **Reset Limitations** ponovno zadane vse prilagojene omejitve definirane za produkt. Za resetiranje omejitev kliknite gumb **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Za potrditev akcije preklopite preklopnik **confirm reset** na aktivno stanje na desni strani in kliknite gumb **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Uredi, duplirajte ali odstranite produkt

Sistemske (existing) produkte lahko uredite, duplirate ali odstranite, navigiranjem na **Ultimate Multisite > Products** in prehodom mišom čez ime obstoječega produkta.

![Product hover actions](/img/config/product-hover-actions.png)
