---
id: wu_bypass_unset_current_user
title: Filtre - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filtre: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Permet als desenvolupadors ometre el codi de desassignació de l’usuari actual.

Retornar qualsevol cosa que no sigui null ometrà la desassignació de l’usuari actual amb sessió iniciada. Això pot ser útil en alguns escenaris, per exemple, quan es treballa amb subllocs que s’utilitzen com a panells d’administració.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null per continuar; qualsevol altra cosa per ometre-ho. |
| $current_user | `false\|\WP_User` | L’objecte de l’usuari actual. |

### Des de {#since}

- 2.0.11
### Font {#source}

Definit a [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) a la línia 221


## Retorna {#returns}
