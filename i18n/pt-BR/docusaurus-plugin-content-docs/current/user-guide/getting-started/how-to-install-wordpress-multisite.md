---
title: Como Instalar o WordPress Multisite
sidebar_position: 2
_i18n_hash: ce5929a52ea69f8a4b769f6eab46445c
---
# Como Instalar o WordPress Multisite?

O WordPress Multisite permite que você tenha uma rede de sites em uma única instalação. Este é um recurso integrado, mas não está ativo por padrão.

Como o Ultimate Multisite é um plugin exclusivo para rede, neste tutorial, você vai aprender como instalar e configurar o WordPress Multisite. Este texto é baseado em [Como Instalar e Configurar a Rede WordPress Multisite](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), do WPBeginner.

**Coisas a observar antes de criar sua rede multisite:**

* Obtenha um bom hospedagem WordPress! Sites em uma rede compartilham os mesmos recursos do servidor.
* Caso você tenha apenas alguns sites com baixo tráfego, hospedagem compartilhada provavelmente funcionará para você.
* A maioria dos **provedores de hospedagem WordPress gerenciada** oferece Multisite pronto (eles instalam o WordPress com Multisite já ativado e configurado para você). Isso acontece com WP Engine, Closte, Cloudways, etc. Se você não tem certeza se isso acontece com seu provedor de hospedagem, entre em contato com o suporte antes de continuar com este tutorial.
* Também é bom estar familiarizado com a instalação do WordPress e a edição de arquivos usando FTP.

_**IMPORTANTE**_ **:** Se você está configurando uma rede multisite em um site WordPress existente, não se esqueça de:

* Faça um backup completo do seu site WordPress
* Desative todos os plugins do seu site indo para a página de plugins e selecionando _Deactivate_ nas ações em massa e depois clicando em _Apply_

[![](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)

Para habilitar o Multisite, primeiro conecte-se ao seu site usando um cliente FTP ou o gerenciador de arquivos do cPanel, e abra o arquivo wp-config.php para edição.

Antes da linha _*That’s all, stop editing! Happy blogging.*_, adicione o seguinte trecho de código:

```php
define('WP_ALLOW_MULTISITE', true);
```

Salve e faça o upload do seu arquivo wp-config.php de volta ao servidor.

Com o recurso Multisite habilitado no seu site, agora é hora de configurar sua rede.

Vá para **Ferramentas » Configuração da Rede**

[![](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)

Agora você precisa informar ao WordPress qual estrutura de domínio usará para os sites na sua rede: subdomínios ou subdiretórios.

Se você escolher subdomínios, deve alterar suas configurações de DNS para mapeamento de domínio e garantir a configuração de _**subdomínios curinga**_ para sua rede multisite.

Volte para a Configuração da Rede, dê um título para sua rede e certifique-se de que o endereço de e-mail no e-mail do administrador da rede esteja correto. Clique em _Install_ para continuar.

[![](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)

Adicione este código, fornecido pelo WordPress, ao seu _**wp-config.php**_ :

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

E este código, também fornecido pelo WordPress, ao seu arquivo _**.htaccess**_ :

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(wp-(content|admin|includes)._) $1 [L]
RewriteRule ^(._.php)$ $1 [L]
RewriteRule . index.php [L]
```

Use um cliente FTP ou um gerenciador de arquivos (se você estiver usando algo como cPanel, por exemplo) para copiar e colar o código nesses dois arquivos.

Por fim, faça login novamente no seu site WordPress para acessar sua rede multisite.

**É importante testar e garantir que você consiga criar um subsítio na sua instalação WordPress Multisite antes de instalar o Ultimate Multisite.**

Para criar um subsítio:

1. Abra o wp-admin do seu site
2. Navegue até Meus Sites > Sites (/wp-admin/network/sites.php)
3. Clique em Adicionar Novo no topo
4. Preencha todos os campos:

* Endereço do Site — Nunca use “www”
* Subdomínio: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
* Subdiretório: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
* Título do Site — Título do site, pode ser alterado depois
* E-mail do Administrador — Defina como o usuário administrador inicial para o subsítio

![image](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hrA3XtntYQ.png)

Depois de preencher os campos, clique no botão "Add site". Assim que o novo subsítio for criado, acesse-o para garantir que o subsítio esteja funcional.

## Problemas Comuns:

### 1\. Eu consigo criar novos sites, mas eles não são acessíveis.

Se você escolheu subdomínios, também precisa configurar subdomínios curinga para sua rede multisite.

Para fazer isso, vá para o painel de controle da conta de hospedagem do seu site (por exemplo, cPanel/Plesk/Direct Admin, dependendo do seu provedor de hospedagem).

Encontre uma opção para “Domínios” ou “Subdomínios”. Em alguns painéis de controle, ela é rotulada como “Administração de Domínios”.

No campo de subdomínio, digite um asterisco (*). Em seguida, ele deve pedir que você selecione um nome de domínio onde deseja que o subdomínio seja adicionada.

A raiz do documento para o nome de domínio selecionado será detectada automaticamente. Clique no botão _Create_ ou _Save_ para adicionar seu subdomínio curinga. A entrada deve ficar assim “*.[mydomain.com](http://mydomain.com)”
