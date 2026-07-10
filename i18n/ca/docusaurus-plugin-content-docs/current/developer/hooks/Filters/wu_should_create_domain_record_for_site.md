---
id: wu_should_create_domain_record_for_site
title: Filtre - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtre: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Filtra si Ultimate Multisite ha de crear un registre de domini per a un lloc creat recentment.

Fes servir aquest filtre per suprimir o ajornar la creació automàtica del registre de domini per a llocs que fan servir un domini base de formulari de pagament compartit, un host intern o un domini que una altra integració gestionarà per separat.

## Paràmetres {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | Si s'ha de crear el registre de domini. |
| $site | `WP_Site` | L'objecte de lloc creat recentment. |

### Des de {#since}

- 2.13.0

### Font {#source}

Definit a `inc/functions/domain.php`.


## Retorna {#returns}

Booleà que indica si cal crear el registre de domini.
