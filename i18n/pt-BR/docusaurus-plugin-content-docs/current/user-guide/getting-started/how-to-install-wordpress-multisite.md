---
title: Como instalar o WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Como instalo o WordPress Multisite?

O WordPress Multisite permite que você tenha uma rede de sites em uma única instalação. Este é um recurso integrado, mas não vem ativo por padrão.

:::tip
Ultimate Multisite inclui um **[Assistente de Configuração de Multisite integrado](./multisite-setup-wizard)** que automatiza todo esse processo. Se você tem o Ultimate Multisite instalado, recomendamos usar o assistente em vez de seguir as etapas manuais abaixo.
:::

Como o Ultimate Multisite é um plugin somente para rede, neste tutorial, você aprenderá como instalar e configurar o WordPress Multisite manualmente. Este texto é baseado em [Como instalar e configurar uma rede WordPress Multisite](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), da WPBeginner.

**Coisas às quais prestar atenção antes de criar sua rede multisite:**

  * Tenha uma boa hospedagem WordPress! Sites em uma rede compartilham os mesmos recursos do servidor.

  * Caso você tenha apenas alguns sites com baixo tráfego, a hospedagem compartilhada provavelmente funcionará para você.

  * A maioria dos **provedores de hospedagem WordPress gerenciada** oferece Multisite pronto para uso (eles instalam o WordPress com Multisite já ativado e configurado para você). Este é o caso da WP Engine, Closte, Cloudways etc. Se você não tiver certeza se esse é o caso do seu provedor de hospedagem, entre em contato com o suporte deles antes de continuar com este tutorial.

  * Também é bom estar familiarizado com a instalação do WordPress e a edição de arquivos usando FTP .

_**IMPORTANTE**_ **:** Se você estiver configurando uma rede multisite em um site WordPress existente, não se esqueça de:

  * Criar um backup completo do seu site WordPress

  * Desativar todos os plugins no seu site acessando a página de plugins, selecionando _Desativar_ nas ações em massa e, em seguida, clicando em _Aplicar_

<!-- Captura de tela indisponível: página de plugins do WordPress mostrando a ação em massa de desativar -->

Para ativar o Multisite, primeiro conecte-se ao seu site usando um cliente FTP ou o gerenciador de arquivos do cPanel, e abra seu arquivo wp-config.php para edição.

Antes da linha _*That’s all, stop editing! Happy blogging.*_, adicione o seguinte trecho de código:

define('WP_ALLOW_MULTISITE', true);

Salve e envie seu arquivo wp-config.php de volta para o servidor.

Com o recurso multisite ativado no seu site, agora é hora de configurar sua rede.

Vá para **Ferramentas » Configuração da rede**

<!-- Captura de tela indisponível: menu Ferramentas do WordPress mostrando a opção Configuração da rede -->

Agora você precisa informar ao WordPress que tipo de estrutura de domínio você usará para os sites na sua rede: subdomínios ou subdiretórios.

Se você escolher subdomínios, deverá alterar suas configurações de DNS para mapeamento de domínio e garantir a configuração de _**subdomínios curinga**_ para sua rede multisite.

Voltando à Configuração da rede, dê um título para sua rede e certifique-se de que o endereço de e-mail em E-mail do administrador da rede esteja correto. Clique em _Instalar_ para continuar.

<!-- Captura de tela indisponível: página de Configuração da rede do WordPress com campos de título da rede e e-mail do administrador -->

Adicione este código, fornecido pelo WordPress, ao seu _**wp-config.php**_ :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

E este código, também fornecido pelo WordPress, ao seu arquivo _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Use um cliente FTP ou um gerenciador de arquivos (se você estiver usando algo como cPanel, por exemplo) para copiar e colar o código nesses dois arquivos.

Por fim, faça login novamente no seu site WordPress para acessar sua rede multisite.

**É importante testar e garantir que você consegue criar um subsite na sua instalação WordPress Multisite antes de instalar o Ultimate Multisite.**

Para criar um subsite:

  1. Abra o wp-admin dos seus sites

  2. Navegue até Meus Sites > Sites (/wp-admin/network/sites.php)

  3. Clique em Adicionar novo no topo

  4. Preencha todos os campos:

  * Endereço do site — Nunca use “www”

  * Subdomínio: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdiretório: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Título do site — Título do site, pode ser alterado depois

  * E-mail do administrador — Definido como o usuário administrador inicial do subsite

![Formulário de adicionar novo site no WordPress Multisite](/img/admin/sites-list.png)

Depois de preencher os campos, clique no botão "Adicionar site". Assim que o novo subsite for criado, prossiga e acesse-o para garantir que o subsite esteja funcionando.

## Problemas comuns: {#common-problems}

### 1\. Consigo criar novos sites, mas eles não estão acessíveis. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Se você escolheu subdomínios, também precisa configurar subdomínios curinga para sua rede multisite.

Para fazer isso, vá para o dashboard do painel de controle da conta de hospedagem do seu site (por exemplo, cPanel/Plesk/Direct Admin, dependendo do seu provedor de hospedagem).

Encontre uma opção para “Domínios” ou “Subdomínios”. Em alguns painéis de controle, ela aparece como “Administração de domínio”.

No campo de subdomínio, insira um asterisco (*). Em seguida, ele deve pedir que você selecione um nome de domínio sob o qual deseja adicionar o subdomínio.

A raiz do documento para o nome de domínio selecionado será detectada automaticamente. Clique no botão _Criar_ ou _Salvar_ para adicionar seu subdomínio curinga. A entrada deve ficar parecida com “*.[mydomain.com](http://mydomain.com)”
