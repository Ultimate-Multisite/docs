---
title: Krijimi i Produktit Tuaj të Parë Abonimi
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Krijimi i Produktit Tuaj të Parë Abonimi (v2) {#creating-your-first-subscription-product-v2}

_**SHËNIM I RËTHMUES: Ky artikull është vetëm për përdoruesit e Ultimate Multisite version 2.x. Nëse po përdorni versionin 1.x,**_ **_shikoni këtë artikull**_**.

Për të nisur ekzistimin e rrjetit tuaj dhe për të filluar shitjen e shërbimeve tuaja ndaj përdoruesve potencialë, ju nevojiten opsione të ndryshme abonimi. Si krijoni këto produkte? Cilat lloje produkte mund t'i ofroni? Në këtë artikull, do të mbulojmë gjithçka që duhet të dini për produkte.

## Lloji i Produktit {#product-type}

Me Ultimate Multisite ju mund t'i ofroni klientëve dy kategori produkte: **plana** dhe **add-ons (Order Bump)**. Add-on-et mund të ndahen në dy lloje: **paketë** dhe **shërbime**. Do të shohim ne diferencat dhe veçoritë e tyre më vonë.

  * **Plana**: produkti themelor i Ultimate Multisite. Klienti juut mund të ketë anëtarësi vetëm nëse ajo është lidhur me një plan. Një plan i ofron klientëve një ose më shumë faqe (varet nga konfigurimet e planit tuaj) me kufizimet që vendosni në faqen tuaj të redaktimit të produktit.

  * **Paketë**: add-on-e që ndikojnë drejtpërdrejt në funksionalitetin e planeve Ultimate Multisite. Ato ndryshojnë kufizimet ose shtojnë burime, plugin ose teme të reja në planin origjinal që ka blirë klienti. Për shembull, një plan bazë mund t'i lejojë 1000 vizita në muaj dhe ju mund të bëni të disponues një paketë që zgjat këtë numër deri në 10000.

  * **Shërbime**: add-on-e që nuk ndryshojnë funksionalitetin e Ultimate Multisite. Ato janë detyra që do të realizoni për klientin tuaj përveç planit që ka blirë. Për shembull, klienti juaj mund të blini një plan që lejon një faqe dhe gjithashtu të paguan një shërbim shtesë që do të bëjë këtë dizajn të faqes.

## Menaxhimi i Produkteve {#managing-products}

Për shumë njerëz, tabja **Products** në Ultimate Multisite **(Ultimate Multisite > Products)** mund të lidhet me planeve në një mjedis hosting tradicional.

Brenda Ultimate Multisite, tabja Products përcakton strukturën dhe kufizimet që janë të aplikueshme për një produkt ose shërbim specifik. Këto struktura zgjerohen deri në përshkrimin e produktit ose shërbimit, çmimin, tatimet dhe lejet.

Ky seksion do t'ju udhëzojë në kuptimin e kësaj baze të themelmisë të Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Shtimi i Produkteve {#adding-products}

Për çfarëdo plani, pakete ose shërbimi, pika hyrje për përcaktimin e një elementi të ri është **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Interfesa përmban dy seksione kryesore. Në majtë janë disa tabe që ndihmojnë me definimin e produktit dhe në djathtë ka disa seksione për të përcaktuar çmimin bazë të produktit, statusin e tij aktiv dhe imazhin e produktit.

![Product edit page overview](/img/config/product-edit-full.png)

### Përshkrimi (Description) {#description}

Informacionet bazë të produktit mund të përcaktohen duke dhënë një emër dhe përshkrim të produktit. Këto identifikues janë të shfaqur ku është e nevojshme informacioni i produktit, si zgjedhja e planit dhe çmimin, faturat, përmirësimet (upgrades) dhe kështu me pothuajse gjithçka.

![Product description section](/img/config/product-description.png)

### Lloji i Çmimit (Pricing Type) {#pricing-type}

Në anën e djathtë të interfezeve, mund të përcaktohet çmimi bazë.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite mbështet tre lloje të ndryshme të çmimeve. Opsioni **paid** (i paguar) kërkon administratorin e rrjetit për informacion rreth çmimit dhe frekuencës së faturimit të produktit.

### Çmimi (Pricing) {#pricing}

Pjesa e çmimit përcakton çmimin bazë të produktit dhe intervalin e faturimit.

![Pricing and save section](/img/config/product-pricing-save.png)

për shembull, një çmim prej 29.99$ me cilësimin e vendosur në 1 muaj do të billohet 29.99$ çdo muaj. Në mënyrë të ngjashme, një çmim prej 89.97$ me cilësimin e vendosur në 3 muaj do të billohet ky shumë çdo çerek.

### Cykle Bllilimi (Billing Cycles) {#billing-cycles}

Seksioni i cykleve bllilimi specifikon se sa shpesh do të ndodh kjo intervallë bllilimi dhe zakonisht kuptohet në bazë e kontratave ose termave fikse.

![Pricing and save section](/img/config/product-pricing-save.png)

Për shembull, një çmim produkti prej 29.99$ me intervall të 1 muaji dhe 12 cykle bllilimi do të billohet 29.99$ në muaj për produktin gjatë 12 muajve pasardhës. Me fjalë të tjera, kjo cilësimi do të krijonte një term çmimi fikse prej 29.99$ në muaj për 12 muaj dhe pastaj billimi do të ndërpritet.

### Periudha Provuese (Trial Period) {#trial-period}

Përfshirja e rregulluesit (toggle) i ofertës provuese lejon administratorin e rrjetit të përcaktoj një periudhë provuese për produktin.

![Pricing and save section](/img/config/product-pricing-save.png)

Gjatë periudhës provuese, klientët janë të lirë të përdorin produktin dhe nuk do billohen derisa periudha provuese të jetë mbaruar.

### Taksa Instalimi (Setup Fee) {#setup-fee}

Jeni gjithashtu mund të aplikoni një taksë instalimi në planin tuaj.

![Pricing and save section](/img/config/product-pricing-save.png)

Kjo do të thotë se klienti juaj do të paguajë një shumë shtesë në pagesën e parë (përveç paketës së çmimit) që përfaqëson taksën që keni përcaktuar në këtë seksion.

### Aktiv (Active) {#active}

Rregulluesi i aktivitetit (toggle) përcakton në mënyrë efektive nëse produkti është i disponueshëm për klientët për regjistrime të reja.

![Active toggle](/img/config/product-active.png)

Nëse ka klientë ekzistuar në këtë paketë, vendosja e toggle-it në gjendjen e i pishur (disabled) në thelb do të thotë që paketa do të hiqet nga regjistrimet e ardhshme. **Klientët ekzistuar në paketë do të vazhdojnë të billohen** derisa të kalojnë në një paketë të re ose të hiqen nga paketa.

### Imazhi i Produktit {#product-image}

Butoni **Upload Image** lejon administratorin e rrjetit të përdor të bibliotekës së medive për të zgjedhur ose ngarkuar imazhin e produktit.

![Product image section](/img/config/product-image.png)

### Fshirje {#delete}

Butoni **Delete Product** fshin produktin nga sistemi. Ai shfaqet pasi produkti është publikuar.

![Delete product section](/img/config/product-delete.png)

Ndërkëtu me fshirjet e tjera, produkti nuk vendoset në asnjë gjendje "trash". Prandaj, pasi hiqet, veprimi nuk mund të kthehet.

### Opsionet e Produktit {#product-options}

Pasi informacionin bazë të produktit është përcaktuar, opsionet e produktit ndihmojnë administratorin e rrjetit të përdor të përcaktoj më tej atributet specifike të produktit.

#### Përgjithshme {#general}

Tabja **General** përcakton atributet e përgjithshme të produktit që nuk janë të aplikueshme ndaj asnjë tabe tjetër specifike të produktit.

![General tab](/img/config/product-general-tab.png)

**Product slug**, i cili është i qartë, përcakton slug me të cilin identifikohet produkti në URL dhe në zona të tjera të Ultimate Multisite.

Ultimate Multisite mbështet disa lloje produktesh si Plan, Paketë dhe Shërbim. Tabat **Product Options** ndryshojnë dinamikisht në varësi të llojit të produktit specifikuar.

**Customer Role** specifikon rolin që i atribuohet klientit kur krijohet loja. Zakonisht për shumic të administratorëve të rrjetit, ky do të jetë default-i ose Administrator i Ultimate Multisite. Roli default i Ultimate Multisite mund të vendoset në **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Ngritje dhe Avancim (Up & Downgrades) {#up--downgrades}

Ky tab specifikon rrugët e ngritjes dhe zhveshjes që janë në dispozicion për një klient brenda nivelit të tij specifik.

Për të kuptuar këtë koncept, merrni parasysh një shembull ku një instalim i veçantë Ultimate Multisite ofron zgjidhje mësimore (LMS) për klientët e tij. Për të arritur këtë, këto tre plane (Basic, Plus dhe Premium) definon dhe plugin-et specifike aktivizohen për çdo plan (shih më vonë në këtë seksion për udhëzime se si aktivizoni plugin-et).

Nëse instalimi Ultimate Multisite gjithashtu shërben faqe biznesi ose faqe e-commerce, këto plane mund të kërkojnë plugin-e të ndryshme për t'u instaluar dhe aktivizuar.

Në këtë kuptim, do të ishte e dëshirueshme dhe problemi të lejohet klientëve të mësimit elektronik (eLearning) të kalojnë në plane e-commerce sepse këto plane, çmimet dhe kufizimet mund të mos jenë të përshtatshme.

Kështu që për të kufizuar rrugën e klientit dhe për të parandaluar incident, administratorit i rrjetit mund të definojë një grup planesh (plan group) dhe brenda atij grupi specifikoj planeve ku klienti mund të kalojë.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Për të përcaktuar një grup planesh, specifikoni plane e pajtueshme brenda listës **plan group**. **Order product** (Rregullimi i produktit) përcakton se si plane janë rregulluar dhe shfaqen nga më poshtme në më të larta.

Ultimate Multisite gjithashtu përfshin një funksion **order bump** ku produkte dhe shërbime shtesë (add-on) mund të vendosen brenda planeve, kur është e nevojshme. Këto ofrohen klientit si artikuj shtesë që mund të vendosen në plane gjatë checkout ose gjatë një ngritjeje.

#### Variacionet e Çmimit (Price Variations) {#price-variations}

Variaionet e çmimet do çmimet lejuaruesit të administratorit të rrjetit mund të specifikojë nivele alternative të çmimeve në varësi të kohës. Kjo opsionimi bën e mundur që një produkt i njëjtë të ofrohet për periudha mujore, kuartore, vjetore ose çdo period tjetër pagese. Për shembull, mund të vendosni një produkt me çmim 29.99$/muaji dhe opsionin e ulitur vjetor me çmimin 249.99$/vjet.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Për të krijuar variaionet e çmimeve, vendosni interracionin **Enable Price Variations** në aktiv dhe klikoni butonin **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

Për të hyrë me një variaion, vendosni kohën e qëndrimit (duration), periudhën dhe çmimin e variaionit. Mund të hyhen variaionet shtesë duke klikuar përsëri butonin.

Për shembull, nëse çmimi bazë i produktit tuaj është 29.99$/muaji, mund të shtoni:

  * **3 Muaj** me 79.99$ (një ulje e vogël se për muajin)
  * **1 Vjet** me 249.99$ (një ulje e rëndë për angazhim vjetor)

:::tip Të shfaqni një Toggle të Periodit në Frontend

Variaionet e çmimeve vetëm nuk shtojnë një toggle ose switch në checkout frontend. Për të lejuar klientët të ndryshojnë midis periudhave pagese (p.sh. Mujor / Vjetor), ju duhet të shtoni një fushë **Period Selection** në formularin tuaj të checkout-it. Shikoni [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) për udhëzime hap pas hapi.
:::

#### Taksat {#taxes}

Tabi i **Taxes** përputhet me cilësimet e taksave specifikuara në **Ultimate Multisite > Settings > Taxes** dhe më specifikisht me nivelet e taksave të përcaktuara. Për të aktivizuar taksat dhe për të përcaktuar nivelet e taksave të aplikueshme, ju lutem shikoni dokumentacionin në **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Në një shembull të mëparshëm, ne definim një përqindje lokale tregut prej 7.25% e aplikueshme për klientët në Kaliforni (Bashkia Amerikë).

Pasi që përqindja e tregut është e definuar në **Ultimate Multisite > Settings > Manage Tax Rates**, ajo mund të zgjidhet në nivelin e produktit.

![Taxes tab](/img/config/product-taxes.png)

Për të treguar se një produkt është i tregues, vendosni interracionin (toggle) **Is Taxable** në aktiv dhe zgjidhni përqindjen e tregut aplikueshme nga menja Dropdown Tax Category.

#### Site Templates {#site-templates}

Në thelb, site template-t janë faqe internete WordPress të plotë që kopjohen te faqja e klientit në fillim të abonimit të tyre.

![Site Templates tab](/img/config/product-site-templates.png)

Administratori i rrjetit krijon dhe konfiguroi site-in template si një faqe WordPress normale me teme, pluginë dhe përmbajtje të aktivizuar dhe të konfigurueshme. Site-i template kopjohet plotësisht te klient.

Ky tab lejon administratorit e rrjetit të specifikojë që ndodh me site template-t kur ka një abonim i ri. Për të përdorur site template-t për këtë plan, vendosni interracionin **Allow Site Templates** në gjendjen e aktivizuar.

Kur **Allow Site Templates** është i pishaktuar (disabled), klientët në këtë plan nuk mund të zgjedhin template-e edhe nëse një formular i pagesës, një link i ndarshueshëm ose një parametër URL do t'i bënin template-t e disponueshme. Ultimate Multisite tani aplikon këtë kufizim përmes një rrjeti (fallback chain) të disponueshëm: vendosjet e planit merren parasysh së pari, pastaj vendosjet e template-ve të formularit të pagesës, dhe më pas template-t që janë zgjedhur paraprakisht ose të ofrohen nga URL. Kjo mbart kufizimet e planit konsistente dhe pengon që template-t të shfaqen për produkte që nuk duhet t'i ofrojnë ato.

**site template selection mode** përcakton se si vepron site template-t gjatë procesit të abonimit.

Parimi i parimi (Default) ndjekin hapat në formularin e checkout-it. Nëse administratorit i rrjetit ka përcaktuar një hap zgjedhje të template-ve në procesin e checkout-it dhe hapi është definuar me template-a, kjo cilësimi do të respektojë direktivat e vendosura në hapin e checkout-it.

Për të specifikuar **Assign Site Template** (Ndryshimi i Template-s së Siti), forcimin e zgjedhjes së template-s specifiku. Si pasojë, çdo hapi zgjedhje template-shi në procesin e checkout-it hiqet.

Më fund, **Choose Available Site Templates** (Zgjidh Template-t e Disponueshëm) mban në dukje template-t specifikuar në hapin e checkout-it me template-t të zgjedhur në këtë cilësim. Gjithashtu mund të përcaktohet një template i selektuar paraprakisht për të ndihmuar klientin në zgjedhje.

Në fund, nëse administratorit i rrjetit dëshiron që zgjedhja e template-ve të ndodhë në hapat e checkout-it, cilësimi ' _default_ ' do të mjaftojë. Alternativ për të hequr dhe penguar zgjedhjen e template-ve dhe për t'u deleguar zgjedhja te cilësimet e planit mund të jenë opsionet ' _assign new template_ ' ose ' _choose available site templates_ '.

#### Sites (Sito) {#sites}

Tabja **Sites** është pjesë e funksionalitetit i kufizimit të Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Ky cilësim specifikon numrin maksimal të sitëve që një klient mund të krijojë nën anëtarinë e tij.

Për të aktivizuar kufizimin, vendosni ndryshuesin **limit sites** (limitoni sitet) në gjendjen aktive dhe specifikoni numrin maksimal të sitëve në fushën **site allowance** (lejuar për site).

#### Visits (Vizita) {#visits}

Tabja **Visits** është një pjesë tjetër e sistemit të kufizimit të Ultimate Multisite. Ky cilësim lejon llogaritjen dhe më pas kufizimin e vizitorëve unik të sitit të klientit.

![Visits tab](/img/config/product-visits.png)

Në perspektiv marketingut, administratorët e rrjetit mund të përdorin këtë cilësim si mënyrë për të inkurajuar klientët të ngrihin planin e tyre kur arrijnë kufizimet. Ky cilësim gjithashtu mund t'i ndihmojë administratorit të rrjetit të kontrollrojë dhe parandalojë trafikun e tepërt në faqe për të ruajtur burimet e sistemit.

Për të përdorur këtë veçori, vendosni interragon toggle **limit unique visits** në gjendjen aktive dhe specifikoni numrin maksimal të vizitorëve unik në fushën **unique visits quota**.

Pasi ky limit të arrijë, Ultimate Multisite do të ndalojë shërbimin e faqeve të klientit në vend që të shfaq një mesazh që tregon se kufizimet janë kaluar.

#### Përdoruesit (Users) {#users}

Kufizimet e 'Users' të Ultimate Multisite lehin administratorin e rrjetit të vendosë kufizime mbi numrin e përdoruesve që mund të krijohen dhe i atribuohen role.

![Users tab](/img/config/product-users.png)

Për të aktivizuar veçorin e kufizimit, vendosni interragon toggle **limit user** në gjendjen aktive duke e lëvizur atë drejt terndafshme.

Më pas për çdo rol që do të kufizohet, vendosni interragon pranë tij në gjendjen aktive dhe përcaktoni kufirin maksimal të mësipërm në fushën e duhur.

#### Llojet e Postave (Post Types) {#post-types}

Tabja **Post Types** lejon administratorit të rrjetit të vendosë kufizime specifike mbi shumëllojshmërinë e llojeve të postave brenda WordPress-it.

![Post Types tab](/img/config/product-post-types.png)

Për shkak të ndërtimit të WordPress-it, postet dhe llojet e postave janë një komponent i rëndësishëm i funksionalitetit bazë të tij, dhe kështu sistemi i kufizimeve i Ultimate Multisite është projektuar për të ndihmuar administratorin e rrjetit në vendosjen dhe ruajtjen e kufijve.

Për të aktivizuar ky sistem sub-kufizim, vendosni interragon toggle **limit post types** në gjendjen aktive duke e lëvizur atë drejt terndafshme.

Për më tej, për çdo tip postar që dëshironi të kufizoni, aktivizojeni duke e lëvizur drejt majtë dhe specifikoni kufirin maksimal në fushën e përshtatshme.

#### Hapësira Disk {#disk-space}

Tabja **Disk Space** lejon administratorët e rrjetit të kufizojnë hapësirën që konsumohet nga klientët.

![Disk Space tab](/img/config/product-disk-space.png)

Në një WordPress multisite, zakonisht skedaret bazë (core files) ndahen midis të gjitha vendeve dhe direktoritë individuale të krijuara për skedarët e mediave dhe ngarkesave ku këto ciltime dhe kufizimet aplikohen.

Për të aktivizuar kufizimin e përdorimit të diskut, vendosni ndryshimin **limit disk size per site** në gjendjen aktive duke e lëvizur drejt majtë.

Më pas, specifikoni kufirin maksimal në megabajë (megabytes) në fushën **disk space allowanc**.

#### Domeni i Përshtatshëm (Custom Domain) {#custom-domain}

Duke aktivizuar këtë opsion, mund të lejoni domenet e përshtatshme (custom domains) vetëm për këtë plan.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Temat (Themes) {#themes}

Tabja **Themes** brenda opsioneve të produktit lejon administratorin e rrjetit të bën temat e disponueshme për klientët për zgjedhje dhe mund t'i forcësoni gjendjen e temës, opsionale.

![Themes tab](/img/config/product-themes.png)

_**Shënim: Për që të jenë të disponueshme për klientët, ato duhet të aktivizohen nga administrator i rrjetit.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Opsioni **visibility** përcakton nëse kjo temë është e dukshme apo jo për klientin kur ai shikon tabin e tij **Appearance > Themes** brenda vendit të tij. Vendosjen e kësaj opsioni në **Hidden** (Fshehur) e heq temën nga pamja dhe kështu kufizon aftësinë për ta zgjedhur dhe aktivizuar.

![Themes tab](/img/config/product-themes.png)

Zgjidhja **behavior** lejon administratorin e rrjetit të përcaktojë gjendjen e temës kur krijohet vendi i klientit.

Në gjendjen **A Available**, tema mund t'i disponohet klientit për aktivizim të vetë. Nga ana tjetër, në gjendjen **Not Available**, se i hiqet klientit aftësia për të aktivizuar temën. Përpara, opsioni **Force Activate** forcimit kërkon dhe aktivizon temën, duke e vendosur atë si paradat kur krijohet faqja.

#### Plugins {#plugins}

Ashtu si në tabin Themes, Ultimate Multisite lejon administratorit të rrjetit të përcaktoj të dukshmërin e plugin-eve për klientët ashtu edhe statusin e tyre kur krijohet një faqe e re.

![Plugins tab](/img/config/product-plugins.png)

Menyja **visibility** (dukshmëri) lejon që plugin-i të jetë i dukshëm ose i fshehur për klientin kur shihet në faqen e tij përmes opsionit të menysë Plugins.

Administratori i rrjetit mund të manipulojë më tej sjelljen e plugin-eve duke përdorur opsionet në menynë behavior (sjellje).

![Plugins tab](/img/config/product-plugins.png)

Zgjidhja **Default** respekton statusin e plugin-ut të përcaktuar në shabllon e faqes që zgjedh klientët. Kështu, plugin-et që janë aktivizuar brenda shabllon do të mbeten aktive kur shablloni kopjohet në faquinë e klientit.

**Force Activate** vendos plugin-in në gjendjen aktive kur krijohet faqja dhe anasjelltas **Force Inactivate** i deaktivojnë plugin-in kur krijohet faqja. Në të dy këto rreje, statusi i plugin-ut mund të ndrysohet manualisht nga klientit përmes menysë Plugins në WordPress.

Parimi i cilësimi **Force Activate & Lock** funksionon në mënyrë të ngjashme, por pengon që statusi i pluginit të ndrymohet nga klienti. Kështu, një cilësim i Force Activate dhe Lock do t'i forcimit pluginin në gjendjen e aktive dhe do ta pengojë klientin të e deaktivojë atë. Në mënyrë të ngjashme, cilësimi **Force Inactivate & Lock** do t'i forcimit pluginin në gjendjen e inaktive dhe do ta pengojë përdoruesin të aktivizojë pluginin.

Administratori i rrjetit mund të dëshirojë të konsiderojë cilësimet Force Activate & Lock dhe Force Inactivate & Lock bashkë me template-t e saj në mënyrë që si pluginë dhe statuset e pluginit brenda template-ve mund të ndikojnë nga këto cilësimet, nëse ato zgjidhen.

#### Rimbushja e kufizimeve (Reset Limitations) {#reset-limitations}

Tabja **Reset Limitations** rimbështon të gjitha kufizimet e personalizuara të përcaktuara në produkt. Për të rimbeshtuar kufizimet klikoni mbi butonin **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Për të konfirmuar veprimin, lëviz kytuesin **confirm reset** në gjendjen aktive (paling për të djathtën) dhe klikoni mbi butonin **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Redakto, Dupliko ose Fshi Produktin {#edit-duplicate-or-delete-product}

Produktet ekzistuese mund të redaktohen, duplikohen ose fshihen duke naviguar në **Ultimate Multisite > Products** dhe duke lëvizur mbi emrin e produktit ekzistues.

![Product hover actions](/img/config/product-hover-actions.png)
