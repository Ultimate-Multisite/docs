---
title: Sjálfstæð migra workflow
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migration Workflow {#sovereign-migration-workflow}

Ultimate Multisite: Multi-Tenancy 1.2.0 hefurðar migraðar eftir að setja upp verifactory gerðir fyrir þá sem flytja standard subsite í sovereign tenant innviði.

## Fyrir að byrja {#before-you-start}

Staðfesti að þú hafi:

- Uppfræikum af kynningu (backup) á upphaflega síti.
- Multi-Tenancy addon er aktivt.
- Destina tenant database, filesystem root og domén eru klára sett upp.
- Binding fyrir database host sem passar við destina innvið.
- Að geta framkvæmt WP-CLI fyrirmyndir fyrir nýting netverkans.

## Til að ráða á ferli {#recommended-workflow}

1. Stæðja eða uppfærja settar fyrir tengingu tenantna (tenant isolation settings).
2. Framkvæma migraðarinn til tenantins.
3. Setja upp eða staðfesta notendur tenantins.
4. Leka úr asynkrónum migraðarferlum (async migration jobs).
5. Framkvæma verifactory migraðarinn fyrir sovereign innviði.
6. Leita fram til tenantins með SSO.
7. Skipta DNS eða leiðurstöðu eftir að all verifactory gerðir séðar.

## Verifactory gerðir {#verification-gates}

Verifactory ferlið skennur migraðarinn frá fleiri hliðum:

- Schema tenantins hefur verið sett upp og getur vera skrifað af database writer tenantins.
- Settur database host hefur réttar neðurstöður (grants).
- Notendur tenantins eru til staðar og passar við spáðan fjölda notenda fyrir sovereign install.
- Asynkrón persiljanir (async push queue) geta lekt fram vel.
- Fornu dataferli á netverkssíðunni þarf ekki lengur fyrir sovereign tenantinn.

Staðfesti að verifactory gerðir séðar sem hindrunar fyrir byrjun. Fíxdu það database, notendur, persiljan eða leiðurstöðu sem er til staðar, og framkvæma verifactory aftur áður en þú sýnir tenantinn fyrir viðskiptavini.

## Första viðskiptaferli með produktion {#first-production-visit}
Eftir að verifactory gerðir séðar, nota **Visit (SSO)** frá skráningarskjans síti til fyrstu stjórnarskynnings. Þetta staðfestar leiðurstöðu tenantins, handlingar SSO tokenins, orðanleika upphafssetningar og notendurinn fyrir tenantinn í einum stýrtri skrefi.
