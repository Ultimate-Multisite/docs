---
title: Búsqueda de dominio del encabezado
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Búsqueda de dominio en el encabezado

Usa esta configuración cuando quieras un pequeño formulario en el encabezado que inicie una búsqueda de dominio y luego permita al cliente elegir entre los dominios disponibles dentro del checkout de Ultimate Multisite.

## Requisitos {#requirements}

- Ultimate Multisite activo en la red.
- Multisite Ultimate Domain Seller activo en la red.
- Al menos un producto activo de registro de dominios con:
  - `domain_provider` configurado con un proveedor configurado.
  - TLDs compatibles configurados, por ejemplo `com`, `net` y `org`.
- Un formulario de checkout válido que contenga el campo **Selección de dominio**.

## Formulario de checkout {#checkout-form}

1. Crea o edita el formulario de checkout usado por la página de registro.
2. Añade los campos normales obligatorios de checkout/cuenta, incluido **Nombre de usuario**. Ultimate Multisite rechaza en la validación un formulario de checkout que contenga solo el campo de dominio.
3. Añade un campo **Selección de dominio**.
4. Establece el modo de Selección de dominio en **Solo registrar** cuando el flujo deba centrarse en dominios registrados en lugar de subdominios gratuitos o dominios existentes.
5. Asigna el producto de registro de dominio a ese campo.

La página de registro debería renderizar el formulario de checkout, por ejemplo:

```text
[wu_checkout slug="domain-form"]
```

## Formulario del encabezado {#header-form}

Añade un pequeño formulario `GET` en el encabezado del sitio que envíe el término de búsqueda introducido a la página de checkout como `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

No preselecciones un dominio en JavaScript personalizado del encabezado. El encabezado solo debe pasar el término de búsqueda. El script de checkout de Domain Seller lee `?domain_name=example`, rellena el cuadro de búsqueda del checkout y ejecuta la búsqueda de disponibilidad para que el cliente pueda elegir entre los dominios devueltos.

## Comportamiento esperado {#expected-behaviour}

Buscar `example` en el encabezado debería abrir:

```text
/register/?domain_name=example
```

El checkout debería mostrar entonces resultados seleccionables como:

- `example.com`
- `example.net`
- `example.org` no disponible
- otros TLDs compatibles con el proveedor

Después de seleccionar un resultado disponible, el resumen del pedido debería incluir el producto de registro de dominio y el nombre de dominio seleccionado.

## Verificación {#verification}

1. Abre la página de inicio.
2. Busca un nombre sin TLD, por ejemplo `example`.
3. Confirma que la URL de checkout incluye `?domain_name=example`.
4. Confirma que el campo de dominio del checkout contiene `example`.
5. Confirma que aparece una lista de opciones de dominio.
6. Haz clic en **Seleccionar** para un dominio disponible.
7. Confirma que el resumen del pedido contiene `Domain Registration - example.com` o el dominio seleccionado.

## Solución de problemas {#troubleshooting}

- Si no aparece ninguna lista, revisa la pestaña de red del navegador para `admin-ajax.php?action=wu_domain_search` y confirma que devuelve `domains` o `results` no vacíos.
- Si el formulario de checkout falla la validación al guardar, añade los campos de cuenta obligatorios, como **Nombre de usuario**.
- Si seleccionar un dominio no actualiza el carrito, confirma que `window.wu_checkout_form` existe y que los assets de checkout de Domain Seller están cargados en la página de checkout.
