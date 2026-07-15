---
id: wu_dashboard_this-tab_widgets
title: 'Ação - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_\{$this->tab\}_widgets

Permite que programadores de plugins adicionem widgets ao Painel do Dashboard da rede.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $tab | `string` | A aba atual. |
| $screen | `\WP_Screen` | O objeto de ecrã. |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Instância da página de admin do Ultimate Multisite. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) na linha 214
