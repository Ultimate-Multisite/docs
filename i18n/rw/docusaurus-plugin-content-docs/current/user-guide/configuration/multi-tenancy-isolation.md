---
title: Ubwumvikane bw'ubwoko bwinshi
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Umuhagariko mu Ubwokozi (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 yashobora gukoresha ubwokozi bw'ubwokozi bwa database n'ubwokozi bwa filesystem kuri subsite cyose kugira ngo abantu bashobore kubaho mu buryo bw'ubwokozi (sovereign tenants). Ibi bikunda ibyerekeye amakuru y'umuntu ku subsite, ariko byashobora gukoresha uburyo bwo gutera uburenganzira bw'ubwokozi.

## Uburyo bwo gutera ubwokozi (Isolation strategy) {#isolation-strategy}

Gukoresha ubwokozi bwa sovereign cyangwa ubwokozi bwa mbere ku muntu w'umutwe (sovereign isolation) kuri abantu bashobora kubyitondera uburenganzira bw'ubwokozi bukomeye, uburyo bwo gukoresha filesystem cy'ubwokozi bukomeye, cyangwa uburyo bwa host runaka.

Abantu bwa sovereign bishobora kuba bifite:

- Database ya sovereign cyangwa uburyo bwo gukoresha prefix y'database (database prefix strategy) wakozeho ku host.
- Ubwokozi bw'ubwokozi bwa filesystem bukomeye.
- Icyemezo cy'ubwokozi (tenant registry entry) kigira ngo kishobore kwerekana subsite kuri database yayo, uburyo bwo gukoresha root path, hostname, n'uburyo bw'ubwokozi (isolation model).
- Icyemezo cyo gukoresha uburenganzira mu gihe cy'umvugo (migration verification result) mbere y'uko subsite kigenda kuba kigenda.

## Gutera Ubwokozi bwa Database host binding {#database-host-binding}

Version 1.2.0 igaragaza uburyo bw'ubwokozi bwa host binding bukurikirana kuri default ku muntu w'umutwe (same-machine) ku subsite by'ubwokozi. Ibyo nko `localhost` byoroshye kugira ngo Bedrock, FrankenPHP, no containerized WordPress bashobore gukora akazi kandi bakoreshe uburenganzira kuri host string MySQL yashobora kubona.

Iyo uburyo bwo gutera ubwokozi bwa sovereign:

1. Setya database host ku gihe cyo kumenyaho n'uburyo bwo gukoresha mu tenant runtime.
2. Gukoresha `localhost` kuri socket installs zikoreshwa mu gihe uhost yashobora kwerekana ubwokozi bw'umutwe (local connections).
3. Gukoresha `127.0.0.1` cyangwa hostname ya service gusa iyo database server igaragaza uburenganzira ku host uyu.
4. Kurusha migration verification nyuma y'uko wamukoresheye gutera ubwokozi bwa host binding.

Iyo verification itanga ibintu byo gutera uburenganzira (grant failures), rurinda database user grants n'ubwokozi bwo host binding. User yashobora gukoresha kuri `user@localhost` ni ikindi cy'user@127.0.0.1 cyangwa `user@%`.

## Ubwokozi bwa Filesystem root {#filesystem-root}

Ururu mu gukoresha (tenant root) yoroshye ku gukoresha mu gihe cyangwa mu gihe uburyo bwo gukoresha (deployments). Kugabanya amashobora y'umutara (temporary mount paths). Ku gukoresha ubushobozi bwa Bedrock, ugomba kwibanda ko uru gukoresha (tenant root) rishobora kuba mu gihe cyangwa mu gihe uburyo bwo gukoresha (deployments) y'umutara w'umutara (tenant bootstrap), kandi si gusa mu gihe cyangwa mu gihe uburyo bwo gukoresha (project root).

## Icyemezo cyo gukoresha (Provisioning order) {#provisioning-order}

Ku gukoresha umutara w'ubwoko bw'umutara (sovereign tenants) uyu gihe, gukoresha uburyo bwa mbere:

1. Gukora entry ya mutara mu registry.
2. Gukora database y'umutara n'umutara w'umutara (database user).
3. Gutangira schema ya mutara (Bootstrap the tenant schema).
4. Gukoresha abantu b'umutara (Provision tenant users).
5. Gufata uburyo bw'amashobora y'umutara mu gihe cyangwa mu gihe uburyo bwo gukoresha (Configure tenant filesystem paths).
6. Gukora gukoresha amakuru ya gukoresha (Run migration verification).
7. Gukoresha ubwoko bw'amashobora (Switch routing) cyangwa DNS nyuma y'uko gukoresha amakuru yagize (verification passes).

Icyemezo cyo gukoresha cyangwa mu gihe uburyo bwo gukoresha (Provisioning order) igabanya umutara w'umutara (tenants) guhindurwa nyuma y'uko database, abantu, no gukoresha amakuru ya gukoresha (filesystem) bafite ubushobozi.

## Uburyo bw'ubwoko bw'umutara (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 igabanya amashobora y'ubwoko bw'umutara (customer management actions) ku gihe cyangwa mu gihe uburyo bwo gukoresha (main site) iyo umutara w'ubwoko bw'umutara (sovereign mode) yari yagize. Umutara yashobora gukoreshwa nk'umutara w'WordPress w'igice (isolated WordPress install), ariko amashobora y'ubantu bafite uburyo bwo gukoresha (customer-facing actions) yashobora gufata umutara w'umutara (main site) nyuma yo gukora uko byerekana ku mutara w'umutara (network billing), ubwoko bw'ubwoko (membership), cyangwa amakuru y'umutara w'umutara (shared account data).

Uburyo bwa gihe cyangwa mu gihe uburyo bwo gukoresha (main-site flow) rishobora gufata ibi:

- Gukoresha uko byerekana ku mutara (Checkout and plan changes).
- Uburyo bw'ubwoko bw'umutara (Account overview) n'amashobora y'umutara w'umutara (customer profile actions).
- Gufata amakuru ya gukoresha (Billing address updates) no amashobora y'ubwoko bw'ubwoko (payment-management screens).
- Uburyo bwo gushyira amakuru (Invoice and payment-history views).
- Amashobora y'ubwoko bw'umutara w'umutara (Site management actions) nk'uko byerekana umutara w'umutara (adding sites) cyangwa gufata umutara w'umutara (deleting a site).
- Gukoresha ubwoko bw'amashobora (Template switching).
- Gufata amakuru ya gukoresha (Domain mapping) no gukoresha uburyo bwa mbere (primary-domain changes).

Iki ni uburyo bwo ko mu gihe umukoresha yashyira ikintu cyangwa akora ibindi ku mwezi (action) ku tenant ya sovereign, Ultimate Multisite igira ubushobozi bwo gukora URL y'umwezi w'umwezi (main-site URL) kandi igaragaza uko tenant ya mbere itarimo kugera mu gihe cyo kwishyura. Ibi byashobora guhindura umukoresha ko akemura ibyo yashyize ku rekodi za uburyo bwo gukora, mbere yugera mu gihe cyo kwumva tenant ya mbere nta kumenya ubushobozi bwo gukora ibyo byose mu database ya sovereign.

Ku gihe umuntu yari ari operator (operator), uburyo bw'ubwujubi ni: kugira ubushobozi bwo gukoresha amagice y'umwezi w'umwezi (billing), account, checkout, invoice, template, no domain-management ku main site cyangwa se mu gihe cyo kwibuka. Tenant dashboards zishobora guhuza ku mwezi w'umwezi (pages) ibyo byose, ariko main site ni igice cyiza cyo gukoresha nk'uko umwezi w'umwezi (source of truth) kuri iyo action.
