---
title: Kunde-Account-Siite
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# D'Account-Page vun Ihrem Kunde (v2)

_**WICHTIGE NOTIZ: Dëse Artikel bezieht sich uf Ultimate Multisite version 2.x.**_

Wann Kunde en Plan uf Ier Netz abonnéieren, kriecht er Zesatz zu enere Website aach en Dashboard mat wichtegem Informatione wéi d'Zahlige, Mitmemberfe, Domänen, Planlimite usw...

In dësem Tutorial fänn mir Sie dur d'Account-Page vum Kunde führe an, und Dir gsehnd, wat Ier Kunde do drin gsehnt aach kann.

## D'Account-Page {#the-account-page}

D'Account-Page kënnt me erschliich, wann dech uf **Account** iiricht in dem Dashboard vun Ihrem Kunde klickt.

![Account menu in the customer dashboard](/img/account-page/account-menu.png)

U sovereign tenant netzwerker (sovereign tenant networks) behält Ultimate Multisite v2.13.0 dës Management-Erfahrungs vun dech am Hauptsite. Wenn en Kunde Account opent, Checkout, Billing, Invoice, Site-Management, Template-Switching oder Domain-Mapping Aktionen vum sovereignen tenant usfüeert, giset déi Aktion wéi an de Hauptsite Customer Panel zrugg, so blien d'Netzwerk-Billing- und Mitmemberfe autoritativ.

Wann de Kunde vun en sovereignen tenant chunnt, kann s'Hauptsite Customer Panel en Rücklink zrugg a de Tenant Site inklusiven. Dëser Rücklink gëtt nur anzeiget, wann Ultimate Multisite d'Rückziel validéieren kann als eifenen vum Kunde Sites, wat willkomme Redirects verhindert, wéi och d'Tenant Workflow bewahrt.

![Customer account page overview](/img/account-page/overview.png)

Nachdem de Kunde druf klickt, gseet er en Überblick über sin Mitmemberfe, Billing-Adresse, Rechnungen, Domänen, Site-Limites, und kann au d'****Site Template** (wat i Ier Netz erlaubt ass) ändere.

Er kann au d'Mitmemberfe uf en anderen Plan ändere oder en anderen Paket oder Service kaufe, dat Dir anbietet. Lat eus jede Abschnitt separat aaluegen.

### Üsi Membership-Übersicht: {#your-membership-overview}

De erscht Block direkt under de Name vo de Kundewebsite zeigt e Übersicht über de aktuelli Plan und d'Services/Paket, wo mit dem abonniert worde sind. De Block zeigt au d'Mitgliedsnummer, de Anfangsbetrag, wo dafür zahlt worde isch, wie viel de Plan und jede Service/Paket choschtet und wie oft für die Mitgliedschaft abgerechnet worde isch. Sie chönd au gseh, öb d'Mitgliedschaft **Aktiv**, **Abgelaufen** oder **Abgsetzt** isch.

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Direkt under diesem Block chönd Ihre Kunden de Block **Über Diese Website** und **Website-Limits** gseh. Die Blöck zeige ihnen alli Beschränkige, wo zu ihrem Plan gehöre: Festplattenspeicher, Beiträge, Seiten, Besuche usw. Diese Limits chönd uf jede Planseite unter **Ultimate Multisite > Products** konfiguriert werde.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

Auf de rechte Siite vo **Ihre Mitgliedschaft** chönd Kunden auf **Ändern** klicke. Das zeigt ihnen alli verfügbare Pläne und Pakete/Services a. Wenn sie en andere Plan wähle, gelten d'Limits vom neue Plan statt de aktuelle Limits vo der Mitgliedschaft – egal ob sie runter- oder hochgradieren.

Jetzt, wenn Ihre Kunden wähle, dass sie Pakete oder Services für die aktuelli Mitgliedschaft kaufe möchtet – wie meh Speicherplatz oder Besuche –, wird die aktuelle Mitgliedschaft nöd geändert, sondern nur d'neue Pakete werde ihr hinzugefügt.

Bitte beachte Sie, dass Gutscheincodes uf de Seite für d'Änderig vo der Mitgliedschaft nöd hinzugefügt werde chönd. Wenn de Kunde en Gutscheincode bi de erschte Mitgliedschaftskauf brucht het, gilt de Code au für die neui Mitgliedschaft.

### Abrechnungsadresse aktualisiere: {#updating-the-billing-address}

Auf de Kontopage chönne dini Kunde au d'Rechnigsadresse aktualisiere. Si müesse nume uf **Update** nebed _Billing Address_ klicke.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Es wird es nöis Fänschter zu dim Kunde uftauche. All, was er müesst mache, isch d'neui Adress iifülle und uf _Save Changes_ klicke.

![Update billing address form](/img/account-page/billing-address-form.png)

### Site Template ändere: {#changing-the-site-template}

Damit dini Kunde ihri Site Templates chönne ändere, muesch du zu **Ultimate Multisite > Settings > Sites** go und d'Option **Allow Template Switching** iischalte.

Au uf **Ultimate Multisite > Products**, wähle dini Plän us und gang zur Tab **Site Templates**. Stell sicher, dass d'Option **Allow Site Templates** iischaltet isch und bi **Site Template Selection Mode** isch d'Option **Choose Available Site Templates** ausgewählt.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Du chasch alli verfügbare Site Templates uf dinere Website gseh. Wähl us, weli du verfügbar mache wetsch und weli du nöd für dini Kunde, wo unter däm Plan abonniert sind, verfügbar sött si. Beacht, dass die Option au de Checkout-Form beiflusst: Jede Template, wo als **Not Available** gwählt wird, wird uf de Registrierigsseite für dä Plan nöd aazoge.

Jetzt chönne dini Kunde uf d'Accountpage uf **Change Site Template** klicke.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 zeigt es neu gestaltets Template Switch Panel a. S'Panel fangt mit eme **current-template card** aa, damit d'Kunde gseh chönne, weli Template aktiv isch, bevor si en Ersatz wähle.

E persistanti Grid vun verfügbare Site Templates bléen wiiterhin sichtbar, wyl d'Kunde hunn sine Optione überprüefen. Dat hilft hie, dat Templates z'vergleiche, déi fir sin Plan zugelasse sinn, ohni d'aktuell Uszwael z'verloussen.

![Liste vun verfügbare Site Templates fir de Plan](/img/config/site-templates-list.png)

Nachdem se den wëllen wechsle wëll selektioun, wëll se gfaue ginn, d'Änderung z'bestätigen.

![Site template switch confirmation dialog](/img/account-page/template-switch-confirm.png)

Nachdem de Bestätigung uffgange huet an uf **Process Switch** geklickt huet, wird de neie Site Template op de Website vun Ihrem Kunde ugefüegt.

Kunde chënnen au **Reset current template** vu dësem Panel benotzen, wyl se d'Site zrugg op de aktuell zugewiesene Template reset wëllen. Wéi sech d'Änderung wärend dem Wechsle zu enger andere Template, kannen Sie e Template reset übereschriien, also sölle Kunde etzëm nur bestätigen, wyl se d'Reset-Aktion verstoen.

### Custom Domains hinzufügen: {#adding-custom-domains}

Ihre Kunde hänn au d'Option, fir dëse Plan op de Account Page en custom domain hinzuezfüegen. Um Ihren Kunde hiert custom domains z'laassen, gaen Sie zu **Ultimate Multisite > Settings >** **Domain Mapping**.

Schalte d'Option **Enable Domain Mapping** uff. Dat laesst Ihren Kunde custom domains uf Netzwork-Niveau benotzen.

Vergessen Sie au, ob d'domain mapping op Basis vun enger Produkt aktiviert huet – well Dir e Produkt beschränken kënnt, datt Ihren Kunde custom domains net benotzen kann.

Gaen Sie zu **Ultimate Multisite > Products**. Wahlen Sie de Plan vun Ihrer Wahl an und gaen Sie zur Tab **Custom Domains**. Schalte d'Option **Allow Custom Domains** uff.

![Custom Domains tab with Allow Custom Domains toggle](/img/config/product-custom-domains.png)

Das ermöglicht allne Kunde, wo für dä spezifische Plan abonniert sind, mit eigene Domainä z'nutze. Jetzt chönd dini Kunde uf de Account-Siite e eigeti Domain über **Add Domain** hinzufüge, indem sie druf klicke.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

S'ersti Fenster, wo sich öffnet, zeigt dine Kunde e Nachricht a, wo ihne erklärt wird, wie sie ihri DNS-Einträge aktualisiere müend, damit die eigeti Domain uf dim Netzwerk funktioniert.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Dä Text chann (vo dir) i **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** bearbeite werde.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Hier isch en ganz Überblick über d'Domain Mapping Settings Siite:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Nachdem sie uf **Next Step** klicke, chönd dini Kunde ihri eigeti Domain-Name hinzufüge und wähle, ob die eigeti Domain d'primäri si söll. Mer sölle bemerke, dass dini Kunde meh als e eigeti Domain für ihri Websites bruche chönd, drum chönd sie wähle, weli die primär si söll.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Nachdem sie uf **Add Domain** klicke, wird d'Domain zu em Account vo dim Kunde hinzugefügt. Alles, was sie jetzt müend mache, isch, die DNS-Einträge vo dere eigete Domain bi ihrem Domain Registrar z'ändere.

### Passwort ändere: {#changing-password}

Im Account Dashboard chönd dini Kunde au s'Passwort über **Change Password** ändere, indem sie druf klicke.

![Change Password button on account page](/img/account-page/change-password-button.png)

Das zeigt es enge Fenster, wo dini Kunde s'aktuelli Passwort iigäh müesse und denn s'neui Passwort iigäh chönne.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Gefährlichi Zone: {#danger-zone}

Mir händ au zwei Option, wo im **Danger Zone** Teil zeige sind: **Site löschen** und **Account löschen**. Die beidi sind i de Danger Zone, will die zwei Aktionen nöd rückgängig gmacht werde chönne. Wenn dini Kunde ihri Website oder ihri Account lösche, chönd sie die nöd wider hergriefe.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Wenn dini Kunde uf eine vo dene zwei Option klicke, wird en Fenster zeigt, wo sie d'Option zum Entferne vo de Website oder vom Account umschalte müesse und sie werdet gwarnet, dass die Aktion nöd rückgängig gmacht werde chan.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Wenn sie ihri Website lösche, bliebt ihr Account und d'Mitgliedschaft unverändert. Sie verlüred eifach de ganz Inhalt uf ihrer Website. Wenn sie ihri Account lösche, werdet alli Websites, Mitgliidschafte und Informatione zu dere Account verlore.
