---
title: Camp de finalització de compra i DNS del client
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Camp de checkout i gestió de DNS dels clients {#checkout-field-and-customer-dns-management}

## El camp de checkout Domain Selection {#the-domain-selection-checkout-field}

El camp **Domain Selection** és un element de checkout que ofereix als clients una opció sobre com obtenir el domini del seu lloc. Afegiu-lo a qualsevol formulari de checkout per habilitar la venda de dominis.

### Afegir el camp a un formulari de checkout {#adding-the-field-to-a-checkout-form}

1. Aneu a **Network Admin › Ultimate Multisite › Checkout Forms**
2. Obriu o creeu un formulari de checkout
3. A l’editor de checkout, feu clic a **Add Field**
4. Trieu **Domain Selection** de la llista de camps
5. Configureu les opcions del camp (vegeu més avall)
6. Deseu el formulari

### Opcions del camp {#field-options}

**Modes de domini** — Trieu quines pestanyes veu el client. Cada mode es pot habilitar o deshabilitar independentment:

| Mode | Què fa |
|---|---|
| **Subdomain** | El client utilitza un subdomini gratuït a la vostra xarxa (p. ex., `mysite.yournetwork.com`). No cal cap pagament. |
| **Register New Domain** | El client cerca un domini nou i el registra a través del vostre proveïdor configurat. Utilitza el producte de domini corresponent per al preu. |
| **Existing Domain** | El client mapeja un domini que ja posseeix. Sense quota de registre. El domini es mapeja automàticament al seu lloc. |

**Mode per defecte** — Quan tots tres modes estan habilitats, quina pestanya s’obre primer. Definiu-ho com a **Subdomain** per mantenir el registre de dominis opcional, o **Register New Domain** per fomentar les compres.

**Producte de domini** — Opcionalment, fixeu aquest camp a un producte de domini específic. Si no es defineix, l’addon selecciona automàticament el producte corresponent segons el TLD que cerqui el client.

### Camps de contacte del registrant {#registrant-contact-fields}

Quan un client selecciona la pestanya **Register New Domain**, el formulari de checkout afegeix camps de contacte del registrant en línia:

- Nom / Cognom
- Adreça electrònica
- Adreça (línia 1, ciutat, estat/província, codi postal, país)
- Número de telèfon

Aquests camps són obligatoris per a tots els registradors i es validen abans que es faci la crida a l’API de registre. Els números de telèfon es formaten automàticament al format internacional `+CC.NNN` esperat pels registradors.

### URL del lloc generada automàticament {#auto-generated-site-url}

Quan un client registra o mapeja un domini, el camp d’URL del lloc s’emplena automàticament a partir del domini triat. Els clients no han d’emplenar cap camp d’URL separat.

### Comportament de cerca {#search-behaviour}

- La disponibilitat del domini es comprova en temps real amb AJAX mentre el client escriu
- Es mostren suggeriments de TLD alternatius quan el domini preferit no està disponible
- El preu s’obté en directe i es mostra clarament (preu de registre, preu de renovació, quota opcional de privadesa WHOIS)
- Els codis de cupó s’apliquen als productes de domini igual que a qualsevol altre producte

**Ajustar la capacitat de resposta de la cerca:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Afegir camps personalitzats al formulari de cerca de domini:**

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

## Gestió de DNS dels clients {#customer-dns-management}

Els clients poden gestionar els registres DNS dels seus dominis registrats des de la pàgina **My Account**, sota l’entrada del seu domini.

### Tipus de registre admesos {#supported-record-types}

| Tipus | Ús |
|---|---|
| **A** | Mapeja el nom d’amfitrió a l’adreça IPv4 |
| **AAAA** | Mapeja el nom d’amfitrió a l’adreça IPv6 |
| **CNAME** | Crea un àlies que apunta a un altre nom d’amfitrió |
| **MX** | Defineix el servidor d’intercanvi de correu |
| **TXT** | Afegeix SPF, DMARC, verificació o altres registres de text |

### Quins proveïdors admeten la gestió de DNS? {#which-providers-support-dns-management}

La gestió de DNS (afegir, editar, suprimir registres) està disponible amb **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** i **Openprovider**. Els dominis de **Hostinger** poden actualitzar els servidors de noms mitjançant Domain Seller; els registres DNS dels dominis allotjats es gestionen amb la integració principal de mapatge de dominis de Hostinger. Els dominis de Namecheap, GoDaddy i NameSilo mostren l’estat i la informació de caducitat, però el DNS s’ha de gestionar directament al tauler de control del registrador.

### Registres DNS per defecte {#default-dns-records}

Podeu configurar registres DNS per defecte que s’apliquen automàticament quan es registra un domini. Aneu a **Settings › Domain Seller › Default DNS Records**.

Els valors de registre per defecte admeten dos tokens:

| Token | Substituït per |
|---|---|
| `{DOMAIN}` | El nom de domini registrat (p. ex., `example.com`) |
| `{SITE_URL}` | L’URL del lloc WordPress del lloc del client |

**Exemple — apunteu el domini apex i www a la IP del vostre servidor:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: veure i editar DNS {#admin-viewing-and-editing-dns}

Els administradors de xarxa poden veure i editar registres DNS per a qualsevol domini de client des de la pàgina d’edició del domini a **Network Admin › Ultimate Multisite › Domains**.
