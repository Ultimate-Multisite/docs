---
title: Campo di Checkout e DNS del Cliente
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Gestione dei campi di checkout e DNS del cliente

## Il campo di selezione del dominio

Il campo **Selezione Dominio** è un elemento di checkout che offre ai clienti la possibilità di scegliere come ottenere il dominio del loro sito. Aggiungetelo a qualsiasi modulo di checkout per abilitare la vendita di domini.

### Aggiungere il campo a un modulo di checkout

1. Andare su **Amministrazione Rete › Ultimate Multisite › Moduli di Checkout**
2. Aprire o creare un modulo di checkout
3. Nell'editor di checkout, cliccare su **Aggiungi Campo**
4. Scegliere **Selezione Dominio** dall'elenco dei campi
5. Configurare le opzioni del campo (vedi sotto)
6. Salvare il modulo

### Opzioni del campo

**Modalità di dominio** — Scegliere quali schede il cliente vedrà. Ogni modalità può essere abilitata o disabilitata in modo indipendente:

| Modalità | Cosa fa |
|---|---|
| **Sottodominio** | Il cliente utilizza un sottodominio gratuito sulla vostra rete (es. `mysite.vostanome.com`). Non è richiesto pagamento. |
| **Registra Nuovo Dominio** | Il cliente cerca un nuovo dominio e lo registra tramite il fornitore configurato. Utilizza il prodotto dominio corrispondente per i prezzi. |
| **Dominio Esistente** | Il cliente mappa un dominio che possiede già. Nessola tassa di registrazione. Il dominio viene mappato automaticamente sul suo sito. |

**Modalità predefinita** — Quando tutte e tre le modalità sono attivate, quale scheda si apre per prima. Impostare su **Sottodominio** per mantenere la registrazione del dominio facoltativa, o su **Registra Nuovo Dominio** per incoraggiare gli acquisti.

**Prodotto dominio** — Opzionalmente, vincolare questo campo a un prodotto dominio specifico. Se non impostato, l'addon seleziona automaticamente il prodotto corrispondente in base al TLD che il cliente cerca.

### Campi di contatto del titolare

Quando un cliente seleziona la scheda **Registra Nuovo Dominio**, il modulo di checkout aggiunge i campi di contatto del titolare inline:

- Nome / Cognome
- Indirizzo email
- Indirizzo (linea 1, città, stato/provincia, codice postale, paese)
- Numero di telefono

Questi campi sono richiesti da tutti i registrar e vengono validati prima di effettuare la chiamata API di registrazione. I numeri di telefono vengono automaticamente formattati nel formato internazionale `+CC.NNN` previsto dai registrar.

### URL del sito autogenerato

Quando un cliente registra o mappa un dominio, il campo URL del sito viene popolato automaticamente dal dominio selezionato. I clienti non devono compilare un campo URL separato.

### Comportamento di ricerca

- La disponibilità del dominio viene controllata in tempo reale con AJAX mentre il cliente digita
- Vengono mostrati suggerimenti di TLD alternativi quando il dominio preferito non è disponibile
- I prezzi vengono recuperati in tempo reale e visualizzati chiaramente (prezzo di registrazione, prezzo di rinnovo, opzionale tassa di privacy WHOIS)
- I codici sconto si applicano ai prodotti dominio esattamente come a qualsiasi altro prodotto

**Regolare la reattività della ricerca:**

```php
// Aumentare il ritardo debounce (millisecondi) per ridurre le chiamate API su connessioni lente
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Aggiungere campi personalizzati al modulo di ricerca dominio:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Note aggiuntive',
    ];
    return $fields;
});
```

---

## Gestione DNS del cliente

I clienti possono gestire i record DNS per i loro domini registrati dalla pagina **Il mio account**, sotto l'inserimento del loro dominio.

### Tipi di record supportati

| Tipo | Uso |
|---|---|
| **A** | Mappa il nome host a un indirizzo IPv4 |
| **AAAA** | Mappa il nome host a un indirizzo IPv6 |
| **CNAME** | Crea un alias che punta a un altro nome host |
| **MX** | Imposta il server di scambio email |
| **TXT** | Aggiunge record di testo SPF, DMARC, verifica o altri |

### Quali provider supportano la gestione DNS?

La gestione DNS (aggiungere, modificare, eliminare record) è disponibile con **OpenSRS**, **ResellerClub** ed **Enom**. I domini Namecheap, GoDaddy e NameSilo visualizzano lo stato e le informazioni di scadenza, ma la gestione DNS deve essere effettuata direttamente nel pannello di controllo del registrar.

### Record DNS predefiniti

È possibile configurare record DNS predefiniti che vengono applicati automaticamente quando viene registrato un dominio. Andare su **Impostazioni › Venditore di domini › Record DNS predefiniti**.

I valori dei record predefiniti supportano due token:

| Token | Sostituito con |
|---|---|
| `{DOMAIN}` | Il nome dominio registrato (es. `example.com`) |
| `{SITE_URL}` | L'URL del sito WordPress del cliente |

**Esempio — puntare il dominio apex e www all'IP del vostro server:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Amministratore: visualizzazione e modifica DNS

Gli amministratori di rete possono visualizzare e modificare i record DNS per qualsiasi dominio cliente dalla pagina di modifica del dominio in **Amministrazione Rete › Ultimate Multisite › Domini**.
