---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 16b22d6284bfcd5dc740566431abfbf1
---
# Ultimate Multisite 101

Ultimate Multisite é um plugin WordPress Multisite que permite oferecer WaaS ou Websites como Serviço aos clientes. Antes de mergulharmos e aprendermos como o Ultimate Multisite pode ajudar seu negócio e clientes, há alguns conhecimentos fundamentais que precisamos adquirir.

## O WordPress Multisite

A maioria de nós está familiarizada com a instalação padrão do WordPress. Você a cria através do painel de controle do seu provedor de hospedagem ou, para os corajosos, configura um novo servidor web e banco de dados, baixa os arquivos principais e inicia o processo de instalação.

Isso funciona para milhões de sites WordPress em todo o mundo, mas, da perspectiva de uma agência ou provedor de hospedagem, vamos discutir volumes por um minuto.

Embora seja simples criar um site WordPress ou até mesmo cem via um painel de controle automatizado, os problemas começam a aparecer quando se trata da gestão desses sites. Se não forem gerenciados, você se torna um alvo principal para malware. Gerenciar requer esforço e recursos, e embora existam ferramentas externas e plugins disponíveis para ajudar a otimizar a gestão e administração de sites WordPress, o fato de os clientes manterem acesso administrativo significa que esses esforços podem ser facilmente contornados.

No seu núcleo, o WordPress oferece um recurso simplesmente chamado ‘Multisite’, que remonta a 2010, no lançamento do WordPress 3.0. Desde então, recebeu várias revisões voltadas para introduzir novos recursos e reforçar a segurança.

Em essência, um WordPress multisite pode ser pensado assim: uma universidade mantém uma única instalação do WordPress, mas cada faculdade mantém seu próprio site WordPress.

Para analisar essa afirmação, vamos observar algumas das terminologias básicas presentes não apenas na documentação do Ultimate Multisite, mas também na comunidade WordPress.

### A Rede

Em termos de WordPress, uma rede multisite é onde vários subsites podem ser gerenciados a partir de um único painel. Embora a criação de uma rede multisite varie entre provedores de hospedagem, o resultado final costuma ser algumas diretivas adicionais no arquivo wp-config.php para informar ao WordPress que ele está operando nesse modo específico.

Existem várias diferenças distintas entre uma rede multisite e uma instalação WordPress autônoma que discutiremos brevemente.

#### Subdomínio vs. Subdiretório

Uma das decisões mais imediatas que você precisará tomar é se a instalação multisite operará com _subdiretórios_ ou _subdomínios_. O Ultimate Multisite funciona igualmente bem com ambas as opções, mas existem diferenças arquitetônicas entre as duas configurações.

Na configuração de _subdiretório_, os sites da rede herdam um caminho baseado no nome de domínio principal. Por exemplo, um site da rede rotulado como ‘site1’ terá sua URL completa como https://domain.com/site1. Na configuração de _subdomínio_, o site da rede terá seu próprio _subdomínio_ derivado do nome de domínio principal. Assim, um site rotulado como ‘site1’ terá sua URL completa como https://site1.domain.com/.

Embora ambas as opções sejam escolhas perfeitamente válidas, o uso de _subdomínios_ oferece uma série de vantagens, mas também requer mais reflexão e planejamento em sua arquitetura.

Em termos de DNS, o uso de _subdiretórios_ apresenta um desafio relativamente simples. Como os sites da rede são simplesmente filhos do caminho principal, apenas uma entrada de nome de domínio precisa existir para o domínio principal. Para _subdomínios_, o desafio é um pouco mais complexo, exigindo uma entrada CNAME separada para cada site da rede ou uma entrada curinga (*) nos registros DNS.

Outra área de consideração é a do SSL e a emissão e uso de certificados SSL. Na configuração de _subdiretório_, um único certificado de domínio pode ser usado, pois os sites da rede são simplesmente caminhos do nome de domínio principal. Assim, um certificado para domain.com fornecerá adequadamente SSL para https://domain.com/site1, https://domain.com/site2 e assim por diante.

Na configuração de _subdomínio_, o uso de um certificado SSL curinga é uma das opções mais comuns. Esse tipo de certificado SSL fornece criptografia para um domínio e seus _subdomínios_. Portanto, um certificado SSL curinga fornecerá criptografia para https://site1.domain.com, https://site2.domain.com e https://domain.com em si.

Embora outras opções existam, elas costumam ser limitadas em escopo e aplicação e exigem configuração adicional e consideração quanto à adequação.

#### Plugins e Temas

O que o WordPress dá, ele também retira, pelo menos da perspectiva do cliente. Em uma instalação WordPress autônoma, se o administrador do site instalar um plugin ruim ou não mantiver sua instalação atualizada, a única vítima e vítima desse ato são eles mesmos. No entanto, um administrador de site que instala um plugin ruim em uma instalação multisite cria uma vítima de cada site instalado na rede.

Por essa razão, quando configurado como multisite, o WordPress remove a capacidade dos administradores de site de instalar plugins e temas e, em vez disso, transfere essa capacidade para um administrador de rede recém-criado ou papel de ‘super admin’. Esse papel privilegiado pode então decidir se permite que os administradores dos sites da rede vejam ou acessem o menu de plugins em seu painel e, se sim, se tais permissões se estendem a _ativar_ ou _desativar_ plugins.

Nesse sentido, o administrador da rede é responsável por instalar plugins e temas na rede e delega permissões para usar esses plugins e temas nos sites da rede. Os administradores de site não podem instalar plugins e temas nem acessar plugins e temas que não foram atribuídos ao seu site.

#### Usuários e Administradores

Em um WordPress Multisite, todos os sites da rede compartilham o mesmo banco de dados e, portanto, compartilham os mesmos usuários, funções e capacidades. A maneira mais adequada de pensar nisso é que todos os usuários são membros da rede e não de um site específico.

Dada essa compreensão, pode ser indesejável permitir a criação de usuários e, por esse motivo, o WordPress Multisite remove essa capacidade dos administradores de site e a transfere para o administrador da rede. Em seguida, o administrador da rede pode delegar os privilégios necessários a um administrador de site para permitir que ele crie contas de usuário para seu próprio site.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-zg50L2qdJEphzPcgwlo_pqNiYDknE6wiJo4zQUlhQwBCtDeAef2_aTzBBMx76YvTweROsbUH4uvosFRitBj8kgatWzCi_C822oJPWr5bKpwLuoBvTIZ5M9O1nFxOepiav1FkRHNv)

Reiterando a afirmação acima, embora as contas de usuário pareçam estar relacionadas ao site, na verdade são alocadas à rede e, portanto, devem ser únicas em toda a rede. Pode haver situações em que nomes de usuário não estejam disponíveis para registro devido a essa razão.

Embora não seja um conceito estranho em sistemas corporativos, essa fonte única de registro e autenticação de usuários costuma ser um conceito difícil de entender para pessoas familiarizadas com instalações WordPress autônomas, onde a administração de usuários é um pouco mais simples.

#### Mídia

Quando os sites da rede compartilham um único banco de dados em um WordPress Multisite, eles mantêm caminhos separados no sistema de arquivos para arquivos de mídia.

A localização padrão do WordPress (wp-content/uploads) permanece; no entanto, seu caminho é alterado para refletir o ID único do site da rede. Consequentemente, os arquivos de mídia de um site da rede aparecem como wp-contents/uploads/site/[id].

#### Permalinks

Já mencionamos anteriormente que existem vantagens distintas de _subdomínio_ sobre a configuração de _subdiretório_, e aqui está: caminhos.

Em uma configuração de _subdiretório_, o site principal (o primeiro site criado quando a rede é estabelecida) e os subsites da rede devem compartilhar o mesmo caminho a partir do nome de domínio. Isso pode gerar um grande número de conflitos.

Para posts, um caminho obrigatório /blog/ é adicionado ao site principal para evitar colisões com os sites da rede. Isso significa que permalinks bonitos, como ‘Post name’, serão apresentados como domain.name/blog/post-name/

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-QUlDfXAzHqImjngoE7UsJHa6DOl6XbQWV17LYthxpxDBy-k453GE5TlJVBA6-sOootX3Fsi34sHv5nSgi1kZmlUD1iMneztCc_HQvZmXpbZEdX2a1il8GJQqxUT8aVPgW5ikR5uG)

Em uma configuração de _subdomínio_, essa ação não é necessária porque cada site da rede se beneficia da separação completa de domínio e, portanto, não precisa depender de um único caminho. Eles mantêm seus próprios caminhos distintos com base em seu _subdomínio_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-2wgqTosYo3GAa3jwaBlPADbFiMbZ-kKUTuQtk0gv5pvkj81UfxnxSyA8R-jD1EZmRMBLjJFoWZJOirTSe8K9OQKeoSYeDj602XBHRrZeRFABE1sw-JERzJzEzMd7FmvrM9G1L9MP)

#### Páginas Estáticas

Na configuração de _subdiretório_, o potencial de conflitos de nomenclatura se estende às páginas estáticas, pois o site principal e os sites da rede compartilham o mesmo caminho.

Para evitar isso, o WordPress fornece um meio de bloquear certos nomes de site para que não entrem em conflito com os nomes do primeiro site. Normalmente, o administrador da rede inseriria os caminhos raiz das páginas do site principal.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-sqwI-k_-3krK0_ortenskDcdGrKpgOD6itvwDc2KEuGk1gZO-rqo_OF9yTqclSmQdrOBwsGPiiOc1oF6c0GMyNELJ-7gbyQNE81juSM3IvgTdWqhZ_UEVt06xJRu8Z8oyAKfLLz-)

Na configuração de _subdomínio_, a possibilidade de conflitos de nomenclatura é mitigada pelo _subdomínio_, pois ele é único para o site da rede e não está relacionado de forma alguma ao site principal.

### Registro

Nas configurações da rede do WordPress Multisite, várias novas opções de registro de usuário estão disponíveis, permitindo que usuários novos e existentes criem sites.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-nbH9Ka0YhI7nvo3nnKvOr_FoI_FpdAy5hz-f199CW-PV1D-tNKGawhIK_YwlUvM19TjLnhVb6Ro6J0ZpI6s2TRUaHgyGPc4qQI06eQ2O2jeMb_SaktkKwPUw3BSyaNegZYSjXMVX)

Ao contrário das instalações WordPress autônomas, os sites da rede não mantêm as opções familiares para permitir registros de usuários ou atribuir esses registros a funções.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-7I21vdReE43e0Utj_KWdnuWA08ZXz7PX33rjSEjwf6T8NDiCBYbeP9GH0J36ekFNkmsXXLBYAWjQJo4vo_kWqL6hXJuFzd9RyA52zy13lT-mMsaK-JdVivUkd5SJF3UF13r2hj28)

Quando as contas de usuário são criadas, essas contas são geradas no nível da rede. Assim, em vez de pertencer a um site específico, elas pertencem à rede. Isso traz algumas vantagens e desvantagens distintas.

Por exemplo, suponha que seu WordPress Multisite fosse um negócio de notícias e informações. Você estabeleceria o multisite e, em seguida, criaria sites da rede para finanças, tecnologia, entretenimento e outras áreas de interesse, mantendo o controle geral de plugins e temas. Cada site da rede teria, por sua vez, um nível muito maior de controle sobre a aparência e a experiência do usuário de seu site da rede do que tipos de postagem personalizados ou categorias de postagem regulares.

Nesse sentido, quando um usuário faz login, ele entra na rede e, em última análise, também entra em cada site da rede para proporcionar uma experiência contínua. Se o seu novo site fosse baseado em assinatura, essa seria a solução e resultado ideais.

Se, no entanto, a natureza e o propósito pretendidos do multisite fossem oferecer sites da rede distintos que não têm relação entre si, quase sempre é o caso de plugins externos ou adicionais serem necessários para manipular as funções de usuário.

### Domínio e SSL

Vamos falar sobre uma instalação WordPress Multisite que quase escapa da nossa atenção - Wordpress.com. Este é, de longe, o exemplo mais extenso de um WordPress multisite e demonstra suas extensas capacidades de ser personalizado e moldado para cumprir um propósito.

Hoje em dia, na internet moderna, o uso de SSL é quase obrigatório, e os administradores de rede de WordPress multisites são rapidamente confrontados com esses desafios.

Na configuração de _subdomínio_, os sites são criados com base no nome de domínio raiz. Assim, um site rotulado como ‘site1’ seria criado como ‘site1.domain.com’. Usando um certificado SSL curinga, um administrador de rede pode resolver com sucesso esse desafio e fornecer recursos de criptografia SSL para a rede.

O WordPress Multisite contém uma função de mapeamento de domínio que permite que sites da rede sejam associados a nomes de domínio personalizados ou a nomes de domínio diferentes do domínio raiz da rede.

Para os administradores de rede, isso apresenta uma camada adicional de complexidade tanto na configuração de nomes de domínio quanto na emissão e manutenção de certificados SSL.

Nesse sentido, embora o WordPress Multisite forneça um meio de permitir que [www.anotherdomain.com](http://www.anotherdomain.com) seja mapeado para ‘site1’, o administrador da rede fica com o desafio de gerenciar externamente as entradas DNS e a implementação de certificados SSL.

## Ultimate Multisite

Com as diferenças entre uma instalação WordPress autônoma e uma instalação Multisite compreendidas, vamos analisar como o Ultimate Multisite é o arsenal definitivo para fornecer Websites como Serviço.

### Introdução

Ultimate Multisite é a sua faca suíça quando se trata de criar um Website como Serviço (WaaS). Pense no Wix.com, Squarespace, WordPress.com e depois pense em possuir seu próprio serviço.

Por trás das cenas, o Ultimate Multisite utiliza o WordPress Multisite, mas faz isso de uma forma que não apenas resolve a miríade de desafios que os administradores de rede enfrentam com instalações multisite, mas também aprimora as capacidades, permitindo que uma ampla variedade de casos de uso sejam suportados.

Nas seções a seguir, analisaremos alguns casos de uso comuns e as considerações necessárias para suportá-los.

### Casos de Uso

#### Caso 1: Uma Agência

Normalmente, as habilidades centrais de uma agência residem no design de sites, com aspectos como hospedagem ou marketing listados como serviços adicionais.

Para agências, o Ultimate Multisite apresenta uma proposta de valor incrível em suas habilidades de hospedar e gerenciar vários sites em uma única plataforma. Ainda mais para agências que padronizam seus designs em temas específicos, como GeneratePress, Astra, OceanWP ou outros, podem aproveitar as habilidades do Ultimate Multisite para ativar automaticamente esses temas para cada novo site.

Da mesma forma, com a abundância de ofertas de preços para agências em plugins comuns e populares, o uso do Ultimate Multisite permite que as agências aproveitem os investimentos existentes, fornecendo uma plataforma comum a partir da qual os plugins podem ser instalados, mantidos e utilizados.

Provavelmente, o uso de uma configuração seria desejado e, felizmente, o Ultimate Multisite torna incrivelmente fácil facilitar o mapeamento de domínio e certificados SSL com suas integrações para vários provedores de hospedagem populares, bem como serviços como Cloudflare e cPanel.

Assim, ao aproveitar um desses provedores ou ao colocar o Ultimate Multisite atrás do Cloudflare, aspectos como a gestão de domínios e certificados SSL tornam-se algo trivial.

Agências que preferem manter um controle rigoroso sobre a criação de sites apreciarão a facilidade com que podem criar sites e associar sites a clientes e planos por meio da interface otimizada do Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-4cYCjjZwK0DZhrlY2NLHTL4waL99PANVZmSJ4AN5MXLTxb1pVF0aAtC4dWJP2hW1pD_v6hL8X7G80LRk-NuazRQDkIPCuhuRJgIMjA4DxuQzVjWEz1Ag2RKnkqwkvmSfcgy2PLrS)

Controle rigoroso sobre plugins e temas é mantido por produto por meio das interfaces intuitivas do Ultimate Multisite, permitindo que plugins e temas sejam disponibilizados ou ocultados, bem como seu estado de ativação quando instanciados para um novo site.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-VVpPcr8bvKd2qf9zPB_1SBiVpEYdtmskG_iO0tNCJOm2RXbU6kSC1czyLV1CaU5Mw2fWd-k2r1bnQV_yA4zOL6qnYKLWohnI-EDYhXcpxD_4n-rabGlxjQO8iyjtOgXhuDL5r2y7)

Temas oferecem funcionalidade semelhante, permitindo que temas específicos sejam ativados ou ocultados na criação do site.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-3CEl6U5CPdKatlXAcG5B9jJux_iWOYpUTI4crCgW15EFkhh4pODF7hYlMyzc3na8QAefadz1kcnY_T7Yn6ZyxbBMJdfRfa16IFZma_-u7NHTtMbLZwJ9f7JbqG1QTh0y1l9WWj5z)

As agências encontrarão tranquilidade com o Ultimate Multisite, permitindo que façam o que fazem melhor: projetar sites web excepcionais.

#### Caso 2: Fornecedor de Nicho

Há um velho ditado que diz: “faça uma coisa e faça bem”. Para muitos especialistas, isso significa criar um produto ou serviço em torno de uma única ideia central.

Talvez você seja um golfista ávido promovendo sites para clubes ou possa ser um gamer de esports ávido fornecendo sites para clãs. Um indivíduo promovendo um serviço de reserva para restaurantes, talvez?

Por muitas razões, você gostaria de oferecer serviços baseados em um framework e plataforma comuns. Pode ser que você tenha projetado ou investido em plugins sob medida para fornecer a funcionalidade necessária ou pode ser que as melhores práticas da indústria exijam alguma forma de abordagem padronizada de design.

Uma das características inovadoras do Ultimate Multisite é o uso de sites modelo. Um site modelo é aquele em que o tema foi instalado e ativado, os plugins necessários instalados e ativados e posts ou páginas de exemplo criados. Quando um cliente cria um novo site baseado no modelo, o conteúdo e as configurações do modelo são copiados para o site recém-criado.

Para um provedor de sites e serviços de nicho, isso oferece uma vantagem inigualável na capacidade de criar instantaneamente um site pronto para uso com plugins personalizados e design. O cliente precisa apenas fornecer a entrada mínima para concluir o serviço.

Dependendo dos requisitos, tanto as configurações de _subdiretório_ quanto de _subdomínio_ podem ser adequadas, caso em que as escolhas arquitetônicas seriam entre um certificado SSL simples para _subdiretórios_ ou um certificado SSL curinga para _subdomínios_.

#### Caso 3: Hospedagem Web WordPress

Existem inúmeras maneiras de hospedar sites WordPress, mas raramente é tão simples quanto fornecer espaço web a um cliente com uma versão pré-instalada do WordPress. Isso ocorre porque várias decisões e considerações precisam se unir para oferecer um serviço significativo.

O Ultimate Multisite se destaca nessa área, fornecendo uma solução turnkey abrangente para a hospedagem de sites WordPress. A solução inclui os mecanismos principais para oferecer serviços de assinatura, coleta de pagamentos, formulários de checkout, vouchers de desconto e comunicações com clientes.

Grande parte do trabalho integral necessário para instalar, configurar e manter corretamente um WordPress Multisite é facilitado pelo Ultimate Multisite na medida em que os administradores de rede precisam considerar apenas aspectos relacionados ao seu serviço ou nicho, como níveis de produto, preços e ofertas de serviço.

Para desenvolvedores que desejam integrar com o Ultimate Multisite, a solução também oferece uma API RESTful abrangente e Webhooks para notificação de eventos.

Sem depender de uma miríade de plugins e licenças externas, o Ultimate Multisite oferece uma solução rica em recursos e comparável à do Wix, Squarespace, WordPress.com e outros.

### Considerações de Arquitetura

Embora não seja um guia abrangente, os itens a seguir devem servir como orientação para a seleção correta de tecnologias para suportar uma instalação do Ultimate Multisite.

#### Hospedagem Compartilhada vs. Dedicada

Infelizmente, nem todos os provedores de hospedagem são iguais e alguns praticam densidades de servidor extremas. Provedores de baixo custo normalmente geram receita maximizando a densidade do servidor. Assim, sua instalação do Ultimate Multisite pode ser apenas um dos vários centenas de sites no mesmo servidor.

Sem salvaguardas adequadas implementadas pelo provedor, sites em um servidor compartilhado experimentam o problema do “vizinho barulhento”. Ou seja, um site no mesmo servidor consome tantos recursos que outros sites precisam competir pelos recursos restantes. Frequentemente, isso se manifesta como sites lentos ou que não respondem em tempo hábil.

Como provedor de hospedagem web, os efeitos do fluxo significarão que seus clientes experimentem velocidades baixas, baixo rankeamento de página e altas taxas de rejeição, resultando frequentemente em churn de clientes à medida que buscam serviços em outros lugares.

Em resumo, barato não significa bom.

O Ultimate Multisite é conhecido por funcionar com vários provedores de hospedagem de qualidade e se integra bem ao seu ambiente para fornecer funções como mapeamento de domínio e SSL automático. Esses provedores valorizam o desempenho e oferecem um serviço de nível superior ao da hospedagem compartilhada.

Para uma lista de provedores compatíveis e instruções completas de configuração para cada um, consulte a documentação de Provedores Compatíveis.

#### Considerações de Desempenho

O Ultimate Multisite não é uma aplicação lenta, pelo contrário, é notavelmente rápido. No entanto, ele só funciona tão bem quanto a aplicação e infraestrutura subjacentes e pode aproveitar apenas o que tem acesso.

Considere isto: Você é o administrador da rede de uma instalação do Ultimate Multisite com 100 sites. Alguns desses sites estão indo bem e atraem um número de visitantes do site a cada dia.

Esse cenário seria diferente em uma escala menor, digamos de um a cinco sites, mas em pouco tempo surgiriam problemas de escala.

Deixado sem supervisão, o único site do Ultimate Multisite seria responsável por atender às solicitações de todos os visitantes dos sites. Essas solicitações poderiam ser para páginas PHP dinâmicas ou recursos estáticos, como folhas de estilo, javascript ou arquivos de mídia. Seja um ou cem sites, essas tarefas se tornam repetitivas, monótonas e desperdiçadas. Não é necessário usar poder de CPU e memória para processar um arquivo PHP quando a saída é a mesma informação estática para cada solicitação.

Da mesma forma, uma solicitação de uma página PHP ou HTML gera, por sua vez, múltiplas solicitações subsequentes para scripts, folhas de estilo e arquivos de imagem. Essas solicitações são direcionadas diretamente ao seu servidor Ultimate Multisite.

É possível resolver facilmente esse problema atualizando o servidor, mas isso não corrige um problema secundário: latências geográficas. Apenas múltiplos servidores em múltiplas localizações poderiam resolver adequadamente esse problema.

Por essa razão, a maioria dos administradores de rede utiliza soluções de cache de front-end e redes de distribuição de conteúdo (CDN) para atender às solicitações de páginas estáticas. Atender a essas solicitações e servir recursos antes que a solicitação chegue ao servidor economiza recursos de processamento, elimina atrasos, evita upgrades desnecessários e maximiza os investimentos em tecnologia.

O Ultimate Multisite inclui um complemento sofisticado do Cloudflare que permite aos administradores de rede colocar suas instalações atrás do Cloudflare e aproveitar não apenas suas capacidades de cache, mas também hospedagem DNS, certificados SSL e mecanismos de segurança.

#### Backups

Você pode pedir a 50 pessoas conselhos sobre backups e receber 50 opiniões diferentes sobre estratégias de backup. A resposta é: depende.

O que não é contestado é que os backups são necessários e que é quase inconcebível que esses não sejam gerenciados pelo provedor, especificamente um que ofereça um serviço gerenciado. Consequentemente, os clientes procurarão o administrador da rede para fornecer e gerenciar esse serviço. A quem o administrador da rede procura é um problema totalmente diferente.

Para os fins desta seção, concordemos que um backup é uma cópia ponto-em-tempo do estado do sistema no momento em que o backup foi iniciado. Em termos simples, qualquer estado do sistema no momento do backup é capturado e armazenado no backup.

Com essa compreensão, a resposta sobre como realizar os backups e o que é melhor para seu ambiente dependerá em grande parte de seus requisitos e da capacidade do provedor de hospedagem de atender a esses requisitos. No entanto, na ordem de mais opinativo a menos opinativo, as opções abaixo devem fornecer alguma orientação.

#### Snapshots

Snapshots são as soluções de prata para backups porque são fáceis, descomplicados (até que você queira restaurar) e “simplesmente funcionam”. No entanto, eles exigem alguma ajuda do seu provedor e se aplicam principalmente apenas se você tiver um VPS (Virtual Private Server) ou algo semelhante. Vários provedores listados em nossa documentação de “Provedores Compatíveis” oferecem backups que não exigem intervenção ou consideração adicional por parte do administrador da rede.

Onde os backups tradicionais visam arquivos e bancos de dados, um snapshot visa todo o disco. Isso significa que não apenas os dados do site são capturados no snapshot, mas também o sistema operacional e a configuração. Para muitos, isso é uma vantagem distinta, pois um novo sistema pode ser criado quase instantaneamente a partir de um snapshot e colocado em operação para substituir uma instância falha. Da mesma forma, o processo de recuperação para recuperar arquivos requer apenas anexar a imagem do snapshot como um disco a uma instância existente para que os arquivos possam ser acessados e copiados.

Snapshots podem acarretar um custo adicional com o provedor de hospedagem, mas são uma apólice de seguro contra acidentes.

#### Scripts Externos

Não parece haver escassez de scripts e soluções externas para fazer backup de recursos WordPress e MySQL, e esses funcionariam bem para o Ultimate Multisite, pois é um plugin WordPress que utiliza o sistema de arquivos e banco de dados do WordPress. Assim, uma solução que faça backup de sites WordPress cobrirá adequadamente as necessidades do Ultimate Multisite.

Não podemos recomendar um script em detrimento de outro, mas nosso conselho geral é executar vários testes de backup e restauração para garantir que os resultados sejam desejados e “assegure-se de estar seguro” avaliando continuamente o script e sua funcionalidade, especialmente quando alguma forma de estratégia de backup diferencial é aplicada.

É importante observar que esses scripts, enquanto estão em execução, aumentarão a carga do sistema, o que deve ser levado em consideração.

#### Plugins

Quase não há problema no WordPress que não possa ser resolvido com um plugin, e se gerenciar scripts externos não é sua praia, então talvez um plugin seja a próxima melhor opção.

Embora os plugins variem em opções e recursos, eles geralmente desempenham a mesma função: fazer uma cópia dos arquivos e conteúdos do banco de dados do WordPress. Posteriormente, as funcionalidades diferem, pois alguns plugins podem enviar os backups para serviços externos, como Google Drive ou Dropbox, ou para algum tipo de serviço de armazenamento de objetos compatível, como S3, Wasabi ou outros. Os plugins mais abrangentes fornecem backups diferenciais ou alguma estratégia para fazer backup apenas dos dados que foram alterados, economizando custos de armazenamento externo.

Ao selecionar seu plugin, certifique-se de verificar se ele é compatível com multisite. Devido à sua natureza de operação, enquanto o backup está em execução, você pode esperar uma carga temporária no servidor até que o processo seja concluído.

#### Domínio e SSL

Muitos pontos já foram discutidos em relação a nomes de domínio no modo _subdomínio_ do multisite. Uma solução quase universal para administradores de rede é usar entradas DNS curinga.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GwkLVUQ9Wb.png)

Esse tipo de entrada DNS resolverá com sucesso _subdomínios_ como ‘site1.domain.com’ e ‘site2.domain.com’ para um endereço IP de 1.2.3.4, apoiando assim o Ultimate Multisite e, em maior extensão, o WordPress Multisite em modo _subdomínio_.

Isso pode funcionar perfeitamente bem para HTTP, pois o host de destino é lido a partir dos cabeçalhos HTTP, mas raramente a web é tão simples hoje em dia, onde transações HTTPS seguras são quase obrigatórias.

Felizmente, existem opções fáceis para certificados SSL. No modo _subdiretório_, um certificado de domínio regular pode ser usado. Esses certificados estão prontamente disponíveis e são gratuitos em provedores de hospedagem que podem usar o serviço gratuito LetsEncrypt ou outra fonte. Caso contrário, eles estão disponíveis comercialmente em autoridades se você puder gerar a solicitação de assinatura de certificado.

Para o modo _subdomínio_, o uso de um certificado SSL curinga combinará perfeitamente com um domínio curinga e permitirá que o certificado seja autoritário para o domínio raiz e todos os _subdomínios_ sem configuração adicional.

No entanto, deve-se observar que certificados SSL curinga podem não funcionar com serviços como Cloudflare, a menos que você esteja em um plano empresarial ou configure a entrada apenas para DNS, caso em que todo o cache e otimização são contornados.

O Ultimate Multisite pronto para uso oferece uma solução para esse problema, demonstrando nossa ampla experiência com as necessidades dos multisites WordPress. Ativar esse complemento simples fará com que o Ultimate Multisite utilize suas credenciais do Cloudflare para adicionar automaticamente entradas DNS para sites da rede no Cloudflare e definir seu modo como ‘proxied’. Dessa forma, cada subsite da rede, ao ser criado, terá a proteção completa e os benefícios do Cloudflare, incluindo SSL.

Dependendo da natureza e do propósito da sua instalação do Ultimate Multisite, pode haver necessidade de os clientes usarem seus próprios domínios. Nesse caso, o administrador da rede é responsável por resolver dois problemas: primeiro, a hospedagem do nome de domínio e segundo, os certificados SSL para o domínio.

Para muitos, o uso do Cloudflare é uma opção simples. O cliente precisa apenas colocar seu domínio no Cloudflare, apontar um CNAME para o domínio raiz do Ultimate Multisite e mapear seu domínio no Ultimate Multisite para começar a aproveitar seu nome de domínio personalizado.

Fora disso, soluções alternativas precisam ser buscadas, razão pela qual o Ultimate Multisite recomenda uma lista de Provedores Compatíveis. Isso ocorre porque o processo de configuração de DNS e SSL pode ser um processo não trivial. No entanto, com a integração do Ultimate Multisite com esses provedores, a complexidade é muito reduzida e o procedimento é automatizado.

#### Plugins

É altamente provável que você precise de plugins adicionais para fornecer funcionalidades aos seus clientes ou sites da rede. Todos os plugins funcionam com WordPress Multisite e Ultimate Multisite? Bem, depende.

Embora a maioria dos plugins seja instalável em um WordPress Multisite, sua ativação e licenciamento variam de autor para autor.

O desafio reside em como a licença é aplicada, pois alguns plugins exigem licenciamento por domínio. Isso significaria que, para alguns plugins, o administrador da rede precisa ativar manualmente a licença para cada plugin em cada novo site.

Portanto, pode ser melhor verificar com o autor do plugin como seu plugin funcionaria com um WordPress Multisite e quaisquer requisitos ou procedimentos especiais necessários para licenciá-lo.
