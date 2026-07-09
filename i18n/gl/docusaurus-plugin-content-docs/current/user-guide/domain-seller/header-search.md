---
title: Busca de dominios na cabeceira
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Busca de dominio na cabeceira {#header-domain-search}

Usa esta configuración cando queiras un pequeno formulario na cabeceira que inicie unha busca de dominio e logo permita ao cliente escoller entre os dominios dispoñibles dentro do checkout de Ultimate Multisite.

## Requisitos {#requirements}

- Ultimate Multisite activo na rede.
- Multisite Ultimate Domain Seller activo na rede.
- Polo menos un produto activo de rexistro de dominios con:
  - `domain_provider` establecido nun provedor configurado.
  - TLDs compatibles configurados, por exemplo `com`, `net` e `org`.
- Un formulario de checkout válido que conteña o campo **Selección de dominio**.

## Formulario de checkout {#checkout-form}

1. Crea ou edita o formulario de checkout usado pola páxina de rexistro.
2. Engade os campos normais obrigatorios de checkout/Account, incluído **Nome de usuario**. Un formulario de checkout que conteña só o campo de dominio é rexeitado pola validación de Ultimate Multisite.
3. Engade un campo **Selección de dominio**.
4. Establece o modo de Selección de dominio en **Só rexistrar** cando o fluxo deba centrarse en dominios rexistrados en lugar de subdominios gratuítos ou dominios existentes.
5. Asigna o produto de rexistro de dominio a ese campo.

A páxina de rexistro debería renderizar o formulario de checkout, por exemplo:

```text
[wu_checkout slug="domain-form"]
```

## Formulario da cabeceira {#header-form}

Engade un pequeno formulario `GET` na cabeceira do sitio que envíe o termo de busca introducido á páxina de checkout como `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Non preselecciones un dominio en JavaScript personalizado da cabeceira. A cabeceira só debe pasar o termo de busca. O script de checkout de Domain Seller le `?domain_name=example`, enche a caixa de busca do checkout e executa a busca de dispoñibilidade para que o cliente poida escoller entre os dominios devoltos.

## Comportamento esperado {#expected-behaviour}

Buscar `example` na cabeceira debería abrir:

```text
/register/?domain_name=example
```

O checkout debería mostrar entón resultados seleccionables como:

- `example.com`
- `example.net`
- `example.org` non dispoñible
- outros TLDs compatibles co provedor

Despois de seleccionar un resultado dispoñible, o resumo do pedido debería incluír o produto de rexistro de dominio e o nome de dominio seleccionado.

## Verificación {#verification}

1. Abre a páxina de inicio.
2. Busca un nome sen dominio, por exemplo `example`.
3. Confirma que o URL do checkout inclúe `?domain_name=example`.
4. Confirma que o campo de dominio do checkout contén `example`.
5. Confirma que aparece unha lista de opcións de dominio.
6. Fai clic en **Seleccionar** para un dominio dispoñible.
7. Confirma que o resumo do pedido contén `Domain Registration - example.com` ou o dominio seleccionado.

## Solución de problemas {#troubleshooting}

- Se non aparece ningunha lista, comproba a lapela de rede do navegador para `admin-ajax.php?action=wu_domain_search` e confirma que devolve `domains` ou `results` non baleiros.
- Se o formulario de checkout falla a validación ao gardar, engade os campos de Account obrigatorios, como **Nome de usuario**.
- Se seleccionar un dominio non actualiza o carriño, confirma que `window.wu_checkout_form` existe e que os recursos de checkout de Domain Seller están cargados na páxina de checkout.
