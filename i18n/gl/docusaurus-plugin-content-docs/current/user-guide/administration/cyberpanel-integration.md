---
title: Integración CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integración CyberPanel {#cyberpanel-integration}

Este guía explica cómo configurar la integración de Ultimate Multisite CyberPanel para que los dominios mapeados en tu red se añadan (y se quiten) automáticamente como hosts virtuales en CyberPanel, con opción a aprovisionamiento automático de SSL a través de Let's Encrypt.

## Qué Hace {#what-it-does}

- Cuando un dominio se mapea en Ultimate Multisite, la integración llama a la API de CyberPanel para crear un host virtual para ese dominio.
- Cuando se elimina un mapeo de dominio, la integración llama a la API para borrar el host virtual correspondiente.
- Cuando el auto-SSL está activado, la integración activa la emisión del certificado Let's Encrypt inmediatamente después de que se crea el host virtual.
- Opcionalmente añade/quita el alias `www.` dependiendo de tu configuración "Auto-create www subdomain" en la configuración de Mapeo de Dominios.

## Requisitos Previos {#prerequisites}

- Una instancia de CyberPanel en funcionamiento (se recomienda v2.3 o posterior) accesible desde tu servidor de WordPress.
- Un sitio web existente en CyberPanel que ya sirva la raíz de tu red de WordPress. La integración adjunta nuevos hosts virtuales a este servidor.
- Acceso a la API de CyberPanel habilitado. La autenticación utiliza tu nombre de usuario y contraseña de administrador de CyberPanel.
- Tus registros DNS para los dominios mapeados deben apuntar ya a la dirección IP de tu servidor antes de que el auto-SSL pueda emitir un certificado válido.

## Requisitos {#requirements}

Las siguientes constantes deben definirse en tu archivo `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://tu-host-cyberpanel:8090');
define('WU_CYBERPANEL_USERNAME', 'tu_nombre_de_usuario_admin');
define('WU_CYBERPANEL_PASSWORD', 'tu_contrasena_admin');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opcionalmente, también puedes definir:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — activa o Let's Encrypt SSL despois da creación do dominio
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Usado para contacto do certificado SSL
```

## Instrucións de Configuración {#setup-instructions}

### 1. Activar a API do CyberPanel {#1-enable-the-cyberpanel-api}

1. Entra na túa plataforma CyberPanel como administrador.
2. Ve a **Security** > **SSL** e confirma que o SSL está activo na propia interfaz do CyberPanel (é necesario para chamadas seguras da API).
3. A API do CyberPanel está disponible en `https://your-server-ip:8090/api/` por defecto. Non hai pasos adicionais necesarios para activala — está activa por defecto para usuarios administradores.

### 2. Añadir Constantes a wp-config.php {#2-add-constants-to-wp-configphp}

Añade as seguintes constantes ao teu ficheiro `wp-config.php` antes da línea `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'tu_contrasenda_segura');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Para activar o auto-SSL (recomendado):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Activar a Integración {#3-enable-the-integration}

1. No o teu administrador de rede WordPress, ve a **Ultimate Multisite** > **Settings**.
2. Navega á pestaña **Domain Mapping**.
3. Desce até **Host Integrations**.
4. Activa a integración **CyberPanel**.
5. Clica en **Save Changes** (Salvar Alteracións).

### 4. Verificar a Conectividade {#4-verify-connectivity}

Usa o teste de conexión incorporado no asistente de configuración:

1. Vaya a **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Clica en **Test Connection**.
3. Un mensaje de éxito confirma que o plugin pode alcanzar a API do CyberPanel e autenticar correctamente.

## Como Funciona {#how-it-works}

### Domain Mapping (Mapeamento de Domínio) {#domain-mapping}

Quando un domínio se mapea en Ultimate Multisite:

1. A integración envía unha petición `POST` a `/api/createWebsite` no teu host CyberPanel.
2. CyberPanel crea un novo host virtual para o dominio dentro do paquete configurado.
3. O *document root* (raíz do documento) se establece para apuntar á raíz da rede WordPress.
4. Quando se remove o mapeamento de domínio, a integración chama `/api/deleteWebsite` para limpar o host virtual.

### Auto-SSL (Auto-SSL) {#auto-ssl}

Quando `WU_CYBERPANEL_AUTO_SSL` é `true`:

1. Despois de que se crea o host virtual, a integración chama `/api/issueSSL` para o dominio.
2. CyberPanel solicita un certificado Let's Encrypt utilizando o desafío ACME HTTP-01.
3. O certificado renovese automáticamente por parte do CyberPanel antes da expira.

> **Importante:** O DNS debe estar completamente propagado á dirección IP do teu servidor antes de que Let's Encrypt possa validar o dominio. Se a emisión do SSL falha inmediatamente después do mapeamento, espera á propagación do DNS e reativa o SSL desde o *dashboard* do CyberPanel no apartado **SSL** > **Manage SSL**.

### Subdomínio www {#www-subdomain}

Se está activada a opción **Auto-create www subdomain** nas configuración de Domain Mapping, a integración tamén crea un alias de host virtual para `www.<domain>` e, cuando o Auto-SSL está activo, emite un certificado que cubra tanto as variantes apex como www.

### Email Forwarders (Reenvíos de Correo Electrónico) {#email-forwarders}

Quando o addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) está ativo, o CyberPanel também pode fornecer encaminhadores de e-mail para clientes. Os encaminhadores direcionam mensagens de um endereço de domínio para outra caixa de entrada sem criar uma caixa de correio completa, o que é útil para aliases como `info@customer-domain.test` ou `support@customer-domain.test`.

Antes de ativar os encaminhadores para clientes:

1. Confirme se as constantes do CyberPanel acima estão configuradas e se o teste de conexão passa.
2. Ative o provedor de e-mail do CyberPanel nas configurações do addon Emails.
3. Confirme se o domínio do cliente já existe no CyberPanel antes de criar o encaminhador.
4. Crie um encaminhador de teste e envie uma mensagem através dele antes de oferecer o recurso nos planos de produção.

Se a criação do encaminhador falhar, verifique primeiro os logs de atividade do Ultimate Multisite e depois confirme no CyberPanel se o domínio de origem existe e se o usuário da API tem permissões de gerenciamento de e-mail.

## Referência de Configuração {#configuration-reference}

| Constante | Obrigatório | Padrão | Descrição |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Sim | — | URL completa da sua instância do CyberPanel, incluindo porta, ex: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Sim | — | Nome de usuário administrador do CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Sim | — | Senha do administrador do CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Sim | `Default` | Pacote de hospedagem do CyberPanel a atribuir aos novos hosts virtuais |
| `WU_CYBERPANEL_AUTO_SSL` | Não | `true` | Emitir um certificado SSL Let's Encrypt após a criação do domínio |
| `WU_CYBERPANEL_PHP_VERSION` | Não | `PHP 8.2` | Versão PHP para novos hosts virtuais (deve corresponder a uma versão instalada no CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Não | — | E-mail de contato para registro do certificado SSL |

## Notas Importantes {#important-notes}

A API do CyberPanel usa autenticación basada en token de sessão. A integración trata da obtención do token automáticamente en cada chamada da API.
O seu conta de administrador do CyberPanel debe ter permisos para crear e eliminar websites.
O CyberPanel funciona por defecto na porta `8090`. Se o seu servidor usa un firewall, asegúrese de que esta porta é accesible a partir do servidor da aplicación WordPress.
A integración non gestiona os registos DNS. Debe apuntar o DNS do domínio á dirección IP do seu servidor antes de mapear o domínio no Ultimate Multisite.
Se usa OpenLiteSpeed (OLS), un reinicio gracioso é activado automáticamente después de cambiar os virtual hosts. Non se necesita intervención manual.

## Solución de problemas {#troubleshooting}

### Conexión API recusada {#api-connection-refused}

- Verifique que a porta `8090` está aberta no firewall do seu servidor.
- Confirme que o valor de `WU_CYBERPANEL_HOST` incluí o protocolo correcto (`https://`) e a porta.
- Verifique se o certificado SSL do CyberPanel é válido; os certificados autoassinados poden causar fallos na verificación TLS. Defina `WU_CYBERPANEL_VERIFY_SSL` como `false` só en entornos de rede privada de confianza.

### Erros de autenticación {#authentication-errors}

- Confirme que o seu `WU_CYBERPANEL_USERNAME` e `WU_CYBERPANEL_PASSWORD` son correctos iniciando sesión directamente no CyberPanel.
- O CyberPanel bloqueia contas después de intentos fallidos repetidos de inicio de sesión. Verifique **Security** > **Brute Force Monitor** no CyberPanel se ocorren bloqueios.

### Domínio non criado {#domain-not-created}

- Verifique o registo de actividad do Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) para mensajes de erro da API.
- Verifique que o pacote definido en `WU_CYBERPANEL_PACKAGE` existe no CyberPanel (**Packages** > **List Packages**).
- Asegúrese de que o domínio non está déjà registado como website no CyberPanel — a creación duplicada de websites retorna un error.

### Certificado SSL non emitido {#ssl-certificate-not-issued}

Confirma que o DNS se propagou completamente: `dig +short your-domain.com` debería devolver a IP do teu servidor.
O Let's Encrypt impõe limites de taxa (rate limits). Se fizeste recentemente vários certificados para o mesmo domínio, espera antes de intentar de novo.
Verifica os logs SSL do CyberPanel na sección **Logs** > **Error Logs** para obter detalhes sobre falhas na emissão do certificado.
Como plano B, podes emitir o SSL manualmente do CyberPanel: **SSL** > **Manage SSL** > selecciona o domínio > **Issue SSL**.

## Referencias {#references}

- Documentación de API do CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Gestión de SSL do CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Limites de tasa do Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
