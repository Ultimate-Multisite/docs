---
title: Página da Conta do Cliente
sidebar_position: 14
_i18n_hash: 92f8a44adfaf871b0a881fbc76bc0084
---
# Página da Conta do Seu Cliente (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Quando os clientes se inscrevem em um plano na sua rede, eles têm acesso a um site e ao seu painel com informações importantes sobre seus pagamentos, assinaturas, domínios, limitações do plano, etc...

Neste tutorial, vamos guiá-lo pela página da conta do cliente e você verá o que seus clientes podem ver e fazer dentro dela.

## A Página da Conta

A página da conta pode ser acessada clicando em **Account** dentro do painel do seu cliente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LrGNKCDc8R.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FTDgqcwaO0.png)

Depois que um cliente clicar nela, ele verá uma visão geral de sua assinatura, endereço de cobrança, faturas, domínios, limitações do site e também poderá alterar o ****Modelo do Site** (se permitido na sua rede).

Eles também podem mudar a assinatura para outro plano ou comprar outro pacote ou serviço que você oferece. Vamos analisar cada seção separadamente.

### Visão Geral da Sua Assinatura:

O primeiro bloco logo abaixo do nome do site do seu cliente mostra uma visão geral do plano atual e dos serviços/pacotes que foram adquiridos com ele. O bloco também exibe o número da assinatura, o valor inicial pago, quanto custa o plano e qualquer serviço/pacote, e quantas vezes a assinatura foi faturada. Eles também podem ver se a assinatura está **Ativa**, **Expirada** ou **Cancelada**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-XNTPsXaqzp.png)

Logo abaixo desse bloco, seus clientes podem ver os blocos **Sobre Este Site** e **Limites do Site**. Esses blocos mostram todas as limitações que vêm com o plano: espaço em disco, posts, páginas, visitas, etc... Esses limites podem ser configurados em cada página de plano em **Ultimate Multisite > Products**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6kVmMDoiCU.png)

No lado direito de **Sua Assinatura**, os clientes podem clicar em **Alterar**. Isso mostrará todos os planos e pacotes/serviços disponíveis. Se eles escolherem outro plano, as limitações do plano serão aplicadas no lugar das limitações atuais da assinatura - não importa se estão reduzindo ou aumentando o plano.

Agora, se seus clientes escolherem comprar pacotes ou serviços para esta assinatura atual - como mais espaço em disco ou visitas - a assinatura atual não será alterada, apenas os novos pacotes serão adicionados a ela.

Observe que os códigos de cupom não podem ser adicionados nesta página de alteração de assinatura. Se o cliente usou um código de cupom na primeira compra da assinatura, o código também será aplicado a esta nova assinatura.

### Atualizando o Endereço de Cobrança:

Na página da conta, seus clientes também podem atualizar seu endereço de cobrança. Eles só precisam clicar em **Update** ao lado de _Billing Address_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GLQ21kppU2.png)

Uma nova janela aparecerá para o cliente. Tudo que ele precisa fazer é preencher o novo endereço e clicar em _Save Changes_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Z2nY05cYvD.png)

### Alterando o Modelo do Site:

Para permitir que seus clientes alterem seus modelos de site, você precisa ir para **Ultimate Multisite > Settings > Sites** e ativar a opção **Allow Template Switching**.

Além disso, em **Ultimate Multisite > Products**, selecione seus planos e vá para a aba **Site Templates**. Certifique-se de que a opção **Allow Site Templates** esteja ativada e, em **Site Template Selection Mode**, a opção **Choose Available Site Templates** esteja selecionada.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rjixD7iShD.png)

Você poderá ver todos os modelos de site disponíveis em seu site. Escolha quais deseja tornar disponíveis e quais não deseja disponibilizar para os clientes assinantes deste plano. Observe que essas opções também afetam o formulário de checkout, então qualquer modelo escolhido como **Not Available** não aparecerá na página de registro para este plano.

Agora seus clientes podem clicar em **Change Site Template** dentro da página da conta.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5pdvAuh6h3.png)  
Uma lista de todos os modelos de site disponíveis para este plano aparecerá para o cliente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bQSA663xNo.png)

Depois de selecionar o modelo que desejam mudar, eles serão solicitados a confirmar a alteração.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6azvPydgAU.png)

Depois de ativar a confirmação e clicar em **Process Switch**, o novo modelo de site será usado no site do seu cliente.

### Adicionando Domínios Personalizados:

Seus clientes também terão a opção de adicionar um domínio personalizado para este plano na página da conta. Para permitir que seus clientes usem domínios personalizados, vá para **Ultimate Multisite > Settings >** **Domain Mapping**.

Ative a opção **Enable Domain Mapping**. Isso permitirá que seus clientes usem domínios personalizados em nível de rede.

Não se esqueça também de verificar se o mapeamento de domínio está habilitado por produto - pois você pode limitar um produto para não permitir que seus clientes usem domínios personalizados.

Vá para **Ultimate Multisite > Products**. Selecione o plano de sua escolha e vá para a aba **Custom Domains**. Ative a opção **Allow Custom Domains**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-J7mrCTfet6.png)

Isso permitirá que todos os clientes assinantes deste plano específico usem domínios personalizados. Agora, na página da Conta, seus clientes podem adicionar um domínio personalizado clicando em **Add Domain**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0mbLgC86SG.png)

A primeira janela que abre mostrará aos seus clientes uma mensagem instruindo-os sobre como atualizar seus registros DNS para que este domínio personalizado funcione em sua rede.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-emhM26Abhn.png)

Esta mensagem pode ser editada (por você) em **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6ZjI8Fk6Gw.png)

Depois de clicar em **Next Step**, seus clientes podem adicionar o nome do domínio personalizado e escolher se esse domínio personalizado será o principal. Observe que seus clientes podem usar mais de um domínio personalizado para seus sites, então podem escolher qual será o principal.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-pSzZowjc2a.png)

Depois de clicar em **Add Domain**, o domínio será adicionada à conta do seu cliente. Tudo que eles precisam fazer agora é alterar os registros DNS deste domínio personalizado no registrador de domínios.

### Alterando a Senha:

Dentro do painel da conta, seus clientes também podem alterar sua senha clicando em **Change Password**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sihWaIk4B8.png)

Isso mostrará uma nova janela onde seus clientes precisarão preencher sua senha atual e, em seguida, preencher a nova senha que desejam usar.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5zCgtcHfgB.png)

### Zona de Perigo:

Também temos duas opções exibidas na seção **Danger Zone**: **Delete Site** e **Delete Account**. Elas estão ambas na Zona de Perigo porque essas duas ações são irreversíveis. Se seus clientes excluírem seu site ou sua conta, eles não poderão recuperá-los.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FMNX249rFi.png)

Se seus clientes clicarem em qualquer uma dessas duas opções, será exibida uma janela onde eles precisarão ativar a opção para remover o site ou a conta e serão avisados de que essa ação não pode ser desfeita.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MRI6taFdJK.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-itpv48GPgY.png)

Se eles excluírem seu site, sua conta e assinatura permanecerão intactas. Eles apenas perderão todo o conteúdo do site. Se eles excluírem sua conta, todos os sites, assinaturas e informações relacionadas a essa conta serão perdidos.
