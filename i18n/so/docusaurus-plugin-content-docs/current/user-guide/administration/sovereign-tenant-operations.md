---
title: Hawlgalka Qoyska Xaqa-qabta ah
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Hawlgalka Qoyska Soomaaliga ah (Sovereign Tenant Operations)

Ultimate Multisite 1.2.0 waxay ku daraysaa qalab hawlgalka loogu talagalay qoysaska soomaaliga ah: subsites-yada (website-yada yar ee ka soo socda) kuwa shaqeeya database-yadeed, asalka faylasha (filesystem root), iyo xaaladda routing-ka (routing context) oo ay weli arki karaan maamulaha shirkadda.

Isticmaal boggan marka aad maamulaysid goobaha macaamiisha ee kala go'an, wareejinta goobaha fog, ama wareejinta (migrations) oo ka qaadaysa subsite caadi ah oo lagu dhaqayo nidaamka soomaaliga ah.

## Waxyaabaha isbeddelaya maamulayaasha (What changes for administrators) {#what-changes-for-administrators}

- **Autologin-ka qoyska aan xog lahayn (Stateless tenant autologin)** — Maamulayaasha shabakaddu waxay booqan karaan qoyska (tenant) ee madaxbannaan iyadoon ku tiirsan xogda isku xirnaanta muddo dheer. Token-ka SSO wuxuu leeyahay meel gaar ah, wuxuuna la xiriira asalka (origin), wuxuuna ilaalinaya dib u soo celinta (replay) oo la xiray wakhti gaaban oo dhamaad ah.
- **Waddada socda ee aqoonsan qoyska madaxbannaan (Sovereign-aware routing)** — Shabakadaha hore ee loo qaybsaday iyo qoysaska madaxbannaan waxay isku xiraan iyagoo isticmaalaya wixii router-ka bogga ah, taasoo yareynaysa kala duwanaanshaha bilaabidda (bootstrap differences) inta u dhaxaysa warxadaha hore iyo kuwa cusub ee loo qaybsaday.
- **Xaaladda wareejinta la xaqiijiyay (Verified migration state)** — Hubinta wareejinta waxay hubisaa in la diyaarinayo isticdellada macaamiisha, huddurka qoraagga database-ka (database writer permissions), xaaladda nadiifinta qaybta sugitaanka (queue drain status), iyo ma jiritaanka miisaska hore (legacy table absence) inta aan la arkiin in qoysku uu dhammaystiran yahay.
- **Dhammaan ah oo badbaado leh (Safer teardown)** — Dhammaantii madaxbannaan, hadda waxaa lagu saaraya xogta macaamiisha si nadiif ah sidaa ahan, si aan la tagin qoysaska la nisbaxay inay ka dib dambe ku sii jirto helitaanka database-ka.

## Booqashada qoyska madaxbannaan (Sovereign Tenant) {#visiting-a-sovereign-tenant}

1. Fur **Network Admin > Ultimate Multisite > Sites**.
2. Dooro qoyska madaxbannaan ee aad rabto inaad booqato.
3. Haddii ay suurtagal tahay, isticmaal **Visit (SSO)** halkii aad ka koobna lahayd sirro ama aad samayn lahayd akoon maamul oo si kooban ah.

Habka booqashada wuxuu abuuraa token login gaaban oo u socda qoyskaas, sidoo kale wuxuu diiwaangelinayaa dhacdo SSO-ga (SSO event) ee baarista qoyskaas. Haddii badhanka uu ku guuldareysto, hubi in domain-ka qoyskaas uu si sax ah u soo celiyo install-ka la filayso isla markaana qoysku awood u leeyahay inuu gaaro endpoint-ka SSO ee dhinaca shirkadda (network-side).

## Qaybta falanqaynta hawlgalka goobaha fog (Remote-site operations checklist) {#remote-site-operations-checklist}

Ka hor intaadan beddelin qoys madaxbannaan ama qoys fog, hubi:

Domain-ka qoyska (tenant domain) wuxuu u socdaa server-ka leh faylka (filesystem) ee qoyskaas.
Server-ka database-ka qoyska ayaa isku dhaca (matches) xiriirka server-ka la dejiyay install-kaas.
Amarrada xaqiijinta miigashada (migration verification commands) waxay ku guulaysataa qoyska.
Qaybaha miigashada aan si degdeg ah u fulin (Async migration queues) waxaa la nadiifiyaa ka hor inta aan la beddelin DNS ama milkiilayaasha (ownership).
Isticdellada maamulka qoyska (tenant admin user) ayaa la diyaariyay inta lagu jiro miigashada waxayna ku galayaan SSO-ga.

## Tutinta qoysaska madaxbannaan (Deleting sovereign tenants) {#deleting-sovereign-tenants}

Tutinta qoys madaxbannaan waa mid burburisa (destructive). Marka hore, hubi xaaladda backup-ka iyo export-ka, ka dibna ka saar (delete) bogga maamulka goobta. Habka 1.2.0 ee hagaajinta (teardown flow) wuxuu ka saaraa macluumaadka database-ka qoyska sida qayb ka ah nadiifinta, laakiin maamulayaasha waa inay weli xaqiijiyaan in isticmaalka barnaamijyada hosting-ka dibadda (external hosting panels) ay awood u leeyihiin in isticmaalka database-ka heer serverka iyo folder-ka qoyskaas la saaro.

:::warning
Ha dhaafin qoys (tenant) oo madax-bannaanka leh inta aanu shidan la'aadin (migration verification) socon yahay ama inta ay jiraan hawlo ah oo si asinkhaan loo qeexay (async push jobs). Sugidda dhammaystirka hubinta (verification) si aad u ka fogaato inuu nidaamku ka saaro macluumaadka la loo baahan yahay hawlaha weli la sugaya.
