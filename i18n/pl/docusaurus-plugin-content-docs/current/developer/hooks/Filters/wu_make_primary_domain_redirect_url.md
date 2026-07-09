---
id: wu_make_primary_domain_redirect_url
title: Filtry - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Filtruje adres URL przekierowania po ustawieniu domeny jako główną.

Pozwala deweloperom dostosować, dokąd użytkownicy zostaną przekierowani po pomyślnym ustawieniu domeny jako głównej. Domyślnie przekierowuje do bieżącego adresu URL na głównej witrynie lub do adresu URL panelu administracyjnego modyfikowanej witryny.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | Domyślny adres URL przekierowania. Może to być bieżący adres URL (jeśli jest to główna witryna) lub adres URL panelu administracyjnego bieżącej witryny. |
| $current_site | `int` | ID witryny, której domena ma zostać ustawiona jako główna. |
| $domain | `\Domain` | Obiekt domeny, który został ustawiony jako główny. |
| $old_primary_domains | `array` | Tablica ID domen, które były wcześniej ustawione jako główne. |

### Since {#since}

- 2.0.0
### Source {#source}

Zdefiniowane w [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) w linii 639


## Returns {#returns}
Filtrowany adres URL przekierowania.
