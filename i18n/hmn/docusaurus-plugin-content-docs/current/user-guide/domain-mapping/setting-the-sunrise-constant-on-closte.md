---
title: Tsom qab txhua Constant Sunrise ha Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-tse Sunrise constant-tse true-tse

Kua muaj ti host providers xav tseg khawv wp-config.php rau security. Neeg tsis tuajm Ultimate Multisite yuav tsim khoj file rau hais constants uam tsim domain mapping thiab lwm yam txawv ua haujlwm. Closte yog ib qho host chaw ntawd.

Tab sis, Closte muaj raws li tswv tsim wp-config.php rau hais constants hais lub sijhawm tsis muaj kev txom siab. Neeg tsuas txhua qhov uas sau kom ua tau. Tsis txhob txhob ua thiaj tsis muaj.

## Rau Closte dashboard

Tsis txhob tsim, [log into your Closte account](https://app.closte.com/), tsis txhob tsim Sites menu item, thiab tsis txhob tsim Dashboard link hauv lub site uas koj tsis txhob ua haujlwm:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Koj yuav tau txais ib qho menu item tshiab heev rau ntawm lub qij tshem. Tsim mus rau settings page hais tias koj tsis txhob tsim, ua li siv lub menu ntawd:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Tee sau ntawd, hais rau **Settings**, hais rau WP-Config tab, thiab hais rau lub "Additional wp-config.php content" field ntawm tab ntawd:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Thaum tsim Ultimate Multisite, koj yuav tsum hais sunrise constant zoo mus rau hauv qhov field ntawd. Tsis txhob tsim ib lub line tshiab thiab paste lub line ntawm no: define('SUNRISE', true); Tha sau ntawd, tsim **Save All** button.

Tsis txhob tsim, koj ua tau tawm. Tsim mus rau Ultimate Multisite install wizard thiab refresh lub page kom ua tias los ntawm qhov teb.
