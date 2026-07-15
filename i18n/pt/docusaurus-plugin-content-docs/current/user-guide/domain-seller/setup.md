---
title: Configuração de Configuração e Provedor
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Vendedor de Domínio: Configuração e Configuração do Provedor

O addon Vendedor de Domínio vem com um assistente de configuração guiado que o guia por cada etapa necessária. Esta página cobre o fluxo do assistente e como configurar ou reconfigurar os provedores depois.

## Requisitos {#requirements}

- **Multisite Ultimate** v2.4.12 ou superior, ativado na rede
- **PHP** 7.4+
- Credenciais de API para pelo menos um registrador suportado

## Assistente de configuração inicial {#first-run-setup-wizard}

O assistente de configuração inicia automaticamente na primeira vez que você ativar o plugin na sua rede. Ele também está disponível a qualquer momento em **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Passo 1 — Escolha um provedor {#step-1--choose-a-provider}

Selecione o registrador que deseja conectar. Opções suportadas:

| Provedor | Gerenciamento de DNS | Privacidade WHOIS |
|---|---|---|
| OpenSRS | Sim | Sim |
| Namecheap | Não | Sim (WhoisGuard, gratuito) |
| HostAfrica | Sim | Sim (Proteção de ID) |
| Openprovider | Sim | Sim |
| Hostinger | Via mapeamento de domínio principal do Hostinger para domínios hospedados | Sim |
| GoDaddy | Não | Não |
| ResellerClub | Sim | Não |
| NameSilo | Não | Não |
| Enom | Sim | Não |

### Passo 2 — Insira as credenciais {#step-2--enter-credentials}

Cada provedor tem campos de credenciais diferentes:

**OpenSRS** — Nome de usuário e chave privada (do Painel de Controle do Reseller OpenSRS)

**Namecheap** — Nome de usuário e chave de API (da Conta › Ferramentas › Acesso à API)

**HostAfrica** — Endpoint da API de Reseller de Domínios e credenciais do módulo reseller HostAfrica. Não há um endpoint sandbox separado documentado atualmente; teste com verificações apenas de leitura segura antes de executar registros ao vivo.

**Openprovider** — Nome de usuário e senha com acesso à API habilitado. O modo sandbox opcional usa a API sandbox do Openprovider, e um handle de cliente padrão opcional pode ser reutilizado para registros.

**Hostinger** — O token da API do hPanel compartilhado da Hostinger, proveniente da integração principal da Hostinger. O mesmo token alimenta o mapeamento de domínio principal e as operações de registro de Vendedor de Domínio.

**GoDaddy** — Chave de API e segredo (de developer.godaddy.com)

**ResellerClub** — ID do Reseller e chave de API (do painel de controle do ResellerClub)

**NameSilo** — Chave de API (de namesilo.com › Account › API Manager)

**Enom** — ID da Conta e token de API

Verifique o **modo Sandbox**, onde disponível, para testar contra o ambiente de teste do provedor antes de ir ao ar.

### Passo 3 — Testar a conexão {#step-3--test-the-connection}

Clique em **Test Connection**. O assistente envia uma chamada de API leve para verificar as credenciais e a conectividade. Corrija quaisquer problemas de credencial antes de continuar.

### Passo 4 — Importar TLDs {#step-4--import-tlds}

Clique em **Import TLDs** para buscar todos os TLDs disponíveis e preços atacadistas do provedor conectado. Isso preenche a lista de TLDs usada pelos produtos de domínio. A importação pode levar de 30 a 60 segundos para provedores com grandes catálogos de TLDs.

Os TLDs também são resincronizados automaticamente uma vez por dia via um job cron agendado.

### Passo 5 — Criar um produto de domínio {#step-5--create-a-domain-product}

O assistente cria um produto de domínio genérico (catch-all) padrão com uma margem de lucro de 10%. Você pode editar este produto imediatamente ou pular e criar produtos manualmente em **Ultimate Multisite › Products**.

Veja [Domain Products and Pricing](./domain-products) para o guia completo de configuração do produto.

---

## Reconfigurando um provedor {#reconfiguring-a-provider}

Vá para **Network Admin › Ultimate Multisite › Settings › Domain Seller** (ou clique em **Settings** na lista de plugins).

A página de configurações contém:

- **Habilitar venda de domínios** — ligue ou desligue todo o recurso
- **Provedor padrão** — o provedor usado para buscas de domínio e novos produtos
- **Máximo de TLDs por busca** — quantos TLDs verificar quando um cliente pesquisa; valores mais altos mostram mais opções, mas são mais lentos
- **Duração do cache de disponibilidade** — por quanto tempo armazenar em cache os resultados de disponibilidade e preços; valores menores são mais precisos, mas aumentam as chamadas à API
- **Gerenciar produtos de domínio** — link rápido para a lista de Produtos
- **Configurar provedores** — abre o Assistente de Integração para adicionar ou reconfigurar provedores

### Adicionando um segundo provedor {#adding-a-second-provider}

Clique em **Configurar provedores** e execute o assistente novamente para o novo registrador. Você pode ter vários provedores configurados ao mesmo tempo. Atribua cada produto de domínio a um provedor específico, ou deixe no padrão.

### Sincronizando TLDs manualmente {#syncing-tlds-manually}

Na página de configurações, clique em **Sincronizar TLDs** ao lado de qualquer provedor configurado para buscar os preços mais recentes. Isso é útil depois que um provedor atualiza os preços atacadistas ou adiciona novos TLDs.

---

## Logs {#logs}

Cada provedor escreve em seu próprio canal de log. Os logs podem ser visualizados em **Administração de Rede › Ultimate Multisite › Logs**:

| canal de log | Conteúdo |
|---|---|
| `domain-seller-registration` | Todas as tentativas de registro (sucesso e falha) |
| `domain-seller-renewal` | Resultados do job de renovação |
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

## Observações sobre as capacidades dos provedores {#provider-capability-notes}

Nem toda API de registrador expõe as mesmas operações. O addon mostra as operações não suportadas com erros claros visíveis para o administrador, em vez de falhar silenciosamente.

- **HostAfrica** suporta o fluxo de revenda ao vivo mais amplo, incluindo pesquisa, sincronização de TLD/preços, registro, renovação, transferência, atualizações de nameserver, registros DNS, códigos EPP, bloqueio do registrador e proteção de ID.
- **Openprovider** suporta sincronização de TLD com preço de revenda, registro, renovação, transferências, atualizações de nameserver, zonas DNS, códigos EPP, bloqueio do registrador e privacidade WHOIS. Ele se autentica com um bearer token de curta duração que o addon atualiza automaticamente.
- **Hostinger** suporta pesquisa de disponibilidade, registro, consulta de portfólio, atualizações de nameserver, bloqueio do registrador e privacidade WHOIS através do token da API hPanel compartilhado. A API de Domínios públicos da Hostinger não expõe preços de revenda/atacado, transferência de entrada, renovação explícita ou recuperação de códigos EPP; as renovações são apenas automáticas.
