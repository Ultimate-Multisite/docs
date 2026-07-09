---
title: Rexistro de cambios do Creador de páxinas de administración
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Rexistro de cambios de Admin Page Creator

### Versión 1.9.0 - Publicada o 2026-01-18

* Corrixido: Erros fatais ao activar.
* Refactorizado: Clases de fonte de contido para usar o trait Singleton coa inicialización axeitada do construtor pai
* Corrixido: Erros de compilación de modelos de Vue.js que impedían renderizar o selector de tipo de contido
* Corrixido: Propiedades de datos de Vue ausentes (template_id, external_link_url_embedable, external_link_url_checking)
* Corrixido: O editor TinyMCE non se inicializaba correctamente ao cargar a páxina
* Corrixido: O ficheiro de soporte de Divi non se cargaba automaticamente mediante Composer
* Corrixido: Sintaxe PHP corrupta na clase de soporte de Divi
* Mellorado: Organización e minificación de recursos JavaScript
* Mellorado: Compatibilidade coas últimas versións de WordPress e dos construtores de páxinas

= Versión: 1.8.8 - Publicada o 2025-09-28

* Renomear o prefixo a ultimate-multisite; actualizar o dominio de texto; incremento de versión.

### Versión 1.8.7 - 04/10/2023

* Corrixido: Erro fatal ao tentar engadir unha nova páxina de administración;
* Corrixido: Conflito co prefixo das follas de estilo de Oxygen;

### Versión 1.8.6 - 09/08/2023

* Engadido: Engadiuse unha opción para mostrar datos do sitio principal ou do sub-sitio actual.
* Engadido: Engadiuse soporte para o WordPress Block Editor (Gutenberg).
* Corrixido: Corrixiuse o problema cos recursos de páxina de Brizy que non cargaban.

### Versión 1.8.5 - 09/12/2020

* Corrixido: O problema con Screen Options para agochar o menú non desaparecía;

### Versión 1.8.4 - 11/11/2020

* Corrixido: Soporte para Multisite Ultimate v2;

### Versión 1.8.3 - 01/10/2020

* Corrixido: Incompatibilidades con Beaver Builder da compilación anterior;
* Corrixido: Inconsistencias de marxe con WP 5.5;

### Versión 1.8.2 - 21/09/2020

* Corrixido: Pequenas incompatibilidades con WP 5.5;

### Versión 1.8.1 - 05/08/2020

* Corrixido: Incompatibilidade con Brizy 2.0;
* Corrixido: Pequenos problemas de rendemento ao construír a lista de menús;

### Versión 1.8.0 - 27/04/2020

* Corrixido: Os avisos quedaban agochados baixo a barra superior cando non se seleccionaba ningún modo de marxe;
* Engadido: As páxinas personalizadas agora poden substituír varias páxinas de nivel superior e subpáxinas de administración de WordPress ao mesmo tempo;
* Engadido: Os administradores agora poden agochar páxinas de administración usando WP Admin Pages PRO;

### Versión 1.7.9 - 01/04/2020

* Corrixido: Brizy 1.10.118 e posteriores rompían o soporte SVG nas páxinas de administración;

### Versión 1.7.8 - 26/03/2020

* Corrixido: Erro de escape que rompía a páxina do editor ao usar francés;

### Versión 1.7.7 - 04/03/2020

* Corrixido: Pequena incompatibilidade con Brizy Builder;
* Mellorado: Actualizouse Freemius SDK a 2.3.2;

### Versión 1.7.6 - 10/02/2020

* Corrixido: O botón de edición de Admin Page na esquina inferior dereita non funcionaba en Dashboard Widgets;
* Corrixido: Pequena incompatibilidade con Astra;
* Corrixido: A nova versión de Brizy rompía a compatibilidade;

### Versión 1.7.5 - 14/12/2019

* Corrixido: Engadiuse un novo xestor de caso límite para encher os elementos do menú na opción Replace Page;
* Corrixido: As fontes de Elementor non funcionaban;
* Mellorado: Actualizouse o Freemius SDK para admitir agochar información sensible da páxina Account;

### Versión 1.7.4 - 29/11/2019

* Corrixido: Incompatibilidade con WooCommerce Memberships;
* Corrixido: O compoñente de pestanas de Oxygen Builder non funcionaba;
* Corrixido: Beaver Themer non funcionaba;

### Versión 1.7.3 - 12/07/2019

* Corrixido: As páxinas desaparecían cando a súa páxina pai se convertía noutro tipo de páxina de administración;
* Mellorado: Mellores divisores de táboa de lista entre tipos de Admin Page;
* Mellorado: Revisión de seguridade de toda a base de código do plugin;
* Mellorado: Nota na pestana Separator avisando cando a funcionalidade non está dispoñible para un tipo de menú/fonte de contido determinado;

### Versión 1.7.2 - 01/07/2019

* Corrixido: Actualizouse a versión do Freemius SDK a 2.3.0;
* Corrixido: Problema de incompatibilidade con Flywheel;

### Versión 1.7.1 - 27/06/2019

* Corrixido: Welcome Widget agora móstrase a todos os roles;
* Corrixido: A Screen Option para agochar/mostrar o menú Admin Pages non se engade se o menú está sendo agochado mediante o filtro documentado en https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Mellorado: Agochar os menús de Admin Pages agora tamén agocha os modelos creados desde a lista de modelos gardados de Beaver Builder na IU do construtor;
* Engadido: Opcións para activar e desactivar páxinas de administración en lote;
* Engadido: Opción para mostrar páxinas tamén no sitio principal;
* Engadido: Opción para renomear etiquetas de menú de nivel superior e subnivel no modo Replace;

### Versión 1.7.0 - 04/06/2019

* Corrixido: Problemas cos modelos de Oxygen que non aparecían;
* Engadido: Soporte para a creación de widgets!

### Versión 1.6.1 - 22/05/2019

* Corrixido: Erros tipográficos;
* Corrixido: As páxinas de submenú sobrescribían elementos de submenú anteriores co mesmo valor de orde;
* Corrixido: A duplicación agora restablece o slug da páxina duplicada;
* Mellorado: Actualizáronse os ficheiros po pt_BR e es_ES;
* Mellorado: A táboa de lista agora tamén lista o nome das páxinas personalizadas como páxinas pai;

### Versión 1.6.0 - 21/05/2019

* Engadido: External Links agora tamén admite carga en iframe;

### Versión 1.5.5 - 17/05/2019

* Corrixido: Lanzábase unha mensaxe de aviso cando se eliminaba ou duplicaba unha páxina;
* Corrixido: A configuración de permisos non se aplicaba aos administradores;

### Versión 1.5.4 - 08/05/2019

* Corrixido: Incompatibilidades con Sliced Invoices;
* Corrixido: Pequeno problema con Oxygen;
* Corrixido: O texto de marcador de posición no campo de título da nova páxina de administración non desaparecía ao soltar a tecla;

### Versión 1.5.3 - 03/05/2019

* Corrixido: Incompatibilidade coas páxinas de opcións de Advanced Custom Field;
* Engadido: Opción para engadir usuarios específicos como destinatarios das páxinas de administración personalizadas;

### Versión 1.5.2 - 30/04/2019

* Corrixido: Incompatibilidades con versións máis novas de Brizy;
* Engadido: Engadiuse tradución ao español - cortesía de John Rozzo. Grazas, John!
* Engadido: Soporte beta para Oxygen Builder;

### Versión 1.5.1 - 15/04/2019

* Corrixido: Problema cos marcadores de posición nos editores Normal e HTML;
* Corrixido: Admin Pages non aparecía en Tools -> Export;
* Corrixido: Carga dos scripts e estilos só nas nosas propias páxinas;
* Engadido: Os Super Admins agora poden duplicar Admin Pages;

### Versión 1.5.0 - 29/03/2019

* Corrixido: pequenos erros detectados por Sentry;
* Corrixido: o botón de eliminar non funcionaba na pantalla da páxina Edit Admin;
* Mellorado: cambiouse o botón de BeaverBuilder para deixar claro que a licenza Standard BB tamén é compatible;
* Engadido: os administradores tamén poden definir a orde dos submenús;
* Engadido: o modo de substituír páxina agora é compatible con todos os elementos de menú dispoñibles;

### Versión 1.4.0 - 14/02/2019 (independente) & 27/02/2019 (add-on)

* Engadido: lanzado como plugin independente en https://wpadminpagespro.com
* Engadido: opción para eliminar o elemento de menú Admin Pages do menú despois de completar o proceso de creación da páxina;
* Engadido: opción para eliminar os avisos de administración das páxinas de administración;
* Added: Content processing, so you can place placeholders like {{user:first_name}} and have it be automatically replaced with the user first_name meta field;
* Engadido: editor en liña;
* Engadido: clase nai de fonte de contido consolidada para facilitar a incorporación de novos Page Builders/Content Sources no futuro;
* Engadido: compatibilidade con URLs externas;

### Versión 1.3.0 - 15/01/2019

* Corrixido: Admin Pages non aparecen no sitio principal en contornos multisite;
* Mellorado: elimináronse os tipos de entrada personalizados de Multisite Ultimate da pantalla de exportación dos subsitios;
* Engadido: barra superior con accións rápidas para administradores de rede nas páxinas de creación;
* Engadido: ENORME! Compatibilidade con Elementor!
* Engadido: ENORME! Compatibilidade con Brizy!

### Versión 1.2.1 - 17/11/2018

* Corrixido: facer que o plugin sexa compatible con Multisite Ultimate 1.9.0;

### Versión 1.2.0 - 10/09/2018

* Engadido: engadiuse compatibilidade con PHP se WU_APC_ALLOW_PHP_PROCESSING está definido como true en wp-config.php. Isto non usa eval de PHP, pero aínda así pode provocar buratos de seguridade. Usa isto con coidado;
* Mellorado: actualizador do plugin add-on;
* Mellorado: novo URL para o servidor de actualizacións;

### Versión 1.1.2 - 16/08/2018

* Corrixido: pequeno problema con WP Engine;

### Versión 1.1.1 - 16/08/2018

* Corrixido: os permisos non se aplicaban correctamente ás páxinas de substitución;

### Versión 1.1.0 - 15/08/2018

* Engadido: os modelos de Beaver Builder agora son compatibles! Podes usar o teu creador de páxinas favorito para crear páxinas de administración personalizadas;
* Engadido: agora tamén é posible substituír o contido das páxinas de administración predeterminadas de WordPress;
* Engadido: agora tamén é posible anexar o contido creado á parte superior ou inferior das páxinas de administración predeterminadas de WordPress;

### 0.0.1
- Lanzamento inicial
