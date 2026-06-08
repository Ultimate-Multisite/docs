---
title: Produtos de Domínio e Preços
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produtos e Preços de Domínio

Os produtos de domínio são a forma como você controla preços, TLDs, privacidade WHOIS e a seleção de provedores. Cada produto de domínio é um produto padrão do Multisite Ultimate com uma aba extra chamada **Domain Settings**.

## Criando um produto de domínio

1. Vá para **Network Admin › Ultimate Multisite › Products**
2. Clique em **Add New**
3. Defina o tipo de produto como **Domain**
4. Configure a aba **Domain Settings** (veja abaixo)
5. Salvar

Os produtos de domínio aparecem com um distintivo roxo **Domain** na lista de produtos e podem ser filtrados usando a aba **Domain Products**.

## Aba Domain Settings

### Provedor

Selecione qual registrador fará o registro para este produto. Por padrão, ele usa o **Default provider** global definido nas configurações do Domain Seller.

### TLDs Suportados

Deixe em branco para criar um **produto catch-all** que se aplica a todos os TLDs não correspondidos por outro produto.

Insira uma lista de TLDs separados por vírgula (ex: `.com, .net, .org`) para criar um **produto específico de TLD** que se aplica apenas a essas extensões.

**Como funciona a correspondência de produtos:** Quando um cliente pesquisa um domínio, o addon escolhe o produto correspondente mais específico. Um produto com `.com` em sua lista de TLDs tem precedência sobre um produto catch-all. Se nenhum produto específico de TLD corresponder, o catch-all é usado. Se não houver produtos, a busca por domínio não será exibida.

### Tipo de Markup

Três modos controlam como seu preço de varejo é calculado a partir do custo de atacado:

| Modo | Como funciona |
|---|---|
| **Percentage** | Adiciona uma porcentagem sobre o custo de atacado. Um markup de 20% em um domínio de atacado de $10 resulta em $12. |
| **Fixed markup** | Adiciona um valor fixo em dólares. Um markup de $5 em um domínio de $10 resulta em $15. |
| **Fixed price** | Ignora completamente o custo de atacado. Sempre cobra o valor que você inserir. |

### Preços Introdutórios

Ative para oferecer um preço com desconto no primeiro ano. Defina um **Introductory price** separado (o preço do ano 1) junto com o **Renewal price** regular (ano 2+). O cliente verá os dois preços exibidos durante o checkout para saber o que esperar na renovação.

### Privacidade WHOIS

Controla se a proteção de privacidade WHOIS é oferecida para domínios registrados através deste produto.

| Configuração | Comportamento |
|---|---|
| **Disabled** | A privacidade WHOIS nunca é oferecida ou ativada. |
| **Always Included** | A privacidade WHOIS é ativada automaticamente no registro sem custo. |
| **Customer Choice** | Um checkbox aparece durante o checkout. Defina o **Privacy price** para cobrar por ano, ou deixe em $0 para oferecer gratuitamente. |

Para Namecheap, a privacidade WHOIS usa WhoisGuard (sempre gratuito). Para OpenSRS, usa o serviço de privacidade OpenSRS (pode ter custo no atacado).

---

## Importação e Sincronização de TLDs

Os produtos de domínio exibem preços de atacado em tempo real, obtidos do provedor conectado. Para que isso funcione, os TLDs devem ser importados.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (por provedor)
- **Automatic sync:** Executa diariamente via um cron job agendado em todos os provedores configurados

Após uma sincronização, vá para a aba Domain Settings de qualquer produto de domínio e use o seletor de TLDs para ver os TLDs disponíveis com seus preços de atacado atuais.

---

## Renovação Automática

As renovações de domínio estão vinculadas ao status de associação do cliente:

- Quando uma associação é renovada e um domínio está vinculado, a renovação do domínio é automaticamente colocada na fila
- As tentativas de renovação usam o gateway de pagamento ativo do cliente
- As renovações falhas são retentadas automaticamente com *exponential backoff*
- Notificações por e-mail são enviadas para renovações bem-sucedidas, falhas e expirações próximas

IDs de modelo de e-mail para eventos de ciclo de vida do domínio:

| Evento | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Registro Manual de Domínio

Para registrar um domínio em nome de um cliente sem que ele precise passar pelo checkout:

1. Vá para **Network Admin › Ultimate Multisite › Register Domain**
2. Selecione o cliente e insira o nome do domínio
3. Preencha os dados de contato do registrador (nome, endereço, telefone)
4. Clique em **Register**

O registro do domínio é criado e vinculado à conta do cliente.
