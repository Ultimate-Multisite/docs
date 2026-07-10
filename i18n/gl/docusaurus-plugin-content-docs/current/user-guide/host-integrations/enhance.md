---
title: Mejorar a Integración do Painel de Controlo
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Melhorar a Integração com o Painel de Controlo {#enhance-control-panel-integration}

## Visión Geral {#overview}
Enhance é un painel de controlo moderno que proporciona potentes capacidades de automatización y gestión de alojamiento. Esta integración permite la sincronización automática de domínios y la gestión de certificados SSL entre Ultimate Multisite e el Enhance Control Panel.

**Discusión Relacionada:** Vea [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) para consejos de la comunidad e información adicional.

## Características {#features}
- Sincronización automática de dominios cuando se mapean en Ultimate Multisite
- Provisión automática de certificados SSL a través de LetsEncrypt cuando el DNS se resuelve
- Soporte para subdominios para redes que funcionan en modo subdominio
- Eliminación del dominio cuando se eliminan los mapeos
- Prueba de conexión para verificar las credenciais de la API

## Requisitos {#requirements}

### Requisitos del Sistema {#system-requirements}
- Enhance Control Panel instalado y accesible
- Instalación de WordPress Multisite alojada en o conectada a un servidor Enhance
- Servidor web Apache (Enhance actualmente soporta configuraciones de Apache; LiteSpeed Enterprise está disponible a un coste reducido)

### Acceso a la API {#api-access}
Debe tener acceso de administrador al Enhance Control Panel para crear tokens de API.

## Obtener sus Credenciais de API {#getting-your-api-credentials}

### 1. Crear un Token de API {#1-create-an-api-token}

1. Inicie sesión en su Enhance Control Panel como administrador
2. Haga clic en **Settings** (Configuración) en el menú de navegación
3. Navegue hasta **Access Tokens** (Tokens de Acceso)
4. Haga clic en **Create Token** (Crear Token)
5. Dé un nombre descriptivo al token (por ejemplo, "Ultimate Multisite Integration")
6. Asigne el rol de **System Administrator** (Administrador del Sistema)
7. Para la fecha de caducidad:
   - Délo vacío si desea que el token nunca caduque
   - O establezca una fecha de caducidad específica por motivos de seguridad
8. Haga clic en **Create** (Crear)

Depois da criação, o seu **Access Token** e o **Organization ID** serão exibidos. **Guarde estes imediatamente**, pois o token só será mostrado uma vez.

### 2. Obter o Seu Organization ID {#2-get-your-organization-id}

O Organization ID é exibido na página de Access Tokens numa caixa de informação azul rotulada como "Org ID: {your_id}".

O Organization ID tem um formato UUID, parecido com isto: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Também podes encontrar o Organization ID de um cliente seguindo estes passos:
1. Vai para a página **Customers** (Clientes)
2. Clica em **Manage customer** (Gerir cliente) para o cliente em questão
3. Olha na URL - o Organization ID são os caracteres alfanuméricos depois de `/customers/`

### 3. Obter o Seu Server ID {#3-get-your-server-id}

Para encontrar o seu Server ID (necessário para operações de domínio):

1. No Enhance Control Panel, navega até **Servers** (Servidores)
2. Clica no servidor onde a tua instalação do WordPress está a correr
3. O Server ID (formato UUID) estará visível na URL ou nos detalhes do servidor
4. Alternativamente, podes usar a API para listar os servidores:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

O server ID segue o formato UUID: `00000000-0000-0000-0000-000000000000`

### 4. Obter a Sua API URL {#4-get-your-api-url}

A tua API URL é a URL do teu Enhance Control Panel com `/api/` adicionado:

```
https://your-enhance-panel.com/api/
```

**Importante:** O caminho `/api/` é obrigatório. Erros comuns incluem:
- Usar apenas o domínio sem `/api/`
- Usar HTTP em vez de HTTPS (HTTPS é necessário para segurança)

## Configuração {#configuration}

### Constantes Obrigatórias {#required-constants}

Adiciona as seguintes constantes ao teu ficheiro `wp-config.php`:

// Melhorar a Integração com o Painel de Controlo
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Configuración através del Asistente de Integración {#setup-via-integration-wizard}

1. No o admin de WordPress, ve a **Ultimate Multisite** > **Settings** (Configuraciones)
2. Navega a la pestaña **Integrations** (Integraciones)
3. Busca **Enhance Control Panel Integration** y haz clic en **Configuration** (Configuración)
4. El asistente te guiará en la configuración:
   - **Paso 1:** Introducción y resumen de las funciones
   - **Paso 2:** Introduce tus credenciales de API (Token, URL de API, ID del Servidor)
   - **Paso 3:** Prueba la conexión
   - **Paso 4:** Revisa y activa

Puedes elegir:
- Dejar que el asistente inyecte las constantes en tu archivo `wp-config.php` automáticamente
- Copiar las definiciones de constante y añadirlas manualmente

## Configuración Adicional de WordPress {#additional-wordpress-configuration}

Basándonos en los comentarios de la comunidad ([Discusión #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), es posible que necesites configurar estas opciones adicionales:

### Configuración de .htaccess {#htaccess-configuration}

Si tienes problemas con el mapeo de dominios:
1. Elimina el archivo `.htaccess` original de Enhance
2. Reemplázalo con el archivo `.htaccess` estándar de WordPress Multisite

### Constantes de Cookies {#cookie-constants}

Añade estas constantes a `wp-config.php` para asegurar un manejo correcto de las cookies en los dominios mapeados:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Cómo Funciona {#how-it-works}

### Cuando se Mapea un Dominio {#when-a-domain-is-mapped}

1. Un usuario mapea un domínio personalizado en Ultimate Multisite (ou é criado um novo site em modo de subdomínio)
2. A integração envia uma requisição POST para a API do Enhance: `/servers/{server_id}/domains`
3. O Enhance adiciona o domínio à sua configuração do servidor
4. Quando o DNS resolve para o seu servidor, o Enhance providencia automaticamente um certificado SSL via LetsEncrypt
5. O domínio torna-se ativo com HTTPS

### Quando um Domínio é Removido {#when-a-domain-is-removed}

1. Uma associação de domínio é excluída no Ultimate Multisite
2. A integração consulta o Enhance para encontrar o ID do domínio
3. Uma requisição DELETE é enviada para: `/servers/{server_id}/domains/{domain_id}`
4. O Enhance remove o domínio da sua configuração do servidor

### Verificação de DNS e SSL {#dns-and-ssl-checking}

O Ultimate Multisite inclui verificação de DNS e SSL embutida:
- Pode configurar o intervalo de verificação nas **Domain Mapping Settings** (padrão: 300 segundos/5 minutos)
- O sistema verifica a propagação do DNS antes de marcar um domínio como ativo
- A validade do certificado SSL é verificada automaticamente
- O Enhance lida com a provisão do SSL automaticamente, por isso não é necessária configuração manual de SSL

## Verificação da Configuração {#verifying-setup}

### Testar a Conexão {#test-the-connection}

1. No Wizard da Integração, use o passo **Test Connection** (Testar Conexão)
2. O plugin tentará listar os domínios no seu servidor
3. Uma mensagem de sucesso confirma:
   - As credenciais da API estão corretas
   - A URL da API é acessível
   - O ID do Servidor é válido
   - As permissões estão configuradas corretamente

### Após Mapear um Domínio {#after-mapping-a-domain}

1. Mapeie um domínio de teste no Ultimate Multisite
2. Verifique os logs do Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifique no Painel de Controle do Enhance se o domínio foi adicionado:
   - Vá para **Servers** > **Seu Servidor** > **Domains**
   - O novo domínio deve aparecer na lista
4. Assim que o DNS propagar, verifique se o SSL é providenciado automaticamente

## Solución de Problemas {#troubleshooting}

### Problemas de Conexión a la API {#api-connection-issues}

**Error: "Failed to connect to Enhance API" (Falha ao conectar à API Enhance)**
- Verifica se `WU_ENHANCE_API_URL` incluye `/api/` no final.
- Asegúrate de estar usando HTTPS, no HTTP.
- Comprueba que el panel Enhance sea accesible desde tu servidor de WordPress.
- Verifica que no haya reglas de firewall bloqueando la conexión.

**Error: "Enhance API Token not found" (Token da API Enhance não encontrado)**
- Asegúrate de que `WU_ENHANCE_API_TOKEN` esté definido en `wp-config.php`.
- Verifica que el token no haya sido eliminado ni expirado en Enhance.
- Comprueba si hay errores tipográficos en el valor del token.

**Error: "Server ID is not configured" (ID do Servidor não está configurado)**
- Verifica que `WU_ENHANCE_SERVER_ID` esté definido en `wp-config.php`.
- Asegúrate de que o Server ID tenha um formato UUID válido.
- Confirma se o servidor existe no seu painel Enhance.

### Domínio Não Adicionado {#domain-not-added}

**Verifique os logs:**
1. Vá a **Ultimate Multisite** > **Logs**.
2. Filtre por **integration-enhance**.
3. Procure mensagens de erro que indiquem o problema.

**Causas comuns:**
- Formato de nome de domínio inválido.
- Domínio já existente no Enhance.
- Permissões de API insuficientes (certifique-se de que o token tenha a função System Administrator).
- O Server ID não corresponde ao servidor real no Enhance.

### Problemas com Certificado SSL {#ssl-certificate-issues}

**SSL não está sendo provisionado:**
- Verifica se o DNS aponta para o endereço IP do seu servidor.
- Confirme se o domínio resolve corretamente: `nslookup yourdomain.com`.
- O Enhance requer que o DNS seja resolvido antes de poder provisionar o SSL.
- A provisionamento do SSL geralmente leva de 5 a 10 minutos após a propagação do DNS.
- Verifique os logs do Painel de Controle do Enhance para erros específicos de SSL.

**Solução manual de problemas de SSL no Enhance:**
1. Vá a **Servers** > **Your Server** > **Domains**.
2. Encontre o seu domínio e verifique o status do SSL dele.
3. Você pode acionar manualmente o provisionamento do SSL se necessário.

### Intervalo de Verificação de DNS {#dns-check-interval}

Se os domínios ou certificados SSL están a demorar demasiado a ativar:
1. Vada a **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Encontre a configuração **DNS Check Interval** (Intervalo de Verificação DNS)
3. Ajuste do valor padrão de 300 segundos para um valor mais baixo (mínimo: 10 segundos)
4. **Nota:** Intervalos mais baixos significan verificações mais frequentes, mas maior carga no servidor

### Erros de Autenticação {#authentication-errors}

**Erros HTTP 401/403:**
- Gere novamente o seu token API em Enhance
- Verifique se o token tem a função **System Administrator** (Administrador do Sistema)
- Confirme que o token não expirou
- Certifique-se de estar a usar o Organization ID correto (embora geralmente não seja necessário na URL)

### Análise de Logs {#log-analysis}

Ative o registo detalhado:
```php
// Adicione ao wp-config.php para depuração melhorada
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Depois verifique os logs em:
- Logs do Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Log de depuração do WordPress: `wp-content/debug.log`
- Logs do painel Enhance: Disponíveis na interface de administração do Enhance

## Referência da API {#api-reference}

### Autenticação {#authentication}
Todas as requisições à API usam autenticação Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoints Comuns Utilizados {#common-endpoints-used}

**List Servers (Listar Servidores):**
```
GET /servers
```

**List Domains on a Server (Listar Domínios num Servidor):**
```
GET /servers/{server_id}/domains
```

**Add a Domain (Adicionar um Domínio):**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Delete a Domain (Eliminar um Domínio):**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Documentação Completa da API {#full-api-documentation}
Documentação completa da API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Melhores Práticas {#best-practices}

### Seguridade {#security}
- **Nunca comuniques os tokens API ao controlo de versão**
- Armazene os tokens no `wp-config.php`, que deve ser excluído do Git
- Use tokens com as permissões apropriadas (Administrador do Sistema para integração total)
- Defina datas de expiração dos tokens para ambientes de produção
- Rote os tokens periodicamente

### Desempeño {#performance}
- Use o intervalo padrão de verificação DNS (300 segundos) para evitar chamadas excessivas à API
- Monitore os recursos do servidor Enhance quando estiver a realizar operações de domínio em larga escala
- Considere agendar a adição de domínios se mapear muitos domínios de uma vez

### Monitorización {#monitoring}
- Verifique regularmente os logs do Ultimate Multisite em busca de erros de integração
- Configure monitorização para adições de domínio falhadas
- Verifique se os certificados SSL estão a ser provisionados corretamente
- Fique atento à capacidade do servidor Enhance e aos limites de domínios

## Recursos Adicionais {#additional-resources}

- **Documentação Oficial Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Documentação da API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Fórum Comunitário Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Discussão no GitHub:** [Issue #265 - Dicas de Integração Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Guia de Mapeamento de Domínios Ultimate Multisite:** Consulte a página wiki "Como Configurar o Mapeamento de Domínios v2"

## Suporte {#support}

Se encontrar problemas:
1. Verifique a secção de Resolução de Problemas acima
2. Revise os logs do Ultimate Multisite
3. Consulte as [Discussões no GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Contacte o suporte Enhance para problemas específicos do painel
5. Crie uma nova discussão com logs de erro detalhados para assistência da comunidade

## Notas {#notes}

Este integrador só trata de alias de domínio; o Enhance gere o certificado SSL automaticamente.
O integrador suporta tanto mapeamentos de domínio personalizados quanto sites baseados em subdomínios.
A criação automática do subdomínio www pode ser configurada nas configurações de Mapeamento de Domínio.
O Enhance atualmente suporta configurações do Apache (LiteSpeed Enterprise disponível).
A remoção do domínio no Ultimate Multisite removerá o domínio do Enhance, mas pode não apagar os certificados SSL associados imediatamente.
