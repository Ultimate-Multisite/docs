---
title: O que é WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# O que é WordPress Multisite?

Dentro de seu núcleo, o WordPress oferece um recurso chamado ‘Multisite’ que remonta às suas origens em 2010, no lançamento do WordPress 3.0. Desde então, ele recebeu várias revisões destinadas a introduzir novos recursos e reforçar a segurança.

Em essência, um WordPress multisite pode ser pensado assim: uma universidade mantém uma única instalação do WordPress, mas cada faculdade mantém seu próprio site WordPress.

## 

## O que exatamente é WordPress Multisite?

Multisite é um recurso do WordPress que permite que vários sites compartilhem uma única instalação do WordPress. Quando o multisite é ativado, o site WordPress original é convertido para suportar o que geralmente é chamado de **rede de sites**.

Essa rede compartilha o sistema de arquivos (o que significa que **plugins e temas também são compartilhados**), o banco de dados, os arquivos principais do WordPress, o wp-config.php, etc.

Isso significa que atualizações do WordPress, tema e plugin precisam ser realizadas apenas uma vez para todos os sites da sua rede, pois eles compartilham os mesmos arquivos no sistema de arquivos.

Esse fato é uma das principais vantagens do multisite, pois permite que você aumente o número de sites que gerencia enquanto mantém o número de tarefas que precisa executar para manter os sites dos seus clientes o mesmo.

## 

## Subdomínio ou Subdiretório?

Existem dois modos de executar WordPress multisite – e você precisa escolher um ao converter sua instalação regular do WordPress em uma instalação multisite:

**Subdomínio:** ex.: [site.domain.com](http://site.domain.com)

…ou

**Subdiretório:** ex.: [yourdomain.com/site](http://yourdomain.com/site)

Cada modo tem vantagens e desvantagens que você precisa levar em consideração ao tomar essa decisão.

Uma coisa importante a observar, porém: uma vez que você tome sua decisão, mudar sua rede de subdiretório para subdomínio ou vice-versa é realmente difícil – especialmente se você já tem vários sites criados.

Antes de tomar essa decisão, aqui estão alguns pontos a serem considerados:

**Modo Subdiretório** é o modo mais fácil em termos de configuração e manutenção. Isso acontece porque todos os sites são apenas caminhos anexados ao domínio principal (por exemplo, [yourdomain.com/subsite](http://yourdomain.com/subsite)). Como resultado, você só precisa de **um certificado SSL** para o domínio principal e isso cobrirá toda a rede.

Ao mesmo tempo, devido à sua estrutura de URL, o Google e a maioria dos outros mecanismos de busca considerarão todos os subsites na sua rede baseada em subdiretório como um único site gigante. Como resultado, o conteúdo adicionado aos subsites pelos seus clientes finais pode afetar o desempenho de SEO do seu site de destino, por exemplo. O nível de impacto é debatível e há um argumento de que ter tal arranjo pode até ser benéfico para o desempenho de SEO.

**Modo Subdomínio** é um pouco mais complexo de configurar, mas sua estrutura de URL (por exemplo, [subsite.yournetwork.com](http://subsite.yournetwork.com)) é geralmente percebida como “mais profissional”.

Um dos principais desafios ao configurar o modo subdomínio é a cobertura SSL (HTTPS) para toda a rede. Isso se resume ao fato de que os navegadores consideram subdomínios como entidades isoladas. Como resultado, você precisará de um certificado SSL diferente para cada subdomínio na sua rede, ou de um tipo especial de certificado chamado **certificado SSL Wildcard**. Nos últimos anos, provedores de hospedagem e painéis têm aprimorado seu jogo em termos de provisionamento SSL e alguns oferecem certificados wildcard com um clique, reduzindo a lacuna entre os dois modos em termos de complexidade de configuração.

Em contraste com o modo subdiretório, os subsites em uma rede baseada em subdomínio são considerados pelos mecanismos de busca como sites separados, o que significa que o conteúdo presente em um subsite não interfere no desempenho de SEO de outros subsites de forma alguma.

## O Super Admin

Instalações WordPress de site único permitem que você adicione um número ilimitado de usuários e dê a esses usuários diferentes funções de usuário com permissões distintas.

No WordPress Multisite, um novo tipo de usuário é desbloqueado: **o super admin** – e um novo painel de administração é desbloqueado: **o painel de administração da rede**.

Como o nome indica, o super admin tem superpoderes sobre a rede, sendo capaz de gerenciar todos os seus subsites, plugins, temas, tudo!

Quando você converte sua instalação WordPress de site único em multisite, o administrador original do site único será automaticamente promovido a super admin.

Plugins e temas só podem ser instalados ou desinstalados do painel de administração da rede por super admins. Os administradores de subsite podem então escolher ativar ou desativar esses plugins ou temas, a menos que o super admin da rede ative um plugin, o que força que ele esteja ativo para todos os subsites o tempo todo.

_Note: como você pode ver, convidar alguém para sua rede e conceder a ele o status de super admin dá a esse usuário controle total sobre sua rede. Por exemplo, outros super admins podem até remover seu status de super admin, bloqueando efetivamente você do seu próprio painel de administração da rede. Para permitir que os clientes do Ultimate Multisite tenham controle granular sobre o que os super admins adicionais podem fazer, temos um complemento chamado Support Agents. Este complemento permite que você crie mais um tipo de usuário – um agente – com apenas as permissões que ele pode precisar para executar suas tarefas na rede._

## O que é compartilhado entre subsites e o que não é

Como mencionamos antes, uma das principais vantagens do WordPress multisite é que todos os subsites compartilham as mesmas configurações, arquivos principais, temas, plugins, arquivos principais do WordPress, etc.

No entanto, existem elementos que são bem limitados por subsite.

- Por exemplo, cada subsite tem sua própria pasta de uploads. Como resultado, uploads feitos pelos usuários de um subsite específico não podem ser acessados em outro subsite.
- Cada subsite tem seu próprio painel de administração dedicado e pode ativar ou desativar plugins ou temas, a menos que tenham sido ativados na rede por um super admin.
- A maioria das tabelas do banco de dados é criada para cada subsite, significando que posts, comentários, páginas, configurações e mais são limitados a cada subsite.

## Gerenciamento de usuários no WordPress Multisite

Um assunto delicado no WordPress multisite é o gerenciamento de usuários. A tabela de usuários do WordPress é uma das poucas que é compartilhada entre todos os subsites.

Essa configuração pode gerar alguns problemas dependendo do que você planeja construir com sua rede. O exemplo abaixo ajuda a ilustrar o mais urgente.

Imagine o seguinte cenário:

Você cria uma rede WordPress multisite e começa a oferecer subsites por uma taxa mensal para pessoas que desejam ter uma loja de comércio eletrônico.

Você recebe seu primeiro cliente pagante – John. Você cria um site para John em sua rede, instala todos os plugins necessários e, em seguida, cria um usuário para John para que ele possa gerenciar sua loja.

Em seguida, chega um segundo cliente – Alice. Você faz a mesma coisa para ela e ela também tem uma loja em sua rede.

John e Alice são ambos seus clientes, mas eles não se conhecem. Mais importante, se um deles visitar o site da loja do outro, não há como saber que essa loja está sendo hospedada na mesma rede de sites.

Um dia, John precisa comprar um novo par de sapatos e encontra os perfeitos na loja de Alice. Quando ele tenta finalizar a compra, recebe uma mensagem de erro “email já em uso”, o que é estranho, pois John tem 100% de certeza de que é a primeira vez que visita o site de Alice.

O que aconteceu aqui é que o usuário de John é compartilhado em toda a rede, então quando ele tenta criar uma conta para finalizar a compra no site de Alice, o WordPress detecta que já existe um usuário com o mesmo endereço de e-mail e gera um erro.

_Note: Nós percebemos o quão ruim isso pode ser dependendo do seu caso de uso, então o Ultimate Multisite tem uma opção que ignora as verificações regulares para um usuário existente, permitindo que múltiplas contas sejam criadas usando o mesmo endereço de e-mail. Cada conta está vinculada a um subsite, então o risco de colisão é mantido ao mínimo. No exemplo acima, John não receberia uma mensagem de erro e poderia comprar esses sapatos sem problemas. Esta opção chama-se Habilitar Múltiplas Contas, e pode ser ativada em Ultimate Multisite → Settings → Login & Registration._

Mesmo que a tabela de usuários seja compartilhada, os usuários podem ser adicionados e removidos de subsites pelos administradores de subsite ou pelo super admin, e eles podem até ter diferentes funções de usuário em diferentes subsites.

## Considerações de desempenho

O WordPress multisite é realmente poderoso quando se trata do número de sites que pode suportar. Isso pode ser testado pelo fato de que [WordPress.com](https://WordPress.com), Edublogs e Campuspress são todos serviços baseados em multisite e cada um hospeda milhares de sites.

Embora em teoria não haja um número máximo de sites que você pode hospedar em uma única instalação WordPress multisite, na prática o número de sites que você pode executar satisfatoriamente pode variar amplamente dependendo de vários fatores: quão dinâmicos são os sites, quais plugins estão disponíveis para os subsites, etc.

Como regra geral, quanto mais simples for a sua rede, melhor. Favorecer sites onde o conteúdo não é realmente dinâmico (o que os torna ótimos candidatos para estratégias agressivas de cache) e manter a pilha de plugins o mais leve possível (quanto menor o número de plugins ativos, melhor) pode aumentar drasticamente o número de subsites que você pode hospedar.

A melhor parte é que, como tudo é WordPress aqui, as mesmas ferramentas que você já conhece e ama para melhorias de desempenho também funcionarão para uma rede multisite.

O principal gargalo para multisite é o banco de dados, mas se tudo o mais estiver configurado corretamente, pode suportar alguns milhares de sites antes de você precisar se preocupar com isso. Mesmo assim, existem soluções que podem ser adicionadas progressivamente nesse ponto (como soluções de sharding de banco de dados, por exemplo).
