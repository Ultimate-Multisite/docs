---
title: Notas de Lançamento
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Notas de Lançamento

## Versão 2.12.0 — Lançada em 2026-05-15

- Novo: Adicionado Hostinger (hPanel) como um provedor de hospedagem suportado com integração de mapeamento de domínio
- Novo: O Site Exporter agora lida com pacotes de importação de rede para uma restauração de site em nível de rede mais simplificada
- Correção: E-mails de transmissão BCC agora usam um cabeçalho `undisclosed-recipients` para evitar a exposição dos endereços dos destinatários
- Correção: A data de expiração da associação não está mais corrompida ao salvar com um valor que não é uma data
- Correção: As atualizações de associação do Stripe agora limpam corretamente os descontos sem chamar a API `deleteDiscount` obsoleta
- Correção: Os redirecionamentos SSO em sites mapeados por domínio agora são limitados para evitar loops de redirecionamento infinitos
- Correção: A seleção do seletor de imagens do assistente de configuração agora atualiza corretamente o modelo de dados subjacente
- Correção: O CLI do Site Exporter agora preserva a seleção correta do site padrão da rede
- Melhorado: Removido o `wp-cli` empacotado do pacote do plugin, reduzindo o tamanho do plugin

## Versão 2.11.0 — Lançada em 2026-05-11

- Novo: As exportações de site agora empacotam um `index.php` auto-inicializável para que o ZIP possa ser instalado em uma hospedagem nova sem a instalação separada do plugin.
- Novo: A exportação de rede permite que os administradores exportem todos os subsites em um único arquivo a partir da página de administração do Site Export.
- Novo: O alternar o plano de Site Templates agora é forçado por uma cadeia de fallback, restringindo corretamente a disponibilidade do template para limites de plano.
- Novo: O editor de formulário de checkout alerta quando um produto é adicionado sem um campo obrigatório configurado.
- Novo: A aba de configurações de Importação/Exportação agora descreve claramente seu escopo e vincula diretamente à ferramenta Site Export.

## Versão 2.10.0 — Lançada em 2026-05-05

- Novo: Assistente de configuração guiado do PayPal para entrada manual de credenciais com portão de flag OAuth para configuração perfeita do gateway.
- Novo: O painel do cliente de alternância de template foi redesenhado com o cartão de template atual, grade persistente e o botão **Resetar template atual**.
- Correção: A alternância de template não trava mais a interface em caso de falha AJAX.
- Correção: Os estados de permissão de alternância de template foram protegidos contra acesso não autorizado.
- Correção: As entradas de substituição de site são validadas antes de serem salvas.
- Correção: O prompt de endereço de cobrança agora é exibido quando o endereço está vazio.
- Correção: Avisos de depreciação de `null` para string do PHP 8.1 foram resolvidos.
- Correção: O `Currents` é carregado preguiçosamente antes do hook `init` para evitar problemas de tempo.
- Correção: O caminho SSO filtrado é respeitado em todos os fluxos de login.
- Correção: As opções de identidade de site em branco são preservadas ao salvar.

## Versão 2.9.0 — Lançada em 2026-04-30

- Novo: Exportação e importação de site único adicionadas em **Ferramentas > Exportar e Importar**.
- Correção: Os arquivos ZIP de exportação agora são servidos através de um endpoint de download autenticado.
- Correção: Riscos de injeção SQL e problemas de consulta em consultas de exportação/importação pendentes foram corrigidos.
- Correção: O site pendente não é publicado quando o administrador verifica manualmente o e-mail do cliente.
- Correção: Registros `pending_site` órfãos são limpos quando a associação está faltando.
- Correção: O preenchimento de navegação de configurações e a navegação de âncora de busca foram corrigidos.
- Correção: Os sites pendentes agora são exibidos primeiro na visualização Todos os Sites.
- Correção: Adicionado cabeçalho User-Agent do provedor de captura de tela (mShots) para evitar erros 403.
- Correção: Dependência circular do cron de importação foi resolvida.
- Correção: IDs de tour normalizados para sublinhados nas chaves de configurações do usuário.
- Melhorado: Agora é usado o ZipArchive em vez de Alchemy/Zippy para melhor compatibilidade.

## Versão 2.8.0 — Lançada em 2026-04-29

- Novo: Toggle Habilitar Jumper adicionado à interface de configurações Outras Opções.
- Novo: Coluna de status adicionada à tabela de lista de formulários de checkout.
- Novo: Carregador de arquivos sunrise Addon para extensões customizadas do MU-plugin sunrise.
- Melhorado: Removida a opção de opt-in de relatório de erros da página de configurações.
- Correção: Cartão de site na página de agradecimento — a imagem agora está restrita e os links estilizados corretamente.
- Correção: O provedor de captura de tela foi alterado de thum.io para WordPress.com mShots.
- Correção: Habilitar Registro e Função Padrão agora definem valores padrão corretos na instalação nova.
- Correção: `get_site_url()` não retorna mais vazio quando o domínio inclui uma porta.
- Correção: Arquivos de mídia clonados agora copiados corretamente quando a configuração `copy_media` estava vazia.
- Correção: O cache de objetos é invalidado corretamente após a escrita de sitemeta `network-activate`.
- Correção: Domínio personalizado auto-promovido para primário na verificação DNS para domínios de 3 partes.
- Correção: Associação pendente cancelada quando o pagamento expirado é limpo.
- Correção: O verificador de força de senha é reanexado após o prompt de login inline ser dispensado.
- Correção: Recarregamento infinito da página interrompido na página de agradecimento quando o site já foi criado.
- Correção: Opção de registro do WP core sincronizada na ativação do plugin e no salvamento das configurações.
- Correção: Proteção contra expiração nula adicionada em `calculate_expiration` para compatibilidade com PHP 8.4.
- Correção: Inscrições duplicadas bloqueadas quando o cliente já possui uma associação ativa.
- Correção: Verificação nula adicionada para `date_expiration` no checkout.
- Correção: Provisionamento de site reforçado — limitações, inferência de associação, promoção de domínio.
- Correção: Rótulo de status de pré-instalação corrigido para NÃO Ativado quando a verificação falha.
- Correção: Domínio de checkout usado para URLs de verificação de e-mail.
- Correção: Auto-login após o checkout quando nenhum campo de senha está presente.
- Correção: Associações gratuitas não expiram mais — tratadas como vitalícias.
- Correção: O portão de verificação de e-mail retém a publicação do site até que o cliente verifique o e-mail.
- Correção: Caminho base do endpoint da API SES v2 e rota de identidade corrigidos.
- Correção: O hook `wu_inline_login_error` é emitido no bloco `pre-submit` catch.
