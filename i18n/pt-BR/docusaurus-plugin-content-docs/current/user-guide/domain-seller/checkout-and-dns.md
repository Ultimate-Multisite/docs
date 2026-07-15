---
title: Campo de checkout e DNS do cliente
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Gerenciamento do campo de finalização de compra e DNS de clientes

## O campo de finalização de compra Seleção de domínio {#the-domain-selection-checkout-field}

O campo **Seleção de domínio** é um elemento de finalização de compra que oferece aos clientes uma escolha de como obter o domínio do site deles. Adicione-o a qualquer formulário de finalização de compra para habilitar a venda de domínios.

### Adicionando o campo a um formulário de finalização de compra {#adding-the-field-to-a-checkout-form}

1. Vá para **Admin da rede › Ultimate Multisite › Formulários de finalização de compra**
2. Abra ou crie um formulário de finalização de compra
3. No editor de finalização de compra, clique em **Adicionar campo**
4. Escolha **Seleção de domínio** na lista de campos
5. Configure as opções do campo (veja abaixo)
6. Salve o formulário

### Opções do campo {#field-options}

**Modos de domínio** — Escolha quais abas o cliente vê. Cada modo pode ser habilitado ou desabilitado independentemente:

| Modo | O que ele faz |
|---|---|
| **Subdomínio** | O cliente usa um subdomínio gratuito na sua rede (por exemplo, `mysite.yournetwork.com`). Nenhum pagamento é necessário. |
| **Registrar novo domínio** | O cliente pesquisa um novo domínio e o registra por meio do provedor configurado. Usa o produto de domínio correspondente para a definição de preço. |
| **Domínio existente** | O cliente mapeia um domínio que já possui. Sem taxa de registro. O domínio é mapeado automaticamente para o site dele. |

**Modo padrão** — Quando todos os três modos estão habilitados, qual aba abre primeiro. Defina como **Subdomínio** para manter o registro de domínio opcional, ou **Registrar novo domínio** para incentivar compras.

**Produto de domínio** — Opcionalmente fixe este campo a um produto de domínio específico. Se não for definido, o addon seleciona automaticamente o produto correspondente com base no TLD que o cliente pesquisa.

### Campos de contato do registrante {#registrant-contact-fields}

Quando um cliente seleciona a aba **Registrar novo domínio**, o formulário de finalização de compra adiciona campos de contato do registrante em linha:

- Nome / Sobrenome
- Endereço de e-mail
- Endereço (linha 1, cidade, estado/província, código postal, país)
- Número de telefone

Eles são exigidos por todos os registradores e validados antes que a chamada da API de registro seja feita. Números de telefone são formatados automaticamente no formato internacional `+CC.NNN` esperado pelos registradores.

### URL do site gerada automaticamente {#auto-generated-site-url}

Quando um cliente registra ou mapeia um domínio, o campo de URL do site é preenchido automaticamente a partir do domínio escolhido. Os clientes não precisam preencher um campo de URL separado.

### Comportamento da pesquisa {#search-behaviour}

- A disponibilidade do domínio é verificada em tempo real com AJAX enquanto o cliente digita
- Sugestões de TLDs alternativos são exibidas quando o domínio preferido não está disponível
- Os preços são buscados ao vivo e exibidos com clareza (preço de registro, preço de renovação, taxa opcional de privacidade WHOIS)
- Códigos de cupom se aplicam a produtos de domínio da mesma forma que a qualquer outro produto

**Ajustando a responsividade da pesquisa:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Adicionando campos personalizados ao formulário de pesquisa de domínio:**

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

## Gerenciamento de DNS de clientes {#customer-dns-management}

Os clientes podem gerenciar registros DNS para seus domínios registrados na página **My Account**, na entrada do domínio deles.

### Tipos de registro compatíveis {#supported-record-types}

| Tipo | Uso |
|---|---|
| **A** | Mapear hostname para endereço IPv4 |
| **AAAA** | Mapear hostname para endereço IPv6 |
| **CNAME** | Criar um alias apontando para outro hostname |
| **MX** | Definir servidor de troca de e-mails |
| **TXT** | Adicionar SPF, DMARC, verificação ou outros registros de texto |

### Quais provedores oferecem suporte ao gerenciamento de DNS? {#which-providers-support-dns-management}

O gerenciamento de DNS (adicionar, editar, excluir registros) está disponível com **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** e **Openprovider**. Domínios **Hostinger** podem atualizar nameservers por meio do Vendedor de domínios; os registros DNS para domínios hospedados são gerenciados pela integração principal de mapeamento de domínios da Hostinger. Domínios Namecheap, GoDaddy e NameSilo exibem informações de status e expiração, mas o DNS deve ser gerenciado diretamente no painel de controle do registrador.

### Registros DNS padrão {#default-dns-records}

Você pode configurar registros DNS padrão que são aplicados automaticamente quando um domínio é registrado. Vá para **Configurações › Vendedor de domínios › Registros DNS padrão**.

Valores de registro padrão oferecem suporte a dois tokens:

| Token | Substituído por |
|---|---|
| `{DOMAIN}` | O nome de domínio registrado (por exemplo, `example.com`) |
| `{SITE_URL}` | A URL do site WordPress para o site do cliente |

**Exemplo — apontar o domínio apex e www para o IP do seu servidor:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: visualizando e editando DNS {#admin-viewing-and-editing-dns}

Admins de rede podem visualizar e editar registros DNS para qualquer domínio de cliente na página de edição do domínio em **Admin da rede › Ultimate Multisite › Domínios**.
