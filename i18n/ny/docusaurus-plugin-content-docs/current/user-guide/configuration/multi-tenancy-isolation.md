---
title: Kukwera kwa Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Kufufu kwa Ufunga (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 imasongeza uwezo wa kufanya database na filesystem isolation kwa kila subsite ili wateja wao wajue kuwa data yao inahifadhiwa tofauti, huku ukihifadhi mipangilio ya mtandao, malipo, na usimamizi.

## Mkakati wa Isolation (Isolation strategy) {#isolation-strategy}

Tumia isolation ya sovereign kwa wateja wanaohitaji kutenganisha data zaidi, kuhifadhi la filesystem tofauti, au mipaka tofauti ya host.

Kila mteja wa sovereign anapaswa kuwa na:

- Database yake maalum au mkakati wa mbele wa database unaokubalwa na host.
- Msimbo (root) wa filesystem wa teja.
- Entry ya registry ya teja inayohusisha site hiyo na database yake, njia kuu (root path), jina la host (hostname), na mfumo wa isolation.
- Matokeo ya uthibitishaji wa migration kabla ya teja kuhesabiwa kuwa hai.

## Uunganishaji wa Host kwa Database (Database host binding) {#database-host-binding}

Toleo 1.2.0 limebadilisha jinsi ufunguo wa default wa kufunga kwenye machine moja unavyofanya kwa install za sovereign. Thamani kama `localhost` inafanywa sawa ili Bedrock, FrankenPHP, na WordPress installs zilizowekwa kwenye container zinaweza kutoa na kuthibitisha ruhusa dhidi ya string ya host ambayo MySQL inayoona kweli.

Unapoweka mipangilio kwa teja wa sovereign:

1. Weka database host kuwa thamani inayohitajika na runtime ya teja.
2. Tumia `localhost` kwa install za socket za ndani wakati host inatarajia muunganisho wa ndani (local connections).
3. Tumia `127.0.0.1` au jina la service tu pale ambapo seva ya database inatoa ruhusa kwa host hilo.
4. Endesha uthibitishaji wa migration baada ya kubadilisha uunganishaji wa host.

Ikiwa uthibitishaji unaonyesha kushindwa kupata ruhusa, soma ruhusa za mtumiaji kwenye DB ya teja na uunganishaji wa host uliowekwa. Mtumiaji aliyepokea ruhusa kwa `user@localhost` ni tofauti na `user@127.0.0.1` au `user@%`.

## Msimbo (Filesystem root) {#filesystem-root}

Mufumbwa wa m'biri (tenant root) ukonseka m'moyo wosavuta pansi ndi zowonjezera (restarts) ndi kupanga (deployments). Simukumbukira za m'mulo (temporary mount paths). Kwa kukhazikitsa m'mulo monga Bedrock, onani kuti mufumbwa wa m'biri umphuka ku m'mulo wopangidwa ndi WordPress omwe m'mulo yosavuta (tenant bootstrap) umayamba, osati m'mulo wopangidwa pansi (project root) monga chiyembekeza.

## Mwayi wa kukhazikitsa (Provisioning order) {#provisioning-order}

Poyamba kwa m'mulo wosavuta wosavuta (new sovereign tenants), simukumbukira mwayi wosavuta wosavuta:

1. Kufotokozera chithunzi cha m'mulo (Create the tenant registry entry).
2. Kufotokozera database ya m'mulo ndi user wa database (Create the tenant database and database user).
3. Kukhazikitsa schema ya m'mulo (Bootstrap the tenant schema).
4. Kukhazikitsa anthu a m'mulo (Provision tenant users).
5. Kufotokozera m'mulo ya m'mulo (Configure tenant filesystem paths).
6. Kufotokozera kukhazikitsa chifotokozero (Run migration verification).
7. Kusintha mwayi wopangidwa kapena DNS pambuyo pa kufotokozera kuwoneka (Switch routing or DNS after verification passes).

Mwayi wosavuta wosavuta umphuka m'mulo wosavuta wosavuta wokondetsedwa kupita poyamba pamene database writer, anthu, ndi m'mulo ya m'mulo yomwe ukonse wokhazikitsa (filesystem) kumayamba.

## Mwayi wa kukhazikitsa kwa mamundiro a m'mulo wosavuta (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 imapereka zinthu za ulamulira wamundiro (customer management actions) pa site yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe y

Pambere pamene mwana wa mpene (customer) anachilidwa chilichonse cha ule chombo (action) ku mpaka wamene (sovereign tenant), Ultimate Multisite aligwirira ntchito kulela URL ya mpaka wamene yomwe imapepela, ndipo aliipereka mwana wa mpaka wamene wosangalala kuti akambire ule chombo ku mapeto a mitengo (network records) komwe ndi kuyenera kulonjeza m'context ya mpaka wamene osati kukhazikitsa upatanirano (billing) kapena stiti la udindo (membership state) m'database ya mpaka wamene.

Pamene m’opereka (operators), rute lalikulu ndi: chita kuti mapulogalamu a ule chombo (billing, account, checkout, invoice, template, ndipo domain-management pages) akulimbikizidwe pa site yomwe imapepela kwa mitengo ya mpaka wamene. Dashobodi za mpaka wamene (Tenant dashboards) zingathe kukhazikitsa mapulogalamu awa, koma site yomwe imapepela imapereka chinthu chomwe chimapereka (source of truth) kwa ule chombo.
