---
title: Notas de versão
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Notas de lançamento

## Versão 2.13.0 — Lançada em 2026-06-05

- Novo: Adicionado suporte a tenants soberanos para fluxos de conta de cliente, finalização de compra, faturamento, site, fatura, troca de modelo e mapeamento de domínio, para que redes de tenants possam direcionar clientes de volta ao site principal para ações gerenciadas.
- Novo: Adicionadas verificações de credenciais de renovação para associações recorrentes, para que gateways possam desativar a renovação automática quando um contrato de cobrança salvo, assinatura ou token de cofre estiver ausente.
- Novo: Adicionada publicação de loopback verificada por HMAC para criação pendente de site, a fim de tornar o provisionamento da finalização de compra para o site mais confiável em hosts nos quais tarefas em segundo plano sofrem atrasos.
- Novo: Adicionados pontos de extensão para desenvolvedores para URLs de SSO, domínios base de formulário de finalização de compra e criação automática de registros de domínio.
- Correção: SSO está mais confiável em domínios mapeados, visitas anônimas ao broker, logout e conflitos de dependência entre plugins.
- Correção: A criação pendente de site agora se recupera de sinalizadores de publicação obsoletos e evita deixar clientes presos na tela de criação de site.
- Correção: Registros de domínio não são mais criados para domínios base compartilhados de formulário de finalização de compra, e tarefas em segundo plano de provedores de host não utilizados são ignoradas quando nenhuma integração está ativa.
- Correção: Casos extremos de finalização de compra, endereço de faturamento, redefinição de senha, verificação de email, troca de modelo, tours e Dashboard do cliente não bloqueiam mais os fluxos normais dos clientes.
- Correção: Emails de transmissão agora mantêm os destinatários privados, evitando erros fatais de SMTP/plugin quando listas de destinatários ou transportes de email falham.
- Correção: Renovações de associação, exibição de expiração e casos extremos de cobrança de pagamento agora evitam expirações imediatas, falhas ou pagamentos obrigatórios perdidos.
- Melhorado: A compatibilidade com WordPress é testada até a versão 7.0, os assets Vue de produção são recompilados a partir das fontes npm, e a cobertura ponta a ponta do Cypress agora exercita mais fluxos de finalização de compra, configuração, SSO e gateways.

## Versão 2.12.0 — Lançada em 2026-05-15

- Novo: Adicionado Hostinger (hPanel) como provedor de host compatível com integração de mapeamento de domínio
- Novo: O Exportador de Sites agora lida com pacotes de importação de rede para restauração simplificada de sites em toda a rede
- Correção: Emails de transmissão em BCC agora usam um cabeçalho de destinatários não divulgados para evitar expor endereços de destinatários
- Correção: A data de expiração da associação não é mais corrompida ao salvar com um valor que não é uma data
- Correção: Atualizações de associação do Stripe agora limpam descontos corretamente sem chamar a API deleteDiscount obsoleta
- Correção: Redirecionamentos de SSO em sites com domínio mapeado agora são limitados para evitar loops infinitos de redirecionamento
- Correção: A seleção do seletor de imagens do assistente de configuração agora atualiza corretamente o modelo de dados subjacente
- Correção: A CLI do Exportador de Sites agora preserva a seleção correta do site de rede padrão
- Melhorado: Removido o wp-cli empacotado do pacote do plugin, reduzindo o tamanho do plugin

## Versão 2.11.0 — Lançada em 2026-05-11

- Novo: Exportações de site agora incluem um `index.php` auto-inicializável, para que o ZIP possa ser instalado em um host novo sem uma instalação separada de plugin.
- Novo: A exportação de rede permite que administradores exportem todos os subsites em um único arquivo a partir da página administrativa de Exportação de Site.
- Novo: A alternância de plano Permitir Modelos de Site agora é aplicada por meio de uma cadeia de fallback, restringindo corretamente a disponibilidade de modelos para limites do plano.
- Novo: O editor de formulário de finalização de compra avisa quando um produto é adicionado sem um campo obrigatório configurado.
- Novo: A aba de configurações de Importação/Exportação agora descreve claramente seu escopo e vincula diretamente à ferramenta de Exportação de Site.

## Versão 2.10.0 — Lançada em 2026-05-05

- Novo: Assistente de configuração guiada do PayPal para entrada manual de credenciais com controle por sinalizador OAuth para configuração perfeita do gateway.
- Novo: Painel do cliente para troca de modelo redesenhado com cartão de modelo atual, grade persistente e botão **Redefinir modelo atual**.
- Correção: A troca de modelo não trava mais a UI em caso de falha de AJAX.
- Correção: Estados de permissão de troca de modelo protegidos contra acesso não autorizado.
- Correção: Entradas de substituição de site validadas antes de salvar.
- Correção: Solicitação de endereço de faturamento agora exibida quando o endereço está vazio.
- Correção: Avisos de depreciação de null-para-string do PHP 8.1 resolvidos.
- Correção: Currents carregados sob demanda antes do hook init para evitar problemas de timing.
- Correção: Caminho de SSO filtrado respeitado em todos os fluxos de login.
- Correção: Opções de identidade de site em branco preservadas ao salvar.

## Versão 2.9.0 — Lançada em 2026-04-30

- Novo: Exportação e importação de site único adicionadas em **Ferramentas > Exportar e Importar**.
- Correção: Arquivos ZIP de exportação agora servidos por meio de um endpoint de download autenticado.
- Correção: Risco de injeção de SQL e problemas de consulta em consultas de exportação/importação pendentes corrigidos.
- Correção: Site pendente não publicado quando o administrador verifica manualmente o email do cliente.
- Correção: Registros pending_site órfãos limpos quando a associação está ausente.
- Correção: Padding da navegação de configurações e navegação por âncora de pesquisa corrigidos.
- Correção: Sites pendentes agora exibidos primeiro na visualização Todos os Sites.
- Correção: Cabeçalho User-Agent do provedor de capturas de tela (mShots) adicionado para evitar erros 403.
- Correção: Dependência circular da agenda cron de importação resolvida.
- Correção: IDs de tour normalizados para sublinhados nas chaves de configurações de usuário.
- Melhorado: ZipArchive agora usado em vez de Alchemy/Zippy para melhor compatibilidade.

## Versão 2.8.0 — Lançada em 2026-04-29

- Novo: Alternância Enable Jumper adicionada à UI de configurações de Other Options.
- Novo: Coluna de status adicionada à tabela de lista de formulários de checkout.
- Novo: Carregador de arquivo sunrise de addon para extensões sunrise personalizadas de MU-plugin.
- Melhorado: Configuração de opt-in para relatório de erros removida da página de configurações.
- Correção: Cartão do site da página de agradecimento — imagem agora limitada e links estilizados corretamente.
- Correção: Provedor de captura de tela alterado de thum.io para WordPress.com mShots.
- Correção: Enable Registration e Default Role agora definem os padrões corretos em uma instalação nova.
- Correção: `get_site_url()` não retorna mais vazio quando o domínio inclui uma porta.
- Correção: Arquivos de mídia clonados agora copiados corretamente quando a configuração `copy_media` estava vazia.
- Correção: Cache de objetos invalidado corretamente após gravação de sitemeta em ativação na rede.
- Correção: Domínio personalizado promovido automaticamente para primário na verificação de DNS para domínios de 3 partes.
- Correção: Membership pendente cancelada quando o pagamento expirado é limpo.
- Correção: Verificador de força de senha reanexado após o prompt de login inline ser dispensado.
- Correção: Recarregamento infinito da página interrompido na página de agradecimento quando o site já foi criado.
- Correção: Opção de cadastro do core do WP sincronizada na ativação do plugin e ao salvar as configurações.
- Correção: Proteção contra expiração nula adicionada em `calculate_expiration` para compatibilidade com PHP 8.4.
- Correção: Cadastros duplicados bloqueados quando o cliente já tem uma membership ativa.
- Correção: Verificação de nulo adicionada para `date_expiration` no checkout.
- Correção: Provisionamento de site reforçado — limitações, inferência de membership, promoção de domínio.
- Correção: Rótulo de status da verificação pré-instalação corrigido para NOT Activated quando a verificação falha.
- Correção: Domínio de checkout usado para URLs de verificação de e-mail.
- Correção: Login automático após o checkout quando nenhum campo de senha está presente.
- Correção: Memberships gratuitas não expiram mais — tratadas como vitalícias.
- Correção: Bloqueio de verificação de e-mail mantém a publicação do site até que o cliente verifique o e-mail.
- Correção: Caminho base do endpoint da API SES v2 e rota de identidade corrigidos.
- Correção: Hook `wu_inline_login_error` emitido no bloco catch de pré-envio.
