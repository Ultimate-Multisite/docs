---
title: Integración Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integración con Cloudflare

## Visión General
Cloudflare é unha rede de entrega de contido (CDN) e provedor de seguridade líder que axuda a proteger e acelerar sitios web. Esta integración permite a gestión automática do dominio entre Ultimate Multisite e Cloudflare, especialmente para instalacións de multisite de subdominios.

## Características
- Creación automática de subdomínios en Cloudflare
- Soporte para subdomínios proxeados
- Gestión de registros DNS
- Visualización mejorada dos registros DNS no admin de Ultimate Multisite

## Requisitos
As seguintes constantes deben estar definidas no seu ficheiro `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'su_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'su_zone_id');
```

## Instrución de Configuración

### 1. Obtén a Tua API Key de Cloudflare

1. Entra no teu panel de control de Cloudflare
2. Ve a "My Profile" (clica na tua email no canto superior direito)
3. Seleita "API Tokens" do menú
4. Crea un novo token de API con as seguintes permiñas:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Copia a tua API token

### 2. Obtén o ID da Zona

1. No o teu panel de control de Cloudflare, selecciona o dominio que queres usar
2. O ID da Zona é visible na pestaña "Overview", no lateral direito, debaixo de "API"
3. Copia o ID da Zona

### 3. Añade as Constantes a wp-config.php

Añade as seguintes constantes ao teu ficheiro `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'su_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'su_zone_id');
```

### 4. Habilita a Integración

1. No o teu admin de WordPress, ve a Ultimate Multisite > Settings
2. Navega até a pestaña "Domain Mapping" (Mapeamento de Dominios)
3. Desplázate hasta "Host Integrations" (Integracións de Alojamento)
4. Habilita a integración de Cloudflare
5. Clica en "Save Changes" (Guardar Cambios)

## Como Funciona

### Gestión de Subdomínios

Cando se crea un novo sitio nunha instalación multisite de subdominios:

1. A integración envía unha petición á API de Cloudflare para añadir un rexistro CNAME para o subdomínio.
2. O subdomínio está configurado para ser proxestado a través de Cloudflare por defecto (isto se pode cambiar con filtros).
3. Quando se deleta un sitio, a integración removerá o subdomínio de Cloudflare.

### Visualización do Rexistro DNS

A integración melhora a visualización dos rexistros DNS no admin de Ultimate Multisite ao:

1. Obtén os rexistros DNS directamente de Cloudflare
2. Mostrar se os rexistros están proxestados ou non
3. Mostrar información adicional sobre os rexistros DNS

## Nomes de Host Personalizados de Cloudflare (Cloudflare Custom Hostnames)

**Nomes de Host Personalizados de Cloudflare** (anteriormente chamados "Cloudflare for SaaS") é unha característica de Cloudflare que permite aos tus clientes usar os seus propios dominios con SSL na tua rede multisite. É a aproboxa recomendada para instalacións multisite mapeadas por dominio que usen Cloudflare, porque Cloudflare gestiona a emisión e renovación do certificado SSL para cada dominio personalizado automáticamente.

### Como difere do integración estándar de Cloudflare

| | Integración Estándar | Nomes de Host Personalizados de Cloudflare |
|---|---|---|
| **Propósito** | Crea rexistros DNS automáticamente para subdominios | Permite dominios personalizados (mapeados) con SSL gestionado por Cloudflare |
| **Melhor para** | Multisite de subdominios | Multisite mapeado por dominio |
| **SSL** | Gestionado separadamente | Gestionado automáticamente por Cloudflare |

### Configuración dos Nomes de Host Personalizados de Cloudflare

1. No seu painel do Cloudflare, abra a zona para o seu domínio principal.
2. Vá a **SSL/TLS > Custom Hostnames**.
3. Adicione um *fallback origin* que aponta para o IP ou nome de host do seu servidor.
4. Para cada domínio de cliente mapeado no Ultimate Multisite, adicione uma entrada de Custom Hostname no Cloudflare. Pode automatizar este passo usando a API do Cloudflare.
5. O Cloudflare emite e renova automaticamente os certificados TLS para cada *custom hostname* assim que o DNS do cliente for apontado para a sua rede.

Para a referência completa da API, veja [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Atualização de terminologia
A partir do Ultimate Multisite v2.6.1, este recurso é referido como **Cloudflare Custom Hostnames** em todas as configurações e etiquetas do plugin. Versões anteriores usavam o nome "Cloudflare for SaaS", que é o nome do produto subjacente da Cloudflare.
:::

## Notas Importantes

A partir das recentes atualizações da Cloudflare, o *wildcard proxying* (proxyamento curinga) está agora disponível para todos os clientes. Isto significa que a integração padrão de DNS do Cloudflare é menos crítica para instalações de multisite de subdomínios do que era antes, pois pode simplesmente configurar um registo DNS curinga no Cloudflare.

## Resolução de Problemas

### Problemas de Conexão da API
- Verifique se o seu *API token* está correto e tem as permissões necessárias.
- Confirme se o seu Zone ID está correto.
- Certifique-se de que a sua conta do Cloudflare tem as permissões necessárias.

### Subdomínio Não Adicionado
- Verifique os logs do Ultimate Multisite para quaisquer mensagens de erro.
- Confirme se o subdomínio não foi adicionado ao Cloudflare já.
- Certifique-se de que o seu plano do Cloudflare suporta o número de registos DNS que está a criar.

### Problemas de Proxy

- Se que non queres que os subdomínios se proxen, podes usar o filtro `wu_cloudflare_should_proxy`.
- Algún recurso pode non funcionar correctamente se están proxen (por exemplo, ciertas funcións do administrador de WordPress).
- Pensa en usar as Reglas da Página de Cloudflare para evitar o cache nas páxinas administrativas.
