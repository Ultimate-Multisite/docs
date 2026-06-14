---
title: Notas de lancements
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Notas de Lançamento

## Versión 2.13.0 — Lanzada en 2026-06-05

- Novo: Adicionada o suporte a *sovereign-tenant* para contas de cliente, *checkout*, fatura (*billing*), site, troca de *template* e mapeamento de domínios, para que as redes dos *tenants* possam direcionar os clientes de volta ao site principal para ações geridas.
- Novo: Adicionados verificações de credenciais de renovação para membros recorrentes, para que os *gateways* possam desativar a renovação automática quando faltar um acordo de faturação guardado, uma subscrição ou um *vault token*.
- Novo: Adicionada publicação com *loopback* verificada por HMAC para criação de sites pendentes, para tornar o provisionamento do *checkout*-para-site mais fiável em *hosts* onde os trabalhos em segundo plano têm atrasos.
- Novo: Adicionados pontos de extensão para URLs SSO, domínios base de formulário de *checkout* e criação automática de registros de domínio.
- Correção: O SSO é mais fiável através de domínios mapeados, visitas a brokers anónimos, *logout* e conflitos de dependências entre *plugins*.
- Correção: A criação de sites pendentes agora recupera-se de *flags* de publicação desatualizadas e evita que os clientes fiquem presos na tela de criação do site.
- Correção: Os registos de domínio não são mais criados para domínios base de formulário de *checkout* partilhados, e trabalhos em segundo plano do provedor de *host* não utilizados são ignorados quando não há integração ativa.
- Correção: Casos extremos no *checkout*, endereço de faturação, redefinição de palavra-passe, verificação de email, troca de *template*, tours e painel do cliente não bloqueiam mais os fluxos normais dos clientes.
- Correção: Os emails de *broadcast* agora mantêm os destinatários privados enquanto evitam erros fatais do SMTP/plugin quando as listas de destinatários ou transportes de correio falham.
- Correção: Casos extremos em renovações de membros, exibição de expiração e recolha de pagamentos agora evitam expirações imediatas, *crashes* ou pagamentos obrigatórios não efetuados.
- Melhorado: A compatibilidade com o WordPress é testada até à versão 7.0, os ativos de produção Vue são reconstruídos a partir das fontes npm e a cobertura de ponta a ponta do Cypress agora testa mais fluxos de *checkout*, configuração, SSO e *gateway*.

## Versión 2.12.0 — Lançada en 2026-05-15

- Novo: Adicionamos o Hostinger (hPanel) como provedor de host soportado con integración de mapeamento de domínios.
- Novo: O Site Exporter agora trata dos bundles de importación de rede para uma restauração simplificada da rede do site.
- Corrección: Os emails de broadcast BCC usam agora um cabeçalho de destinatários não revelados para evitar expor os endereços dos destinatários.
- Corrección: A data de expira da adesão não fica mais corrompida ao guardar com um valor que não é uma data.
- Corrección: As atualizações de adesão do Stripe agora limpam corretamente os descontos sem chamar a API `deleteDiscount` obsoleta.
- Corrección: Os redirecionamentos SSO em sites mapeados por domínio estão limitados para evitar loops infinitos de redirecionamento.
- Corrección: A seleção da ferramenta de escolha de imagem no assistente de configuração atualiza corretamente o modelo de dados subjacente.
- Corrección: O CLI do Site Exporter agora preserva a seleção correta do site de rede padrão.
- Melhorado: Removemos o `wp-cli` empacotado do pacote do plugin, reduzindo o tamanho do plugin.

## Versión 2.11.0 — Lançada en 2026-05-11

- Novo: As exportaciones de sitio agora empaquetam um `index.php` que se auto-inicia, para que o ZIP possa ser instalado num host novo sem a necessidade de instalar um plugin separado.
- Novo: A exportación de rede permite aos administradores exportar todos os subsites num único arquivo do painel de administração do Site Export.
- Novo: O interruptor de plano de Modelos de Site agora é aplicado através de uma cadeia de fallback, restringindo corretamente a disponibilidade dos modelos com base nos limites do plano.
- Novo: O editor do formulário de checkout alerta quando se adiciona um produto sem um campo obrigatório configurado.
- Novo: A aba de configurações de Importação/Exportação descreve claramente o seu âmbito e liga diretamente à ferramenta Site Export.

## Versión 2.10.0 — Lançada en 2026-05-05

- Novo: Wizard de configuração guiado do PayPal para entrada manual de credenciais com portão OAuth para uma configuração de gateway sem problemas.
- Novo: O painel do cliente da troca de template redesenhado com o cartão current-template, grade persistente e botão **Reset current template**.
- Correção: A troca de template não trava mais a interface em caso de falha AJAX.
- Correção: Os estados de permissão da troca de template estão protegidos contra acesso não autorizado.
- Correção: As entradas de sobrescrita do site são validadas antes de serem salvas.
- Correção: O prompt de endereço de cobrança agora é exibido quando o endereço está vazio.
- Correção: Os avisos de depreciação null-to-string do PHP 8.1 foram resolvidos.
- Correção: Sites carregados sob demanda atuais são carregados antes do hook init para evitar problemas de tempo.
- Correção: O caminho SSO filtrado é respeitado em todos os fluxos de login.
- Correção: As opções de identidade de site vazio são preservadas ao salvar.

## Versão 2.9.0 — Lançada em 30/04/2026

- Novo: Exportação e importação de site único adicionados sob **Tools > Export & Import**.
- Correção: Os arquivos ZIP de exportação agora são servidos através de um endpoint de download autenticado.
- Correção: O risco de injeção de SQL e problemas de consulta em consultas pendentes de exportação/importação corrigidos.
- Correção: O site pendente não é publicado quando o administrador verifica manualmente o e-mail do cliente.
- Correção: Os registros `pending_site` órfãos são limpos quando a associação está ausente.
- Correção: O preenchimento de navegação (padding) das configurações e a navegação por âncora da pesquisa corrigidos.
- Correção: Os sites pendentes agora aparecem primeiro na visualização Todos os Sites.
- Correção: O cabeçalho User-Agent do provedor de captura de tela (mShots) adicionado para evitar erros 403.
- Correção: A dependência circular do cron schedule de importação resolvida.
- Correção: Os IDs de Tour normalizados para underscores nas chaves das configurações do usuário.
- Melhoria: ZipArchive agora é usado em vez de Alchemy/Zippy para melhor compatibilidade.

## Versão 2.8.0 — Lançada em 29/04/2026

- Novo: Foi adicionado o seletor Jumper nas configurações da interface de Opções Adicionais.
- Novo: Foi adicionada a coluna de Status à tabela das listas dos formulários de checkout.
- Novo: Adicionado carregador de ficheiros sunrise para extensões personalizadas do MU-plugin sunrise.
- Melhorado: Removida a configuração de opt-in de relatórios de erro da página de configurações.
- Correção: Cartão do site na página de agradecimento — a imagem está agora limitada e os links estão estilizados corretamente.
- Correção: O provedor de capturas de ecrã foi alterado de thum.io para WordPress.com mShots.
- Correção: A opção de Registo e Papel Padrão agora definem os valores corretos na instalação nova.
- Correção: `get_site_url()` não retorna mais vazio quando o domínio inclui uma porta.
- Correção: Os ficheiros de mídia são agora copiados corretamente quando a configuração `copy_media` estava vazia.
- Correção: O object cache é invalidado corretamente após a escrita do sitemeta com network-activate.
- Correção: Domínio personalizado promovido automaticamente a primário na verificação DNS para domínios de 3 partes.
- Correção: A adesão pendente é cancelada quando o pagamento expirado é limpo.
- Correção: O verificador de força da palavra-passe reinicia após o descarte do prompt de login em linha.
- Correção: Recarregamento infinito da página parado na página de agradecimento quando o site já foi criado.
- Correção: A opção de registo do core do WP é sincronizada na ativação do plugin e no salvamento das configurações.
- Correção: Adicionado um guarda de expiração nulo em `calculate_expiration` para compatibilidade com PHP 8.4.
- Correção: Registo duplicado bloqueado quando o cliente já tem uma adesão ativa.
- Correção: Verificação nula adicionada para `date_expiration` no checkout.
- Correção: Provisionamento do site reforçado — limitações, inferência de adesão, promoção de domínio.
- Correção: O rótulo de estado pré-instalação corrigido para NÃO Ativado quando a verificação falha.
- Correção: Domínio de checkout usado para URLs de verificação de e-mail.
- Correção: Login automático após o checkout quando não há campo de palavra-passe presente.
- Correção: Adesões gratuitas não expiram mais — tratadas como tempo vitalício.

Corrección: El portal de verificación de correo electrónico mantiene el sitio no publicado hasta que el cliente verifica su dirección de correo electrónico.
Corrección: Se corrigió la ruta base del endpoint de API SES v2 y la ruta de identidad.
Corrección: El hook `wu_inline_login_error` se emite en el bloque catch antes de enviar el formulario.
