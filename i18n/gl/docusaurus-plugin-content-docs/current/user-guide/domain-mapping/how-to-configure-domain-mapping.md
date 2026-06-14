---
title: Cómo configurar o mapear dominios
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Como Configurar o Mapeamento de Domínio (v2)

_**NOTA IMPORTANTE: Este artigo refere à versão 2.x do Ultimate Multisite.**_

Uma das funcionalidades mais poderosas de uma rede premium é a capacidade de oferecer aos nossos clientes a oportunidade de anexar um domínio de nível superior aos seus sites. Afinal, o que parece mais profissional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ou [_**joesbikeshop.com**_](http://joesbikeshop.com)? É por isso que o Ultimate Multisite oferece essa funcionalidade integrada, sem a necessidade de usar plugins de terceiros.

## O que é mapeamento de domínio?

Como o nome sugere, o mapeamento de domínio é a capacidade oferecida pelo Ultimate Multisite de receber um pedido de domínio personalizado e associar esse pedido ao site correspondente na rede com aquele domínio específico anexado.

### Como configurar o mapeamento de domínio na sua Rede Ultimate Multisite

O mapeamento de domínio requer alguma configuração da sua parte para funcionar. Felizmente, o Ultimate Multisite automatiza o trabalho pesado para que possa cumprir os requisitos facilmente.

Durante a instalação do Ultimate Multisite, o assistente irá copiar e instalar automaticamente o **sunrise.php** na pasta designada. **O assistente não lhe permitirá avançar até completar esta etapa**.

<!-- Screenshot unavailable: Assistente de instalação do Ultimate Multisite com passo sunrise.php -->

Isso significa que, assim que o assistente de instalação do Ultimate Multisite terminar de configurar a sua rede, pode começar a mapear o domínio personalizado imediatamente.

Note que o mapeamento de domínio no Ultimate Multisite não é obrigatório. Tem a opção de usar a função nativa de mapeamento de domínio do WordPress Multisite ou qualquer outra solução de mapeamento de domínio.

Se hai denes que precisas desativar o mapeamento de domínios do Ultimate Multisite para dar lugar a outras solucións de mapeamento, podes desativar esta característica en **Ultimate Multisite > Settings > Domain Mapping**.

![Páxina de configuración do Mapeamento de Domínios mostrando redirexión de administrador, mensagem de mapeamento e opción DNS](/img/config/domain-mapping-settings.png)

Logo abaixo desta opción, podes ver a opción **Force Admin Redirect** (Forzar Redirexión de Administrador). Esta opción permite controlar se os teus clientes poderán acceder ao seu painel de administrador tanto no seu domínio personalizado como no subdomínio ou só en um deles.

Se seleccionas **Force redirect to mapped domain** (Forzar redirexión para o dominio mapeado), os teus clientes só poderán acceder ao seu painel de administrador nos seus domínios personalizados.

A opción **Force redirect to network domain** (Forzar redirexión para o domínio da rede) fará exactamente o oposto: os teus clientes só se permitirán acceder aos seus dashboards no seu subdomínio, mesmo que intenten iniciar sesión nos seus domínios personalizados.

E a opção **Allow access to the admin by both mapped domain domain and network domain** (Permitir acceso ao administrador tanto pelo dominio mapeado como pelo domínio da rede) permite-lles acceder aos seus dashboards de administrador tanto no subdomínio como no domínio personalizado.

![Dropdown de Redirexión de Administrador expandido mostrando as tres opcións de redirexión](/img/config/domain-mapping-redirect-options.png)

Hai dúas formas de mapear un dominio personalizado. A primeira é mapear o nome do dominio a partir do teu painel de administrador da rede como super administrador e a segunda é a través do painel de administrador do subsite na páxina de conta.

Pero antes de empezar a mapear o dominio personalizado a un dos subsites na tua rede, terás de asegurarte de que as **DNS settings** (configuraciones DNS) do nome do dominio están correctamente configuradas.

###

### Asegurar que as configuración DNS do dominio están correctamente configuradas

Para que o mapeamento funcione, tem de estar certo que o domínio que planeas mapear aponta para a morada IP da tua Rede. Nota: precisas da morada IP da Rede - a morada IP do domínio onde está instalado o Ultimate Multisite - e não a morada IP do domínio personalizado que queres mapear. Para procurar a morada IP de un domínio específico, sugerimos ir ao [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), por exemplo.

Para mapear o domínio corretamente, tens de adicionar um **A RECORD** na tua configuração de **DNS** apontando para essa **morada IP**. A gestão de DNS varia bastante entre diferentes registadores de domínios, mas há muitos tutoriais online que cobrem isso se procurares " _Creating A Record on XXXX_ ", onde XXXX é o teu registrador de domínio (ex.: " _Creating A Record on_ _GoDaddy_ ").

Se te estiveres com dificuldades em fazer isto funcionar, **contacta o suporte do teu registrador de domínios** e eles vão poder ajudar-te com esta parte.

Se planeas permitir que os teus clientes mapeiem os seus próprios domínios, eles terão de fazer este trabalho por si mesmos. Aponta-lhes para o sistema de suporte do seu registrador se encontrarem incapazes de criar o A Record.

### Mapear nome de domínio personalizado como Super Admin

Quando estás logado como super admin na tua rede, podes adicionar e gerir nomes de domínio personalizados facilmente indo em **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Nbaixo esta páxina, podes clicar no botón **Add Domain** en a parte superior e abrirá unha ventán modal onde podes configurar e preencher o **custom domain name** (nome de dominio personalizado), **the subsite** (o subsistema) ao que queres aplicar o nome de dominio personalizado, e decidir se queres configuralo como o **primary domain** (dominio principal) ou non (ten en cuenta que podes mapear **multiple domain names to one subsite** - múltiples nomes de dominio a un mismo subsistema).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Depois de introducir toda a información, podes clicar no botón **Add Existing Domain** na parte inferior.

Isto iniciará o proceso de verificación e obtención da información DNS do nome de dominio personalizado. Tamén verás un registro (log) na parte inferior da páxina para que sigas o proceso que está a realizar. Este proceso pode levar uns minutos en completarse.

Ultimate Multisite v2.13.0 tamén crea o rexistro de dominio interno automáticamente cuando se crea un novo sitio en un host que debe ser tratado como un dominio por sitio (per-site domain). Se o host é o dominio principal da rede, ou unha dos dominios base do formulario de checkout compartido configurados no campo **Site URL**, o rexistro de dominio mapeado automático se salta para que o dominio base compartido siga estar disponible para todos os sitios que lo utilicen.

O **Stage** (Estadio) ou o estado debería cambiar de **Checking DNS** (Verificando DNS) a **Ready** (Listo) se todo está configurado correctamente.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Se cliques no nome do dominio, poderás ver algunhas opcións dentro dele. Veamos un vistazo rápido a elas:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Estágio:** É o estágio em que o domínio se encontra. Quando adiciona o domínio pela primeira vez, provavelmente estará no estágio de **Verificação de DNS** (Checking DNS). O processo verifica as entradas de DNS e confirma se estão corretas. Depois, o domínio passará para o estágio de **Verificação de SSL** (Checking SSL). O Ultimate Multisite verifica se o domínio tem SSL ou não e categoriza o seu domínio como **Pronto** (Ready) ou **Pronto (sem SSL)** (Ready without SSL).

**Site:** É o subdomínio associado a este domínio. O domínio mapeado mostrará o conteúdo deste site específico.

**Ativo:** Pode ligar ou desligar esta opção para ativar ou desativar o domínio.

**É Domínio Principal? (Is Primary Domain?):** Os seus clientes podem ter mais de um domínio mapeado para cada site. Use esta opção para selecionar se este é o domínio principal para o site específico.

**É Seguro? (Is Secure?):** Mesmo que o Ultimate Multisite verifique se o domínio tem um certificado SSL ou não antes de o ativar, pode selecionar manualmente carregar o domínio com ou sem um certificado SSL. Note que se o website não tiver um certificado SSL e tentar forçar o carregamento com SSL, isso poderá dar-lhe erros.

### Mapear nome de domínio personalizado como subsite do utilizador

Os administradores dos subsites também podem mapear nomes de domínio personalizados a partir do painel de administração do seu subsite.

Primeiro, tem de garantir que habilita esta opção nas configurações de **Mapeamento de Domínio** (Domain mapping). Veja a captura de ecrã abaixo.

<!-- Screenshot unavailable: Configurações de mapeamento de domínio permitindo aos utilizadores de subsite mapear domínios através do interruptor Gestão de DNS do Cliente -->

Também pode definir ou configurar esta opção no nível **Plano** (Plan) ou nas opções do produto em **Ultimate Multisite > Produtos**.

![Secção de Domínios Personalizados na página de edição do produto](/img/config/product-custom-domains.png)

Quando uma destas opções é ativada e um utilizador de subsite tem permissão para mapear nomes de domínio personalizados, o utilizador do subsite verá uma metabox na página **Account** chamada **Domains**.

<!-- Screenshot unavailable: Metabox de Domínios na página Account do subsite com botão Adicionar Domínio -->

O utilizador pode clicar no botão **Add Domain** (Adicionar Domínio) e abrirá uma janela modal com algumas instruções.

<!-- Screenshot unavailable: Modal Adicionar Domínio mostrando instruções de registro DNS A-record para utilizadores de subsite -->

Depois, o utilizador pode clicar em **Next Step** (Próximo Passo) e prosseguir para adicionar o nome de domínio personalizado. Também podem escolher se este será o domínio principal ou não.

<!-- Screenshot unavailable: Formulário Adicionar Domínio com campo de nome de domínio personalizado e alternância de domínio principal -->

<!-- Screenshot unavailable: Passo de confirmação Adicionar Domínio que aciona a verificação DNS -->

Clicar em **Add Domain** (Adicionar Domínio) inicia o processo de verificação e recolha das informações DNS do domínio personalizado.

### Sobre a Sincronização de Domínios (Domain Syncing)

A Sincronização de Domínios é um processo onde Ultimate Multisite adiciona o nome de domínio personalizado à sua conta de alojamento como um domínio adicional **para que o mapeamento do domínio funcione**.

A sincronização automática acontece se o seu fornecedor de alojamento tiver integração com a funcionalidade de mapeamento de domínios do Ultimate Multisite. Atualmente, estes fornecedores de alojamento são _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ e _Cpanel._

Quando uma integração com o fornecedor de alojamento está ativa, o Ultimate Multisite também pode enfileirar a tarefa de criação de DNS ou subdomínio do lado do provedor para os sites recém-criados. Se nenhum sistema estiver a ouvir essa tarefa, o trabalho em segundo plano é ignorado para evitar entradas no *queue* (fila) sem efeito (*no-op queue entries*). As verificações de DNS e SSL para domínios mapeados continuam a correr através do processo normal de estágio do domínio.

Terás de activar esta integración nas configuración do Ultimate Multisite na aba **Integration**.

![Aba Integración nas configuración do Ultimate Multisite mostrando os proveedores de alojamiento](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Enxelos de configuración dos proveedores de alojamiento na aba Integration -->

_Nota que se se o teu provedor de aloitamento non é nun dos mencionados arriba, **terás de sincronizar ou adicionar manualmente o nome do dominio** á conta do teu aloitamento._
