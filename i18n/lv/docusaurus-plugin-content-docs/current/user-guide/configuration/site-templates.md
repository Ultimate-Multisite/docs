---
title: Siti šabloni
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Vietas šabloni (v2)

_**PĀRĶINĀJUMS: Šis raksts attiecas uz Ultimate Multisite versiju 2.x. Ja jūs izmantojat versiju 1.x,**_ **skatieties šo rakstu.**_

Mums mērķis, veidojot premium tīklu ar Ultimate Multisite, automāties iespējami visbiežākās procesus, nodrošinot klientiem elastību un dažādus variantus izvēlēties, kad veido savus vietnes. Vienkāršais veids, kā to sasniegt šo līdzsvienojumu, ir izmantot Ultimate Multisite Site Templates funkciju.

## Kas ir Vietnes šablons?

Kā nosaukums norāda, Vietnes šablons ir bazas vietne (boilerplate site), kas var lietot kā pamatu, kad veidat jaunas vietnes savā tīklā.

Tas nozīmē, ka jūs varat izveidot bazas vietni, aktivizēt dažādus pluginus, noteikt aktīvu tēmu un pielāgot to pēc visiem vēlmām. Tad, kad jūsu klienti veido jaunu kontu, viņi ne saņems parasti WordPress vietni bez nozīmīgas satura, bet saņems kopiju jūsu bazas vietnī ar visām pielāgojumiem un saturu jau iekļautus.

Tas skaista, bet kā man veidot jaunu vietnes šablonu? Tas ir tik vienkārši, cik var būt iespējams.

## Jauno Vietnes šablona izveide un rediģēšana

Vietnes šabloni ir vienkārši normālas vietnes jūsu tīklā. Ja jūs vēlaties veidot jaunu šablonu, jums pietiks doties uz **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Tas atvērs modalāku logi, kurā jautājums būs par **Vietnes nosaukumu, Vietnes domēnu/ceļa (Site Domain/path) un Vietnes veidu.** Ap **Vietnes veida** izvēlnes laukā pārliecinieties, ka izvēlaties **Site Template**.

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Jūs varat arī pievienot klientam skatu toti aprakstu, lai ieprieztu, ko šablonam ietver:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Formu apakās, jūs redzat **Copy Site** slēdzu skritu. Tas ļaus jums izveidot jaunu vietnes šabloni, kas būs bazaspunkts jau eksistējošam vietnes šablonam, palīdzot jums ietaupīt laiku, nevis veidot šablonu no nulles.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Vietnes šablona satura pielāgošana

Lai pielāgotu savu vietnes šablonu, vienkārši pārvietojieties uz tā dashboard panelu un veici to izmaiņas, kas jums nepieciešamas. Jūs varat izveidot jaunas postes, lapas, aktivizēt pluginus un mainīt aktīvo tēmu. Jūs varat pat ietikt Customizeri un mainīt vispusīgus pielāgošanas opcijas.

![Site template edit interface](/img/config/site-template-edit.png)

Visas šīs dati tiks kopētas, kad kliente izveido jaunu vietni uz pamata šim Vietnes šablonam.

### Uzlabotas opcijas

Ja jums ir kāds pieredze ar dažiem custom kodiem, jūs varat izmantot mūsu Search and Replace API, lai automātiski mainītu informāciju jaunajā vietnē pēc tās izveidošanas. Tas ir noderīgs lietām, piemēram, uzmainīt uzņēmuma nosaukumus "Par mums" lapā vai uzmainīt kontaktinformācijas e-pastu Kontakta lapā, gan tas vēl vairāk.

### Vietnes šablonu izmantošana

Esam, jūs izveidojusi daudus dažādus vietnes šablonus ar atšķirīgām dizainiem, tēmām un iestatījumiem. Kā jūs tagad varat tos izmantot savā tīklā?

Vispār ir divas pieproceses, ko varat izmantot (ne vienlaikus):

  * Piesaistīt vienu Vietnes šablonu katram no jūsu Plāna

**Vai**

  * Uzļaut klientiem izvēlēties vietnes šablonus sevi reģistrācijas laikā.

#### Režims 1: Piesaistīt Vietnes šablonu

Šajā režīmā jūsu klientiem nevarēs izvēlēties šabli, kad radīsies konta, bet tā vietā jūs definējat, kurš shablis jāizmanto katram no jūsu Plāna.

Lai to darītu, jums ir jāiet uz **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Tas aizved jūs uz **Edit Product** lapu. Ap **Product Options** sadaļas atrodiet tabuli **Site template** un izvēlieties opciju **Assign Site Template** no drop-down lauka. Tas atverīs sarakstu pieejamajiem shabli un ļaus jums izvēlēties tikai vienu shabli, kas ir noteikts šai produktam.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Režīms 2: Izvēlies pieejamu shabli

Šajā režīmā jūs piedāvāt klientiem izvēli procesu reģistrācijas laikā. Viņi varēs izvēlēties no dažādiem shabljiem, ko definējat produktam iestatījumiem. Jums ir iespēja ierobeigt šablu, no kurš viņi var izvēlēties, uz izvēlēto produktu. Tas ļaus jums turēt dažādus shabļu sērijas katram produktam, kas ir ideāli piemērots, lai izceltu dažādas funkcijas un pielikumus augstākas cenas produktos.

Rediģējot produktu:

Uz **Produkta rediģēšanas** lapas sadaļā **Produkta opcijas** atrodiet tabu **Santu šabloni** un izvēlieties **Izvēlējamais saites šablonis** no drop-down lauka. Tas atverās saskritu šablonu sarakstu, un ļauj jums izvēlēties to šablonu, kas vēlaties būt pieejams. Jūs to varat darīt, izvēloties tā uzvedību: **Pieejams**, ja vēlaties, lai šablonis būtu ietverts sarakstā. **Nepieejams**, ja vēlaties, lai šablonis neparādītos kā opcija. Un **Pre-izvēlēts**, ja vēlaties, lai viens no saraksta šabloņiem kļotu par autoizvēli.

![Izvēlies pieejami saites šablonus ar uzvedības opcijām](/img/config/product-site-templates.png)

### Auto režīms: Saites šablona izvēle atpildinājuma formā (Checkout form)

Ja vēlaties, lai visi jūsu saites šabloni būtu pieejami reģistrācijas laikā, vai neuzvērts papildu darbu, kas attiecībā uz katru produktu, ko jūs izveidzat, tad varat vienkārši noteikt saites šablonu izvēli zem savas **Atpildinājuma formā** (Checkout Form). Lai to darītu, dodieties uz **Ultimate Multisite > Atpildinājuma formāt** un nospiediet **Rediģēt** zem formām, ko vēlaties konfigurēt.

Tas atverās **Atpildinājuma formā rediģēšanas** lapu. Atrodiet lauku **Šablonu izvēle** (Template Selection) un nospiediet **Rediģēt** zem tā.

Parādīsies modalā loga. Zem lauka **Šablonu saites** (Template Sites) jūs varat izvēlēties un sarakstīt visus šablonus, kas vēlaties būt pieejami reģistrācijas laikā. Šie šablonis, ko jūs šeit noteiktie, būs pieejami neatkarīgi no tā, kāds produktu ir izvēlējies lietotājs.

![Šablonu izvēles lauks atpildinājuma formā rediģēšanā](/img/config/checkout-form-template-step.png)

Frontendā klientam reģistrācijas laikā parādās šablonu izvēle un viņš var izvēlēties sākumu dizainu savai jaunai vietnei.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Vietas templatizācijas opcijas

Ir vēl dažādas vietnes templatizācijas funkcijas, ko varat ieslēgt vai izslēgt Ultimate Multisite iestatījumos.

![Vietnes templatizācijas opcijas Ultimate Multisite iestatījumos](/img/config/settings-sites-templates-section.png)

#### Permitīt templatizācijas mainīšanu

Izslēgšana šīs opcijas ļaus jūsu klientiem mainīt templatzi, ko viņi izvēlējas reģistrācijas laikā pēc konta un vietnes izveidošanas. Tas ir noderīgs no klienta uzskatu, jo tas ļauj viņiem vēlāk izvēlēties templatzi, ja viņi atklās, ka sākotnējais izvēle nav labākais piemērots viņu konkrētām vajadzībām.

#### Permitīt lietotāji izmantot savu vietni kā templatizes

Tā kā subvietnes lietotāji izņem laiku veidot un dizainēt savu vietni, viņi var vilti un izmantot to kā vienu no vietņu templatizēm, kas ir pieejamas citās subvietnēs izveidošanas laikā jūsu tīklā. Šī opcija ļaus viņiem to sasniegt.

#### Mediju kopēšana templatizes duplikācijas laikā

Pārbaudot šo opciju, jūs kopējat mediju, kas ieplūkoties templatizētajā vietnē, ja tas tiek izveidota jauna vietne. Šo var pārslēgt katrā plānā.

#### **Ievairīt meklēji indeksēt vietnes templatizes**

Vietnes templatizes, kas apspriežtas šajā rakstā, ir boilerplate (izdevīti) bet joprojām ir daļa no jūsu tīkla, kas nozīmē, ka tās vēl ir pieejamas meklēji atrast. Šaīta opcija ļaus jums slüstēt vietnes templatizes, lai meklēji varētu tos indeksēt.

## Vietnes templatizācijas iepriekšējā iestatīšana ar auto meklēšanu un aizstāšanu

Ultimate Multisite vienā spēcīgākām funkcijām ir iespēja pievienot jebkuru tekstu, krāsas un izvēles laukus reģistrācijas formai. Kad mums šīs datus saglabājam, mēs varam tos izmantot, lai iepriekš iestatītu saturu konkrētās vietnes šablona daļās. Tad, kad ja visu jauna vietne publisē, Ultimate Multisite aizmainīs šos laukus ar reģistrācijas laikā ievadīto faktiskajiem informācijām.

 Piemēram, ja vēlaties saņemt jūsu lietotāja uzņēmuma nosaukumu reģistrācijas laikā un automātiski iestatīt uzņēmuma nosaukumu mājaslapā. Jums šajā šablona mājaslapā jāievada lauki, piemēram, kā attēlā zemāk (laikus jāievada ar dublu krūkliku - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Tad jūs varat vienkārši pievienot atbilstošu reģistrācijas lauku savā kasina formā, lai saglabātu šos datus. Tajākas kasina forma redaktors, ko izmantojat šablona izvēles laikā, ļauj jums iestatīt personīvās laukus kopā ar šablona izvēles:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Jūsu kliente tad var ievadīt šo lauku reģistrācijas laikā.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite tad automātiski aizmainīs šos laukus ar klientam sniegto datus.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Problemas risināšana "šablona pilna lauku" problēmai

Tas viss ir lieliski, bet mēs saskaramies ar nepatīkamu problēmu: tagad mūsu vietnes šabloni - kas var tiek apmeklēti mūsu klientiem - ir pilni nepatīkamiem laukiem, kas neizdev vielu.

Lai šo problēmu atrisinātu, mēs piedāvājam iespēju iestatīt nepatiesus vērtības (fake values) vietām un izmantot šīs vērtības meklēt un aizstāt to saturu jūsu templatās vietnēs, kam ir klienti.

Jūs varat piekļūt templatās placeholders redaktēšanai, dodoties uz **Ultimate Multisite > Settings > Sites**, un pēc tam, saraksta stūrī, noklikšķinot uz saites **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Tas aizved jūs uz placeholders satura redaktoru, kurā varat pievienot placeholders un to atbilstošu saturu.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
