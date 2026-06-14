---
title: Página de Konta Kliento
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Via de Konto de Sua Kliento (v2)

_**IMPORTANTE NOTA: Esta artikolo referas Ultimate Multisite versian 2.x.**_

Kiam klientoj subskribas plan sur via sian reto, ili akcesas al sita kaj sia dashboardo kun grava informoj pri iliaj pagojoj, apleksoj, domeno, planlimitoj, kaj aliaj...

En ĉi tiu tutoro ni guidos vin per la konto de la klientoj kaj vi vidos kion via klientoj povas vidi kaj fari en ĝi.

## La Konto Paĝo

La konto paĝo estas akcesbla per kliki sur **Account** (Konto) en la dashboardo de via klientoj.

![Menu de konto en la dashboardo de la klientoj](/img/account-page/account-menu.png)

Sur sovraj tenant retoj, Ultimate Multisite v2.13.0 sekvas ĉi tijn administran ekspercion pri klientoj sur la ĉefa sita. Se klientas ŝonas la konto, pagojon, fakturon, site-administrigon, templat ŝanĝon aŭ domeno-mapigajn agojn de sovraja tenant, la aganto reverte al la kontanto de la ĉef-sita, por ke la fakturaj kaj apleksoj de la retoj restus autoritativilaj.

Kiam la klientas venas de sovraja tenant, la kontanto de la ĉefa sita povas inkluzi revenan linkon al la tenant sita. La revena linko estas montrita nur kiam Ultimate Multisite povas validi la revenan celon kiel unu el klientoj sitoj, kio permesas nearbitra redirekton kaj konservas la fluksen de la tenant.

![Supervizo de la konto paĝo de la klientoj](/img/account-page/overview.png)

Post kiam klientas klikas sur ĝi, ili vidos supervizon de sia apleksoj, faktura adresoj, fakturaj dokumentoj, domeno, site-limitoj, kaj ankaŭ bone povas ŝanĝi la ****Site Template** (se tio estas permesita en via reto).

Ili ankaŭ povas ŝanĝi la aplekson al alia planon, aŭ akiri aliajn paquetojn aŭ servojn, kiujn vi ofersas. Ĉu ni vidus ĉion apartan.

### Ĉiua Via Membaria Suprazo:

La unua bloko tute en la malalte de la nom de la ĉeestantaj klientoj montras suprazo pri ilia nunaj planoj kaj servoj/pačkoj, kiuj estis aĉetitaj kun ili. La bloko ankaŭ montras la membarian numeron, la inicialan monton, pligande kuaj la plano kaj ĉiu serva/pačkaj kostas kaj kuaj fojojn ili estis fakturitaj por ĉi tiu membario. Ili ankaŭ povas vidi se la membario estas **Aktiva**, **Ekspirita** aŭ **Cancellita**.

![Membaria suprazo montrante planon, monton kaj fakturilajn detalojn](/img/account-page/membership-card.png)

Malalte de ĉi tiu bloko, via klientoj povas vidi la blokojn **Pri Ĉi tiu Site** kaj **Site Limitoj**. Ti blokoj montras ilin ĉiuj limigojn, kiuj alferas ilian planon: diskoespaco, postaj, paĝoj, vizitoj, etc... Ti limigoj povas esti konfigurita sur ĉiu planpaĝo en **Ultimate Multisite > Products**.

![Blokoj Pri Ĉi tiu Site kaj Site Limitoj montrante planlimigojn](/img/account-page/site-limits.png)

Sur la destra de **Via Membario**, klientoj povas kliki sur **Maliĝi**. Tio montros ilin ĉiuj disponibilajn planojn kaj pačkoj/servojn. Se ili elektas plian planon, limigoj por tiu plano alvidos en stoio de la nunaj membario - ne importa ĉu ili estas malplenigante aŭ plenigante ĝin.

Nove, se via klientoj elektas aĉeti pačkoj aŭ servojn por ĉi tiu nunaj membario - kiel pli da diskoespaco aŭ vizitoj - la nunaj membario ne ŝanĝiĝos, sed nur la novaj pačkoj al ĝi alvidos.

Notu, ke kupon kodoj ne povas esti aldatigitaj sur ĉi tiu paĝo de malplenigo de membario. Se la klientu uzis kupon kodon pri la unua membaria aĉeto, la kodo ankaŭ alvidos por ĉi tiu nova membario.

### Modernigo de Fakturaj Adreso:

Sur la page de compte, vos clients peuvent également mettre à jour leur adresse de facturation. Ils n'ont qu'à cliquer sur **Mettre à jour** à côté de _Billing Address_.

![Section Adresse de facturation avec bouton Mettre à jour](/img/account-page/billing-address.png)

Une nouvelle fenêtre apparaîtra pour votre client. Tout ce qu'il doit faire est de remplir la nouvelle adresse et de cliquer sur _Save Changes_ (Sauvegarder les modifications).

![Formulaire Mise à jour de l'adresse de facturation](/img/account-page/billing-address-form.png)

### Changer le Modèle du Site :

Pour permettre à vos clients de changer leurs modèles de site, vous devez aller dans **Ultimate Multisite > Settings > Sites** et activer l'option **Allow Template Switching** (Autoriser le changement de modèle).

De plus, dans **Ultimate Multisite > Products**, sélectionnez vos plans et allez à l'onglet **Site Templates**. Assurez-vous que l'option **Allow Site Templates** est activée et pour **Site Template Selection Mode** (Mode de sélection du modèle de site), l'option **Choose Available Site Templates** (Choisir les modèles de site disponibles) est sélectionnée.

![Onglet modèles de sites des produits avec mode de sélection du modèle](/img/config/product-site-templates.png)

Vous pourrez voir tous les modèles de site disponibles sur votre site web. Choisissez ceux que vous souhaitez rendre disponibles et ceux que vous ne voulez pas rendre disponibles pour vos clients abonnés à ce plan. Notez que ces options affectent également le formulaire de paiement, donc tout modèle choisi comme **Not Available** (Non disponible) n'apparaîtra pas sur la page d'inscription pour ce plan.

Maintenant, vos clients peuvent cliquer sur **Change Site Template** (Changer le modèle de site) dans leur page de compte.

![Bouton Changer le modèle de site sur la page de compte](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 présente un panneau de changement de modèle redessiné. Le panneau commence par une **current-template card** (carte du modèle actuel) afin que les clients puissent voir quel modèle est actif avant de choisir un remplacement.

Persistita riste de disponibilitaj modeloj de sit për site-n, kjo mbetet vizibele ndërsa klientët shohin opsionet e tyre. Kjo i ndihmon ata të krahasojnë modelat që lejon plani juaj pa humbur pamjen e zgjedhjes aktuale.

![Lista e modelave të sit të disponues për planin](/img/config/site-templates-list.png)

Pas zgjedhjes atij që dëshironi të ndryshoni, do t'ju kërkohet të konfirmojëndni ndryshimin.

![Dialog i konfirmimit të ndryshimit të modelit të sit](/img/account-page/template-switch-confirm.png)

Pas aktivizimit të konfirmimit dhe klikimit në **Process Switch** (Procesimi i Ndryshimit), modeli i sit i ri do të përdoret në faqen e internetit të klientit tuaj.

Klientët mund të përdorin gjithashtu **Reset current template** (Riktheni modelin aktual) nga ky panel kur duhet të rikthejnë faqen në modelin që është i asignuar aktualisht. Si ndryshimi në një model tjetër, rikuptimi i një modeli mund të sovrasojë përmbajtjen e faqes; kështu që klientët duhet ta konfirmojnë vetëm kur kuptojnë veprimin e rikthimit.

### Shtimi i Domenave Personalizuara:

Klientët tuaj do të kenë gjithashtu opsionin për të shtuar një domen personalizuar për këtë plan në faqen e tyre të llogarisë. Për të lejuar klientët tuaj të përdorin domen personalizuar, shkoni te **Ultimate Multisite > Settings > Domain Mapping** (Mapele Domenet).

Aktivizoni opsionin **Enable Domain Mapping** (Aktivizo Mapelimin e Domenave). Kjo do t'ju lejon klientëve tuaj të përdorin domen personalizuar në nivelin e rrjetit.

Mos harroni të kontrolloni gjithashtu nëse mapelimi i domenve është i aktivizuar bazuar në produkt - sepse mund ta kufizoni një produkt që nuk lejon klientëve tuaj të përdorin domen personalizuar.

Shkoni te **Ultimate Multisite > Products** (Produkte). Zgjidhni planin tuaj dhe shkoni te tabja **Custom Domains** (Domenet Personalizuara). Aktivizoni opsionin **Allow Custom Domains** (Lejo Domenet Personalizuara).

![Tabja e Domenave Personalizuara me ndryshimin Allow Custom Domains](/img/config/product-custom-domains.png)

Tio pervasit ĉiuj klientoj, kiuj estas subskribis ĉi tiun specifan planon, uzui personalajn domenojn. Nun, sur la Paĝo de Kontaŭnto (Account page), viaj klientoj povas aĉeti personalan domenon per klikiĝi sur **Añadi Domenon** (Add Domain).

![Butono Añadi Domenon sur la paĝo de konto](/img/account-page/add-domain-button.png)

La unua okulo, kiu ŝonas, montros viaj klientojn mesaĝon instruante ilion, kiel ĝis aktualizi ilia DNS-registroj por fari ĉi tiun personalan domenon funkcii sur via retoj.

![DNS instruoj montritaj ĉe aldonado de personala domeno](/img/account-page/add-domain-dns.png)

Tiu mesaĝo povas esti modigita (de vi) en **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Instruoj por aĉeti novan domenon en Mapado de Domenoj](/img/config/settings-domain-mapping.png)

Jen kompleta vidigo de la paĝo de mapado de domenoj:

![Kompleta paĝo de mapado de domenoj](/img/config/settings-domain-mapping-full.png)

Post klikiĝi sur **Proksma Paŝo** (Next Step), viaj klientoj povas aĉeti sian personalan domenon kaj elteni, ĉu ĉi tiu personala domeno estas la primara. Notu, ke viaj klientoj povas uzi pli ol unu personalan domenon por siajn sitiojn, tiel ili povas esti elekti, kiu uzus kiel la primara.

![Enfoko de nomo de personala domeno kun opcio de primara domeno](/img/account-page/add-domain-primary.png)

Post klikiĝi sur **Añadi Domenon** (Add Domain), la domeno wirdas aldatni al viaj klientas konto. Tio ĉio, kion ili nun devas fari, estas ŝanĝi la DNS-registroj de ĉi tiu personala domeno sur ilia domen registrianto.

### Ŝanĝi la Senvion (Changing Password):

In la dashboard de konto, viaj klientoj ankaŭ povas ŝanĝi sian senvion per klikiĝi sur **Ŝanĝi Senvion** (Change Password).

![Butono Ŝanĝi Senvion sur paĝo de konto](/img/account-page/change-password-button.png)

Tiu enshowas nova finestra, kie vos klientoj devas necesi in skiri sian senan parol kaj ti novan, ki vi volu uzi.

![Forma de ŝanĝi la ŝlosilon kun laj sian kaj novan parolaj kampojn](/img/account-page/change-password-form.png)

### Perikleta Zona:

Ni ankaŭ havas du opcion, kiuj estas montritaj en la partio **Perikleta Zona**: **Maksi Site** kaj **Maksi Konto**. Ili amba estas en la Perikleta Zona ĉar ĉi tij du agoj ne povas esti revirtaj. Se vos klientoj deletes sian ŝlosilon aŭ sian konton, ili ne povas rehaŭri ilin.

![Perikleta Zona kun opcion Maksi Site kaj Maksi Konto](/img/account-page/danger-zone.png)

Se vos klientoj klikas sur iu el ĉi tiuj du opcion, al ili enshowas finestra, kie ili devas aktivi la opcion por forigi la ŝlosilon aŭ konton, kaj ili estas advertita, ke ĉi tiu agĝo ne povas esti revirtaj.

![Konfirma dialoga box de forigo de site](/img/account-page/delete-site-confirm.png)

![Konfirma dialoga box de forigo de konto](/img/account-page/delete-account-confirm.png)

Se ili deletes sian ŝlosilon, sia konto kaj la aldonado restas nemodifikitaj. Ili simplaj perdas ĉiujn la kontenton sur siaj siteoj. Se ili deletes sian konton, ĉiuj siteoj, aldonoj kaj informoj pri ĉi tiu konto perdas.
