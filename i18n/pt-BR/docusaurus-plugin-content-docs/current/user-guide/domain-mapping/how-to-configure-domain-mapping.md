---
title: Como Configurar o Mapeamento de Domínio
sidebar_position: 6
_i18n_hash: 749818bf3eca7ddb6e6bfae1ddb7926f
---
# Como Configurar o Mapeamento de Domínio (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Um dos recursos mais poderosos de uma rede premium é a capacidade de oferecer aos nossos clientes a possibilidade de anexar um domínio de nível superior aos seus sites. Afinal, qual parece mais profissional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ou [_**joesbikeshop.com**_](http://joesbikeshop.com)? É por isso que o Ultimate Multisite oferece esse recurso integrado, sem a necessidade de usar plugins de terceiros.

## O que é mapeamento de domínio?

Como o nome sugere, o mapeamento de domínio é a capacidade oferecida pelo Ultimate Multisite de receber uma solicitação por um domínio personalizado e mapear essa solicitação para o site correspondente na rede com esse domínio específico anexado.

### Como configurar o mapeamento de domínio na sua Rede Ultimate Multisite

O mapeamento de domínio requer alguma configuração da sua parte para funcionar. Felizmente, o Ultimate Multisite automatiza o trabalho pesado para você, permitindo que atenda facilmente aos requisitos.

Durante a instalação do Ultimate Multisite, o assistente copiará e instalará automaticamente o **sunrise.php** na pasta designada. **O assistente não permitirá que você prossiga até que esta etapa seja concluída**.

![Ultimate Multisite installation wizard with sunrise.php step](/img/config/settings-domain-mapping.png)

Isso significa que, uma vez que o assistente de instalação do Ultimate Multisite tenha concluído a configuração da sua rede, você pode começar a mapear o domínio personalizado imediatamente.

Observe que o mapeamento de domínio no Ultimate Multisite não é obrigatório. Você tem a opção de usar a função nativa de mapeamento de domínio do WordPress Multisite ou qualquer outra solução de mapeamento de domínio.

Caso precise desativar o mapeamento de domínio do Ultimate Multisite para dar lugar a outras soluções de mapeamento de domínio, você pode desativar esse recurso em **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings with enable toggle](/img/config/settings-domain-mapping.png)

Logo abaixo dessa opção, você também pode ver a opção **Force Admin Redirect**. Essa opção permite controlar se os seus clientes poderão acessar seu painel de administração tanto em seu domínio personalizado quanto no subdomínio, ou apenas em um deles.

Se você selecionar **Force redirect to mapped domain**, seus clientes só poderão acessar seu painel de administração em seus domínios personalizados.

A opção **Force redirect to** **network domain** fará exatamente o oposto - seus clientes só poderão acessar seus painéis em seu subdomínio, mesmo que tentem fazer login em seus domínios personalizados.

E a opção **Allow access to the admin by both mapped domain domain and network domain** permite que eles acessem seus painéis de administração tanto no subdomínio quanto no domínio personalizado.

![Force Admin Redirect options for domain mapping](/img/config/settings-domain-mapping.png)

Existem duas maneiras de mapear um domínio personalizado. A primeira é mapeando o nome do domínio a partir do painel de administração da rede como super administrador, e a segunda é através do painel de administração do subsite na página de conta.

Mas antes de começar a mapear o domínio personalizado para um dos subsites na sua rede, você precisará garantir que as **configurações de DNS** do nome de domínio estejam configuradas corretamente.

### Garantindo que as configurações de DNS do domínio estejam configuradas corretamente

Para que o mapeamento funcione, você precisa garantir que o domínio que pretende mapear esteja apontando para o endereço IP da sua Rede. Observe que você precisa do endereço IP da Rede — o endereço IP do domínio onde o Ultimate Multisite está instalado — e não do endereço IP do domínio personalizado que deseja mapear. Para pesquisar o endereço IP de um domínio específico, sugerimos visitar o [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), por exemplo.

Para mapear corretamente o domínio, você precisa adicionar um **A RECORD** na sua configuração de **DNS** apontando para esse **endereço IP**. A gestão de DNS varia muito entre diferentes registradores de domínio, mas há muitos tutoriais online que cobrem isso se você pesquisar por “_Creating A Record on XXXX_” onde XXXX é seu registrador de domínio (ex.: “_Creating A Record on_ _GoDaddy_ ”).

Se você encontrar dificuldades para fazer isso funcionar, **entre em contato com o suporte do seu registrador de domínio** e eles poderão ajudá-lo com essa parte.

Se você planeja permitir que seus clientes mapem seus próprios domínios, eles terão que fazer esse trabalho por conta própria. Oriente-os para o sistema de suporte do registrador se eles não conseguirem criar o A Record.

### Mapeando o nome de domínio personalizado como Super Admin

Quando você estiver conectado como super administrador na sua rede, pode adicionar e gerenciar nomes de domínio personalizados facilmente acessando **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Nesta página, você pode clicar no botão **Add Domain** no topo, que abrirá uma janela modal onde você pode definir e preencher o **nome de domínio personalizado**, **o subsite** ao qual deseja aplicar o nome de domínio personalizado e decidir se deseja defini-lo como o nome de domínio **primário** ou não (observe que você pode mapear **vários nomes de domínio para um único subsite**).

![Add Domain modal with domain name and site fields](/img/admin/domains-list.png)

Depois de inserir todas as informações, você pode clicar no botão **Add Existing Domain** na parte inferior.

Isso iniciará o processo de verificação e busca das informações de DNS do domínio personalizado. Você também verá um log na parte inferior da página para acompanhar o processo que está sendo executado. Esse processo pode levar alguns minutos para ser concluído.

O **Stage** ou o status deve mudar de **Checking DNS** para **Ready** se tudo estiver configurado corretamente.

![Domain stage changing from Checking DNS to Ready](/img/admin/domains-list.png)

![Domain with Ready status in domains list](/img/admin/domains-list.png)

Se você clicar no nome do domínio, poderá ver algumas opções dentro dele. Vamos dar uma rápida olhada nelas:

![Domain detail page with stage, site, active, and SSL options](/img/admin/domains-list.png)

**Stage:** Esta é a etapa em que o domínio se encontra. Quando você adiciona o domínio pela primeira vez, provavelmente estará na etapa **Checking DNS**. O processo verificará as entradas de DNS e confirmará se estão corretas. Em seguida, o domínio passará para a etapa **Checking SSL**. O Ultimate Multisite verificará se o domínio possui SSL ou não e classificará seu domínio como **Ready** ou **Ready (without SSL)**.

**Site:** O subdomínio associado a este domínio. O domínio mapeado exibirá o conteúdo deste site específico.

**Active:** Você pode ativar ou desativar essa opção para ativar ou desativar o domínio.

**Is Primary Domain?:** Seus clientes podem ter mais de um domínio mapeado para cada site. Use esta opção para selecionar se este é o domínio primário para o site específico.

**Is Secure?:** Embora o Ultimate Multisite verifique se o domínio possui um certificado SSL ou não antes de habilitá-lo, você pode selecionar manualmente se deseja carregar o domínio com ou sem certificado SSL. Observe que, se o site não tiver certificado SSL e você tentar forçar o carregamento com SSL, pode ocorrer erros.

### Mapeando o nome de domínio personalizado como usuário do subsite

Administradores de subsite também podem mapear nomes de domínio personalizados a partir do painel de administração do subsite.

Primeiro, você precisa garantir que habilite essa opção nas configurações de **Domain mapping**. Veja a captura de tela abaixo.

![Domain mapping settings allowing subsite users to map domains](/img/config/settings-domain-mapping.png)

Você também pode definir ou configurar essa opção no nível **Plan** ou nas opções de produto em **Ultimate Multisite > Products**.

![Product custom domains option in product settings](/img/config/settings-domain-mapping.png)

Quando alguma dessas opções estiver habilitada e um usuário do subsite tiver permissão para mapear nomes de domínio personalizados, o usuário do subsite deverá ver uma metabox na página **Account** chamada **Domains**.

![Domains metabox on the subsite account page](/img/admin/domains-list.png)

O usuário pode clicar no botão **Add Domain** e isso abrirá uma janela modal com algumas instruções.

![Add Domain modal with DNS instructions for subsite users](/img/admin/domains-list.png)

O usuário pode então clicar em **Next Step** e prosseguir para adicionar o nome de domínio personalizado. Ele também pode escolher se isso será o domínio primário ou não.

![Add custom domain name field with primary domain option](/img/admin/domains-list.png)

![Click Add Domain to start DNS verification](/img/admin/domains-list.png)Click to **Add Domain** will start the process of verifying and fetching the DNS information of the custom domain.

### Sobre o Sincronismo de Domínio

O Domain Syncing é um processo em que o Ultimate Multisite adiciona o nome de domínio personalizado à sua conta de hospedagem como um domínio adicional **para que o mapeamento de domínio funcione**.

O sincronismo de domínio acontece automaticamente se o seu provedor de hospedagem tiver integração com o recurso de mapeamento de domínio do Ultimate Multisite. Atualmente, esses provedores de hospedagem são _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ e _Cpanel_.

Você precisará ativar essa integração nas configurações do Ultimate Multisite na aba **Integration**.

![Integration tab in Ultimate Multisite settings](/img/config/settings-domain-mapping.png)

![Hosting provider integration settings for domain syncing](/img/config/settings-domain-mapping.png)

_Observe que, se o seu provedor de hospedagem não for um dos provedores mencionados acima, **você precisará sincronizar manualmente ou adicionar o nome de domínio** à sua conta de hospedagem._
