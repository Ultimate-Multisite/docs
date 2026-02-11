---
id: wu_enforce_password_rules
title: Filtro - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filtrar se deve impor regras adicionais de senha

Filtrar se deve impor regras adicionais de senha.

Quando verdadeiro, impõe requisitos de comprimento mínimo e caracteres. Ativado automaticamente para a configuração "Super Strong" ou quando o recurso de Senha Forte do Defender Pro está ativo.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $enforce_rules | `bool` | Se deve impor regras adicionais. |
| $strength_setting | `string` | O valor da configuração administrativa. |
| $defender_active | `bool` | Se a Senha Forte do Defender Pro está ativa. |

### Desde

- 2.4.0

### Fonte

Definido em [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) na linha 531
