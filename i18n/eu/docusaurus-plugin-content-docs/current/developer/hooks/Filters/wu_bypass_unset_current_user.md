---
id: wu_bypass_unset_current_user
title: Iragazkia - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Iragazkia: wu_bypass_unset_current_user

Garatzaileei aukera ematen die ezarrita ez dagoen uneko erabiltzailearen kodea saihesteko.

null ez den edozer itzultzeak saihestuko du saioa hasita duen uneko erabiltzailearen desezarpena. Hau erabilgarria izan daiteke agertoki batzuetan, adibidez, admin panel gisa erabiltzen ari diren azpiguneekin lan egitean.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null aurrera egiteko; beste edozer, hori saihesteko. |
| $current_user | `false\|\WP_User` | Uneko erabiltzailearen objektua. |

### Noiztik {#since}

- 2.0.11
### Iturburua {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) fitxategian definitua, 221. lerroan


## Itzulketak {#returns}
