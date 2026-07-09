---
title: Campo de Checkout e DNS do Cliente
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Gerenciamento de Campos de Checkout e DNS do Cliente {#checkout-field-and-customer-dns-management}

## O campo de seleção de domínio no checkout {#the-domain-selection-checkout-field}

O campo **Seleção de Domínio** é um elemento de checkout que oferece aos clientes a escolha de como obter o domínio do site deles. Adicione-o a qualquer formulário de checkout para ativar a venda de domínios.

### Adicionando o campo a um formulário de checkout {#adding-the-field-to-a-checkout-form}

1. Vá para **Network Admin › Ultimate Multisite › Checkout Forms**
2. Abra ou crie um formulário de checkout
3. No editor de checkout, clique em **Add Field** (Adicionar Campo)
4. Escolha **Domain Selection** (Seleção de Domínio) na lista de campos
5. Configure as opções do campo (veja abaixo)
6. Salve o formulário

### Opções do campo {#field-options}

**Modos de domínio** — Escolha quais abas o cliente verá. Cada modo pode ser ativado ou desativado independentemente:

| Modo | O que faz |
|---|---|
| **Subdomínio** | O cliente usa um subdomínio gratuito na sua rede (ex: `mysite.sua_rede.com`). Não é necessário pagamento. |
| **Registrar Novo Domínio** | O cliente pesquisa um novo domínio e o registra através do provedor configurado por você. Usa o produto de domínio correspondente para precificação. |
| **Domínio Existente** | O cliente mapeia um domínio que já possui. Não há taxa de registro. O domínio é mapeado automaticamente para o site dele. |

**Modo padrão** — Quando os três modos estão ativados, qual aba abre primeiro? Defina como **Subdomínio** para manter o registro de domínio opcional, ou **Registrar Novo Domínio** para incentivar as compras.

**Produto de domínio** — Opcionalmente fixe este campo a um produto de domínio específico. Se não for definido, o addon seleciona automaticamente o produto correspondente com base no TLD que o cliente pesquisa.

### Campos de contato do titular {#registrant-contact-fields}

Quando um cliente seleciona a aba **Registrar Novo Domínio**, o formulário de checkout adiciona campos de contato do titular inline:

- Nome / Sobrenome
- Endereço (linha 1, cidade, estado/província, código postal, país)
- Número de telefone

Estes são obrigatórios para todos os registradores e validados antes que a chamada da API de registro seja feita. Os números de telefone são formatados automaticamente no formato internacional `+CC.NNN` esperado pelos registradores.

### URL do site gerada automaticamente {#auto-generated-site-url}

Quando um cliente se registra ou associa um domínio, o campo URL do site é preenchido automaticamente com base no domínio escolhido. Os clientes não precisam preencher um campo de URL separado.

### Comportamento da pesquisa {#search-behaviour}

- A disponibilidade do domínio é verificada em tempo real com AJAX enquanto o cliente digita
- Sugestões de TLDs alternativos são mostradas quando o domínio preferido não está disponível
- Os preços são buscados ao vivo e exibidos claramente (preço de registro, preço de renovação, taxa opcional de privacidade WHOIS)
- Códigos de cupom se aplicam aos produtos de domínio da mesma forma que a qualquer outro produto

**Ajustando a responsividade da pesquisa:**

```php
// Aumentar o atraso do debounce (milissegundos) para reduzir chamadas à API em conexões lentas
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // padrão: 500
});
```

**Adicionando campos personalizados ao formulário de busca de domínio:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Observações adicionais',
    ];
    return $fields;
});
```

---

## Gerenciamento de DNS do Cliente {#customer-dns-management}

Os clientes podem gerenciar registros DNS para seus domínios registrados a partir da página **Minha Conta**, sob a entrada do domínio.

### Tipos de registro suportados {#supported-record-types}

| Tipo | Uso |
|---|---|
| **A** | Mapear nome de host para endereço IPv4 |
| **AAAA** | Mapear nome de host para endereço IPv6 |
| **CNAME** | Criar um alias apontando para outro nome de host |
| **MX** | Definir servidor de troca de e-mail |
| **TXT** | Adicionar registros SPF, DMARC, verificação ou outros registros de texto |

### Quais provedores suportam gerenciamento de DNS? {#which-providers-support-dns-management}

Gerenciamento de DNS (adicionar, editar, excluir registros) está disponível com **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** e **Openprovider**. Domínios Hostinger podem atualizar os servidores de nomes através do Vendedor de Domínio; os registros DNS para domínios hospedados são gerenciados pela integração central de mapeamento de domínio da Hostinger. Os domínios Namecheap, GoDaddy e NameSilo exibem status e informações de expiração, mas o DNS deve ser gerenciado diretamente no painel de controle do registrador.

### Registros DNS padrão {#default-dns-records}

Você pode configurar registros DNS padrão que são aplicados automaticamente quando um domínio é registrado. Vá para **Configurações › Vendedor de Domínio › Registros DNS Padrão**.

Os valores dos registros padrão suportam dois tokens:

| Token | Substituído por |
|---|---|
| `{DOMAIN}` | O nome do domínio registrado (ex: `example.com`) |
| `{SITE_URL}` | A URL do site WordPress para o site do cliente |

**Exemplo — apontar o domínio raiz e www para o IP do seu servidor:**

```
Tipo: A
Nome: {DOMAIN}
Valor: 203.0.113.10

Tipo: CNAME
Nome: www.{DOMAIN}
Valor: {DOMAIN}
```

### Admin: visualização e edição de DNS {#admin-viewing-and-editing-dns}

Os administradores de rede podem visualizar e editar os registros DNS de qualquer domínio de cliente a partir da página de edição do domínio em **Admin de Rede › Ultimate Multisite › Domínios**.
