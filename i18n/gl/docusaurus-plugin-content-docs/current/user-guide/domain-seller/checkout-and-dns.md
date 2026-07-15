---
title: Campo de Checkout e DNS do Cliente
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Gestión de Campos de Pago y DNS del Cliente

## El campo de selección de dominio en el checkout {#the-domain-selection-checkout-field}

El campo **Selección de Dominio** é un elemento del checkout que da a os os clientes a elección sobre como queren obtener o dominio do seu sitio. Añádeselo a calquera formulario de checkout para activar a venta de dominios.

### Añadir o campo a un formulario de checkout {#adding-the-field-to-a-checkout-form}

1. Ve a **Network Admin › Ultimate Multisite › Checkout Forms**
2. Abre ou cría un formulario de checkout
3. No editor do checkout, pulsa en **Add Field** (Añadir Campo)
4. Escolhe **Domain Selection** (Selección de Dominio) da lista de campos
5. Configura as opcións do campo (véase a continuación)
6. Guarda o formulario

### Opcións do campo {#field-options}

**Modos de dominio** — Escolhe que pestañas ve o cliente. Cada modo pode activar ou desativar de forma independente:

| Modo | O que fai |
|---|---|
| **Subdomínio** | O cliente usa un subdominio gratuito na súa rede (ex: `mysite.yournetwork.com`). Non hai que pagar nada. |
| **Registrar Novo Dominio** | O cliente busca un novo dominio e o regista a través do provedor que ten configurado. Usa o produto de dominio que coincida para o precio. |
| **Dominio Existente** | O cliente mapea un dominio que ya pose. Non hai taxa de registo. O dominio se mapea automáticamente ao seu sitio. |

**Modo predeterminado** — Quando os tres modos están activados, que pestaña abre primeiro. Ponlo en **Subdomínio** para manter o registro de dominios opcional, ou en **Registrar Novo Dominio** para fomentar as compras.

**Produto de dominio** — Opcionalmente fija este campo a un produto de dominio específico. Se non se establece, o addon selecciona automáticamente o produto que coincida en base ao TLD (extensión del dominio) que busca o cliente.

### Campos de contacto do registrador {#registrant-contact-fields}

Quando un cliente selecciona a pestaña **Registrar Novo Dominio**, o formulario de checkout añade campos de contacto do registrador de forma inline:

- Nome / Apelido
- Dirección (línea 1, cidade, estado/provincia, código postal, país)
- Número de teléfono

Estes son os que todos os registadores exigen e são validados antes de se fazer a chamada da API de registo. Os números de telemóvel são formatados automaticamente para o formato internacional `+CC.NNN` que os registadores esperam.

### URL do site gerada automaticamente {#auto-generated-site-url}

Quando un customer se regista ou mapeia um domínio, o campo URL do site é preenchido automaticamente com base no domínio escolhido. Os customers não precisam de preencher um campo de URL separado.

### Comportamento da pesquisa {#search-behaviour}

- A disponibilidade do domínio é verificada em tempo real com AJAX enquanto o customer digita
- Sugestões de TLDs alternativos são mostradas quando o domínio preferido não está disponível
- O preço é obtido ao vivo e exibido claramente (preço de registo, preço de renovação, taxa opcional de privacidade WHOIS)
- Os códigos de cupão aplicam-se aos produtos de domínio da mesma forma que a outros produtos

**Ajustar a responsividade da pesquisa:**

```php
// Aumentar o atraso do debounce (milissegundos) para reduzir as chamadas à API em conexões lentas
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // padrão: 500
});
```

**Adicionar campos personalizados ao formulário de pesquisa de domínio:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Notas adicionais',
    ];
    return $fields;
});
```

---

## Gestão de DNS do Customer {#customer-dns-management}

Os customers podem gerir os registos DNS para os seus domínios registados a partir da página **Min Conta**, sob o registo do domínio.

### Tipos de registos suportados {#supported-record-types}

| Tipo | Uso |
|---|---|
| **A** | Mapear nome de host para endereço IPv4 |
| **AAAA** | Mapear nome de host para endereço IPv6 |
| **CNAME** | Criar um alias que aponta para outro nome de host |
| **MX** | Definir o servidor de troca de correio |
| **TXT** | Adicionar registos SPF, DMARC, verificação ou outros registos de texto |

### Quais os provedores que suportam a gestão de DNS? {#which-providers-support-dns-management}

A administración de DNS (añadir, editar, eliminar registros) está disponible con **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** e **Openprovider**. Los dominios de **Hostinger** se poden actualizar os servidores de nomes a través do Domain Seller; os registros de DNS para dominios albergados son gestionados pola integración central de mapeo de dominios de Hostinger. Os dominios de Namecheap, GoDaddy e NameSilo mostran o estado e a data de caducidade, pero o DNS debe ser gestionado directamente no no panel de control do registrador.

### Registros de DNS predeterminados {#default-dns-records}

Podes configurar os registros de DNS predeterminados que se aplican automáticamente cando un dominio se regista. Ve a **Settings › Domain Seller › Default DNS Records**.

Os valores dos registros predeterminados soportan dous tokens:

| Token | Substituído por |
|---|---|
| `{DOMAIN}` | O nome do dominio rexistrado (ex: `example.com`) |
| `{SITE_URL}` | A URL do sitio WordPress para o sitio do cliente |

**Exemplo — apuntar o dominio principal e www ao IP do servidor:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: visualización e edición de DNS {#admin-viewing-and-editing-dns}

Os administradores de rede poden visualizar e editar os registros de DNS para cualquier dominio do cliente desde a páxina de edición do dominio en **Network Admin › Ultimate Multisite › Domains**.
