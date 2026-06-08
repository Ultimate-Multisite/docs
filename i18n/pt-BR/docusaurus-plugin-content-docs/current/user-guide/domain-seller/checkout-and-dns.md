---
title: Campo de Checkout e DNS do Cliente
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Gerenciamento de Campos de Checkout e DNS do Cliente

## O campo de seleção de domínio

O campo **Seleção de Domínio** é um elemento de checkout que oferece aos clientes a opção de como obter o domínio do site deles. Adicione-o a qualquer formulário de checkout para habilitar a venda de domínios.

### Adicionando o campo a um formulário de checkout

1. Vá para **Network Admin › Ultimate Multisite › Checkout Forms**
2. Abra ou crie um formulário de checkout
3. No editor de checkout, clique em **Add Field**
4. Escolha **Domain Selection** na lista de campos
5. Configure as opções do campo (veja abaixo)
6. Salve o formulário

### Opções do campo

**Modos de domínio** — Escolha quais abas o cliente verá. Cada modo pode ser ativado ou desativado de forma independente:

| Modo | O que faz |
|---|---|
| **Subdomain** | O cliente usa um subdomínio gratuito na sua rede (ex: `mysite.suanetwork.com`). Não é necessário pagamento. |
| **Register New Domain** | O cliente pesquisa e registra um domínio novo através do provedor configurado. Utiliza o produto de domínio correspondente para precificação. |
| **Existing Domain** | O cliente mapeia um domínio que já possui. Sem taxa de registro. O domínio é mapeado automaticamente para o site dele. |

**Modo padrão** — Quando os três modos estão ativados, qual aba abre primeiro. Defina como **Subdomain** para manter o registro de domínio opcional, ou **Register New Domain** para incentivar compras.

**Produto de domínio** — Opcionalmente, fixe este campo a um produto de domínio específico. Se não for definido, o addon selecionará automaticamente o produto correspondente com base no TLD que o cliente pesquisar.

### Campos de contato do registrante

Quando um cliente seleciona a aba **Register New Domain**, o formulário de checkout adiciona campos de contato do registrante inline:

- Primeiro nome / Último nome
- Endereço de e-mail
- Endereço (linha 1, cidade, estado/província, CEP, país)
- Número de telefone

Estes são obrigatórios por todas as registradoras e são validados antes que a chamada da API de registro seja feita. Os números de telefone são formatados automaticamente para o formato internacional `+CC.NNN` esperado pelas registradoras.

### URL do site gerada automaticamente

Quando um cliente registra ou mapeia um domínio, o campo URL do site é preenchido automaticamente com base no domínio escolhido. Os clientes não precisam preencher um campo de URL separado.

### Comportamento de pesquisa

- A disponibilidade do domínio é verificada em tempo real com AJAX enquanto o cliente digita
- Sugestões de TLD alternativas são exibidas quando o domínio preferido não está disponível
- Os preços são buscados ao vivo e exibidos de forma clara (preço de registro, preço de renovação, taxa opcional de privacidade WHOIS)
- Cupons de desconto se aplicam aos produtos de domínio da mesma forma que qualquer outro produto

**Ajustando a responsividade da pesquisa:**

```php
// Aumenta o atraso de debounce (milissegundos) para reduzir chamadas de API em conexões lentas
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Adicionando campos personalizados ao formulário de pesquisa de domínio:**

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

## Gerenciamento de DNS do Cliente

Os clientes podem gerenciar os registros DNS de seus domínios registrados na página **My Account**, na seção do domínio deles.

### Tipos de registro suportados

| Tipo | Uso |
|---|---|
| **A** | Mapeia nome de host para endereço IPv4 |
| **AAAA** | Mapeia nome de host para endereço IPv6 |
| **CNAME** | Cria um alias apontando para outro nome de host |
| **MX** | Define o servidor de troca de e-mail |
| **TXT** | Adiciona registros de texto SPF, DMARC, verificação ou outros |

### Quais provedores suportam gerenciamento de DNS?

O gerenciamento de DNS (adicionar, editar, excluir registros) está disponível com **OpenSRS**, **ResellerClub** e **Enom**. Os domínios Namecheap, GoDaddy e NameSilo exibem informações de status e expiração, mas o DNS deve ser gerenciado diretamente no painel de controle do registrador.

### Registros DNS padrão

Você pode configurar registros DNS padrão que são aplicados automaticamente quando um domínio é registrado. Vá para **Settings › Domain Seller › Default DNS Records**.

Os valores de registro padrão suportam dois tokens:

| Token | Substituído por |
|---|---|
| `{DOMAIN}` | O nome de domínio registrado (ex: `example.com`) |
| `{SITE_URL}` | A URL do site WordPress do cliente |

**Exemplo — apontar o domínio raiz e www para o IP do seu servidor:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: visualizando e editando DNS

Os administradores de rede podem visualizar e editar registros DNS de qualquer domínio do cliente na página de edição do domínio em **Network Admin › Ultimate Multisite › Domains**.
