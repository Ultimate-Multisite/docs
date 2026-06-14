---
title: Registrazio-fluxua
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Registrazioen Fluxu (v2)

_**IMPORTANTE NOTA: Lezkatu testu hau Ultimate Multisite 2.x-ean referentzia egiten du.**_

Erabiltzaileek irudiak bere nettoreko networkan erregistro dezatile. Bere formua erregistroaren edo pre-selektatutako plan batetik lehiak gabe link batekin erregistro dezatile. Aiaren da, zer modu bereenekin erregistro egin dezaten eta bere nettoreko networkan erregistro egin ondoren zer geratzen da irakurri dugu.

## Erregistro formua erabiliz:

Hau da prozesuaren batzari erregistroa. **checkout formua** duzun erregistro zehaldia sortuz, hori da lehiak bere nettoreko networkan erregistro eta plan bat erregistratzeko aukera izango duen leku. Zer dela biltzen duzu, irregistro formua ezberdinetik izan dezakezu, baina gehiago ere erregistro zehaldeak badu.

Erregistroaren default zehaldia da [_**yourdomain.com/register**_](http://yourdomain.com/register), baina hori gurean **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**-an edozean aldatu dezakezu.

Erabiltzaileak bere erregistro zehaldia (normalment, **Sign in** edo **Buy now** botoia klikizenean) aurkitzen duenean, hori da bere erregistro formua izango duen leku.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Hau da checkout formua frontendan jakin den bat inguruko testuaren bat:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Zer egin behar dute, hori da, emaila, username, paslora eta beste obligazio lekuak ditu, eta planari labarra edo ez-aldia (trial period) duen labarra erregistro dezatile edo labarra ere ez du testu informazio batarekin erregistratzeko.

"Thank you" zehaldearen ondorioz, bere emaila bidez konformatu behar duen eskatzen edo bere web-saila aldatu daiteke eta erabiltzea gurean aurkitzen dituen iragailu dezake duela informatzen duen testua ikusten du.

![Eskerrik hau osoa registroaren ondoren](/img/frontend/registration-thank-you.png)

Email postaren bideratzea beharrezkoa izan denean, irakurri eta linku bideratzeko klik egin behar dute emailaren inguruko letre-gailatuan. Emailaren bideratzea ez dutelako email adresa bideratuta jakin nahi du beharko du.

Paid plan batean registroatu edo network-ek onartzen duen email bideratzea obligazioa ez dagoenean, checkout-aren ondoren website-ak aktiboa izango da eta dashboard-era identifikatzeko linku bat erakusten daiet.

![Website aktiboa da, dashboard-era identifikatzeko linku dago](/img/frontend/site-activated.png)

## Partizipatu Linku Bat Erdatzeko:

Partizipatu linku bat erabiliz registroatu jakinaraztenprozesua registroaren formularioa baten beste parte dela, baina partizio linku bat erabiliz, kostaldeak checkout formularioan produkzio edo website template batek iraupiztuta dutelako (URL parametrikuntzaren bitartean produktu eta template-ak iraupiztuta jakinaraztenprozesua bideratu) edo gurea kodetzeko koda bat gehitu dezake (URL parametrikuntzak erabilizko bitartean).

Registroaren partizipatu jakinaraztenprozesua berrokatzen izango da: irakurri, irren, email adresa, website-aren emate eta tituluari, eta beste batzuk ditu... baina plan edo website template batek aldatuta dago.

### Pagamendu Manualek Erabiliz Registroatu:

Ultimate Multisite edo bere add-on integrazioei aukeratzen dituen PayPal, Stripe edo beste batzuk erabil ez dutenean, kostaldeak manual pagamenduak erabil dezake. Hau forma naturan, registroatu beharko duela irren eta gure network-ean registroatu ondoren, pagoa egin behar duen invoice batek emateko prozesua izango da.

Registroaren partizipatu jakinaraztenprozesua aipote berrokatzen izango da, baina registroaren lapurialdean kostaldeak pagamentoa amaitzen duen beste instruktu bat email batean aurkituko duela esan duen mensajua ikusten du.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Eta, registrationa ama gertu, irri emate informazioak ez da, baina berehala zerbitzuak egin behar dute.

Gertuzaren ondoren, bat erabiliz dut ordainaren instruktuak ikusten dute (eta emailrean ere aurkituko dute).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Ordainaren instruktuak aldatu dezakezu **Ultimate Multisite > Settings > Payments**-ean, **Manual** ordainaren opsioa onartu (toggle on) egin ondoren:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Guztuzko ordainak amaitu eta konfirmazioa bidali duenean, irriari eta websteiari joan behar duzu **ordainaren manualen konformazioa egin** dezakezu membership eta websteia aktibatzeko.

Hau egin dezakezu: **Ultimate Multisite > Payments**-era joandu eta ordainak ikusi. Hala ere, status **Pending** (Ez dago konformatu) izan behar du.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Ordainaren numerua klik egin eta statusa **Completed** (Konformatu) aldatu dezakezu.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Statusa **Completed** aldatu ondoren, **Activate membership** (Membership aktibatu) mezu bat ikusten duzu. Horrek **on** (aktibatu) egin behar duzu membership eta websteia aktibatzeko, eta ondoren klik egin behar duzu **Save Payment** (Ordainaren saldunea saldatu).

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Guztuzko ordainak aurretik dashboarda eta bere abonazioak egin dezake guzti funtzioak erabiliz lehiarako izango da.
