---
title: Pagpapatunay ng Sovereign Migration
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Verification {#sovereign-migration-verification}

Ang Ultimate Multisite: Multi-Tenancy 1.2.0 ay may mga WP-CLI verification commands para sa paglipat ng sovereign tenant. Gamitin ang mga ito kapag hindi gumagana nang inaasahan ang isang paglipat ng tenant, SSO visit, o isolated install.

## Mga Command na tatakbo {#commands-to-run}

Patakbuhin ang verification mula sa network WordPress install:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Gamitin ang site ID para sa tenant na iyong inililipat. Ang unang command ay tinitingnan kung hindi na umaasa ang tenant sa legacy data ng network side. Ang pangalawang command ay nagpapatunay na ang mga sovereign push job ay maaaring magproseso at mag-drain.

## Mga Karaniwang pagkabigo {#common-failures}

### Hindi tumutugma ang database grants sa host {#database-grants-do-not-match-the-host}

Kung ang verification ay nag-uulat ng grant o writer-user failures, suriin ang naka-configure na database host. Ang `localhost`, `127.0.0.1`, at pangalan ng container service ay iba-ibang MySQL grant hosts. I-update ang tenant host binding o mga database grants, pagkatapos ay muling patakbuhin ang verification.

### Hindi makakonekta ang Bedrock o local installs {#bedrock-or-local-installs-cannot-connect}

Ang Bedrock at local socket installs ay maaaring mag-ulat na ang database ay `localhost` habang ang runtime ay kumokonekta sa pamamagitan ng isang normalized address. Ang bersyon 1.2.0 ay nag-normalize ng mga host string sa parehong makina, ngunit ang custom host overrides ay maaari pa ring magkaroon ng conflict sa mga database grants.

### Hindi na-drain ang async push queue {#async-push-queue-does-not-drain}

Kung hindi matatapos ang `verify-sovereign-push`, suriin ang Action Scheduler o ang naka-configure na async runner. Linisin ang mga nabigong job lamang pagkatapos mong kumpirmahin na ligtas itong subukan muli o itapon.

### Mali ang bilang ng user ng tenant {#tenant-user-count-is-wrong}

Dapat ay maglaan ng users ang migration para sa sovereign tenant. Kung nawawala ang inaasahang install user, patakbuhin muli ang hakbang sa pagbibigay ng user bago muling subukan ang SSO.

### Tinanggihan ang SSO visit {#sso-visit-is-rejected}

Kailangan ng stateless tenant autologin na tumutugma ang domain ng tenant, origin pin, token purpose, nonce, at expiry. Siguraduhin lang na tama ang URL ng tenant at subukan ang login pagkatapos mong gumawa ng SSO visit.

## Kailan Dapat Subukan Ulit {#when-to-retry}

Subukan ulit ang verification pagkatapos ng bawat pagbabago sa infrastructure. Huwag magpalit ng production traffic, tanggalin ang source data, o alisin ang migration credentials hangga't hindi pumapasa ang lahat ng verification checks.
