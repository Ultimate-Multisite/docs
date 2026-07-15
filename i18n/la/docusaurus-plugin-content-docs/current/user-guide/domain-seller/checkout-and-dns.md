---
title: Campo de pago y DNS del cliente
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Campo de Pago y Gestión DNS del Cliente

## El campo de selección de dominio en el checkout {#the-domain-selection-checkout-field}

El campo **Selección de Dominio** es un elemento del checkout que da a los clientes la opción de cómo obtener el dominio de su sitio. Añádalo a cualquier formulario de checkout para permitir la venta de dominios.

### Añadir el campo a un formulario de checkout {#adding-the-field-to-a-checkout-form}

1. Ve a **Network Admin › Ultimate Multisite › Checkout Forms**
2. Abre o crea un formulario de checkout
3. En el editor de checkout, haz clic en **Add Field** (Añadir Campo)
4. Elige **Domain Selection** (Selección de Dominio) de la lista de campos
5. Configura las opciones del campo (ver abajo)
6. Guarda el formulario

### Opciones del campo {#field-options}

**Modos de dominio** — Elige qué pestañas verá el cliente. Cada modo se puede activar o desactivar independientemente:

| Modo | Qué hace |
|---|---|
| **Subdominio** | El cliente usa un subdominio gratuito en tu red (ejemplo: `mysite.yournetwork.com`). No se necesita pago. |
| **Registrar Nuevo Dominio** | El cliente busca un dominio nuevo y lo registra a través del proveedor que hayas configurado. Utiliza el producto de dominio correspondiente para la fijación de precios. |
| **Dominio Existente** | El cliente vincula un dominio que ya posee. No hay tarifa de registro. El dominio se vincula automáticamente a su sitio.

**Modo predeterminado** — Cuando los tres modos están activados, ¿qué pestaña se abre primero? Configúralo en **Subdomain** (Subdominio) para mantener el registro de dominios opcional, o en **Register New Domain** (Registrar Nuevo Dominio) para fomentar las compras.

**Producto de dominio** — Opcionalmente fija este campo a un producto de dominio específico. Si no se establece, el addon selecciona automáticamente el producto que coincide basándose en la TLD que busca el cliente.

### Campos de contacto del titular {#registrant-contact-fields}

Cuando un cliente selecciona la pestaña **Register New Domain** (Registrar Nuevo Dominio), el formulario de checkout añade los campos de contacto del titular de forma integrada:

- Nombre / Apellido
- Dirección (línea 1, ciudad, estado/provincia, código postal, país)
- Número de teléfono

Hæstia sunt exigenda ab omnibus registratoribus et validi sunt antequam API-appell ad registracionem feceratur. Numerus telefonorum automatico formatus in formatum internationalem `+CC.NNN` quod registratorum expectant.

### URL sitii generata automatico {#auto-generated-site-url}

Cum clientis se registrat aut domenam mappat, campo URL sitii automatico llenatur ex domini electo. Clientibus non est necesse llenare campi separate URL.

### Comportamentum quaerendi {#search-behaviour}

- Disponibilium dominii in tempore reali cum AJAX verificatur dum clientor scripit
- Suggestiones TLD alternativi sunt ostendae cum preferentia dominio non est disponibilis
- Pretiis live accipiuntur et claris ostenduntur (pretium registracionis, pretium renovationis, optionalis numerum pro privacy WHOIS)
- Codices coupon in productos dominii applicantur ut omnes alia.

**Tuning responsivitatem quaerendi:**

```php
// Incrementa temporis debounce (millisecondae) ad minutionem appellorum API in connectionibus lentis
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Adde campos customes ad formam quaerendi dominii:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Notae additionales',
    ];
    return $fields;
});
```

---

## Gestion DNS pro clientibus {#customer-dns-management}

Clientia record DNS domini propriorum potest ex page **My Account**, sub entry dominii, gerere.

### Typi record suportati {#supported-record-types}

| Typus | Usus |
|---|---|
| **A** | Hostname ad adressam IPv4 mappat |
| **AAAA** | Hostname ad adressam IPv6 mappat |
| **CNAME** | Alias creat ad aliud hostname ponens |
| **MX** | Servitium exchange epistolarum ponit |
| **TXT** | SPF, DMARC, verification vel alia records textus addit |

### Quae provider DNS management supportant? {#which-providers-support-dns-management}

La gestion de DNS (añadir, editar, eliminar registros) está disponible con **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** y **Openprovider**. Los dominios de **Hostinger** pueden actualizar los servidores de nombres a través del Vendedor de Dominios; los registros DNS para los dominios alojados son gestionados por la integración central de mapeo de dominios de Hostinger. Namecheap, GoDaddy y NameSilo muestran el estado y la fecha de caducidad, pero el DNS debe gestionarse directamente en el panel de control del registrador.

### Registros DNS predeterminados {#default-dns-records}

Puedes configurar registros DNS predeterminados que se aplican automáticamente cuando se registra un dominio. Ve a **Settings › Domain Seller › Default DNS Records**.

Los valores de registro predeterminado soportan dos tokens:

| Token | Reemplazado con |
|---|---|
| `{DOMAIN}` | El nombre del dominio registrado (ejemplo: `example.com`) |
| `{SITE_URL}` | La URL del sitio de WordPress para el sitio del cliente |

**Ejemplo — apuntar el dominio raíz y www a la IP de tu servidor:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Administrador: ver y editar DNS {#admin-viewing-and-editing-dns}

Los administradores de red pueden ver y editar los registros DNS para cualquier dominio de cliente desde la página de edición del dominio en **Network Admin › Ultimate Multisite › Domains**.
