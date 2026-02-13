---
title: Creare codici sconto
sidebar_position: 19
_i18n_hash: 3c7a42fff1710e14a95a32365f893dc3
---
# Creare Codici Sconto (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite.**_

## Creare e Modificare Codici Sconto

Per creare o modificare un codice sconto, vai su **Ultimate Multisite > Discount Codes**.

![](/img/config/discount-codes-list.png)

Lì avrai un elenco dei codici sconto già creati.

Puoi fare clic su **Add Discount** **Code** per creare un nuovo coupon o modificare quelli esistenti passando il mouse sopra e facendo clic su **Edit**.

![Discount codes list with hover actions](/img/config/discount-codes-list.png)

![Add Discount Code button](/img/config/discount-codes-list.png)

Verrai reindirizzato alla pagina in cui creerai o modificherai il tuo codice coupon. In questo esempio ne creeremo uno nuovo.

![Discount code edit page](/img/config/discount-codes-list.png)

Diamo un'occhiata alle impostazioni disponibili qui:

**Enter Discount Code:** Questo è solo il nome del tuo codice sconto. Non è il codice che i tuoi clienti dovranno inserire nel modulo di checkout.

**Description:** Qui puoi descrivere brevemente a cosa serve questo coupon.

![Discount code name and description fields](/img/config/discount-codes-list.png)

**Coupon code:** Qui è dove definisci il codice che i tuoi clienti dovranno inserire durante il checkout.

![Coupon code field](/img/config/discount-codes-list.png)

**Discount:** Qui puoi impostare una **percentuale** o un **importo fisso** di denaro per il tuo codice sconto.

![Discount percentage or fixed amount setting](/img/config/discount-codes-list.png)

**Apply to renewals:** Se questa opzione è disattivata, il codice sconto verrà applicato solo al **primo pagamento**. Tutti gli altri pagamenti non avranno sconto. Se l'opzione è attivata, il codice sconto sarà valido per tutti i pagamenti futuri.

**Setup fee discount:** Se questa opzione è disattivata, il codice coupon **non darà alcuno sconto per la tassa di configurazione** dell'ordine. Se è attivata, puoi impostare lo sconto (percentuale o importo fisso) che questo codice coupon applicherà alla tassa di configurazione dei tuoi piani.

![Apply to renewals and setup fee discount options](/img/config/discount-codes-list.png)

**Active:** Attiva o disattiva manualmente questo codice coupon.

![Active toggle for discount code](/img/config/discount-codes-list.png)

Sotto **Advanced Options**, troviamo le seguenti impostazioni:

**Limit uses:**

  * **Uses:** Qui puoi vedere quante volte è stato usato il codice sconto.

  * **Max uses:** Questo limiterà il numero di volte che gli utenti possono utilizzare questo codice sconto. Ad esempio, se inserisci 10 qui, il coupon potrà essere usato solo 10 volte. Dopo questo limite, il codice sconto non potrà più essere usato.

![Limit uses setting with uses and max uses fields](/img/config/discount-codes-list.png)**Start & expiration dates:** Here you will have the option to add a start date and/or an expiration date to your coupon.

**Start & expiration dates:** Qui avrai l'opzione di aggiungere una data di inizio e/o una data di scadenza al tuo coupon.

![Start and expiration date fields](/img/config/discount-codes-list.png)

**Limit products:** Se attivi **Select products**, tutti i tuoi prodotti verranno mostrati. Avrai l'opzione di selezionare manualmente (attivando o disattivando) quali prodotti possono accettare questo codice coupon. I prodotti disattivati qui non mostreranno alcun cambiamento se i tuoi clienti provano a usarli con questo codice coupon.

![Limit products selection toggles](/img/config/discount-codes-list.png)

Dopo aver configurato tutte queste opzioni, fai clic su **Save Discount Code** per salvare il tuo coupon e il lavoro è fatto!

![Save Discount Code button](/img/config/discount-codes-list.png)

Il coupon è ora nella tua lista e, da lì, puoi fare clic su **edit or delete** per modificarlo o eliminarlo.

![Discount code in the list with edit and delete options](/img/config/discount-codes-list.png)

### 

### Utilizzare i Parametri URL:

Se vuoi personalizzare le tue tabelle dei prezzi o creare una bella pagina di codice coupon per il tuo sito web e vuoi applicare automaticamente un codice sconto al modulo di checkout, puoi farlo tramite parametri URL.

Per prima cosa, devi ottenere il link condivisibile per il tuo piano. Per farlo, vai su **Ultimate Multisite > Products** e seleziona un piano.

Fai clic sul pulsante **Click to Copy Shareable Link**. Ti verrà fornito il link condivisibile per questo piano specifico. Nel nostro caso, il link condivisibile fornito era [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

Per applicare il tuo codice sconto a questo piano specifico, aggiungi semplicemente il parametro **?discount_code=XXX** all'URL. Dove **XXX** è il codice coupon.

Nel nostro esempio qui, applichiamo il codice coupon **50OFF** a questo prodotto specifico.

L'URL per questo piano specifico e con il codice sconto 50OFF applicato sarà: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
