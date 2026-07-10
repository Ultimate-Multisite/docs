---
title: Klienta konta lapas
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Jūsu Klienta Konta Lapa (v2) {#your-clients-account-page-v2}

_**SVIRTIE ATMIŅAS: Šis raksts attiecas uz Ultimate Multisite versiju 2.x.**_

Kad klienti abietojas plānā savā tīklā, viem ir piekļuve vietnei un tās dashboardam ar svarīgu informāciju par maksājumiem, pieejamību, domēniem, plāna ierobežojumiem un tā citi.

Šajā tutorialā mēs jums pamērojam klienta konta lapai un redzietat, ko jūsu klienti var redzēt un darīt tur.

## Konta Lapa {#the-account-page}

Kontas lapa ir pieejama, noklikšķinot uz **Account** (Kontas) vai līdzīgas darbības jūsu klienta dashboardā.

![Kontu menis klienta dashboardā](/img/account-page/account-menu.png)

Sovereign tenant tīklos Ultimate Multisite v2.13.0 saglabā šo klienta pārvaldības pieredzi galvenajā vietnē. Ja klient atvērš kontu, izdarīs kases apmeklējumus, maksājumu, faktūru, vietnes pārvaldīšanas, tematu mainīšanas vai domēnu mapiģināšanas darbības no sovereign tenantas, šie darbības atgriežas galvenajā vietnes klienta panelā, lai nodrošinātu, ka tīkla maksājumu un abietojuma ieraksti ir autoritāti.

Kad klienti nāk no sovereign tenantas, galvenajā vietnes klienta panelā var būt atgriešanās saite uz tenantas vietni. Atgriešanās saita parāda tikai tad, kad Ultimate Multisite var apstiprināt atgriešanās mērķi kā vienu no klienta vietnēm, kas novērš neapmieramu redirošanu un saglabā tenantas darbības plānu.

![Klienta konta lapas ievieksmes pārskats](/img/account-page/overview.png)

Pēc tam, kad klient noklikšķina uz to, viņš redz vispārīgu pārskatu par savu abietojumu, maksājuma adresi, faktūras, domēniem un vietnes ierobežojumiem, un var arī mainīt ****Site Template** (ja tas ir atļauts jūsu tīklā).

Viņš var arī mainīt abietojumu uz citu plānu vai pirkt citu paku vai pakalpojumu, ko jūs piedāvājat. Atspējiet katru sadaļu atsevišķi.

### Jūsu Medības pārskats: {#your-membership-overview}

Pirms jūsu klientu vietnes nosaukuma atrodas pirmajā blokā apkopojums par jūsu pašreizējām plānēm un pakalpojumiem/pakežām, kas ar to tika ieguvotas. Blokā ir redzams arī medības numurs, sākotnējo maksājumu summa, kādā maksā plāna un jebkura pakalpojuma/pakalpes, un cik reizes šī medība ir maksāta. Jūs varat redzēt, vai medība ir **Aktīva**, **Paziņota** vai **Atbalsta**.

![Medības pārskats, kas redz plānu, summu un maksājumu detaļus](/img/account-page/membership-card.png)

Šajā bloka zemāk jūsu klienti var redzēt blokus **Par šo vietni** un **Vietas ierobežojumi**. Šie bloki parāda visus ierobežojumus, kas ir saistīti ar jūsu plānu: diskus telpas, sarakstu (posts), lapas, apmeklējumu skaits un tas vēl. Šos ierobežojumus var konfigūrot katrā plāna lapā **Ultimate Multisite > Products**.

![Bloki "Par šo vietni" un "Vietas ierobežojumi", kas redz plāna ierobežojumus](/img/account-page/site-limits.png)

**Jūsu medībās** labajā pusē klienti var nospiegt **Izveidot**. Tas parādīs visus pieejamos plānus un pakalpes/pakalpes. Ja jūs izvēlaties citu planu, ierobežojumi būs tieši šī plāna, nevis pašreizējie medības ierobežojumi – neikas problēmas, vai jūs to apjaunojat vai turēties pie pašreizējā.

Tagad, ja jūsu klienti izvēlas ieguvit pakalpes vai pakalpes šejai pašreizējai medībai – piemēram, vairāk diskus telpas vai apmeklējumu skaits – pašreizējā medība neizveidās, bet tikai jaunas pakalpes tiks pievienotas tās.

Piezīmi: šajā medības izmaiņu lapā nevar pievienot kuponus kodus. Ja kliente izmantoja kupona kodu pirmajā medības ieguvšanā, tas arī piemērots šai jauna medībai.

### Maksājuma adrese atjaunināšana: {#updating-the-billing-address}

Uz konta attējam jūsu klienti var atjaunināt savu faktūras adresi. Viņiem pietiks klikšķināt uz **Update** blakus _Billing Address_ (Faktūras adrese).

![Billing Address section with Update button](/img/account-page/billing-address.png)

Jums parādīsies jauns loga, kurā jums pietiks ievadīt jaunu adresi un klikšķināt uz _Save Changes_ (Saglabāt izmaiņas).

![Update billing address form](/img/account-page/billing-address-form.png)

### Vietas mainīšana: {#changing-the-site-template}

Lai ļautu klientiem mainīt savus vietnes šablus, jums jāiet uz **Ultimate Multisite > Settings > Sites** un jāpaliek ieslēgta opcija **Allow Template Switching** (Ļaut šablu mainīšanu).

Tāpat, uz **Ultimate Multisite > Products** izvēlieties savas plānus un pārvietojies uz tabuli **Site Templates**. Nodrošinieties, ka opcija **Allow Site Templates** ir ieslēgta un pie **Site Template Selection Mode** (Vietas šablu izvēles režīms) ir izvēlēta opcija **Choose Available Site Templates** (Izvēlies pieejamos vietnes šabli).

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Jūs varat redzēt visus pieejamos vietnes šablus savā vietnē. Izvēlieties, kurus vēlaties nodrošināt kā pieejamus un kurus neuznodrēšanu klentiem, kas ir abonentēti šajā plānā. Piezīmi: šie opcijas arī ietekmē izmaksas formātu (checkout form), tāpēc jebkurais šablu, ko izvēlēties par **Not Available** (Neatkarīgs), neparādīsies reģistrācijas lapā šajā plānā.

Tagad jūsu klienti var klikšķināt uz **Change Site Template** (Mainīt vietnes šabli) savā konta lapā.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 parāda pārveidoto šablu mainīšanas panelu. Panelis sākas ar **current-template card** (aktuālā šabļa karti), lai klienti varētu redzēt, kurš šablis ir aktīvs pirms viņiem izvēlas atjaunojumu.

Piebilda persistenā grīva pieejamo vietnes šabloniem, kamēr klienti pārskata savas iespējas. Tas palīdz viņiem salīdzināt šablones, kas atļautas to planā, nezaudējot redzību pašreizējās izvēles par.

![Pieejamo vietnes šabloniem saraksts plānā](/img/config/site-templates-list.png)

Pēc tam, kad izvēlies to, ko vēlaties mainīt, jums tiks jautāts apstiprināt maiņu.

![Vietnes šablona maiņas apstiprinājuma dialogs](/img/account-page/template-switch-confirm.png)

Pēc tam, kad ieslēdzat apstiprinājumu un noklikšķināt uz **Process Switch**, jauns vietnes šablons tiks izmantots jūsu klienta vietnē.

Klienti var arī izmantot **Reset current template** no šī panelas, ja viņiem ir nepieciešams atjaunināt vietni uz pašreiz piešķirtajām šabloniem. Līdz kā mainīt citam šablonam, šablona atjaunināšana var pārrakstīt vietnes saturu, tāpēc klienti jāapstiprina tikai tad, kad saprotu atjaunināšanas darbību.

### Uzlabojot personalizētas domānu (Custom Domains): {#adding-custom-domains}

Jums arī būs iespēja klientiem pievienot personalizētu domānu šim planam savā kontes lapā. Lai ļaut klientiem izmantot personalizētās domānu, dodieties uz **Ultimate Multisite > Settings >** **Domain Mapping**.

Ieslēdziet opciju **Enable Domain Mapping**. Tas ļaus klientiem izmantot personalizētās domānu tīkla līmenī.

Neaizmirstiet arī pārbaudīt, vai domānu mapiņš ir ieslēdzis produkta bazē – jo jūs varat ierobežot produktu, lai neļotu klientiem izmantot personalizētās domānu.

Dodieties uz **Ultimate Multisite > Products**. Izvēlieties savu plani un dodieties uz **Custom Domains** lapu. Ieslēdziet opciju **Allow Custom Domains**.

![Custom Domains lapa ar Allow Custom Domains ieslēgšanas/izslēgšanas opciju](/img/config/product-custom-domains.png)

Tas ļaus visiem klientiem, kas ir abonentēti šajā īpašā plānā, izmantot savus domānos domānos (custom domains). Tagad Klientu konta lapā jūsu klienti var pievienot savu domāno ar noklikšķināšanu uz **Pievienot domānu** (Add Domain).

![Pievienot domānu pogas attēls klientu konta lapā](/img/account-page/add-domain-button.png)

Pirms atverējo loga visiem klientiem parādīs ziņojumu, kas sniedz instrukcijas, kā atjaunināt savus DNS ierakstus, lai šis domāno darbotu jūsu tīklā.

![DNS instrukcijas attēls pie domānas pievienošanas](/img/account-page/add-domain-dns.png)

Šo ziņojumu var rediģēt (jūs) **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** (Pievienot jaunu domānu instrukcijas).

![Jaunas domānas instrukcijas iestatījums domain mappingā](/img/config/settings-domain-mapping.png)

Šeit ir pilns skats uz domānu maptrapi (domain mapping) iestatījumu lapu:

![Domānas maptrapi iestatījumu pilna lapa](/img/config/settings-domain-mapping-full.png)

Pēc **Nākamais solis** (Next Step) noklikšķināšanas, jūsu klienti var pievienot savu domāno nosaukumu un izvēlēties, vai šis domāno būs galvenais. Piezīmi: jūsu klientiem ir iespējams izmantot vairākus domānos saviem vietnēm, tāpēc viņi var izvēlēties, kurš no tiem būs galvenais.

![Domānas nosaukuma ievades attēls ar galvenā domānas opciju](/img/account-page/add-domain-primary.png)

Pēc **Pievienot domānu** (Add Domain) noklikšķināšanas domāns tiks pievienots jūsu klienta kontam. Visu, kas viņiem jādarī tagad, ir izveidot šīs domānas DNS ierakstus savā domānas reģistrātorā.

### Parvadu mainīšana: {#changing-password}

Klientu konta dashboardā klienti var arī mainīt savu parvadu noklikšķināšanas uz **Mainīt parvu** (Change Password).

![Parvadu mainīšanas pogas attēls klientu konta lapā](/img/account-page/change-password-button.png)

Šis atrodas jaunu logu, kurā jūsu klientiem būs jāievada pašreizējais katra slēga un pēc tam tas, ko vēlams izmantot jauns katrs slēgs.

![Mainīt katru slēgu formā ar pašreizējām un jaunas katras slēgas laukus](/img/account-page/change-password-form.png)

### Bīstama zona: {#danger-zone}

Mums ir arī divas iespējas, kas redzamas **Bīstamajā zonā**: **Izslēgt vietni** un **Izslēgt kontu**. Tās ir abas bīstamajās zonas daļā, jo šie divi darbības nav atgriežami. Ja jūsu klientiem izslēgst savu vietni vai kontu, viņiem nevar to atgūt.

![Bīstama zona ar iespējām Izslēgt vietni un Izslēgt kontu](/img/account-page/danger-zone.png)

Ja jūsu klientam nospiedi jebkurā no šiem diviem, viņam parādīsies loga, kurā viņam būs jāpaliek ar iespēju izslēgt vietni vai kontu un viņam tiks brīdināts, ka šo darbību nevar atgriezt.

![Izslēgšanas vietnes apstiprinājuma dialogs](/img/account-page/delete-site-confirm.png)

![Izslēgšanas konta apstiprinājuma dialogs](/img/account-page/delete-account-confirm.png)

Ja viņi izslēgst savu vietni, viņu konta un pievienošanos joprojām nav izmaiņas. Viņi vienkārši zaudēs visu saturu savā vietnē. Ja viņi izslēgst savu kontu, visās vietnēs, pievienošanās un informācija par šo kontu būs zaudēta.
