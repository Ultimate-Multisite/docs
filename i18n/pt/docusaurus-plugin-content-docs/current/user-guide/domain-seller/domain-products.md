---
title: Produtos e Preços de Domínio
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produtos e Preços de Domínio

Produtos de domínio são como você controla preços, TLDs (domínios de nível superior), privacidade WHOIS e a seleção do provedor. Cada produto de domínio é um produto padrão Ultimate Multisite com uma aba extra **Configurações de Domínio**.

## Criando um produto de domínio

1. Vá para **Network Admin › Ultimate Multisite › Products**
2. Clique em **Add New** (Adicionar Novo)
3. Defina o tipo de produto como **Domain** (Domínio)
4. Configure a aba **Domain Settings** (Configurações de Domínio) (ve abaixo)
5. Salve

Produtos de domínio aparecem com um selo roxo **Domain** (Domínio) na lista de produtos e podem ser filtrados usando a aba **Domain Products** (Produtos de Domínio).

## Aba Configurações de Domínio

### Provedor

Selecione qual registrador será responsável pelo registro deste produto. O padrão é o **Default provider** (Provedor Padrão) global definido nas configurações do Vendedor de Domínios.

### TLDs Suportados

Deixe em branco para criar um **catch-all product** (produto comodín) que se aplica a todos os TLDs não correspondentes a outro produto.

Insira uma lista separada por vírgulas dos TLDs (ex: `.com, .net, .org`) para criar um **TLD-specific product** (produto específico de TLD) que se aplica apenas a essas extensões.

**Como funciona o casamento de produtos:** Quando um cliente pesquisa um domínio, o addon seleciona o produto correspondente mais específico. Um produto com `.com` na lista de TLDs tem precedência sobre um produto comodín. Se nenhum produto específico de TLD corresponder, o comodín é usado. Se não houver produtos existentes, a busca por domínio não será exibida.

### Tipo de Margem (Markup type)

Três modos controlam como seu preço de varejo é calculado a partir do custo atacadista:

| Modo | Como funciona |
|---|---|
| **Percentage** (Porcentagem) | Adiciona uma porcentagem sobre o custo atacadista. Uma margem de 20% em um domínio com custo atacadista de $10 resulta em $12. |
| **Fixed markup** (Margem Fixa) | Adiciona um valor fixo em dólares. Uma margem de $5 em um domínio de $10 resulta em $15. |
| **Fixed price** (Preço Fixo) | Ignora completamente o custo atacadista. Sempre cobra o valor que você inserir. |

### Preços introdutórios

Permit a oferta de um preço promocional no primeiro ano. Defina um **Preço de Introdução** (o preço do primeiro ano) separado do **Preço de Renovação** regular (ano 2+). O cliente verá ambos os preços exibidos durante o checkout para saber o que esperar na renovação.

### Privacidade WHOIS

Controla se a proteção de privacidade WHOIS é oferecida para domínios registrados através deste produto.

| Configuração | Comportamento |
|---|---|
| **Desabilitado** | A privacidade WHOIS nunca é oferecida ou habilitada. |
| **Sempre Incluído** | A privacidade WHOIS é ativada automaticamente no registro sem custo. |
| **Escolha do Cliente** | Uma caixa de seleção aparece durante o checkout. Defina o **Preço de Privacidade** para cobrar por ano, ou deixe em $0 para oferecer gratuitamente. |

Para Namecheap, a privacidade WHOIS usa WhoisGuard (sempre gratuita). Para OpenSRS, utiliza o serviço de privacidade OpenSRS (pode ter custo no atacado).

---

## Importação e sincronização de TLD

Os produtos de domínio exibem preços de atacado em tempo real buscados do provedor conectado. Para que isso funcione, os TLDs precisam ser importados.

- **Sincronização manual:** Settings › Domain Seller › Sync TLDs (por provedor)
- **Sincronização automática:** Executa diariamente via um cron job agendado em todos os provedores configurados.

Após uma sincronização, vá para a aba Configurações do Domínio de qualquer produto de domínio e use o seletor de TLD para ver os TLDs disponíveis com seus preços de atacado atuais.

---

## Renovação automática

As renovações de domínio estão vinculadas ao status de associação do cliente:

- Quando uma associação é renovada e um domínio está vinculado, a renovação do domínio é automaticamente colocada em fila
- As tentativas de renovação usam o gateway de pagamento ativo do cliente
- Renovações falhadas são tentadas novamente automaticamente com *exponential backoff* (retentativa exponencial)
- Notificações por e-mail são enviadas para renovações bem-sucedidas, falhas e próximos vencimentos

IDs de modelos de e-mail para eventos do ciclo de vida do domínio:

| Evento | ID do Template |
|---|---|
| Domínio registrado | `domain_registered` |
| Domínio renovado | `domain_renewed` |
| Renovação falhou | `domain_renewal_failed` |
| Domínio expirando em breve | `domain_expiring_soon` |

---

## Admin: Registro manual de domínio

Para registrar um domínio em nome de um cliente sem que ele passe pelo processo de checkout:

1. Vá para **Network Admin › Ultimate Multisite › Register Domain** (Administração da Rede › Ultimate Multisite › Registrar Domínio)
2. Selecione o cliente e insira o nome do domínio
3. Preencha os detalhes de contato do titular (nome, endereço, telefone)
4. Clique em **Register** (Registrar)

O registro do domínio é criado e vinculado à conta do cliente.
