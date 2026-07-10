---
title: Configuração inicial e configuração do provedor
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: configuração inicial e configuração de provedores {#domain-seller-setup-and-provider-configuration}

O complemento Domain Seller vem com um assistente de configuração guiado que orienta você por todas as etapas obrigatórias. Esta página cobre o fluxo do assistente e como configurar ou reconfigurar provedores posteriormente.

## Requisitos {#requirements}

- **Multisite Ultimate** v2.4.12 ou superior, ativado na rede
- **PHP** 7.4+
- Credenciais de API para pelo menos um registrador compatível

## Assistente de configuração da primeira execução {#first-run-setup-wizard}

O assistente de configuração é iniciado automaticamente na primeira vez que você ativa o plugin na rede. Ele também está disponível a qualquer momento em **Administração da Rede › Ultimate Multisite › Configuração do Domain Seller**.

### Etapa 1 — Escolha um provedor {#step-1--choose-a-provider}

Selecione o registrador que você deseja conectar. Opções compatíveis:

| Provedor | Gerenciamento de DNS | Privacidade WHOIS |
|---|---|---|
| OpenSRS | Sim | Sim |
| Namecheap | Não | Sim (WhoisGuard, grátis) |
| HostAfrica | Sim | Sim (proteção de ID) |
| Openprovider | Sim | Sim |
| Hostinger | Via mapeamento de domínio principal do Hostinger para domínios hospedados | Sim |
| GoDaddy | Não | Não |
| ResellerClub | Sim | Não |
| NameSilo | Não | Não |
| Enom | Sim | Não |

### Etapa 2 — Insira as credenciais {#step-2--enter-credentials}

Cada provedor tem campos de credenciais diferentes:

**OpenSRS** — Nome de usuário e chave privada (do Painel de Controle de Revendedor OpenSRS)

**Namecheap** — Nome de usuário e chave de API (de Account › Ferramentas › Acesso à API)

**HostAfrica** — Ponto de extremidade da API de Revendedor de Domínios e credenciais do módulo de revendedor HostAfrica. Nenhum ponto de extremidade de sandbox separado está documentado atualmente; teste com verificações seguras somente leitura antes de executar registros em produção.

**Openprovider** — Nome de usuário e senha com acesso à API ativado. O modo sandbox opcional usa a API sandbox do Openprovider, e um identificador de cliente padrão opcional pode ser reutilizado para registros.

**Hostinger** — O token de API compartilhado do hPanel da Hostinger a partir da integração principal com Hostinger. O mesmo token alimenta o mapeamento de domínio principal e as operações de registro do Domain Seller.

**GoDaddy** — Chave de API e segredo (de developer.godaddy.com)

**ResellerClub** — ID de revendedor e chave de API (do painel de controle ResellerClub)

**NameSilo** — Chave de API (de namesilo.com › Account › Gerenciador de API)

**Enom** — ID da Account e token de API

Marque **Modo sandbox** quando disponível para testar no ambiente de testes do provedor antes de entrar em produção.

### Etapa 3 — Teste a conexão {#step-3--test-the-connection}

Clique em **Testar conexão**. O assistente envia uma chamada leve de API para verificar as credenciais e a conectividade. Corrija quaisquer problemas de credenciais antes de continuar.

### Etapa 4 — Importe TLDs {#step-4--import-tlds}

Clique em **Importar TLDs** para obter todos os TLDs disponíveis e os preços de atacado do provedor conectado. Isso preenche a lista de TLDs usada pelos produtos de domínio. A importação pode levar de 30 a 60 segundos para provedores com grandes catálogos de TLDs.

Os TLDs também são ressincronizados automaticamente uma vez por dia por meio de uma tarefa cron agendada.

### Etapa 5 — Crie um produto de domínio {#step-5--create-a-domain-product}

O assistente cria um produto de domínio padrão abrangente com uma margem de 10%. Você pode editar este produto imediatamente ou pular e criar produtos manualmente em **Ultimate Multisite › Produtos**.

Consulte [Produtos de domínio e preços](./domain-products) para ver o guia completo de configuração de produtos.

---

## Reconfigurando um provedor {#reconfiguring-a-provider}

Acesse **Administração da Rede › Ultimate Multisite › Configurações › Domain Seller** (ou clique em **Configurações** na lista de plugins).

A página de configurações contém:

- **Ativar venda de domínios** — ativa/desativa o recurso inteiro
- **Provedor padrão** — o provedor usado para buscas de domínio e novos produtos
- **Máximo de TLDs por busca** — quantos TLDs verificar quando um cliente pesquisa; valores mais altos mostram mais opções, mas são mais lentos
- **Duração do cache de disponibilidade** — por quanto tempo armazenar em cache os resultados de disponibilidade e preços; valores mais baixos são mais precisos, mas aumentam as chamadas de API
- **Gerenciar produtos de domínio** — link rápido para a lista de Produtos
- **Configurar provedores** — abre o Assistente de Integração para adicionar ou reconfigurar provedores

### Adicionando um segundo provedor {#adding-a-second-provider}

Clique em **Configurar provedores** e execute o assistente novamente para o novo registrador. Você pode ter vários provedores configurados simultaneamente. Atribua cada produto de domínio a um provedor específico ou deixe-o no padrão.

### Sincronizando TLDs manualmente {#syncing-tlds-manually}

Na página de configurações, clique em **Sincronizar TLDs** ao lado de qualquer provedor configurado para obter os preços mais recentes. Isso é útil depois que um provedor atualiza os preços de atacado ou adiciona novos TLDs.

---

## Logs {#logs}

Cada provedor grava em seu próprio canal de log. Os logs podem ser visualizados em **Administração da Rede › Ultimate Multisite › Logs**:

| Canal de log | Conteúdo |
|---|---|
| `domain-seller-registration` | Todas as tentativas de registro (sucesso e falha) |
| `domain-seller-renewal` | Resultados das tarefas de renovação |
| `domain-seller-opensrs` | Atividade bruta da API OpenSRS |
| `domain-seller-namecheap` | Atividade bruta da API Namecheap |
| `domain-seller-hostafrica` | Atividade bruta da API HostAfrica |
| `domain-seller-openprovider` | Atividade bruta da API Openprovider |
| `domain-seller-hostinger` | Atividade bruta da API Hostinger |
| `domain-seller-godaddy` | Atividade bruta da API GoDaddy |
| `domain-seller-resellerclub` | Atividade bruta da API ResellerClub |
| `domain-seller-namesilo` | Atividade bruta da API NameSilo |
| `domain-seller-enom` | Atividade bruta da API Enom |

---

## Observações sobre recursos dos provedores {#provider-capability-notes}

Nem toda API de registrador expõe as mesmas operações. O complemento apresenta operações não compatíveis com erros claros voltados ao administrador, em vez de falhar silenciosamente.

- **HostAfrica** oferece suporte ao fluxo de trabalho de revendedor ao vivo mais amplo, incluindo consulta, sincronização de TLD/preços, registro, renovação, transferência, atualizações de nameserver, registros DNS, códigos EPP, registrar lock e proteção de ID.
- **Openprovider** oferece suporte à sincronização de TLDs com preço de revendedor, registro, renovação, transferências, atualizações de nameserver, zonas DNS, códigos EPP, registrar lock e privacidade WHOIS. Ele autentica com um bearer token de curta duração que o addon atualiza automaticamente.
- **Hostinger** oferece suporte a busca de disponibilidade, registro, consulta de portfólio, atualizações de nameserver, registrar lock e privacidade WHOIS por meio do token compartilhado da hPanel API. A Domains API pública da Hostinger não expõe preços de revendedor/atacado, transferência de entrada, renovação explícita ou recuperação de código EPP; as renovações são apenas por auto-renovação.
