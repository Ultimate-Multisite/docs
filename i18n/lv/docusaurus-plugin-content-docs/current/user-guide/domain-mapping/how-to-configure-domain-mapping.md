---
title: Kā konfigurēt domēnu kartēšanu
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Kā konfigurēt domēna kartēšanu (v2)

_**SVARĪGA PIEZĪME: Šis raksts attiecas uz Ultimate Multisite versiju 2.x.**_

Viena no jaudīgākajām premium tīkla funkcijām ir iespēja piedāvāt mūsu klientiem piesaistīt augstākā līmeņa domēnu savām vietnēm. Galu galā, kas izskatās profesionālāk: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) vai [_**joesbikeshop.com**_](http://joesbikeshop.com)? Tieši tāpēc Ultimate Multisite piedāvā šo funkciju iebūvētu, bez nepieciešamības izmantot trešo pušu pluginus.

## Kas ir domēna kartēšana?

Kā norāda nosaukums, domēna kartēšana ir Ultimate Multisite piedāvātā iespēja pieņemt pieprasījumu par pielāgotu domēnu un kartēt šo pieprasījumu uz atbilstošo vietni tīklā, kurai šis konkrētais domēns ir piesaistīts.

### Kā iestatīt domēna kartēšanu jūsu Ultimate Multisite tīklā

Lai domēna kartēšana darbotos, jums būs jāveic daži iestatījumi. Par laimi, Ultimate Multisite automatizē sarežģīto darbu jūsu vietā, lai jūs varētu viegli izpildīt prasības.

Ultimate Multisite instalēšanas laikā vednis automātiski nokopēs un instalēs **sunrise.php** norādītajā mapē. **Vednis neļaus jums turpināt, kamēr šis solis nebūs pabeigts**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Tas nozīmē, ka, tiklīdz Ultimate Multisite instalēšanas vednis ir pabeidzis jūsu tīkla iestatīšanu, jūs varat uzreiz sākt kartēt pielāgoto domēnu.

Ņemiet vērā, ka domēna kartēšana Ultimate Multisite nav obligāta. Jums ir iespēja izmantot WordPress Multisite iebūvēto domēna kartēšanas funkciju vai jebkuru citu domēna kartēšanas risinājumu.

Ja jums ir nepieciešams atspējot Ultimate Multisite domēna kartēšanu, lai dotu priekšroku citiem domēna kartēšanas risinājumiem, šo funkciju varat atspējot sadaļā **Ultimate Multisite > Settings > Domain Mapping**.

![Domēna kartēšanas iestatījumu lapa, kurā redzamas administratora pāradresācijas, kartēšanas ziņojuma un DNS opcijas](/img/config/domain-mapping-settings.png)

Tieši zem šīs opcijas jūs varat redzēt arī opciju **Force Admin Redirect**. Šī opcija ļauj jums kontrolēt, vai jūsu klienti varēs piekļūt savam administratora dashboard gan savā pielāgotajā domēnā un apakšdomēnā, vai tikai vienā no tiem.

Ja atlasīsiet **Force redirect to mapped domain** , jūsu klienti varēs piekļūt savam administratora dashboard tikai savos pielāgotajos domēnos.

Opcija **Force redirect to** **network domain** darīs tieši pretējo — jūsu klientiem būs atļauts piekļūt saviem dashboardiem tikai savā apakšdomēnā, pat ja viņi mēģinās pierakstīties savos pielāgotajos domēnos.

Savukārt opcija **Allow access to the admin by both mapped domain domain and network domain** ļauj viņiem piekļūt saviem administratora dashboardiem gan apakšdomēnā, gan pielāgotajā domēnā.

![Izvērsta administratora pāradresācijas nolaižamā izvēlne, kurā redzamas trīs pāradresācijas opcijas](/img/config/domain-mapping-redirect-options.png)

Pielāgotu domēnu var kartēt divos veidos. Pirmais ir kartēt domēna nosaukumu no jūsu tīkla administratora dashboard kā super administratoram, un otrais ir caur apakšvietnes administratora dashboard Account lapā.

Taču, pirms sākat kartēt pielāgoto domēnu uz vienu no apakšvietnēm savā tīklā, jums jāpārliecinās, ka domēna nosaukuma **DNS iestatījumi** ir pareizi konfigurēti.

###

### Pārliecinieties, ka domēna DNS iestatījumi ir pareizi konfigurēti

Lai kartēšana darbotos, jums jāpārliecinās, ka domēns, kuru plānojat kartēt, norāda uz jūsu tīkla IP adresi. Ņemiet vērā, ka jums ir nepieciešama tīkla IP adrese — tā domēna IP adrese, kurā ir instalēts Ultimate Multisite — nevis tā pielāgotā domēna IP adrese, kuru vēlaties kartēt. Lai meklētu konkrēta domēna IP adresi, mēs iesakām, piemēram, doties uz [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Lai pareizi kartētu domēnu, jūsu **DNS** konfigurācijā jāpievieno **A RECORD**, kas norāda uz šo **IP adresi**. DNS pārvaldība dažādiem domēnu reģistratoriem būtiski atšķiras, taču tiešsaistē ir daudz pamācību par šo tēmu, ja meklējat " _Creating A Record on XXXX_ ", kur XXXX ir jūsu domēna reģistrators (piem.: " _Creating A Record on_ _GoDaddy_ ").

Ja jums rodas grūtības panākt, lai tas darbotos, **sazinieties ar sava domēna reģistratora atbalstu**, un viņi varēs jums palīdzēt ar šo daļu.

Ja plānojat ļaut saviem klientiem kartēt viņu pašu domēnus, viņiem šajā daļā darbs būs jāveic pašiem. Norādiet viņiem uz viņu reģistratora atbalsta sistēmu, ja viņi paši nespēj izveidot A Record.

### Pielāgota domēna nosaukuma kartēšana kā Super Admin

Kad esat pierakstījies kā super administrators savā tīklā, varat viegli pievienot un pārvaldīt pielāgotus domēna nosaukumus, dodoties uz **Ultimate Multisite > Domains**.

![Domēnu saraksta lapa Ultimate Multisite](/img/admin/domains-list.png)

Šajā lapā varat noklikšķināt uz pogas **Add Domain** augšpusē, un tiks atvērts modālais logs, kurā varat iestatīt un aizpildīt **pielāgoto domēna nosaukumu** , **apakšvietni**, kurai vēlaties piemērot pielāgoto domēna nosaukumu, un izlemt, vai vēlaties to iestatīt kā **primāro domēna** nosaukumu vai nē (ņemiet vērā, ka varat kartēt **vairākus domēna nosaukumus uz vienu apakšvietni**).

![Add Domain modālais logs ar domēna nosaukumu, vietnes atlasītāju un primārā domēna pārslēgu](/img/admin/domain-add-modal.png)

Pēc visas informācijas ievadīšanas varat noklikšķināt uz pogas **Add Existing Domain** apakšā.

Tas sāks pielāgotā domēna DNS informācijas pārbaudes un iegūšanas procesu. Lapas apakšā redzēsiet arī žurnālu, lai varētu sekot līdzi procesam, kas tiek veikts. Šī procesa pabeigšana var aizņemt dažas minūtes.

Ultimate Multisite v2.13.0 arī automātiski izveido iekšējo domēna ierakstu, kad tiek izveidota jauna vietne uz hosta, kas jāuzskata par katras vietnes domēnu. Ja hosts ir tīkla primārais domēns vai viens no kopīgajiem checkout-form bāzes domēniem, kas konfigurēts **Site URL** laukā, automātiskais piesaistītā domēna ieraksts tiek izlaists, lai kopīgais bāzes domēns paliktu pieejams katrai vietnei, kas to izmanto.

Kad klients reģistrē jaunu domēnu, izmantojot Domain Seller v1.3.0 vai jaunāku versiju, Ultimate Multisite pēc noklusējuma automātiski piesaista reģistrēto domēnu klienta tīkla vietnei. Administratoriem vairs nav jāpievieno atsevišķs piesaistītā domēna ieraksts pēc veiksmīgas reģistrācijas, ja vien viņi nevēlas pielāgot opcijas, piemēram, primārā domēna karodziņu, aktivizācijas stāvokli vai SSL apstrādi.

**Stage** vai statusam vajadzētu mainīties no **Checking DNS** uz **Ready**, ja viss ir pareizi iestatīts.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Ja noklikšķināsiet uz domēna nosaukuma, varēsiet tajā redzēt dažas opcijas. Īsi tās apskatīsim:

![Domēna detaļu lapa ar posma, vietnes, aktīvā, primārā un SSL pārslēgiem](/img/admin/domain-edit.png)

**Stage:** Šis ir posms, kurā atrodas domēns. Kad pirmo reizi pievienosiet domēnu, tas, visticamāk, būs **Checking DNS** posmā. Process pārbaudīs DNS ierakstus un apstiprinās, ka tie ir pareizi. Pēc tam domēns tiks ievietots **Checking SSL** posmā. Ultimate Multisite pārbaudīs, vai domēnam ir SSL vai nav, un klasificēs jūsu domēnu kā **Ready** vai **Ready (without SSL)**.

**Site:** Apakšdomēns, kas ir saistīts ar šo domēnu. Piesaistītais domēns rādīs šīs konkrētās vietnes saturu.

**Active:** Varat ieslēgt vai izslēgt šo opciju, lai aktivizētu vai deaktivizētu domēnu.

**Is Primary Domain?:** Jūsu klientiem katrai vietnei var būt vairāk nekā viens piesaistītais domēns. Izmantojiet šo opciju, lai izvēlētos, vai šis ir konkrētās vietnes primārais domēns.

**Is Secure?:** Lai gan Ultimate Multisite pirms domēna iespējošanas pārbauda, vai domēnam ir SSL sertifikāts, varat manuāli izvēlēties ielādēt domēnu ar SSL sertifikātu vai bez tā. Ņemiet vērā: ja tīmekļa vietnei nav SSL sertifikāta un mēģināt piespiedu kārtā to ielādēt ar SSL, tas var izraisīt kļūdas.

### Pielāgota domēna nosaukuma piesaistīšana kā apakšvietnes lietotājam

Apakšvietņu administratori var arī piesaistīt pielāgotus domēna nosaukumus no savas apakšvietnes administratora Dashboard.

Vispirms jums jāpārliecinās, ka iespējojat šo opciju **Domain mapping** iestatījumos. Skatiet zemāk redzamo ekrānuzņēmumu.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Varat arī iestatīt vai konfigurēt šo opciju **Plan** līmenī vai produkta opcijās sadaļā **Ultimate Multisite > Products**.

![Pielāgoto domēnu sadaļa produkta rediģēšanas lapā](/img/config/product-custom-domains.png)

Kad kāda no šīm opcijām ir iespējota un apakšvietnes lietotājam ir atļauts piesaistīt pielāgotus domēna nosaukumus, apakšvietnes lietotājam **Account** lapā vajadzētu redzēt metabox ar nosaukumu **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Lietotājs var noklikšķināt uz **Add Domain** pogas, un tiks atvērts modālais logs ar dažām instrukcijām.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Pēc tam lietotājs var noklikšķināt uz **Next Step** un turpināt pievienot pielāgoto domēna nosaukumu. Viņš var arī izvēlēties, vai tas būs primārais domēns vai nē.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Noklikšķinot uz **Add Domain**, tiks sākts pielāgotā domēna DNS informācijas pārbaudes un izgūšanas process.

### Par domēnu sinhronizāciju

Domēnu sinhronizācija ir process, kurā Ultimate Multisite pievieno pielāgoto domēna nosaukumu jūsu hosting kontam kā add-on domēnu, **lai domēna piesaiste darbotos**.

Domēnu sinhronizācija notiek automātiski, ja jūsu hosting pakalpojumu sniedzējam ir integrācija ar Ultimate Multisite domēnu piesaistes funkciju. Pašlaik šie hosting pakalpojumu sniedzēji ir _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ un _Cpanel._

Kad hosta pakalpojumu sniedzēja integrācija ir aktīva, Ultimate Multisite var arī ievietot rindā pakalpojumu sniedzēja pusē veicamo DNS vai apakšdomēna izveides uzdevumu jaunizveidotām vietnēm. Ja neviena integrācija neklausās šo uzdevumu, fona darbs tiek izlaists, lai izvairītos no rindas ierakstiem, kas neko neveic. DNS un SSL pārbaudes piesaistītajiem domēniem turpina darboties, izmantojot parasto domēna posmu procesu.

Jums būs jāaktivizē šī integrācija Ultimate Multisite iestatījumos zem **Integration** cilnes.

![Integrāciju cilne Ultimate Multisite iestatījumos, kur redzami hosting pakalpojumu sniedzēji](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Ņemiet vērā: ja jūsu hosting pakalpojumu sniedzējs nav viens no iepriekš minētajiem pakalpojumu sniedzējiem, **jums būs manuāli jāsinhronizē vai jāpievieno domēna nosaukums** savam hosting kontam._
