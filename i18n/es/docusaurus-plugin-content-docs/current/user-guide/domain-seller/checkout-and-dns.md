---
title: Campo de finalización de compra y DNS del cliente
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Campo de checkout y gestión de DNS de clientes

## El campo de checkout Domain Selection {#the-domain-selection-checkout-field}

El campo **Domain Selection** es un elemento de checkout que ofrece a los clientes la opción de cómo obtener el dominio de su sitio. Añádelo a cualquier formulario de checkout para habilitar la venta de dominios.

### Añadir el campo a un formulario de checkout {#adding-the-field-to-a-checkout-form}

1. Ve a **Network Admin › Ultimate Multisite › Checkout Forms**
2. Abre o crea un formulario de checkout
3. En el editor de checkout, haz clic en **Add Field**
4. Elige **Domain Selection** en la lista de campos
5. Configura las opciones del campo (ver abajo)
6. Guarda el formulario

### Opciones del campo {#field-options}

**Modos de dominio** — Elige qué pestañas ve el cliente. Cada modo se puede activar o desactivar de forma independiente:

| Modo | Qué hace |
|---|---|
| **Subdominio** | El cliente usa un subdominio gratuito en tu red (p. ej., `mysite.yournetwork.com`). No se requiere pago. |
| **Registrar nuevo dominio** | El cliente busca un dominio nuevo y lo registra a través de tu proveedor configurado. Usa el producto de dominio correspondiente para el precio. |
| **Dominio existente** | El cliente asigna un dominio que ya posee. Sin tarifa de registro. El dominio se asigna automáticamente a su sitio. |

**Modo predeterminado** — Cuando los tres modos están activados, qué pestaña se abre primero. Configúralo como **Subdominio** para mantener el registro de dominios opcional, o como **Registrar nuevo dominio** para fomentar las compras.

**Producto de dominio** — Opcionalmente, fija este campo a un producto de dominio específico. Si no se configura, el addon selecciona automáticamente el producto correspondiente según el TLD que busque el cliente.

### Campos de contacto del registrante {#registrant-contact-fields}

Cuando un cliente selecciona la pestaña **Registrar nuevo dominio**, el formulario de checkout añade campos de contacto del registrante en línea:

- Nombre / Apellidos
- Dirección de correo electrónico
- Dirección (línea 1, ciudad, estado/provincia, código postal, país)
- Número de teléfono

Estos son requeridos por todos los registradores y se validan antes de realizar la llamada a la API de registro. Los números de teléfono se formatean automáticamente al formato internacional `+CC.NNN` esperado por los registradores.

### URL del sitio generada automáticamente {#auto-generated-site-url}

Cuando un cliente registra o asigna un dominio, el campo de URL del sitio se completa automáticamente a partir del dominio elegido. Los clientes no necesitan rellenar un campo de URL separado.

### Comportamiento de búsqueda {#search-behaviour}

- La disponibilidad del dominio se comprueba en tiempo real con AJAX mientras el cliente escribe
- Se muestran sugerencias de TLD alternativos cuando el dominio preferido no está disponible
- El precio se obtiene en vivo y se muestra claramente (precio de registro, precio de renovación, tarifa opcional de privacidad WHOIS)
- Los códigos de cupón se aplican a los productos de dominio igual que a cualquier otro producto

**Ajustar la capacidad de respuesta de la búsqueda:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Añadir campos personalizados al formulario de búsqueda de dominios:**

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

## Gestión de DNS de clientes {#customer-dns-management}

Los clientes pueden gestionar registros DNS para sus dominios registrados desde la página **My Account**, bajo la entrada de su dominio.

### Tipos de registro compatibles {#supported-record-types}

| Tipo | Uso |
|---|---|
| **A** | Asignar el nombre de host a una dirección IPv4 |
| **AAAA** | Asignar el nombre de host a una dirección IPv6 |
| **CNAME** | Crear un alias que apunte a otro nombre de host |
| **MX** | Configurar el servidor de intercambio de correo |
| **TXT** | Añadir SPF, DMARC, verificación u otros registros de texto |

### ¿Qué proveedores admiten la gestión de DNS? {#which-providers-support-dns-management}

La gestión de DNS (añadir, editar, eliminar registros) está disponible con **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** y **Openprovider**. Los dominios de **Hostinger** pueden actualizar nameservers a través de Domain Seller; los registros DNS para dominios alojados se gestionan mediante la integración principal de asignación de dominios de Hostinger. Los dominios de Namecheap, GoDaddy y NameSilo muestran información de estado y caducidad, pero el DNS debe gestionarse directamente en el panel de control del registrador.

### Registros DNS predeterminados {#default-dns-records}

Puedes configurar registros DNS predeterminados que se aplican automáticamente cuando se registra un dominio. Ve a **Settings › Domain Seller › Default DNS Records**.

Los valores de registro predeterminados admiten dos tokens:

| Token | Reemplazado por |
|---|---|
| `{DOMAIN}` | El nombre de dominio registrado (p. ej., `example.com`) |
| `{SITE_URL}` | La URL del sitio WordPress para el sitio del cliente |

**Ejemplo — apunta el dominio apex y www a la IP de tu servidor:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Administrador: ver y editar DNS {#admin-viewing-and-editing-dns}

Los administradores de red pueden ver y editar registros DNS de cualquier dominio de cliente desde la página de edición del dominio en **Network Admin › Ultimate Multisite › Domains**.
