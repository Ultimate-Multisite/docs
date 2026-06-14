---
title: Notas de Lançamento
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Notas de Lançamento

## Versão 2.13.0 — Lançada em 05/06/2026

Novo: Adicionamos suporte a inquilinos soberanos (sovereign-tenant) para fluxos de conta do cliente, checkout, faturamento, site, fatura, troca de templates e mapeamento de domínio, permitindo que as redes de inquilinos direcionem os clientes de volta ao site principal para ações gerenciadas.
Novo: Adicionamos verificações de credenciais de renovação para assinaturas recorrentes, para que os gateways possam desativar a renovação automática quando estiver faltando um acordo de faturamento salvo, assinatura ou token do vault.
Novo: Adicionamos publicação loopback verificada por HMAC para criação de sites pendentes, tornando o provisionamento de checkout-para-site mais confiável em hosts onde tarefas em segundo plano são atrasadas.
Novo: Adicionamos pontos de extensão para desenvolvedores para URLs SSO, domínios base de formulário de checkout e criação automática de registros de domínio.
Correção: O SSO é mais confiável entre domínios mapeados, visitas a brokers anônimos, logout e conflitos de dependência entre plugins.
Correção: A criação de sites pendentes agora se recupera de flags de publicação desatualizadas e evita deixar os clientes presos na tela de criação do site.
Correção: Registros de domínio não são mais criados para domínios base de formulário de checkout compartilhados, e tarefas em segundo plano do provedor de host não utilizadas são puladas quando nenhuma integração está ativa.
Correção: Casos extremos no checkout, endereço de faturamento, redefinição de senha, verificação de e-mail, troca de templates, tours e painel do cliente não bloqueiam mais fluxos normais dos clientes.
Correção: E-mails de broadcast agora mantêm os destinatários privados enquanto evitam erros fatais do SMTP/plugin quando as listas de destinatários ou transportes de e-mail falham.
Correção: Casos extremos em renovações de membros, exibição de expiração e coleta de pagamentos agora evitam expirações imediatas, travamentos ou pagamentos obrigatórios perdidos.
Melhoria: A compatibilidade com o WordPress é testada até a versão 7.0, os ativos de produção Vue são reconstruídos a partir das fontes npm, e a cobertura end-to-end do Cypress agora executa mais fluxos de checkout, configuração, SSO e gateway.

## Versão 2.12.0 — Lançada em 15/05/2026

- Novo: Adicionado Hostinger (hPanel) como provedor de hospedagem suportado com integração de mapeamento de domínio
- Novo: O Site Exporter agora lida com pacotes de importação de rede para uma restauração de site em toda a rede simplificada
- Correção: E-mails de broadcast BCC agora usam um cabeçalho de destinatários não revelados para evitar expor os endereços dos destinatários
- Correção: A data de expiração da associação não fica mais corrompida ao salvar com um valor que não é uma data
- Correção: As atualizações de associação do Stripe agora limpam corretamente os descontos sem chamar a API `deleteDiscount` descontinuada
- Correção: Os redirecionamentos SSO em sites mapeados por domínio agora são limitados para evitar loops infinitos de redirecionamento
- Correção: A seleção de imagem no assistente de configuração agora atualiza corretamente o modelo de dados subjacente
- Correção: O CLI do Site Exporter agora preserva a seleção correta do site da rede padrão
- Melhoria: Removido o `wp-cli` empacotado do pacote do plugin, reduzindo o tamanho do plugin

## Versão 2.11.0 — Lançada em 11/05/2026

- Novo: As exportações de site agora empacotam um `index.php` que se auto-inicia, para que o ZIP possa ser instalado em um host novo sem a necessidade de instalar um plugin separado
- Novo: A exportação de rede permite que os administradores exportem todos os subsites em um único arquivo da página de administração do Site Export
- Novo: O seletor de plano de Modelos de Site agora é aplicado através de uma cadeia de fallback, restringindo corretamente a disponibilidade dos modelos para os limites do plano
- Novo: O editor do formulário de checkout alerta quando um produto é adicionado sem um campo obrigatório configurado
- Novo: A aba de configurações de Importação/Exportação agora descreve claramente seu escopo e fornece um link direto para a ferramenta Site Export

## Versão 2.10.0 — Lançada em 05/05/2026

- Novo: Assistente de configuração guiado do PayPal para entrada manual de credenciais com *flag* OAuth para configuração de gateway sem problemas.
- Novo: Painel de troca de template redesenhado com o cartão current-template, grade persistente e botão **Resetar template atual**.
- Correção: A troca de template não trava mais a interface em caso de falha no AJAX.
- Correção: Os estados de permissão da troca de template estão protegidos contra acesso não autorizado.
- Correção: Entradas de sobrescrita do site validadas antes de serem salvas.
- Correção: O prompt de endereço de cobrança agora é exibido quando o endereço está vazio.
- Correção: Avisos de depreciação null-to-string do PHP 8.1 resolvidos.
- Correção: Sites carregados sob demanda atuais são carregados antes do hook init para evitar problemas de tempo.
- Correção: O caminho SSO filtrado é respeitado em todos os fluxos de login.
- Correção: Opções de identidade de site vazio preservadas ao salvar.

## Versão 2.9.0 — Lançada em 30/04/2026

- Novo: Exportação e importação de site único adicionados na seção **Ferramentas > Exportar e Importar**.
- Correção: Arquivos ZIP de exportação agora são servidos através de um endpoint de download autenticado.
- Correção: Risco de injeção de SQL e problemas de consulta em requisições pendentes de exportação/importação corrigidos.
- Correção: O site pendente não é publicado quando o administrador verifica manualmente o e-mail do cliente.
- Correção: Registros `pending_site` órfãos são limpos quando a associação está ausente.
- Correção: Recuo de navegação da barra de configurações e âncora de pesquisa corrigidos.
- Correção: Os sites pendentes agora aparecem primeiro na visualização Todos os Sites.
- Correção: Cabeçalho User-Agent do provedor de captura de tela (mShots) adicionado para evitar erros 403.
- Correção: Dependência circular do cron importador resolvida.
- Correção: IDs de Tour normalizados para underscores nas chaves de configurações do usuário.
- Melhoria: ZipArchive agora é usado em vez de Alchemy/Zippy para melhor compatibilidade.

## Versão 2.8.0 — Lançada em 29/04/2026

- Novo: Adicionado o seletor Jumper nas configurações da interface de Opções.
- Novo: Coluna de status adicionada à tabela de formulários de checkout.
- Novo: Carregador de arquivo sunrise para add-ons MU-plugin sunrise personalizados.
- Melhorado: Removida a configuração de opt-in de relatórios de erros da página de configurações.
- Correção: Cartão do site na página de agradecimento — imagem agora restrita e links estilizados corretamente.
- Correção: O provedor de capturas de tela mudou de thum.io para WordPress.com mShots.
- Correção: Habilitar Registro e Função Padrão agora define os valores padrão corretos na instalação nova.
- Correção: `get_site_url()` não retorna mais vazio quando o domínio inclui uma porta.
- Correção: Arquivos de mídia clonados agora são copiados corretamente quando a configuração `copy_media` estava vazia.
- Correção: O cache de objetos é invalidado corretamente após a escrita do sitemeta com network-activate.
- Correção: Domínio personalizado promovido automaticamente para primário na verificação DNS para domínios de 3 partes.
- Correção: Membro pendente cancelado quando o pagamento expirado é limpo.
- Correção: Verificador de força de senha reiniciado após o descarte do prompt de login inline.
- Correção: Recarregamento infinito da página interrompido na página de agradecimento quando o site já foi criado.
- Correção: Opção de registro do core do WP sincronizada na ativação do plugin e salvamento das configurações.
- Correção: Proteção de expiração nula adicionada em `calculate_expiration` para compatibilidade com PHP 8.4.
- Correção: Registros duplicados bloqueados quando o cliente já possui uma assinatura ativa.
- Correção: Verificação nula adicionada para `date_expiration` no checkout.
- Correção: Provisionamento do site endurecido — limitações, inferência de membros, promoção de domínio.
- Correção: Rótulo de status de pré-instalação corrigido para NÃO Ativado quando a verificação falha.
- Correção: Domínio de checkout usado para URLs de verificação de e-mail.
- Correção: Login automático após o checkout quando não há campo de senha presente.
- Correção: Assinaturas gratuitas não expiram mais — tratadas como vitalícias.

- Correção: O portão de verificação de e-mail impede a publicação do site até que o cliente verifique o e-mail.
- Correção: O caminho base do endpoint da API SES v2 e a rota de identidade foram corrigidos.
- Correção: O hook `wu_inline_login_error` é emitido no bloco catch antes do envio prévio.
