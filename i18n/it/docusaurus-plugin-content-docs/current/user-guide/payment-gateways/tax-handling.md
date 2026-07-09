---
title: Gestione delle imposte
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Gestione delle imposte

Ultimate Multisite ha un modulo di riscossione delle imposte integrato nel nostro core plugin, quindi se devi riscuotere imposte sulle vendite sui tuoi piani, pacchetti e servizi, puoi farlo facilmente senza ricorrere all'installazione di add-on.

Per le aziende con sede in Europa, offriamo un **add-on** che aggiunge strumenti e funzionalità per supportare meglio la conformità **VAT**.

Ultimate Multisite non dichiara né versa le imposte per tuo conto al governo; ti aiutiamo semplicemente a riscuotere le imposte appropriate al momento della transazione. **Dovrai comunque versare le imposte autonomamente.**

## Abilitare la riscossione delle imposte

La riscossione delle imposte non è abilitata per impostazione predefinita. Per abilitarla, devi andare su **Ultimate Multisite > Settings > Taxes** e attivare l'impostazione Enable Taxes.

![Interruttore Enable Taxes nella parte superiore della pagina delle impostazioni Tax](/img/config/settings-taxes-enable.png)

Ecco una vista completa della pagina delle impostazioni delle imposte:

![Pagina completa delle impostazioni delle imposte](/img/config/settings-taxes-full.png)

Puoi anche visualizzare le impostazioni delle imposte per i singoli prodotti:

![Impostazioni delle imposte per i prodotti](/img/config/settings-taxes.png)

### Imposta esclusa vs. imposta inclusa

Per impostazione predefinita, tutti i prezzi dei tuoi prodotti sono al netto delle imposte, il che significa che le imposte **non sono incluse** nel prezzo del prodotto. Se determiniamo che un cliente deve pagare imposte su un determinato acquisto, aggiungeremo le imposte **in aggiunta** al subtotale.

Se preferisci che le imposte siano incluse nel prezzo del tuo prodotto, puoi farlo abilitando l'impostazione **Inclusive Tax**.

![Riga dell'interruttore Inclusive Tax sotto l'impostazione Enable Taxes](/img/config/settings-taxes-inclusive.png)

Non dimenticare di **salvare** le modifiche che hai apportato.

###

## Creare aliquote fiscali

Dopo aver abilitato la riscossione delle imposte, dovrai creare aliquote fiscali per località specifiche utilizzando il nostro editor delle aliquote fiscali.

Puoi accedere all'editor facendo clic sul pulsante **Manage Tax Rates** nella barra laterale della pagina delle impostazioni Tax.

![Link Manage Tax Rates nel pannello Tax Rates nella pagina delle impostazioni](/img/config/settings-taxes-manage-rates.png)

Nella pagina dell'editor delle aliquote fiscali, puoi aggiungere nuove aliquote fiscali facendo clic sul pulsante **Add new Row**.

![Tabella dell'editor delle aliquote fiscali con pulsante Add new Row in alto](/img/config/tax-rates-editor.png)

Dovrai assegnare a ciascuna aliquota fiscale un **titolo** (usato nelle fatture). Poi puoi scegliere il **paese** (obbligatorio), lo **stato,** e la **città** (entrambi facoltativi) in cui questa imposta verrà addebitata. Infine, aggiungi l'**aliquota fiscale in percentuale**.

### Categorie fiscali

Puoi anche creare più categorie fiscali, per aggiungere aliquote fiscali diverse per diversi tipi di prodotti.

Fai clic su **Add new Tax Category** , quindi scrivi il nome della tua categoria e premi **Create**.

![Pulsante Add new Tax Category nella parte superiore dell'editor delle aliquote fiscali](/img/config/tax-categories-add.png)

![Campo di input Tax Category Name nel modale di creazione categoria](/img/config/tax-categories-create-modal.png)

Per navigare tra le categorie, fai clic su **Switch** e seleziona la categoria a cui vuoi aggiungere nuove imposte.

![Pulsante a discesa Switch per passare da una categoria fiscale all'altra](/img/config/tax-categories-switch.png)

![Menu a discesa del selettore di categoria fiscale che mostra le categorie disponibili](/img/config/tax-categories-select.png)

Puoi impostare la categoria fiscale per un prodotto specifico andando alla **Product edit page** e poi alla scheda Taxes.

![Scheda imposte del prodotto con categoria fiscale e interruttore taxable](/img/config/product-taxes.png)

Nella stessa schermata, puoi disattivare l'interruttore **Is Taxable?** per far sapere a Ultimate Multisite che non deve riscuotere imposte su quel determinato prodotto.

## Supporto VAT europeo

Come accennato in precedenza, abbiamo un add-on disponibile per i clienti nell'UE che hanno requisiti aggiuntivi dovuti alle normative europee sulla VAT.

I nostri strumenti VAT aiutano con un paio di aspetti importanti:

  * Caricamento semplice delle aliquote VAT dell'UE;

  * Raccolta e convalida del numero VAT - e inversione contabile per le entità esenti da VAT (come le aziende con numeri VAT validi);

Per installare quell'add-on, vai su **Ultimate Multisite > Settings** e poi fai clic sul link della barra laterale **Check our Add-ons**.

![Barra laterale della pagina Settings con link Check our Add-ons](/img/config/settings-taxes-addons-link.png)

Verrai reindirizzato alla nostra pagina degli add-on. Lì puoi cercare l'**add-on Ultimate Multisite VAT** e installarlo.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Quindi, vai su **Network Admin > Plugins** e attiva quell'add-on a livello di rete.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Se torni alla **scheda Tax Settings** , vedrai nuove opzioni disponibili. Attiva l'opzione **Enable VAT Support** per abilitare i nuovi strumenti VAT. Non dimenticare di **salvare** le tue impostazioni!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Recuperare le aliquote fiscali VAT

Uno degli strumenti aggiunti dalla nostra integrazione è la possibilità di caricare le aliquote fiscali per gli stati membri dell'UE. Questo può essere fatto visitando la pagina dell'editor delle aliquote fiscali dopo aver abilitato il supporto EU VAT.

In fondo alla pagina vedrai le opzioni di recupero VAT. Selezionare un tipo di aliquota e fare clic sul pulsante **Update EU VAT Rates** recupererà e popolerà automaticamente la tabella con le aliquote fiscali per ciascuno stato membro dell'UE. Poi dovrai solo salvarla.

![Pulsante Update EU VAT Rates in fondo all'editor delle aliquote fiscali](/img/config/tax-rates-vat-pull.png)

Puoi anche modificare i valori dopo averli recuperati. Per farlo, modifica semplicemente la riga della tabella di cui hai bisogno e fai clic per salvare i nuovi valori.

### Convalida VAT

Quando il supporto VAT è abilitato, Ultimate Multisite aggiungerà un campo aggiuntivo al modulo di checkout, sotto il campo dell'indirizzo di fatturazione. Il campo verrà mostrato solo ai clienti situati nell'UE.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite convaliderà quindi il numero di partita IVA e, se risulterà valido, verrà applicato il meccanismo di inversione contabile e l'aliquota fiscale sarà impostata allo 0% su quell'ordine.
