---
id: wu_enforce_password_rules
title: Filtrační funkce - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filtruje, zda má být vynucováno dodatečná pravidla pro heslo.

Pokud je nastaven na true, vynucuje minimální délku a požadavky na znaky. Je automaticky aktivováno pro nastavení "Super Strong" nebo když je funkce Strong Password v Defender Pro aktivní.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Čím vynucovat dodatečná pravidla. |
| $strength_setting | `string` | Hodnota nastavení administrátora. |
| $defender_active | `bool` | Čím je aktivní Strong Password v Defender Pro. |

### Since {#since}

- 2.4.0
### Source {#source}

Definováno v [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) na řádku 531
