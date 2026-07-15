---
title: Como instalar WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Como instalo WordPress Multisite?

WordPress Multisite permite tener unha rede de sitios en unha única instalación. É unha característica integrada, pero non está activa por defecto.

:::tip
Ultimate Multisite incluí un **[Asistente de configuración de Multisite integrado](./multisite-setup-wizard)** que automatiza todo este proceso. Se tes Ultimate Multisite instalado, recomendamos usar o asistente en lugar de seguir os pasos manuais abaixo.
:::

Como Ultimate Multisite é un plugin só para rede, neste tutorial aprenderás a instalar e configurar WordPress Multisite manualmente. Este texto está basado en [Cómo instalar e configurar una red de WordPress Multisite](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), de WPBeginner.

**Cosas a tener em conta antes de crear a pulsa rede multisite:**

  * ¡Consigue un buen alojamiento para WordPress! Os sitios en unha rede comparten os mesmos recursos do servidor.

  * Se só tes uns nos dois sitios con pouco tráfico, o alojamiento compartido probablemente te funcionará.

  * A máis de **proveedores de alojamiento gestionado de WordPress** ofrecen Multisite listo para usar (instalan WordPress con Multisite ya activado e configurado para ti). Este é o caso de WP Engine, Closte, Cloudways, etc. Se non estás seguro se ese é o o para o teu proveedor de alo, contacta ao seu soporte antes de continuar con este tutorial.

  * Tamén é bueno estar familiarizado co instalación de WordPress e a edición de arquivos usando FTP.

_**IMPORTANTE**_ **:** Se estás configurando unha red multisite en un sitio WordPress existente, non te esquezas de:

  * Crear un backup completo do teu sitio WordPress

  * Desactivar todos os plugins do teu sitio indo á páxina dos plugins e seleccionando _Desactivar_ a partir das accións en masa e pulando en _Aplicar_.

Para activar o Multisite, primeiro conecta ao seu sitio usando un cliente FTP ou o gestor de ficheiros do cPanel e abre o teu ficheiro `wp-config.php` para editar.

Antes da linha _*Eso é todo, pare de editar! Feliz blogar.*_, adiciona o seguinte fragmento de código:

```php
define('WP_ALLOW_MULTISITE', true);
```

Guarda e carrega o teu ficheiro `wp-config.php` de volta no servidor.

Com a funcionalidade Multisite ativada no teu sitio, agora é hora de configurar a tua rede.

Vai a **Tools » Network Setup** (Ferramentas » Configuración da Rede)

Agora tens de dizer ao WordPress que tipo de estrutura de domínio vais usar para os sites na tua rede: subdomínios ou subdiretórios.

Se escolheres subdomínios, tens de mudar as configuración DNS para o mapeamento do domínio e garantir que a configuração de _**subdomínios curinga (wildcard subdomains)**_ está feita para a tua rede Multisite.

De volta à Configuración da Rede, dá um título à tua rede e certifica-te de que o endereço de email no email de administrador da Rede está correto. Clica em _Install_ (Instalar) para continuar.

Adiciona este código, fornecido pelo WordPress, ao teu _**wp-config.php**_:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

E este código, também fornecido pelo WordPress, ao teu ficheiro _**.htaccess**_:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Use un cliente FTP ou un gestor de ficheiros (se estiver a usar algo como cPanel, por exemplo) para copiar e colar o código nestes dois ficheiros.

Finalmente, faça login novamente no seu site WordPress para aceder à sua rede multisite.

**É importante testar e garantir que consegue criar um subsítio na sua instalação de WordPress Multisite antes de instalar o Ultimate Multisite.**

Para criar um subsítio:

  1. Abra os seus websites wp-admin

  2. Navegue até Sites > Sites (/wp-admin/network/sites.php)

  3. Clique em Adicionar Novo no topo

  4. Preencha todos os campos:

  * Site Address — Nunca use “www”

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Título do site, pode ser alterado mais tarde

  * Admin Email — Defina como o utilizador administrador inicial para o subsítio

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Depois de preencher os campos, clique no botão "Adicionar site". Assim que o novo subsítio for criado, aceda a ele para garantir que o subsítio está funcional.

## Problemas Comuns: {#add-a-trailing-slash-to-wp-admin}

### 1. Consigo criar novos sites mas eles não são acessíveis. {#common-problems}

Se escolheu subdomínios, também precisa de configurar subdomínios curinga (wildcard) para a sua rede multisite.

Para fazer isso, vá ao painel de controlo da conta de alojamento do seu Website (por exemplo cPanel/Plesk/Direct Admin dependendo do seu fornecedor de alojamento).

Procure uma opção por “Domínios” ou “Subdomínios”. Em alguns painéis de controlo está rotulado como “Administração de Domínio”.

No campo do subdomínio, introduza um asterisco (*). Depois, deverá pedir-lhe para selecionar o nome de domínio onde deseja adicionar o subdomínio.

A raiz do documento (document root) para o nome de domínio selecionado será detetada automaticamente. Clique no botão _Create_ ou _Save_ para adicionar o seu subdomínio curinga (wildcard). A entrada deverá parecer “*.[mydomain.com](http://mydomain.com)”.
