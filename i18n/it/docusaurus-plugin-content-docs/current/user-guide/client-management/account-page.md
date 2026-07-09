---
title: Pagina Account cliente
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# La pagina Account del tuo cliente (v2)

_**NOTA IMPORTANTE: questo articolo si riferisce a Ultimate Multisite versione 2.x.**_

Quando i clienti si iscrivono a un piano sulla tua rete, ottengono accesso a un sito web e al suo Dashboard con informazioni importanti riguardanti i loro pagamenti, abbonamenti, domini, limitazioni del piano, ecc...

In questo tutorial, ti guideremo attraverso la pagina Account del cliente e vedrai cosa i tuoi clienti possono vedere e fare al suo interno.

## La pagina Account

La pagina Account è accessibile facendo clic su **Account** all'interno del Dashboard del tuo cliente.

![Menu Account nel Dashboard del cliente](/img/account-page/account-menu.png)

Sulle reti con tenant sovrani, Ultimate Multisite v2.13.0 mantiene questa esperienza di gestione del cliente sul sito principale. Se un cliente apre azioni di account, checkout, fatturazione, fattura, gestione del sito, cambio template o mappatura del dominio da un tenant sovrano, l'azione rimanda al pannello cliente del sito principale, così i record di fatturazione e abbonamento della rete restano autorevoli.

Quando il cliente arriva da un tenant sovrano, il pannello cliente del sito principale può includere un link di ritorno al sito del tenant. Il link di ritorno viene mostrato solo quando Ultimate Multisite può convalidare la destinazione di ritorno come uno dei siti del cliente, evitando reindirizzamenti arbitrari e preservando al tempo stesso il flusso di lavoro del tenant.

![Panoramica della pagina Account del cliente](/img/account-page/overview.png)

Dopo che un cliente fa clic su di essa, vedrà una panoramica del suo abbonamento, indirizzo di fatturazione, fatture, domini, limitazioni del sito, e potrà anche modificare il ****Template del sito** (se è consentito nella tua rete)**.

Può anche cambiare l'abbonamento passando a un altro piano, oppure acquistare un altro pacchetto o servizio che offri. Diamo un'occhiata a ciascuna sezione separatamente.

### Panoramica del tuo abbonamento:

Il primo blocco subito sotto il nome del sito web dei tuoi clienti mostra una panoramica del loro piano attuale e dei servizi/pacchetti acquistati insieme a esso. Il blocco mostra anche il numero dell'abbonamento, l'importo iniziale pagato, quanto costano il piano ed eventuali servizi/pacchetti e quante volte sono stati addebitati per questo abbonamento. Possono anche vedere se l'abbonamento è **Attivo** , **Scaduto** o **Annullato**.

![Panoramica dell'abbonamento che mostra piano, importo e dettagli di fatturazione](/img/account-page/membership-card.png)

Subito sotto questo blocco, i tuoi clienti possono vedere i blocchi **Informazioni su questo sito** e **Limiti del sito**. Questi blocchi mostrano loro tutte le limitazioni previste dal loro piano: spazio su disco, articoli, pagine, visite, ecc... Questi limiti possono essere configurati su ciascuna pagina del piano in **Ultimate Multisite > Prodotti**.

![Blocchi Informazioni su questo sito e Limiti del sito che mostrano le limitazioni del piano](/img/account-page/site-limits.png)

Sul lato destro di **Il tuo abbonamento** , i clienti possono fare clic su **Cambia**. Questo mostrerà loro tutti i piani e i pacchetti/servizi disponibili. Se scelgono un altro piano, le limitazioni del piano prenderanno il posto delle limitazioni attuali dell'abbonamento, indipendentemente dal fatto che stiano effettuando un downgrade o un upgrade.

Ora, se i tuoi clienti scelgono di acquistare pacchetti o servizi per questo abbonamento attuale, come più spazio su disco o visite, l'abbonamento attuale non verrà modificato, ma verranno aggiunti solo i nuovi pacchetti.

Nota che i codici coupon non possono essere aggiunti in questa pagina di modifica dell'abbonamento. Se il cliente ha utilizzato un codice coupon al primo acquisto dell'abbonamento, il codice si applicherà anche a questo nuovo abbonamento.

### Aggiornamento dell'indirizzo di fatturazione:

Nella pagina Account, i tuoi clienti possono anche aggiornare il loro indirizzo di fatturazione. Devono semplicemente fare clic su **Aggiorna** accanto a _Indirizzo di fatturazione_.

![Sezione Indirizzo di fatturazione con pulsante Aggiorna](/img/account-page/billing-address.png)

Al tuo cliente apparirà una nuova finestra. Tutto ciò che deve fare è inserire il nuovo indirizzo e fare clic su _Salva modifiche_.

![Modulo per aggiornare l'indirizzo di fatturazione](/img/account-page/billing-address-form.png)

### Modifica del template del sito:

Per consentire ai tuoi clienti di modificare i template dei loro siti, devi andare su **Ultimate Multisite > Impostazioni > Siti** e attivare l'opzione **Consenti cambio template**.

Inoltre, in **Ultimate Multisite > Prodotti**, seleziona i tuoi piani e vai alla scheda **Template del sito**. Assicurati che l'opzione **Consenti template del sito** sia attivata e che in **Modalità di selezione del template del sito** sia selezionata l'opzione **Scegli template del sito disponibili**.

![Scheda template del sito del prodotto con modalità di selezione del template](/img/config/product-site-templates.png)

Potrai vedere tutti i template del sito disponibili sul tuo sito web. Scegli quali vuoi rendere disponibili e quali non vuoi rendere disponibili ai tuoi clienti iscritti a questo piano. Nota che questa opzione influisce anche sul modulo di checkout, quindi qualsiasi template scelto come **Non disponibile** non apparirà nella pagina di registrazione per questo piano.

Ora i tuoi clienti possono fare clic su **Cambia template del sito** all'interno della loro pagina Account.

![Pulsante Cambia template del sito nella pagina Account](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 mostra un pannello di cambio template riprogettato. Il pannello inizia con una **scheda del template attuale** così i clienti possono vedere quale template è attivo prima di scegliere un sostituto.

Una griglia persistente di template del sito disponibili rimane visibile mentre i clienti esaminano le loro opzioni. Questo li aiuta a confrontare i template consentiti per il loro piano senza perdere di vista la selezione attuale.

![Elenco dei template del sito disponibili per il piano](/img/config/site-templates-list.png)

Dopo aver selezionato quello a cui vogliono passare, verrà chiesto loro di confermare la modifica.

![Finestra di conferma del cambio template del sito](/img/account-page/template-switch-confirm.png)

Dopo aver attivato la conferma e fatto clic su **Elabora cambio** , il nuovo template del sito verrà utilizzato sul sito web del tuo cliente.

I clienti possono anche usare **Reset current template** da questo pannello quando devono reimpostare il sito al template attualmente assegnato. Come quando si passa a un altro template, reimpostare un template può sovrascrivere il contenuto del sito, quindi i clienti dovrebbero confermarlo solo quando comprendono l'azione di reimpostazione.

### Aggiunta di domini personalizzati:

I tuoi clienti avranno anche la possibilità di aggiungere un dominio personalizzato per questo piano nella pagina del loro account. Per consentire ai tuoi clienti di usare domini personalizzati, vai su **Ultimate Multisite > Settings >** **Domain Mapping**.

Attiva l'opzione **Enable Domain Mapping**. Questo consentirà ai tuoi clienti di usare domini personalizzati a livello di rete.

Non dimenticare di verificare anche se il domain mapping è abilitato per prodotto, perché puoi limitare un prodotto affinché non consenta ai tuoi clienti di usare domini personalizzati.

Vai su **Ultimate Multisite > Products**. Seleziona il piano che preferisci e vai alla scheda **Custom Domains**. Attiva l'opzione **Allow Custom Domains**.

![Scheda Custom Domains con interruttore Allow Custom Domains](/img/config/product-custom-domains.png)

Questo consentirà a tutti i clienti abbonati a questo piano specifico di usare domini personalizzati. Ora, nella pagina Account, i tuoi clienti possono aggiungere un dominio personalizzato facendo clic su **Add Domain**.

![Pulsante Add Domain nella pagina account](/img/account-page/add-domain-button.png)

La prima finestra che si apre mostrerà ai tuoi clienti un messaggio con le istruzioni su come aggiornare i loro record DNS per far funzionare questo dominio personalizzato sulla tua rete.

![Istruzioni DNS mostrate durante l'aggiunta di un dominio personalizzato](/img/account-page/add-domain-dns.png)

Questo messaggio può essere modificato (da te) in **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Impostazione Add New Domain Instructions in Domain Mapping](/img/config/settings-domain-mapping.png)

Ecco una vista completa della pagina delle impostazioni di domain mapping:

![Pagina completa delle impostazioni di domain mapping](/img/config/settings-domain-mapping-full.png)

Dopo aver fatto clic su **Next Step** , i tuoi clienti possono aggiungere il nome del loro dominio personalizzato e scegliere se questo dominio personalizzato sarà quello principale. Tieni presente che i tuoi clienti possono usare più di un dominio personalizzato per i loro siti web, quindi possono scegliere quale sarà quello principale.

![Inserimento del nome del dominio personalizzato con opzione di dominio principale](/img/account-page/add-domain-primary.png)

Dopo aver fatto clic su **Add Domain** , il dominio verrà aggiunto all'account del tuo cliente. Ora devono solo modificare i record DNS di questo dominio personalizzato presso il loro registrar di domini.

### Modifica della password:

All'interno della dashboard dell'account, i tuoi clienti possono anche modificare la loro password facendo clic su **Change Password**.

![Pulsante Change Password nella pagina account](/img/account-page/change-password-button.png)

Questo mostrerà una nuova finestra in cui i tuoi clienti dovranno inserire la loro password attuale e poi inserire la nuova password che vogliono usare.

![Modulo di modifica password con campi password attuale e nuova password](/img/account-page/change-password-form.png)

### Zona di pericolo:

Abbiamo anche due opzioni che vengono mostrate nella parte **Danger Zone**: **Delete Site** e **Delete Account**. Entrambe si trovano nella parte Danger Zone perché queste due azioni sono irreversibili. Se i tuoi clienti eliminano il loro sito web o il loro account, non possono recuperarli.

![Danger Zone con opzioni Delete Site e Delete Account](/img/account-page/danger-zone.png)

Se i tuoi clienti fanno clic su una di queste due opzioni, verrà mostrata loro una finestra in cui dovranno attivare l'opzione per rimuovere il sito web o l'account e verranno avvisati che questa azione non può essere annullata.

![Finestra di conferma Delete Site](/img/account-page/delete-site-confirm.png)

![Finestra di conferma Delete Account](/img/account-page/delete-account-confirm.png)

Se eliminano il loro sito web, il loro account e la membership rimarranno comunque intatti. Perderanno solo tutto il contenuto del loro sito web. Se eliminano il loro account, tutti i siti web, le membership e le informazioni relative a questo account andranno persi.
