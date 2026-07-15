---
title: Página da Conta do Cliente
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Página da Conta do Seu Cliente (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Quando os clientes assinam um plano na sua rede, eles ganham acesso a um website e ao seu painel com informações importantes sobre pagamentos, membros, domínios, limitações de planos, etc...

Neste tutorial, vamos guiá-lo pela página da conta do cliente e você verá o que seus clientes podem ver e fazer nela.

## A Página da Conta {#the-account-page}

A página da conta é acessível clicando em **Conta** dentro do painel do seu cliente.

![Menu de conta no painel do cliente](/img/account-page/account-menu.png)

Em redes de inquilino soberano (sovereign tenant networks), o Ultimate Multisite v2.13.0 mantém essa experiência de gerenciamento de clientes no site principal. Se um cliente abrir as opções de conta, checkout, faturamento, fatura, gerenciamento do site, troca de template ou mapeamento de domínio a partir de um inquilino soberano, a ação retorna ao painel de cliente do site principal para que os registros de faturamento e membros da rede permaneçam autoritativos.

Quando o cliente chega através de um inquilino soberano, o painel de cliente do site principal pode incluir um link de retorno para o site do inquilino. O link de retorno só é exibido quando o Ultimate Multisite consegue validar o destino do retorno como um dos sites do cliente, o que evita redirecionamentos arbitrários enquanto preserva o fluxo de trabalho do inquilino.

![Visão geral da página da conta do cliente](/img/account-page/overview.png)

Depois que o cliente clicar nela, ele verá uma visão geral de sua associação, endereço de faturamento, faturas, domínios, limitações do site e também poderá alterar o ****Template do Site** (se permitido na sua rede).

Eles também podem mudar a associação para outro plano ou comprar outro pacote ou serviço que você oferece. Vamos dar uma olhada em cada seção separadamente.

### Visão Geral da Sua Assinatura: {#your-membership-overview}

O primeiro bloco logo abaixo do nome do site dos seus clientes mostra uma visão geral do plano atual e dos serviços/pacotes que foram comprados com ele. O bloco também exibe o número da assinatura, o valor inicial pago por ela, quanto custa o plano e qualquer serviço/pacote, e quantas vezes essa assinatura foi faturada. Eles também podem ver se a assinatura está **Ativa**, **Expirada** ou **Cancelada**.

![Visão geral da assinatura mostrando plano, valor e detalhes de faturamento](/img/account-page/membership-card.png)

Logo abaixo deste bloco, seus clientes podem ver os blocos **Sobre Este Site** e **Limites do Site**. Estes blocos mostram todas as limitações que vêm com o plano deles: espaço em disco, posts, páginas, visitas, etc... Esses limites podem ser configurados em cada página de plano no **Ultimate Multisite > Products**.

![Blocos Sobre Este Site e Limites do Site mostrando limitações do plano](/img/account-page/site-limits.png)

No lado direito de **Sua Assinatura**, os clientes podem clicar em **Alterar**. Isso mostrará todos os planos e pacotes/serviços disponíveis. Se eles escolherem outro plano, as limitações desse novo plano entrarão em vigor em vez das limitações atuais da assinatura — não importa se estiver fazendo um downgrade ou upgrade.

Agora, se seus clientes escolherem comprar pacotes ou serviços para esta assinatura atual — como mais espaço em disco ou visitas —, a assinatura atual não será alterada, mas apenas os novos pacotes serão adicionados a ela.

Observe que códigos de cupom não podem ser adicionados nesta página de alteração de assinatura. Se o cliente usou um código de cupom na primeira compra da assinatura, o código também se aplicará a esta nova assinatura.

### Atualizando o Endereço de Cobrança: {#updating-the-billing-address}

Na página da conta, seus clientes também podem atualizar o endereço de cobrança. Eles só precisam clicar em **Atualizar** ao lado de _Billing Address_ (Endereço de Cobrança).

![Seção de Endereço de Cobrança com botão Atualizar](/img/account-page/billing-address.png)

Uma nova janela aparecerá para o seu cliente. Tudo o que ele precisa fazer é preencher o novo endereço e clicar em _Save Changes_ (Salvar Alterações).

![Formulário de atualização do endereço de cobrança](/img/account-page/billing-address-form.png)

### Alterando o Modelo do Site: {#changing-the-site-template}

Para permitir que seus clientes mudem os modelos dos sites, você precisa ir em **Ultimate Multisite > Settings > Sites** e ativar a opção **Allow Template Switching** (Permitir Troca de Modelos).

Além disso, em **Ultimate Multisite > Products**, selecione seus planos e vá para a aba **Site Templates**. Certifique-se de que a opção **Allow Site Templates** esteja ativada e, em **Site Template Selection Mode** (Modo de Seleção de Modelo do Site), a opção **Choose Available Site Templates** (Escolher Modelos de Site Disponíveis) esteja selecionada.

![Aba de modelos de site do produto com o modo de seleção de modelo](/img/config/product-site-templates.png)

Você poderá ver todos os modelos de site disponíveis no seu website. Escolha quais você deseja disponibilizar e quais não devem estar disponíveis para os clientes inscritos sob este plano. Observe que esta opção também afeta o formulário de checkout, então qualquer modelo escolhido como **Not Available** (Não Disponível) não aparecerá na página de registro para este plano.

Agora seus clientes podem clicar em **Change Site Template** (Mudar Modelo do Site) dentro da página da conta deles.

![Botão Mudar Modelo do Site na página da conta](/img/account-page/change-template-button.png)

O Ultimate Multisite 2.10.0 mostra um painel de troca de modelos redesenhado. O painel começa com um **current-template card** (cartão do modelo atual) para que os clientes possam ver qual modelo está ativo antes de escolher uma substituição.

Uma grade persistente de modelos de site disponíveis permanece visível enquanto os clientes revisam suas opções. Isso ajuda eles a comparar os modelos permitidos para o plano sem perder de vista a seleção atual.

![Lista de modelos de site disponíveis para o plano](/img/config/site-templates-list.png)

Após selecionar aquele que deseja mudar, serão solicitados a confirmar a alteração.

![Diálogo de confirmação da troca de modelo de site](/img/account-page/template-switch-confirm.png)

Depois de ativar a confirmação e clicar em **Process Switch** (Processar Troca), o novo modelo de site será usado no site do seu cliente.

Os clientes também podem usar **Reset current template** (Redefinir modelo atual) deste painel quando precisarem redefinir o site para o modelo atualmente atribuído. Assim como ao trocar para outro modelo, redefinir um modelo pode sobrescrever o conteúdo do site, então os clientes devem apenas confirmar se entenderem a ação de redefinição.

### Adicionando Domínios Personalizados: {#adding-custom-domains}

Seus clientes também terão a opção de adicionar um domínio personalizado para este plano na página da conta deles. Para permitir que seus clientes usem domínios personalizados, vá em **Ultimate Multisite > Settings >** **Domain Mapping** (Mapeamento de Domínio).

Ative a opção **Enable Domain Mapping** (Habilitar Mapeamento de Domínio). Isso permitirá que seus clientes usem domínios personalizados em nível de rede.

Não se esqueça também de verificar se o mapeamento de domínio está habilitado por produto — porque você pode limitar um produto para não permitir que seus clientes usem domínios personalizados.

Vá em **Ultimate Multisite > Products** (Produtos). Selecione o plano de sua escolha e vá para a aba **Custom Domains** (Domínios Personalizados). Ative a opção **Allow Custom Domains** (Permitir Domínios Personalizados).

![Aba Domínios Personalizados com o seletor Permitir Domínios Personalizados](/img/config/product-custom-domains.png)

Isso permitirá que todos os clientes inscritos neste plano específico usem domínios personalizados. Agora, na página de Conta, seus clientes podem adicionar um domínio personalizado clicando em **Adicionar Domínio**.

![Botão Adicionar Domínio na página de conta](/img/account-page/add-domain-button.png)

A primeira janela que abrir mostrará aos seus clientes uma mensagem instruindo-os sobre como atualizar seus registros DNS para fazer este domínio personalizado funcionar na sua rede.

![Instruções de DNS mostradas ao adicionar um domínio personalizado](/img/account-page/add-domain-dns.png)

Esta mensagem pode ser editada (por você) em **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Configuração Adicionar Nova Instrução de Domínio no Mapeamento de Domínios](/img/config/settings-domain-mapping.png)

Aqui está uma visualização completa da página de configurações de mapeamento de domínio:

![Página completa das configurações de mapeamento de domínio](/img/config/settings-domain-mapping-full.png)

Após clicar em **Próximo Passo**, seus clientes podem adicionar o nome do seu domínio personalizado e escolher se este domínio personalizado será o principal. Observe que seus clientes podem usar mais de um domínio personalizado para seus sites, então eles podem escolher qual será o principal.

![Entrada do nome do domínio personalizado com opção de domínio principal](/img/account-page/add-domain-primary.png)

Após clicar em **Adicionar Domínio**, o domínio será adicionado à conta do seu cliente. Tudo o que eles precisam fazer agora é alterar os registros DNS deste domínio personalizado no registrador de domínio deles.

### Alterar Senha: {#changing-password}

Dentro do painel da conta, seus clientes também podem mudar a senha clicando em **Alterar Senha**.

![Botão Alterar Senha na página de conta](/img/account-page/change-password-button.png)

Isso mostrará uma nova janela onde seus clientes precisarão inserir a senha atual e depois a nova senha que desejam usar.

![Formulário de alteração de senha com campos para senha atual e nova](/img/account-page/change-password-form.png)

### Zona de Perigo: {#danger-zone}

Também temos duas opções mostradas na parte da **Zona de Perigo**: **Excluir Site** e **Excluir Conta**. Ambas estão na Zona de Perigo porque essas duas ações são irreversíveis. Se seus clientes excluírem o site ou a conta deles, eles não conseguirão recuperá-las.

![Zona de Perigo com opções Excluir Site e Excluir Conta](/img/account-page/danger-zone.png)

Se seus clientes clicarem em qualquer uma dessas duas opções, será exibida uma janela onde eles precisarão ativar a opção para remover o site ou conta e serão avisados de que essa ação não pode ser desfeita.

![Diálogo de confirmação Excluir Site](/img/account-page/delete-site-confirm.png)

![Diálogo de confirmação Excluir Conta](/img/account-page/delete-account-confirm.png)

Se eles excluírem o site, a conta e a associação deles permanecerão intactas. Eles apenas perderão todo o conteúdo do site. Se eles excluírem a conta, todos os sites, associações e informações relativas a essa conta serão perdidos.
