---
title: Ho fetola ho tsamaisang le bohlokoa la ho fana ka tsela e ntle
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verification ya Migrasheni ya Sovereign {#sovereign-migration-verification}

Ultimate Multisite 1.2.0 e na leme ka-commands tsa WP-CLI ho verification tsa migrasheni ya tenant sovereign. Usa li haholo ha tenant migration, SSO visit, kapa isolated install e se a tlhokotsa kae a leba.

## Commands tse di tla runa {#commands-to-run}

Run verification ka WordPress e ntse e le network:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Usa site ID ya tenant o tla migrasa. Command ya ntlha e leba hore tenant ha e na le ho thabela data ya legacy ya network. Command ya ntlha e leba hore jobs tsa sovereign push e ka ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba ba

Ho fakafo fa'a tsoalo (stateless tenant autologin) ho fana fa'a tsoalo ha o le a tatou e te fa'atatau i le domain o le tenant, origin pin, token purpose, nonce, ma expiry. Fa'amalosia lava o le URL o le tenant ua mafaiga ma fa'atatau ai o le login ua fa'atatau tele i le taimi tasi lea ua tatou fa'aalia SSO visit.

## O le a tatou fa'aalia fa'apitoa (When to retry) {#common-failures}

Fa'aalia fa'apitoa ua tatou fa'aalia fa'apitoa i le fa'amalosia o le fa'atatau i le fa'aopoopo ua tatou fa'aalia fa'apitoa i le fa'aopoopo o le fa'aopoopo. A'u e le fa'aalia fa'aopoopo o le traffic o le production, e le fa'aalia fa'aopoopo o le data o le source, ma e le fa'aalia fa'aopoopo o le credentials o le migration i le taimi tasi lea ua tatou fa'aalia fa'apitoa i le fa'atatau.
