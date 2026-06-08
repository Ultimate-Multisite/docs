---
title: Campo de Pago y DNS del Cliente
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Gestión de Campos de Pago y DNS del Cliente

## El campo de selección de dominio en el pago

El campo **Domain Selection** es un elemento de pago que le da a los clientes la opción de cómo obtener el dominio de su sitio. Añádalo a cualquier formulario de pago para habilitar la venta de dominios.

### Añadir el campo a un formulario de pago

1. Vaya a **Network Admin › Ultimate Multisite › Checkout Forms**
2. Abra o cree un formulario de pago
3. En el editor de pago, haga clic en **Add Field**
4. Elija **Domain Selection** de la lista de campos
5. Configure las opciones del campo (ver abajo)
6. Guarde el formulario

### Opciones del campo

**Domain modes** — Elija qué pestañas ve el cliente. Cada modo se puede habilitar o deshabilitar de forma independiente:

| Mode | What it does |
|---|---|
| **Subdomain** | El cliente usa un subdominio gratuito en su red (ej., `mysite.yournetwork.com`). No requiere pago. |
| **Register New Domain** | El cliente busca y registra un dominio nuevo a través de su proveedor configurado. Utiliza el producto de dominio coincidente para la fijación de precios. |
| **Existing Domain** | El cliente enlaza un dominio que ya posee. Sin tarifa de registro. El dominio se enlaza automáticamente a su sitio. |

**Default mode** — Cuando los tres modos están habilitados, qué pestaña se abre primero. Configúrelo en **Subdomain** para mantener el registro de dominio opcional, o en **Register New Domain** para fomentar las compras.

**Domain product** — Opcionalmente, fije este campo a un producto de dominio específico. Si no se establece, el addon selecciona automáticamente el producto coincidente basándose en la TLD que el cliente busca.

### Campos de contacto del titular

Cuando un cliente selecciona la pestaña **Register New Domain**, el formulario de pago añade campos de contacto del titular en línea:

- First name / Last name
- Email address
- Address (line 1, city, state/province, postal code, country)
- Phone number

Estos son requeridos por todos los registradores y se validan antes de realizar la llamada a la API de registro. Los números de teléfono se formatean automáticamente al formato internacional `+CC.NNN` que esperan los registradores.

### URL del sitio autogenerada

Cuando un cliente registra o enlaza un dominio, el campo URL del sitio se rellena automáticamente a partir del dominio elegido. Los clientes no necesitan rellenar un campo de URL separado.

### Comportamiento de búsqueda

- La disponibilidad del dominio se comprueba en tiempo real con AJAX mientras el cliente escribe
- Se muestran sugerencias de TLD alternativas cuando el dominio preferido no está disponible
- Los precios se obtienen en vivo y se muestran claramente (precio de registro, precio de renovación, tarifa opcional de privacidad WHOIS)
- Los códigos de cupón se aplican a los productos de dominio igual que a cualquier otro producto

**Ajustando la capacidad de respuesta de la búsqueda:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Añadir campos personalizados al formulario de búsqueda de dominio:**

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

## Gestión de DNS del Cliente

Los clientes pueden gestionar los registros DNS de sus dominios registrados desde la página **My Account**, bajo la entrada de su dominio.

### Tipos de registros compatibles

| Type | Use |
|---|---|
| **A** | Mapea el nombre de host a una dirección IPv4 |
| **AAAA** | Mapea el nombre de host a una dirección IPv6 |
| **CNAME** | Crea un alias que apunta a otro nombre de host |
| **MX** | Establece el servidor de intercambio de correo |
| **TXT** | Añade registros de texto SPF, DMARC, de verificación u otros |

### ¿Qué proveedores admiten la gestión de DNS?

La gestión de DNS (añadir, editar, eliminar registros) está disponible con **OpenSRS**, **ResellerClub** y **Enom**. Los dominios de Namecheap, GoDaddy y NameSilo muestran información de estado y vencimiento, pero el DNS debe gestionarse directamente en el panel de control del registrador.

### Registros DNS predeterminados

Puede configurar registros DNS predeterminados que se aplican automáticamente cuando se registra un dominio. Vaya a **Settings › Domain Seller › Default DNS Records**.

Los valores de registro predeterminados admiten dos tokens:

| Token | Replaced with |
|---|---|
| `{DOMAIN}` | El nombre de dominio registrado (ej., `example.com`) |
| `{SITE_URL}` | La URL del sitio de WordPress para el sitio del cliente |

**Ejemplo — Apuntar el dominio raíz y www a la IP de su servidor:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Administrador: visualizar y editar DNS

Los administradores de red pueden ver y editar los registros DNS de cualquier dominio de cliente desde la página de edición del dominio en **Network Admin › Ultimate Multisite › Domains**.
