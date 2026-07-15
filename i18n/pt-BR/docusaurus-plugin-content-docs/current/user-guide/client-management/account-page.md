---
title: Página da Account do cliente
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Página Account do seu cliente (v2)

_**NOTA IMPORTANTE: Este artigo se refere à versão 2.x do Ultimate Multisite.**_

Quando os clientes assinam um plano na sua rede, eles recebem acesso a um site e ao Dashboard dele, com informações importantes sobre seus pagamentos, assinaturas, domínios, limitações do plano etc...

Neste tutorial, vamos orientar você pela página Account do cliente, e você verá o que seus clientes podem ver e fazer dentro dela.

## A página Account {#the-account-page}

A página Account pode ser acessada clicando em **Account** dentro do Dashboard do seu cliente.

![Menu Account no Dashboard do cliente](/img/account-page/account-menu.png)

Em redes de tenants soberanos, o Ultimate Multisite v2.13.0 mantém essa experiência de gerenciamento do cliente no site principal. Se um cliente abrir ações de conta, checkout, cobrança, fatura, gerenciamento de site, troca de modelo ou mapeamento de domínio a partir de um tenant soberano, a ação aponta de volta para o painel do cliente no site principal, para que os registros de cobrança e assinatura da rede continuem sendo a fonte autoritativa.

Quando o cliente chega a partir de um tenant soberano, o painel do cliente no site principal pode incluir um link de retorno para o site do tenant. O link de retorno só é exibido quando o Ultimate Multisite consegue validar o destino de retorno como um dos sites do cliente, o que evita redirecionamentos arbitrários enquanto preserva o fluxo de trabalho do tenant.

![Visão geral da página Account do cliente](/img/account-page/overview.png)

Depois que um cliente clicar nele, ele verá uma visão geral da sua assinatura, endereço de cobrança, faturas, domínios, limitações do site, e também poderá alterar o ****Modelo de Site** (se isso for permitido na sua rede)**.

Ele também pode alterar a assinatura para outro plano, ou comprar outro pacote ou serviço que você oferece. Vamos analisar cada seção separadamente.

### Visão geral da sua assinatura: {#your-membership-overview}

O primeiro bloco logo abaixo do nome do site dos seus clientes mostra uma visão geral do plano atual deles e dos serviços/pacotes que foram comprados com ele. O bloco também mostra o número da assinatura, o valor inicial pago por ela, quanto custam o plano e qualquer serviço/pacote, e quantas vezes eles foram cobrados por essa assinatura. Eles também podem ver se a assinatura está **Ativa** , **Expirada** ou **Cancelada**.

![Visão geral da assinatura mostrando plano, valor e detalhes de cobrança](/img/account-page/membership-card.png)

Logo abaixo desse bloco, seus clientes podem ver os blocos **Sobre este site** e **Limites do site**. Esses blocos mostram a eles todas as limitações que acompanham o plano: espaço em disco, posts, páginas, visitas etc... Esses limites podem ser configurados na página de cada plano em **Ultimate Multisite > Produtos**.

![Blocos Sobre este site e Limites do site mostrando limitações do plano](/img/account-page/site-limits.png)

No lado direito de **Sua assinatura** , os clientes podem clicar em **Alterar**. Isso mostrará a eles todos os planos e pacotes/serviços disponíveis. Se escolherem outro plano, as limitações do plano passarão a valer no lugar das limitações atuais da assinatura — não importa se eles estão fazendo downgrade ou upgrade dela.

Agora, se seus clientes escolherem comprar pacotes ou serviços para essa assinatura atual — como mais espaço em disco ou visitas — a assinatura atual não será alterada; apenas os novos pacotes serão adicionados a ela.

Observe que códigos de cupom não podem ser adicionados nesta página de alteração de assinatura. Se o cliente usou um código de cupom na primeira compra da assinatura, o código também será aplicado a esta nova assinatura.

### Atualizando o endereço de cobrança: {#updating-the-billing-address}

Na página Account, seus clientes também podem atualizar o endereço de cobrança. Eles só precisam clicar em **Atualizar** ao lado de _Endereço de cobrança_.

![Seção Endereço de cobrança com botão Atualizar](/img/account-page/billing-address.png)

Uma nova janela aparecerá para o seu cliente. Tudo o que ele precisa fazer é preencher o novo endereço e clicar em _Salvar alterações_.

![Formulário de atualização do endereço de cobrança](/img/account-page/billing-address-form.png)

### Alterando o Modelo de Site: {#changing-the-site-template}

Para permitir que seus clientes alterem os modelos de seus sites, você precisa acessar **Ultimate Multisite > Configurações > Sites** e ativar a opção **Permitir troca de modelo**.

Além disso, em **Ultimate Multisite > Produtos**, selecione seus planos e acesse a aba **Modelos de Site**. Certifique-se de que a opção **Permitir Modelos de Site** esteja ativada e, em **Modo de seleção de Modelo de Site** , a opção **Escolher Modelos de Site disponíveis** esteja selecionada.

![Aba de modelos de site do produto com modo de seleção de modelo](/img/config/product-site-templates.png)

Você poderá ver todos os modelos de site disponíveis no seu site. Escolha quais você quer disponibilizar e quais você não quer disponibilizar para seus clientes inscritos neste plano. Observe que essas opções também afetam o formulário de checkout, portanto qualquer modelo escolhido como **Não disponível** não aparecerá na página de registro deste plano.

Agora seus clientes podem clicar em **Alterar Modelo de Site** dentro da página Account deles.

![Botão Alterar Modelo de Site na página Account](/img/account-page/change-template-button.png)

O Ultimate Multisite 2.10.0 mostra um painel de troca de modelo redesenhado. O painel começa com um **cartão do modelo atual**, para que os clientes possam ver qual modelo está ativo antes de escolherem uma substituição.

Uma grade persistente de modelos de site disponíveis permanece visível enquanto os clientes analisam suas opções. Isso os ajuda a comparar os modelos permitidos para o plano deles sem perder de vista a seleção atual.

![Lista de modelos de site disponíveis para o plano](/img/config/site-templates-list.png)

Depois de selecionar aquele para o qual desejam mudar, eles serão solicitados a confirmar a alteração.

![Caixa de diálogo de confirmação de troca de modelo de site](/img/account-page/template-switch-confirm.png)

Depois de ativar a confirmação e clicar em **Processar troca** , o novo modelo de site será usado no site do seu cliente.

Os clientes também podem usar **Redefinir modelo atual** neste painel quando precisarem redefinir o site de volta para o modelo atualmente atribuído. Assim como ao mudar para outro modelo, redefinir um modelo pode sobrescrever o conteúdo do site, portanto os clientes só devem confirmar quando entenderem a ação de redefinição.

### Adicionando domínios personalizados: {#adding-custom-domains}

Seus clientes também terão a opção de adicionar um domínio personalizado para este plano na página Account deles. Para permitir que seus clientes usem domínios personalizados, vá para **Ultimate Multisite > Configurações >** **Mapeamento de domínio**.

Ative a opção **Habilitar mapeamento de domínio**. Isso permitirá que seus clientes usem domínios personalizados em nível de rede.

Não se esqueça de também verificar se o mapeamento de domínio está habilitado por produto — porque você pode limitar um produto para não permitir que seus clientes usem domínios personalizados.

Vá para **Ultimate Multisite > Produtos**. Selecione o plano de sua escolha e vá para a aba **Domínios personalizados**. Ative a opção **Permitir domínios personalizados**.

![Aba Domínios personalizados com alternância Permitir domínios personalizados](/img/config/product-custom-domains.png)

Isso permitirá que todos os clientes assinantes deste plano específico usem domínios personalizados. Agora, na página Account, seus clientes podem adicionar um domínio personalizado clicando em **Adicionar domínio**.

![Botão Adicionar domínio na página Account](/img/account-page/add-domain-button.png)

A primeira janela que se abre mostrará aos seus clientes uma mensagem instruindo-os sobre como atualizar os registros DNS para fazer esse domínio personalizado funcionar na sua rede.

![Instruções de DNS exibidas ao adicionar um domínio personalizado](/img/account-page/add-domain-dns.png)

Essa mensagem pode ser editada (por você) em **Ultimate Multisite > Configurações > Mapeamento de domínio > Instruções para adicionar novo domínio**.

![Configuração Instruções para adicionar novo domínio em Mapeamento de domínio](/img/config/settings-domain-mapping.png)

Aqui está uma visão completa da página de configurações de mapeamento de domínio:

![Página completa de configurações de mapeamento de domínio](/img/config/settings-domain-mapping-full.png)

Depois de clicar em **Próxima etapa** , seus clientes podem adicionar o nome do domínio personalizado e escolher se esse domínio personalizado será o principal. Observe que seus clientes podem usar mais de um domínio personalizado para seus sites, então eles podem escolher qual será o principal.

![Entrada de nome de domínio personalizado com opção de domínio principal](/img/account-page/add-domain-primary.png)

Depois de clicar em **Adicionar domínio** , o domínio será adicionado à Account do seu cliente. Tudo o que eles precisam fazer agora é alterar os registros DNS desse domínio personalizado no registrador de domínio deles.

### Alterando a senha: {#changing-password}

Dentro do Dashboard da Account, seus clientes também podem alterar a senha clicando em **Alterar senha**.

![Botão Alterar senha na página Account](/img/account-page/change-password-button.png)

Isso mostrará uma nova janela onde seus clientes precisarão preencher a senha atual e depois preencher a nova senha que desejam usar.

![Formulário de alteração de senha com campos de senha atual e nova senha](/img/account-page/change-password-form.png)

### Zona de Perigo: {#danger-zone}

Também temos duas opções que são exibidas na parte **Zona de Perigo**: **Excluir site** e **Excluir Account**. Ambas ficam na parte Zona de Perigo porque essas duas ações são irreversíveis. Se seus clientes excluírem o site ou a Account deles, não poderão recuperá-los.

![Zona de Perigo com opções Excluir site e Excluir Account](/img/account-page/danger-zone.png)

Se seus clientes clicarem em qualquer uma dessas duas opções, será exibida uma janela onde eles precisarão ativar a opção para remover o site ou a Account e serão avisados de que essa ação não pode ser desfeita.

![Caixa de diálogo de confirmação de Excluir site](/img/account-page/delete-site-confirm.png)

![Caixa de diálogo de confirmação de Excluir Account](/img/account-page/delete-account-confirm.png)

Se eles excluírem o site, a Account e a assinatura deles continuarão intactas. Eles apenas perderão todo o conteúdo do site. Se eles excluírem a Account, todos os sites, assinaturas e informações referentes a essa Account serão perdidos.
