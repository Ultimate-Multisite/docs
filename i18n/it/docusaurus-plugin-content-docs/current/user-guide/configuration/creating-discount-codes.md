---
title: Creazione di codici sconto
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Creazione di codici sconto (v2)

_**NOTA IMPORTANTE: questo articolo si riferisce a Ultimate Multisite versione 2.x.**_

Con Ultimate Multisite puoi creare codici sconto per offrire ai tuoi clienti sconti sui loro abbonamenti. E crearli è facile!

## Creazione e modifica dei codici sconto {#creating-and-editing-discount-codes}

Per creare o modificare un codice sconto, vai su **Ultimate Multisite > Codici sconto**.

![Elenco dei codici sconto — stato vuoto prima che esista qualsiasi codice](/img/config/discount-codes-empty.png)

Lì avrai un elenco dei codici sconto che hai già creato.

Puoi fare clic su **Aggiungi codice** **sconto** per creare un nuovo coupon oppure puoi modificare quelli che hai passando il cursore sopra di essi e facendo clic su **Modifica**.

![Elenco dei codici sconto con azioni al passaggio del cursore che mostrano i link Modifica ed Elimina](/img/config/discount-codes-list-hover.png)

![Pulsante Aggiungi codice sconto nell’intestazione della pagina](/img/config/discount-codes-add-button.png)

Verrai reindirizzato alla pagina in cui creerai o modificherai il tuo codice coupon. In questo esempio ne creeremo uno nuovo.

![Pagina di modifica del codice sconto con tutte le sezioni visibili](/img/config/discount-code-edit.png)

Diamo un’occhiata alle impostazioni disponibili qui:

**Inserisci codice sconto:** Questo è semplicemente il nome del tuo codice sconto. Non è il codice che i tuoi clienti dovranno usare nel modulo di pagamento.

**Descrizione:** Qui puoi descrivere brevemente a cosa serve questo coupon.

![Campi nome e descrizione del codice sconto nella parte superiore della pagina di modifica](/img/config/discount-code-description.png)

Puoi anche visualizzare il codice sconto come attivo o inattivo:

![Stato attivo del codice sconto](/img/config/discount-code-active.png)

**Codice coupon:** Qui è dove definisci il codice che i tuoi clienti dovranno inserire durante il pagamento.

![Campo codice coupon in cui i clienti inseriscono il codice al pagamento](/img/config/discount-code-coupon-field.png)

**Sconto:** Qui puoi impostare per il tuo codice sconto una **percentuale** oppure un **importo fisso** di denaro.

![Impostazione dell’importo dello sconto con menu a discesa percentuale o importo fisso](/img/config/discount-code-amount.png)

**Applica ai rinnovi:** Se questa opzione è disattivata, questo codice sconto verrà applicato solo al **primo pagamento**. Tutti gli altri pagamenti non avranno alcuno sconto. Se questa opzione è attivata, il codice sconto sarà valido per tutti i pagamenti futuri.

**Sconto sulla tariffa di configurazione:** Se questa opzione è disattivata, il codice coupon **non darà alcuno sconto sulla tariffa di configurazione** dell’ordine. Se questa opzione è attivata, puoi impostare lo sconto (percentuale o importo fisso) che questo codice coupon applicherà alla tariffa di configurazione dei tuoi piani.

![Opzioni di attivazione per applicare ai rinnovi e sconto sulla tariffa di configurazione](/img/config/discount-code-renewals.png)

**Attivo:** Attiva o disattiva manualmente questo codice coupon.

![Interruttore Attivo per abilitare o disabilitare manualmente il codice sconto](/img/config/discount-code-active.png)

In **Opzioni avanzate**, abbiamo le seguenti impostazioni:

![Opzioni avanzate del codice sconto](/img/config/discount-code-advanced.png)

**Limita utilizzi:**

  * **Utilizzi:** Qui puoi vedere quante volte è stato usato il codice sconto.

  * **Utilizzi massimi:** Questo limiterà il numero di volte in cui gli utenti possono usare questo codice sconto. Per esempio, se inserisci 10 qui, il coupon potrà essere usato solo 10 volte. Dopo questo limite, il codice coupon non potrà più essere usato.

![Impostazione Limita utilizzi con conteggio degli utilizzi attuali e campo utilizzi massimi](/img/config/discount-code-limit-uses.png)

**Date di inizio e scadenza:** Qui avrai la possibilità di aggiungere una data di inizio e/o una data di scadenza al tuo coupon.

![Campi data di inizio e scadenza per programmare il codice sconto](/img/config/discount-code-dates.png)

**Limita prodotti:** Se attivi **Seleziona prodotti**, ti verranno mostrati tutti i tuoi prodotti. Avrai la possibilità di selezionare manualmente (attivando o disattivando) quale prodotto può accettare questo codice coupon. I prodotti disattivati qui non mostreranno alcuna modifica se i tuoi clienti provano a usare questo codice coupon con essi.

![Sezione Limita prodotti con interruttori per ogni prodotto](/img/config/discount-code-limit-products.png)

Dopo aver configurato tutte queste opzioni, fai clic su **Salva codice sconto** per salvare il tuo coupon e il gioco è fatto!

![Pulsante Salva codice sconto nella parte inferiore della pagina di modifica](/img/config/discount-code-save.png)

Il coupon ora è nel tuo elenco e, da lì, puoi fare clic per **modificarlo o eliminarlo**.

![Riga del codice sconto nell’elenco con azioni Modifica ed Elimina al passaggio del cursore](/img/config/discount-codes-list-hover.png)

###

### Uso dei parametri URL: {#using-url-parameters}

Se vuoi personalizzare le tue tabelle dei prezzi o creare una bella pagina con codice coupon per il tuo sito web e vuoi applicare automaticamente un codice sconto al tuo modulo di pagamento, puoi farlo tramite parametri URL.

Per prima cosa, devi ottenere il link condivisibile per il tuo piano. Per farlo, vai su **Ultimate Multisite > Prodotti** e seleziona un piano.

Fai clic sul pulsante **Fai clic per copiare il link condivisibile**. Questo ti darà il link condivisibile a questo piano specifico. Nel nostro caso, il link condivisibile fornito era [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Pagina del prodotto con pulsante del link condivisibile](/img/config/products-list.png)

Per applicare il tuo codice sconto a questo piano specifico, aggiungi semplicemente il parametro **?discount_code=XXX** all’URL. Dove **XXX** è il codice coupon.

Nel nostro esempio qui, applicheremo il codice coupon **50OFF** a questo prodotto specifico.

L’URL per questo piano specifico e con il codice sconto 50OFF applicato apparirà così: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
