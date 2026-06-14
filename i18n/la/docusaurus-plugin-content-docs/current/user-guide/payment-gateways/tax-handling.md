---
title: Tratamentorum tributorum
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Gestionare le Tasse

Ultimate Multisite ha un modulo di raccolta delle tasse integrato nel nostro plugin principale, quindi se hai bisogno di raccogliere le tasse sulle vendite sui tuoi piani, pacchetti e servizi, puoi farlo facilmente senza dover installare alcun add-on.

Per le aziende situate in Europa, offriamo un **add-on** che aggiunge strumenti e funzionalità per supportare meglio la conformità IVA (VAT).

Ultimate Multisite non presenta né versa tasse per tuo conto al governo; noi ti aiutiamo semplicemente a raccogliere le tasse appropriate al momento della transazione. **Dovrai comunque versare le tasse tu stesso.**

## Abilitare la Raccolta delle Tasse

La raccolta delle tasse non è abilitata di default. Per attivarla, devi andare su **Ultimate Multisite > Impostazioni > Tasse** e attivare l'impostazione Enable Taxes (Abilita Tasse).

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Ecco la visualizzazione completa della pagina delle impostazioni fiscali:

![Tax settings full page](/img/config/settings-taxes-full.png)

Puoi anche visualizzare le impostazioni fiscali per prodotti individuali:

![Tax settings for products](/img/config/settings-taxes.png)

### Tasse escluse vs. Tasse incluse

Di default, tutti i prezzi dei tuoi prodotti sono esclusi dalle tasse, il che significa che le tasse **non sono incluse** nel prezzo del prodotto. Se decidiamo che un cliente debba pagare le tasse su un acquisto specifico, aggiungeremo le tasse **sopra** il sottototale.

Se preferisci avere le tasse incluse nel prezzo del tuo prodotto, puoi farlo attivando l'impostazione Inclusive Tax (Tasse Incluse).

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Non dimenticare di **salvare** le modifiche che hai apportato.

###

## Creare i Tassi delle Tasse

Dopo aver abilitato la Raccolta delle Tasse, dovrai creare tassi delle tasse per località specifiche utilizzando il nostro editor dei tassi fiscali.

Potes editor ad accedere per cliccare sul pulsante **Manage Tax Rates** (Gestisci Tassi di Imposta) nella barra laterale della pagina delle impostazioni dell'imposta.

![Link Manage Tax Rates nel pannello dei tassi di imposta sulla pagina delle impostazioni](/img/config/settings-taxes-manage-rates.png)

Nella pagina editor dei tassi di imposta, puoi aggiungere nuovi Tassi di Imposta cliccando sul pulsante **Add new Row** (Aggiungi nuova riga).

![Tabella editor tassi di imposta con pulsante Add new Row in alto](/img/config/tax-rates-editor.png)

Dovrai dare a ciascun tasso di imposta un **title** (titolo), che verrà usato sulle fatture. Poi potrai scegliere il **country** (paese, obbligatorio), lo **state** (stato) e la **city** (città, entrambi opzionali) dove questa imposta sarà applicata. Infine, aggiungi il **tax rate in percents** (tasso di imposta in percentuali).

### Tax Categories (Categorie di Imposta)

Puoi anche creare più Categorie di Imposta per aggiungere diversi tassi di imposta per tipi di prodotti diversi.

Clicca su **Add new Tax Category** (Aggiungi nuova categoria di imposta), poi scrivi il nome della tua categoria e premi **Create** (Crea).

![Pulsante Add new Tax Category in alto nell'editor dei tassi di imposta](/img/config/tax-categories-add.png)

![Campo di input Tax Category Name nel modale per creare una categoria](/img/config/tax-categories-create-modal.png)

Per sfogliare le categorie, clicca su **Switch** (Cambia) e seleziona la categoria a cui vuoi aggiungere nuove imposte.

![Pulsante Switch a discesa per cambiare tra le categorie di imposta](/img/config/tax-categories-switch.png)

![Menu a tendina selettore categoria di imposta che mostra le categorie disponibili](/img/config/tax-categories-select.png)

Puoi impostare la categoria di imposta per un prodotto specifico andando alla **Product edit page** (Pagina modifica prodotto) e poi alla scheda Taxes (Imposte).

![Scheda tasse del prodotto con interruttore tax category e taxable](/img/config/product-taxes.png)

Sulla stessa schermata, puoi disattivare l'interruttore **Is Taxable?** (È imponibile?) per dire a Ultimate Multisite che non deve riscuotere imposte su quel determinato prodotto.

## European VAT Support (Supporto IVA Europeo)

Ut dictum est ante, addendum adest pro clientibus in UE qui requirit omnia additionalia propter regulas TVA Europae.

Instrumenta nostrorum de TVA tecum quibusdam rebus importantibus auxiliant:

  * Facilissima carga tariforum TVA UE;

  * Collectio et validatio numerorum TVA - et reversus charge pro entibus exemptis a TVA (sicut societates cum numeros TVA validus);

Ad installation hunc addendum, ad **Ultimate Multisite > Settings** adere et deinde cliquare in link lateralem **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Ad paginam addendorum nostrorum rediressitis. Einde, **Ultimate Multisite VAT add-on** quaerere et installare possimis.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Deinde ad **Network Admin > Plugins** adere et hoc addendum in omni rete activare.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Si rediuberitis ad tabulam **Tax Settings**, novae optiones videritis. Optionem **Enable VAT Support** (Activum Supportium TVA) mutare in activam ut nova instrumenta TVA operantur. Ne obliviscitur **salvare** options tuas!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Trago ad Tarifas TVA

Una ex instrumentis quae integrationem nostram addeat est possibilia caricarum tariforum fiscalium pro statibus membri UE. Hoc potest fieri per visitandum paginam editorum tariforum fiscalium post activandam supportum TVA UE.

In fondo alla pagina vedrai le opzioni per il recupero dell'IVA (VAT). Selezionando un tipo di aliquota e cliccando sul pulsante **Aggiorna Aliquote IVA UE** (Update EU VAT Rates), la tabella si aprirà automaticamente riempita con i tassi fiscali per ciascuno stato membro dell'UE. Dovrai poi semplicemente salvarla.

![Pulsante Aggiorna Aliquote IVA UE in fondo all'editor dei tassi fiscali](/img/config/tax-rates-vat-pull.png)

Puoi anche modificare i valori dopo averli recuperati. Per farlo, modifica semplicemente la riga della tabella che ti serve e clicca per salvare i nuovi valori.

### Validazione IVA

Quando il supporto all'IVA è abilitato, Ultimate Multisite aggiungerà un campo extra al modulo di pagamento, sotto il campo dell'indirizzo di fatturazione. Questo campo apparirà solo per i clienti situati nell'UE.

<!-- Screenshot unavailable: Campo Numero IVA sul modulo di pagamento frontend sotto l'indirizzo di fatturazione -->

Ultimate Multisite validerà quindi il Numero IVA e, se risulta valido, verrà applicato il meccanismo di ripartizione inversa (reverse charge mechanism) e il tasso fiscale sarà impostato sullo 0% per quell'ordine.
