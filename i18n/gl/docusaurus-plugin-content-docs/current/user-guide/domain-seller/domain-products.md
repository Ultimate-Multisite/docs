---
title: Produtos de Dominio e Precios
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produtos de Domínio e Preços

Os produtos de domínio são a forma como controlas os preços, os TLDs (domínios de nível superior), a privacidade WHOIS e a seleção do provedor. Cada produto de domínio é um produto Ultimate Multisite padrão com uma aba extra **Domain Settings** (Definições de Domínio).

## Criar um produto de domínio {#creating-a-domain-product}

1. Ve ao **Network Admin › Ultimate Multisite › Products**.
2. Clica em **Add New** (Adicionar Novo).
3. Define o tipo de produto como **Domain** (Domínio).
4. Configura a aba **Domain Settings** (Definições de Domínio) (vê abaixo).
5. Guarda.

Os produtos de domínio aparecem com um distintivo roxo **Domain** (Domínio) na lista de produtos e podem ser filtrados usando a aba **Domain Products** (Produtos de Domínio).

## Aba Domain settings (Definições de Domínio) {#domain-settings-tab}

### Provider (Provedor) {#provider}

Seleciona qual registrador trata do registo para este produto. O padrão é o **Default provider** (Provedor Padrão) definido nas configurações do Vendedor de Domínios (Domain Seller).

### Supported TLDs (TLDs Suportados) {#supported-tlds}

Deixa em branco para criar um **catch-all product** (produto abrangente/geral) que se aplica a todos os TLDs que não sejam correspondidos por outro produto.

Insere uma lista separada por vírgulas de TLDs (ex: `.com, .net, .org`) para criar um **TLD-specific product** (produto específico de TLD) que se aplica apenas a essas extensões.

**Como funciona a correspondência de produtos:** Quando um cliente procura um domínio, o addon escolhe o produto correspondente mais específico. Um produto com `.com` na sua lista de TLD tem prioridade sobre um produto abrangente. Se nenhum produto específico de TLD corresponder, usa-se o abrangente. Se não existir nenhum produto, a pesquisa de domínio não é mostrada.

### Markup type (Tipo de Margem/Markup) {#markup-type}

Três modos controlam como o teu preço retalhista é calculado a partir do custo atacadista:

| Modo | Como funciona |
|---|---|
| **Percentage** (Porcentagem) | Adiciona uma percentagem sobre o custo atacadista. Uma margem de 20% num domínio com custo atacadista de $10 dá $12. |
| **Fixed markup** (Margem Fixa) | Adiciona um valor fixo em dólares. Uma margem de $5 num domínio de $10 dá $15. |
| **Fixed price** (Preço Fixo) | Ignora completamente o custo atacadista. Sempre cobra o valor que introduz. |

### Introductory pricing (Preços de Introdução) {#introductory-pricing}

Activar a oferta de un precio reducido para el primer año. Configure un **Precio Introductorio** (el precio del año 1) junto al **Precio de Renovación** regular (año 2+). El cliente verá ambos precios mostrados durante la compra, así sabe qué esperar en la renovación.

### Privacidad WHOIS {#whois-privacy}

Controla se ofrece o no protección de privacidad WHOIS para los dominios registrados a través de este producto.

| Configuración | Comportamiento |
|---|---|
| **Deshabilitado** | La privacidad WHOIS nunca se ofrece ni se habilita. |
| **Siempre Incluido** | La privacidad WHOIS se habilita automáticamente al registrarse sin coste alguno. |
| **Elección del Cliente** | Aparece una casilla durante el proceso de compra. Configure el **Precio de Privacidad** para cobrar por año, o déjelo en $0 para ofrecerlo gratis. |

Para Namecheap, la privacidad WHOIS utiliza WhoisGuard (siempre gratuita). Para OpenSRS, utiliza el servicio de privacidad de OpenSRS (puede tener coste al por mayor).

---

## Importación y sincronización de TLD {#tld-import-and-sync}

Los productos de dominio muestran precios al por mayor en tiempo real obtenidos del proveedor conectado. Para que esto funcione, los TLD deben importarse.

- **Sincronización manual:** Settings › Domain Seller › Sync TLDs (por proveedor)
- **Sincronización automática:** Se ejecuta diariamente mediante un trabajo cron programado en todos los proveedores configurados.

Después de una sincronización, vaya a la pestaña Configuración del Dominio de cualquier producto de dominio y use el selector de TLD para ver los TLD disponibles con sus precios al por mayor actuales.

---

## Renovación automática {#auto-renewal}

Las renovaciones de dominios están vinculadas al estado de membresía del cliente:

- Cuando una membresía se renueva y un dominio está vinculado, la renovación del dominio se pone automáticamente en cola.
- Los intentos de renovación utilizan la pasarela de pago activa del cliente.
- Las renovaciones fallidas se reintentan automáticamente con retroceso exponencial (exponential backoff).
- Se envían notificaciones por correo electrónico para renovaciones exitosas, fallos y próximas expiraciones.

IDs de plantillas de correo electrónico para eventos del ciclo de vida del dominio:

| Evento | ID do Template |
|---|---|
| Domínio registado | `domain_registered` |
| Domínio renovado | `domain_renewed` |
| Renovación fallida | `domain_renewal_failed` |
| Domínio a expirar em breve | `domain_expiring_soon` |

---

## Admin: Registo manual de domínio {#admin-manual-domain-registration}

Para registar un dominio en nome dun cliente sen pasar pelo proceso de checkout:

1. Ve a **Network Admin › Ultimate Multisite › Register Domain** (Administrador da Rede › Ultimate Multisite › Registrar Dominio)
2. Seleita o cliente e introduce o nome do dominio
3. Preenche os datos de contacto do registrador (nome, morada, teléfono)
4. Clica en **Register** (Registrar)

O rexistro do dominio é criado e vinculado á conta do cliente.
