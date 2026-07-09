---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite é un plugin de WordPress Multisite que te permite ofrecer WaaS ou Websites as a Service aos clientes. Antes de nos adentrarmos e aprender como o Ultimate Multisite pode ajudar o teu negócio e os clientes, há algum conhecimento fundamental que precisamos de adquirir.

## O WordPress Multisite {#the-wordpress-multisite}

A maioria de nós está familiarizada com a instalação padrão do WordPress. Ou crias unha através do painel de controlo do teu provedor de alojamento ou, para os valentes, configuras un novo servidor web e base de datos, baixas os ficheiros principais e inicias o processo de instalação.

Isto funciona para millóns de sitios WordPress por todo o mundo, mas da perspetiva de uma agência ou provedor de alojamento, vamos discutir volumes por um momento.

Embora seja fácil criar um único site WordPress ou até cem através de um painel de controlo automatizado, os problemas começam a aparecer em breve quando chega à gestão destes sites. Sem gerir, és um alvo principal para malware. Gerir significa um esforço e recursos, e embora existam ferramentas e plugins externos disponíveis para ajudar a simplificar a gestão e administração dos sites WordPress, o facto de os clientes manterem acesso administrativo significa que estes esforços podem ser facilmente derrotados.

No seu núcleo, o WordPress fornece uma funcionalidade simplesmente chamada ‘Multisite’ que remonta às suas origens em 2010 com o lançamento do WordPress 3.0. Desde então recebeu várias revisões destinadas a introduzir novas funcionalidades e apertar a segurança.

Em essência, um WordPress multisite pode ser pensado como isto: Uma Universidade mantém uma única instalação de WordPress, mas cada faculdade mantém o seu próprio site WordPress.

Para desglosar esta frase, e vamos echar un olhé a algun terminolóxico básico que se ve non só na documentación de Ultimate Multisite, senón tamén en toda a comunidade WordPress.

### A Rede (The Network) {#the-network}

En termos de WordPress, unha rede multisite é onde se poden gestionar moitos subsaitos a partir dun único dashboard. Aínda que a creación dunha rede multisite difere entre provedores de aloita, o resultado final sol énsempre algunhas directrix adicionais no ficheiro wp-config.php para deixar saber a WordPress que está operando en este modo específico.

Existe unha serie de diferencias distintas entre unha rede multisite e unha instalación de WordPress independiente, que discutiremos brevemente.

#### Subdomínio vs. Subdirectorio (Subdomain vs. Subdirectory) {#subdomain-vs-subdirectory}

Unas das decisións máis inmediatas que terás de tomar é se a instalación multisite operará con _subdirectorio_ ou _subdomínios_. Ultimate Multisite funciona igualmente ben con ambas opcións, pero existen algunhas diferencias arquitectónicas entre as dúas configuracións.

No configuración de _subdirectorio_, os sitios da rede heradan un camiño (path) basado no nome principal do dominio. Por exemplo, un sitio da rede etiquetado como ‘site1’ terá o seu URL completo como https://domain.com/site1. No configuración de _subdomínio_, o sitio da rede terá o seu propio _subdomínio_ derivado do nome principal do dominio. Así, un sitio etiquetado como ‘site1’ terá o seu URL completo como https://site1.domain.com/.

A pesar de que ambas opcións son elección perfectamente válidas, o uso de _subdomínios_ ofrece unha serie de ventajas, pero tamén requiere máis reflexión e planeamento na súa arquitectura.

Em termos de DNS, o uso de _subdiretórios_ apresenta um desafio relativamente simples. Como os sites de rede são simplesmente filhos do caminho principal, só é necessário existir uma única entrada de nome de domínio para o nome de domínio principal. Para _subdomínios_, o desafio é um pouco mais complexo e requer ou uma entrada CNAME separada para cada site de rede ou uma entrada curinga (*) nos registos DNS.

Outra área a considerar é a do SSL e da emissão e uso de certificados SSL. Na configuração de _subdiretório_, pode ser usado um único certificado de domínio, já que os sites de rede são simplesmente caminhos do nome de domínio principal. Assim, um certificado para domain.com fornecerá adequadamente o SSL para https://domain.com/site1, https://domain.com/site2 e assim por diante.

Na configuração de _subdomínio_, o uso de um certificado SSL curinga é uma das opções mais comuns. Este tipo de certificado SSL fornece encriptação para um domínio e os seus _subdomínios_. Portanto, um certificado SSL curinga fornecerá encriptação para https://site1.domain.com, https://site2.domain.com e até para domain.com em si.

Embora existam outras opções, estas são muitas vezes limitadas no âmbito e na aplicação e requerem configuração e consideração adicionais quanto à adequação.

#### Plugins e Temas {#plugins-and-themes}

O que o WordPress dá também, pelo menos do ponto de vista do cliente, é tirar. Numa instalação autónoma do WordPress, se o administrador do site instalar um plugin mau ou não mantiver a sua instalação atualizada, a única vítima e prejuízo deste ato é ele próprio. No entanto, um administrador de site que instala um plugin mau numa instalação multisite cria uma vítima para todos os sites instalados na rede.

Por esta razón, cuando se configura como un WordPress multisite, se elimina la capacidad de los administradores del sitio para instalar plugins y temas y en su lugar se mueve esa capacidad al rol de administrador de red o 'super administrador' recién creado. Este rol privilegiado puede decidir si permite a los administradores de los sitios de la red ver o acceder al menú de plugins en su dashboard y, si es así, si esos permisos se extienden a _activar_ o _desactivar_ plugins.

Hasta este punto, el administrador de red es responsable de instalar plugins y temas en toda la red y delega los permisos para que los sitios de la red puedan usar estos plugins y temas. Los administradores del sitio no pueden instalar plugins ni acceder a plugins y temas que no les hayan sido asignados a su sitio.

#### Usuarios y Administradores {#users-and-administrators}

En un WordPress Multisite, todos los sitios de la red comparten la misma base de datos y, por lo tanto, comparten los mismos usuarios, roles y capacidades. La forma más fácil de entenderlo es que todos los usuarios son miembros de la red y no de un sitio en particular.

Dado este entendimiento, puede ser indeseable permitir la creación de usuarios y por esta razón WordPress Multisite elimina esta capacidad de los administradores del sitio y la mueve al rol de administrador de red. A su vez, el administrador de red puede delegar los privilegios necesarios a un administrador del sitio para que pueda crear cuentas de usuario para su propio sitio.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Repitiendo lo anterior, aunque las cuentas de usuario parezcan estar relacionadas con el sitio en el que se encuentran, en realidad están asignadas a la red y por lo tanto deben ser únicas en toda la red. Puede haber casos en los que los nombres de usuario no estén disponibles para registrarse debido a esta razón.

Apesar de non ser un concepto estranxe nos sistemas empresariais, esta única fonte de registo e autenticación de usuarios é a menudo difícil de entender para as persoas que están familiarizadas con instalacións de WordPress independientes onde a administración do usuario é algo máis fácil.

#### Media {#media}

Donde os sitios en rede comparten unha única base de datos en un WordPress Multisite, mantén camiños separados no sistema de arquivos para os ficheiros de media.

A localización estándar de WordPress (wp-content/uploads) permanece; non obstante, o seu camiño se modifica para reflejar o ID único do sitio en rede. Consecuentemente, os ficheiros de media para un sitio en rede aparecen como wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Mencionamos antes que existen ventajas distintivas da configuración de _subdomínio_ sobre a de _subdirectorio_, aquí están: camiños.

Numa configuración de _subdirectorio_, o sitio principal (o primeiro sitio criado no momento de establecer a rede) e os subsites en rede deben compartir o mesmo camiño que se dirige do nome do dominio. Isto pode ter un gran potencial de conflitos.

Para as entradas, se añade un camiño obligatorio /blog/ ao sitio principal para evitar choques con os sitios en rede. Isto significa que permalinks bonitos como ‘Nome da entrada’ se presentarán como domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Numa configuración de _subdomínio_, esta acción non é necesaria porque cada sitio en rede beneficia da separación completa do dominio e, así, non necesita depender de un único camiño. En cambio, mantén os seus propios camiños distintos basados no seu _subdomínio_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Páxinas Estáticas {#static-pages}

Na configuración de _subdirectory_ o subdirectorio, a possibilidade de conflitos de nomes estende-se até às páginas estáticas como o site principal e os sites da rede partilham o mesmo caminho.

Para evitar isto, o WordPress dá uma forma de bloquear certos nomes de sites para que não colidam com os nomes do primeiro site. Normalmente, o administrador da rede introduziria os caminhos raiz das páginas do site principal.

<!-- Screenshot unavailable: Configurações de rede do WordPress mostrando nomes de sites banidos para evitar conflitos -->

Na configuração de _subdomain_ ou subdomínio, a possibilidade de conflitos de nomes é mitigada pelo _subdomain_, pois ele é único ao site da rede e não tem qualquer relação com o site principal.

### Registo (Registration) {#registration}

Dentro das configurações de rede do WordPress Multisite, estão disponíveis várias novas opções de registo de utilizadores que permitem aos novos e existentes utilizadores criar sites.

<!-- Screenshot unavailable: Configurações de rede do WordPress Multisite mostrando opções de registo -->

Ao contrário das instalações do WordPress isoladas (stand-alone), os sites da rede não mantêm as opções familiares para permitir o registo de utilizadores ou atribuir esses registos a papéis (roles).

<!-- Screenshot unavailable: Configurações de registo de utilizador do site standalone do WordPress mostrando opções limitadas -->

Quando são criadas contas de utilizador, essas contas são geradas no nível da rede. Assim, em vez de pertencerem a um site em particular, pertencem à rede. Isto tem algumas vantagens e desvantagens distintas.

Por exemplo, imagine que o seu WordPress Multisite estivesse no ramo das notícias e informação. Você criaria o multisite e depois criaria sites de rede para finanças, tecnologia, entretenimento e outras áreas de interesse, mantendo o controlo geral dos plugins e temas. Cada site de rede teria, por sua vez, um nível muito maior de controlo sobre a aparência e a experiência do utilizador do seu site de rede do que os tipos de posts personalizados ou as categorias de posts normais.

N este sentido, quando um utilizador inicia sessão, ele inicia sessão na rede e, no final, está logado em cada site de rede também para proporcionar uma experiência sem interrupções. Se o seu novo site fosse baseado em subscrição, esta seria a solução ideal e o resultado esperado.

No entanto, se a natureza e o propósito pretendidos do multisite fossem oferecer sites de rede díspares que não têm qualquer relação entre si, é quase sempre necessário usar plugins externos ou adicionais para manipular os papéis dos utilizadores.

### Domínio e SSL {#domain-and-ssl}

Vamos falar de uma instalação WordPress Multisite que quase nos escapa a atenção: o Wordpress.com. Este é de longe o exemplo mais extenso de um WordPress multisite e demonstra as suas vastas capacidades de ser personalizado e moldado para cumprir um propósito.

Hoje na internet moderna, o uso de SSL é quase obrigatório e os administradores de rede de WordPress multisites são rapidamente apresentados a estes desafios.

Na configuração de _subdomínio_, os sites são criados com base no nome de domínio raiz. Assim, um site rotulado como ‘site1’ seria criado como ‘site1.domain.com’. Usando um certificado SSL curinga (wildcard), um administrador de rede pode resolver com sucesso este desafio e fornecer capacidades de encriptação SSL para a rede.

O WordPress Multisite contén unha función de mapeo de domínios que permite asociar sitios de rede con nomes de dominios personalizados ou nomes de dominios diferentes do dominio raíz da rede.

Para os administradores de rede, isto representa unha capa adicional de complexidade tanto na configuración dos nomes de dominios como na emisión e mantenimiento de certificados SSL.

A esta altura, aunque o WordPress Multisite proporciona un medio para mapear [www.anotherdomain.com](http://www.anotherdomain.com) a 'site1', ao administrador de rede lle resta o desafío de gestionar externamente as entradas DNS e da implementación de certificados SSL.

## Ultimate Multisite {#ultimate-multisite}

Com que se entende as diferencias entre unha instalación de WordPress stand-alone e unha instalación Multisite, vemos como Ultimate Multisite é o arsenal definitivo para proporcionar Websites as a Service (WaaS).

### Introdución {#introduction}

Ultimate Multisite é o teu cuchillo suizo cando se trata de crear un Website as a Service (WaaS). Pensa en Wix.com, Squarespace, WordPress.com e pensa despois en ser dono do teu propio servicio.

Por dentro, Ultimate Multisite utiliza WordPress Multisite, pero o faz de unha forma que non só resuelve a miríade de desafíos que enfrentan os administradores de rede con as instalacións multisite, senón que mejora as capacidades permitindo que se apoien unha gran variedade de casos de uso.

Nas seguintes secciones veremos algúns casos de uso comunes e consideracións necesarias para apoiar esos casos.

### Casos de Uso {#use-cases}

#### Caso 1: Un Agencía {#case-1-an-agency}

Tipicamente as habilidades centrais dunha agencía residen no diseño de websites con aspectos como o seu alojamiento ou marketing listados como servizos adicionais.

Para agencias, o Ultimate Multisite ofrece unha propuesta de valor increíble na súa capacidade de albergue e tamizaje de múltiples sitios web en unha única plataforma. Ainda máis para agencias que estandardizan os seus deseños en temas específicos como GeneratePress, Astra, OceanWP ou outros poden aproveitar as capacidades do Ultimate Multisite para activar automáticamente estes temas para cada novo sitio.

Da mesma forma, con a abundancia de ofertas de precios para plugins comunes e populares de agencia, o uso do Ultimate Multisite permite ás agencias aprovechar os investimentos existentes ao proporcionar unha plataforma común da cual os plugins poden instalarse, tamizarse e utilizarse.

É máis probable que se desee o uso dunha configuración e, felizmente, o Ultimate Multisite facilita de forma moi fácil o mapeo de dominios e certificados SSL coas súas integracións con moitos proveedores de albergaxe populares, así como servizos como Cloudflare e cPanel.

Así, ao aprovechar unha destas plataformas ou ao colocar o Ultimate Multisite detrás de Cloudflare, aspectos como a tamizaje de dominios e certificados SSL se convertén en algo bastante sencillo.

As agencias que prefiren manter un controlo estrito sobre a creación de sitios apreciarán a facilidade con que poden crear sitios e asociar os sitios co clientes e os planos a través da interfaz simplificada do Ultimate Multisite.

![Interfaz de tamizaje de sitios web Ultimate Multisite](/img/admin/sites-list.png)

O controlo estrito sobre os plugins e os temas se mantén en base ao producto a través das interfaces intuitivas do Ultimate Multisite, que permiten que os plugins e os temas se poidan disponibilizar ou ocultar, así como o estado da súa activación cando se instancian para un novo sitio.

![Interfaz de limitación de plugins de produto](/img/config/product-plugins.png)

Os temas proporcionán funcionalidades parecidas, permitindo activar ou ocultar certos temas na creación do sitio web.

![interface de limitación de temas de producto](/img/config/product-themes.png)

As agencias encontrarão tranquilidade com o Ultimate Multisite, permitindo que façan o que fazem de melhor: diseñar sitios web excecionais.

#### Caso 2: Provedor de Nicho {#case-2-niche-provider}

Há um ditado antigo que diz: "faça uma coisa e faça-a bem". Para muitos especialistas, isto significa criar um produto ou serviço em torno de uma ideia central única.

Talvez sejas un ou avid golfe que promove websites a clubes ou podes ser un gamer de esports avinant que fornece websites a clãs. Un indivíduo que promove un serviço de reserva a restaurantes, talvez?

Por muitas razas querrás fornecer serviços baseados num quadro e plataforma comuns. Pode ser que dixas ou investiste en plugins personalizados para proporcionar a funcionalidade necessária, ou pode ser o caso de as melhores práticas da indústria exigirem alguma forma de abordagem padronizada no design.

Uma das características inovadoras do Ultimate Multisite é o uso de template sites. Un template site é onde o tema está instalado e ativado, os plugins necessários estão instalados e ativados, e posts ou páginas de amostra foram criados. Quando un cliente cria un novo sitio baseado no template, o conteúdo e as configurações do template são copiados para o sitio recém-criado.

Para un provedor de sitios e serviços de nicho, isto proporciona unha ventaja inigualable na capacidade de crear instantaneamente un sitio listo para usar con plugins e design personalizados. O cliente só necesita proporcionar a entrada mínima para completar o servicio.

Dependendo dos requisitos, tanto as configurações de _subdiretório_ quanto as de _subdomínio_ podem ser adequadas; nesse caso, as escolhas arquitetônicas ficam entre um certificado SSL simples para _subdiretórios_ ou um certificado SSL curinga (wildcard) para _subdomínios_.

#### Caso 3: Hospedagem WordPress {#case-3-wordpress-web-hosting}

Existem inúmeras maneiras de hospedar sites WordPress, mas raramente é tão simples quanto fornecer espaço web a um cliente com uma versão pré-instalada do WordPress. Isso ocorre porque várias decisões e considerações precisam se juntar para oferecer um serviço significativo.

O Ultimate Multisite destaca-se nesta área ao fornecer uma solução completa "chave na mão" (turnkey) para a hospedagem de sites WordPress. A solução inclui os mecanismos centrais para fornecer serviços de assinatura, coleta de pagamentos, formulários de checkout, cupons de desconto e comunicações com o cliente.

Grande parte do trabalho essencial necessário para instalar, configurar e manter um WordPress Multisite corretamente é facilitado pelo Ultimate Multisite, pois os administradores de rede só precisam considerar aspectos relacionados ao seu serviço ou nicho, como níveis de produto, preços e ofertas de serviço.

Para desenvolvedores que desejam integrar-se com o Ultimate Multisite, a solução também oferece uma API RESTful completa e Webhooks para notificação de eventos.

Sem depender de inúmeros plugins e licenças externas, o Ultimate Multisite fornece uma solução rica em recursos e comparável à do Wix, Squarespace, WordPress.com e outros.

### Considerações Arquitetônicas {#architecture-considerations}

Embora não seja um guia completo, os seguintes itens devem servir de orientação para a correta seleção das tecnologias que suportarão uma instalação do Ultimate Multisite.

#### Hospedagem Compartilhada vs. Dedicada {#shared-vs-dedicated-hosting}

Infelizmente, todos os provedores de alojamento não são iguais e alguns praticam densidades de servidor extremas. Os provedores de baixo custo geralmente geram receita ao maximizar a densidade do servidor. Como tal, a sua instalação Ultimate Multisite pode ser apenas uma de várias centenas de sites no mesmo servidor.

Sem salvaguardas adequadas por parte do provedor, os sites num servidor partilhado experimentam o problema do 'vizinho barulhento' (*noisy neighbour*). Ou seja, um site no mesmo servidor a consumir tantos recursos que os outros têm de competir pelos recursos restantes. Muitas vezes isto manifesta-se como sites lentos ou que não respondem a tempo.

Como provedor de alojamento web, o fluxo de efeitos significa que os seus clientes experimentam velocidades baixas, baixo ranqueamento de página e altas taxas de rejeição, resultando frequentemente na perda de clientes à medida que procuram serviços noutros sítios.

Em suma, barato não significa bom.

O Ultimate Multisite é conhecido por funcionar com vários provedores de alojamento bons e integra-se bem no ambiente deles para fornecer funções como mapeamento de domínio e SSL automático. Estes provedores valorizam o desempenho e fornecem um serviço de melhor qualidade do que o alojamento partilhado (*shared hosting*).

Para uma lista de provedores compatíveis e instruções completas de configuração para cada um, consulte a documentação dos Provedores Compatíveis (*Compatible Providers*).

#### Considerações de Desempenho {#performance-considerations}

O Ultimate Multisite não é uma aplicação lenta, pelo contrário, é notavelmente rápido. No entanto, funciona apenas tão bem quanto a aplicação subjacente e a infraestrutura, podendo aproveitar apenas o que tem acesso.

Pense nisto: É o administrador da rede de uma instalação Ultimate Multisite com 100 sites. Alguns desses sites estão a funcionar bem e atraem um número de visitantes do website todos os dias.

Este escenario sería diferente en una escala más pequeña, digamos de uno a cinco sitios, pero antes de que surjan problemas de escala se notarán.

Si no se atiende, el único sitio Ultimate Multisite sería responsable de satisfacer las peticiones de todos los visitantes de los sitios. Estas peticiones podrían ser para páginas PHP dinámicas o activos estáticos como hojas de estilo (stylesheets), javascript o archivos multimedia. Ya sea uno o cien sitios, estas tareas se vuelven repetitivas, monótonas y desperdiciadoras. No es necesario usar la potencia de CPU y memoria para procesar un archivo PHP cuando el resultado es la misma información estática para cada petición.

De manera similar, una sola petición para una página PHP o HTML genera múltiples peticiones subsiguientes para scripts, hojas de estilo e imágenes. Estas peticiones están dirigidas directamente a tu servidor Ultimate Multisite.

Se podría resolver este problema fácilmente actualizando el servidor, pero eso no soluciona un problema secundario: las latencias geográficas. Solo múltiples servidores en múltiples ubicaciones podrían abordar correctamente este problema.

Por esta razón, la mayoría de los administradores de red utilizan soluciones de caché front-end y redes de distribución de contenido (CDN) para satisfacer las peticiones de páginas estáticas. Satisfacer estas peticiones y servir activos antes de que la petición llegue al servidor ahorra recursos de procesamiento, elimina retrasos, evita actualizaciones innecesarias y maximiza las inversiones en tecnología.

Ultimate Multisite incluye un sofisticado add-on de Cloudflare que permite a los administradores de red colocar sus instalaciones detrás de Cloudflare y aprovechar no solo sus capacidades de caché, sino también el alojamiento de DNS, certificados SSL y mecanismos de seguridad.

#### Copias de seguridad (Backups) {#backups}

Se podría pedir consejo a 50 personas sobre copias de seguridad y recibir 50 opiniones diferentes sobre estrategias de backup. La respuesta es: depende.

O que non está em disputa é que os backups são necessários e que é quase inconcebível que estes não sejam geridos pelo provedor, especificamente um que oferece um serviço gerenciado. Consequentemente, os clientes vão procurar o administrador de rede para fornecer e gerir este serviço. Quem o administrador de rede procura é um problema inteiramente diferente.

Para os fins desta sección, vamos concordar que um backup é uma cópia do estado do sistema num momento específico, no tempo em que o backup foi iniciado. Em termos simples, o que for o estado do sistema no momento do backup, esse estado é capturado e guardado no backup.

Com este entendimento, a resposta sobre como realizar os backups e o que é melhor para o seu ambiente dependerá em grande parte das suas necessidades e da capacidade do provedor de hospedagem de satisfazer essas necessidades. No entanto, na ordem do mais opinativo ao menos opinativo, as opções abaixo devem fornecer alguma orientação.

#### Snapshots (Capturas) {#snapshots}

Os snapshots são a solução mágica para os backups porque são fáceis, descomplicados (até querer restaurar) e "simplesmente funcionam". No entanto, requerem alguma ajuda do seu provedor e aplicam-se principalmente se tiver um VPS (Servidor Privado Virtual) ou algo semelhante. Vários provedores listados na nossa documentação de 'Provedores Compatíveis' oferecem backups que não exigem mais intervenção ou consideração por parte do administrador de rede.

Onde os backups tradicionais apuntan para ficheiros e bases de dados, um snapshot apanha todo o disco. Isto significa que não só os dados do site são capturados no snapshot, mas também o sistema operativo e a configuração. Para muitos isto é uma vantagem clara, pois um novo sistema pode ser criado quase instantaneamente a partir de um snapshot e colocado em funcionamento para substituir uma instância com problemas. Da mesma forma, o processo de recuperação para recuperar ficheiros só requer anexar a imagem do snapshot como um disco a uma instância existente para que os ficheiros possam ser acedidos e copiados.

Os snapshots podem trazer um custo adicional com o provedor de alojamento, mas são uma apólice de seguro contra acidentes.

#### Scripts Externos {#external-scripts}

Parece haver muita solução externa para fazer backup dos recursos WordPress e MySQL e estas funcionariam bem para Ultimate Multisite, já que é um plugin WordPress que usa o sistema de ficheiros e a base de dados do WordPress. Assim, uma solução que faça backup dos sites WordPress cobriria adequadamente as necessidades do Ultimate Multisite.

Não podemos recomendar um script em detrimento de outro, mas o nosso conselho geral é fazer vários testes de backup e restauração para garantir que os resultados são os desejados e 'ter certeza absoluta' ao avaliar continuamente o script e a sua funcionalidade, especialmente onde se aplica algum tipo de estratégia de backup diferencial.

Deve-se notar que estes scripts, enquanto estão a funcionar, aumentarão a carga do sistema, o que deve ser levado em conta.

#### Plugins {#plugins}

Quase não há problema no WordPress que não possa ser resolvido com um plugin e, se gerir scripts externos não é o seu forte, talvez um plugin seja a melhor próxima opção.

Enquanto os plugins varían en opción e funcionalidades, na maior parte fazem a mesma função: copiar os ficheiros do WordPress e o conteúdo do banco de dados. Depois disso, as funcionalidades diferem, pois alguns plugins podem enviar os backups para serviços externos como Google Drive ou Dropbox, ou para algum serviço de armazenamento de objetos compatível, como S3, Wasabi ou outros. Os plugins mais completos oferecem backups diferenciais ou alguma estratégia para fazer backup apenas dos dados que mudaram, poupando assim custos de armazenamento externo.

Ao escolher o seu plugin, tenha cuidado para verificar se ele é compatível com multisite. Devido à sua natureza de funcionamento, enquanto o backup estiver a correr, pode esperar uma carga temporária no servidor até o processo terminar.

#### Domínio e SSL {#domain-and-ssl-1}

Já se falou muito sobre nomes de domínio no modo _subdomínio_ do multisite. Uma solução quase universal para os administradores de rede é usar entradas DNS curinga (wildcard).

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Este tipo de entrada DNS resolverá com sucesso _subdomínios_ como ‘site1.domain.com’ e ‘site2.domain.com’ para um endereço IP de 1.2.3.4, suportando assim o Ultimate Multisite e, em maior medida, o WordPress Multisite no modo _subdomínio_.

Isto pode funcionar perfeitamente bem para HTTP porque o host de destino é lido a partir dos cabeçalhos HTTP, mas raramente a web é tão simples hoje em dia que as transações seguras HTTPS sejam quase obrigatórias.

Felizmente, hai opcións fáceis para certificados SSL. No modo _subdirectory_ podes usar un certificado de dominio normal. Estes están prontos e sen libres dos proveedores de *hosting* que poden usar o servicio gratuito LetsEncrypt ou outra fonte. De outra forma, son comercialmente dispoñibles das autoridade se podes crear a solicitude de assinatura do certificado.

No modo _subdomain_ o uso dun certificado SSL wildcard combinará perfectamente con un dominio wildcard e permitirá que o certificado sexa autoritativo para o dominio raíz e todas as _subdominios_ sen configuración extra.

Non obstante, debe saír en conto que os certificados SSL wildcard poden non funcionar con servizos como Cloudflare a menos que esteas en un plan empresarial ou establezas a entrada só en DNS, no caso deso todos os *caching* e optimización se burlan.

Ultimate Multisite listo para usar proporciona unha solución a este problema demostrando a nosa vasta experiencia coas necesidades dos multisites de WordPress. A activar este simple add-on fará que Ultimate Multisite use as túas credenciais de Cloudflare para añadir automáticamente entradas DNS para os sitios de rede en Cloudflare e establecer o modo como 'proxied'. Desta forma, cada subsite de rede, ao ser creado, terá a cita completa e os beneficios de Cloudflare incluído o SSL.

Dependendo da natureza e do propósito da túa instalación Ultimate Multisite, pode ser necesario que os clientes usen os seus propios dominios. Neste caso, o administrador de rede está obrigado a resolver dúas persoas: unha, o *hosting* do nome do dominio e a outra, os certificados SSL para o dominio.

Para muitos, usar o Cloudflare é uma opção fácil. O cliente só precisa colocar o seu domínio no Cloudflare, apontar um CNAME para o domínio raiz do Ultimate Multisite e mapear o seu domínio no Ultimate Multisite para começar a aproveitar o nome de domínio personalizado.

Fora disto, é preciso procurar soluções alternativas, por isso o Ultimate Multisite recomenda uma lista de Provedores Compatíveis. Isto porque o processo de configurar DNS e SSL pode ser um processo não trivial. No entanto, com a integração do Ultimate Multisite com estes provedores, a complexidade é muito reduzida e o procedimento é automatizado.

#### Plugins {#plugins-1}

É muito provável que precise de plugins adicionais para fornecer funcionalidades aos teus clientes ou sites da rede. Todos os plugins funcionam com WordPress Multisite e Ultimate Multisite? Bem, depende.

Embora a maioria dos plugins possa ser instalada num WordPress Multisite, a sua ativação e licenciamento variam de autor para autor.

O desafio reside em como o licenciamento é aplicado com alguns plugins que exigem licenciamento por domínio. Isto significa que, para alguns plugins, o administrador da rede precisa ativar manualmente a licença para cada plugin em cada novo site.

Portanto, pode ser melhor verificar com o autor do plugin como funcionaria o seu plugin com um WordPress Multisite e quaisquer requisitos ou procedimentos especiais necessários para o licenciamento dele.
