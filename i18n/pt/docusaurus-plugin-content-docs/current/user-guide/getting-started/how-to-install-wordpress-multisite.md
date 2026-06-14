---
title: Como instalar o WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Como Instalar o WordPress Multisite?

O WordPress Multisite permite que você tenha uma rede de sites em uma única instalação. Este é um recurso nativo, mas não está ativo por padrão.

:::tip
O Ultimate Multisite inclui um **[Assistente de Configuração de Multisite Nativo](./multisite-setup-wizard)** que automatiza todo esse processo. Se você tem o Ultimate Multisite instalado, recomendamos usar o assistente em vez de seguir os passos manuais abaixo.
:::

Como o Ultimate Multisite é um plugin apenas para rede, neste tutorial, você aprenderá a instalar e configurar o WordPress Multisite manualmente. Este texto é baseado no [Como Instalar e Configurar uma Rede WordPress Multisite](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), do WPBeginner.

**Coisas a observar antes de criar sua rede multisite:**

  * Tenha uma boa hospedagem WordPress! Os sites em uma rede compartilham os mesmos recursos do servidor.

  * Se você tiver apenas alguns sites com pouco tráfego, a hospedagem compartilhada provavelmente funcionará para você.

  * A maioria dos **provedores de hospedagem WordPress gerenciados** oferece o Multisite pronto para uso (eles instalam o WordPress com o Multisite já ativado e configurado para você). Este é o caso do WP Engine, Closte, Cloudways, etc. Se você não tem certeza se isso é verdade para o seu provedor de hospedagem, entre em contato com o suporte deles antes de continuar este tutorial.

  * Também é bom estar familiarizado com a instalação do WordPress e a edição de arquivos usando FTP.

_**IMPORTANTE**_ **:** Se você estiver configurando uma rede multisite em um site WordPress existente, não se esqueça de:

  * Criar um backup completo do seu site WordPress

  * Desativar todos os plugins no seu site indo para a página dos plugins e selecionando _Desativar_ nas ações em massa e depois clicando em _Aplicar_.

Para ativar o Multisite, primeiro conecte-se ao seu site usando um cliente FTP ou gerenciador de arquivos do cPanel e abra o seu arquivo `wp-config.php` para edição.

Antes da linha `_*Isso é tudo, pare de editar! Feliz blog.*_`, adicione o seguinte trecho de código:

```php
define('WP_ALLOW_MULTISITE', true);
```

Salve e faça o upload do seu arquivo `wp-config.php` de volta para o servidor.

Com o recurso Multisite ativado no seu site, agora é hora de configurar sua rede.

Vá em **Ferramentas » Configuração da Rede** (Tools » Network Setup)

Agora você precisa dizer ao WordPress que tipo de estrutura de domínio você usará para os sites na sua rede: subdomínios ou subdiretórios.

Se você escolher subdomínios, deve alterar suas configurações de DNS para mapeamento de domínio e garantir que a configuração de _**subdomínios curinga (wildcard subdomains)**_ esteja configurada para sua rede Multisite.

Voltando à Configuração da Rede, dê um título para sua rede e certifique-se de que o endereço de e-mail no e-mail de administrador da Rede esteja correto. Clique em _Instalar_ para continuar.

Adicione este código, fornecido pelo WordPress, ao seu _**wp-config.php**_:

```php
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', true);
define('DOMAIN_CURRENT_SITE', 'multisite.local');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
```

E este código, também fornecido pelo WordPress, ao seu arquivo _**.htaccess**_:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# adicionar uma barra final em /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Use um cliente FTP ou um gerenciador de arquivos (se você estiver usando algo como cPanel, por exemplo) para copiar e colar o código nestes dois arquivos.

Finalmente, faça login novamente no seu site WordPress para acessar sua rede multisite.

**É importante testar e garantir que você consiga criar um subsistema no seu ambiente WordPress Multisite antes de instalar o Ultimate Multisite.**

Para criar um subsistema:

  1. Abra os seus sites em wp-admin

  2. Navegue até Sites > Sites (/wp-admin/network/sites.php)

  3. Clique em Adicionar Novo no topo

  4. Preencha todos os campos:

  * Endereço do Site — Nunca use “www”

  * Subdomínio: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdiretório: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Título do Site — Título do site, pode ser alterado mais tarde

  * E-mail do Administrador — Defina como o usuário administrador inicial para o subsistema

![Formulário de adição de novo site no WordPress Multisite](/img/admin/sites-list.png)

Depois de preencher os campos, clique no botão "Adicionar site". Assim que o novo subsistema for criado, acesse-o para garantir que ele está funcionando corretamente.

## Problemas Comuns:

### 1. Eu consigo criar novos sites, mas eles não estão acessíveis.

Se você escolheu subdomínios, também precisa configurar subdomínios curinga (wildcard) para sua rede multisite.

Para fazer isso, vá para o painel de controle da conta de hospedagem do seu site (ex: cPanel/Plesk/Direct Admin dependendo do seu provedor de hospedagem).

Procure uma opção chamada “Domínios” ou “Subdomínios”. Em alguns painéis de controle, ela pode estar rotulada como “Administração de Domínio”.

No campo subdomínio, insira um asterisco (*). Em seguida, ele pedirá para você selecionar o nome do domínio onde deseja adicionar o subdomínio.

A raiz do documento (document root) para o nome de domínio selecionado será detectada automaticamente. Clique no botão _Criar_ ou _Salvar_ para adicionar seu subdomínio curinga (wildcard). A entrada deve ficar com a aparência “*.[mydomain.com](http://mydomain.com)”.
