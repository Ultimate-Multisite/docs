---
title: Admin Page Creator Registro de alterações
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Registro de Alterações do Criador de Página Administrativa

### Versão 1.9.0 - Lançado em 2026-01-18

* Corrigido: Erros fatais ao ativar.
* Refatorado: Classes de origem de conteúdo para usar o trait Singleton com inicialização adequada do construtor pai.
* Corrigido: Erros de compilação de template Vue.js que impediam o seletor de tipo de conteúdo de ser renderizado.
* Corrigido: Propriedades de dados Vue ausentes (template_id, external_link_url_embedable, external_link_url_checking).
* Corrigido: Editor TinyMCE não inicializando corretamente na carga da página.
* Corrigido: Arquivo de suporte Divi não sendo carregado automaticamente via Composer.
* Corrigido: Sintaxe PHP corrompida na classe de suporte Divi.
* Melhorado: Organização e minificação de ativos JavaScript.
* Melhorado: Compatibilidade com as versões mais recentes do WordPress e dos construtores de página.

= Versão: 1.8.8 - Lançado em 2025-09-28

* Renomear prefixo para ultimate-multisite; atualizar domínio de texto; aumento de versão.

### Versão 1.8.7 - 04/10/2023

* Corrigido: Erro fatal ao tentar adicionar nova página administrativa.
* Corrigido: Conflito com prefixo de folhas de estilo Oxygen.

### Versão 1.8.6 - 09/08/2023

* Adicionado: Opção para exibir dados do site principal ou do sub-site atual.
* Adicionado: Suporte ao Editor de Blocos do WordPress (Gutenberg).
* Corrigido: Problema com ativos de página Brizy não carregando.

### Versão 1.8.5 - 09/12/2020

* Corrigido: Problema com Opções de Tela para ocultar o menu que não desaparecia.

### Versão 1.8.4 - 11/11/2020

* Corrigido: Suporte ao Multisite Ultimate v2.

### Versão 1.8.3 - 01/10/2020

* Corrigido: Incompatibilidades com Beaver Builder da versão anterior.
* Corrigido: Inconsistências de margem com WP 5.5.

### Versão 1.8.2 - 21/09/2020

* Corrigido: Pequenas incompatibilidades com WP 5.5.

### Versão 1.8.1 - 05/08/2020

* Corrigido: Incompatibilidade com Brizy 2.0.
* Corrigido: Pequenos problemas de desempenho ao construir a lista de menu.

### Versão 1.8.0 - 27/04/2020

* Corrigido: Avisos sendo ocultados sob a barra superior quando nenhum modo de margem é selecionado.
* Adicionado: Páginas personalizadas agora podem substituir múltiplas páginas administrativas de nível superior e subpáginas do WordPress ao mesmo tempo.
* Adicionado: Administradores agora podem ocultar páginas administrativas usando WP Admin Pages PRO.

### Versão 1.7.9 - 01/04/2020

* Corrigido: Brizy 1.10.118 e superiores quebrando suporte a SVG em páginas administrativas.

### Versão 1.7.8 - 26/03/2020

* Corrigido: Erro de escape quebrando a página do Editor ao usar francês.

### Versão 1.7.7 - 04/03/2020

* Corrigido: Pequena incompatibilidade com Brizy Builder.
* Melhorado: Atualizado Freemius SDK para 2.3.2.

### Versão 1.7.6 - 10/02/2020

* Corrigido: Botão de edição de Página Administrativa no canto inferior direito não funcionando em Widgets do Painel.
* Corrigido: Pequena incompatibilidade com Astra.
* Corrigido: Nova versão do Brizy quebrando compatibilidade.

### Versão 1.7.5 - 14/12/2019

* Corrigido: Adicionado um novo manipulador de caso extremo para popular itens de menu na opção Substituir Página.
* Corrigido: Fontes Elementor não funcionando.
* Melhorado: Atualizado o Freemius SDK para suportar ocultação de informações sensíveis na página de Conta.

### Versão 1.7.4 - 29/11/2019

* Corrigido: Incompatibilidade com WooCommerce Memberships.
* Corrigido: Componente de aba do Oxygen Builder não funcionando.
* Corrigido: Beaver Themer não funcionando.

### Versão 1.7.3 - 12/07/2019

* Corrigido: Páginas desaparecendo quando seu pai é convertido para outro tipo de página administrativa.
* Melhorado: Divisores de tabela de lista melhores entre tipos de Página Administrativa.
* Melhorado: Revisão de Segurança de todo o código do plugin.
* Melhorado: Nota sobre aviso de separador de aba quando o recurso não está disponível para um determinado tipo de menu/fonte de conteúdo.

### Versão 1.7.2 - 01/07/2019

* Corrigido: Atualizada a versão do Freemius SDK para 2.3.0.
* Corrigido: Problema de incompatibilidade com Flywheel.

### Versão 1.7.1 - 27/06/2019

* Corrigido: Widget de Boas-Vindas agora é exibido para todas as funções.
* Corrigido: Opção de tela para ocultar/exibir o menu Páginas Administrativas não é adicionada se o menu estiver sendo ocultado via o filtro documentado em https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Melhorado: Ocultar os menus Páginas Administrativas agora também oculta os modelos criados a partir da lista de modelos salvos do Beaver Builder na interface do construtor.
* Adicionado: Opções para ativar e desativar em massa páginas administrativas.
* Adicionado: Opção para exibir páginas no site principal também.
* Adicionado: Opção para renomear rótulos de menu de nível superior e subnível no modo Substituir.

### Versão 1.7.0 - 04/06/2019

* Corrigido: Problemas com modelos Oxygen não aparecendo.
* Adicionado: Suporte à Criação de Widget!

### Versão 1.6.1 - 22/05/2019

* Corrigido: Erros de digitação.
* Corrigido: Páginas de sub-menu sobrescrevendo itens de sub-menu anteriores com o mesmo valor de ordem.
* Corrigido: Duplicação agora redefine o slug da página duplicada.
* Melhorado: Atualizados arquivos po pt_BR e es_ES.
* Melhorado: Tabela de lista agora lista o nome de páginas personalizadas como páginas pai também.

### Versão 1.6.0 - 21/05/2019

* Adicionado: Links externos agora também suportam carregamento de iframe.

### Versão 1.5.5 - 17/05/2019

* Corrigido: Mensagem de aviso lançada quando uma página era excluída ou duplicada.
* Corrigido: Configurações de permissão não sendo aplicadas aos Administradores.

### Versão 1.5.4 - 08/05/2019

* Corrigido: Incompatibilidades com Sliced Invoices.
* Corrigido: Pequeno problema com o Oxygen.
* Corrigido: Placeholder no campo de título de nova página administrativa não desaparecendo ao pressionar tecla.

### Versão 1.5.3 - 03/05/2019

* Corrigido: Incompatibilidade com páginas de opção Advanced Custom Field.
* Adicionado: Opção para adicionar usuários específicos como alvos de páginas administrativas personalizadas.

### Versão 1.5.2 - 30/04/2019

* Corrigido: Incompatibilidades com versões mais recentes do Brizy.
* Adicionado: Tradução em espanhol adicionada - cortesia de John Rozzo. Obrigado, John!
* Adicionado: Suporte beta ao Oxygen Builder.

### Versão 1.5.1 - 15/04/2019

* Corrigido: Problema com placeholders nos editores Normal e HTML.
* Corrigido: Páginas Administrativas não aparecendo em Ferramentas -> Exportar.
* Corrigido: Carregamento de scripts e estilos apenas em nossas próprias páginas.
* Adicionado: Super Administradores agora podem duplicar Páginas Administrativas.

### Versão 1.5.0 - 29/03/2019

* Corrigido: Pequenos bugs capturados pelo Sentry.
* Corrigido: Botão de excluir não funcionando na tela de Edição de Página Administrativa.
* Melhorado: Alterado o botão BeaverBuilder para deixar claro que a licença BB padrão também é suportada.
* Adicionado: Administradores podem definir a ordem dos submenus também.
* Adicionado: Modo Substituir página agora tem suporte a todos os itens de menu disponíveis.

### Versão 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Adicionado: Lançado como plugin independente em https://wpadminpagespro.com
* Adicionado: Opção para remover o item de menu Páginas Administrativas do menu após o processo de criação de página estar concluído.
* Adicionado: Opção para remover avisos administrativos de páginas administrativas.
* Adicionado: Processamento de conteúdo, para que você possa colocar placeholders como {{user:first_name}} e que sejam automaticamente substituídos pelo campo meta first_name do usuário.
* Adicionado: Editor Inline.
* Adicionado: Classe pai de origem de conteúdo consolidada para facilitar a adição de novos Page Builders/Fonte de Conteúdo no futuro.
* Adicionado: Suporte a URLs externas.

### Versão 1.3.0 - 15/01/2019

* Corrigido: Páginas Administrativas não aparecem no site principal em ambientes multisite.
* Melhorado: Removidos tipos de post personalizados Multisite Ultimate da tela de exportação de subsites.
* Adicionado: Barra superior com ações rápidas para administradores de rede nas páginas de criação.
* Adicionado: INCRÍVEL! Suporte ao Elementor!
* Adicionado: INCRÍVEL! Suporte ao Brizy!

### Versão 1.2.1 - 17/11/2018

* Corrigido: Tornando o plugin compatível com Multisite Ultimate 1.9.0.

### Versão 1.2.0 - 10/09/2018

* Adicionado: Suporte PHP adicionado se WU_APC_ALLOW_PHP_PROCESSING estiver definido como true em wp-config.php. Isso não usa eval do PHP, mas ainda pode levar a falhas de segurança. Use com cuidado.
* Melhorado: Atualizador de plugin add-on.
* Melhorado: Nova URL para o servidor de atualizações.

### Versão 1.1.2 - 16/08/2018

* Corrigido: Pequeno problema com WP Engine.

### Versão 1.1.1 - 16/08/2018

* Corrigido: Permissões não sendo aplicadas corretamente às páginas de substituição.

### Versão 1.1.0 - 15/08/2018

* Adicionado: Modelos Beaver Builder agora são suportados! Você pode usar seu page builder favorito para criar páginas administrativas personalizadas.
* Adicionado: Agora é possível substituir o conteúdo das páginas administrativas padrão do WordPress também.
* Adicionado: Agora é possível anexar o conteúdo criado ao topo ou fundo das páginas administrativas padrão do WordPress também.

### 0.0.1
- Lançamento inicial
