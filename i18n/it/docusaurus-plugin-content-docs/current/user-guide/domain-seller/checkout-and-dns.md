---
title: Campo di checkout e DNS del cliente
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Campo di checkout e gestione DNS dei clienti {#checkout-field-and-customer-dns-management}

## Il campo di checkout Domain Selection {#the-domain-selection-checkout-field}

Il campo **Domain Selection** è un elemento di checkout che offre ai clienti la scelta di come ottenere il dominio del loro sito. Aggiungilo a qualsiasi modulo di checkout per abilitare la vendita di domini.

### Aggiungere il campo a un modulo di checkout {#adding-the-field-to-a-checkout-form}

1. Vai a **Network Admin › Ultimate Multisite › Checkout Forms**
2. Apri o crea un modulo di checkout
3. Nell'editor di checkout, fai clic su **Add Field**
4. Scegli **Domain Selection** dall'elenco dei campi
5. Configura le opzioni del campo (vedi sotto)
6. Salva il modulo

### Opzioni del campo {#field-options}

**Modalità dominio** — Scegli quali schede vede il cliente. Ogni modalità può essere abilitata o disabilitata indipendentemente:

| Modalità | Cosa fa |
|---|---|
| **Subdomain** | Il cliente usa un sottodominio gratuito sulla tua rete (ad es., `mysite.yournetwork.com`). Non è necessario alcun pagamento. |
| **Register New Domain** | Il cliente cerca un nuovo dominio e lo registra tramite il provider configurato. Usa il prodotto dominio corrispondente per la determinazione del prezzo. |
| **Existing Domain** | Il cliente mappa un dominio che possiede già. Nessuna tariffa di registrazione. Il dominio viene mappato automaticamente al suo sito. |

**Modalità predefinita** — Quando tutte e tre le modalità sono abilitate, quale scheda si apre per prima. Impostala su **Subdomain** per mantenere facoltativa la registrazione del dominio, oppure su **Register New Domain** per incentivare gli acquisti.

**Prodotto dominio** — Facoltativamente, associa questo campo a uno specifico prodotto dominio. Se non impostato, l'addon seleziona automaticamente il prodotto corrispondente in base al TLD cercato dal cliente.

### Campi di contatto del registrante {#registrant-contact-fields}

Quando un cliente seleziona la scheda **Register New Domain**, il modulo di checkout aggiunge inline i campi di contatto del registrante:

- Nome / Cognome
- Indirizzo email
- Indirizzo (riga 1, città, stato/provincia, codice postale, Paese)
- Numero di telefono

Questi sono richiesti da tutti i registrar e convalidati prima che venga effettuata la chiamata API di registrazione. I numeri di telefono vengono formattati automaticamente nel formato internazionale `+CC.NNN` previsto dai registrar.

### URL del sito generato automaticamente {#auto-generated-site-url}

Quando un cliente registra o mappa un dominio, il campo URL del sito viene popolato automaticamente dal dominio scelto. I clienti non devono compilare un campo URL separato.

### Comportamento della ricerca {#search-behaviour}

- La disponibilità del dominio viene controllata in tempo reale con AJAX mentre il cliente digita
- Vengono mostrati suggerimenti di TLD alternativi quando il dominio preferito non è disponibile
- I prezzi vengono recuperati in tempo reale e visualizzati chiaramente (prezzo di registrazione, prezzo di rinnovo, eventuale tariffa per la privacy WHOIS)
- I codici coupon si applicano ai prodotti dominio come a qualsiasi altro prodotto

**Ottimizzazione della reattività della ricerca:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Aggiunta di campi personalizzati al modulo di ricerca dominio:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## Gestione DNS dei clienti {#customer-dns-management}

I clienti possono gestire i record DNS per i loro domini registrati dalla pagina **My Account**, sotto la voce del loro dominio.

### Tipi di record supportati {#supported-record-types}

| Tipo | Uso |
|---|---|
| **A** | Mappa l'hostname a un indirizzo IPv4 |
| **AAAA** | Mappa l'hostname a un indirizzo IPv6 |
| **CNAME** | Crea un alias che punta a un altro hostname |
| **MX** | Imposta il server di scambio posta |
| **TXT** | Aggiungi record SPF, DMARC, di verifica o altri record di testo |

### Quali provider supportano la gestione DNS? {#which-providers-support-dns-management}

La gestione DNS (aggiungere, modificare, eliminare record) è disponibile con **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** e **Openprovider**. I domini **Hostinger** possono aggiornare i nameserver tramite Domain Seller; i record DNS per i domini ospitati sono gestiti dall'integrazione principale di mappatura domini di Hostinger. I domini Namecheap, GoDaddy e NameSilo mostrano informazioni su stato e scadenza, ma il DNS deve essere gestito direttamente nel pannello di controllo del registrar.

### Record DNS predefiniti {#default-dns-records}

Puoi configurare record DNS predefiniti che vengono applicati automaticamente quando un dominio viene registrato. Vai a **Settings › Domain Seller › Default DNS Records**.

I valori dei record predefiniti supportano due token:

| Token | Sostituito con |
|---|---|
| `{DOMAIN}` | Il nome di dominio registrato (ad es., `example.com`) |
| `{SITE_URL}` | L'URL del sito WordPress per il sito del cliente |

**Esempio — punta il dominio apex e www all'IP del tuo server:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: visualizzare e modificare il DNS {#admin-viewing-and-editing-dns}

Gli amministratori di rete possono visualizzare e modificare i record DNS per qualsiasi dominio cliente dalla pagina di modifica del dominio in **Network Admin › Ultimate Multisite › Domains**.
