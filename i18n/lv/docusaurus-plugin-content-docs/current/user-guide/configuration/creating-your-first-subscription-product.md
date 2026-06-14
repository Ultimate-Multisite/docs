---
title: Izveidojot savu pirmo abīkuma produktu
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Izveido jūsu pirmo abonēšanas produktu (v2)

_**SVARĪTĀ PIEZI: Šis raksts ir tikai Ultimate Multisite versijas 2.x lietotājiem. Ja jūs izmantojat versiju 1.x,**_ **skatieties šo rakstu**_.

Lai sāktu veikt savu tīklu un sākāt ieguvit jūsu pakalpojumu pārdošanu potenciālajiem lietotājiem, jums ir nepieciešami dažādi abonēšanas opcijas. Kā izveidot šos produktus? Kādu veida produktus var piedāvāt? Šajā rakstā mēs apmeklēsim visu, kas jums nepieciešams zināt par produktiem.

## Produktu veids

Ar Ultimate Multisite jūs varat piedāvāt klientiem divas kategorijas produktus: **plānus** un **papildus (Order Bump)**. Papildus var iedzielti divos veidiem: **pakuoti** un **pakalpojumi**. Nākamajā rakstā mēs apskatīsim tostarpes un īpašības.

  * **Plānus**: Ultimate Multisite pamata produkts. Klientam var būt tikai pievienots pakalpojums, ja tas ir saistīts ar planu. Plāns nodrošina klientiem vienu vai vairākus vietnes (tas atkar no jūsu plāna konfigurācijām) ar ierobežojumiem, ko jūs noteikjat savā produkta rediģēšanas lapā.

  * **Pakuoti**: papildus, kas tieši ietekmē Ultimate Multisite planu funkcionālitāti. Tie maina ierobežojumus vai pievieno jaunas resursus, pluginus vai temus oriģinālamam planam, ko klientums ir ieguvisis. Piemēram, pamata plāns var ļaut 1000 apmeklējumus mēnesī un jūs varat piedāvāt pakuoti, kas paplašinās šo skaitu līdz 10 000.

  * **Pakalpojumi**: papildus, kas neizmaiņa Ultimate Multisite funkcionālitāti. Tas ir darbi, ko jūs veiciet klientam pirms viņa ieguvusiem planu. Piemēram, jūsu kliente var iegūt plani, kas ļauj vienu vietni, un arī maksāt par papildu pakalpojumu, kas nodrošina šo vietnes dizainu.

## Produktu pārvaldīšana

Daudziem, da daudziem **Products** (Produkti) Ultimate Multisite-ā sekmei (**Ultimate Multisite > Products**) var vienot ar plānus tradicionālajā hostingu vidē.

Ultimate Multisite-ā Products sekma definē to konstrukciju un ierobežojumus, kas piemērojas konkrētam produktam vai pakalpojumam. Šie konstrukcijas ietekmē produktu vai pakalpojuma aprakstu, cenu, nodokļus un atļaujas.

Šis sadaļa palīdz jums saprast šo svarīgu pamatu Ultimate Multisite-ā.

![Products list page](/img/config/products-list.png)

## Produktu pievienošana

Vai tas būs plāns, pakupe vai pakalpojums, kas ir ieejas vieta jauna elementa definēšanai, ir caur **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Interfeisā ir divas galvenās sadaļas. Kreistajā pusē ir vairāki tabuli, kas palīdz ar produktu definēšanu, un labajā pusē ir dažas sadaļas, kas definē produkta bazas cenu, to aktivam statuss un produktu attēlu.

![Product edit page overview](/img/config/product-edit-full.png)

### Apraksts (Description)

Bazas produktu informāciju var definēt sniedzot produktu nosaukumu un aprakstu. Šie identifikatori tiek izskatīti visur, kur ir nepieciešama produktu informācija, piemēram, plāna un cenas izvēlēšanā, faktūrās, upp upgrades un tāds.

![Product description section](/img/config/product-description.png)

### Cenas veids (Pricing Type)

Interfeisa labajā pusē var definēt bazas cenām.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite atbalsta triju dažādus cenas veidus. **Paid** (maksājamais) opcija prasa tīkla administratoru informāciju par produkta cenu un fakturēšanas intervālu.

### Cena (Pricing)

Cenas komponenta definē bazas produktu cenu un fakturēšanas intervālu.

![Cenozī un saglabāšanas sadaļa](/img/config/product-pricing-save.png)

tādējādi piemērots cena $29.99 ar iestatījumu 1 mēnesim, kas nozīmē, ka tas maksās $29.99 katru mēnesi. Līdzīgi, cena $89.97 ar iestatījumu 3 mēnešiem maksā šo summu katru kvartālu.

### Fakturēšanas cikli

Fakturēšanas cikli sadaļā norāda, cik bieži ir noteikts fakturēšanas intervalu, un to parasti saprotams līgumu vai fiksētās terminu kontekstā.

![Cenozī un saglabāšanas sadaļa](/img/config/product-pricing-save.png)

 Piemēram, ja produktam ir cena $29.99 ar intervalu 1 mēnesis un 12 fakturēšanas cikliem, tas maksās $29.99 katru mēnesi par produktu pirms nākamajiem 12 mēnešiem. Tas nozīmē, ka šāds iestatījums izveido fiksētu cenu terminu $29.99 mēnesī par 12 mēnesi un tad fakturēšanu beidz.

### Pārbaudīšanas periods (Trial Period)

Iespējot piedāvājuma pārbaudes laiku (trial period) skaitītāju administratoram ir iespēja noteikt produktu pārbaudes laiku.

![Cenozī un saglabāšanas sadaļa](/img/config/product-pricing-save.png)

Pārbaudes laikā klientiem ir brīvi lietot produktu, un tas neбуs fakturēts, kamēr pārbaudes laiks nav beidzies.

### Iestatījuma maksa (Setup Fee)

Jūs varat arī uzlabot maksu iestatījumu (setup fee) savam plānam.

![Cenozī un saglabāšanas sadaļa](/img/config/product-pricing-save.png)

Tas nozīmē, ka jūsu klientam pirmajā maksājumā (paliekot cenas plānā) būs jāmaksā papildu summa, kas atbilst maksei, ko jūs noteikāt šajā sadaļā.

### Aktīvs (Active)

Aktīvais skaitlis efektīvi definē, vai produktums ir pieejams klientiem jauniem reģistrācijām.

![Aktīvās skaitļa iestatījums](/img/config/product-active.png)

Ja jos ir eksistenti klienti šajā plānā, atslēdzot to skaitītāju (toggle) ienestamā stāvoklī, tas efektīvi izņem plānu no nākotnes reģistrācijas. **Eksistenti klienti šajā plānā turpinās saņemt maksājumus**, līdz viņi pārvietojies uz jaunu planu vai tiek izņemti no plāna.

### Produkta attēls

**Upload Image** pogas ļauj tīkla administratoram izmantot mediju bibliotēku izvēlēties vai uzlādēt produktu attēlu.

![Product image section](/img/config/product-image.png)

### Izņemt

**Delete Product** pogas izņem produktu no sistēmas. Tas parādās, kad produkts ir publicēts.

![Delete product section](/img/config/product-delete.png)

Atšķirībā no citām izņemšanām, produkts nav atlaidīts jebkurā "snieguma" (trash) stāvoklī. Tādējādi pēc izņemšanas šaite ir neatbalstams.

### Produkta opcijas

Kad definēti pamata līmeņa produktu informācijas, produktu opcijas palīdz tīkla administratoram precizēt produktu konkrētās atributus.

#### Vispārēji

**General** posmā definīti produkta vispārējie atzīmes, kas nepiemērojas jebkurām citām specifiskām produktiem tabulēm.

![General tab](/img/config/product-general-tab.png)

Izjaucināta **product slug** definē to slugu, ar kuru produkts tiek identifikāts URL adresēs un Ultimate Multisite citās vietās.

Ultimate Multisite atbalsta vairākus produktu veidus: Planus, Pakežas (Package) un Pakalpojumu (Service). **Product Options** tabulas dinamiski pielāgojas atkarībā no noteikta produkta veida.

**Customer Role** norāda to lomu, kas piešķirts klientam, kad tiek izveidots vietne. Tipiski lielākajiem tīkla administratoriem tas būs Ultimate Multisite default vai Administrator. Ultimate Multisite defaultā loma var iestatīt **Ultimate Multisite > Settings > Login & Registration** apakšpunktos.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Pārsniegšana un atgriešana (Up & Downgrades)

Šajā posmā jūs noteikjat, kādi ceļi ir pieejami klientam upgrade vai atgriešanās savā konkrētā līmenī.

Lai saprastu šo koncepciju, izvēlieties piemēru, kur niche Ultimate Multisite instalācija sniedz mācību vadības risinājumus saviem klientiem. Lai sasniegtu to ir definēti trīs plāni (Basic, Plus un Premium) un katram planam activēti konkrētās pluginus (par instrukcijām, kā aktivizēt pluginus, redziet vēlāk šajā sadaļā).

Ja Ultimate Multisite instalācija arī sniedz biznesa vietnēm vai e-komercijas vietnēm, šie plāni var prasa dažādus pluginus.

Šajā kontekstā nevar būt labi un problēmatiski ļaut klientiem pāriet no mācību risinājumu uz e-komercijas plānus, jo šajos plānos, cenās un ierobežojumos varētu nebūt atbilstošiem.

Tādējādi, lai ierobežotu klienta ceļu un novērstu notikumus, tīkla administratoris var definēt planu grupu un šajā grupā uzskaitīt plānus, kuram klientam ir iespējams pāriet.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Lai definētu planu grupu, noteikojiet atbilstošos plānus **planu grupā** sarakstā. **Produkta darījums** (product order) noteik, kā plāni ir sakārtoti un redzami no zemākā augstākajai līmenim.

Ultimate Multisite arī ietver **order bump** funkciju, kurā atbilstoši plānus var pievienot papildu produktus un pakalpojumu. Šos piedāvā klientam kā papildu lietas, ko var pievienot planiem kas laikā darījuma (checkout) vai upgrade.

#### Cenas variācijas

Cenī cena variāciju ļauj tīkla administratoram noteikt alternatīvas cenas līmeņus, kas atkarīgi no laika. Šaļojums ļauj piedāvāt dažādus maksājumu periodus, piemēram mēnesīgus, kvartālos, gadskārtas vai jebkurus citus maksājuma laikot. Piemēram, jūs varat noteikt produktu cenu $29.99/mėnībai ar atlaides gadskārtas opciju $249.99/gads.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Lai izveidotu cenas variācijas, ieslēdziet **Enable Price Variations** (Iespējot cenas variācijas) slēdzi un nospressiet pogu **Add new Price Variation** (Pievienot jaunu cenas variāciju).

![Product price variations](/img/config/product-price-variations.png)

Lai ievadītu variāciju, noteikiet laiku, periodu un variācijas cenu. Papildu variācijas var iestatīt nospressot pogu vēlreiz.

Piemēram, ja jūsu baziskas produktu cena ir $29.99/mėnībai, jūs varat pievienot:

  * **3 mēnešus** par $79.99 (mazā atlaide salīdzinājumā ar mēnesīgu)
  * **1 gads** par $249.99 (signifikanta atlaide gadskārtas zobminatām)

:::tip Maksājuma periodu slēdza attēlojam frontendā

Cenas variācijas vienasaciem nepievieno slēdzi vai skritušus frontendā kas kasina. Lai ļaut klientiem mainīt maksājuma periodus (piemēram, Mēnesīgs / Gadskārtas), jums ir jāievada **Period Selection** (Periodas izvēles) lauks formā. Redari [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) instrukcijas step-by-step.
:::

#### Nodrādinājumi

**Taxes** (Nodrādinājumi) atbilst nodrādinājumu iestatījumiem, kas noteikti **Ultimate Multisite > Settings > Taxes** un konkrētāk definēti nodrādinājumu līmeņus. Lai ieslēgtu nodrādinājumus un definētu piemērotos nodrādinājuma līmeņus, lūdzu skatiet dokumentāciju vietnē **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Ir ie iepriekšējā piemēra definējām vietējo nodokļu līmeni 7,25% klientiem Kalifornijā (Amerikas Savienība).

Kad nodokļa līmenis ir definēts **Ultimate Multisite > Settings > Manage Tax Rates** vairo, tas kļūst izvēlaties produktam līmenī.

![Taxes tab](/img/config/product-taxes.png)

Lai norādītu, ka produkts ir nodokļu objekts, iestatiet **Is Taxable** (Vai ir nodokļojams) skaitli uz aktīvo un izvēlieties attiecīgo nodokļu līmeni no "Tax Category" (Nodokļu kategorijas) dropdowna.

#### Vietas šabloni (Site Templates)

Esam savā zināšanās, vietas šabloni ir pilni WordPress vietnes, kas klonētas klientam vietnē sākumā viņa abonentācijas laika.

![Site Templates tab](/img/config/product-site-templates.png)

Tīrnieku administrator izveido un konfigurē šablonu vietni kā parasti WordPress vietni ar aktivizētiem un konfiguriētiem temām, pluginiem un saturu. Šablonu vietne klonēta klientam identiski.

Šajā tabulā tīrnieku administrator var noteikt šablonu vietņu uzvedību ja jaunās abonentācijas ir pieejamas. Lai izmantotu šablonus šajā plānā, iestatiet **Allow Site Templates** (Ļauj lietot vietas šablonus) aktīvās stāvoklī.

Kad **Allow Site Templates** ir deaktivizēts, klientiem šajā plānā nav iespējams izvēlēties šablonus, pat ja kas tas būtu iespējams ar kura visbiežākais pieejamības punkts būtu kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas kas

**D** **Default** iestums se sekojo kases formā. Ja tīkla administratoršs ir definējis šo lapa izvēles solījumus kases procesā un tas ir definēts ar šiem šobrīd pieejami šiem šobrīd, šis iestatījums ievēro šajos kases solījumos noteiktās direktīvas.

**A** **Assign Site Template** definēšana priekšlaicina konkrētu lapa izvēli. Tā kā rezultātā no kases procesa jebkuras lapas izvēles solījumus tiek atbalstīti.

Visbeidzami, **C** **Choose Available Site Templates** pārslēdz šobrīd definēto lapu izvēli ar tiem, kas izvēlēti šim iestatījumu. Var arī definēt iepriekš izvēlētu lapu, lai palīdzētu klientam izvēlēšanā.

Galvenokārt, ja tīkla administratoršs vēlas, lai lapas izvēles notiktu kases solījumos, pietiks ' _default_ ' iestatījums. Alternatīvi, lai atbalstītu lapas izvēles atbalsta un delegētu izvēli plāna iestatījumiem, var būt vēlami izmantot ' _assign new template_ ' vai ' _choose available site templates_ ' opcijas.

#### Sites

**Sites** lapa ir daļa no Ultimate Multisite ierobežojumu funkciju.

![Sites tab](/img/config/product-sites.png)

Šis iestatījums noteikta maksimālā skaitu, ko klientam var izveidot savā piešķiršanās apakš.

Lai aktivizētu ierobežojumu, ieslēdziet **limit sites** slēdzi aktīvā stāvoklī un ievadiet maksimālo lapas skaitu **site allowance** laukā.

#### Visits

**Visits** lapa ir vēl viens daļa no Ultimate Multisite ierobežojumu sistēmas. Šis iestatījums ļauj atzīmēt un pēc tam regulēt unikālu apmeklējumus klienta lapai.

![Visits tab](/img/config/product-visits.png)

No marketing perspektī, tīkla administratori var izmantot šo iestatījumu kā līdzekli, lai tiecinātu klientus uzlabot savu plānu, kad tiek atteikts ierobežojums. Šis iestatījums arī var palīdz administratoram nodrošināt tīklam un novērst pārāk daudz trafiku vietnēm, lai saglabātu sistēmas resursus.

Lai izmantotu šo funkciju, ieslēciet **limit unique visits** (ierobežot unikālos apmeklējumus) iestatījumu aktīvā stāvoklī un noteikiet maksimālo unikālu apmeklētāju skaitu **unique visits quota** (unikālo apmeklēju alokācijas) laukā.

Kad šis ierobežojums tiek atteikts, Ultimate Multisite nebudēs sniedzot klienta vietni, bet būs redzams ziņojums par to, ka ierobežojumi ir pārsniegti.

#### Lietotāji (Users)

Ultimate Multisite 'Users' ierobežojumi ļauj tīkla administratoram uzliekt ierobežojumus uz lietotāju skaitu, ko var izveidot un piešķirtu loma.

![Users tab](/img/config/product-users.png)

Lai iestatu ierobežojumu funkciju, ieslēciet **limit user** (lietotāja ierobežojums) iestatījumu aktīvā stāvoklī, slīdējot to pa labu.

Tālāk katram lomai, kuram jāieviecas ierobežojums, ieslēciet tās blakus iestatījumu aktīvā stāvoklī un noteikiet maksimālo augstākais ierobežojumu attiecīgajā laukā.

#### Post Types (Vielas tipa)

**Post Types** (Vielas tipa) tabula ļauj tīkla administratoram uzliekt detaļas ierobežojumus WordPressa plašā postu tipu skaņā.

![Post Types tab](/img/config/product-post-types.png)

Tā kā WordPress ir veidots šādi, postas un postu tipa ir svarīgs sastāvdaļa tās pamata funkcijās, un tāpēc Ultimate Multisite ierobežojumu sistēma ir izveidota, lai palīdzētu administratoram ieviekt un uzturēt ierobežojumus.

Lai iestatu šo ierobežojumu subsystems, ieslēciet **limit post types** (postu tipu ierobežojums) iestatījumu aktīvā stāvoklī, slīdējot to pa labu.

Kuru, katru postu ierobe limitēt, ieslēdziet to, slidot to pa labi un norādīto maksimālo augšcienu vērtību attiecīgajā laukā.

#### Diska vieta (Disk Space)

**Diskas vietas** (Disk Space) posmība ļauj tīkla administratoriem ierobežot, cik daudz vietas var izmantot klienti.

![Disk Space tab](/img/config/product-disk-space.png)

Tipiski WordPress multisite lietotnēs galvenie faili ir dalīti visos vietnēs, un individuāli izveidotas direktorijas, kas tās ietvaras šiem iestatījumiem un ierobežojumiem, tiek izveidotas mediju failiem un uzlādēm.

Lai aktivizētu diska lietošanas ierobežojumu, noteikiet **limit disk size per site** (vietas ierobežojuma maksimālo lielumu vietai) slīdrojot to pa labi.

Tālāk, ievadiet maksimālo augšcienu vērtību megbajtos laukā **disk space allowanc**.

#### Personalizēta domēna (Custom Domain)

Slīdojot šo opciju, jūs varat atļaut personalizētās domēnas īpaši šajā plānā.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Tēmas (Themes)

**Tēmas** (Themes) posmība produktumopcijās ļauj tīkla administratoram nodrošināt tēmas klientiem izvēles laikā un opcionāli priekšnoteikties tēmas stāvokli.

![Themes tab](/img/config/product-themes.png)

_**Piezīme: lai tēmas būtu pieejamas klientiem, tās jāveic tīklā administratoris.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

**Skaidrība** (visibility) opcija definē, vai šī tēma ir redzama klientam, kad viņš apsver savu vietnes **Apkārtojums > Tēmas** (Appearance > Themes) posmību. Noteikšana šai opcijai **Hidden** (Slēpta) atņem tēmu redzamību un tādējādi ierobežo iespēju izvēlēties un aktivizēt to.

![Themes tab](/img/config/product-themes.png)

**Uzvedības** (behavior) izvēle ļauj tīkla administratoram definēt tēmas stāvokli, kad tiek izveidota klientas vietne.

Latīgā stāvoklī tēmas lietošana ir pieejama klientam pašizvēles veidā. Atšķirīgi, **Nav pieejam** stāvoklī no klientam tiek atņemta iespēja tēmu aktivizēt. Pēdējais ir **Forcēt aktivizēt** opcija, kas priekšlaicina un aktivizē tēmu, izmantojot to kā defaultu, kad veidams vietni.

#### Plugins

Līdzīgi kā Tēmām (Themes) tabā, Ultimate Multisite ļauj tīkla administratoram noteikt plugins redzamības līmeni klientiem, kā arī viņu stāvokli ja tiek veidama jauna vieta.

![Plugins tab](/img/config/product-plugins.png)

**Redzamības** (visibility) drop-down menu ļauj pluginam būt vai slēptam no klientam, kad to redz klienta vietnē, izmantojot Plugins menu opciju.

Tīkla administratoram var vēl vairāk manipulēt ar plugins uzvedību, izmantojot behavior drop-down menu opcijas.

![Plugins tab](/img/config/product-plugins.png)

**Default** (Default) izvēle ievēro pluginu stāvokli, kas definēts klientam izvēlētajā vietnes šablona (site template). Tādējādi plugins, kas aktivizēti šablona laikā, paliek aktivizēti, kad šabloni klienta vietnē tiek klonēts.

**Forcēt aktivizēt** (Force Activate) stāvoklī vietu veidamas pluginu aktivā, un atšķirīgi **Forcēt deaktivēt** (Force Inactivate) noaktivizē pluginu veidamas vietnes laikā. Abos gadījumos klientam var manālas izmaiņas veikt pluginu stāvoklī ar savu WordPress Plugins menu.

Налаштування **Force Activate & Lock** працює схожим чином, але запобігає зміні стану плагіна клієнтом. Таким чином, налаштування Force Activate та Lock змусить плагін перейти у активний стан і не дозволить клієнту його деактивувати. Аналогічно, налаштування **Force Inactivate & Lock** змусить плагін перейти у неактивний стан і не дозволить користувачу активувати плагін.

Адміністратор мережі може захотіти розглянути налаштування Force Activate & Lock та Force Inactivate & Lock у поєднанні з шаблонами сайту як плагіни, оскільки стани плагінів у шаблонах можуть бути змінені цими налаштуваннями, якщо вони вибрані.

#### Обмеження скидання (Reset Limitations)

Вкладка **Reset Limitations** скидає всі користувацькі обмеження, визначені для продукту. Щоб скинути обмеження, натисніть кнопку **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Щоб підтвердити дію, переведіть перемикач **confirm reset** у активний стан праворуч і натисніть кнопку **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Редагувати, дублювати або видалити продукт

Існуючі продукти можна редагувати, дублювати або видаляти, перейшовши у розділ **Ultimate Multisite > Products** та навівши курсор на назву існуючого продукту.

![Product hover actions](/img/config/product-hover-actions.png)
