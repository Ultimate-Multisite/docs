---
title: Configuración e Configuración do Proveitor
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Vendedor de Domínios: Configuración e Configuración del Proveedor {#domain-seller-setup-and-provider-configuration}

El addon Domain Seller se entrega con un asistente de configuración guiado que te guía a través de cada paso necesario. Esta página cubre el flujo del asistente y cómo configurar o reconfigurar los proveedores después.

## Requisitos {#requirements}

- **Multisite Ultimate** v2.4.12 o superior, activado en red
- **PHP** 7.4+
- Credenciales de API para al menos un registrador compatible

## Asistente de configuración inicial {#first-run-setup-wizard}

El asistente se lanza automáticamente la primera vez que activas el plugin en tu red. También está disponible en cualquier momento desde **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Paso 1 — Elige un proveedor {#step-1--choose-a-provider}

Selecciona el registrador con el que quieres conectar. Opciones compatibles:

| Proveedor | Gestión de DNS | Privacidad WHOIS |
|---|---|---|
| OpenSRS | Sí | Sí |
| Namecheap | No | Sí (WhoisGuard, gratis) |
| HostAfrica | Sí | Sí (Protección de ID) |
| Openprovider | Sí | Sí |
| Hostinger | A través del mapeo de dominio principal de Hostinger para dominios alojados | Sí |
| GoDaddy | No | No |
| ResellerClub | Sí | No |
| NameSilo | No | No |
| Enom | Sí | No |

### Paso 2 — Introduce las credenciales {#step-2--enter-credentials}

Cada proveedor tiene campos de credenciales diferentes:

**OpenSRS** — Nombre de usuario y clave privada (desde el Panel de Control del Reseller de OpenSRS)

**Namecheap** — Nombre de usuario y clave API (desde Cuenta › Herramientas › Acceso a la API)

**HostAfrica** — Punto final de la API de Reseller de Dominios y credenciales desde el módulo de reseller de HostAfrica. Actualmente no hay un punto final de sandbox separado documentado; prueba con comprobaciones de solo lectura seguras antes de ejecutar registros en vivo.

**Openprovider** — Nombre de usuario y contraseña con acceso a la API habilitado. El modo sandbox opcional utiliza la API de sandbox de Openprovider, y se puede reutilizar un identificador de cliente predeterminado opcional para los registros.

**Hostinger** — O token da API do hPanel compartido Hostinger da integración principal. O mesmo token funciona para o mapeamento de domínios principais e as operações de registo de vendedores de domínio.

**GoDaddy** — Chave de API e segredo (de developer.godaddy.com)

**ResellerClub** — ID de Reseller e chave de API (do painel de controlo do ResellerClub)

**NameSilo** — Chave de API (de namesilo.com › Account › API Manager)

**Enom** — ID de conta e token de API

Verifique o **modo Sandbox**, se disponível, para testar contra o ambiente de teste do fornecedor antes de ir ao ar.

### Passo 3 — Testar a ligação {#step-3--test-the-connection}

Clique em **Test Connection**. O assistente envia uma chamada de API leve para verificar as credenciais e a conectividade. Corrija quaisquer problemas de credenciais antes de continuar.

### Passo 4 — Importar TLDs {#step-4--import-tlds}

Clique em **Import TLDs** para puxar todos os TLDs disponíveis e os preços de atacado do fornecedor conectado. Isto preenche a lista de TLDs usada pelos produtos de domínio. A importação pode demorar entre 30 e 60 segundos para fornecedores com grandes catálogos de TLDs.

Os TLDs são também resincronizados automaticamente uma vez por dia através de um *cron job* agendado.

### Passo 5 — Criar um produto de domínio {#step-5--create-a-domain-product}

O assistente cria um produto de domínio genérico (catch-all) com uma margem de lucro de 10%. Pode editar este produto imediatamente ou pode saltar e criar produtos manualmente em **Ultimate Multisite › Products**.

Veja [Domain Products and Pricing](./domain-products) para o guia completo de configuração do produto.

---

## Reconfigurar um fornecedor {#reconfiguring-a-provider}

Vá a **Network Admin › Ultimate Multisite › Settings › Domain Seller** (ou clique em **Settings** na lista de plugins).

A página de definições contém:

- **Activar a venda de domínios** — activa ou desativa a característica completa
- **Provedor predefinido** — o provedor usado para as buscas de domínios e novos produtos
- **Máx. TLDs por busca** — cuántos TLDs verificar cuando un cliente busca; valores más altos muestran más opciones pero son más lentos
- **Duración del caché de disponibilidad** — cuánto tiempo se guarda en caché la disponibilidad y los resultados de precios; valores más bajos son más precisos pero aumentan las llamadas a la API
- **Gestionar productos de dominio** — enlace rápido a la lista de Productos
- **Configurar proveedores** — abre el Asistente de Integración para añadir o reconfigurar proveedores

### Añadir un segundo proveedor {#adding-a-second-provider}

Haz clic en **Configure providers** y ejecuta el asistente de nuevo para el nuevo registrador. Podes tener varios proveedores configurados a la vez. Asigna cada producto de dominio a un proveedor específico, o déjalo en el predefinido.

### Sincronizar TLDs manualmente {#syncing-tlds-manually}

Na página de configuración, haz clic en **Sync TLDs** ao lado de cualquier provedor configurado para puxar os últimos precios. Isto é útil después de que un provedor actualize os precios mayoristas ou adicione novos TLDs.

---

## Logs {#logs}

Cada provedor escribe no súa propia canal de logs. Os logs son visíveis en **Network Admin › Ultimate Multisite › Logs**:

| Canal de log | Conteúdo |
|---|---|
| `domain-seller-registration` | Todas as tentativas de registo (sucesso e falha) |
| `domain-seller-renewal` | Resultados do trabalho de renovação |
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

## Notas sobre as capacidades dos provedores {#provider-capability-notes}

Nem todas as APIs de registadores expõem as mesmas operações. O addon mostra as operações não suportadas com erros claros para o administrador, em vez de falhar silenciosamente.

- **HostAfrica** suporta o fluxo de trabalho de revendedor mais amplo e ativo, incluindo pesquisa, sincronização de TLD/preços, registo, renovação, transferência, atualizações de servidores de nomes, registos DNS, códigos EPP, bloqueio do registrador e proteção de ID.
- **Openprovider** suporta a sincronização de TLD com preços de revendedor, registo, renovação, transferências, atualizações de servidores de nomes, zonas DNS, códigos EPP, bloqueio do registrador e privacidade WHOIS. Autentica-se com um bearer token de curta duração que o addon refaz automaticamente.
- **Hostinger** suporta pesquisa de disponibilidade, registo, pesquisa de portfólio, atualizações de servidores de nomes, bloqueio do registrador e privacidade WHOIS através do token da API partilhada hPanel. A API de Domínios públicos da Hostinger não expõe preços de revendedor/atista, transferência de entrada, renovação explícita ou recuperação de códigos EPP; as renovações são apenas automáticas.
