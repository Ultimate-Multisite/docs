---
title: Integrazzjoni Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrazzjon ta Ultimate Multisite مع Zapier

F'una l-artiklu, ناقشنا [Webhooks](webhooks.md) u kif jidma nhammnu għall it-integrazzjoni ma app esterni.

L-użu tal-webhooks huwa ħafna kumplikat peress li jittiegħed għarfien avanzati fil-coding u li tgħleb il-payloads. L-użu ta **Zapier** huwa mod biex tqasimu dan problema.

Il-Zapier għandu integrazzjoni ma aktar min 5000 app, li jgħatti l-komunikazzjoni bejn app differenti aktar sħiħa.

Tista' tgħmli **Triggers** (attivaturi) li jidħlu meta xhappin juri avvenimenti fuq nnetz tiegħek (meta tikkunsidixja kontabbli u tivvji l-event `account_create`) jew tgħmli **Actions** (azzjonijiet) fuq nnetz tiegħek li jirriadu għall-avvenimenti esterni (meta tikkunsidixja membership ġdid fil-network tiegħek Ultimate Multisite).

Dan huwa magħmul biex jkun possibell min **Ultimate Multisite Zapier's triggers** u actions jidduq mill- [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Come tibda {#how-to-start}

F'primier, issaqa għal Ultimate Multisite fil-lista app tal-Zapier. Alternattivament, tista' tikkliċċja fuq [dan is-link](https://zapier.com/apps/wp-ultimo/integrations).

Tnaviga għall-dashboard tiegħek u tikkliċċja fuq bixib **+** **Create Zap** fil-sidebar sejn biex tgħmli setup tal-Zap جديد.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Tiridjetti għall-paġna ta kreaw il-Zap.

F'il-box tal-search tixtippa "wp ultimo". Tikkliċċja biex tixxjo l-opzjoni **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Wara li tixxjo l-app tiegħene, għażel l-event li disponibbli: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Mevdur dan nħalli lil Zapier aċċess għal **l-network tiegħek**. Tikkliċċja f'**Sign in** tiffaħ l-fenestra nuova li teħtieġ **API credentials**.

![Prompt di sign in Zapier per le credenziali API](/img/admin/webhooks-list.png)

Andrò al pannello di amministrazione della tua rete e naviga su **Ultimate Multisite > Settings** > **API & Webhooks** e cerca la sezione Impostazioni API (API Settings).

Seleziona l'opzione **Enable API** (Abilita API), perché è necessaria affinché questa connessione funzioni.

![Impostazioni API e Webhook con le opzioni API Settings e Enable API](/img/admin/settings-api-webhooks.png)

Usa l'icona **Copy to Clipboard** sui campi API Key e API Secret e incolla quei valori sulla schermata di integrazione (integration screen).

Nel campo URL, inserisci il tuo URL completo della rete, inclusa la protocollo (HTTP o HTTPS).

![Schermata di integrazione Zapier con i campi API Key, Secret e URL](/img/admin/webhooks-list.png)

Clicca sul pulsante **Yes, Continue** (Sì, Continua) per passare al passo successivo. Se tutto va bene, sarai accolto dal tuo nuovo account collegato! Clicca su **Continue** (Continua) per creare un nuovo trigger.

## Come creare un nuovo Trigger {#how-to-create-a-new-trigger}

Ora che il tuo account è collegato, puoi vedere gli eventi disponibili. Per questo tutorial scegliamo l'evento **payment_received**.

![Selezione dell'evento payment_received nel trigger di Zapier](/img/admin/webhooks-list.png)

Una volta selezionato l'evento e cliccato su **continue** (continua), apparirà un **test step** (passo di test).

![Passo di test di Zapier per il trigger](/img/admin/webhooks-list.png)

In questa fase, Zapier testerà se il tuo Zap può **recuperare il payload specifico per quell'evento**. Per eventi futuri dello stesso tipo, verrà inviata informazioni con la stessa struttura.

![Test del trigger di Zapier completato con successo con il payload](/img/admin/webhooks-list.png)

Fil-test bl-tutorial, il test kienfetti b'moddu u risponi informazzjoni ta l-payload. Il-informazzjoni ta cetri se tkun utli li tnuqna fil-istrutturar tal-azioni. Il trigger tiegħek jkun giàmmett u pronti biex titgħuqu mal-applikazzjonijiet oħra.

## Come tgħmli Actions {#how-to-create-actions}

Il-Actions jikelmu informazzjoni min triggers oħra biex ikunu nuovi entry f'nnetzwerk tiegħek.

F'**il ikunja l-istep tal action**, tal-Ultimate Multisite tagħmel, u l-opzjoni ta **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

F'istep li j segue, tista tgħmli l-authentication tiegħek, fl-mod kif għamelna f'**How to start**, jew tal-selezzjoni ta authentication giàmappiet. F'dan tutorial, nista nċidlu l-authentication li kien giàmmett min qabel.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Aħjar l-Action {#setting-up-the-action}

Dan huwa **istep primarju tal-action** u għandhom ħalli xi ħaġa differenti. Il-informazzjoni li tista tagħżel ewoluwa b'il-**Item**. L-Item huwa il-mod ta informazzjoni tal-nnetzwerk tiegħek, meta **Customers, Payments, Sites, Emails** u oħra.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Meta tista tagħżel item, il-form se **jorganizzaw biex jgħinlek b'il-fields li għandhom bżonn u opzjonali** għall-item selezzjonat.

Biex nipprova, meta tista tagħżel l-item **Customer**, il-fields tal-form se jgħinok b'kull ħaġa li għandna bżonn biex nfilli b'new Customer f'il-nnetzwerk.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Wara ma tfillit kull field marqué b'**required** u tiċċakka 'continue', skrin oħra se tkun tan-nothqa l-fields li filliti u il-fields li kienu għad jgħinok biex nfilli.

![Test ta azione Zapier li tista' virtuati u ma jkunx](/img/admin/webhooks-list.png)

Mentre l-test tiegħek jikkonplu u jkun esukċessfu, il-azione tiegħek hija konfigurat. Essu importanti wkoll verifika fuq la-network tiegħek se l-item kien creat b'test tal-azione tiegħek.
