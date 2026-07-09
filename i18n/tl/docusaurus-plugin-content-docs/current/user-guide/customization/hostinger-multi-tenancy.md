---
title: Hostinger Multi-Tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 ay nagdaragdag ng kakayahan sa Hostinger multi-tenancy kaya ang mga naka-host na domain ay makakasali sa sovereign tenant provisioning kasabay ng kasalukuyang integration ng host domain mapping ng Hostinger.

Gamitin ang kakayahang ito kapag ang mga domain ng tenant at ang hiwalay na infrastructure ng tenant ay pinamamahalaan sa pamamagitan ng Hostinger hPanel.

## Mga tala sa pag-set up {#setup-notes}

1. I-configure ang core Hostinger integration sa ilalim ng **Ultimate Multisite > Settings > Host Integrations**.
2. Siguraduhin na ang Hostinger API token ay kayang pamahalaan ang target domain o subdomain.
3. I-enable ang Multi-Tenancy addon.
4. I-configure ang tenant isolation strategy bago i-publish ang tenant.
5. Patakbuhin ang migration verification workflow bago ipadala ang production traffic sa tenant.

Ang kakayahan ng Hostinger ay gumagamit ng shared Hostinger connection para sa mga operasyon sa host side. Ang DNS ay dapat pa ring tumuturo sa tamang account ng Hostinger, at ang limitasyon ng hPanel account ay nananatili.

## Mga pagbabago depende sa kakayahan (Capability-specific changes) {#capability-specific-changes}

- Maaaring gumawa ng sovereign tenants na may host-aware domain operations.
- Ang mga database host string na nasa iisang makina ay ini-normalize bago ang grant verification.
- Ang mga tenant na pinamamahalaan ng Hostinger ay dapat gumamit ng database host value na ipinapakita sa hPanel maliban kung kailangan ng WordPress runtime ng lokal na override.
- Ang mga bisitang SSO ay umaasa sa pagresolba ng domain ng tenant patungo sa Hostinger-hosted tenant.

## Pag-troubleshoot ng mga Hostinger tenants {#troubleshooting-hostinger-tenants}

- Kung ang install ng tenant ay nabigo, i-verify kung ang domain ay nakakabit na sa account ng Hostinger.
- Kung nabigo ang database verification, ikumpara ang username ng DB ng tenant, pangalan ng database, at host binding sa hPanel.
- Kung nabigo ang **Visit (SSO)**, kumpirmahin na aktibo ang DNS at SSL para sa domain ng tenant.
- Kung ang teardown ay nag-iiwan ng mga host resources, alisin ang anumang natitirang database, user, o folder mula sa hPanel pagkatapos makumpirma ang mga backup.
