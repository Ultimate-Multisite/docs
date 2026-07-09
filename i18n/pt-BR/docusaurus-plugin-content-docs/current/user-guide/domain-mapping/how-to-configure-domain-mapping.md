---
title: Como configurar o mapeamento de domínios
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Como configurar o mapeamento de domínios (v2) {#how-to-configure-domain-mapping-v2}

_**NOTA IMPORTANTE: Este artigo se refere à versão 2.x do Ultimate Multisite.**_

Um dos recursos mais poderosos de uma rede premium é a capacidade de oferecer aos nossos clientes a chance de anexar um domínio de nível superior aos seus sites. Afinal, o que parece mais profissional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ou [_**joesbikeshop.com**_](http://joesbikeshop.com)? É por isso que o Ultimate Multisite oferece esse recurso integrado, sem a necessidade de usar plugins de terceiros.

## O que é mapeamento de domínios? {#whats-domain-mapping}

Como o nome sugere, o mapeamento de domínios é a capacidade oferecida pelo Ultimate Multisite de receber uma solicitação para um domínio personalizado e mapear essa solicitação para o site correspondente na rede com aquele domínio específico anexado.

### Como configurar o mapeamento de domínios na sua rede Ultimate Multisite {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

O mapeamento de domínios exige algumas configurações da sua parte para funcionar. Felizmente, o Ultimate Multisite automatiza o trabalho pesado para você, para que você possa atender facilmente aos requisitos.

Durante a instalação do Ultimate Multisite, o assistente copiará e instalará automaticamente o **sunrise.php** na pasta designada. **O assistente não permitirá que você prossiga até que esta etapa seja concluída**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Isso significa que, assim que o assistente de instalação do Ultimate Multisite concluir a configuração da sua rede, você poderá começar a mapear o domínio personalizado imediatamente.

Observe que o mapeamento de domínios no Ultimate Multisite não é obrigatório. Você tem a opção de usar a função nativa de mapeamento de domínios do WordPress Multisite ou qualquer outra solução de mapeamento de domínios.

Caso você precise desativar o mapeamento de domínios do Ultimate Multisite para dar lugar a outras soluções de mapeamento de domínios, é possível desativar esse recurso em **Ultimate Multisite > Configurações > Mapeamento de domínios**.

![Página de configurações de mapeamento de domínios mostrando redirecionamento de admin, mensagem de mapeamento e opções de DNS](/img/config/domain-mapping-settings.png)

Logo abaixo dessa opção, você também pode ver a opção **Forçar redirecionamento do admin**. Essa opção permite controlar se seus clientes poderão acessar o painel de admin tanto no domínio personalizado quanto no subdomínio, ou apenas em um deles.

Se você selecionar **Forçar redirecionamento para o domínio mapeado** , seus clientes só poderão acessar o painel de admin nos domínios personalizados.

A opção **Forçar redirecionamento para** **domínio da rede** fará exatamente o oposto: seus clientes só poderão acessar seus painéis no subdomínio, mesmo que tentem fazer login nos domínios personalizados.

E a opção **Permitir acesso ao admin tanto pelo domínio mapeado quanto pelo domínio da rede** permite que eles acessem seus painéis de admin tanto no subdomínio quanto no domínio personalizado.

![Menu suspenso de redirecionamento do admin expandido mostrando as três opções de redirecionamento](/img/config/domain-mapping-redirect-options.png)

Há duas maneiras de mapear um domínio personalizado. A primeira é mapeando o nome de domínio a partir do painel de admin da sua rede como super admin, e a segunda é por meio do painel de admin do subsite, na página da conta.

Mas antes de começar a mapear o domínio personalizado para um dos subsites da sua rede, você precisará garantir que as **configurações de DNS** do nome de domínio estejam devidamente configuradas.

###

### Garantindo que as configurações de DNS do domínio estejam devidamente configuradas {#making-sure-the-domain-dns-settings-are-properly-configured}

Para que um mapeamento funcione, você precisa garantir que o domínio que está planejando mapear esteja apontando para o endereço IP da sua rede. Observe que você precisa do endereço IP da rede — o endereço IP do domínio onde o Ultimate Multisite está instalado —, não do endereço IP do domínio personalizado que você deseja mapear. Para procurar o endereço IP de um domínio específico, sugerimos acessar o [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), por exemplo.

Para mapear corretamente o domínio, você precisa adicionar um **registro A** na sua configuração de **DNS** apontando para esse **endereço IP**. O gerenciamento de DNS varia bastante entre diferentes registradores de domínio, mas há muitos tutoriais online sobre isso se você pesquisar por " _Criando um registro A na XXXX_ ", em que XXXX é o seu registrador de domínio (ex.: " _Criando um registro A na_ _GoDaddy_ ").

Se você tiver dificuldades para fazer isso funcionar, **entre em contato com o suporte do seu registrador de domínio** e eles poderão ajudar você com essa parte.

Se você planeja permitir que seus clientes mapeiem seus próprios domínios, eles terão que fazer o trabalho desta parte por conta própria. Oriente-os a procurar o sistema de suporte do registrador caso não consigam criar o registro A.

### Mapeando nome de domínio personalizado como Super Admin {#mapping-custom-domain-name-as-super-admin}

Quando você estiver logado como super admin na sua rede, poderá adicionar e gerenciar facilmente nomes de domínio personalizados acessando **Ultimate Multisite > Domínios**.

![Página de lista de domínios no Ultimate Multisite](/img/admin/domains-list.png)

Nesta página, você pode clicar no botão **Adicionar domínio** no topo, e isso abrirá uma janela modal onde você poderá definir e preencher o **nome de domínio personalizado** , **o subsite** ao qual deseja aplicar o nome de domínio personalizado, e decidir se deseja defini-lo como o **nome de domínio principal** ou não (observe que você pode mapear **vários nomes de domínio para um subsite**).

![Modal Adicionar domínio com nome de domínio, seletor de site e alternância de domínio principal](/img/admin/domain-add-modal.png)

Depois de inserir todas as informações, você poderá clicar no botão **Adicionar domínio existente** na parte inferior.

Isso iniciará o processo de verificação e obtenção das informações de DNS do domínio personalizado. Você também verá um log na parte inferior da página para acompanhar o processo em andamento. Esse processo pode levar alguns minutos para ser concluído.

Ultimate Multisite v2.13.0 também cria o registro de domínio interno automaticamente quando um novo site é criado em um host que deve ser tratado como um domínio por site. Se o host for o domínio principal da rede, ou um dos domínios base de formulário de checkout compartilhados configurados em um campo **Site URL**, o registro automático de domínio mapeado é ignorado para que esse domínio base compartilhado permaneça disponível para todos os sites que o utilizam.

Quando um cliente registra um novo domínio por meio do Domain Seller v1.3.0 ou mais recente, Ultimate Multisite mapeia automaticamente o domínio registrado para o site de rede do cliente por padrão. Os administradores não precisam mais adicionar um registro separado de domínio mapeado após um registro bem-sucedido, a menos que queiram ajustar opções como o sinalizador de domínio principal, o estado de ativação ou o gerenciamento de SSL.

O **Stage** ou o status deve mudar de **Checking DNS** para **Ready** se tudo estiver configurado corretamente.

<!-- Captura de tela indisponível: linha de domínio mostrando o estágio Checking DNS na lista de domínios -->

<!-- Captura de tela indisponível: linha de domínio mostrando o estágio Ready com o indicador de status verde -->

Se você clicar no nome do domínio, poderá ver algumas opções dentro dele. Vamos dar uma olhada rápida nelas:

![Página de detalhes do domínio com alternâncias de estágio, site, ativo, principal e SSL](/img/admin/domain-edit.png)

**Stage:** Este é o estágio em que o domínio está. Quando você adiciona o domínio pela primeira vez, ele provavelmente estará no estágio **Checking DNS**. O processo verificará as entradas DNS e confirmará se estão corretas. Em seguida, o domínio será colocado no estágio **Checking SSL**. Ultimate Multisite verificará se o domínio tem SSL ou não e categorizará seu domínio como **Ready** ou **Ready (without SSL)**.

**Site:** O subdomínio associado a este domínio. O domínio mapeado mostrará o conteúdo deste site específico.

**Active:** Você pode ativar ou desativar esta opção para ativar ou desativar o domínio.

**Is Primary Domain?:** Seus clientes podem ter mais de um domínio mapeado para cada site. Use esta opção para selecionar se este é o domínio principal do site específico.

**Is Secure?:** Embora Ultimate Multisite verifique se o domínio tem um certificado SSL ou não antes de habilitá-lo, você pode selecionar manualmente carregar o domínio com ou sem um certificado SSL. Observe que, se o site não tiver um certificado SSL e você tentar forçar o carregamento com SSL, isso poderá gerar erros.

### Mapeando nome de domínio personalizado como usuário de subsite {#mapping-custom-domain-name-as-subsite-user}

Administradores de subsite também podem mapear nomes de domínio personalizados a partir do painel de administração do subsite.

Primeiro, você precisa garantir que habilitou esta opção nas configurações de **Domain mapping**. Veja a captura de tela abaixo.

<!-- Captura de tela indisponível: configurações de Domain mapping permitindo que usuários de subsite mapeiem domínios por meio da alternância Customer DNS Management -->

Você também pode definir ou configurar esta opção no nível de **Plan** ou nas opções de produto em **Ultimate Multisite > Products**.

![Seção de Domínios Personalizados na página de edição do produto](/img/config/product-custom-domains.png)

Quando qualquer uma dessas opções estiver habilitada e um usuário de subsite tiver permissão para mapear nomes de domínio personalizados, o usuário do subsite deverá ver uma metabox na página **Account** chamada **Domains**.

<!-- Captura de tela indisponível: metabox Domains na página Account do subsite com o botão Add Domain -->

O usuário pode clicar no botão **Add Domain** e isso abrirá uma janela modal com algumas instruções.

<!-- Captura de tela indisponível: modal Add Domain mostrando instruções de registro A de DNS para usuários de subsite -->

O usuário pode então clicar em **Next Step** e prosseguir para adicionar o nome de domínio personalizado. Ele também pode escolher se este será o domínio principal ou não.

<!-- Captura de tela indisponível: formulário Add Domain com campo de nome de domínio personalizado e alternância de domínio principal -->

<!-- Captura de tela indisponível: etapa de confirmação Add Domain que aciona a verificação de DNS -->

Clicar em **Add Domain** iniciará o processo de verificação e obtenção das informações de DNS do domínio personalizado.

### Sobre a sincronização de domínios {#about-domain-syncing}

A sincronização de domínios é um processo em que Ultimate Multisite adiciona o nome de domínio personalizado à sua conta de hospedagem como um domínio adicional **para que o mapeamento de domínio funcione**.

A sincronização de domínios acontece automaticamente se o seu provedor de hospedagem tiver integração com o recurso de mapeamento de domínio do Ultimate Multisite. Atualmente, esses provedores de hospedagem são _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ e _Cpanel._

Quando uma integração de provedor de hospedagem está ativa, Ultimate Multisite também pode enfileirar a tarefa de criação de DNS ou subdomínio no lado do provedor para sites recém-criados. Se nenhuma integração estiver escutando essa tarefa, o trabalho em segundo plano será ignorado para evitar entradas de fila sem operação. As verificações de DNS e SSL para domínios mapeados continuam sendo executadas pelo processo normal de estágio de domínio.

Você precisará ativar esta integração nas configurações do Ultimate Multisite, na aba **Integration**.

![Aba Integrations nas configurações do Ultimate Multisite mostrando provedores de hospedagem](/img/config/integrations-tab.png)

<!-- Captura de tela indisponível: links de Configuration de provedores de hospedagem na aba de configurações Integrations -->

_Observe que, se o seu provedor de hospedagem não for um dos provedores mencionados acima,**você precisará sincronizar ou adicionar manualmente o nome de domínio** à sua conta de hospedagem._
