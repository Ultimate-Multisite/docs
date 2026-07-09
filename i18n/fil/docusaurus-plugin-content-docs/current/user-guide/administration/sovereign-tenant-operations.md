---
title: Operasyon ng Sovereign Tenant
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operasyon ng Sovereign Tenant {#sovereign-tenant-operations}

Ultimate Multisite: Multi-Tenancy 1.2.0 ay nagdaragdag ng mga tool para sa operasyon ng sovereign tenants: mga subsites na tumatakbo nang may sariling database, filesystem root, at routing context habang nananatiling nakikita mula sa network admin.

Gamitin ang pahinang ito kapag namamahala ka ng mga isolated customer site, remote-site handoffs, o migrations na naglilipat ng isang standard subsite patungo sa sovereign infrastructure.

## Ano ang mga pagbabago para sa mga administrator {#what-changes-for-administrators}

- **Stateless tenant autologin** — Maaaring bisitahin ng network admins ang isang sovereign tenant nang hindi umaasa sa mahabang session state na ibinabahagi. Ang SSO token ay may tiyak na saklaw (purpose-scoped), naka-pin sa pinagmulan (origin-pinned), protektado laban sa pag-uulit (replay-protected), at limitado sa maikling panahon ng pag-expire.
- **Sovereign-aware routing** — Ang mga lumang isolated network at sovereign tenants ay nagre-resolve sa parehong site router path, na nagpapababa ng pagkakaiba sa bootstrap sa pagitan ng lumang at bagong isolated installs.
- **Verified migration state** — Sinusuri ng verification ng migration ang user provisioning, database writer permissions, queue drain status, at kawalan ng legacy table bago ituring na kumpleto ang isang tenant.
- **Safer teardown** — Ang sovereign teardown ay ngayon ay nagtatanggal nang malinis ng mga kredensyal ng tenant upang hindi maiwan ang mga deleted tenants na may lumang access sa database.

## Pagbisita sa isang sovereign tenant {#visiting-a-sovereign-tenant}

1. Buksan ang **Network Admin > Ultimate Multisite > Sites**.
2. Piliin ang sovereign tenant.
3. Gamitin ang **Visit (SSO)** kung available sa halip na kopyahin ang mga password o gumawa ng pansamantalang admin accounts.

Ang daloy ng pagbisita ay lumilikha ng isang maikling-panahong login token para sa tenant na iyon at itinatala ang SSO event sa audit trail ng tenant. Kung nabigo ang button, suriin kung ang domain ng tenant ay nagre-resolve sa inaasahang install at kung kaya ng tenant na maabot ang network-side SSO endpoint.

## Remote-site operations checklist {#remote-site-operations-checklist}

Bago baguhin ang isang sovereign o remote tenant, kumpirmahin:

Ang domain ng tenant ay tumuturo sa host na nagmamay-ari ng filesystem ng tenant.
Ang database host ng tenant ay tumutugma sa naka-configure na host binding para sa instalasyong iyon.
Ang mga command para sa migration verification ay pumapasa para sa tenant.
Ang mga async migration queue ay na-drain bago gumawa ng pagbabago sa DNS o pagmamay-ari.
Ang admin user ng tenant ay na-provision noong panahon ng migration at makakapasok sa pamamagitan ng SSO.

## Pagbubura ng sovereign tenants {#deleting-sovereign-tenants}

Ang pagbubura ng isang sovereign tenant ay mapaminsala (destructive). Siguraduhin muna ang status ng backup at export, bago burahin mula sa site management screen. Ang teardown flow na 1.2.0 ay nag-aalis ng mga database credentials ng tenant bilang bahagi ng cleanup, ngunit dapat pa ring i-verify ng mga administrator na nawala na ang host-level database users at folders kapag gumagamit ng external hosting panels.

:::warning
Huwag burahin ang isang sovereign tenant habang tumatakbo pa ang migration verification o habang naka-queue ang async push jobs. Hintayin ang pagkumpleto ng verification para hindi alisin ng teardown ang mga credentials na kailangan ng mga pending job.
:::
