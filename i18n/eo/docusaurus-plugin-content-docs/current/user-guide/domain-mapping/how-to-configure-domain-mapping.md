---
title: Kiel agordi domajnan mapadon
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Kiel agordi domajnan mapadon (v2) {#how-to-configure-domain-mapping-v2}

_**GRAVA NOTO: Ĉi tiu artikolo rilatas al Ultimate Multisite versio 2.x.**_

Unu el la plej potencaj funkcioj de altkvalita reto estas la eblo oferti al niaj klientoj ŝancon ligi pintnivelan domajnon al iliaj retejoj. Finfine, kio aspektas pli profesia: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) aŭ [_**joesbikeshop.com**_](http://joesbikeshop.com)? Tial Ultimate Multisite ofertas tiun funkcion enkonstruita, sen la bezono uzi triaflankajn kromprogramojn.

## Kio estas domajna mapado? {#whats-domain-mapping}

Kiel la nomo sugestas, domajna mapado estas la eblo ofertata de Ultimate Multisite akcepti peton por propra domajno kaj mapi tiun peton al la responda retejo en la reto kun tiu aparta domajno ligita.

### Kiel agordi domajnan mapadon en via Ultimate Multisite Reto {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domajna mapado postulas iom da agordo viaflanke por funkcii. Feliĉe, Ultimate Multisite aŭtomatigas la malfacilan laboron por vi, tiel ke vi povas facile plenumi la postulojn.

Dum la instalado de Ultimate Multisite, la asistanto aŭtomate kopios kaj instalos la **sunrise.php** al la elektita dosierujo. **La asistanto ne permesos al vi daŭrigi ĝis ĉi tiu paŝo estos kompletigita**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Ĉi tio signifas, ke post kiam la instala asistanto de Ultimate Multisite finos agordi vian reton, vi povas tuj komenci mapi la propran domajnon.

Notu, ke domajna mapado en Ultimate Multisite ne estas deviga. Vi havas opcion uzi la denaskan domajnan mapadan funkcion de WordPress Multisite aŭ ajnan alian domajnan mapadan solvon.

Se vi bezonas malŝalti domajnan mapadon de Ultimate Multisite por cedi lokon al aliaj domajnaj mapadaj solvoj, vi povas malŝalti ĉi tiun funkcion sub **Ultimate Multisite > Settings > Domain Mapping**.

![Paĝo de agordoj pri Domajna Mapado montranta administran alidirekton, mapadan mesaĝon kaj DNS-opciojn](/img/config/domain-mapping-settings.png)

Ĝuste sub ĉi tiu opcio, vi ankaŭ povas vidi la opcion **Force Admin Redirect**. Ĉi tiu opcio permesas al vi kontroli ĉu viaj klientoj povos aliri sian administran Dashboard kaj per sia propra domajno kaj per subdomajno, aŭ nur per unu el ili.

Se vi elektas **Force redirect to mapped domain** , viaj klientoj povos aliri sian administran Dashboard nur per siaj propraj domajnoj.

La opcio **Force redirect to** **network domain** faros ĝuste la malon - viaj klientoj rajtos aliri siajn Dashboard nur per sia subdomajno, eĉ se ili provas ensaluti per siaj propraj domajnoj.

Kaj la opcio **Allow access to the admin by both mapped domain domain and network domain** permesas al ili aliri siajn administrajn Dashboard kaj per la subdomajno kaj per la propra domajno.

![Falmenuo de Admin Redirect malfermita montranta la tri alidirektajn opciojn](/img/config/domain-mapping-redirect-options.png)

Estas du manieroj mapi propran domajnon. La unua estas per mapado de la domajna nomo el via reta administra Dashboard kiel superadministranto, kaj la dua estas per la subreteja administra Dashboard sub la Account-paĝo.

Sed antaŭ ol vi komencos mapi la propran domajnon al unu el la subretejoj en via reto, vi devos certigi, ke la **DNS-agordoj** de la domajna nomo estas ĝuste agorditaj.

###

### Certigi, ke la DNS-agordoj de la domajno estas ĝuste agorditaj {#making-sure-the-domain-dns-settings-are-properly-configured}

Por ke mapado funkciu, vi devas certigi, ke la domajno, kiun vi planas mapi, montras al la IP-adreso de via Reto. Notu, ke vi bezonas la IP-adreson de la Reto - la IP-adreson de la domajno kie Ultimate Multisite estas instalita - ne la IP-adreson de la propra domajno, kiun vi volas mapi. Por serĉi la IP-adreson de specifa domajno, ni sugestas iri al [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), ekzemple.

Por ĝuste mapi la domajnon, vi devas aldoni **A RECORD** en via **DNS**-agordo montrantan al tiu **IP-adreso**. DNS-administrado multe varias inter malsamaj domajnaj registristoj, sed estas multe da lerniloj rete pritraktantaj tion se vi serĉas " _Creating A Record on XXXX_ " kie XXXX estas via domajna registristo (ekz.: " _Creating A Record on_ _GoDaddy_ ").

Se vi spertas problemojn funkciigi ĉi tion, **kontaktu la subtenon de via domajna registristo** kaj ili povos helpi vin pri ĉi tiu parto.

Se vi planas permesi al viaj klientoj mapi siajn proprajn domajnojn, ili devos fari la laboron pri ĉi tiu parto mem. Direktigu ilin al la subtena sistemo de ilia registristo se ili ne povas krei la A Record.

### Mapi propran domajnan nomon kiel Superadministranto {#mapping-custom-domain-name-as-super-admin}

Kiam vi estas ensalutinta kiel superadministranto en via reto, vi povas facile aldoni kaj administri proprajn domajnajn nomojn irante al **Ultimate Multisite > Domains**.

![Paĝo de listo de domajnoj en Ultimate Multisite](/img/admin/domains-list.png)

Sub ĉi tiu paĝo, vi povas alklaki la butonon **Add Domain** supre, kaj tio aperigos modalan fenestron kie vi povas agordi kaj plenigi la **propran domajnan nomon** , **la subretejon** al kiu vi volas apliki la propran domajnan nomon, kaj decidi ĉu vi volas agordi ĝin kiel la **ĉefan domajnan** nomon aŭ ne (notu, ke vi povas mapi **plurajn domajnajn nomojn al unu subretejo**).

![Modalo Add Domain kun domajna nomo, reteja elektilo kaj baskulo por ĉefa domajno](/img/admin/domain-add-modal.png)

Post enmeti ĉiujn informojn, vi povas tiam alklaki la butonon **Add Existing Domain** malsupre.

Ĉi tio komencos la procezon de kontrolado kaj akirado de la DNS-informoj de la propra domajno. Vi ankaŭ vidos protokolon malsupre de la paĝo por sekvi la procezon, tra kiu ĝi iras. Ĉi tiu procezo povas daŭri kelkajn minutojn por fini.

Ultimate Multisite v2.13.0 ankaŭ kreas la internan domajnan rikordon aŭtomate kiam nova retejo estas kreita ĉe gastiganto, kiu devus esti traktata kiel por-reteja domajno. Se la gastiganto estas la ĉefa domajno de la reto, aŭ unu el la komunaj bazaj domajnoj de pagformularo agorditaj en kampo **Reteja URL**, la aŭtomata mapita-domajna rikordo estas preterlasita, tiel ke la komuna baza domajno restas disponebla al ĉiu retejo kiu uzas ĝin.

Kiam kliento registras novan domajnon per Domain Seller v1.3.0 aŭ pli nova, Ultimate Multisite aŭtomate mapas la registritan domajnon al la reta retejo de la kliento defaŭlte. Administrantoj ne plu bezonas aldoni apartan mapita-domajnan rikordon post sukcesa registrado, krom se ili volas ĝustigi opciojn kiel la ĉefa-domajna flago, aktiviga stato aŭ SSL-traktado.

La **Etapo** aŭ la stato devus ŝanĝiĝi de **Kontrolante DNS** al **Preta** se ĉio estas ĝuste agordita.

<!-- Ekrankopio nedisponebla: Domajna vico montranta la etapon Kontrolante DNS en la domajna listo -->

<!-- Ekrankopio nedisponebla: Domajna vico montranta la etapon Preta kun la verda stata indikilo -->

Se vi alklakas la domajnan nomon, vi povos vidi kelkajn opciojn ene de ĝi. Ni rapide rigardu ilin:

![Domajna detala paĝo kun ŝaltiloj por etapo, retejo, aktiva, ĉefa kaj SSL](/img/admin/domain-edit.png)

**Etapo:** Ĉi tiu estas la etapo en kiu troviĝas la domajno. Kiam vi unue aldonas la domajnon, ĝi verŝajne estos en la etapo **Kontrolante DNS**. La procezo kontrolos la DNS-enirojn kaj konfirmos ke ili estas ĝustaj. Poste, la domajno estos metita en la etapon **Kontrolante SSL**. Ultimate Multisite kontrolos ĉu la domajno havas SSL aŭ ne kaj kategoriigos vian domajnon kiel **Preta** aŭ **Preta (sen SSL)**.

**Retejo:** La subdomajno kiu estas asociita kun ĉi tiu domajno. La mapita domajno montros la enhavon de ĉi tiu specifa retejo.

**Aktiva:** Vi povas ŝalti aŭ malŝalti ĉi tiun opcion por aktivigi aŭ malaktivigi la domajnon.

**Ĉu Ĉefa Domajno?:** Viaj klientoj povas havi pli ol unu mapitan domajnon por ĉiu retejo. Uzu ĉi tiun opcion por elekti ĉu ĉi tiu estas la ĉefa domajno por la specifa retejo.

**Ĉu Sekura?:** Kvankam Ultimate Multisite kontrolas ĉu la domajno havas SSL-atestilon aŭ ne antaŭ ol ebligi ĝin, vi povas permane elekti ŝargi la domajnon kun aŭ sen SSL-atestilo. Notu, ke se la retejo ne havas SSL-atestilon kaj vi provas devige ŝargi ĝin kun SSL, ĝi povas doni al vi erarojn.

### Mapi propran domajnan nomon kiel subreteja uzanto {#mapping-custom-domain-name-as-subsite-user}

Subretejaj administrantoj ankaŭ povas mapi proprajn domajnajn nomojn el sia subreteja administra Dashboard.

Unue, vi devas certigi, ke vi ebligas ĉi tiun opcion sub la agordoj de **Domajna mapado**. Vidu la ekrankopion sube.

<!-- Ekrankopio nedisponebla: Agordoj de domajna mapado permesantaj al subretejaj uzantoj mapi domajnojn per la ŝaltilo Klienta DNS-Administrado -->

Vi ankaŭ povas agordi ĉi tiun opcion ĉe la nivelo de **Plano** aŭ en produktaj opcioj ĉe **Ultimate Multisite > Produktoj**.

![Sekcio Propraj Domajnoj sur la produkta redakta paĝo](/img/config/product-custom-domains.png)

Kiam iu el tiuj opcioj estas ebligita kaj subreteja uzanto rajtas mapi proprajn domajnajn nomojn, la subreteja uzanto devus vidi metaskatolon sub la paĝo **Account** nomatan **Domajnoj**.

<!-- Ekrankopio nedisponebla: Metaskatolo Domajnoj sur la subreteja Account-paĝo kun butono Aldoni Domajnon -->

La uzanto povas alklaki la butonon **Aldoni Domajnon**, kaj ĝi malfermos modalan fenestron kun kelkaj instrukcioj.

<!-- Ekrankopio nedisponebla: Modalo Aldoni Domajnon montranta instrukciojn pri DNS A-rikordo por subretejaj uzantoj -->

La uzanto povas tiam alklaki **Sekva Paŝo** kaj daŭrigi por aldoni la propran domajnan nomon. Ili ankaŭ povas elekti ĉu ĉi tio estos la ĉefa domajno aŭ ne.

<!-- Ekrankopio nedisponebla: Formularo Aldoni Domajnon kun kampo por propra domajna nomo kaj ĉefa-domajna ŝaltilo -->

<!-- Ekrankopio nedisponebla: Konfirma paŝo Aldoni Domajnon kiu ekigas DNS-konfirmon -->

Alklaki **Aldoni Domajnon** komencos la procezon de konfirmado kaj akirado de la DNS-informoj de la propra domajno.

### Pri Domajna Sinkronigado {#about-domain-syncing}

Domajna Sinkronigado estas procezo per kiu Ultimate Multisite aldonas la propran domajnan nomon al via gastiga konto kiel aldona domajno **por ke la domajna mapado funkciu**.

Domajna sinkronigado aŭtomate okazas se via gastiga provizanto havas integriĝon kun la domajna mapa funkcio de Ultimate Multisite. Nuntempe, ĉi tiuj gastigaj provizantoj estas _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ kaj _Cpanel._

Kiam integriĝo kun gastiga provizanto estas aktiva, Ultimate Multisite ankaŭ povas envicigi la taskon ĉe la provizanto por krei DNS aŭ subdomajnon por nove kreitaj retejoj. Se neniu integriĝo aŭskultas tiun taskon, la fona laboro estas preterlasita por eviti senefikajn vicajn enskribojn. DNS- kaj SSL-kontroloj por mapitaj domajnoj daŭre funkcias per la normala domajna-etapa procezo.

Vi devos aktivigi ĉi tiun integriĝon en la agordoj de Ultimate Multisite sub la langeto **Integriĝo**.

![Langeto Integriĝoj en agordoj de Ultimate Multisite montranta gastigajn provizantojn](/img/config/integrations-tab.png)

<!-- Ekrankopio nedisponebla: Agordaj ligiloj de gastiga provizanto en la langeto de Integriĝaj agordoj -->

_Notu, ke se via gastiga provizanto ne estas unu el tiuj provizantoj menciitaj supre,**vi devos permane sinkronigi aŭ aldoni la domajnan nomon** al via gastiga konto._
