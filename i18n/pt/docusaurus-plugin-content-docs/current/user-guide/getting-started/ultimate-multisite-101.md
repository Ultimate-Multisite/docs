---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

O Ultimate Multisite é um plugin do WordPress Multisite que permite oferecer WaaS ou Websites como Serviço aos clientes. Antes de mergulharmos e aprendermos como o Ultimate Multisite pode ajudar seu negócio e seus clientes, precisamos adquirir alguns conhecimentos fundamentais.

## O WordPress Multisite {#the-wordpress-multisite}

A maioria de nós está familiarizada com a instalação padrão do WordPress. Você pode criá-la através do painel de controle do seu provedor de hospedagem ou, para os mais corajosos, configurar um novo servidor web e banco de dados, baixar os arquivos principais e começar o processo de instalação.

Isso funciona para milhões de sites WordPress ao redor do mundo, mas da perspectiva de uma agência ou provedor de hospedagem, vamos discutir volumes por um minuto.

Embora seja fácil criar um site WordPress ou até cem através de um painel de controle automatizado, problemas começam a aparecer logo quando se trata da gestão desses sites. Deixados sem gerenciar, você é um alvo principal para malware. Gerenciar significa um esforço e uso de recursos, e embora existam ferramentas externas e plugins disponíveis para ajudar a simplificar a gestão e administração dos sites WordPress, o fato de os clientes manterem acesso administrativo significa que esses esforços podem ser facilmente superados.

No seu núcleo, o WordPress fornece um recurso simplesmente chamado ‘Multisite’, que remonta aos lançamentos do WordPress 3.0 em 2010. Desde então, ele recebeu várias revisões com o objetivo de introduzir novos recursos e aumentar a segurança.

Em essência, um WordPress multisite pode ser pensado assim: Uma universidade mantém uma única instalação do WordPress, mas cada faculdade mantém seu próprio site WordPress.

Para entender isso melhor, vamos dar uma olhada em alguns termos básicos que aparecem não só na documentação do Ultimate Multisite, mas também na comunidade WordPress.

### A Rede (The Network) {#the-network}

Em termos de WordPress, uma rede multisite é onde vários subsites podem ser gerenciados a partir de um único painel (dashboard). Embora a criação de uma rede multisite difira entre os provedores de hospedagem, o resultado final geralmente envolve algumas diretivas adicionais no arquivo `wp-config.php` para dizer ao WordPress que ele está operando neste modo específico.

Existem várias diferenças distintas entre uma rede multisite e uma instalação do WordPress independente, que vamos discutir brevemente.

#### Subdomínio vs. Subdiretório {#subdomain-vs-subdirectory}

Uma das decisões mais imediatas que você precisará tomar é se a instalação multisite operará com _subdiretórios_ ou _subdomínios_. O Ultimate Multisite funciona igualmente bem com ambas as opções, mas existem algumas diferenças arquitetônicas entre as duas configurações.

Na configuração de _subdiretório_, os sites da rede herdam um caminho baseado no nome do domínio principal. Por exemplo, um site da rede rotulado como ‘site1’ terá seu URL completo como `https://domain.com/site1`. Na configuração de _subdomínio_, o site da rede terá seu próprio _subdomínio_ derivado do nome do domínio principal. Assim, um site rotulado como ‘site1’ terá seu URL completo como `https://site1.domain.com/`.

Embora ambas as opções sejam escolhas perfeitamente válidas, o uso de _subdomínios_ oferece várias vantagens, mas também exige mais pensamento e planejamento em sua arquitetura.

Em termos de DNS, o uso de _subdiretórios_ apresenta um desafio relativamente simples. Como os sites de rede são simplesmente filhos do caminho pai, apenas uma entrada de nome de domínio precisa existir para o nome de domínio principal. Para _subdomínios_, o desafio é um pouco mais complexo, exigindo ou uma entrada CNAME separada para cada site de rede ou uma entrada curinga (*) nos registros DNS.

Outra área a considerar é a de SSL e a emissão e uso de certificados SSL. Na configuração de _subdiretório_, um único certificado de domínio pode ser usado, já que os sites de rede são simplesmente caminhos do nome de domínio principal. Assim, um certificado para domain.com fornecerá SSL adequado para https://domain.com/site1, https://domain.com/site2 e assim por diante.

Na configuração de _subdomínio_, o uso de um certificado SSL curinga é uma das opções mais comuns. Este tipo de certificado SSL fornece criptografia para um domínio e seus _subdomínios_. Portanto, um certificado SSL curinga fornecerá criptografia para https://site1.domain.com, https://site2.domain.com e https://domain.com em si.

Embora outras opções existam, elas são frequentemente limitadas em escopo e aplicação e exigem configuração e consideração adicionais quanto à adequação.

#### Plugins e Temas {#plugins-and-themes}

O que o WordPress dá, ele também tira, pelo menos da perspectiva do cliente. Em uma instalação autônoma do WordPress, se o administrador do site instalar um plugin ruim ou não mantiver sua instalação atualizada, a única vítima e prejuízo desse ato é ele mesmo. No entanto, um administrador de site que instala um plugin ruim em uma instalação multisite cria uma vítima para todos os sites instalados na rede.

Por esta razão, quando configurado como um WordPress multisite, o sistema remove a capacidade dos administradores do site de instalar plugins e temas e, em vez disso, transfere essa permissão para uma função recém-criada de administrador da rede ou 'super admin'. Essa função privilegiada pode então decidir se permite que os administradores dos sites da rede vejam ou acessem o menu de plugins no painel deles e, se sim, se tais permissões se estendem à _ativação_ ou _desativação_ de plugins.

Nesse sentido, o administrador da rede é responsável por instalar plugins e temas na rede e delegar permissões para que esses plugins e temas possam ser usados nos sites da rede. Os administradores dos sites não podem instalar plugins e temas nem acessar plugins e temas que não lhes foram atribuídos ao seu site.

#### Usuários e Administradores {#users-and-administrators}

Em um WordPress Multisite, todos os sites da rede compartilham o mesmo banco de dados e, portanto, compartilham os mesmos usuários, funções (roles) e capacidades. A melhor forma de pensar nisso é que todos os usuários são membros da rede e não de um site em particular.

Dada essa compreensão, pode ser indesejável permitir a criação de usuários e, por isso, o WordPress Multisite remove essa capacidade dos administradores do site e a transfere para a função de administrador da rede. Por sua vez, o administrador da rede pode delegar os privilégios necessários a um administrador do site para que ele possa criar contas de usuário para o seu próprio site.

<!-- Screenshot unavailable: interface de gerenciamento de usuários da rede WordPress Multisite -->

Reforçando o que foi dito acima, embora as contas de usuário pareçam estar relacionadas ao site em que estão, elas são, na verdade, alocadas à rede e, portanto, devem ser únicas em toda a rede. Pode haver casos em que nomes de usuário não estejam disponíveis para registro por este motivo.

Embora não seja um conceito estranho em sistemas empresariais, essa única fonte de registro e autenticação de usuários é frequentemente difícil de entender para quem está acostumado com instalações do WordPress independentes, onde a administração de usuários é um pouco mais simples.

#### Mídia {#media}

Onde os sites de rede compartilham um único banco de dados no WordPress Multisite, eles mantêm caminhos separados no sistema de arquivos para os arquivos de mídia.

A localização padrão do WordPress (wp-content/uploads) permanece; no entanto, o caminho é alterado para refletir o ID exclusivo do site de rede. Consequentemente, os arquivos de mídia para um site de rede aparecem como wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Mencionamos antes que existem vantagens distintas da configuração por _subdomínio_ em relação à configuração por _subdiretório_, e aqui estão elas: caminhos.

Em uma configuração por _subdiretório_, o site principal (o primeiro site criado quando a rede é estabelecida) e os subsites de rede devem compartilhar o mesmo caminho que leva ao nome do domínio. Isso tem potencial para um grande número de conflitos.

Para posts, um caminho obrigatório /blog/ é adicionado ao site principal para evitar colisões com os sites de rede. Isso significa que permalinks bonitos como ‘Nome do Post’ serão apresentados como domain.name/blog/post-name/.

<!-- Screenshot unavailable: configurações de permalink do WordPress mostrando o caminho /blog/ na configuração por subdiretório -->

Em uma configuração por _subdomínio_, essa ação não é necessária porque cada site de rede se beneficia da separação completa do domínio e, portanto, não precisa depender de um único caminho. Em vez disso, eles mantêm seus próprios caminhos distintos baseados no _subdomínio_.

<!-- Screenshot unavailable: configurações de permalink do WordPress para configuração por subdomínio -->

#### Páginas Estáticas {#static-pages}

Na configuração de _subdirectory_, o potencial de conflitos de nomes se estende a páginas estáticas como o site principal e os sites da rede compartilham o mesmo caminho.

Para evitar isso, o WordPress oferece um meio para bloquear certos nomes de sites, de modo que eles não entrem em conflito com os nomes do primeiro site. Tipicamente, o administrador da rede inseriria os caminhos raiz das páginas do site principal.

<!-- Screenshot indisponível: Configurações de rede do WordPress mostrando nomes de sites banidos para evitar conflitos -->

Na configuração de _subdomain_, a possibilidade de conflitos de nomes é mitigada pelo _subdomain_, pois ele é exclusivo do site da rede e não tem relação alguma com o site principal.

### Registro {#registration}

Dentro das configurações de rede do WordPress Multisite, várias novas opções de registro de usuários estão disponíveis, permitindo que novos e usuários existentes criem sites.

<!-- Screenshot indisponível: Configurações de rede do WordPress Multisite mostrando opções de registro -->

Ao contrário das instalações do WordPress independentes (stand-alone), os sites da rede não mantêm as opções familiares para permitir o registro de usuários ou atribuir esses registros a funções específicas.

<!-- Screenshot indisponível: Configurações de registro de usuário do site independente do WordPress mostrando opções limitadas -->

Quando as contas de usuário são criadas, essas contas são geradas no nível da rede. Assim, em vez de pertencerem a um site específico, elas pertencem à rede como um todo. Isso tem algumas vantagens e desvantagens distintas.

Por exemplo, imagine que seu WordPress Multisite fosse no ramo de notícias e informação. Você estabeleceria o multisite e depois criaria sites de rede para finanças, tecnologia, entretenimento e outras áreas de interesse, mantendo o controle geral sobre plugins e temas. Cada site de rede teria, por sua vez, um nível muito maior de controle sobre a aparência e a experiência do usuário do seu site de rede do que os tipos de posts personalizados ou as categorias de posts regulares.

Nesse sentido, quando um usuário faz login, ele faz login na rede e, no final das contas, também é logado em cada site de rede para proporcionar uma experiência contínua. Se o seu novo site for baseado em assinatura, essa seria a solução ideal e o resultado esperado.

No entanto, se a natureza e o propósito pretendidos do multisite forem oferecer sites de rede díspares que não têm relação entre si, é quase sempre necessário usar plugins externos ou adicionais para manipular os papéis dos usuários.

### Domínio e SSL {#domain-and-ssl}

Vamos falar sobre uma instalação de WordPress Multisite que quase escapa à nossa atenção: Wordpress.com. Este é de longe o exemplo mais extenso de um WordPress multisite e demonstra suas amplas capacidades de ser personalizado e moldado para cumprir um propósito.

Hoje, na internet moderna, o uso de SSL é quase obrigatório e os administradores de rede de WordPress multisites são apresentados a esses desafios em breve.

Na configuração de _subdomínio_, os sites são criados com base no nome do domínio raiz. Assim, um site chamado ‘site1’ seria criado como ‘site1.domain.com’. Usando um certificado SSL curinga (wildcard), um administrador de rede pode resolver com sucesso esse desafio e fornecer capacidades de criptografia SSL para a rede.

O WordPress Multisite contém uma função de mapeamento de domínio que permite associar sites da rede a nomes de domínio personalizados ou a nomes de domínio diferentes do domínio raiz da rede.

Para os administradores da rede, isso representa uma camada adicional de complexidade tanto na configuração do nome de domínio quanto na emissão e manutenção de certificados SSL.

Nesse sentido, embora o WordPress Multisite forneça um meio de mapear [www.outrodominio.com](http://www.outrodominio.com) para 'site1', o administrador da rede fica com o desafio de gerenciar externamente os registros DNS e a implementação dos certificados SSL.

## Ultimate Multisite {#ultimate-multisite}

Com a compreensão das diferenças entre uma instalação do WordPress independente e uma instalação Multisite, vamos ver como o Ultimate Multisite é o arsenal definitivo para fornecer Websites as a Service (WaaS).

### Introdução {#introduction}

O Ultimate Multisite é sua faca suíça quando se trata de criar um Website as a Service (WaaS). Pense no Wix.com, Squarespace, WordPress.com e depois pense em ter seu próprio serviço.

Por baixo dos panos, o Ultimate Multisite utiliza o WordPress Multisite, mas o faz de uma maneira que não só resolve a miríade de desafios que os administradores de rede enfrentam com instalações multisite, como também aprimora as capacidades permitindo o suporte a uma grande variedade de casos de uso.

Nas seções seguintes, vamos analisar alguns casos de uso comuns e as considerações necessárias para suportar esses casos.

### Casos de Uso {#use-cases}

#### Caso 1: Uma Agência {#case-1-an-agency}

Geralmente, as habilidades centrais de uma agência residem no design de websites com aspectos como hospedagem ou marketing listados como serviços adicionais.

Para agências, o Ultimate Multisite oferece uma proposta de valor incrível por meio da sua capacidade de hospedar e gerenciar múltiplos sites em uma única plataforma. Isso é ainda mais vantajoso para agências que padronizam seus designs em temas específicos, como GeneratePress, Astra, OceanWP ou outros; elas podem aproveitar as capacidades do Ultimate Multisite para ativar automaticamente esses temas em cada novo site.

Da mesma forma, com a abundância de ofertas de preços para plugins comuns e populares de agências, o uso do Ultimate Multisite permite que as agências aproveitem investimentos existentes ao fornecer uma plataforma comum da qual os plugins podem ser instalados, mantidos e utilizados.

É muito provável que o uso de uma configuração seja desejado e, felizmente, o Ultimate Multisite facilita incrivelmente o mapeamento de domínios e certificados SSL com suas integrações para vários provedores de hospedagem populares, bem como serviços como Cloudflare e cPanel.

Assim, ao aproveitar um desses provedores ou ao colocar o Ultimate Multisite atrás do Cloudflare, aspectos como a gestão de domínios e certificados SSL se tornam algo quase trivial.

Agências que preferem manter um controle rigoroso sobre a criação dos sites apreciarão a facilidade com que podem criar sites e associar sites a clientes e planos através da interface simplificada do Ultimate Multisite.

![Interface de gerenciamento de site do Ultimate Multisite](/img/admin/sites-list.png)

O controle rigoroso sobre plugins e temas é mantido em uma base por produto através das interfaces intuitivas do Ultimate Multisite, permitindo que os plugins e temas sejam disponibilizados ou ocultados, bem como seu estado de ativação quando instanciados para um novo site.

![Interface de limitações de plugins de produto](/img/config/product-plugins.png)

Temas oferecem funcionalidades semelhantes, permitindo que temas específicos sejam ativados ou ocultados na criação do site.

![interface de limitações de tema de produto](/img/config/product-themes.png)

Agências terão tranquilidade com o Ultimate Multisite, permitindo que façam o que fazem de melhor: projetar sites excepcionais.

#### Caso 2: Provedor de Nicho {#case-2-niche-provider}

Existe um velho ditado que diz: "faça uma coisa e faça bem". Para muitos especialistas, isso significa criar um produto ou serviço em torno de uma ideia central única.

Talvez você seja um golfeiro ávido promovendo sites para clubes ou possa ser um jogador de esports dedicado fornecendo sites para clãs. Uma pessoa que promove um serviço de reserva para restaurantes, talvez?

Por muitas razões, você gostaria de oferecer serviços baseados em uma estrutura e plataforma comuns. Pode ser que você tenha projetado ou investido em plugins personalizados para fornecer a funcionalidade necessária, ou pode ser que as melhores práticas do setor exijam alguma forma de abordagem padronizada no design.

Uma das funcionalidades inovadoras do Ultimate Multisite é o uso de sites modelo (template sites). Um site modelo é aquele onde o tema foi instalado e ativado, os plugins necessários foram instalados e ativados, e posts ou páginas de exemplo foram criados. Quando um cliente cria um novo site baseado no modelo, o conteúdo e as configurações do modelo são copiados para o site recém-criado.

Para um provedor de sites e serviços de nicho, isso oferece uma vantagem incomparável na capacidade de criar instantaneamente um site pronto para uso com plugins e design personalizados. O cliente só precisa fornecer a entrada mais mínima para concluir o serviço.

Dependendo dos requisitos, tanto configurações de _subdiretório_ quanto de _subdomínio_ podem ser adequadas, sendo que as escolhas arquitetônicas estariam entre um certificado SSL simples para _subdiretórios_ ou um certificado SSL curinga (wildcard) para _subdomínios_.

#### Caso 3: Hospedagem Web WordPress {#case-3-wordpress-web-hosting}

Existem inúmeras maneiras de hospedar sites WordPress, mas raramente é tão simples quanto fornecer espaço na web a um cliente com uma versão pré-instalada do WordPress. Isso ocorre porque várias decisões e considerações precisam se juntar para oferecer um serviço significativo.

O Ultimate Multisite se destaca nesta área ao fornecer uma solução completa e pronta para uso (turnkey) para hospedagem de sites WordPress. A solução inclui os mecanismos centrais para fornecer serviços de assinatura, coleta de pagamentos, formulários de checkout, cupons de desconto e comunicações com o cliente.

Grande parte do trabalho essencial necessário para instalar, configurar e manter um WordPress Multisite corretamente é facilitado pelo Ultimate Multisite, pois os administradores de rede só precisam considerar aspectos relacionados ao seu serviço ou nicho, como níveis de produto, preços e ofertas de serviço.

Para desenvolvedores que desejam se integrar com o Ultimate Multisite, a solução também oferece uma API RESTful completa e Webhooks para notificação de eventos.

Sem depender de inúmeros plugins e licenças externas, o Ultimate Multisite fornece uma solução rica em recursos e comparável à do Wix, Squarespace, WordPress.com e outros.

### Considerações Arquitetônicas {#architecture-considerations}

Embora não seja um guia completo, os seguintes itens devem servir como orientação para a seleção correta das tecnologias para suportar uma instalação do Ultimate Multisite.

#### Hospedagem Compartilhada vs. Dedicada {#shared-vs-dedicated-hosting}

Infelizmente, nem todos os provedores de hospedagem são iguais e alguns praticam densidades de servidor extremas. Provedores de baixo custo geralmente geram receita maximizando a densidade do servidor. Como tal, sua instalação Ultimate Multisite pode ser apenas uma das centenas de sites no mesmo servidor.

Sem salvaguardas apropriadas implementadas pelo provedor, os sites em um servidor compartilhado experimentam o problema do 'vizinho barulhento' (*noisy neighbour*). Isso significa que um site no mesmo servidor consumindo tantos recursos que outros sites têm que competir pelos recursos restantes. Muitas vezes, isso se manifesta como sites lentos ou que não respondem a tempo.

Como provedor de hospedagem web, o fluxo de efeitos significará que seus clientes experimentarão velocidades ruins, baixo ranqueamento de página e altas taxas de rejeição, resultando frequentemente na perda de clientes à medida que eles procuram serviços em outros lugares.

Em resumo, barato não significa bom.

O Ultimate Multisite é conhecido por funcionar com vários bons provedores de hospedagem e se integra bem ao ambiente deles para fornecer funções como mapeamento de domínio e SSL automático. Esses provedores valorizam o desempenho e oferecem um serviço de nível superior ao de hospedagem compartilhada.

Para uma lista de provedores compatíveis e instruções completas de configuração para cada um, consulte a documentação de Provedores Compatíveis (*Compatible Providers*).

#### Considerações de Desempenho {#performance-considerations}

O Ultimate Multisite não é uma aplicação lenta; pelo contrário, é notavelmente rápido. No entanto, ele só terá o mesmo desempenho da aplicação subjacente e da infraestrutura e poderá aproveitar apenas o que tiver acesso a ela.

Pense nisto: Você é o administrador de rede de uma instalação Ultimate Multisite com 100 sites. Alguns desses sites estão indo bem e atraem um número de visitantes do site todos os dias.

Este cenário seria diferente em uma escala menor, digamos de um a cinco sites, mas antes que problemas de escala fiquem evidentes.

Sem supervisão, o único site Ultimate Multisite seria responsável por atender aos pedidos de todos os visitantes dos sites. Esses pedidos podem ser para páginas PHP dinâmicas ou ativos estáticos como folhas de estilo (stylesheets), JavaScript ou arquivos de mídia. Seja um ou cem sites, essas tarefas se tornam repetitivas, monótonas e desperdiçadoras. Não é necessário usar poder de CPU e memória para processar um arquivo PHP quando o resultado é a mesma informação estática para cada solicitação.

Da mesma forma, uma solicitação por uma página PHP ou HTML gera múltiplas solicitações subsequentes para scripts, folhas de estilo e arquivos de imagem. Essas solicitações são direcionadas diretamente ao seu servidor Ultimate Multisite.

Poder-se-ia resolver esse problema facilmente atualizando o servidor, mas isso não resolve um problema secundário: latências geográficas. Apenas múltiplos servidores em locais diferentes poderiam lidar adequadamente com este problema.

Por esta razão, a maioria dos administradores de rede utiliza soluções de cache de front-end e redes de distribuição de conteúdo (CDN) para atender às solicitações de páginas estáticas. Atender a essas solicitações e servir os ativos antes que a solicitação chegue ao servidor economiza recursos de processamento, elimina atrasos, evita atualizações desnecessárias e maximiza investimentos em tecnologia.

O Ultimate Multisite inclui um sofisticado add-on Cloudflare que permite aos administradores de rede colocar suas instalações atrás do Cloudflare e aproveitar não apenas suas capacidades de cache, mas também hospedagem de DNS, certificados SSL e mecanismos de segurança.

#### Backups {#backups}

Poder-se-ia pedir conselhos a 50 pessoas sobre backups e receber 50 opiniões diferentes sobre estratégias de backup. A resposta é: depende.

O que não é discutível é que backups são necessários e que é quase inconcebível que eles não sejam gerenciados pelo provedor, especialmente um que oferece um serviço gerenciado. Consequentemente, os clientes procurarão o administrador de rede para fornecer e gerenciar este serviço. Quem o administrador de rede procura é um problema completamente diferente.

Para os fins desta seção, vamos concordar que um backup é uma cópia do estado do sistema em um momento específico no tempo em que o backup foi iniciado. Em termos simples, não importa qual seja o estado do sistema no momento do backup, esse estado é capturado e guardado no backup.

Com este entendimento, a resposta sobre como realizar os backups e o que é melhor para o seu ambiente dependerá muito dos seus requisitos e da capacidade do provedor de hospedagem de atendê-los. No entanto, em ordem do mais opinativo para o menos opinativo, as opções abaixo devem fornecer alguma orientação.

#### Snapshots (Instantâneos) {#snapshots}

Snapshots são a solução mágica para backups porque são fáceis, descomplicados (até você querer restaurar) e "simplesmente funcionam". No entanto, eles exigem alguma ajuda do seu provedor e se aplicam principalmente se você tiver um VPS (Servidor Virtual Privado) ou algo semelhante. Vários provedores listados na nossa documentação de 'Provedores Compatíveis' oferecem backups que não requerem intervenção ou consideração adicional por parte do administrador de rede.

Enquanto os backups tradicionais visam arquivos e bancos de dados, um snapshot visa o disco inteiro. Isso significa que não apenas os dados do site são capturados no snapshot, mas também o sistema operacional e a configuração. Para muitos, essa é uma vantagem clara, pois um novo sistema pode ser criado quase instantaneamente a partir de um snapshot e colocado em operação para substituir uma instância com problemas. Da mesma forma, o processo de recuperação para recuperar arquivos requer apenas anexar a imagem do snapshot como um disco a uma instância existente para que os arquivos possam ser acessados e copiados.

Snapshots podem trazer um custo adicional com o provedor de hospedagem, mas funcionam como uma apólice de seguro contra acidentes.

#### Scripts Externos {#external-scripts}

Parece não haver falta de scripts externos e soluções para fazer backup de recursos do WordPress e MySQL, e estes funcionariam bem para o Ultimate Multisite, já que é um plugin do WordPress que utiliza o sistema de arquivos e o banco de dados do WordPress. Assim, uma solução que faça backup dos sites WordPress cobriria adequadamente as necessidades do Ultimate Multisite.

Não podemos recomendar um script em detrimento de outro, mas nosso conselho geral é rodar vários testes de backup e restauração para garantir que os resultados sejam os desejados e "ter certeza absoluta" avaliando continuamente o script e sua funcionalidade, especialmente onde alguma estratégia de backup diferencial seja aplicada.

Deve-se notar que esses scripts, enquanto estão rodando, aumentarão a carga do sistema, o que deve ser levado em consideração.

#### Plugins {#plugins}

Quase não há problema no WordPress que não possa ser resolvido com um plugin e, se gerenciar scripts externos não é o seu forte, talvez um plugin seja a melhor opção.

Embora os plugins variem em opções e recursos, eles geralmente executam a mesma função: fazer uma cópia dos arquivos do WordPress e do banco de dados. Depois disso, as funcionalidades diferem, pois alguns plugins podem enviar os backups para serviços externos como Google Drive ou Dropbox, ou para algum tipo de serviço de armazenamento de objetos compatível, como S3, Wasabi ou outros. Os plugins mais completos oferecem backups diferenciais ou algum tipo de estratégia para fazer backup apenas dos dados que foram alterados, economizando custos de armazenamento externo.

Ao selecionar seu plugin, tenha cuidado para verificar se ele é compatível com multisite. Devido à sua natureza de operação, enquanto o backup estiver em execução, você pode esperar uma carga temporária no servidor até que o processo seja concluído.

#### Domínio e SSL {#domain-and-ssl-1}

Já foi muito discutido sobre nomes de domínio no modo _subdomínio_ do multisite. Uma solução quase universal para administradores de rede é usar entradas DNS curinga (wildcard).

![Exemplo de configuração de entrada DNS curinga](/img/config/settings-domain-mapping.png)

Este tipo de entrada DNS resolverá com sucesso _subdomínios_, como ‘site1.domain.com’ e ‘site2.domain.com’, para um endereço IP de 1.2.3.4, suportando o Ultimate Multisite e, em maior grau, o WordPress Multisite usando o modo _subdomínio_.

Isso pode funcionar perfeitamente bem para HTTP porque o host de destino é lido dos cabeçalhos HTTP, mas raramente a web é tão simples hoje em dia que transações seguras HTTPS sejam quase obrigatórias.

Felizmente, existem opções fáceis para certificados SSL. No modo _subdirectory_ (subdiretório), um certificado de domínio comum pode ser usado. Estes estão prontamente disponíveis e gratuitamente em provedores de hospedagem que podem usar o serviço gratuito LetsEncrypt ou outra fonte. Caso contrário, eles são comercialmente disponíveis junto às autoridades se você conseguir gerar a solicitação de assinatura do certificado.

Para o modo _subdomain_ (subdomínio), o uso de um certificado SSL curinga (wildcard) combinará perfeitamente com um domínio curinga e permitirá que o certificado seja autoritativo para o domínio raiz e todos os _subdomínios_ sem configurações extras.

No entanto, deve-se notar que certificados SSL curingas podem não funcionar com serviços como Cloudflare a menos que você esteja em um plano empresarial ou defina a entrada apenas para DNS, caso em que todo o cache e otimização são ignorados.

O Ultimate Multisite pronto para uso oferece uma solução para este problema, demonstrando nossa vasta experiência com as necessidades de multisites do WordPress. Ativar este simples add-on fará com que o Ultimate Multisite utilize suas credenciais do Cloudflare para adicionar automaticamente entradas DNS para sites da rede no Cloudflare e definir seu modo como 'proxied' (proxy). Desta forma, cada subsistema da rede, ao ser criado, terá toda a proteção e os benefícios do Cloudflare, incluindo SSL.

Dependendo da natureza e do propósito da sua instalação Ultimate Multisite, pode haver necessidade de os clientes usarem seus próprios domínios. Neste caso, o administrador da rede é responsável por resolver dois problemas: um, a hospedagem do nome de domínio e dois, os certificados SSL para o domínio.

Para muitos, usar o Cloudflare é uma opção fácil. O cliente só precisa colocar o domínio no Cloudflare, apontar um CNAME para o domínio raiz do Ultimate Multisite e mapear o domínio no Ultimate Multisite para começar a aproveitar o nome de domínio personalizado.

Fora isso, é preciso buscar soluções alternativas, e é por isso que o Ultimate Multisite recomenda uma lista de Provedores Compatíveis. Isso ocorre porque o processo de configuração de DNS e SSL pode ser um processo não trivial. No entanto, com a integração do Ultimate Multisite com esses provedores, a complexidade é muito reduzida e o procedimento é automatizado.

#### Plugins {#plugins-1}

É muito provável que você precise de plugins adicionais para fornecer funcionalidades aos seus clientes ou sites da rede. Todos os plugins funcionam com WordPress Multisite e Ultimate Multisite? Bem, depende.

Embora a maioria dos plugins possa ser instalada em um WordPress Multisite, a ativação e licenciamento variam de autor para autor.

O desafio está em como o licenciamento é aplicado com alguns plugins que exigem licenciamento por domínio. Isso significa que, para alguns plugins, o administrador da rede precisa ativar manualmente a licença para cada plugin em cada novo site.

Portanto, pode ser melhor verificar com o autor do plugin como ele funcionaria com um WordPress Multisite e quaisquer requisitos ou procedimentos especiais necessários para licenciá-lo.
