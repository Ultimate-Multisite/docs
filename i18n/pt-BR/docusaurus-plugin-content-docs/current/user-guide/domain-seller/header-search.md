---
title: Pesquisa de domínio do cabeçalho
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Pesquisa de domínio no Header

Use esta configuração quando quiser um pequeno formulário no header que inicia uma pesquisa de domínio e depois permite que o cliente escolha entre os domínios disponíveis dentro do checkout do Ultimate Multisite.

## Requisitos {#requirements}

- Ultimate Multisite ativo na rede.
- Multisite Ultimate Domain Seller ativo na rede.
- Pelo menos um produto ativo de registro de domínio com:
  - `domain_provider` definido como um provedor configurado.
  - TLDs suportados configurados, por exemplo `com`, `net` e `org`.
- Um formulário de checkout válido contendo o campo **Seleção de domínio**.

## Formulário de checkout {#checkout-form}

1. Crie ou edite o formulário de checkout usado pela página de registro.
2. Adicione os campos normais obrigatórios de checkout/Account, incluindo **Nome de usuário**. Um formulário de checkout contendo apenas o campo de domínio é rejeitado pela validação do Ultimate Multisite.
3. Adicione um campo **Seleção de domínio**.
4. Defina o modo de Seleção de domínio como **Apenas registrar** quando o fluxo deve se concentrar em domínios registrados em vez de subdomínios gratuitos ou domínios existentes.
5. Atribua o produto de registro de domínio a esse campo.

A página de registro deve renderizar o formulário de checkout, por exemplo:

```text
[wu_checkout slug="domain-form"]
```

## Formulário do Header {#header-form}

Adicione um pequeno formulário `GET` no header do site que envia o termo de pesquisa inserido para a página de checkout como `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Não pré-selecione um domínio em JavaScript personalizado do header. O header deve apenas passar o termo de pesquisa. O script de checkout do Domain Seller lê `?domain_name=example`, preenche a caixa de pesquisa do checkout e executa a pesquisa de disponibilidade para que o cliente possa escolher entre os domínios retornados.

## Comportamento esperado {#expected-behaviour}

Pesquisar `example` no header deve abrir:

```text
/register/?domain_name=example
```

O checkout deve então exibir resultados selecionáveis como:

- `example.com`
- `example.net`
- `example.org` indisponível
- outros TLDs suportados pelo provedor

Depois de selecionar um resultado disponível, o resumo do pedido deve incluir o produto de registro de domínio e o nome de domínio selecionado.

## Verificação {#verification}

1. Abra a página inicial.
2. Pesquise um nome simples, por exemplo `example`.
3. Confirme se a URL do checkout inclui `?domain_name=example`.
4. Confirme se o campo de domínio do checkout contém `example`.
5. Confirme se uma lista de opções de domínio aparece.
6. Clique em **Selecionar** para um domínio disponível.
7. Confirme se o resumo do pedido contém `Domain Registration - example.com` ou o domínio selecionado.

## Solução de problemas {#troubleshooting}

- Se nenhuma lista aparecer, verifique a aba de rede do navegador para `admin-ajax.php?action=wu_domain_search` e confirme se ela retorna `domains` ou `results` não vazios.
- Se o formulário de checkout falhar na validação ao salvar, adicione os campos obrigatórios de Account, como **Nome de usuário**.
- Se selecionar um domínio não atualizar o carrinho, confirme se `window.wu_checkout_form` existe e se os assets de checkout do Domain Seller estão carregados na página de checkout.
