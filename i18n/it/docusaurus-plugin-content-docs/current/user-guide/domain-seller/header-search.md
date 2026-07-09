---
title: Ricerca dominio intestazione
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Ricerca dominio nell'header {#header-domain-search}

Usa questa configurazione quando vuoi un piccolo modulo nell'header che avvii una ricerca di dominio, poi consenta al cliente di scegliere tra i domini disponibili all'interno del checkout di Ultimate Multisite.

## Requisiti {#requirements}

- Ultimate Multisite attivo a livello di network.
- Multisite Ultimate Domain Seller attivo a livello di network.
- Almeno un prodotto di registrazione dominio attivo con:
  - `domain_provider` impostato su un provider configurato.
  - TLD supportati configurati, ad esempio `com`, `net` e `org`.
- Un modulo di checkout valido contenente il campo **Selezione dominio**.

## Modulo di checkout {#checkout-form}

1. Crea o modifica il modulo di checkout utilizzato dalla pagina di registrazione.
2. Aggiungi i normali campi obbligatori di checkout/account, incluso **Nome utente**. Un modulo di checkout contenente solo il campo dominio viene rifiutato dalla validazione di Ultimate Multisite.
3. Aggiungi un campo **Selezione dominio**.
4. Imposta la modalità Selezione dominio su **Solo registrazione** quando il flusso deve concentrarsi sui domini registrati anziché sui sottodomini gratuiti o sui domini esistenti.
5. Assegna il prodotto di registrazione dominio a quel campo.

La pagina di registrazione dovrebbe renderizzare il modulo di checkout, ad esempio:

```text
[wu_checkout slug="domain-form"]
```

## Modulo nell'header {#header-form}

Aggiungi un piccolo modulo `GET` nell'header del sito che invii il termine di ricerca inserito alla pagina di checkout come `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Non preselezionare un dominio in JavaScript personalizzato dell'header. L'header dovrebbe solo passare il termine di ricerca. Lo script di checkout di Domain Seller legge `?domain_name=example`, compila la casella di ricerca del checkout ed esegue la ricerca di disponibilità così che il cliente possa scegliere tra i domini restituiti.

## Comportamento previsto {#expected-behaviour}

Cercare `example` nell'header dovrebbe aprire:

```text
/register/?domain_name=example
```

Il checkout dovrebbe quindi mostrare risultati selezionabili come:

- `example.com`
- `example.net`
- `example.org` non disponibile
- altri TLD supportati dal provider

Dopo aver selezionato un risultato disponibile, il riepilogo dell'ordine dovrebbe includere il prodotto di registrazione dominio e il nome di dominio selezionato.

## Verifica {#verification}

1. Apri la home page.
2. Cerca un nome semplice, ad esempio `example`.
3. Conferma che l'URL del checkout includa `?domain_name=example`.
4. Conferma che il campo dominio del checkout contenga `example`.
5. Conferma che compaia un elenco di scelte di dominio.
6. Fai clic su **Seleziona** per un dominio disponibile.
7. Conferma che il riepilogo dell'ordine contenga `Domain Registration - example.com` o il dominio selezionato.

## Risoluzione dei problemi {#troubleshooting}

- Se non compare alcun elenco, controlla la scheda network del browser per `admin-ajax.php?action=wu_domain_search` e conferma che restituisca `domains` o `results` non vuoti.
- Se il modulo di checkout non supera la validazione durante il salvataggio, aggiungi i campi account obbligatori come **Nome utente**.
- Se la selezione di un dominio non aggiorna il carrello, conferma che `window.wu_checkout_form` esista e che gli asset di checkout di Domain Seller siano caricati sulla pagina di checkout.
