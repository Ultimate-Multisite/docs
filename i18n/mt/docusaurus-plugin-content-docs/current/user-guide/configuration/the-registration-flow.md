---
title: Il-Fluss tal Registrazzjoni
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Il Flusso di Registrazzjoni (v2) {#the-registration-flow-v2}

_**NOTA IMPORTANTI: Dan il artikolu jiferix għall-versjon 2.x ta Ultimate Multisite.**_

L-utenti jistgħu jsir registrati b'modijiet differenti nida networks tiegħek. Huma jistgħu j묵u l-form ta registrazzjoni tiegħek jew link x-sharabbli għall-plan pre-selezzat. Hemmna nġib bik kif l-utenti tiegħek jistgħu jsir registrati fuq networks tiegħek u min għaddiem wara li jissir registrati fuq networks tiegħek.

## L-Użu tal-Forma ta Registrazzjoni: {#using-the-registration-form}

Dan huwa l-proċediment standard ta registrazzjoni. Tista' tixgħelna una registrazzjoni b'una **checkout form** u dan huwa l-post li l-utenti tiegħek jmur biex jsir registrati fuq networks tiegħek u jisskrib għal plan. Tista' tkun għandek postijiet ta registrazzjoni multipli, kull unitie b'una forma ta registrazzjoni differenti jew għandek biex tgħmel dan.

Il-paġna di default għall-registrazzjoni hija [_**yourdomain.com/register**_ (http://yourdomain.com/register), iżda tista' tġiegħel dan fil-ħin li għandek fuq **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Wara li l-utenti jil-irriadi la paġna ta registrazzjoni tiegħek (solitament biex j묵u fuq bixogħdu **Sign in** jew **Buy now**), huma se jxu form ta registrazzjoni tiegħek.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Hawn huwa l-eżempju tal-checkout form kif juri fuq l-frontend:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Kull li għandhom aghlu biex jmillet kull il-field obbligatorju - email, username, password, ecc... - u jsalfu għall-plan jew jkonfermano l-indirizz ta' email tiegħom se jistgħu jsir registrati għal plan free jew plan a pagħha b'perjodu trial b'mod li ma għandhom informazzjoni ta' pagament.

Fuq la paġna "Thank you", huma se jxu messaggio li jgħidhom jekk għandhom biex jkonfermano l-indirizz ta' email tiegħom jew se l-website tiegħek hija giàma attivat u jistgħu jmur biex jiġu jippassju.

![Pajsija di ringrazjam tal-registrazzjoni](/img/frontend/registration-thank-you.png)

Jekk ittrabja konfirmazzjoni ta adresi e-mail, huma għandhom irridu l-inbox tal-e-mail tagħhom u jiklik fuq is-link ta verifikazzjoni. Il-sit taghom ma se jkun attivat meta l-adresi tagħhom la verifikat.

Jekk huma registratu b'plan pagat jew il-verifikazzjoni tal-e-mail mhix obbligatorja fuq nnetz ikoll, huma jkun sit taghom attivat is-sigurt dwar il-checkout u seġġibu link biex jidħol għad dashboard.

![Sit attivat mal-link biex jidħol għad dashboard](/img/frontend/site-activated.png)

## Użu ta link ieħor (Shareable Link): {#using-a-shareable-link}

Il-proċess ta registrazzjoni u l-użu ta link shareable huwa sostanzjalment isiemaw l-form ta registrazzjoni, il-differenza hija li b'użu ta link shareable, il-klijenti tagħkom jistgħu jkollu template jew proddett pre-selekt għall-checkout form (refertu secunza Pre-selecting products and templates via URL parameters) jew meta kien ittrabja kodon coupon (refertu secunza Using URL Parameters).

Il-proċess ta registrazzjoni se jkun isiemaw l-umhum: huma għandhom iġbeddu ism, username, adresi e-mail, isim il-sit u titoli, ecc... iżda il-plan jew template tal-sit jkun pre-selekt għalhom.

### Registrazzjoni b'Metodi Pagamenti Manuali: {#registering-using-manual-payments}

Jekk ma tistaqso u tebħu l-PayPal, Stripe jew qedwa minn gateway ta pagamenti ieħor offrot mill-Ultimate Multisite jew is-integrazzjonijiet tagħhom, tistaqsi u tebħu pagamenti manuali għall-klijenti tagħkom. B'mod dan, tistaqsi invoice għalhom biex jidawlu fuq proċessore ta pagamenti preferutu tiegħek wara li jirregistru fuq nnetz tiegħek.

Il-proċess ta registrazzjoni se jkun egzat isiemaw l-oħra, iżda fuq pajja ta registrazzjoni il-klijenti tagħkom se jistgħu jgħانو missaġġ li huma qed jipprovdu e-mail b'istruzzjonijiet ewlenin biex jikmalu il-pagament.

![Messaggio di pagamento manuale durante la registrazione](/img/frontend/registration-manual-notice.png)

E dopo che la registrazione è completata, vedranno le istruzioni di pagamento che hai impostato (e lo riceveranno anche via email).

![Istruzioni di pagamento mostrate dopo la registrazione](/img/frontend/registration-payment-instructions.png)

Le istruzioni di pagamento possono essere modificate su **Ultimate Multisite > Settings > Payments** attivando l'opzione di pagamento **Manual**:

![Interruttore del pagamento manuale con campo istruzioni di pagamento](/img/config/manual-gateway-settings.png)

Dopo che i tuoi clienti completano il pagamento manuale e ti inviano la conferma, devi **confermare manualmente il pagamento** per attivare l'adesione del cliente e il sito web.

Per farlo, vai su **Ultimate Multisite > Payments** e trova il pagamento del cliente. Dovrebbe ancora mostrare lo stato **Pending** (In attesa).

![Elenco dei pagamenti con pagamento manuale in sospeso](/img/admin/payments-list.png)

Clicca sul numero di pagamento e potrai cambiare il suo stato in **Completed** (Completato).

![Pagina dei dettagli del pagamento](/img/admin/payment-edit.png)

![Cambiare lo stato del pagamento in Completed](/img/admin/payment-status-completed.png)

Dopo aver cambiato il suo stato in **Completed**, dovresti vedere un messaggio **Activate membership** (Attiva adesione). Attiva questa opzione **on** (attiva) per attivare l'adesione e il sito web associati a quel cliente. Poi, clicca su **Save Payment** (Salva pagamento).

![Interruttore di attivazione adesione e pulsante Salva pagamento](/img/admin/payment-activate-membership.png)

Il tuo cliente potrà ora accedere al dashboard e a tutte le funzionalità a cui si è iscritto.
