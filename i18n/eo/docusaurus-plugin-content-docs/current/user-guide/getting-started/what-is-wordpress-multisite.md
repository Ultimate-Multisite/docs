---
title: Kio estas WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Kion estas WordPress Multisite? {#what-is-wordpress-multisite}

En sia ĝia core, WordPress donas funkcion nomitan ‘Multisite’, kiu rastas sin origino al 2010 kiam WordPress 3.0 elanĝis. Desde ti, ĝi ricevis plurajn reviziojn orientajn al introdukti novajn funkciojn kaj plibonigi sekurecon.

En esence, WordPress multisite povas esti pensita kiel ĉi tio: Un Universitato konserveras unan instaliron de WordPress, sed ĉiu fakultato konserveras sian propran WordPress-siton.

##

## Kion Tio Esakite estas WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Multisite estas funkcio de WordPress, kiu permesas plurajn sitiojn partoprenki en unu instalita WordPress-instanco. Kiam multisite aktivas, la originala WordPress-sito konvertiĝas por subteni tio, kion oni usualne nomas **rete de sitioj**.

Ĉi tiu reto partoprenkas la filsistema (significante **pluginoj kaj temoj ankaŭ estas partoprenkaj**), la bazdatan, la kernajn WordPress-fajlajn, wp-config.php, kaj aliajn.

Tio signifas, ke aktualizoj de WordPress, temoj kaj pluginoj bezonas fariĝi nur dufoje por ĉion viaj rete sitoj, ĉar ili partoprenkas la sama fajlin sistemon.

Ĉi tiu fakto estas unu el la ĉefaj avantajoj de multisite, ĉar ĝi permesas vi kreski la nombron de sitioj, kiujn vi administras, dum mantenind la nombron de taskoj, kiujn vi bezonas fari por konservi viaj klientaj sitiojn.

##

## Subdomajno aŭ Subdirektorio? {#subdomain-or-subdirectory}

Ekzistas du modoj por diri WordPress multisite – kaj vi bezonas elekti unu el ili pri konverti via regularan WordPress-instaliron en multisite instaliron:

**Subdomajno:** ekz.: [site.domain.com](http://site.domain.com)

… aŭ

**Subdirektorio:** ekz.: [yourdomain.com/site](http://yourdomain.com/site)

Ĉiu modo havas avantajojn kaj disadvantagejn, kiujn vi bezonas konsideri pri fari ĉi ti decision.

Importanta estas unu thing: ĉu vi faras vian decisionon, ŝanĝi vian reton de subdirektorio al subdomajno aŭ inverse estas vere malfacile – precipe se vi 이미 havas plurajn sitojn kreitajn.

Antaŭ fari ti decision, ĉi-tempi estas unuaj punktoj por memori:

**Subdirektoro Modo** estas la plej facila modo en tempon de montri kaj manutenti. Tio okazas ĉar ĉiuj sitoj estas nur jaroj al la ĉefa domeno (ekz., [yourdomain.com/subsite](http://yourdomain.com/subsite)). Kiel rezulto, vi bezonas **un SSL-sertifikon** por la ĉefdomeno kaj tio tute konvencos la tutan reton.

Simulteme, pro ĝia URL-strukturo, Google kaj la plej multaj aliaj motorkontoj konsideros ĉiuj subsitojn en via subdirektora retono kiel unu giganta sitaĵo. Kiel rezulto, la enhavo, kiun vi end-klientoj añascias al subsitoj, povas influi sur la SEO-performon de via landanto sitaĵo, ekzemple. La nivelo de impacto estas debatita kaj ekzistas argumento, ke havi taman aranĝon povas eĉ esti benefita por SEO-performon.

**Subdomajno Modo** estas pli kompleksaj en montri, sed ĝia URL-strukturo (ekz., [subsite.yournetwork.com](http://subsite.yournetwork.com)) ĝenerale percipiĝas kiel "pli profesia".

Un de la plej gravaj problemoj pri la kreado modo subdomain estas SSL-koverado (HTTPS) por la tuta retoj. Ĝi bazas sur la fakto, ke brauzeroj traktas subdomainoj kiel izolitaĵojn. Kiel rezulto, vi bezonas apartan SSL-sertifikadon por ĉiu subdomajno sur via retoj, aŭ specialan tipon sertifikadon nomitan **Wildcard SSL certificate**. En lastaj jaroj, alojantoj kaj paneloj plibonigas sian konvenon en provizio de SSL kaj certaj oferas wildcard sertifikado per kliko de butono, krei la gap inter la du modoj pri la kompleksaĵoj de kreado.

Kontrastante al subdirektora modo, subsitoj sur retoj bazitaj sur subdomain estas konsiderata de motorkontrolloj kiel apartaj vortodoj, kio signifas, ke la enhavo prezentita sur unu subsudo ne interafiktas la SEO performon de aliaj subsitoj en maniero niro.

## La Super Administrado (The Super Admin) {#the-super-admin}

Unaj unuj-sito WordPress instalacioj permesas al vi aĉeti nefinan talon de uzantoj kaj doni ti uzantoj apartajn uzanto-rolojn kun apartajn permesojn.

En WordPress Multisite, nova tip de uzanto ŝlosas: **la super admin** – kaj nova admin-panel ŝlosas: **la network admin panel**.

Kiel la nomo implikas, la super admin havas superpotencojn sur la retoj, konabli esti gvidanta ĉiuj sin subsitojn, pluginojn, temojn, ĉion!

Unfoje vi konvertas vian unujan-sito WordPress instalacion en multisite, la originala admino de la unua sito estas aŭtomate plibonigita al super admino.

Pluginoj kaj temoj povas esti instalitaj aŭ neinstalitaj de la network admin panel per super adminoj. Subsudo-adminoj povas ti pli eleti aktivi aŭ deaktivi ti pluginojn aŭ temojn, malferma se la super admin retoj aktivas unan pluginon, kio forcas ĝin esti aktiva por ĉiuj subsitoj ĉiam.

_Note: kiel vi si, dass jemanden zu Ihrem Netzwerk einladen und ihm Super-Admin-Status geben, diesem Benutzer die volle Kontrolle über Ihr Netzwerk gibt. Als Beispiel können andere Super-Admins Ihren Super-Admin-Status sogar entfernen und Sie effektiv von Ihrem eigenen Netzwerk-Admin-Panel ausschließen. Um Ultimate Multisite Kunden eine feingranulare Kontrolle darüber zu ermöglichen, was zusätzliche Super-Admins tun dürfen, haben wir ein Add-on namens Support Agents. Dieses Add-on ermöglicht es Ihnen, eine weitere Art von Benutzer – einen Agenten – mit nur den Berechtigungen zu erstellen, die er für seine Aufgaben im Netzwerk benötigt._

## Was zwischen Subsites geteilt wird und was nicht {#what-is-shared-among-subsites-and-what-is-not}

Wie scho erwähnt, einer der wichtigsten Vorteile von WordPress Multisite ist, dass alle Subsites dieselben Konfigurationen, Kern-Dateien, Themes, Plugins, WordPress-Kern-Dateien usw. teilen.

Es gibt jedoch Elemente, die auf Basis jeder einzelnen Subsite gut begrenzt sind.

\- Zum Beispiel erhält jede Subsite ihren eigenen Uploads-Ordner. Als Ergebnis können Uploads, die von Benutzern einer bestimmten Subsite gemacht wurden, nicht auf einer anderen Subsite aufgerufen werden.

\- Jede Subsite hat ihr eigenes dediziertes Admin-Panel und kann Plugins oder Themes aktivieren oder deaktivieren, es sei denn, sie sind von einem Super-Admin im Netzwerk aktiviert.

\- Die meisten Datenbanktabellen werden für jede Subsite erstellt, was bedeutet, dass Beiträge, Kommentare, Seiten, Einstellungen usw. für jede Subsite begrenzt sind.

## Benutzerverwaltung in WordPress Multisite {#user-management-on-wordpress-multisite}

Ein heikles Thema bei WordPress Multisite ist die Benutzerverwaltung. Die WordPress-Benutzer-Tabelle ist eine von wenigen Tabellen, die zwischen allen Subsites geteilt werden.

Diese Anordnung kann je nachdem, was Sie mit Ihrem Netzwerk aufbauen möchten, einige Probleme verursachen. Das folgende Beispiel hilft, das dringendste Problem zu verdeutlichen.

Stellen Sie sich folgendes Szenario vor:

Vi kreas WordPress multisite reto kaj komencas oferi sub-sitojn mensan talon al persone, kiuj volas havi e-komerçajn tirojn.

Vi akiras vian unan pagajtan klienton – John. Vi kreas siton por John sur via reto, instalas ĉiuj necesajn pluginojn, kaj tiam kreas uzanton por John, por li povus administri sian tirojn.

Tiam venas alia kliento – Alice. Vi faras la saman por ŝi, kaj nun ŝi ankaŭ havas tirojn sur via reto.

John kaj Alice estas amba via klientoj, sed ili ne konas unu la alian. Pi gravajtempe, se unu el ili vizitas la tiro-siton de la alia, neniu povas scii, ke ĉi tiu tiro estas alojita sur la sama reto de sitaĵoj.

Unan tagon John bezonas akiri novan pairon ŝujojn kaj li trovas perfectajn ilin en Alice's tiro. Kiam li provas fini la aĉeton, li ricevas la mesaĝon „e-mail jużo uzita“ (email already in use), kio estas dziaro, ĉar John estas 100% certa, ke tio estas la unua foj, kion li eble vizitis Alice's tiro.

Kio okazis ĉi tie estas, ke John's uzanto estas partaj por la tuta reto, kaj kiam li provas krei konton por fini la aĉeton sur Alice's tiro, WordPress detektos, ke uzanto kun la sama e-maila adresoj jużo ekzistas, kaj lansasis eraran.

_Notu: Ni komprenas, ki malbone tio povas esti, dependante de via uzado, tiel Ultimate Multisite havas opcion, kiu konturigas la regulajn kontrolojn por uzanto jużo, permesante kreon pluraj kontoj kun la sama e-maila adresoj. Ĉiu konto estas ligita al sub-sito, tiel la risko de kolizio estas mantintita en minimuma nivelo. En la above ekzemplo John ne ricevas eraran mesaĝon kaj povus akiri tiuj ŝujojn sen problemo. Ĉi tiu opcio nomas „Enable Multiple Accounts“ (Permesi Pluajn Kontojn), kaj povas esti aktiva sur Ultimate Multisite → Settings → Login & Registration._

Eĉ se la tabelo de uzantoj estas partaj, uzantoj povas esti aĉetitaj kaj ellevitaj de subsitaj administrajnoj aŭ superadministrado, kaj ili eĉ povas havi malsamajn uzanto-rolojn sur malsamaj subsitaj.

## Performereco konsideroj {#performance-considerations}

WordPress multisite estas vere potenca pri la nulo de sitoj, kiujn ĝi povas suporti. Tion povas testigi per fakton, ke [WordPress.com](https://WordPress.com), Edublogs kaj Campuspress estas ĉiuj multisite-bazitaj servoj, kaj ĉiu hosto tenias milojn de sitoj.

Ĉar en teorian sentido ne ekzistas maksima nulo de sitoj, kiujn vi povas hosti sur unu WordPress multisite instalado, en praktiko la nulo de sitoj, kiujn vi povas fari funkcii bone, povas varii multe dependante de pluraj malsamaj faktoj: ĉu la sitoj estas dinamiaj, kiuj pluginoj estas disponiblaj al subsitaj, kaj tiel.

Kiel regola de manĝo, pli simple via via retoj estas bone. Preferi sitojn kie la enonco ne estas vere dinamika (kio faras ilin bone kandidatojn por agresivaj cachado-strategioj) kaj ke la stack de pluginoj estas la plej leve posible (la pli mal alta nulo de aktiva pluginoj tiu bone), povas draste pliboni la nulo de subsitaj, kiujn vi povas hosti.

La plej bona parto estas, ke ĉar  ĉio estas WordPress ĉi tie, la sama iloki vi vidas kaj amas por performereco plibonigojn ankaŭ funkcias por multisite-reto.

La ĉefa obstaklo por multisite estas la bazdatabela (database), sed se ĉio alia estas ĝuste konfiguraita, ĝi povas bezoni du milaj sitoj antaŭ ol vi devas miŝi pri ĝi. Eĉ ti tami, ekzistas solvoj, kiuj povas esti progresive aldatigitaj en tiu punkto (tiel kiel la solvoj de sharding de bazdata).
