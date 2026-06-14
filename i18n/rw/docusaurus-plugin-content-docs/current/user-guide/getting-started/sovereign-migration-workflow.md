---
title: Uburyo bwo gukoresha uburyo bw'ubwujgwa
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow ya Kumenya Ubwujude

Ultimate Multisite: Multi-Tenancy 1.2.0 yashyira imyitwarire (verification gates) yo gukora uburyo bwo gukoresha subsite yakoreshwa mu infrastructure ya tenant w'ubujude (sovereign).

## Icyiza ku gukora

Gushakira ko wari:

- Uburyo bw'ibikorwa (backup) bukurikirana bwo site yashyira.
- Addon ya Multi-Tenancy iri mu gihe cyihagaragara (active).
- Database, filesystem root, no domain ya tenant ikoreshwa iri imbere kandi irimo gukora.
- Uburyo bw'ubwujude bw'ibikorwa bwo database bukurikirana n'uburyo bwo kubyara mu gihe cyihagaragara (destination environment).
- Ubushobozi bwo gukoresha WP-CLI commands ku rugero rwa network.

## Icyiza cyo gukora

1. Gukora database no filesystem ya tenant ikoreshwa.
2. Gukoresha cyangwa gukorera ibyemezo by'ubwujude bw'ibyo tenant (tenant isolation settings).
3. Gukora uburyo bwo gukora tenant migration.
4. Gukora cyangwa gushakira abantu b'ubujude (tenant users).
5. Gukoresha ibikorwa by'async migration jobs kugira ngo bitoneka (drain).
6. Gukora imyitwarire y'ubwujude (sovereign migration verification).
7. Gutangira tenant uburyo bwo SSO.
8. Gushyira DNS cyangwa routing gusa nyuma yo gukora imyitwarire.

## Imyitwarire (Verification gates)

Uburyo bwo gukora imyitwarire bukurikirana uburyo bwo gukoresha migration ku nzego z'ibindi:

- Schema ya tenant iri mu gihe kandi yashobora gukorwa na database ya tenant.
- Database host ikoreshwa iri mu gihe cyemezo bya grants (grants) byiza.
- Abantu b'ubujude bari mu gihe kandi bakoresha indwara y'abantu bwo gukoresha uburyo bwo ubwujude (sovereign install user count).
- Queue ya async push ikora neza itoneka.
- Uburyo bw'ibikorwa bya data ku rugero rwa network bishobora guhindurwa cyangwa bitagukuriye kuri tenant y'ubujude.

Gusobanura imyitwarire (verification failures) nk'ibyo bikorwa mbere yo gushyira mu gihe cyo gukoresha. Gufungura ikibazo cy'database, abantu, queue, cyangwa routing kigize uburyo bwo gukora imyitwarire, nyuma y'uko wari wumva ko iriho ibindi, mbere yo guhagarara tenant ku babiri (customers).

## Gutangira tenant uburyo bwo gukoresha

Nyuma yo gukora imyitwarire, gukoresha **Visit (SSO)** ku site management screen kugira ngo umenye uburyo bwo gutangira tenant. Ibi bituma umehagarara routing ya tenant, gukoresha SSO token, gushyira ibintu mu gihe cy'ubujude (origin pinning), no gushakira abantu b'ubujude mu gihe cyiza cy'umwihariko.
