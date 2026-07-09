---
title: Kumisikidza Kubhadhara Kwemaoko
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Kugadzira Manual Payments (v2)

_**CHERECHEDZO YAKAKOSHA: Chinyorwa ichi chinoreva Ultimate Multisite shanduro 2.x.**_

Manual payments inzira yekuti upe dzimwe nzira dzekubhadhara kana **Stripe** kana **PayPal** zvisipo kune vashandisi vako. Inogona kuva wire kana bank transfer kana imwe nzira ipi zvayo yekubhadhara iripo kune vashandisi vako munharaunda yavo.

## Maitiro ekugonesa Manual Payments

Kugadzira manual payment kuri nyore zvikuru. Unongoda kuigonesa pasi pe payment gateways woisa mirayiridzo yakadzama yekuti mushandisi anofanira kutumira mubhadharo sei.

Kutanga, enda ku **Ultimate Multisite > Settings > Payments**. Pasi pe **Payment Gateways** , batidza **Manual**. Uchaona kuti bhokisi re **Payment Instructions** richabuda kwauri.

Wedzera mubhokisi iri ruzivo ruchadiwa nemutengi wako kuti aite mubhadharo. Rinogona kuva mashoko eakaundi yako yebhangi neemail yako kuitira kuti mutengi akutumire chisimbiso chemubhadharo, semuenzaniso.

![Chibatidza cheManual payment gateway chine nzvimbo yemavara yePayment Instructions](/img/config/manual-gateway-expanded.png)

Heino interface yezvirongwa zve manual gateway:

![Zvirongwa zveManual gateway](/img/config/manual-gateway-settings.png)

Mushure mekuzvigadzira, ingodzvanya pa **Save Settings** uye zvinenge zvaitwa. Kana vashandisi vachinyoresa kunetwork yako, vachaona meseji inovazivisa kuti vachagamuchira mirayiridzo yako yekupedzisa kutenga.

![Meseji yekusimbisa kunyoresa inoudza mushandisi kuti achagamuchira mirayiridzo yekubhadhara](/img/frontend/registration-manual-notice.png)

Uye vachagamuchirawo meseji papeji yako ye **Thank You** ine mirayiridzo yako yekubhadhara.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Kusimbisa manual payments

Kuti usimbise manual payment, enda kumenyu ye **Payments** pabhawa rekuruboshwe. Ikoko unogona kuona mabhadharo ese panetwork yako nemashoko awo, kusanganisira **status** yawo. Manual payment ichagara iine **Pending** status kusvikira waichinja nemaoko.

![Rondedzero yePayments inoratidza manual payment iri pending](/img/admin/payments-list.png)

Pinda papeji yemubhadharo nekudzvanya **reference code**. Papeji iri une mashoko ese emubhadharo uri pending, akadai se reference ID, zvigadzirwa, nguva dzakanyorwa nezvimwe.

![Peji yemashoko emubhadharo inoratidza reference code, zvigadzirwa, uye huwandu](/img/admin/payment-edit.png)

Pakoramu yekurudyi, unogona kushandura status yemubhadharo. Kuichinja kuita **Completed** uye **kubatidza Activate Membership** option kuchagonesa site yemutengi wako uye membership yavo ichava active.

![Peji yekugadzirisa payment ine Status yakaiswa kuCompleted uye chibatidza cheActivate Membership](/img/admin/payment-activate-membership.png)
