---
title: Kutanga kweMulti-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolation yaMweya (Multi-Tenancy)

Ultimate Multisite: Multi-Tenancy 1.2.0 inosirisa isolation yechitambo chedatabase nefilesystem kwa subsite dziri kune vana vanovaka (sovereign tenants). Izvi zvinokumbira kuti data ya tenant ine kutanga kwakasiyana, kunyanya kuendesa mweya wekuchengetedza (network-level provisioning), kukumbira (billing), nekuvaka (administration).

## Strategy yeKutanga Isolation {#isolation-strategy}

Chirudziye isolation yechitambo chesovereign kune vana vanovaka vanoita zvinhu zvinoda kutanga separation yakakwana ya data, kubva kuinguva yekuchengetedza filesystem dziri dzinowanikwa (dedicated), kana kuva neboundary inoshanda host wese.

Chitambo chesovereign chine kufamba:

- Database yechitambo chesovereign ine database dedicated kana strategy ya prefix ya database inoshandiswa yakakubatsira host.
- Root filesystem ya tenant inoshandiswa dedicated.
- Entry ya registry ya tenant inoshandisa kuti ishangane site nedatabase, root path, hostname, uye model yeisolation.
- Result yeverification ya migration panguva inogadzirwa pane tenant ine kuita live (live).

## Binding yechitambo cheDatabase Host {#database-host-binding}

Version 1.2.0 inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge

Rudo renyane rudo (tenant root) rinoda kuitika pfungwa dzinobva uye dzichingopfuura. Usiita zvinobva mhando dzinotamba. Kuona kuti rudo renyane rinoda kuenda zvakanaka panguva dzinobva nekuita deployments. Kuti usina zvinobva (temporary mount paths). Kuti kune installs dzine chine Bedrock, ndichida kunzwisisa kuti rudo renyane rinoda kuenda kuunyangwe we WordPress (WordPress web root) anogona kutarisirwa nebootstrap ya tenant, uye haina kunoda kuenda pakutanga pane project root chete.

## Ururo wekuita (Provisioning order) {#filesystem-root}

Kuti kubva kune tenants dzinobva dzine sovereignty, ndichida kuti mutende iwe utange panguva iyi:

1. Kuratidza entry ya tenant registry.
2. Kuratidza database ya tenant uye user ya database.
3. Kufamba (Bootstrap) schema ya tenant.
4. Kuratidza users ve tenant.
5. Kuita (Configure) zvinoda kuenda mupfundo dze filesystem ya tenant.
6. Kuratidza verification ye migration.
7. Kusvika pfungwa dziri kuenda kana DNS panguva verification inokuda.

Iruro iyi inokupa kuti tenants dzakasiita (partially isolated) hazvazivikanwa nekuita zvinoda kuenda traffic panguva database writer, users, uye filesystem zvinoita.

## Ururo wekuita management ye customers dzinobva (Sovereign customer management flows) {#provisioning-order}

Ultimate Multisite v2.13.0 inoda kuti zvinoda kuita management ye customers dziri kune main site kana sovereignty inoratidzorwa. Tenant inogona kuenda kubva neinstall ya WordPress inosanganiswe, asi zvinoda kuita actions dzinobva necustomers zvinoda kunge zvinhu zvine billing ya network, membership, kana data ye account yese dzichingopfuura kuti zivaka customers panguva main site pane kuitira action iye mu runtime ya tenant.

Iruro ya main site inogona kuita izvi:

- Checkout uye kupfura (plan) changes.
- Account overview uye actions dzinobva necustomer profile.
- Updates ye billing address uye screens dzine management ye payment.
- Views dze invoice uye payment history.
- Actions dze management ya site zvichingopfuura, se kuita sites kana kuenda (deleting) site.
- Kuuta template.
- Domain mapping uye kusvika pfungwa dziri primary domain.

Ngekuindwa mutenda wese wekuti munhu anomvura zvinotanga kubva ku tenant wose (sovereign tenant), Ultimate Multisite inobata URL ya main-site isinei inozuva refuwo (source tenant) sekuita kuti iwe utore (return target) kana zvinhu zviri kuitika zvinhu zviri kuita. Izvi zvinokubatsira munhu anogona kumira kunge iwe ndichitenda zvinhu zvakaita kune rekodi renetwerki, uye kupfuura kubva kune tenant context asi usina kukwira kufamba nekuita billing kana membership state mune database ya sovereign.

Kuti vatsviki (operators), rurimi rwenzaniso ndiri: tsvaga nhaka dzinobva ku main site kuti zvinenge dziri kuita billing, account, checkout, invoice, template, uye domain-management kuti tenant networks zvinhu. Tenant dashboards dzine zvichangopfuura kune nhaka dzaiitiko, asi main site ndiri chivimbo chekuti iwe unogona kutanga kunge iwe ndiri munzvimbo inobva nekuita action.
