---
title: Página de Conta do Cliente
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# A Página de Conta do Cliente (v2) {#your-clients-account-page-v2}

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Quando os clientes se inscrevem num plano na sua rede, eles têm acesso a um website e ao seu painel com informações importantes sobre os seus pagamentos, membros, domínios, limitações do plano, etc...

Neste tutorial, vamos guiar-vos pela página de conta do cliente e verão o que os vossos clientes podem ver e fazer lá dentro.

## A Página de Conta {#the-account-page}

A página de conta é acessível clicando em **Account** (Conta) dentro do painel do seu cliente.

![Menu de conta no painel do cliente](/img/account-page/account-menu.png)

Nas redes *sovereign tenant*, o Ultimate Multisite v2.13.0 mantém esta experiência de gestão de clientes no site principal. Se um cliente abrir a conta, checkout (pagamento), faturas, gestão do site, troca de templates ou mapeamento de domínios a partir de um *tenant* soberano, a ação volta para o painel do cliente do site principal, para que os registos de faturação e membros da rede permaneçam autoritativos.

Quando o cliente chega a partir de um *tenant* soberano, o painel do cliente do site principal pode incluir um link de retorno para o site do *tenant*. O link de retorno só é mostrado quando o Ultimate Multisite consegue validar o destino de retorno como um dos sites do cliente, o que evita redirecionamentos arbitrários enquanto preserva o fluxo de trabalho do *tenant*.

![Visão geral da página de conta do cliente](/img/account-page/overview.png)

Depois de clicar nele, eles verão uma visão geral da sua adesão (membership), morada de faturação, faturas, domínios, limitações do site e também poderão mudar o ****Site Template** (Template do Site) (se for permitido na sua rede).

Também podem mudar a adesão para outro plano, ou comprar outro pacote ou serviço que ofereça. Vamos ver cada secção separadamente.

### A Vue da súa Membresía: {#your-membership-overview}

O primeiro bloco logo abaixo do nome do sitio web dos seus clientes mostra unha visión geral do seu plan actual e dos servizos/paquetes que se adquiriron con ele. O bloco tamén mostra o número de membro, a cantidad inicial pagada por ele, cuánto custa o plan e os servizos/paquetes e cuántas veces se lle cobrou por esta membresía. Tamén poden ver se a membresía está **Activa**, **Expirada** ou **Cancelada**.

![Visión geral da membresía mostrando plan, cantidad e detalles de facturación](/img/account-page/membership-card.png)

Logo abaixo deste bloco, os seus clientes poden ver os bloques **Sobre este Sitio** e **Límites do Sitio**. Estes bloques mostran todas as limitacións que acompañan ao seu plan: espazo de disco, posts, páxinas, visitas, etc... Estas limitacións poden configurar en cada página do plan en **Ultimate Multisite > Products**.

![Bloques Sobre este Sitio e Límites do Sitio mostrando limitacións do plan](/img/account-page/site-limits.png)

No lado direito de **A Vue da Membresía**, os clientes poden clicar en **Cambiar**. Isto moita todas as plan e paquetes/servizos dispoñibles. Se elixen outro plan, as limitacións para o novo plan entrarán en vigor en lugar das limitacións actuais da membresía; non importa se están a baixar ou a subir de nivel (downgrading or upgrading).

Agora, se os seus clientes escollen adquirir paquetes ou servizos para esta membresía actual - como máis espazo de disco ou visitas - a membresía actual non se modificará, senón que só os novos paquetes se añadirán a ela.

Ten en cuenta que os códigos de cupón non poden añadirse en esta página de cambio de membresía. Se o cliente utilizou un código de cupón na primeira compra da membresía, o código tamén se aplicará a esta nova membresía.

### Actualización da Dirección de Facturación: {#updating-the-billing-address}

Na páxina da conta, os seus clientes poden actualizar tamén o seu endereço de facturación. Só hai que clicar en **Actualizar** ao lado de _Billing Address_.

![Sección do Enderezo de Facturación con botão Actualizar](/img/account-page/billing-address.png)

Aparecerá unha nova ventán para o seu cliente. Todo o que ten que facer é preencher o novo endereço e clicar en _Save Changes_ (Salvar Alteracións).

![Formulario de actualización do endereço de facturación](/img/account-page/billing-address-form.png)

### Modificar o Template do Sitio: {#changing-the-site-template}

Para permitir que os seus clientes muden os templates do sitio, hai que ir a **Ultimate Multisite > Settings > Sites** e activar a opción **Allow Template Switching** (Permitir Cambio de Template).

Tamén, en **Ultimate Multisite > Products**, selecciona os seus plans e ve ás tabulación **Site Templates**. Asegúrate de que a opción **Allow Site Templates** está activada e en **Site Template Selection Mode** (Modo de Selección de Template), está seleccionada a opción **Choose Available Site Templates** (Escoller Templates do Sitio Disponibles).

![Tab dos templates do sitio con modo de selección de template](/img/config/product-site-templates.png)

Podrás ver todos os templates do sitio dispoñibles no seu website. Escolhe cuáles queres que estén dispoñibles e cuáles non queres que estén dispoñibles aos seus clientes inscritos con este plan. Nota que estas opcións tamén afectan ao formulario de checkout, así que cualquier template que se elija como **Not Available** (Non Disponible) non aparecerá na páxina de registo para este plan.

Agora os seus clientes poden clicar en **Change Site Template** (Cambiar Template do Sitio) dentro da súa páxina da conta.

![Botón Cambiar Template na páxina da conta](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 mostra un painel de cambio de template rediseñado. O painel come con unha **current-template card** (tarxeta do template actual) para que os clientes vezan quen template está activo antes de escoller un reemplazo.

Un grid persistente de modelos de sitio disponíveis permanece visible enquanto os clientes analisam as suas opções. Isto ajuda-lhes a comparar os modelos permitidos para o seu plano sem perder de vista a seleção atual.

![Lista de modelos de site disponíveis para o plano](/img/config/site-templates-list.png)

Depois de selecionar aquele que querem mudar, serão solicitados a confirmar a mudança.

![Diálogo de confirmação da troca de modelo de site](/img/account-page/template-switch-confirm.png)

Depois de ativar a confirmação e clicar em **Process Switch**, o novo modelo de site será usado no website do seu cliente.

Os clientes também podem usar **Reset current template** deste painel quando precisarem de redefinir o site para o modelo atualmente atribuído. Tal como ao mudar para outro modelo, redefinir um modelo pode sobrescrever o conteúdo do site, por isso os clientes devem confirmar apenas quando entenderem a ação de redefinição.

### Adicionar Domínios Personalizados: {#adding-custom-domains}

Os seus clientes também terão a opção de adicionar um domínio personalizado para este plano na página da conta deles. Para permitir que os seus clientes usem domínios personalizados, vá a **Ultimate Multisite > Settings >** **Domain Mapping**.

Ative a opção **Enable Domain Mapping**. Isto permitirá aos seus clientes usar domínios personalizados a nível de rede.

Não se esqueça também de verificar se o mapeamento de domínio está ativado com base no produto — porque pode limitar um produto para não permitir que os seus clientes usem domínios personalizados.

Vá a **Ultimate Multisite > Products**. Selecione o plano de sua escolha e vá para a aba **Custom Domains**. Ative a opção **Allow Custom Domains**.

![Aba Domínios Personalizados com o interruptor Allow Custom Domains](/img/config/product-custom-domains.png)

Isto permitirá a todos os clientes subscritos a este plano específico usar domínios personalizados. Agora, na página de Conta, os seus clientes poderão adicionar um domínio personalizado clicando em **Add Domain** (Adicionar Domínio).

![Botão Add Domain na página de conta](/img/account-page/add-domain-button.png)

A primeira janela que se abrir mostrará aos seus clientes uma mensagem a instruí-los sobre como atualizar os seus registos DNS para que este domínio personalizado funcione na sua rede.

![Instruções DNS mostradas ao adicionar um domínio personalizado](/img/account-page/add-domain-dns.png)

Esta mensagem pode ser editada (por si) em **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** (Mapeamento de Domínio > Adicionar Novas Instruções de Domínio).

![Configuração Add New Domain Instructions no Mapeamento de Domínio](/img/config/settings-domain-mapping.png)

Aqui está uma vista completa da página de configurações de mapeamento de domínio:

![Página completa das configurações de mapeamento de domínio](/img/config/settings-domain-mapping-full.png)

Depois de clicar em **Next Step** (Próximo Passo), os seus clientes poderão adicionar o nome do seu domínio personalizado e escolher se este domínio personalizado será o principal. Note que os seus clientes podem usar mais de um domínio personalizado para os seus websites, por isso podem escolher qual será o principal.

![Entrada do nome do domínio personalizado com opção de domínio principal](/img/account-page/add-domain-primary.png)

Depois de clicar em **Add Domain** (Adicionar Domínio), o domínio será adicionado à conta do seu cliente. Tudo o que eles precisam fazer agora é mudar os registos DNS deste domínio personalizado no registrador de domínios deles.

### Mudar Palavra-passe: {#changing-password}

Dentro do painel da conta, os seus clientes também podem mudar a palavra-passe clicando em **Change Password** (Mudar Palavra-passe).

![Botão Change Password na página de conta](/img/account-page/change-password-button.png)

Isto mostrará unha nova ventán onde os seus clientes deberán introducir a súa contraseña actual e, despois, a nova que desexan usar.

![Formulario de cambio de contraseña con campos para contraseña actual y nueva](/img/account-page/change-password-form.png)

### Zona de Perigo: {#danger-zone}

Temos tamén dúas opción que se mostran na parte da **Zona de Perigo**: **Borrar Sitio** e **Borrar Conta**. Ambas están na Zona de Perigo porque estas dúas accións son irreversibles. Se os seus clientes borran o seu sitio web ou a súa conta, non podrán recuperalo.

![Zona de Perigo con las opciones Borrar Sitio y Borrar Cuenta](/img/account-page/danger-zone.png)

Se os seus clientes pulsan unha destas dúas opcións, se leur aparecerá unha ventán onde deberán activar a opción para eliminar o sitio web ou a conta e se les avisará que esta acción non se pode deshacer.

![Diálogo de confirmación Borrar Sitio](/img/account-page/delete-site-confirm.png)

![Diálogo de confirmación Borrar Conta](/img/account-page/delete-account-confirm.png)

Se borran o seu sitio web, a súa conta e a súa membresía seguirán intactos. Simplemente perderán todo o o que estea no seu sitio web. Se borran a súa conta, se perderán todos os sitios web, as membrías e a información relacionada con esta conta.
