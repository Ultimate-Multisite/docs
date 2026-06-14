---
title: Kā konfigurēt domēnu mapiģi
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Kā kārtot domēnu mapi (v2)

_**SVIRTIE ATMIZI: Šis raksts attiecas uz Ultimate Multisite versiju 2.x.**_

Vienas no spēcīgākajām funkcijām premium tīklā ir iespēja piedāvāt mūsu klientiem iespēju pievienot augstākspēju domēnu saviem vietnēm. Pagalielinājums, kas izskatās profesionālāk: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) vai [_**joesbikeshop.com**_](http://joesbikeshop.com)? Tāpēc Ultimate Multisite piedāvā šo funkciju, kas ir iekļauta sistēmā, bez nepieciešamības lietot tretiem puslapiem (plugins).

## Kāds ir domēnu mapi?

Kā nosaukums norāda, domēnu mapi ir Ultimate Multisite piedāvātā iespēja pieņemt pieprasījumu par personīgu domēnu un saistīt to ar atbilstošu vietni tīklā, kur šis konkrēts domēns būs pievienots.

### Kā iestatīt domēnu mapi savā Ultimate Multisite tīklā

Domēnu mapēšanai ir nepieciešami kādi iestatījumi no jūsu pusē, lai tā strādāt. Laipnie, Ultimate Multisite automātiski veic grūto darbu, lai jūs varētu viegli apstiprināt prasības.

Ultimate Multisite instalācijas laikā mākslīgais instrukciju (wizard) automātiski kopējas un instalē **sunrise.php** uz norādētām dalām. Mākslīgais instrukcija neļaus jums turpināt, kamēr šis soļums nav pabeigts.

<!-- Screenshot unavailable: Ultimate Multisite instalācijas mākslīgais instrukciju ar sunrise.php soļu -->

Tās nozīmē, ka pēc tam, kad Ultimate Multisite instalācijas mākslīgais instrukcija ir pabeigusi tīkla iestatīšana, jūs varat sākāt mapēt personīgo domēnu neatkarīgi.

Piezīmi: Ultimate Multisite domēnu mapi nav obligāts. Jums ir iespēja izmantot WordPress Multisite vietējās domēnu mapēšanas funkciju vai jebkuru citu domēnu mapēšanas risinājumu.

Ja ja, ja! Ja jums ir jāizvēlas, vai vēlaties deaktivizēt Ultimate Multisite domēnu mapi, lai nodrošinātu vietu citām domēnu mapi solutions. To varat to izdeaktivēt sadaļā **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Tieši zem šīs opcijas redziet arī opciju **Force Admin Redirect** (Forcēt adminu pāri). Šī opcija ļauj jums kontrolēt, vai jūsu klientiem būs iespējams piekļūt savam admin panelim gan savā kustom domēnā un subdomēnā, vai tikai vienā no tiem.

Ja izvēlas **Force redirect to mapped domain** (Forcēt pāri uz mapiētu domēnu), jūsu klientiem būs iespējams piekļūt savam admin panelim tikai savās kustom domēnas.

Opcija **Force redirect to network domain** (Forcēt pāri uz tīkla domēnu) dara tieši atsaucijumā – jūsu klientiem būs atļauts piekļūt savām dashboardiem tikai subdomēnā, pat ja mēģina iekļūt ar savu kustom domēnu.

Un opcija **Allow access to the admin by both mapped domain domain and network domain** (Ļaut piekļuvi adminam gan mapiētā domēnas un tīkla domēnas) ļauj viņiem piekļūt savām admin dashboardiem gan subdomēnā, gan kustom domēnā.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Ir divi veidi mapiēt kustom domēnu. Pirmais ir mapiēt domēna nosaukumu no jūsu tīkla admin dashboarda kā superadminis, un otrās ir subsite admin dashboardā sadaļā "Account" (Kontrole).

Bet pirms sāciet mapiēt kustom domēnu uz vienu subsite savā tīklā, jums jābriezi pārliecinās, ka **DNS iestatījumi** domēna nosaukumam ir labi konfigurēti.

### Pārliecināšanās, ka domēnas DNS iestatījumi ir labi konfigurēti

Lai atkarītu mapēšanu, jums ir jābērnsies, ka domāinājums, ko plānojat mapēt, punkti uz jūsu tīkla IP adresi. Piezīmi: jums ir nepieciešama tīkla IP adrese – tātad, domāinājuma IP adrese, kurā Ultimate Multisite ir instalēts – nevis custom domāinājuma IP adrese, ko vēlaties mapēt. Lai meklētu konkrētās domāinājuma IP adresi, mēs iesaucasiet apmeklēt [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), piemēram.

Lai pareizi mapētu domāinājumu, jums ir jāievieca **A RECORD** savā **DNS** konfigurācijā, kas punkti uz šo **IP adresi**. DNS pārvaldība atšķiras ļoti starp dažādiem domāinājuma reģistratoriem, bet tie online ir daudz pamatu, kas to apraksta, ja meklējat " _Creating A Record on XXXX_ ", kur XXXX ir jūsu domāinājuma reģistrators (piemēram: " _Creating A Record on_ _GoDaddy_ ").

Ja jums ir grūtības iegūt to darboties, **sazinājieties ar savas domāinājuma reģistratora atbalsta** un viņi var jums palīdzēt šajā daļā.

Ja plānojat ļaut saviem klientiem mapēt savus domāinājumus, viņiem būs jāveic šīs darbinas daļa sevi. Pārslēdziet viņus uz savas reģistratora atbalsta sistēmu, ja viņi nevar izveidot A Recordu.

### Custom domāinājuma mapēšana kā Super Admin

Kad jūs esat iekļauti kā super admin savā tīklā, varat viegli pievienot un pārvaldīt custom domāinājumus, dodoties uz **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Šajā lapā augšējā varat klikšķināt uz pogas **Pievienot domēnu** (Add Domain), kas atvērs modalu logi, kurā jūs varat iestatīt un aizpildīt **personīgo domēna nosaukumu** (custom domain name), izvēlēto **subsites**, kuram vēlaties piemērot personīgo domēnu nosaukumu, un izlemt, vai vēlaties to noteikt kā **galveno domēnu** (primary domain) vai ne. (atcerieties, ka var saistīt ** vairākus domēnus vienam subsite).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Viel pēc tam, kad visu informāciju ievadījis, varat klikšķināt uz pogas **Pievienot savu domēnu** (Add Existing Domain), kas sāks procesu DNS informācijas apstiprināšanai un saņemšanai personīgaj domēna. Lai izseko procesu, kurš tas veic, jūs redziet arī logu lapas apakšējā daļā. Šis process var aizņemt dažas minūtes.

Ultimate Multisite v2.13.0 automātiski izveido iekšējo domēna ierakstu, kad tiek izveidots jauns sites hosta, kas jāatbild uz domēnu, kas jāizvēlas kā **Site URL** laukā, vai kad tas ir tīkla galvenais domēns. Ja host ir tīkla galvenais domēns vai viens no dalīto checkout-formu galveno domānu, konfigurēti **Site URL** lauka, automātiskais saistīts domēna ieraksts tiek pārsaltots, lai dalītais galvenais domēns palikties pieejamām visiem sites, kas to izmanto.

**Stāvs** vai status mainīsies no **Pārbauda DNS** (Checking DNS) uz **Gatava** (Ready), ja viss ir labi iestatīts.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Ja klikšķiniet uz domēna nosaukuma, varat redzēt dažas opcijas iekšpus to. Atgrieziet uz šo ātri skatu:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stāvs:** Tas ir tas stāvoklis, kurā atrodas domēns. Kad jums pirms pievienojat domēnu, tā, iespējams, būs uz **DNS pārbaudes** stadiju. Šajā procesā sistēma pārbauda DNS ierakstus un apstiprina, ka tie ir pareizi. Pēc tam domēns tiek atrodīta **SSL pārbaudes** stadijā. Ultimate Multisite pārbauda, vai domēnā ir SSL sertifikāts vai nav, un kategorizē jūsu domēnu kā **Gatava** vai **Gatava (bez SSL)**.

**Vieta:** Subdomēns, kas saistīta ar šo domēnu. Mapejētais domēns parādīs šīs konkrētās vietnes saturu.

**Aktīva:** Jūs varat ieslēgt vai izslēgt šo opciju, lai aktivizētu vai deaktīvētu domēnu.

**Vai ir galvenais domēns?:** Jūsu klientiem var būt vairāki mapejtie domēni katram vietnei. Izmantojiet šo opciju, lai izvēlotu, vai tas ir galvenais domēns konkrētām vietnēm.

**Vai ir droša?:** Lai gan Ultimate Multisite pārbauda, vai domēnā ir SSL sertifikāts vai nav pirms to aktivizēšanas, jūs varat maniski izvēlēties, vai ielādēt domēnu ar vai bez SSL sertifikāta. Piezīmi: ja vietnei nav SSL sertifikāta un jūs mēģināt priekšlaicīt to ielādēt ar SSL, tas varētu jums radīt kļūdas.

### Mapejāt personīgu domēnu kā subvietnes lietotāja

Subvietnes administratorji var mapejāt personīgus domēnus no savas subvietnes admin panelis.

Pirms to, jums jāpārāda, ka ir aktivizēta ša opcija **Domānu mapejošanas** iestatījumiem. Skatiet attēlā zemāk.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Jūs varat arī noteikt vai konfigurēt šo opciju **Plāna** līmenī vai produktijas opcijās **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Kad jebkuršas šie opcijas ir ieslēgtas un subsites lietotājam atļauts mapeēt savus personīgus domānu, subsites lietotājs redz metaboks, kas ir uz **Account** lapas apakšpusē nosaukums **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Lietotājam var klikšķināt uz pogas **Add Domain**, un atvērs modeļa loga ar dažām instrukcijām.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Pēc tam lietotājam var klikšķināt uz **Next Step** un turpināt savas personīgas domānu pievienošanu. Viņš arī var izvēlēties, vai tas būs galvenais domāns vai ne.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Klikšķinot uz **Add Domain**, sākas proces, kas apstiprina un saņem DNS informāciju par personīgo domānu.

### Par domānu sinkronizēšanu (Domain Syncing)

Domānu sinkronizēšana ir process, kur Ultimate Multisite pievieno jūsu personīgo domānu jūsu hostings kontam kā papildu domānu **lai mapešana varētu darboties**.

Domānu sinkronizēšana automātiski notiek, ja jūsu hostings sniedzītājam ir integrācija ar Ultimate Multisite domānu mapešanas funkciju.)}$-Atsauce: šobrīd šie hostings sniedzītāji ir _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ un _Cpanel._

Kad aktivizēta hostings sniedzītāja integrācija, Ultimate Multisite var arī ieplūkot (enqueue) sniedzītāja pusējo DNS vai subdomānu izveides darbu jauniem veidoti vietnēm. Ja nav nekāda integrācija, kas to darbu gaidītu, fonu darbs tiek pārsaltots, lai izvairītos no neapritiskajiem (no-op) sarakstu ienasti. DNS un SSL pārbaudes mapeju domāniem turpinās veikties caur normālo domānu stadiju procesu.

Jums ir jāattivē šī integrācija Ultimate Multisite iestatījumos sadaļā **Integrācijas**.

![Integrācijas posms Ultimate Multisite iestatījumos, kas redz vispārējās hostingu sniedzējus](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hostings sniedzēju konfigurācijas saiti Integrācijas iestatījumu posmā -->

_Piezīmi: ja jūsu hostings sniedzējs nav viens no iepriekš minētajiem, jums būs jāveic manuāli sinhronizēšana vai jāpievieno domēns` (domain name)` savai hostings kontai._
