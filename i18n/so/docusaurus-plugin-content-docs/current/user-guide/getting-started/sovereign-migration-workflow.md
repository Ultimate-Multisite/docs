---
title: Habka Ujiidda Qaran
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow-ka Miliddaal (Sovereign Migration)

Ultimate Multisite 1.2.0 waxay ku daraysaa albaabo xaqiijin (verification gates) si loo hubiyo u guulaysato wareejinta subsite caadi ah oo loo marayo nidaamka qoyska (sovereign tenant infrastructure).

## Intaadan bilaabin {#before-you-start}

Hubi inaad haysato:

- Backup hadda jira ee website-ka asalka ah.
- Addon-ka Multi-Tenancy uu socdo (active) yahay.
- Database-ka qoyska u dhigta, aasaaska faylka (filesystem root), iyo domain-ka ay diyaar yihiin.
- Xiriir database host oo la mid ah deegaanka u dhexeeya.
- Helidda fursadda aad ku samayn karto amarrada WP-CLI ee shabakadda.

## Workflow-ka la talinaya {#recommended-workflow}

1. Diyaarso database-ka qoyska iyo aasaaska faylka (filesystem).
2. Diyaariso ama cusboonaysii dejimaha kala go'aaminta qoyska (tenant isolation settings).
3. Samayso wareejinta qoyska (tenant migration).
4. Samee ama hubi isticdellada macaamiisha ee qoyska (tenant users).
5. Fudub (drain) shaqooyinka wareejinta aan la oggolaanayn inay si xad dhaaf ah u socdaan (async migration jobs).
6. Samayso xaqiijinta wareejinta qoyska (sovereign migration verification).
7. Booqo qoyska adigoo isticmaalaya SSO.
8. Beddel DNS ama routing kaliya ka dib marka la gudbo hubinta uu guuleysto.

## Albaabada xaqiijinta (Verification gates) {#verification-gates}

Workflow-ka xaqiijinta wuxuu hubinaya wareejinta oo laga eego dhinacyo badan:

- Ma jiraan qaab-dhismeedka database-ka qoyska ah (tenant schema) oo uu ku qori karo qoraaga database-ka qoyska.
- Database host-ka la dejiyay wuxuu leeyahay ogolaansho sax ah.
- Isticdellada macaamiisha ee qoyska ayaa jira waxayna la mid yihiin tirada isticdellada macmiilka (sovereign install user count) la filayo.
- Qaybta shaqooyinka wareejinta aan la oggolaanayn inay si guul leh u socdaan (async push queue).
- Waa laguma baahan mararkaas waddooyinka macluumaadka hore ee dhinaca shabakadda (legacy network-side data paths) qoyska.

U dhaqso ku arag fashilada xaqiijinta inay yihiin caqabadaha horumarinta (pre-launch blockers). Si sax dhis khaladaadka database-ka, isticdellada macaamiisha, qaybta shaqooyinka (queue), ama routing-ga, ka dibna mar kale samayso xaqiijinta ka hor intaadan qoyska u soo bandhigin macmiilayaasha.

## Booqashada hore ee warshadaha (First production visit) {#first-production-visit}

Marka la gudbo hubinta uu guuleysto, isticmaal **Visit (SSO)** laga helo screen-ka maamulka website-ka si aad u booqato markii ugu horreysay oo admin ah. Tani waxay xaqiijinaysaa waddada socodka qoyska (tenant routing), sida loo maareeyo token-ka SSO, meesha la dhigo asalka (origin pinning), iyo in isticdellada macaamiisha ee dhinaca qoyska ay si habaysan u diyaarsadaan hal tallaabo.
