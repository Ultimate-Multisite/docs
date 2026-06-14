---
title: Hostinger Multi-Tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 ay nagdaragdag ng kakayahan sa Hostinger multi-tenancy para ang mga naka-host na domain ay makasali sa sovereign tenant provisioning kasabay ng kasalukuyang integration ng host domain mapping ng Hostinger.

Gamitin ang kakayahang ito kapag ang mga domain ng tenant at ang mga isolated na infrastructure ng tenant ay pinamamahalaan sa pamamagitan ng Hostinger hPanel.

## Mga tala para sa pag-set up

1. I-configure ang core Hostinger integration sa ilalim ng **Ultimate Multisite > Settings > Host Integrations**.
2. Siguraduhin na ang Hostinger API token ay kayang pamahalaan ang target domain o subdomain.
3. I-enable ang Multi-Tenancy addon.
4. I-configure ang tenant isolation strategy bago i-publish ang tenant.
5. Patakbuhin ang migration verification workflow bago ipadala ang production traffic sa tenant.

Ang kakayahan ng Hostinger ay gumagamit ng shared Hostinger connection para sa mga operasyon sa host side. Ang DNS ay dapat pa ring tumuturo sa tamang account ng Hostinger, at ang limitasyon ng hPanel account ay nananatili.

## Mga pagbabago batay sa kakayahan (Capability-specific changes)

- Maaaring lumikha ng sovereign tenants na may mga operasyon sa domain na alam ng host.
- Ang mga database host string na nasa iisang makina ay ini-normalize bago ang grant verification.
- Ang mga tenant na pinamamahalaan ng Hostinger ay dapat gumamit ng halaga ng database host na ipinapakita sa hPanel maliban kung nangangailangan ang WordPress runtime ng lokal na override.
- Ang mga bisitang SSO ay umaasa sa pagresolba ng domain ng tenant patungo sa tenant na naka-host ng Hostinger.

## Pag-troubleshoot ng mga Hostinger tenants

- Kung nabigo ang install ng tenant, i-verify kung ang domain ay nakakabit na sa account ng Hostinger.
- Kung nabigo ang database verification, ikumpara ang username ng DB ng tenant, pangalan ng database, at host binding sa hPanel.
- Kung nabigo ang **Visit (SSO)**, kumpirmahin na aktibo ang DNS at SSL para sa domain ng tenant.
- Kung ang teardown ay nag-iiwan ng mga host resources, alisin ang anumang natitirang database, user, o folder mula sa hPanel pagkatapos makumpirma ang mga backup.
