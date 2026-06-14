---
title: Registreerimise protsess
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Registreerimisviis (v2)

_**TÄHTIS NOTE: See artikli viitab Ultimate Multisite versioonile 2.x.**_

Kliendid saavad registreeruda oma võrku erinevate viisil. Nad võivad kasutada teie registreerimispilti või jagatavale linkile eelvalitud plaanile. Siin näitamme, kuidas teie kliendid saavad registreeruda oma võrkule kasutades saadaval olevate teeadega ja mida saab pärast registreerimist teha.

## Registreerimise formaati kasutamine:

See on standard registreerimeprotsess. Te luute registreerimislehtiga **checkout form** (salduvorm), ja siia kliendid lähen oma võrku registreerimiseks ja plaanile pereks. Saate olla mitme registreerimise lehti, igaüks erineva registreerimise formaadiga, kui soovite.

Oletustelele registreerimisleht on [_**yourdomain.com/register**_](http://yourdomain.com/register), kuid saate seda muutuda millalgi **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**-st.

Kui kasutaja jõuab teie registreerimise lehtile (loendades tavaliselt **Sign in** või **Buy now** nupuga), näeb ta siias oma registreerimise formaadi.

![Registreerimiformati esitamine registreerimislehel](/img/frontend/registration-form.png)

Siin on näide checkout formist selliselt, nagu see esitub etendil:

![Etendi checkout registreerimiformat](/img/config/checkout-frontend-registration.png)

Kliendid peavad lihtsalt täitmise kõikid pakutud valikud – e-posti aadressi, kasutaja-nime, parooli jne... – ja maksma plaanile või kinnitama oma e-posti aadressi, kui registreeruvad tasuta plaanile või maksutulisele plaanile, millel on prooviväljakohang ilma maksutundeta.

"Thank you" lehel nad näevad sõnumi, mis ütleb, kas neil tuleb kinnitada e-posti aadressi või kas nende veebisait on juba aktiveeritud ja nad võivad selle kasutamist alustada.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Kui e-posti aadressi kinnitamine vajalik, siis peavad kasutajad minema oma sähköpostikasti ja klõpsama kinnituslinkiga. Kui e-posti aadressi ei kinnitatakse, ei aktiveerdu veebilehte.

Kui kasutaja on registreerunud maksulise plaani all või e-posti kinnitamine ei ole teie võrku jaoks majanduslikult vajalik, siis veebileht aktiveeritub ostaoleku pärast ja teil leitud linki oma dashboardi sisse logimiseks.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Jaotatava linki kasutamine:

Jaotatava linkiga registreerimise protsess on põhjalikult sama kui registreiseerimisform, erinevus on see, et jaotatava linkiga saate oma klientidele ostaoleku vormis eelvalitud toote või veebilehttemplaati (vaata osakku Pre-selecting products and templates via URL parameters) või võib lisada kuponikoodi (vaata osakku Using URL Parameters).

Registreerimise protsess on sama: peavad täitmend oma nime, kasutaja-nime, e-posti aadressi, veebilehtnime ja otsingut, jne... kuid plaani või veebilehttemplaati on juba eelvalitud.

### Manuaalsete maksude abil registreerimine:

Kui te ei soovi kasutada PayPalit, Stripe'i või Ultimate Multisite'ilt või selle lisamoodulest pakutud muid maksuportaalid, saate klientidele manuaalseid makse kasutada. See võimaldab teil neile veidi lahenduse (invoice) genereerida, mida nad võivad maksuda teie lehe registreerumise pärast oma eelmiselt valitud maksuprotsessoril.

Registreerimise protsess on täpselt sama nagu eures, kuid registreerimispildil näevad klientid sõnumi, et nad saavad e-posti, kus on lisajärgne juhised maksude lõpetamiseks.

![Manua maksutuse sõnum registreerimise ajal](/img/frontend/registration-manual-notice.png)

Registratsiooni pärast lõpetamist näevad kasutajad sellele maksu juhiseid, mida teile seadete kuril **Ultimate Multisite > Settings > Payments** abil on aktiveerinud (ja saavad seda samuti e-posti ka).

![Maksu juhised registreerimise pärast näed](/img/frontend/registration-payment-instructions.png)

Maksu juhiseid saab muuta **Ultimate Multisite > Settings > Payments** kuril **Manual** maksutuse valik aktiveerimist pärast seda, kui olete selle aktivate.

![Manua maksutuse lühend ja maksu juhiste väljeldus](/img/config/manual-gateway-settings.png)

Kui teie kliendid suoritasid manua maksuga ja saadiksin teile kinnituse, peate **manuaalselt kinnitama makse**, et aktiveerida kliendi li membership ja veebisait.

See teha jaoks läksake **Ultimate Multisite > Payments** kuril ja leiate kliendi maksu. See peaks endiselt näitamise **Pending** staatust.

![Makside loend manua maksuga pending](/img/admin/payments-list.png)

Klikige makse numbriga, ja saate selle staatust muuta **Completed**.

![Makse detaili leht](/img/admin/payment-edit.png)

![Maksu staatuse muutmine Completediks](/img/admin/payment-status-completed.png)

Statiuse muutmise pärast **Completed** näete **Activate membership** - sõnumi. Aktiveerimiseks aktiveerige see valik **on** ja aktiveerige kliendi li membership ja veebisaidi, mis selle kliendiga seotud on. Seejärel klikige **Save Payment** (Salvesta makse).

![Membership aktiivimise lühend ja Save Payment nupp](/img/admin/payment-activate-membership.png)

Teie klient peaks nüüd pääsemise dashboardile ja kõikidele funktsioonide kasutama.
