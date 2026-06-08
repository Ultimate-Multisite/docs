---
title: Prodotti e Prezzi per Dominio
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Prodotti e Prezzi dei Domini

I prodotti per i domini sono il modo in cui gestisci i prezzi, i TLD, la privacy WHOIS e la selezione del provider. Ogni prodotto per dominio è un prodotto standard di Ultimate Multisite con una scheda aggiuntiva chiamata **Domain Settings**.

## Creare un prodotto per dominio

1. Vai su **Network Admin › Ultimate Multisite › Products**
2. Clicca **Add New**
3. Imposta il tipo di prodotto su **Domain**
4. Configura la scheda **Domain Settings** (vedi sotto)
5. Salva

I prodotti per dominio appaiono con un badge viola **Domain** nell'elenco dei prodotti e possono essere filtrati utilizzando la scheda **Domain Products**.

## Scheda impostazioni dominio

### Provider

Seleziona quale registrar gestisce l'iscrizione per questo prodotto. Di default, viene utilizzato il **Default provider** globale impostato nelle impostazioni di Domain Seller.

### TLD supportati

Lascia vuoto per creare un **prodotto "catch-all"** che si applica a tutti i TLD non corrispondenti a un altro prodotto.

Inserisci un elenco di TLD separati da virgole (es. `.com, .net, .org`) per creare un **prodotto specifico per TLD** che si applica solo a quelle estensioni.

**Come funziona la corrispondenza dei prodotti:** Quando un cliente cerca un dominio, l'addon seleziona il prodotto corrispondente più specifico. Un prodotto con `.com` nella sua lista TLD ha la precedenza su un prodotto catch-all. Se nessun prodotto specifico per TLD corrisponde, viene utilizzato il catch-all. Se non esistono prodotti, la ricerca del dominio non viene visualizzata.

### Tipo di markup

Tre modalità controllano come viene calcolato il tuo prezzo di vendita a partire dal costo all'ingrosso:

| Modalità | Come funziona |
|---|---|
| **Percentage** | Aggiunge una percentuale al costo all'ingrosso. Un markup del 20% su un dominio all'ingrosso di $10 dà $12. |
| **Fixed markup** | Aggiunge un importo fisso in dollari. Un markup di $5 su un dominio di $10 dà $15. |
| **Fixed price** | Ignora completamente il costo all'ingrosso. Addebita sempre l'importo che inserisci. |

### Prezzi introduttivi

Abilita questa opzione per offrire un prezzo scontato per il primo anno. Imposta un **Introductory price** separato (il prezzo per l'anno 1) insieme al regolare **Renewal price** (anno 2+). Il cliente visualizza entrambi i prezzi durante il checkout, così sa cosa aspettarsi al rinnovo.

### Privacy WHOIS

Controlla se viene offerta la protezione della privacy WHOIS per i domini registrati tramite questo prodotto.

| Impostazione | Comportamento |
|---|---|
| **Disabled** | La privacy WHOIS non viene mai offerta o abilitata. |
| **Always Included** | La privacy WHOIS viene abilitata automaticamente al momento dell'iscrizione senza costi. |
| **Customer Choice** | Appare una casella di controllo durante il checkout. Imposta il **Privacy price** per addebitare un costo per anno, o lascialo a $0 per offrirlo gratuitamente. |

Per Namecheap, la privacy WHOIS utilizza WhoisGuard (sempre gratuita). Per OpenSRS, utilizza il servizio di privacy OpenSRS (potrebbe avere un costo all'ingrosso).

---

## Importazione e sincronizzazione TLD

I prodotti per i domini visualizzano i prezzi all'ingrosso in tempo reale recuperati dal provider collegato. Per farlo, è necessario importare i TLD.

- **Sync manuale:** Settings › Domain Seller › Sync TLDs (per provider)
- **Sync automatico:** Viene eseguito quotidianamente tramite un cron job programmato su tutti i provider configurati

Dopo una sincronizzazione, vai sulla scheda Domain Settings di qualsiasi prodotto per dominio e usa il selettore TLD per vedere i TLD disponibili con i loro attuali prezzi all'ingrosso.

---

## Rinnovo automatico

I rinnovi dei domini sono collegati allo stato di iscrizione del cliente:

- Quando un'iscrizione viene rinnovata e un dominio è collegato, il rinnovo del dominio viene automaticamente messo in coda
- I tentativi di rinnovo utilizzano il gateway di pagamento attivo del cliente
- I rinnovi falliti vengono riprovati automaticamente con un *exponential backoff*
- Vengono inviate notifiche via email per i rinnovi riusciti, i fallimenti e le scadenze imminenti

ID dei modelli email per gli eventi del ciclo di vita del dominio:

| Evento | Template ID |
|---|---|
| Dominio registrato | `domain_registered` |
| Dominio rinnovato | `domain_renewed` |
| Rinnovo fallito | `domain_renewal_failed` |
| Dominio in scadenza | `domain_expiring_soon` |

---

## Admin: Registrazione manuale del dominio

Per registrare un dominio per conto di un cliente senza che debba passare dal checkout:

1. Vai su **Network Admin › Ultimate Multisite › Register Domain**
2. Seleziona il cliente ed inserisci il nome del dominio
3. Compila i dettagli di contatto del registratore (nome, indirizzo, telefono)
4. Clicca **Register**

Il record del dominio viene creato e collegato all'account del cliente.
