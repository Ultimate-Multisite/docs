---
title: Isoláisiú Multi-tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolúidhríocht Multi-Tenancy {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 síosúidhríonn aisíon (isolation) deatach ar an dbhaine agus ar an fháil (filesystem) do chontail sobhraíolla. Is é seo an t-aonach a dhéanann na chontail ag teachtais, féachracha, agus rialúchán leat, gan a bheith data chontail ag cur isteach ar ais.

## Estráteig aisíon (Isolation strategy) {#isolation-strategy}

Use sovereign isolation (aisíon sobhraíochta) do chontail a bhfaidh a gcuid data a bheith ag cur isteach ar ais níos pearsanta, stóras fháil (filesystem storage) deatach, nó bealach féin chun an chontail a chur i gceart.

Caithfidh chomhthail sobhraíochta (sovereign tenant) a bheith leis:

- Un dbhaine sobhraíolla deatach nó stráteig prefix dbhaine a bhfaidh an host a bheith ag fhéadú.
- Un ríomhchláir fháil (filesystem root) deatach do chontail.
- Un cur chuig an t-aonach (registry entry) a bhíonn ag cur i gceart an site le dbhaine, stiúradh (root path), ainm host (hostname), agus model aisíon.
- Un cuid fhéachracha (migration verification result) ar bhealach chun an chontail a bheith ag teachtais (live).

## Bindeáil do dbhaine host (Database host binding) {#database-host-binding}

Tá cur chuig 1.2.0 tharrfhaitear an cur chuig same-machine host binding deatach leat. Is é an t-aonach a bhíonn ag teachtais mar `localhost` nó bealacha same-machine a bheith ag cur i gceart chun féachracha agus fhéachracha a chur in i gcaint le an string host a fheiceann MySQL.

Nuair a bhíonn sé ag cur i gceart chontail sobhraíolla:

1. Déan an dbhaine host go dtí an cur chuig a thabhairt do teachtais (runtime).
2. Use `localhost` chun installs local socket a bheith ag fhéadú nuair a bhíonn an host ag iarraidh curteacha local.
3. Use `127.0.0.1` nó ainm service hostname ach nuair a thabhairt an server dbhaine curteacha do host sin.
4. Déan fhéachracha migration ar aghaidh tar éis a bheith ag cur i gceart an host binding.

Má bhíonn fhéachracha (verification reports) ag teachtais grant failures, féachra ar na curteacha dbhaine do chontail le cur chuig a bhugta. Is é an t-aonach a bhugta do `user@localhost` ag cur i gceart éifeachtach ag `user@127.0.0.1` nó `user@%`.

## Ríomhchláir fháil (Filesystem root) {#filesystem-root}

Is an tairt root tenant de debe bheith go leatachas ar chreachtais agus déimhní. Déan cinnte go leat na stiúradh mount temporaill. Do ardán (install) style Bedrock, féachaint go bhfuil an tairt root ag cur isteach ar an web root WordPress a bhfaidh an bootstrap de luchtachas, níl é an tairt root chomharthaí an projéct ach an web root WordPress a bhfaidh an tairt.

## Uradh ordais féachaint (Provisioning order) {#provisioning-order}

Do láithreacha new sovereign tenants, usaidh an ardán seo:

1. Creoliad an cur chuig an registry de luchtachas.
2. Creoliad an database agus an user database de luchtachas.
3. Bootstrap an schema de luchtachas.
4. Provisin (provision) an users de luchtachas.
5. Cothú an paths de filesystem de luchtachas.
6. Déan ar chuid féachaint migration verification.
7. Switch routing nó DNS tar é seo a bhíonn an tairt ag déanamh cinnte.

Is ardán seo a bheith ag cur isteach na tenants partially isolated (partially isolated) ag fháil ar traffic primaid, gan a bheith an database writer, an users agus an filesystem réidh.

## Fíorais de chuidaithe máistreacha (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 ag déanamh na gníomhacha de chuidaithe máistreacha ar an site mhíne nuair a bhíonn modh sovereign agat. Is féidir leis an tenant a bheith ag déanamh ar fáil mar WordPress install isolated, ach nach bhfuil na gníomhacha de chuidaithe a bhaineann ar chuid feidhmach (network billing), membership, nó data account shaor a bheith ag déanamh ar fáil ag cur an chuidaithe ar an site mhíne instead de iarraidh a thabhairt an gníomh a dhéanamh i ngníomh runtime de luchtachas.

Bíonn an fíorais de an site mhíne ag cur isteach ar:

- Checkout agus pearsánacha plan.
- Overview account agus gníomhacha profail chuidaithe máistreacha.
- Athchunnaí áit bhailte (Billing address updates) agus screenanna de chuid feidhmach (payment-management).
- Fíorais invoice agus féachaint ar an scéal féidhmach (payment-history views).
- Gníomhacha de chuidán site mar athúsáidite sites nó déanamh de chuid site.
- Athúsáidte template switch.
- Mapping domain agus athrú primary-domain.

Nuair a bhíonn an chontail (customer) ag dul iad ar aon dearcán seo ó chontail sobhraí (sovereign tenant), buildtear Ultimate Multisite an URL na chontail mór (main-site URL) is sin ag cosaint an t-aontail spraoi (source tenant) mar cur chuig an t-aontail a bhíonn ag cur chuig ar ais nuair atá sé go bhfuil sé safe. Is é sin a gníomhú leat chun an chontail a dhéanamh ar an curteacha netearc, agus ansin a bheith ar ais i gcaint an t-aontail gan dubháil (duplicating) stát bhuaighneú (billing) nó stát múnacht (membership state) i d'fháil (database).

Do ardaitheoirí (operators), is é an réimse práticéal: déan curteacha billing, account, checkout, invoice, template, agus domain-management ar an chontail sobhraí. Is féidir leis na dashboard na chontail a bheith ag cur chuig iad ar na curteacha seo ar an chontail mór, ach níl an chontail mór an curteach (source of truth) ar an curteach.
