---
title: Pagħda tal-Klijent
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Pagħha tal-Account ta Klient (v2)

_**NOTA IMPORTANTI: Dan l-artifika tiffa għall-Ultimate Multisite bizzjoni 2.x.**_

Meta il-klient jiddispożizzja għal plan fuq la-nettu tiegħek, jieħu l-akses għal siti u dashboard tahekkien informazzjoni importanti dwar il-pagamenti, membership, domeni, limitazzjonijiet tal-plan, ecc...

F'dan tutorial, nġġibrannkom fil-paċċa tal-account ta klient u taraw x'inqas il-klientie li jistgħu jara u jgħidu fih.

## Il-Account Page

Il-account page tiddirġi b'klikju fuq **Account** f'dashboard tal-klient tiegħek.

![Menu Account f'dashboard tal-klient](/img/account-page/account-menu.png)

F'la-netti sovereni (sovereign tenant networks), Ultimate Multisite v2.13.0 tikkawma dan l-esperjenza tal-ġestjoni tal-klient fuq is-siti ta' primarja. Meta il-klient jiftter il-account, checkout, billing, invoice, site-management, template-switching, jew domain-mapping mill-tenant soverenu, l-aġġunt jidirba għall-panel tal-site ta' primarja biex ir-rekord tal-billing u membership tal-nettu jipprovvidi.

Meta il-klient jittien min tenant soverenu, il-panel tal-account tal-site ta' primarja jistax inklu link ta rieddu għas-sito tal-tenant. Il-link ta' rieddu juri se jkun huwa validabbli biex Ultimate Multisite jiddeċiedi l-target ta' rieddu bħal xi siti tal-klient, li jipprevjeni reindirimenti arbitrarji wa jippreżaw il-workflow tal-tenant.

![Panoramika tal-account page tal-klient](/img/account-page/overview.png)

Wara li l-klient jiklik fuqhu, jara panoramika tal-membership tiegħu, indirizz tal-billing, invoice, domeni, limitazzjonijiet tal-site, u jistax jgħatti **Site Template** (jekk ittenna f'la-nettu tiegħek).

Jistax jgħatti l-membership għal plan ieħor, jew iġib paket jew servizz ieħor li toffri. Għall-aħħar, nistaqqu b'detal fuq kulle seccjone separata.

### Panorama Membership:

Il-block ewli sott'il nome tal-website tal-istruttori jogra l-panorama tal-plan u l-servizzi/package li kunsidd. Il-block jogra wkoll il numru tal-membership, l-importi inizjali li tħallu għalih, qabel qabel kif kostaw il-plan u jekk ma' l-servizz/package, u qabel kif ħalli l-billing biex jiġu fattati għal dan il-membership. Jidduq wkoll jifhmu jekk l-membership **Active** (Attiv), **Expired** (Espiri) jew **Canceled** (Sospedut).

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Sott'il-block dan, il-kunsidd jogra l-About This Site u l-Site Limits blocks. Dan il-blocks jgħandu lihom kollha l-limitazzjonijiet li jkun għall-plan tiegħhom: spazzju disk, post, pages, żiżi (visits), ecc... Il-limitazzjonijiet dan jistgħu jiġu konfigurat fuq pajjiċi tal-plan fuq **Ultimate Multisite > Products**.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

Fuq il-mejju tal-**Your Membership**, il-kunsidd jistax jikkliċċa fuq **Change**. Dan jgħandu lihom kollha l-planijiet u i package/servizzi li għandhom disponibbli. Jekk jgħażlu plan ieħor, il-limitazzjonijiet tal-plan jidduq fejn il-limitazzjonijiet attwali tal-membership – ma għandu l-importanza se qed jiġu downgrading jew upgrading.

Morn, jekk il-kunsidd jieħu biex jixgħlu package o servizzi għal dan il-membership attwali – kif aktar spazzju disk jew żiżi – il-membership attwali ma jitqasrax, iżda l-package newwa huma li jiġu aḍiddat għalih.

Nota li codi coupon ma jistgħux jiġu aḍiddati fuq dan pajjiċ tal-membership change. Jekk il-kunsidd użaw codi coupon fuq l-importi tal-membership inizjali, il-cod jidduq wkoll għal dan il-membership newwa.

### Aġġornament tal-Indirizz Address tal-Billing:

F'pagina tal-account, il-customer tiegħek jistgħu jgħaġġlu wkoll l-indirizzo ta'billing. Jekk jogħġbok jippressaw fuq **Update** qabel ta' _Billing Address_.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Tidħlu finestra ġdisse għall-customer tiegħek. Il-għadd li għandhom aghjtu huwa li jfila l-indirizzo ġdid u jippressaw fuq _Save Changes_.

![Update billing address form](/img/account-page/billing-address-form.png)

### Bidla tal-Template ta'Siti:

Biex t'itħalli lil customer tiegħek biddik jbażaw il-template ta'siti tagħhom, għandek li tmur għand **Ultimate Multisite > Settings > Sites** u tiġib aktiva l-opzione **Allow Template Switching**.

Mhumix, fuq **Ultimate Multisite > Products**, issaħħel il-plans tiegħek u tmur għall-tab **Site Templates**. Assiguraw li l-opzione **Allow Site Templates** hija aktiva u fuq **Site Template Selection Mode**, l-opzione **Choose Available Site Templates** hija selezżzjonata.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Tidħlu b'mod li tistgħu tinqaslu kull il-template ta'siti disponibbli fuq is-siti tiegħek. Iżżgħru li qabel li għandhom jgħażlu li huma li tivġibu u li ma jkollhomx jkunu disponibbli lil customer tiegħek li huma sħabati ta'dan din il-plan. Nota li dan l-opzjoni tiffaċċja wkoll b'form tal-checkout, għax kitba template li jgħażlu biex ma jkollhomx jkunu disponibbli ma se juriqsex fuq is-sena ta l-registrazzjoni għal dan il-plan.

Mevdur, il-customer tiegħek jistgħu jippressaw fuq **Change Site Template** f'l-account page tagħhom.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 tiffaċċja pannell ta byti redesignat għall-switch tal-template. Il-pannell jibda b' **current-template card** biex il-customer jistgħu jorxu li qabel li jaħżlu template aktar biex jgħażlu waach template huwa attif.

Tista grid tal-template templates disponibili tal-site se jippert visibbli meta l-klijenti jippurt jagħhom jirrevisionu l-opzioni tagħhom. Dan jgħanduhom li jgħaqlu b'mod aċċettabbli l-templates li jilqu l-plan tagħhom mingħajr li jgħadu l-selezzjoni tal-qiegħed.

![Lista templates di siti disponibili għall-plan](/img/config/site-templates-list.png)

Wara ma jselek jidfreji l-li jgħandu jgħaqlu biex jgħadnu li jkonferma l-cambju.

![Dialogo ta konferma tal-switch template di siti](/img/account-page/template-switch-confirm.png)

Wara ma tivitalizzaw il-konferma u tikkliq fuq **Process Switch**, il-template di sito ġdid jintistabbilji fuq is-sito tal-klijenti tagħhom.

Il-klijenti jistgħu jgħandu wkoll biex jgħandu **Reset current template** minn dan panel meta għandhom jgħadu l-site b'mod aċċettabbli l-template li huwa attwalment assegnat. Fl-mod li jipparella biex jgħadnu b'template ieħor, irresetta template jgħandu li jgħaqlu l-kontenut tal-site, għoli il-klijenti għandhom jkonferma meta jifhmu l-azzjoni ta reset.

### Ażjanza ta domini kustomi:

Il-klijenti tagħkom jistgħu jilqu l-opzjoni biex jiddu dominu kustomi għall-plan din fuq l-pagina tal-account tagħhom. Biex tistawli li il-klijenti tagħkom jistgħu jiddu domini kustomi, għandu tmur għand **Ultimate Multisite > Settings >** **Domain Mapping**.

Tivitalizzaw l-opzjoni **Enable Domain Mapping**. Dan jippoġġa li il-klijenti tagħkom jistgħu jiddu domini kustomi fuq lejn tal-network.

Ma t-għaddiex tfajti biex tiqassaw se mapping tal-domini huwa attif fuq bazi ta prodotto – għax tista' tkun limitat proddetto li ma jippoġġa li il-klijenti tagħkom jistgħu jiddu domini kustomi.

Tivitalizzaw għand **Ultimate Multisite > Products**. Sselek l-plan tal-tagħvot tiegħek u tmur għand il-tab **Custom Domains**. Tivitalizzaw l-opzjoni **Allow Custom Domains**.

![Tab ta Domini Kustomi مع toggle Allow Custom Domains](/img/config/product-custom-domains.png)

Dan dan hu dejjem kull kumpluti li jid-donijiet għall tutti l-klijenti iscritti għal dan il-plan speċifiku jkun qabelli jgħandu domini kustomi. Ora, fuq laqgħat Account, il-klijenti tiegħek jistgħu jiddu dominu kustomi biex ikliki fuq **Add Domain**.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Il-primna finestra li tiffaħħal tkun tfisser lil il-klijenti tiegħek messaggio li jgħidhom kif jgħadru l-record DNS biex dan dominu kustomi jaħdem fuq la-network tiegħek.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Dan il-messaggi jistgħu jiġu emendati (minnكم) fuq **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Hawn huwa l-vista kollha tal-laqgħat impostijiet ta mapping domini:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Wara li tkliqa fuq **Next Step**, il-klijenti tiegħek jistgħu jiddu ism tal-dominu kustomi u jgħażlu jiddu se dan dominu kustomi huwa primari. Nota li il-klijenti tiegħek jistgħu jiddu aktar minn dominu kustomi għall-sitji tiegħhom, quindi jistgħu jgħażlu li qabelhu huwa primari.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Wara li tkliqa fuq **Add Domain**, id-dominu jitidda fil-account tal-klijent tiegħek. Kull ħaġa li għandhom uġigħlu hija biex jgħadru l-record DNS ta dan dominu kustomi fuq il-registrar tal-domini tagħhom.

### Bidla Password:

F'dashboard tal-account, il-klijenti tiegħek jistgħu jbidlu dik password biex ikliki fuq **Change Password**.

![Change Password button on account page](/img/account-page/change-password-button.png)

هذا سيظهر نافذة جديدة حيث يحتاج عملاؤك إلى إدخال كلمة المرور الحالية ثم إدخال كلمة المرور الجديدة التي يريدون استخدامها.

![Forma per cambiare la password con campi vecchia e nuova password](/img/account-page/change-password-form.png)

### Zona Pericolo:

Abbiamo anche due opzioni mostrate nella parte della **Zona Pericolo**: **Elimina Sito** e **Elimina Account**. Entrambe sono nella Zona Pericolo perché queste due azioni non possono essere annullate. Se i tuoi clienti eliminano il loro sito web o il loro account, non potranno recuperarlo.

![Zona Pericolo con le opzioni Elimina Sito ed Elimina Account](/img/account-page/danger-zone.png)

Se i tuoi clienti cliccano su una di queste due opzioni, verrà mostrata una finestra dove dovranno attivare l'opzione per rimuovere il sito o l'account e riceveranno un avvertimento che questa azione non può essere annullata.

![Dialogo di conferma Elimina Sito](/img/account-page/delete-site-confirm.png)

![Dialogo di conferma Elimina Account](/img/account-page/delete-account-confirm.png)

Se eliminano il loro sito web, il loro account e l'adesione rimarranno intatti. Perderanno solo tutto il contenuto del loro sito web. Se eliminano il loro account, perderanno tutti i siti web, le adesioni e le informazioni relative a questo account.
