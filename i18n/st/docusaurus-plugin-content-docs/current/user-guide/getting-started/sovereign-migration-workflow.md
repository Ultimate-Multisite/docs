---
title: >-
  Hoetsopeho ho lula le tšepo ea migration e fetang | Ultimate Multisite,
  WordPress, jalo ka hook names tse hlophisoa
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow ya Mofuta oa Sovereign

Ultimate Multisite 1.2.0 e ntse le gate tsa ho tsamaisa migration ho fana ka ho fana ka infrastructure ea mofuta o hlakileng (sovereign tenant).

## Ho sa kopa ha u qala

A re ke lehle hore u re:

- U na le backup sehlopha sa site e leng.
- Addon ea Multi-Tenancy e le e tsamaea.
- Database ea mofuta oa tsoalo (destination tenant), root filesystem, le domain e le lehle.
- Binding ea database host seo se fana ka sehlopha sa mofuta o hlakileng.
- U na le access ho rona WP-CLI commands ea network.

## Workflow ea ho baetsoisetso (Recommended workflow)

1. Baetsoa database le filesystem ea mofuta oa tsoalo.
2. Baetsoa kapa u reka settings ea isolation ea mofuta.
3. Rona migration ea mofuta o hlakileng.
4. Baetsoa kapa u tsamaisa users ea mofuta.
5. Baetsoa jobs ea async migration.
6. Rona verification ea migration ea sovereign.
7. Leha ho ba lele le tenant ka SSO.
8. Baetsoa DNS kapa routing haholo-holo ha ho fana ka ho tsamaisa (verification) e fetang.

## Gates ea ho tsamaisa (Verification gates)

Workflow ea ho tsamaisa e tsoela ho tsamaisa migration ka dits'a tse fapaneng:

- Schema ea mofuta o hlakileng e le e fa u na le u ka hlalosa ke database writer ea mofuta.
- Database host ea baetsoa a na le grants tse bonolo.
- Users ea mofuta ba tsamaea le ho fetoha le sehlopha sa users ea sovereign e e mongolo.
- Queue ea async push e ka baetsoa ka hlokompho.
- Paths tsa data tsa network e leng (legacy) ha di hloka fa mofuta o hlakileng oa sovereign.

Ba tsamaisa ho lehle ho tsamaisa (verification failures) ka ho fana ka ho sa u qala. Baetsoa mas'a a tsoiloa ea database, user, queue, kapa routing, ba re rona verification ka nako e fetang ha u lele tenant ka customers.

## Ho ba lehle la ho tsamaisa (First production visit)

Ha ho fana ka ho tsamaisa (verification) e fetang, u sebelise **Visit (SSO)** ho tloha sehlopha sa management ea site ho ba lehle la ho tsamaisa (admin visit) haholo-holo. Sena se re kelele routing ea mofuta, ho fana ka token ea SSO, ho pin origin, le ho baetsoa users ea mofuta ka nako e le e lehliso sa ho tsamaisa.
