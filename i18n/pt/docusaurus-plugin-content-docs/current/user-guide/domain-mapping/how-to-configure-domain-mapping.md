---
title: Como configurar o mapeamento de domínio
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Como Configurar o Mapeamento de Domínio (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Uma das funcionalidades mais poderosas de uma rede premium é a capacidade de oferecer aos nossos clientes a chance de anexarem um domínio de nível superior aos seus sites. Afinal, o que parece mais profissional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ou [_**joesbikeshop.com**_](http://joesbikeshop.com)? É por isso que o Ultimate Multisite oferece esse recurso integrado, sem a necessidade de usar plugins de terceiros.

## O que é mapeamento de domínio?

Como o nome sugere, o mapeamento de domínio é a capacidade oferecida pelo Ultimate Multisite de receber uma solicitação de um domínio personalizado e associar essa solicitação ao site correspondente na rede com aquele domínio específico anexado.

### Como configurar o mapeamento de domínio na sua Rede Ultimate Multisite

O mapeamento de domínio exige algumas configurações da sua parte para funcionar. Felizmente, o Ultimate Multisite automatiza o trabalho pesado para que você possa atender facilmente aos requisitos.

Durante a instalação do Ultimate Multisite, o assistente copiará e instalará automaticamente o **sunrise.php** na pasta designada. **O assistente não permitirá que você prossiga até que esta etapa seja concluída**.

<!-- Screenshot unavailable: Assistente de instalação do Ultimate Multisite com a etapa sunrise.php -->

Isso significa que, assim que o assistente de instalação do Ultimate Multisite concluir a configuração da sua rede, você pode começar a mapear o domínio personalizado imediatamente.

Note que o mapeamento de domínio no Ultimate Multisite não é obrigatório. Você tem a opção de usar a função nativa de mapeamento de domínio do WordPress Multisite ou qualquer outra solução de mapeamento de domínio.

Se precisar desativar o mapeamento de domínio do Ultimate Multisite para dar lugar a outras soluções de mapeamento de domínio, você pode desativar este recurso em **Ultimate Multisite > Settings > Domain Mapping**.

![Página de configurações de Mapeamento de Domínio mostrando redirecionamento de administrador, mensagem de mapeamento e opções DNS](/img/config/domain-mapping-settings.png)

Logo abaixo desta opção, você também pode ver a opção **Force Admin Redirect** (Forçar Redirecionamento do Administrador). Esta opção permite que você controle se seus clientes conseguirão acessar o painel administrativo deles tanto no domínio personalizado quanto no subdomínio ou apenas em um deles.

Se você selecionar **Force redirect to mapped domain** (Forçar redirecionamento para domínio mapeado), seus clientes só conseguirão acessar o painel administrativo nos seus domínios personalizados.

A opção **Force redirect to network domain** (Forçar redirecionamento para domínio de rede) fará exatamente o oposto — seus clientes só terão permissão para acessar os painéis no subdomínio, mesmo que tentem fazer login nos domínios personalizados.

E a opção **Allow access to the admin by both mapped domain domain and network domain** (Permitir acesso ao administrador tanto pelo domínio mapeado quanto pelo domínio de rede) permite que eles acessem seus painéis administrativos tanto no subdomínio quanto no domínio personalizado.

![Menu suspenso de Redirecionamento do Administrador expandido mostrando as três opções de redirecionamento](/img/config/domain-mapping-redirect-options.png)

Existem duas maneiras de mapear um domínio personalizado. A primeira é mapeando o nome do domínio a partir do painel de administração da sua rede como super administrador e a segunda é através do painel de administração do subsite na página de conta.

Mas antes de começar a mapear o domínio personalizado para um dos subsites na sua rede, você precisará garantir que as **configurações DNS** do nome do domínio estejam configuradas corretamente.

### Garantindo que as configurações DNS do domínio estejam configuradas corretamente

Para que o mapeamento funcione, você precisa garantir que o domínio que planeja mapear esteja apontando para o endereço IP da sua Rede. Observe que você precisa do endereço IP da Rede — o endereço IP do domínio onde o Ultimate Multisite está instalado — e não do endereço IP do seu domínio personalizado que você quer mapear. Para procurar o endereço IP de um domínio específico, sugerimos ir em [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), por exemplo.

Para mapear o domínio corretamente, você precisa adicionar um **A RECORD** na sua configuração de **DNS** apontando para esse **endereço IP**. A gestão de DNS varia muito entre diferentes registradores de domínio, mas há muitos tutoriais online sobre isso se você pesquisar por " _Criando um A Record no XXXX_ ", onde XXXX é o seu registrador de domínio (ex.: " _Criando um A Record no_ _GoDaddy_ ").

Se você estiver com dificuldades para fazer isso funcionar, **entre em contato com o suporte do seu registrador de domínio** e eles poderão ajudar nessa parte.

Se você planeja permitir que seus clientes mapeiem seus próprios domínios, eles terão que fazer esse trabalho por conta própria. Oriente-os a procurar o sistema de suporte do próprio registrador se não conseguirem criar o A Record.

### Mapeando um nome de domínio personalizado como Super Administrador

Quando estiver logado como super administrador na sua rede, você pode adicionar e gerenciar nomes de domínio personalizados facilmente indo em **Ultimate Multisite > Domains**.

![Página da lista de domínios no Ultimate Multisite](/img/admin/domains-list.png)

Nesta página, você pode clicar no botão **Adicionar Domínio** no topo e isso abrirá uma janela modal onde você poderá definir e preencher o **nome de domínio personalizado**, **o subsistema** ao qual deseja aplicar o nome de domínio personalizado e decidir se deseja configurá-lo como o **domínio principal** ou não (observe que você pode mapear **múltiplos nomes de domínio para um único subsistema**).

![Modal Adicionar Domínio com nome de domínio, seletor de site e alternância de domínio principal](/img/admin/domain-add-modal.png)

Depois de inserir todas as informações, você pode clicar no botão **Adicionar Domínio Existente** na parte inferior.

Isso iniciará o processo de verificação e busca das informações DNS do domínio personalizado. Você também verá um log na parte inferior da página para acompanhar o processo que está sendo realizado. Este processo pode levar alguns minutos para ser concluído.

O Ultimate Multisite v2.13.0 também cria automaticamente o registro de domínio interno quando um novo site é criado em um host que deve ser tratado como um domínio por site. Se o host for o domínio principal da rede, ou um dos domínios base do formulário de checkout compartilhados configurados no campo **Site URL**, o registro de domínio mapeado automaticamente é ignorado para que o domínio base compartilhado permaneça disponível para todos os sites que o utilizam.

O **Status** ou estágio deve mudar de **Verificando DNS** para **Pronto** se tudo estiver configurado corretamente.

<!-- Screenshot unavailable: Linha do domínio mostrando o estágio Verificando DNS na lista de domínios -->

<!-- Screenshot unavailable: Linha do domínio mostrando o estágio Pronto com o indicador de status verde -->

Se você clicar no nome do domínio, poderá ver algumas opções dentro dele. Vamos dar uma olhada rápida nelas:

![Página de detalhes do domínio com alternâncias de estágio, site, ativo, principal e SSL](/img/admin/domain-edit.png)

**Estágio:** Esta é a fase em que o domínio se encontra. Quando você adiciona um domínio pela primeira vez, ele provavelmente estará na etapa **Verificando DNS**. O processo verificará as entradas de DNS e confirmará se estão corretas. Em seguida, o domínio será colocado na etapa **Verificando SSL**. O Ultimate Multisite verificará se o domínio possui SSL ou não e categorizará seu domínio como **Pronto** ou **Pronto (sem SSL)**.

**Site:** É o subdomínio associado a este domínio. O domínio mapeado exibirá o conteúdo deste site específico.

**Ativo:** Você pode ligar ou desligar esta opção para ativar ou desativar o domínio.

**É Domínio Principal?:** Seus clientes podem ter mais de um domínio mapeado para cada site. Use esta opção para selecionar se este é o domínio principal para o site específico.

**É Seguro?:** Embora o Ultimate Multisite verifique se o domínio possui um certificado SSL ou não antes de ativá-lo, você pode selecionar manualmente para carregar o domínio com ou sem um certificado SSL. Observe que se o site não tiver um certificado SSL e você tentar forçar o carregamento com SSL, isso pode gerar erros.

### Mapear nome de domínio personalizado como subsite do usuário

Os administradores do subsite também podem mapear nomes de domínio personalizados a partir do painel de administração do subsite.

Primeiro, você precisa garantir que habilite esta opção nas configurações de **Mapeamento de Domínio**. Veja a captura de tela abaixo.

<!-- Screenshot unavailable: Configurações de mapeamento de domínio permitindo que usuários de subsite mapeiem domínios via alternância de Gerenciamento de DNS do Cliente -->

Você também pode definir ou configurar esta opção no nível **Plano** ou nas opções do produto em **Ultimate Multisite > Produtos**.

![Seção de Domínios Personalizados na página de edição do produto](/img/config/product-custom-domains.png)

Quando uma das opções é ativada e um usuário de subsite tem permissão para mapear nomes de domínio personalizados, o usuário do subsite verá uma metabox na página **Conta** chamada **Domínios**.

<!-- Screenshot unavailable: metabox de Domínios na página Conta do subsite com botão Adicionar Domínio -->

O usuário pode clicar no botão **Adicionar Domínio** e isso abrirá uma janela modal com algumas instruções.

<!-- Screenshot unavailable: modal Adicionar Domínio mostrando instruções de registro DNS A para usuários de subsite -->

Em seguida, o usuário pode clicar em **Próximo Passo** e prosseguir para adicionar o nome do domínio personalizado. Eles também podem escolher se este será o domínio principal ou não.

<!-- Screenshot unavailable: formulário Adicionar Domínio com campo de nome de domínio personalizado e alternância de domínio principal -->

<!-- Screenshot unavailable: passo de confirmação Adicionar Domínio que aciona a verificação DNS -->

Clicar em **Adicionar Domínio** iniciará o processo de verificação e busca das informações de DNS do domínio personalizado.

### Sobre Sincronização de Domínios (Domain Syncing)

A Sincronização de Domínios é um processo onde o Ultimate Multisite adiciona o nome do domínio personalizado à sua conta de hospedagem como um domínio adicional **para que o mapeamento do domínio funcione**.

A sincronização automática acontece se o seu provedor de hospedagem tiver integração com o recurso de mapeamento de domínio do Ultimate Multisite. Atualmente, esses provedores de hospedagem são _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ e _Cpanel._

Quando uma integração com o provedor de hospedagem está ativa, o Ultimate Multisite também pode enfileirar a tarefa de criação de DNS ou subdomínio do lado do provedor para sites recém-criados. Se nenhum provedor estiver escutando por essa tarefa, o job em segundo plano é pulado para evitar entradas no queue que não fazem nada (no-op). As verificações de DNS e SSL para domínios mapeados continuam a ser executadas através do processo normal de estágio do domínio.

Você precisará ativar esta integração nas configurações do Ultimate Multisite na aba **Integration**.

![Aba Integrações nas configurações do Ultimate Multisite mostrando provedores de hospedagem](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Links de Configuração do Provedor de Hospedagem na aba Integrações -->

_Nota: se o seu provedor de hospedagem não estiver entre os mencionados acima, **você precisará sincronizar ou adicionar manualmente o nome do domínio** à sua conta de hospedagem._
