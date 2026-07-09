---
title: Reģistrācijas plūsma
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Reģistrācijas plūsma (v2) {#the-registration-flow-v2}

_**SVIRTAS PIEZIŅAS: Šis raksts attiecas uz Ultimate Multisite versiju 2.x.**_

Klienti var reģistrēties ar dažādiem veidiem savā tīklā. Viņi var izmantot jūsu reģistrācijas formu vai dalīgo saiti preeslēgties iepriekš izvēlētā plānā. Šeit redzam, kā jūsu klientiem ir iespējams reģistrēties savā tīklā izmantojot pieejamus ceļus un kas notiek pēc viņu reģistrācijas.

## Reģistrācijas formās lietošana: {#using-the-registration-form}

Šis ir standarta reģistrācijas processa. Jūs izveidzat reģistrācijas lapu ar **checkout formu**, un tas ir vieta, kurā jūsu klientiem būs iespējams reģistrēties savā tīklā un preeslēgties plānā. Jūs varat turēt vairādas reģistrācijas lapas, katra ar dažādu reģistrācijas formu, ja vēlaties.

Defaulta lapa reģistrācijai ir [_**yourdomain.com/register**_](http://yourdomain.com/register), bet jūs varat to mainīt jebkurā laikā **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Pēc tam, kad lietotājs sasniedz jūsu reģistrācijas lapu (parasti noklikšķinot uz pogas **Sign in** vai **Buy now**), viņš redz jūsu reģistrācijas formu tur.

![Reģistrācijas forma redzama reģistrācijas lapā](/img/frontend/registration-form.png)

Šeit ir piemērs, kā izskatās checkout forma frontendā:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Viņiem pietiek aizpildīt visus obligātos laukus – e-pastu, lietotāja vārdu, paroli un tādus – un atmaksāt plāna maksājumu vai apstiprināt savu e-pasta adresi, ja viņi reģistrējas bez maksājuma informāciju (ja tas ir bezmaksas plānā vai maksājuma informācijas bez maksājuma perioda).

"Paldies" lapā viņi redz ziņojumu, kas viņiem pateic, vai viņiem ir jāapstiprina e-pasta adrese vai vai viņu vietne jau ir aktivizēta un viņi var sākt to izmantot.

![Paldies of atmiņas lapas pēc reģistrācijas](/img/frontend/registration-thank-you.png)

Ja nepieciešams e-pasta adrese apstiprināšana, tiem būs jāiet savā e-pasta kastē un jāklikšķina uz apstiprināšanas saiti. Jūs vietne neaktivizēsies, ja e-pasta adrese nav apstiprināta.

Ja tie ir reģistrējušies maksājamos plānus vai e-pasta apstiprināšana jūsu tīklā nav obligāta, viņu vietne aktivizējas pirms izmaksām un viņiem parādīs saiti iekļūt savā dashboard.

![Vieta aktivizēta ar saiti iekļūt savā dashboard](/img/frontend/site-activated.png)

## Izmantojot dalīšamu saiti: {#using-a-shareable-link}

Reģistrācijas process, izmantojot dalīšamu saiti, ir būtiskas līdzīga reģistrācijas formai, vienīgais atšķirība ir tā, ka izmantojot dalīšamu saiti jūsu klientiem var preces vai vietnes šablons iepriekš izvēlēts maksājuma formā (skatīt sadaļu Pre-selecting products and templates via URL parameters) vai var pievienots kupona kodu (skatīt sadaļu Using URL Parameters).

Reģistrācijas process būs tas pats: viņiem jāievada vārds, lietotājvārds, e-pasta adrese, vietnes nosaukums un tituls, etc... bet plāns vai vietnes šablons jau būs iepriekš izvēlēts.

### Reģistrācija ar manuāliem maksājumiem: {#registering-using-manual-payments}

Ja jūs neuzmanieties izmantot PayPal, Stripe vai jebkuru citu maksājuma portalu, kas piedāvā Ultimate Multisite vai tās papildu integrācijas, varat izmantot manuālus maksājumus saviem klientiem. Šāda veids ļauj jums nodrošināt faktūru viņiem, lai tos atmaksātu jūsu iepriekš izvēlētajam maksājuma procesatorim pēc tam, kad viņi reģistrējas jūsu tīklā.

Reģistrācijas process būs tieši tas pats kā উপরে, bet reģistrācijas lapā jūsu klientiem parādīs ziņojums, ka viņi saņems e-pastu ar turpmākajām instrukcijām maksājuma pabeigšanai.

![Manuāla maksājuma ziņojums reģistrācijas laikā](/img/frontend/registration-manual-notice.png)

Un pēc reģistrācijas pabeigšanas tieši redz, kādu maksājuma instrukcijas jūs iestatījāt (un tās saņem arī e-pastā).

![Maksājuma instrukcijas redzam pēc reģistrācijas](/img/frontend/registration-payment-instructions.png)

Maksājuma instrukcijas var izveidot **Ultimate Multisite > Settings > Payments** sekcijā, ieslēdzot **Manual** maksājuma opciju:

![Manuāla maksājuma regulētājs ar maksājuma instrukciju lauku](/img/config/manual-gateway-settings.png)

Pēc tam, kad jūsu klienti pabeidz manuālo maksājumu un nosūtīs jums apstiprinājumu, jums ir jā**apstiprina maksājums manula**, lai aktivizētu klienta pievienošanos un vietni.

To darīšanai dodieties uz **Ultimate Multisite > Payments** un atrodiet klienta maksājumu. Tas joprojām parādīs **Pending** (Pērkons) statusu.

![Maksājumu saraksts ar manuālo pērkona maksājumu](/img/admin/payments-list.png)

Noklikšķiniet uz maksājuma numura un varat izveidot tās statusu par **Completed** (Pabeigts).

![Maksājuma detaļu lapa](/img/admin/payment-edit.png)

![Statusa mainīšana uz Completed](/img/admin/payment-status-completed.png)

Pēc tam, kad mainīs tās statusu uz **Completed**, jūs redziet ziņojumu **Activate membership** (Aktivizēt pievienošanos). Ieslēdziet šo opciju **on** (ieslēdziet), lai aktivizētu klienta pievienošanos un vietni, kas saistīta ar šo klientu. Pēc tam noklikšķiniet uz **Save Payment** (Saglabāt maksājumu).

![Aktivizēt pievienošanos regulētājs un Save Payment pogas](/img/admin/payment-activate-membership.png)

Jums klientem tagad būs iespēja piekļūt dashboardam un visām funkcijām, kas viņi ir apmeklējis.
