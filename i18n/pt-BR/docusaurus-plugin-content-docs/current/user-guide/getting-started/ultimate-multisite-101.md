---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite é um plugin WordPress Multisite que permite oferecer um WaaS ou Websites as a Service aos clientes. Antes de nos aprofundarmos e aprendermos como Ultimate Multisite pode ajudar sua empresa e seus clientes, há alguns conhecimentos fundamentais que precisamos adquirir.

## O WordPress Multisite {#the-wordpress-multisite}

A maioria de nós está familiarizada com a instalação padrão do WordPress. Você a cria pelo painel de controle do seu provedor de hospedagem ou, para os mais corajosos, configura um novo servidor web e banco de dados, baixa os arquivos principais e inicia o processo de instalação.

Isso funciona para milhões de sites WordPress em todo o mundo, mas, da perspectiva de uma agência ou provedor de hospedagem, vamos discutir volumes por um minuto.

Embora seja muito fácil criar um site WordPress, ou até mesmo cem, por meio de um painel de controle automatizado, os problemas logo começam a aparecer quando chega a hora de gerenciar esses sites. Sem gerenciamento, você se torna um alvo fácil para malware. Gerenciar significa um esforço de recursos e trabalho e, embora existam ferramentas externas e plugins disponíveis para ajudar a simplificar o gerenciamento e a administração de sites WordPress, o fato de os clientes manterem acesso administrativo significa que esses esforços podem ser facilmente anulados.

Em seu núcleo, o WordPress oferece um recurso simplesmente chamado ‘Multisite’, cujas origens remontam a 2010, no lançamento do WordPress 3.0. Desde então, ele recebeu várias revisões voltadas a introduzir novos recursos e reforçar a segurança.

Em essência, um WordPress multisite pode ser entendido assim: uma universidade mantém uma única instalação do WordPress, mas cada faculdade mantém seu próprio site WordPress.

Para detalhar essa afirmação, vamos dar uma olhada em algumas das terminologias básicas presentes não apenas na documentação do Ultimate Multisite, mas também em toda a comunidade WordPress.

### A rede {#the-network}

Em termos de WordPress, uma rede multisite é onde vários subsites podem ser gerenciados a partir de um único Dashboard. Embora a criação de uma rede multisite varie entre provedores de hospedagem, o resultado final geralmente são algumas diretivas adicionais no arquivo wp-config.php para informar ao WordPress que ele está operando nesse modo específico.

Há várias diferenças distintas entre uma rede multisite e uma instalação WordPress independente, que discutiremos brevemente.

#### Subdomínio vs. subdiretório {#subdomain-vs-subdirectory}

Uma das decisões mais imediatas que você precisará tomar é se a instalação multisite funcionará com _subdiretórios_ ou _subdomínios_. Ultimate Multisite funciona igualmente bem com ambas as escolhas, mas há algumas diferenças arquitetônicas entre as duas configurações.

Na configuração de _subdiretório_, os sites da rede herdam um caminho baseado no nome de domínio principal. Por exemplo, um site de rede rotulado como ‘site1’ terá sua URL completa como https://domain.com/site1. Na configuração de _subdomínio_, o site de rede terá seu próprio _subdomínio_ derivado do nome de domínio principal. Assim, um site rotulado como ‘site1’ terá sua URL completa como https://site1.domain.com/.

Embora ambas as opções sejam escolhas perfeitamente válidas, o uso de _subdomínios_ oferece várias vantagens, mas também exige mais reflexão e planejamento em sua arquitetura.

Em termos de DNS, o uso de _subdiretórios_ apresenta um desafio relativamente simples. Como os sites da rede são simplesmente filhos do caminho pai, apenas uma única entrada de nome de domínio precisa existir para o nome de domínio principal. Para _subdomínios_, o desafio é um pouco mais complexo, exigindo uma entrada CNAME separada para cada site da rede ou uma entrada curinga (*) nos registros DNS.

Outra área de consideração é a de SSL e a emissão e o uso de certificados SSL. Na configuração de _subdiretório_, um único certificado de domínio pode ser usado, pois os sites da rede são simplesmente caminhos do nome de domínio principal. Assim, um certificado para domain.com fornecerá adequadamente SSL para https://domain.com/site1, https://domain.com/site2 e assim por diante.

Na configuração de _subdomínio_, o uso de um certificado SSL curinga é uma das opções mais comuns. Esse tipo de certificado SSL fornece criptografia para um domínio e seus _subdomínios_. Portanto, um certificado SSL curinga fornecerá criptografia para https://site1.domain.com, https://site2.domain.com e https://domain.com em si.

Embora existam outras opções, elas frequentemente são limitadas em escopo e aplicação e exigem configuração e consideração adicionais quanto à adequação.

#### Plugins e temas {#plugins-and-themes}

O que o WordPress dá, ele também tira, pelo menos da perspectiva do cliente. Em uma instalação WordPress independente, se o administrador do site instala um plugin ruim ou deixa de manter sua instalação atualizada, a única vítima e prejudicado por esse ato é ele mesmo. No entanto, um administrador de site que instala um plugin ruim em uma instalação multisite cria uma vítima de cada site instalado na rede.

Por esse motivo, quando configurado como multisite, o WordPress remove dos administradores de site a capacidade de instalar plugins e temas e, em vez disso, move essa capacidade para uma função recém-criada de administrador da rede ou ‘super admin’. Essa função privilegiada pode então decidir se permite que administradores de sites da rede vejam ou acessem o menu de plugins em seu Dashboard e, em caso afirmativo, se essas permissões se estendem a _ativar_ ou _desativar_ plugins.

Nesse sentido, o administrador da rede é responsável por instalar plugins e temas na rede e delega permissões para usar esses plugins e temas aos sites da rede. Administradores de site não podem instalar plugins e temas nem acessar plugins e temas não atribuídos ao seu site.

#### Usuários e administradores {#users-and-administrators}

Em um WordPress Multisite, todos os sites da rede compartilham o mesmo banco de dados e, portanto, compartilham os mesmos usuários, funções e capacidades. A maneira mais adequada de pensar nisso é que todos os usuários são membros da rede, e não de um site específico.

Dado esse entendimento, pode ser indesejável permitir que usuários sejam criados e, por esse motivo, o WordPress Multisite remove essa capacidade dos administradores do site e a transfere para o administrador da rede. Por sua vez, o administrador da rede pode delegar os privilégios necessários a um administrador do site para permitir que ele crie contas de usuário para seu próprio site.

<!-- Captura de tela indisponível: interface de gerenciamento de usuários da rede do WordPress Multisite -->

Reiterando a afirmação acima, embora as contas de usuário pareçam estar relacionadas ao site, elas na verdade são alocadas à rede e, portanto, devem ser únicas em toda a rede. Pode haver situações em que nomes de usuário não estejam disponíveis para registro por esse motivo.

Embora não seja um conceito estranho em sistemas corporativos, essa fonte única de registro e autenticação de usuários costuma ser um conceito difícil de entender para pessoas familiarizadas com instalações WordPress independentes, nas quais a administração de usuários é um pouco mais fácil.

#### Mídia {#media}

Quando sites de rede compartilham um único banco de dados em um WordPress Multisite, eles mantêm caminhos separados no sistema de arquivos para arquivos de mídia.

O local padrão do WordPress (wp-content/uploads) permanece; no entanto, seu caminho é alterado para refletir o ID único do site da rede. Consequentemente, os arquivos de mídia de um site da rede aparecem como wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Mencionamos anteriormente que há vantagens distintas da configuração de _subdomain_ em relação à de _subdirectory_, e aqui está uma delas: caminhos.

Em uma configuração de _subdirectory_, o site principal (o primeiro site criado quando a rede é estabelecida) e os subsites da rede devem compartilhar o mesmo caminho a partir do nome de domínio. Isso tem potencial para gerar um grande número de conflitos.

Para posts, um caminho obrigatório /blog/ é adicionado ao site principal para evitar conflitos com sites da rede. Isso significa que permalinks amigáveis, como ‘Nome do post’, serão apresentados como domain.name/blog/post-name/

<!-- Captura de tela indisponível: configurações de permalink do WordPress mostrando o caminho /blog/ na configuração de subdirectory -->

Em uma configuração de _subdomain_, essa ação não é necessária porque cada site da rede se beneficia da separação completa de domínio e, portanto, não precisa depender de um único caminho. Em vez disso, eles mantêm seus próprios caminhos distintos com base em seu _subdomain_.

<!-- Captura de tela indisponível: configurações de permalink do WordPress para configuração de subdomain -->

#### Páginas estáticas {#static-pages}

Na configuração de _subdirectory_, o potencial de conflitos de nomes se estende às páginas estáticas, pois o site principal e os sites da rede compartilham o mesmo caminho.

Para evitar isso, o WordPress fornece um meio de colocar certos nomes de sites em uma lista de bloqueio para que não entrem em conflito com os nomes do primeiro site. Normalmente, o administrador da rede inseriria os caminhos raiz das páginas do site principal.

<!-- Captura de tela indisponível: configurações de rede do WordPress mostrando nomes de sites proibidos para evitar conflitos -->

Na configuração de _subdomain_, a possibilidade de conflitos de nomes é mitigada pelo _subdomain_, pois ele é único para o site da rede e não está relacionado de forma alguma ao site principal.

### Registro {#registration}

Nas configurações de rede do WordPress Multisite, várias novas opções de registro de usuários estão disponíveis, permitindo que usuários novos e existentes criem sites.

<!-- Captura de tela indisponível: configurações de rede do WordPress Multisite mostrando opções de registro -->

Ao contrário das instalações WordPress independentes, os sites da rede não mantêm as opções familiares para permitir registros de usuários ou atribuir esses registros a funções.

<!-- Captura de tela indisponível: configurações de registro de usuários de site WordPress independente mostrando opções limitadas -->

Quando contas de usuário são criadas, essas contas são geradas no nível da rede. Assim, em vez de pertencerem a um site específico, elas pertencem à rede. Isso tem algumas vantagens e desvantagens distintas.

Por exemplo, suponha que seu WordPress Multisite atuasse no setor de notícias e informações. Você estabeleceria o multisite e, então, criaria sites de rede para finanças, tecnologia, entretenimento e outras áreas de interesse, mantendo o controle geral de plugins e temas. Cada site da rede, por sua vez, teria um nível muito maior de controle sobre a aparência e a experiência do usuário de seu site da rede do que teria com tipos de post personalizados ou categorias de post regulares.

Nesse sentido, quando um usuário faz login, ele faz login na rede e, em última instância, também fica logado em cada site da rede para proporcionar uma experiência contínua. Se seu novo site fosse baseado em assinatura, essa seria a solução e o resultado ideais.

Se, no entanto, a natureza e o propósito pretendidos do multisite fossem oferecer sites de rede distintos que não têm relação entre si, quase sempre será necessário usar plugins externos ou adicionais para manipular as funções de usuário.

### Domínio e SSL {#domain-and-ssl}

Vamos falar sobre uma instalação WordPress Multisite que quase passa despercebida - Wordpress.com. Este é, de longe, o exemplo mais amplo de um multisite Wordpress e demonstra suas extensas capacidades de ser personalizado e moldado para cumprir um propósito.

Hoje em dia, na internet moderna, o uso de SSL é quase obrigatório, e os administradores de rede de multisites WordPress logo se deparam com esses desafios.

Na configuração de _subdomain_, os sites são criados com base no nome de domínio raiz. Assim, um site chamado ‘site1’ seria criado como ‘site1.domain.com’. Fazendo uso de um certificado SSL curinga, um administrador de rede pode enfrentar esse desafio com sucesso e fornecer recursos de criptografia SSL para a rede.

O WordPress Multisite contém uma função de mapeamento de domínios que permite que sites da rede sejam associados a nomes de domínio personalizados ou nomes de domínio diferentes do domínio raiz da rede.

Para administradores de rede, isso apresenta uma camada adicional de complexidade tanto na configuração de nomes de domínio quanto na emissão e manutenção de certificados SSL.

Nesse sentido, embora o WordPress Multisite forneça um meio para permitir que [www.anotherdomain.com](http://www.anotherdomain.com) seja mapeado para ‘site1’, o administrador da rede fica com o desafio de gerenciar externamente as entradas de DNS e a implementação de certificados SSL.

## Ultimate Multisite {#ultimate-multisite}

Compreendidas as diferenças entre uma instalação WordPress independente e uma instalação Multisite, vamos dar uma olhada em como o Ultimate Multisite é o arsenal definitivo para oferecer Websites como Serviço.

### Introdução {#introduction}

Ultimate Multisite é o seu canivete suíço quando se trata de criar um Website como Serviço (WaaS). Pense em Wix.com, Squarespace, WordPress.com e então pense em ter seu próprio serviço.

Por baixo dos panos, Ultimate Multisite faz uso do WordPress Multisite, mas faz isso de uma forma que não apenas resolve a infinidade de desafios que os administradores de rede enfrentam com instalações multisite, como também amplia os recursos, permitindo o suporte a uma ampla variedade de casos de uso.

Nas seções a seguir, veremos alguns casos de uso comuns e as considerações necessárias para dar suporte a esses casos.

### Casos de uso {#use-cases}

#### Caso 1: Uma agência {#case-1-an-agency}

Normalmente, as habilidades principais de uma agência estão no design de websites, com aspectos como hospedagem ou marketing sendo listados como serviços adicionais.

Para agências, Ultimate Multisite apresenta uma proposta de valor incrível em suas capacidades de hospedar e gerenciar vários websites em uma única plataforma. Ainda mais para agências que padronizam seus designs em themes específicos, como GeneratePress, Astra, OceanWP ou outros, que podem aproveitar as capacidades do Ultimate Multisite de ativar automaticamente esses themes para cada novo site.

Da mesma forma, com a abundância de ofertas de preços para agências em plugins comuns e populares, o uso do Ultimate Multisite permite que as agências aproveitem investimentos existentes ao fornecer uma plataforma comum a partir da qual plugins podem ser instalados, mantidos e utilizados.

Muito provavelmente, o uso de uma configuração seria desejado e, felizmente, Ultimate Multisite torna incrivelmente fácil facilitar o mapeamento de domínios e certificados SSL com suas integrações para vários provedores de hospedagem populares, bem como serviços como Cloudflare e cPanel.

Assim, ao aproveitar um desses provedores ou ao colocar Ultimate Multisite atrás do Cloudflare, aspectos como o gerenciamento de domínios e certificados SSL se tornam relativamente triviais.

Agências que preferem manter um controle rigoroso sobre a criação de sites apreciarão a facilidade com que podem criar sites e associar sites a clientes e planos por meio da interface simplificada do Ultimate Multisite.

![Interface de gerenciamento de sites do Ultimate Multisite](/img/admin/sites-list.png)

O controle rigoroso sobre plugins e themes é mantido por produto por meio das interfaces intuitivas do Ultimate Multisite, permitindo que plugins e themes sejam disponibilizados ou ocultados, bem como seu estado de ativação quando instanciados para um novo site.

![Interface de limitações de plugins do produto](/img/config/product-plugins.png)

Themes oferecem funcionalidade semelhante, permitindo que themes específicos sejam ativados ou ocultados na criação do site.

![Interface de limitações de themes do produto](/img/config/product-themes.png)

As agências encontrarão tranquilidade com Ultimate Multisite, permitindo que façam o que fazem de melhor: criar websites excepcionais.

#### Caso 2: Provedor de nicho {#case-2-niche-provider}

Há um velho ditado que diz: “faça uma coisa e faça-a bem”. Para muitos especialistas, isso significa criar um produto ou serviço em torno de uma única ideia central.

Talvez você seja um golfista apaixonado promovendo websites para clubes, ou talvez seja um gamer de esports apaixonado fornecendo websites para clãs. Talvez um indivíduo promovendo um serviço de reservas para restaurantes?

Por muitos motivos, você desejaria fornecer serviços baseados em uma estrutura e plataforma comuns. Pode ser que você tenha projetado ou investido em plugins sob medida para fornecer a funcionalidade necessária, ou pode ser o caso de que as melhores práticas do setor exijam alguma forma de abordagem padronizada para o design.

Um dos recursos inovadores do Ultimate Multisite é o uso de sites de modelo. Um site de modelo é aquele em que o theme foi instalado e ativado, os plugins necessários foram instalados e ativados, e posts ou páginas de exemplo foram criados. Quando um cliente cria um novo site com base no modelo, o conteúdo e as configurações do modelo são copiados para o site recém-criado.

Para um provedor de sites e serviços de nicho, isso oferece uma vantagem incomparável na capacidade de criar instantaneamente um site pronto para uso, com plugins personalizados e design. O cliente só precisa fornecer a entrada mais mínima para concluir o serviço.

Dependendo dos requisitos, configurações de _subdiretório_ ou _subdomínio_ podem ser adequadas; nesse caso, as escolhas de arquitetura seriam entre um certificado SSL simples para _subdiretórios_ ou um certificado SSL wildcard para _subdomínios_.

#### Caso 3: Hospedagem web WordPress {#case-3-wordpress-web-hosting}

Há uma infinidade de maneiras de hospedar sites WordPress, mas raramente é tão simples quanto fornecer espaço web a um cliente com uma versão pré-instalada do WordPress. Isso ocorre porque várias decisões e considerações precisam se alinhar para fornecer um serviço significativo.

Ultimate Multisite se destaca nessa área ao fornecer uma solução turnkey abrangente para a hospedagem de sites WordPress. Incluídos na solução estão os mecanismos centrais para fornecer serviços de assinatura, cobrança de pagamentos, formulários de checkout, vouchers de desconto e comunicações com clientes.

Grande parte do trabalho essencial necessário para instalar, configurar e manter corretamente um WordPress Multisite é facilitada pelo Ultimate Multisite, a ponto de os administradores de rede precisarem considerar apenas aspectos relacionados ao seu serviço ou nicho, como níveis de produto, preços e ofertas de serviço.

Para desenvolvedores que desejam integrar com Ultimate Multisite, a solução também oferece uma API RESTful abrangente e Webhooks para notificação de eventos.

Sem depender de uma infinidade de plugins e licenças externos, Ultimate Multisite oferece uma solução rica em recursos e comparável à do Wix, Squarespace, WordPress.com e outros.

### Considerações de arquitetura {#architecture-considerations}

Embora não seja um guia abrangente, os itens a seguir devem servir como orientação para a seleção correta de tecnologias para oferecer suporte a uma instalação do Ultimate Multisite.

#### Hospedagem compartilhada vs. dedicada {#shared-vs-dedicated-hosting}

Infelizmente, nem todos os provedores de hospedagem são iguais, e alguns praticam densidades extremas de servidores. Provedores de baixo custo normalmente geram receita maximizando a densidade dos servidores. Assim, sua instalação do Ultimate Multisite pode ser apenas um entre várias centenas de sites no mesmo servidor.

Sem as proteções adequadas implementadas pelo provedor, sites em um servidor compartilhado enfrentam o problema do “vizinho barulhento”. Ou seja, um site no mesmo servidor consumindo tantos recursos que outros sites precisam competir pelos recursos restantes. Muitas vezes, isso se manifesta como sites lentos ou que não respondem em tempo hábil.

Como provedor de hospedagem web, os efeitos em cadeia significarão que seus clientes terão velocidades ruins, baixo ranqueamento de página e altas taxas de rejeição, frequentemente resultando em perda de clientes conforme eles buscam serviços em outro lugar.

Em resumo, barato não significa bom.

Ultimate Multisite é conhecido por funcionar com vários bons provedores de hospedagem e se integra bem ao ambiente deles para fornecer funções como mapeamento de domínio e SSL automático. Esses provedores valorizam desempenho e oferecem um serviço de nível superior ao da hospedagem compartilhada.

Para obter uma lista de provedores compatíveis e instruções completas de configuração para cada um, consulte a documentação de Provedores Compatíveis.

#### Considerações de desempenho {#performance-considerations}

Ultimate Multisite não é uma aplicação lenta; pelo contrário, é notavelmente rápida. No entanto, ela funciona tão bem quanto a aplicação e a infraestrutura subjacentes, e só pode aproveitar aquilo a que tem acesso.

Considere isto: você é o administrador de rede de uma instalação do Ultimate Multisite com 100 sites. Alguns desses sites estão indo bem e atraem vários visitantes todos os dias.

Esse cenário seria diferente em uma escala menor, digamos de um a cinco sites, mas em pouco tempo os problemas de escala ficariam evidentes.

Se deixado sem atenção, o único site do Ultimate Multisite seria responsável por atender às solicitações de todos os visitantes dos sites. Essas solicitações poderiam ser de páginas PHP dinâmicas ou ativos estáticos, como folhas de estilo, javascript ou arquivos de mídia. Seja um ou cem sites, essas tarefas se tornam repetitivas, monótonas e dispendiosas. É desnecessário usar poder de CPU e memória para processar um arquivo PHP quando a saída é a mesma informação estática para cada solicitação.

Da mesma forma, uma solicitação por uma página PHP ou HTML, por sua vez, gera várias solicitações subsequentes para scripts, folhas de estilo e arquivos de imagem. Essas solicitações são direcionadas diretamente ao seu servidor Ultimate Multisite.

Seria possível resolver facilmente esse problema fazendo upgrade do servidor, mas isso não corrige um problema secundário: latências geográficas. Somente múltiplos servidores em múltiplas localidades poderiam resolver esse problema adequadamente.

Por esse motivo, a maioria dos administradores de rede usa soluções de cache de front-end e redes de distribuição de conteúdo (CDN) para atender às solicitações de páginas estáticas. Atender a essas solicitações e servir ativos antes que a solicitação chegue ao servidor economiza recursos de processamento, elimina atrasos, evita upgrades desnecessários e maximiza os investimentos em tecnologia.

Ultimate Multisite inclui um sofisticado add-on Cloudflare que permite aos administradores de rede colocar suas instalações atrás do Cloudflare e usar não apenas suas capacidades de cache, mas também hospedagem de DNS, certificados SSL e mecanismos de segurança.

#### Backups {#backups}

Seria possível pedir conselhos sobre backups a 50 pessoas e receber 50 opiniões diferentes sobre estratégias de backup. A resposta é: depende.

O que não se discute é que backups são necessários e que é quase inconcebível que eles não sejam gerenciados pelo provedor, especificamente por um que ofereça um serviço gerenciado. Consequentemente, os clientes esperarão que o administrador de rede forneça e gerencie esse serviço. A quem o administrador de rede recorre é um problema completamente diferente.

Para os fins desta seção, vamos concordar que um backup é uma cópia pontual do estado do sistema no momento em que o backup foi iniciado. Em termos simples, qualquer que seja o estado do sistema no momento do backup, esse estado é capturado e guardado no backup.

Com esse entendimento, a resposta sobre como realizar os backups e o que é melhor para o seu ambiente dependerá em grande parte dos seus requisitos e da capacidade do provedor de hospedagem de atender a esses requisitos. No entanto, na ordem do mais opinativo para o menos opinativo, as opções abaixo devem fornecer alguma orientação.

#### Snapshots {#snapshots}

Snapshots são a solução ideal para backups porque são fáceis, simples (até você querer restaurar) e “simplesmente funcionam”. No entanto, isso exige alguma ajuda do seu provedor e, em geral, se aplica apenas se você tiver um VPS (Virtual Private Server) ou algo semelhante. Vários provedores listados em nossa documentação de “Provedores Compatíveis” oferecem backups que não exigem nenhuma intervenção ou consideração adicional por parte do administrador de rede.

Enquanto backups tradicionais miram arquivos e bancos de dados, um snapshot mira o disco inteiro. Isso significa que não apenas os dados do site são capturados no snapshot, mas também o sistema operacional e a configuração. Para muitos, essa é uma vantagem distinta, pois um novo sistema pode ser criado quase instantaneamente a partir de um snapshot e colocado em operação para substituir uma instância com problemas. Da mesma forma, o processo de recuperação para obter apenas arquivos exige apenas anexar a imagem do snapshot como um disco a uma instância existente, para que os arquivos possam ser acessados e copiados.

Snapshots podem gerar um custo adicional com o provedor de hospedagem, mas são uma apólice de seguro contra acidentes.

#### Scripts externos {#external-scripts}

Parece não haver escassez de scripts e soluções externas para fazer backup de recursos do WordPress e MySQL, e eles funcionariam bem para Ultimate Multisite, pois ele é um plugin do WordPress que usa o sistema de arquivos e o banco de dados do WordPress. Assim, uma solução que faça backup de sites WordPress cobriria adequadamente as necessidades do Ultimate Multisite.

Não podemos recomendar um script em detrimento de outro, mas nosso conselho geral é executar vários testes de backup e restauração para garantir que os resultados sejam os desejados e “ter certeza absoluta” avaliando continuamente o script e sua funcionalidade, especificamente quando alguma forma de estratégia de backup diferencial é aplicada.

Deve-se observar que esses scripts, enquanto em execução, aumentarão a carga do sistema, o que deve ser levado em conta.

#### Plugins {#plugins}

Quase não há problema no WordPress que não possa ser resolvido com um plugin e, se gerenciar scripts externos não é a sua praia, talvez um plugin seja a próxima melhor opção.

Embora os plugins variem em opções e recursos, eles em geral executam a mesma função, que é fazer uma cópia dos arquivos do WordPress e do conteúdo do banco de dados. Depois disso, as funcionalidades diferem, pois alguns plugins podem enviar os backups para serviços externos, como Google Drive ou Dropbox, ou para algum tipo de serviço compatível de armazenamento de objetos, como S3, Wasabi ou outros. Os plugins mais abrangentes oferecem backups diferenciais ou algum tipo de estratégia para fazer backup apenas dos dados que foram alterados, a fim de economizar custos de armazenamento externo.

Ao selecionar seu plugin, tome cuidado para verificar se ele é compatível com multisite. Devido à sua natureza de operação, enquanto o backup estiver em execução, você pode esperar uma carga temporária no servidor até que o processo seja concluído.

#### Domínio e SSL {#domain-and-ssl-1}

Muito já foi discutido sobre nomes de domínio no modo _subdomínio_ de multisite. Uma solução quase universal para administradores de rede é usar entradas DNS curinga.

![Exemplo de configuração de entrada DNS curinga](/img/config/settings-domain-mapping.png)

Esse tipo de entrada DNS resolverá com sucesso _subdomínios_ como “site1.domain.com” e “site2.domain.com” para um endereço IP 1.2.3.4, oferecendo suporte ao Ultimate Multisite e, em maior escala, ao WordPress Multisite usando o modo _subdomínio_.

Isso pode funcionar perfeitamente bem para HTTP porque o host de destino é lido a partir dos cabeçalhos HTTP, mas raramente a web é tão simples hoje em dia, quando transações HTTPS seguras são quase obrigatórias.

Felizmente, há opções fáceis para certificados SSL. No modo _subdiretório_, um certificado de domínio regular pode ser usado. Eles estão prontamente disponíveis e gratuitamente por meio de provedores de hospedagem, que podem usar o serviço gratuito LetsEncrypt ou outra fonte. Caso contrário, eles estão disponíveis comercialmente por autoridades, se você puder gerar a solicitação de assinatura do certificado.

Para o modo _subdomínio_, o uso de um certificado SSL curinga combinará perfeitamente com um domínio curinga e permitirá que o certificado seja autoritativo para o domínio raiz e todos os _subdomínios_ sem configuração adicional.

No entanto, deve-se observar que certificados SSL curinga podem não funcionar com serviços como Cloudflare, a menos que você esteja em um plano enterprise ou defina a entrada como somente DNS, caso em que todo o cache e a otimização são ignorados.

Pronto para uso, Ultimate Multisite oferece uma solução para esse problema, demonstrando nossa ampla experiência com as necessidades de multisites WordPress. Ativar este add-on simples fará com que Ultimate Multisite use suas credenciais do Cloudflare para adicionar automaticamente entradas DNS para sites de rede no Cloudflare e definir o modo delas como “proxied”. Dessa forma, cada subsite da rede, quando criado, terá toda a proteção e os benefícios do Cloudflare, incluindo SSL.

Dependendo da natureza e do propósito da sua instalação do Ultimate Multisite, pode haver necessidade de os clientes usarem seus próprios domínios. Nesse caso, o administrador da rede fica encarregado de resolver dois problemas. Primeiro, a hospedagem do nome de domínio e, segundo, os certificados SSL para o domínio.

Para muitos, o uso do Cloudflare é uma opção fácil. O cliente só precisa colocar seu domínio no Cloudflare, apontar um CNAME para o domínio raiz do Ultimate Multisite e mapear seu domínio no Ultimate Multisite para começar a aproveitar seu nome de domínio personalizado.

Fora isso, soluções alternativas precisam ser buscadas, e é por isso que Ultimate Multisite recomenda uma lista de provedores compatíveis. Isso ocorre porque o processo de configurar DNS e SSL pode ser um processo não trivial. No entanto, com a integração do Ultimate Multisite com esses provedores, grande parte da complexidade é removida e o procedimento é automatizado.

#### Plugins {#plugins-1}

É altamente provável que você precise de plugins adicionais para fornecer funcionalidades aos seus clientes ou sites de rede. Todos os plugins funcionam com WordPress Multisite e Ultimate Multisite? Bem, depende.

Embora a maioria dos plugins possa ser instalada em um WordPress Multisite, sua ativação e licenciamento variam de autor para autor.

O desafio está em como o licenciamento é aplicado, com alguns plugins exigindo licenciamento por domínio. Isso significaria que, para alguns plugins, o administrador da rede precisa ativar manualmente a licença de cada plugin em cada novo site.

Portanto, talvez seja melhor verificar com o autor do plugin como o plugin dele funcionaria com um WordPress Multisite e quaisquer requisitos ou procedimentos especiais necessários para licenciá-lo.
