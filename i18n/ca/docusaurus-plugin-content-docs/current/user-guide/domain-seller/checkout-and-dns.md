---
title: Camp de pagament i DNS del client
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Gestió de Camp de Pagament i DNS del Client

## El camp de Selecció de Domini

El camp de **Selecció de Domini** és un element de pagament que ofereix als clients la possibilitat de triar com obtenir el domini del seu lloc web. Afegueu-ho a qualsevol form de pagament per habilitar la venda de dominis.

### Afegir el camp a un form de pagament

1. Navegueu a **Network Admin › Ultimate Multisite › Checkout Forms**
2. Obreu o creeu un form de pagament
3. A l'editor de pagament, cliqueu a **Add Field**
4. Trieu **Domain Selection** de la llista de camps
5. Configureu les opcions del camp (veure a continuació)
6. Guardeu el form

### Opcions del camp

**Modes de domini** — Trieu quins encaixos veurà el client. Cada mode es pot habilitar o deshabilitar de manera independent.

| Mode | Què fa |
|---|---|
| **Subdomain** | El client utilitza un subdomini gratuït de la vostra xarxa (ex: `mysite.yournetwork.com`). No cal pagament. |
| **Register New Domain** | El client cerca un domini nou i el registra a través del proveïdor configurat. Utilitza el producte de domini que coincideixi per a la preu. |
| **Existing Domain** | El client mapeja un domini que ja poseeix. Sense taxa de registre. El domini es mapeja automàticament al seu lloc web. |

**Mode predeterminat** — Quan els tres modes estan habilitats, quin encaix s'obre primer. Configureu a **Subdomain** per mantenir el registre de dominis opcional, o a **Register New Domain** per incentivar les compres.

**Domain product** — Opcionalment, podeu vincular aquest camp a un producte de domini específic. Si no es configura, l'addon selecciona automàticament el producte que coincideixi basant-se en el TLD que el client cerca.

### Camps de contacte del registrant

Quan un client selecciona l'encaix **Register New Domain**, el form de pagament afegeu camps de contacte del registrant de manera inline:

- Nom i cognoms
- Adreça de correu electrònic
- Adreça (línea 1, ciutat, estat/província, codi postal, país)
- Número de telèfon

Aquests camps són obligatoris per a tots els registradors i es validen abans de fer la crida a l'API de registre. Els números de telèfon es formateuen automàticament al format internacional `+CC.NNN` que requereixen els registradors.

### URL del lloc web autogenerada

Quan un client registra o mapeja un domini, el camp d'URL del lloc web s'omple automàticament a partir del domini seleccionat. Els clients no necessiten omplir un camp d'URL separat.

### Comportament de la cerca

- La disponibilitat del domini es comprueba en temps real amb AJAX mentre el client escriu
- Es mostren suggeriments alternatius de TLD quan el domini preferit no està disponible
- El preu es recupera en directe i es mostra clarament (preu de registre, preu de renovació, taxa opcional de privacitat WHOIS)
- Els codis de cupon s'apliquen als productes de domini igual que a qualsevol altre producte

**Ajustar la responsivitat de la cerca:**

```php
// Augmentar el retard de debounce (milisegons) per reduir les crides a l'API en connexions lents
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Afegir camps personalitzats al form de cerca de domini:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Notes addicionals',
    ];
    return $fields;
});
```

---

## Gestió DNS del client

Els clients poden gestionar els registres DNS dels seus dominis registrats des de la pàgina **My Account**, sota l'entrada del seu domini.

### Tipus de registre suportats

| Type | Ús |
|---|---|
| **A** | Mapeja un nom de domini a una adreça IPv4 |
| **AAAA** | Mapeja un nom de domini a una adreça IPv6 |
| **CNAME** | Crea un alias que apunta a un altre nom de domini |
| **MX** | Estableix el servidor d'intercanvi de correu |
| **TXT** | Afegir registres de text SPF, DMARC, de verificació o altres |

### Quins proveïdors suporten la gestió DNS?

La gestió DNS (afegir, editar, eliminar registres) està disponible amb **OpenSRS**, **ResellerClub** i **Enom**. Els dominis de Namecheap, GoDaddy i NameSilo mostren l'estat i la informació d'expiració, però el DNS ha de gestionar-se directament al panell de control del registrador.

### Registres DNS predeterminats

Podeu configurar registres DNS predeterminats que es complequen automàticament quan es registra un domini. Navegueu a **Settings › Domain Seller › Default DNS Records**.

Els valors de registre predeterminats suporten dos tokens:

| Token | Es substitueix per |
|---|---|
| `{DOMAIN}` | El nom de domini registrat (ex: `example.com`) |
| `{SITE_URL}` | L'URL del lloc web de WordPress per al client |

**Exemple — apuntar el domini àpice i www a l'IP del vostre servidor:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: veure i editar DNS

Els admins de la xarxa poden veure i editar els registres DNS de qualsevol domini del client des de la pàgina d'edició del domini a **Network Admin › Ultimate Multisite › Domains**.
