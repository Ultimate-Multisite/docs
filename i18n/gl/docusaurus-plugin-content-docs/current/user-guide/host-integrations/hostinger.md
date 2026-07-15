---
title: Integración Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integración con Hostinger (hPanel)

## Visión general {#overview}

Hostinger é un proveedor popular de alojamiento web que conta con un panel de control moderno chamado hPanel. A integración Ultimate Multisite Hostinger permite a sincronización automática de domínios entre Ultimate Multisite e o hPanel da Hostinger, permitindo-te gestionar automaticamente os mapeamentos de domínio e subdomínios directamente a partir do teu administrador do WordPress.

## Características {#features}

- Criação automática de domínios adicionais (addon domains) no hPanel
- Criação automática de subdomínios no hPanel (para instalações de multisite de subdomínio)
- Remoção do domínio quando os mapeamentos são excluídos
- Integração perfeita com a API de gestão de domínios do hPanel

## Requisitos {#requirements}

Para usar a integração Hostinger, precisas de:

1. Uma conta Hostinger com acesso ao hPanel
2. Um token de API da Hostinger
3. As seguintes constantes definidas no teu ficheiro `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'o_teu_token_da_hostinger');
define('WU_HOSTINGER_ACCOUNT_ID', 'o_teu_id_da_conta_hostinger');
```

Opcionalmente, podes definir também:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Ponto de acesso API padrão
```

## Instruções de Configuração {#setup-instructions}

### 1. Gera o teu Token de API da Hostinger {#1-generate-your-hostinger-api-token}

1. Inicia sesión na tua conta Hostinger e acede ao hPanel
2. Navega para **Account Settings** → **API Tokens**
3. Clica em **Create New Token** (Criar Novo Token)
4. Dá um nome descritivo ao teu token (ex: "Ultimate Multisite")
5. Selecciona as permissões necessárias:
   - Domain management (Gestão de domínio)
   - Subdomain management (Gestão de subdomínio)
6. Copia o token gerado e guarda-o de forma segura

### 2. Encontra o teu ID de Conta {#2-find-your-account-id}

1. No hPanel, vai para **Account Settings** → **Account Information** (Información da Cuenta)
2. O teu Account ID é exibido nesta página
3. Copia e guarda este ID para o próximo passo

### 3. Adiciona Constantes ao wp-config.php {#3-add-constants-to-wp-configphp}

Adiciona as seguintes constantes ao teu ficheiro `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'o seu_token_da_api_hostinger');
define('WU_HOSTINGER_ACCOUNT_ID', 'o_seu_id_de_conta_hostinger');
```

Se a súa conta Hostinger usa un punto final de API diferente, pode personalizalo así:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Activar a Integración {#4-enable-the-integration}

1. No o seu administrador de WordPress, diríbase a **Ultimate Multisite > Settings** (Configuración)
2. Navegue á pestaña **Domain Mapping** (Mapeo de Dominios)
3. Desplázese até ao final e ache **Host Integrations** (Integración Host)
4. Active a integración **Hostinger (hPanel)**
5. Pulse en **Save Changes** (Guardar Alteracións)

## Como Funciona {#how-it-works}

### Addon Domains (Dominios Adicionais) {#addon-domains}

Cando mapea un dominio en Ultimate Multisite:

1. A integración envía unha petición á API de Hostinger para añadir o dominio como un dominio adicional
2. O dominio está configurado para apuntar ao seu directorio raíz
3. Cando se remove un mapeo de dominio, a integración remove automáticamente o dominio adicional do hPanel

### Subdomains (Subdominios) {#subdomains}

Para instalacións multisite de subdominios, cando se crea un novo sitio:

1. A integración extrae a parte do subdominio do dominio completo
2. Envía unha petición á API de Hostinger para añadir o subdominio
3. O subdominio está configurado para apuntar ao seu directorio raíz

## Notas Importantes {#important-notes}

- A integración usa a REST API de Hostinger para comunicarse coa súa conta
- O seu token de API debe ter as permiñas necesarias para a xestión de dominios e subdominios
- A integración non maneña a configuración DNS; os dominios deben apuntar ya á súa conta Hostinger
- As peticións de API se realizan de forma segura por HTTPS
- Mante o seu token de API seguro e nunca o parta públicamente

## Solución de Problemas {#troubleshooting}

### Problemas de Conexión da API {#api-connection-issues}

Verifique que o seu API token está correto e não expirou
Verifique se o seu Account ID está correto
Certifique-se de que o seu API token tem as permissões necessárias para gestão de domínios
Confirme que a sua conta Hostinger está ativa e em bom estado

### Domínio Não Adicionado {#domain-not-added}

- Verifique os logs do Ultimate Multisite para quaisquer mensagens de erro
- Confirme se o domínio não foi adicionado à sua conta Hostinger
- Certifique-se de que a sua conta Hostinger não atingiu o limite de domínios adicionais (addon domains)
- Confirme que o domínio está corretamente apontado para os seus nameservers da Hostinger

### Problemas com o Certificado SSL {#ssl-certificate-issues}

- A integração não gere certificados SSL
- A Hostinger geralmente fornece certificados SSL gratuitos através do AutoSSL
- Pode gerir os certificados SSL diretamente no hPanel em **SSL/TLS**
- Alternativamente, use o Let's Encrypt com a funcionalidade AutoSSL da Hostinger

## Suporte {#support}

Para obter ajuda adicional com a integração da Hostinger, consulte:

- [Documentação da API da Hostinger](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Documentação do Ultimate Multisite](/)
- [Suporte Ultimate Multisite](https://ultimatemultisite.com/support)
