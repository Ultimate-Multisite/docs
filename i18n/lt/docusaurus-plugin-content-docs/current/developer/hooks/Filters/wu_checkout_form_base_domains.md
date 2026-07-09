---
id: wu_checkout_form_base_domains
title: Filtras - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtras: wu_checkout_form_base_domains

Filtruoja bendrinamus atsiskaitymo formos bazinius domenus, kurie neturėtų tapti susietų domenų įrašais.

Naudokite šį filtrą, kai integracija pateikia papildomus bazinius domenus atsiskaitymo formos **svetainės URL** laukams. Šio filtro grąžinti domenai laikomi bendrinamais registracijos prieglobomis, o ne atskirų svetainių pasirinktiniais domenais.

## Parametrai

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $domains | `array` | Bendrinami baziniai domenai, surinkti iš atsiskaitymo formos konfigūracijos. |

### Nuo

- 2.13.0

### Šaltinis

Apibrėžta `inc/functions/domain.php`.


## Grąžina

Normalizuotų atsiskaitymo formos bazinių domenų masyvą.
