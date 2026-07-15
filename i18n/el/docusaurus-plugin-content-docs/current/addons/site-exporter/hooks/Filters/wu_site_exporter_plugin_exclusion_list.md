---
id: wu_site_exporter_plugin_exclusion_list
title: Filter - wu_site_exporter_plugin_exclusion_list
sidebar_label: wu_site_exporter_plugin_exclusion_list
_i18n_hash: 547f26a2bdb1117cc1616485ef4525e6
---
# Φίλτρο: wu_site_exporter_plugin_exclusion_list

Επιτρέπει στους προγραμματιστές να διαχειριστούν μια λίστα plugins που θέλουν να αποκλείσουν από το τελικό zip.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $plugin_list | `array` | Τα plugins που θα αποκλειστούν. |

### Από {#since}

- 2.0.0
### Πηγή {#source}

Ορίζεται στο [`inc/class-wp-ultimo-site-exporter.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/class-wp-ultimo-site-exporter.php#L210) στην γραμμή 210


## Επιστρέφει {#returns}
Τη λίστα plugins.
