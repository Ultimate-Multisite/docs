---
title: Izveidot atlaides kodu
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Izvēlnos kodu (v2)

_**SVARĪTIE PIEMĒRUMS: Šis raksts attiecas uz Ultimate Multisite versiju 2.x.**_

Ar Ultimate Multisite jūs varat izveidot atlaides kodus, lai sniegtu saviem klientiem atlaides uz savām abonentēm. Un to izveide ir viegli!

## Izveide un rediģēšana atlaides kodiem {#creating-and-editing-discount-codes}

Lai izveidotu vai rediģētu atlaides kodu, pārvietojieties uz **Ultimate Multisite > Discount Codes**.

![Atlaides kodu saraksts — tukšs statuss pirms attiecīgajos kodiem](/img/config/discount-codes-empty.png)

Tajā vietā jums būs saraksts par atlaides kodiem, ko jūs jau izveidojat.

Jūs varat klikšķināt uz **Pievienot kodu** (Add Discount Code), lai izveidotu jaunu kuponu, vai varat rediģēt tos, kurus ir, pārvietojot kursori uz viņiem un noklikšķinot uz **Rediģēt** (Edit).

![Atlaides kodu saraksts ar hover darbībām, kas parāda Rediģēt un Dzēst links](/img/config/discount-codes-list-hover.png)

![Pievienot atlaides kodu pogas attēlā galvenajā sākuma apakšda](/img/config/discount-codes-add-button.png)

Jūs tiks pārvietots uz lapu, kur izveidoti vai rediģēti jūsu kupona kodu. Šajā piemēra mēs izveidosim jaunu.

![Atlaides kodu rediģēšanas lapa ar rediģēšanas sekciju visiem redzami](/img/config/discount-code-edit.png)

Izskatīsim, kas ir pieejams šeit:

**Ievadi atlaides kodu:** Tas ir tikai jūsu atlaides koda nosaukums. Šis nav tas kod, ko jūsu klientiem būs jāizveido ap maksājuma formā.

**Apraksts:** Šeit jūs varat īsi aprakstīt, kurš ir šis kupona kodu.

![Atlaides koda nosaukuma un apraksta lauki rediģēšanas lapas augšda](/img/config/discount-code-description.png)

Jūs varat arī skatīties atlaides kodu kā aktīvu vai neaktīvu:

![Atlaides koda aktuālais statuss](/img/config/discount-code-active.png)

**Kupona kodu:** Šeit jūs definat, kurš kod klientiem būs jāievada maksājuma laikā.

![Kupona koda laukums, kurā atkarības laikā klientam ievada kodu apmeklēšanai](/img/config/discount-code-coupon-field.png)

**Atlaide:** Šeit jūs varat noteikt gan **procentu**, gan **fiksētu summu** savai atlaides kodam.

![Atlaides summa iestatījums ar procentiem vai fiksētu summu dropdownu](/img/config/discount-code-amount.png)

**Pietiekt atjauninājumiem:** Ja šaļūna ir izslēgta, šis atlaides kodas kodu piemēro tikai **pirmajai maksājumam**. Visām citām maksājumiem nav atlaides. Ja šaļūna ir ieslēgta, atlaides koda codes var būt veids pirms visiem nākamajiem maksājumiem.

**Iestatījums par izvietojuma maksu:** Ja šaļūna ir izslēgta, kupona kodu **neietver nekādu atlaidi ordering iestatījumam**. Ja šaļūna ir ieslēgta, jūs varat noteikt (procentu vai fiksētu summu), kas šis kupona koda kodas piemēro ordering iestatījuma maksu.

![Iestatījumi par atjauninājumiem un izvietojuma maksu atlaides ieslēgšanas/izslēgšanas opcijas](/img/config/discount-code-renewals.png)

**Aktīvs:** Manā rokas, jūs varat manā manuāli aktivizēt vai deaktvēt šo kupona koda kodu.

![Aktivizācijas opcija, lai manā manuāli ieslēgtu vai izslēgtu atlaides kodu](/img/config/discount-code-active.png)

**Attīstītās opcijas (Advanced Options)** sadaļā mums ir šādi iestatījumi:

![Atlaides koda attīstītas opcijas](/img/config/discount-code-advanced.png)

**Izmantojumu ierobežojums:**

  * **Izmantošanas reizes (Uses):** Šeit jūs varat redzēt, cik reizes atlaides kodu ir izmantots.

  * **Maksimālas lietošanas reizes (Max uses):** Tas ierobežo to, cik reizes lietotāji var izmantot šo atlaides kodu. Piemēram, ja jūs šeit ievietojat 10, kupona kodu var izmantot tikai 10 reizes. Pēc šī ierobežojuma kupona koda kodu nevar izmantot vēl.

![Izmantošanas reizi iestatījums ar pašreizējās lietošanas skaits un maksimālas lietošanas reizes lauku](/img/config/discount-code-limit-uses.png)

**Sākuma un samazināšanas datumi:** Šeit jums būs iespēja pievienot sākuma datumu un/vai samazināšanas terminu savam kuponam.

![Sākuma un samazināšanas datumu lauki atkarībā no atlaides koda grafiku](/img/config/discount-code-dates.png)

**Iegribi produktiem:** Ja ieslēdzat **Select products** (Izvēlēties produktus), jums tiks redzami visi jūsu produkti. Jums būs iespēja manālie izvēlēties (ieslēdzot vai izslēdzot), kurš produkts var pieņemt šo kupona kodu. Produkti, kuri ir ieslēdzti kārtībā šeit, nevis radīs nekāda izmaiņa, ja jūsu klienti mēģinās to izmantot šo kupona kodu pret saviem produktiem.

![Iegriba produktu sadaļa ar produkta atkarības slēdžiem](/img/config/discount-code-limit-products.png)

Pēc visām šiem opcijām iestatīšanas pēc tam nospiediet **Save Discount Code** (Saglabāt kupona kodu), lai saglabātu savu atlaidi un tas ir beidzies!

![Save Discount Code pogas pogas rediģēšanas lapas apakšējā daļā](/img/config/discount-code-save.png)

Kupona tagad ir jūsu sarakstā, un no tā jūs varat nospiedēt, lai to **edit** (redigētu) vai **delete** (izslēdzētu).

![Kupona koda rinda sarakstā ar Hover darbību Edit un Delete](/img/config/discount-codes-list-hover.png)

###

### URL parametru izmantošanu: {#using-url-parameters}

Ja vēlaties pielāgot savas cenu tabulas vai izveidot skaistu kupona koda lapu vietnei un vēlaties automātiski lietot atlaidi kodu jūsu kasina formā, jūs to varat darīt ar URL parametrus.

Vispirms jums ir jāiegūst dalīgs saiti savam plānam. Lai to daritu, dodieties uz **Ultimate Multisite > Products** un izvēlieties planu.

Nospiediet pogu **Click to Copy Shareable Link** (Nospiediet, lai kopētu dalīgo saiti). Tas nodrošinās jums dalīgo saita šim konkrētajam planam. Mums ir sniegts dalīgs saits [_**mynetworkdomain.com/register/premium/**_].

![Produkta lapa ar dalīgo saita pogu](/img/config/products-list.png)

Lai lietotu savu atlaides kodu šim īpašam plānā, vienkārši pievienojiet parametru **?discount_code=XXX** URL adrese. Kur **XXX** ir kupona kodu.

Mums piemēram, mēs to kupona kodu **50OFF** tur applicationim šim īpašam produktam.

URL adrese šim īpašam planam un ar 50OFF atlaides kodu būs: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
