---
title: O que é o WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# O que é WordPress Multisite? {#what-is-wordpress-multisite}

Dentro do seu núcleo, o WordPress oferece unha característica chamada ‘Multisite’, que remonta a 2010 com o lançamento do WordPress 3.0. Desde então, recebeu várias revisões com o objetivo de introducir novas características e apertar a segurança.

Em essência, um multisite do WordPress pode ser pensado como isto: Uma Universidade mantém unha única instalación do WordPress, pero cada faculta mantém a súa propia web do WordPress.

##

## O que é exactamente o WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Multisite é unha característica do WordPress que permite que múltiples sitios partilten unha única instalación do WordPress. Quando se activa o multisite, o sitio original do WordPress é convertido para soportar o que se refóra como unha **rede de sitios**.

Esta rede comparte o sistema de ficheiros (o que significa que os **plugins e temas tamén son partilhados**), o banco de datos, os ficheiros centrais do WordPress, o wp-config.php, etc.

Isto significa que as actualizacións do WordPress, tema e plugin só hai que realizar unha vez para toda a rede dos teus sitios, ya que comparten os mesmos ficheiros no sistema de ficheiros.

Este feito é unha das principais ventajas do multisite, porque permite que aumentes o número de sitios que gestionas mantendo o número de tarefas que necesitas realizar para manter os sitios dos teus clientes o mesmo.

##

## Subdomínio ou Subdirectorio? {#subdomain-or-subdirectory}

Hay dous modos de operación do WordPress multisite – e hai que escoller uno ao converter a tua instalación normal do WordPress en unha instalación multisite:

**Subdomínio:** ex.: [site.domain.com](http://site.domain.com)

…ou

**Subdirectorio:** ex.: [yourdomain.com/site](http://yourdomain.com/site)

Cada modo ten ventajas e desventaxes que hai que considerar ao tomar esta decisión.

Uma coisa importante notar, no entanto: uma vez que tome a sua decisão, mudar a rede de subdiretório para subdomínio ou vice-versa é muito difícil – especialmente se já tiver um punhado de sites criados.

Antes de tomar essa decisão, aqui estão alguns pontos para ter em mente:

**Modo de Subdiretório** é o modo mais fácil em termos de configuração e manutenção. Isto acontece porque todos os sites são apenas caminhos ligados ao domínio principal (exemplo: [yourdomain.com/subsite](http://yourdomain.com/subsite)). Como resultado, só precisa de **um certificado SSL** para o domínio principal e este cobrirá toda a rede.

Ao mesmo tempo, devido à sua estrutura de URL, o Google e a maioria dos outros motores de busca considerarão todos os subsites da sua rede baseada em subdiretório como um único site gigante. Como resultado, o conteúdo adicionado aos subsites pelos seus clientes pode afetar o desempenho SEO do seu site principal, por exemplo. O nível de impacto é debatível e há um argumento a fazer de que ter tal arranjo pode até ser benéfico para o desempenho SEO.

**Modo de Subdomínio** é um pouco mais complexo de configurar, mas a sua estrutura de URL (exemplo: [subsite.yournetwork.com](http://subsite.yournetwork.com)) é geralmente percebida como "mais profissional".

Un dos dos principais desafíos ao configurar o modo de subdomínios é a cobertura SSL (HTTPS) para toda a rede. Isto deve-se ao facto de os navegadores considerarem os subdomínios entidades isoladas. Como resultado, vai precisar de um certificado SSL diferente para cada subdomínio na sua rede, ou de um tipo especial de certificado chamado **certificado Wildcard SSL**. Nos últimos anos, os provedores de alojamento e os painéis estão a melhorar muito a forma como fornecem certificados SSL e alguns oferecem certificados wildcard com apenas um clique, fechando a lacuna entre os dois modos em termos de complexidade de configuração.

Em contraste com o modo de subdiretório (subdirectory mode), os subsites numa rede baseada em subdomínios são considerados pelos motores de busca como websites separados, o que significa que o conteúdo presente num subsite não interfere de todo no desempenho SEO dos outros subsites.

## O Super Administrador {#the-super-admin}

As instalações do WordPress de site único permitem-lhe adicionar um número ilimitado de utilizadores e dar a esses utilizadores diferentes papéis com permissões distintas.

No WordPress Multisite, desbloqueia-se um novo tipo de utilizador: **o super administrador** – e um novo painel de administração é desbloqueado: **o painel de administração da rede**.

Como o nome indica, o super administrador tem superpoderes sobre a rede, sendo capaz de gerir todos os seus subsites, plugins, temas, tudo!

Assim que converte a sua instalação do WordPress de site único para multisite, o administrador original do site único será automaticamente promovido a super administrador.

Os plugins e temas só podem ser instalados ou desinstalados pelo painel de administração da rede pelos super administradores. Os administradores dos subsites podem então optar por ativar ou desativar esses plugins ou temas, a menos que o super administrador da rede ative um plugin, o que o força a estar ativo para todos os subsites sempre.

_Nota: como podes ver, convidar alguén á túa rede e darles o estatus de super administrador dá a ese usuario control total sobre a túa rede. Como exemplo, outros super administradores poden incluso remover o teu estatus de super administrador, bloqueando efectivamente o acceso ao teu propio panel de administración da rede. Para permitir que os clientes de Ultimate Multisite ten que control granular sobre o que poden facer os nosos super administradores adicionais, temos un add-on chamado Support Agents. Este add-on permite crear outro tipo de usuario – un agente – con só as permiñas que poden necesitar para realizar as súas tarefas na rede._

## O que é compartido entre subsites e o que non {#what-is-shared-among-subsites-and-what-is-not}

Como mencionamos antes, unha das ventajas clave do WordPress multisite é que todas as subsites comparten as mesmas configuracións, os arquivos centrais, os temas, os plugins, os archivos centrais de WordPress, etc.

Non obstante, existen elementos que están ben definidos para cada subsite.

- Por exemplo, cada subsite ten o seu propio *uploads folder*. Como resultado, os uploads feitos por usuarios dunha subsite determinada non poden ser accesidos en outra subsite.

- Cada subsite ten o seu propio panel de administración e pode activar ou desactivar plugins ou temas a menos que esten activos na rede por un super administrador.

- A maioría das tablas de base de datos son creadas para cada subsite, o que significa que os posts, comentarios, páxinas, configuracións e moitas cousas están definidos para cada subsite.

## Gestión de usuarios en WordPress Multisite {#user-management-on-wordpress-multisite}

Un tema delicado no WordPress multisite é a gestión de usuarios. A tabla de usuarios de WordPress é unha das poucas que se comparte entre todas as subsites.

Esta disposición pode generar algun problema dependendo do que planeas construir con a túa rede. O exemplo a continuación axuda a ilustrar o máis urgente.

Imagina o seguinte escenario:

Crea unha rede multisite de WordPress e comes a ofrecer subsaitos por unha taxa mensual a persoas que quepan en ter unha tienda de comercio electrónico.

Consigues o teu primeiro cliente pagador – John. Creas un sitio para John na tua rede, instalas todos os plugins necesarios e creas un usuario para John para que possa tamén gestionar a súa tienda.

Entón chega unha segunda cliente – Alice. Facas a mesma cosa para ela e agora ella tamén ten unha tienda na tua rede.

John e Alice son ambos teus clientes, pero non se conocen. Mais importante, se unha delas visita o sitio web da outra, non hai ninguna forma de saber que esta tienda está alojada na mesma rede de sitios.

Un día, a John lleixa unha nova par de zapatillas e encontra as perfectas na tienda de Alice. Quando intenta finalizar a compra, recibe un mensaje de erro "email ya en uso", o que é bizarro, xa que John está 100% seguro de que esta é a primeira vez que visita o sitio web de Alice.

O que aconteceu aquí é que o usuario de John se comparte por toda a rede, así que cuando intenta crear unha conta para finalizar a compra no sitio de Alice, WordPress detectará que un usuario con o mesmo correo electrónico ya existe e lanzará un erro.

_Nota: Nos dimos cuenta de que isto pode ser moi malo dependendo do teu caso de uso, así que Ultimate Multisite ten unha opción que eluda os chelistes regulares para un usuario existente, permitindo crear múltiples contas utilizando o mesmo correo electrónico. Cada conta está vinculada a un subsaito, así que o risco de colisión se mantén no mínimo. No exemplo anterior, John non recibiría un mensaje de erro e sería capaz de comprar esas zapatillas sen problemas. Esta opción se chama Enable Multiple Accounts (Activar Múltipla Conta) e pode activarse en Ultimate Multisite → Settings → Login & Registration._

Mesmo que a tabela de utilizadores seja partilhada, os administradores dos subsites ou o super administrador podem adicionar e remover utilizadores dos subsites, e eles podem até ter papéis de utilizador diferentes em subsites diferentes.

## Considerações de desempenho {#performance-considerations}

O WordPress multisite é realmente poderoso quando se trata do número de sites que pode suportar. Isto pode ser testado pelo facto de [WordPress.com](https://WordPress.com), Edublogs e Campuspress serem todos serviços baseados em multisite, e cada um hospeda milhares de sites.

Embora teoricamente não haja um número máximo de sites que possa hospedar numa única instalação WordPress multisite, na prática o número de sites que pode gerir satisfatoriamente pode variar muito consoante vários fatores: quão dinâmicos são os sites, quais os plugins disponíveis para os subsites, etc.

Como regra geral, quanto mais simples for a sua rede, melhor. Priorizar sites onde o conteúdo não é muito dinâmico (o que os torna ótimos candidatos a estratégias de caching agressivas) e manter o conjunto de plugins o mais leve possível (quanto menor o número de plugins ativos, melhor) pode aumentar drasticamente o número de subsites que pode hospedar.

A melhor parte é que, como tudo é WordPress aqui, as mesmas ferramentas que já conhece e adora para melhorias de desempenho funcionarão também numa rede multisite.

O principal gargalo para multisite é o banco de dados, mas se tudo o resto estiver configurado corretamente, pode demorar alguns milhares de sites antes de precisar de se preocupar com isso. Mesmo assim, existem soluções que podem ser adicionadas progressivamente nesse ponto (como soluções de *database sharding*, por exemplo).
