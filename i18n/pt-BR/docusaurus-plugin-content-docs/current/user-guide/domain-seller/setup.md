---
title: Configuração e Configuração do Provedor
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Vendedor de Domínios: Configuração e Configuração de Provedores

O addon Vendedor de Domínios vem com um assistente de configuração guiado que o guiará por todas as etapas necessárias. Esta página cobre o fluxo do assistente e como configurar ou reconfigurar os provedores posteriormente.

## Requisitos

- **Ultimate Multisite** v2.4.12 ou superior, ativado na rede
- **PHP** 7.4+
- Credenciais de API para pelo menos um registrador suportado

## Assistente de configuração na primeira execução

O assistente de configuração é iniciado automaticamente na primeira vez que você ativa o plugin na rede. Ele também está disponível a qualquer momento em **Admin da Rede › Ultimate Multisite › Configuração do Vendedor de Domínios**.

### Passo 1 — Escolha um provedor

Selecione o registrador que você deseja conectar. Opções suportadas:

| Provedor | Gerenciamento de DNS | Privacidade WHOIS |
|---|---|---|
| OpenSRS | Sim | Sim |
| Namecheap | Não | Sim (WhoisGuard, gratuito) |
| GoDaddy | Não | Não |
| ResellerClub | Sim | Não |
| NameSilo | Não | Não |
| Enom | Sim | Não |

### Passo 2 — Insira as credenciais

Cada provedor possui campos de credenciais diferentes:

**OpenSRS** — Nome de usuário e chave privada (do Painel de Controle Reseller OpenSRS)

**Namecheap** — Nome de usuário e chave de API (em Account › Tools › API Access)

**GoDaddy** — Chave e segredo de API (em developer.godaddy.com)

**ResellerClub** — ID do Revendedor e chave de API (no painel de controle ResellerClub)

**NameSilo** — Chave de API (em namesilo.com › Account › API Manager)

**Enom** — ID da Conta e token de API

Verifique o **Modo Sandbox** (Sandbox mode), quando disponível, para testar no ambiente de teste do provedor antes de ir ao ar.

### Passo 3 — Testar a conexão

Clique em **Testar Conexão**. O assistente envia uma chamada de API leve para verificar as credenciais e a conectividade. Corrija quaisquer problemas de credenciais antes de continuar.

### Passo 4 — Importar TLDs

Clique em **Importar TLDs** para puxar todos os TLDs disponíveis e os preços de atacado do provedor conectado. Isso preenche a lista de TLDs usada pelos produtos de domínio. A importação pode levar de 30 a 60 segundos para provedores com catálogos de TLDs grandes.

Os TLDs também são resincronizados automaticamente uma vez por dia por meio de uma tarefa cron agendada.

### Passo 5 — Criar um produto de domínio

O assistente cria um produto de domínio catch-all padrão com um acréscimo de 10%. Você pode editar este produto imediatamente ou pular e criar produtos manualmente em **Ultimate Multisite › Produtos**.

Consulte [Produtos e Preços de Domínio](./domain-products) para o guia completo de configuração de produtos.

---

## Reconfigurando um provedor

Vá para **Admin da Rede › Ultimate Multisite › Configurações › Vendedor de Domínios** (ou clique em **Configurações** na lista de plugins).

A página de configurações contém:

- **Ativar venda de domínios** — alterna o recurso inteiro ligado/desligado
- **Provedor padrão** — o provedor usado para buscas de domínio e novos produtos
- **Máx TLDs por busca** — quantos TLDs verificar quando um cliente pesquisar; valores mais altos mostram mais opções, mas são mais lentos
- **Duração do cache de disponibilidade** — por quanto tempo armazenar em cache os resultados de disponibilidade e preços; valores mais baixos são mais precisos, mas aumentam as chamadas de API
- **Gerenciar produtos de domínio** — link rápido para a lista de Produtos
- **Configurar provedores** — abre o Assistente de Integração para adicionar ou reconfigurar provedores

### Adicionando um segundo provedor

Clique em **Configurar provedores** e execute o assistente novamente para o novo registrador. Você pode ter vários provedores configurados simultaneamente. Atribua cada produto de domínio a um provedor específico ou deixe-o no padrão.

### Sincronizando TLDs manualmente

Na página de configurações, clique em **Sincronizar TLDs** ao lado de qualquer provedor configurado para puxar os preços mais recentes. Isso é útil depois que um provedor atualiza os preços de atacado ou adiciona novos TLDs.

---

## Logs

Cada provedor escreve em seu próprio canal de log. Os logs são visíveis em **Admin da Rede › Ultimate Multisite › Logs**:

| Canal de log | Conteúdo |
|---|---|
| `domain-seller-registration` | Todas as tentativas de registro (sucesso e falha) |
| `domain-seller-renewal` | Resultados do trabalho de renovação |
| `domain-seller-opensrs` | Atividade bruta da API OpenSRS |
| `domain-seller-namecheap` | Atividade bruta da API Namecheap |
| `domain-seller-godaddy` | Atividade bruta da API GoDaddy |
| `domain-seller-resellerclub` | Atividade bruta da API ResellerClub |
| `domain-seller-namesilo` | Atividade bruta da API NameSilo |
| `domain-seller-enom` | Atividade bruta da API Enom |
