---
title: Hostinger Multi-Tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 nagdupan og Hostinger multi-tenancy capability para ang mga hosted domains nga makapamatuod sa sovereign tenant provisioning uban sa naanaa integration sa domain-mapping sa Hostinger.

Gamita kini nga capability kung ang mga tenant domain ug isolated tenant infrastructure gi-manage pinaagi sa Hostinger hPanel.

## Setup notes {#setup-notes}

1. I-configure ang core Hostinger integration ubos sa **Ultimate Multisite > Settings > Host Integrations**.
2. Siguraduhon nga ang Hostinger API token makapamahala sa target domain o subdomain.
3. I-enable ang Multi-Tenancy addon.
4. I-configure ang tenant isolation strategy sa dili pa i-publish ang tenant.
5. Isagawa ang migration verification workflow sa dili pa ipadala ang production traffic ngadto sa tenant.

Ang Hostinger capability naggamit sa shared Hostinger connection para sa mga operasyon sa host side. Kinahanglan gihapon nga magtudlo ang DNS sa husto nga Hostinger account, ug ang limitasyon sa hPanel account nagpadayon nga magbaton.

## Capability-specific changes {#capability-specific-changes}

- Ang Sovereign tenants mahimong paghimo uban sa host-aware domain operations.
- Ang mga database host strings nga anaa sa parehas nga makina gi-normalize sa dili pa hatagan og verification.
- Ang Hostinger-managed tenants kinahanglan mogamit sa database host value nga gipakita sa hPanel gawas kung ang WordPress runtime nagkinahanglan og local override.
- Ang SSO visits nagsalig sa tenant domain nga mag-resolve ngadto sa Hostinger-hosted tenant.

## Troubleshooting Hostinger tenants {#troubleshooting-hostinger-tenants}

- Kung mapakyas ang pag-install sa tenant, siguruha nga ang domain naapektado na sa Hostinger account.
- Kung mapakyas ang database verification, itandi ang username sa DB, ngalan sa database, ug host binding sa hPanel.
- Kung mapakyas ang **Visit (SSO)**, kumpirmahon nga aktibo ang DNS ug SSL para sa tenant domain.
- Kung ang teardown magbilin og mga host resources, kuhaon ang bisan unsang nahabilin nga databases, users, o folders gikan sa hPanel human nakumpirma ang backups.
