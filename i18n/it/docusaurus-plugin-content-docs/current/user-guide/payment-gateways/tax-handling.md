---
title: Gestione delle imposte
sidebar_position: 4
_i18n_hash: 087a366fc43cafff9e887f68e71e23fe
---
# Gestione delle imposte

Ultimate Multisite dispone di un modulo di riscossione delle imposte integrato nel nostro plugin principale, quindi se hai bisogno di raccogliere le imposte sulle vendite per i tuoi piani, pacchetti e servizi, puoi farlo facilmente senza dover installare alcun add‑on.

Per le aziende situate in Europa, offriamo un **add‑on** che aggiunge strumenti e funzionalità per supportare meglio la conformità all'IVA.

Ultimate Multisite non presenta o versare le imposte per tuo conto al governo; ti aiutiamo semplicemente a raccogliere le imposte appropriate al momento della transazione. **Dovrai comunque versare le imposte da solo.**

## Abilitare la riscossione delle imposte

La riscossione delle imposte non è abilitata per impostazione predefinita. Per abilitarla, devi andare su **Ultimate Multisite > Settings > Taxes** e attivare l'impostazione Enable Taxes.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ICSEhm7yhk.png)

### Imposte escluse vs. imposte incluse

Per impostazione predefinita, tutti i prezzi dei tuoi prodotti sono esclusi dalle imposte, il che significa che le imposte **non sono incluse** nel prezzo del prodotto. Se determiniamo che un cliente debba pagare le imposte su un determinato acquisto, aggiungeremo le imposte **sopra** il subtotale.

Se preferisci che le imposte siano incluse nel prezzo del tuo prodotto, puoi farlo abilitando l'impostazione **Inclusive Tax**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xiiaIXYI2c.png)

Non dimenticare di **salvare** le modifiche apportate.

### 

## Creare aliquote fiscali

Dopo aver abilitato la riscossione delle imposte, dovrai creare le aliquote fiscali per località specifiche utilizzando il nostro editor delle aliquote fiscali.

Puoi accedere all'editor facendo clic sul pulsante **Manage Tax Rates** nella barra laterale della pagina delle impostazioni fiscali.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UZb6g2rvrs.png)

Nella pagina dell'editor delle aliquote fiscali, puoi aggiungere nuove aliquote fiscali facendo clic sul pulsante **Add new Row**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZyJCSI6zLZ.png)

Dovrai assegnare a ciascuna aliquota un **titolo** (utilizzato nelle fatture). Quindi puoi scegliere il **paese** (obbligatorio), lo **stato** e la **città** (entrambi opzionali) in cui verrà addebitata l'imposta. Infine, aggiungi l'**aliquota in percentuale**.

### Categorie di imposta

Puoi anche creare più Categorie di Imposta, per aggiungere aliquote diverse per diversi tipi di prodotti.

Fai clic su **Add new Tax Category**, quindi scrivi il nome della tua categoria e premi **Create**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/73biI4o8lj.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/YhH2hLLvEC.png)

Per sfogliare le categorie, fai clic su **Switch** e seleziona la categoria a cui vuoi aggiungere nuove imposte.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/xjghTq6ta4.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/E5YLXeIsWH.png)

Puoi impostare la categoria di imposta per un prodotto specifico andando alla **Product edit page** e poi alla scheda Taxes.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/vkh5NXKplU.png)

Nello stesso schermo, puoi disattivare l'interruttore **Is Taxable?** per far sapere a Ultimate Multisite che non dovrebbe raccogliere imposte su quel prodotto.

## Supporto IVA europeo

Come menzionato in precedenza, disponiamo di un add‑on disponibile per i clienti nell'UE che hanno requisiti aggiuntivi a causa delle normative sull'IVA europea.

I nostri strumenti IVA aiutano con un paio di cose importanti:

* Caricamento facile delle aliquote IVA UE;
* Raccolta e convalida del numero IVA - e reverse charge per entità esenti IVA (come aziende con numeri IVA validi);

Per installare quell'add‑on, vai su **Ultimate Multisite > Settings** e poi fai clic sul collegamento della barra laterale **Check our Add-ons**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/AsMyAH5HKC.png)

Verrai reindirizzato alla nostra pagina degli add‑on. Lì, puoi cercare il **Ultimate Multisite VAT add-on** e installarlo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/AQ6gWfdY5G.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/iz8uncHiYa.png)

Quindi vai su **Network Admin > Plugins** e attiva quell'add‑on a livello di rete.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/PkWGMWlgVu.png)

Se torni alla scheda **Tax Settings**, vedrai nuove opzioni disponibili. Attiva l'opzione **Enable VAT Support** per abilitare i nuovi strumenti IVA. Non dimenticare di **salvare** le impostazioni!

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/Gn1SspQZ0S.png)

### Recupero delle aliquote IVA

Uno degli strumenti che la nostra integrazione aggiunge è la capacità di caricare le aliquote fiscali per gli Stati membri dell'UE. Questo può essere fatto visitando la pagina dell'editor delle aliquote fiscali dopo aver abilitato il supporto IVA UE.

In fondo alla pagina, vedrai le opzioni di recupero IVA. Selezionando un tipo di aliquota e facendo clic sul pulsante **Update EU VAT Rates**, verrà recuperata e popolata automaticamente la tabella con le aliquote fiscali per ciascuno Stato membro UE. Quindi, dovrai solo salvarla.

### ![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/jZKEqPBX5E.png)

Puoi anche modificare i valori dopo averli recuperati. Per farlo, basta modificare la riga della tabella di cui hai bisogno e fare clic per salvare i nuovi valori.

### Validazione IVA

Quando il supporto IVA è abilitato, Ultimate Multisite aggiungerà un campo aggiuntivo al modulo di checkout, sotto il campo dell'indirizzo di fatturazione. Il campo verrà visualizzato solo per i clienti situati nell'UE.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/ITUbFOIM4r.png)

Ultimate Multisite quindi convaliderà il numero IVA e, se risulta valido, verrà applicato il meccanismo di reverse charge e l'aliquota fiscale sarà impostata al 0% su quell'ordine.
