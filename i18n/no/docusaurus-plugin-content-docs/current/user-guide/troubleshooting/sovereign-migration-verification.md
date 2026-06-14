---
title: Suveren Migrasjonsverifisering
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifisering av suveren migrasjon

Ultimate Multisite: Multi-Tenancy 1.2.0 inkluderer WP-CLI verifiseringskommandoer for migrasjoner til suverene leietakere (tenants). Bruk dem hvis en tenantmigrering, SSO-besøk eller isolert installasjon ikke oppfører seg som forventet.

## Kommandoer å kjøre

Kjør verifiseringen fra den nettbaserte WordPress-installasjonen:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Bruk site-ID-en til den tenanten du migrerer. Den første kommandoen sjekker at tenanten ikke lenger er avhengig av eldre nettverksdata. Den andre kommandoen bekrefter at suveren push-jobber kan behandles og tømmes (drain).

## Vanlige feil

### Database-tildelinger stemmer ikke med verten

Hvis verifiseringen rapporterer feil i tildelinger eller writer-user, sjekk den konfigurerte database-hosten. `localhost`, `127.0.0.1` og et container-tjenestenavn er forskjellige MySQL grant-hoster. Oppdater tenant-host bindingen eller database-tildelingene, og kjør deretter verifiseringen på nytt.

### Bedrock eller lokale installasjoner kan ikke koble seg til

Bedrock- og lokale socket-installasjoner kan rapportere databasen som `localhost` mens runtime kobler seg gjennom en normalisert adresse. Versjon 1.2.0 normaliserer host-strengene på samme maskin, men tilpassede host-overstyringer kan fortsatt komme i konflikt med database-tildelingene.

### Asynkron push-kø tømmes ikke

Hvis `verify-sovereign-push` ikke fullføres, sjekk Action Scheduler eller den konfigurerte asynkrone runneren. Tøm kun mislykkede jobber etter å ha bekreftet at de er trygge å prøve på nytt eller kaste.

### Antall brukere for tenanten er feil

Migrasjonen skal provisionere brukere for den suverene tenanten. Hvis den forventede installasjonsbrukeren mangler, kjør brukerprovisioneringssteget på nytt før du prøver å gjenopprette SSO.

### SSO-besøk blir avvist

Stateless tenant autologin krever at domenet til leiet, origin pin, token-formål, nonce og utløpsdato å stemme overens. Bekreft at URL-en til leiet er riktig, og at innlogging forsøkes kort etter generering av SSO-besøket.

## Når du skal prøve igjen

Prøv verifiseringen på nytt etter hver infrastrukturendring. Ikke bytt produksjonstrafikk, slett kildedata eller fjern migrasjonskredensialer før alle verifikasjonskontroller er bestått.
