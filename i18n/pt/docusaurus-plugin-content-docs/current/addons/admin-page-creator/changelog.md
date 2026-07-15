---
title: Registo de alterações do Criador de Páginas de Administração
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Registo de alterações do Admin Page Creator

### Versão 1.9.0 - Lançada em 2026-01-18 {#version-190---released-on-2026-01-18}

* Corrigido: Erros fatais ao ativar.
* Refatorado: Classes de origem de conteúdo para usar trait Singleton com inicialização adequada do construtor pai
* Corrigido: Erros de compilação de template Vue.js que impediam o seletor de tipo de conteúdo de ser renderizado
* Corrigido: Propriedades de dados Vue em falta (template_id, external_link_url_embedable, external_link_url_checking)
* Corrigido: Editor TinyMCE não inicializava corretamente no carregamento da página
* Corrigido: Ficheiro de suporte do Divi não estava a ser carregado automaticamente via Composer
* Corrigido: Sintaxe PHP corrompida na classe de suporte do Divi
* Melhorado: Organização e minificação de assets JavaScript
* Melhorado: Compatibilidade com as versões mais recentes do WordPress e de construtores de páginas

= Versão: 1.8.8 - Lançada em 2025-09-28

* Renomear prefixo para ultimate-multisite; atualizar text domain; incremento de versão.

### Versão 1.8.7 - 04/10/2023 {#version-187---04102023}

* Corrigido: Erro fatal ao tentar adicionar nova página de administração;
* Corrigido: Conflito com o prefixo das folhas de estilo do Oxygen;

### Versão 1.8.6 - 09/08/2023 {#version-186---09082023}

* Adicionado: Adicionada uma opção para apresentar dados do site principal ou do sub-site atual.
* Adicionado: Adicionado suporte para o WordPress Block Editor (Gutenberg).
* Corrigido: Corrigido o problema com os assets de página do Brizy que não carregavam.

### Versão 1.8.5 - 09/12/2020 {#version-185---09122020}

* Corrigido: Problema com as Screen Options para ocultar o menu que não desaparecia;

### Versão 1.8.4 - 11/11/2020 {#version-184---11112020}

* Corrigido: Suporte para Multisite Ultimate v2;

### Versão 1.8.3 - 01/10/2020 {#version-183---01102020}

* Corrigido: Incompatibilidades com Beaver Builder da build anterior;
* Corrigido: Inconsistências de margem com WP 5.5;

### Versão 1.8.2 - 21/09/2020 {#version-182---21092020}

* Corrigido: Pequenas incompatibilidades com WP 5.5;

### Versão 1.8.1 - 05/08/2020 {#version-181---05082020}

* Corrigido: Incompatibilidade com Brizy 2.0;
* Corrigido: Pequenos problemas de desempenho ao criar a lista de menus;

### Versão 1.8.0 - 27/04/2020 {#version-180---27042020}

* Corrigido: Avisos ficavam ocultos sob a top-bar quando não era selecionado nenhum modo de margem;
* Adicionado: Páginas personalizadas agora podem substituir várias páginas e subpáginas de nível superior do admin do WordPress ao mesmo tempo;
* Adicionado: Administradores agora podem ocultar páginas de administração usando WP Admin Pages PRO;

### Versão 1.7.9 - 01/04/2020 {#version-179---01042020}

* Corrigido: Brizy 1.10.118 e superior quebrava o suporte a SVG em páginas de administração;

### Versão 1.7.8 - 26/03/2020 {#version-178---26032020}

* Corrigido: Erro de escaping quebrava a página do Editor ao usar francês;

### Versão 1.7.7 - 04/03/2020 {#version-177---04032020}

* Corrigido: Pequena incompatibilidade com Brizy Builder;
* Melhorado: Freemius SDK atualizado para 2.3.2;

### Versão 1.7.6 - 10/02/2020 {#version-176---10022020}

* Corrigido: Botão de edição da Admin Page no canto inferior direito não funcionava nos Dashboard Widgets;
* Corrigido: Pequena incompatibilidade com Astra;
* Corrigido: Nova versão do Brizy quebrava a compatibilidade;

### Versão 1.7.5 - 14/12/2019 {#version-175---14122019}

* Corrigido: Adicionado um novo gestor de caso-limite para preencher itens de menu na opção Replace Page;
* Corrigido: Fontes do Elementor não funcionavam;
* Melhorado: Freemius SDK atualizado para suportar ocultar informação sensível da página Account;

### Versão 1.7.4 - 29/11/2019 {#version-174---29112019}

* Corrigido: Incompatibilidade com WooCommerce Memberships;
* Corrigido: Componente de separador do Oxygen Builder não funcionava;
* Corrigido: Beaver Themer não funcionava;

### Versão 1.7.3 - 12/07/2019 {#version-173---12072019}

* Corrigido: Páginas desapareciam quando a página principal era convertida para outro tipo de página de administração;
* Melhorado: Melhores divisores de tabela de lista entre tipos de Admin Page;
* Melhorado: Revisão de segurança de toda a base de código do plugin;
* Melhorado: Nota no aviso do separador Separator quando a funcionalidade não está disponível para um determinado tipo de menu/origem de conteúdo;

### Versão 1.7.2 - 01/07/2019 {#version-172---01072019}

* Corrigido: Versão do Freemius SDK atualizada para 2.3.0;
* Corrigido: Problema de incompatibilidade com Flywheel;

### Versão 1.7.1 - 27/06/2019 {#version-171---27062019}

* Corrigido: Welcome Widget agora é apresentado a todas as funções;
* Corrigido: Screen Option para ocultar/apresentar o menu Admin Pages não é adicionada se o menu estiver a ser ocultado através do filtro documentado em https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Melhorado: Ocultar os menus Admin Pages agora também oculta os templates criados a partir da lista de templates guardados do Beaver Builder na UI do builder;
* Adicionado: Opções para ativar e desativar páginas de administração em massa;
* Adicionado: Opção para apresentar páginas também no site principal;
* Adicionado: Opção para renomear etiquetas de menu de nível superior e subnível no modo Replace;

### Versão 1.7.0 - 04/06/2019 {#version-170---04062019}

* Correção: Problemas com templates Oxygen que não apareciam;
* Adicionado: Suporte para criação de widgets!

### Versão 1.6.1 - 22/05/2019 {#version-161---22052019}

* Corrigido: Gralhas;
* Corrigido: Páginas de submenu substituíam itens de submenu anteriores com o mesmo valor de ordem;
* Corrigido: A duplicação agora repõe o slug da página duplicada;
* Melhorado: Ficheiros po pt_BR e es_ES atualizados;
* Melhorado: A tabela de lista agora também lista o nome das páginas personalizadas como páginas principais;

### Versão 1.6.0 - 21/05/2019 {#version-160---21052019}

* Adicionado: External Links agora também suportam carregamento em iframe;

### Versão 1.5.5 - 17/05/2019 {#version-155---17052019}

* Corrigido: Mensagem de aviso era lançada quando uma página era eliminada ou duplicada;
* Corrigido: Definições de permissão não eram aplicadas a administradores;

### Versão 1.5.4 - 08/05/2019 {#version-154---08052019}

* Corrigido: Incompatibilidades com Sliced Invoices;
* Corrigido: Pequeno problema com o Oxygen;
* Corrigido: Placeholder no campo de título de nova página de administração não desaparecia ao soltar a tecla;

### Versão 1.5.3 - 03/05/2019 {#version-153---03052019}

* Corrigido: Incompatibilidade com páginas de opções do Advanced Custom Field;
* Adicionado: Opção para adicionar utilizadores específicos como alvos de páginas de administração personalizadas;

### Versão 1.5.2 - 30/04/2019 {#version-152---30042019}

* Corrigido: Incompatibilidades com versões mais recentes do Brizy;
* Adicionado: Tradução para espanhol adicionada - cortesia de John Rozzo. Obrigado, John!
* Adicionado: Suporte beta para Oxygen Builder;

### Versão 1.5.1 - 15/04/2019 {#version-151---15042019}

* Corrigido: Problema com placeholders nos editores Normal e HTML;
* Corrigido: Admin Pages não apareciam em Tools -> Export;
* Corrigido: Carregamento dos scripts e estilos apenas nas nossas próprias páginas;
* Adicionado: Super Administradores agora podem duplicar Admin Pages;

### Versão 1.5.0 - 29/03/2019 {#version-150---29032019}

* Corrigido: Pequenos bugs detetados pelo Sentry;
* Corrigido: Botão Eliminar não funcionava no ecrã da página Editar administração;
* Melhorado: Alterado o botão BeaverBuilder para deixar claro que a licença Standard BB também é suportada;
* Adicionado: Os administradores também podem definir a ordem dos submenus;
* Adicionado: O modo de substituição de página agora tem suporte para todos os itens de menu disponíveis;

### Versão 1.4.0 - 14/02/2019 (autónomo) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Adicionado: Lançado como plugin autónomo em https://wpadminpagespro.com
* Adicionado: Opção para remover o item de menu Páginas de administração do menu após a conclusão do processo de criação da página;
* Adicionado: Opção para remover avisos de administração das páginas de administração;
* Added: Content processing, so you can place placeholders like {{user:first_name}} and have it be automatically replaced with the user first_name meta field;
* Adicionado: Editor inline;
* Adicionado: Classe principal de fonte de conteúdo consolidada para facilitar a adição de novos Page Builders/fontes de conteúdo no futuro;
* Adicionado: Suporte para URLs externos;

### Versão 1.3.0 - 15/01/2019 {#version-130---15012019}

* Corrigido: As páginas de administração não aparecem no site principal em ambientes multisite;
* Melhorado: Removidos os tipos de publicação personalizados do Multisite Ultimate do ecrã de exportação dos subsites;
* Adicionado: Barra superior com ações rápidas para administradores de rede nas páginas de criação;
* Adicionado: ENORME! Suporte ao Elementor!
* Adicionado: ENORME! Suporte ao Brizy!

### Versão 1.2.1 - 17/11/2018 {#version-121---17112018}

* Corrigido: Tornar o plugin compatível com Multisite Ultimate 1.9.0;

### Versão 1.2.0 - 10/09/2018 {#version-120---10092018}

* Adicionado: Suporte a PHP adicionado se WU_APC_ALLOW_PHP_PROCESSING estiver definido como true em wp-config.php. Isto não usa o eval do PHP, mas ainda pode levar a falhas de segurança. Use isto com cuidado;
* Melhorado: Atualizador do plugin add-on;
* Melhorado: Novo URL para o servidor de atualizações;

### Versão 1.1.2 - 16/08/2018 {#version-112---16082018}

* Corrigido: Pequeno problema com WP Engine;

### Versão 1.1.1 - 16/08/2018 {#version-111---16082018}

* Corrigido: Permissões não eram aplicadas corretamente às páginas de substituição;

### Versão 1.1.0 - 15/08/2018 {#version-110---15082018}

* Adicionado: Os templates Beaver Builder agora são suportados! Pode usar o seu page builder favorito para criar páginas de administração personalizadas;
* Adicionado: Agora também é possível substituir o conteúdo das páginas de administração padrão do WordPress;
* Adicionado: Agora também é possível acrescentar o conteúdo criado ao topo ou ao fundo das páginas de administração padrão do WordPress;

### 0.0.1 {#001}
- Lançamento inicial
