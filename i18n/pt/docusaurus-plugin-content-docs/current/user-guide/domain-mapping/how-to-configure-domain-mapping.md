---
title: Como Configurar o Mapeamento de Domínios
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Como Configurar o Mapeamento de Domínios (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Uma das funcionalidades mais poderosas de uma rede premium é a capacidade de oferecer aos nossos clientes a possibilidade de associar um domínio de topo aos seus sites. Afinal, o que parece mais profissional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ou [_**joesbikeshop.com**_](http://joesbikeshop.com)? É por isso que o Ultimate Multisite oferece essa funcionalidade integrada, sem necessidade de usar extensões de terceiros.

## O que é mapeamento de domínios?

Como o nome sugere, o mapeamento de domínios é a capacidade oferecida pelo Ultimate Multisite de receber um pedido para um domínio personalizado e mapear esse pedido para o site correspondente na rede com esse domínio específico associado.

### Como configurar o mapeamento de domínios na sua rede Ultimate Multisite

O mapeamento de domínios requer alguma configuração da sua parte para funcionar. Felizmente, o Ultimate Multisite automatiza o trabalho difícil por si, para que possa cumprir facilmente os requisitos.

Durante a instalação do Ultimate Multisite, o assistente copiará e instalará automaticamente o **sunrise.php** na pasta designada. **O assistente não permitirá que avance até este passo estar concluído**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Isto significa que, assim que o assistente de instalação do Ultimate Multisite tiver terminado de configurar a sua rede, pode começar imediatamente a mapear o domínio personalizado.

Tenha em atenção que o mapeamento de domínios no Ultimate Multisite não é obrigatório. Tem a opção de usar a função nativa de mapeamento de domínios do WordPress Multisite ou qualquer outra solução de mapeamento de domínios.

Se precisar de desativar o mapeamento de domínios do Ultimate Multisite para dar lugar a outras soluções de mapeamento de domínios, pode desativar esta funcionalidade em **Ultimate Multisite > Definições > Mapeamento de Domínios**.

![Página de definições de Mapeamento de Domínios a mostrar o redirecionamento de administrador, a mensagem de mapeamento e as opções de DNS](/img/config/domain-mapping-settings.png)

Logo abaixo desta opção, também pode ver a opção **Forçar Redirecionamento de Administrador**. Esta opção permite-lhe controlar se os seus clientes poderão aceder ao painel de administração tanto no domínio personalizado como no subdomínio, ou apenas num deles.

Se selecionar **Forçar redirecionamento para o domínio mapeado** , os seus clientes só poderão aceder ao painel de administração nos seus domínios personalizados.

A opção **Forçar redirecionamento para** **domínio da rede** fará exatamente o oposto — os seus clientes só poderão aceder aos painéis nos seus subdomínios, mesmo que tentem iniciar sessão nos seus domínios personalizados.

E a opção **Permitir acesso ao administrador tanto pelo domínio mapeado como pelo domínio da rede** permite-lhes aceder aos seus painéis de administração tanto no subdomínio como no domínio personalizado.

![Menu suspenso de Redirecionamento de Administrador expandido a mostrar as três opções de redirecionamento](/img/config/domain-mapping-redirect-options.png)

Existem duas formas de mapear um domínio personalizado. A primeira é mapeando o nome de domínio a partir do painel de administração da sua rede como super admin, e a segunda é através do painel de administração do subsite, na página da conta.

Mas antes de começar a mapear o domínio personalizado para um dos subsites na sua rede, terá de se certificar de que as **definições de DNS** do nome de domínio estão corretamente configuradas.

###

### Certificar-se de que as definições de DNS do domínio estão corretamente configuradas

Para um mapeamento funcionar, precisa de se certificar de que o domínio que está a planear mapear está a apontar para o endereço IP da sua rede. Tenha em atenção que precisa do endereço IP da rede — o endereço IP do domínio onde o Ultimate Multisite está instalado — e não o endereço IP do domínio personalizado que pretende mapear. Para procurar o endereço IP de um domínio específico, sugerimos ir a [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), por exemplo.

Para mapear corretamente o domínio, precisa de adicionar um **REGISTO A** na sua configuração de **DNS** a apontar para esse **endereço IP**. A gestão de DNS varia muito entre diferentes registadores de domínios, mas existem muitos tutoriais online que cobrem isso se pesquisar por " _Criar um Registo A no XXXX_ ", onde XXXX é o seu registador de domínios (ex.: " _Criar um Registo A no_ _GoDaddy_ ").

Se tiver dificuldades em pôr isto a funcionar, **contacte o suporte do seu registador de domínios** e eles poderão ajudá-lo com esta parte.

Se planeia permitir que os seus clientes mapeiem os seus próprios domínios, eles terão de fazer o trabalho desta parte por conta própria. Encaminhe-os para o sistema de suporte do respetivo registador caso não consigam criar o Registo A.

### Mapear um nome de domínio personalizado como Super Admin

Quando tem sessão iniciada como super admin na sua rede, pode adicionar e gerir facilmente nomes de domínio personalizados acedendo a **Ultimate Multisite > Domínios**.

![Página de lista de Domínios no Ultimate Multisite](/img/admin/domains-list.png)

Nesta página, pode clicar no botão **Adicionar Domínio** no topo e isto abrirá uma janela modal onde pode definir e preencher o **nome de domínio personalizado** , **o subsite** ao qual pretende aplicar o nome de domínio personalizado, e decidir se pretende defini-lo como o nome de **domínio principal** ou não (tenha em atenção que pode mapear **vários nomes de domínio para um subsite**).

![Modal Adicionar Domínio com nome de domínio, seletor de site e alternador de domínio principal](/img/admin/domain-add-modal.png)

Depois de inserir todas as informações, pode então clicar no botão **Adicionar Domínio Existente** no fundo.

Isto iniciará o processo de verificação e obtenção das informações de DNS do domínio personalizado. Também verá um registo no fundo da página para acompanhar o processo em curso. Este processo pode demorar alguns minutos a concluir.

Ultimate Multisite v2.13.0 também cria automaticamente o registo de domínio interno quando um novo site é criado num host que deve ser tratado como um domínio por site. Se o host for o domínio principal da rede, ou um dos domínios base de formulário de checkout partilhado configurados num campo **Site URL**, o registo automático de domínio mapeado é ignorado para que esse domínio base partilhado permaneça disponível para todos os sites que o utilizem.

Quando um cliente regista um novo domínio através do Domain Seller v1.3.0 ou mais recente, Ultimate Multisite mapeia automaticamente o domínio registado para o site de rede do cliente por padrão. Os administradores já não precisam de adicionar um registo de domínio mapeado separado após um registo bem-sucedido, a menos que queiram ajustar opções como o sinalizador de domínio principal, o estado de ativação ou o tratamento de SSL.

A **Fase** ou o estado deve mudar de **A verificar DNS** para **Pronto** se tudo estiver configurado corretamente.

<!-- Captura de ecrã indisponível: linha de domínio a mostrar a fase A verificar DNS na lista de domínios -->

<!-- Captura de ecrã indisponível: linha de domínio a mostrar a fase Pronto com o indicador de estado verde -->

Se clicar no nome do domínio, poderá ver algumas opções dentro dele. Vamos dar uma vista de olhos rápida a elas:

![Página de detalhes do domínio com alternâncias de fase, site, ativo, principal e SSL](/img/admin/domain-edit.png)

**Fase:** Esta é a fase em que o domínio se encontra. Quando adiciona o domínio pela primeira vez, provavelmente estará na fase **A verificar DNS**. O processo irá verificar as entradas DNS e confirmar que estão corretas. Em seguida, o domínio será colocado na fase **A verificar SSL**. Ultimate Multisite irá verificar se o domínio tem SSL ou não e irá categorizar o seu domínio como **Pronto** ou **Pronto (sem SSL)**.

**Site:** O subdomínio que está associado a este domínio. O domínio mapeado irá mostrar o conteúdo deste site específico.

**Ativo:** Pode ativar ou desativar esta opção para ativar ou desativar o domínio.

**É o domínio principal?:** Os seus clientes podem ter mais do que um domínio mapeado para cada site. Use esta opção para selecionar se este é o domínio principal para o site específico.

**É seguro?:** Embora Ultimate Multisite verifique se o domínio tem um certificado SSL ou não antes de o ativar, pode selecionar manualmente se pretende carregar o domínio com ou sem um certificado SSL. Tenha em atenção que, se o website não tiver um certificado SSL e tentar forçar o carregamento com SSL, poderá gerar erros.

### Mapear nome de domínio personalizado como utilizador de subsite

Os administradores de subsite também podem mapear nomes de domínio personalizados a partir do painel de administração do seu subsite.

Primeiro, precisa de garantir que ativa esta opção nas definições de **Mapeamento de domínios**. Veja a captura de ecrã abaixo.

<!-- Captura de ecrã indisponível: definições de Mapeamento de domínios que permitem aos utilizadores de subsite mapear domínios através da alternância Gestão de DNS do Cliente -->

Também pode definir ou configurar esta opção ao nível do **Plan** ou nas opções de produto em **Ultimate Multisite > Produtos**.

![Secção Domínios personalizados na página de edição do produto](/img/config/product-custom-domains.png)

Quando qualquer uma dessas opções está ativada e um utilizador de subsite tem permissão para mapear nomes de domínio personalizados, o utilizador de subsite deverá ver uma metabox na página **Account** chamada **Domínios**.

<!-- Captura de ecrã indisponível: metabox Domínios na página Account do subsite com o botão Adicionar Domínio -->

O utilizador pode clicar no botão **Adicionar Domínio** e isso abrirá uma janela modal com algumas instruções.

<!-- Captura de ecrã indisponível: modal Adicionar Domínio a mostrar instruções de registo A de DNS para utilizadores de subsite -->

O utilizador pode então clicar em **Próximo passo** e prosseguir para adicionar o nome de domínio personalizado. Também pode escolher se este será o domínio principal ou não.

<!-- Captura de ecrã indisponível: formulário Adicionar Domínio com campo de nome de domínio personalizado e alternância de domínio principal -->

<!-- Captura de ecrã indisponível: passo de confirmação Adicionar Domínio que aciona a verificação de DNS -->

Clicar em **Adicionar Domínio** iniciará o processo de verificação e obtenção das informações de DNS do domínio personalizado.

### Sobre a sincronização de domínios

A sincronização de domínios é um processo no qual Ultimate Multisite adiciona o nome de domínio personalizado à sua conta de alojamento como um domínio adicional **para que o mapeamento de domínios funcione**.

A sincronização de domínios acontece automaticamente se o seu fornecedor de alojamento tiver integração com a funcionalidade de mapeamento de domínios do Ultimate Multisite. Atualmente, estes fornecedores de alojamento são _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ e _Cpanel._

Quando uma integração de fornecedor de alojamento está ativa, Ultimate Multisite também pode colocar em fila a tarefa de criação de DNS ou subdomínio do lado do fornecedor para sites recém-criados. Se nenhuma integração estiver a escutar essa tarefa, o trabalho em segundo plano é ignorado para evitar entradas de fila sem efeito. As verificações de DNS e SSL para domínios mapeados continuam a ser executadas através do processo normal de fases de domínio.

Terá de ativar esta integração nas definições do Ultimate Multisite, no separador **Integração**.

![Separador Integrações nas definições do Ultimate Multisite a mostrar fornecedores de alojamento](/img/config/integrations-tab.png)

<!-- Captura de ecrã indisponível: links de Configuração de fornecedores de alojamento no separador de definições Integrações -->

_Tenha em atenção que, se o seu fornecedor de alojamento não for um dos fornecedores mencionados acima, **terá de sincronizar manualmente ou adicionar o nome de domínio** à sua conta de alojamento._
