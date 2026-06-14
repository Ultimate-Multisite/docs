---
title: Webkhuggar
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Fyrirblik á Webhooks (v2)

_**ÁHATTENSTÖÐ: Skráðu að þetta eiginleiki eða greinin er fyrir framavanzda notendur.**_

**Webhook** er hátt sem app eða tækni eins og Ultimate Multisite getur verið til að veita öðrum tæknilegum áframleiðandi upplýsingar. Webhook sender data eða payload í öðrum appum þegar hönnun er á gangi, það sem þýðir að þú **fá data strax.**

Þetta er hulega gagnlegt ef þú þarft að tengja inn eða sendast sérstök data frá Ultimate Multisite til að öðrum CRM eða kerfi í hvert sem viðmið er á gangi. Til dæmis þarftu að sendast nafni og tölvupóstnúmer notandans til safna með hverjum nýr notendurinn er skráð.

## Hvernig á að skapa webhook

Til að skapa webhook, ferstú í netverkstjórnarskjalann þinn (network admin dashboard). Klikkaðu á **Ultimate Multisite > Webhooks > Add New Webhook.**

![Óskiljað lista með webhooks og hnappur til að bæta nýjum inn](/img/admin/webhooks-list-empty.png)

Þar eftir geturðu breytt uppsetninguna webhookinn:

![Formin fyrir nýjan webhook með vörum Nafni, Hönnun og URL](/img/admin/webhook-add-modal.png)

Þegar þú ert að skapa nýja webhook er þér færð til að gefa upplýsingar eins og **Nafn, URL** og **Viðmið (Event)**. Þú getur nota hvaða nafn sem þú vilt fyrir webhookinn þinn. Mikilvægasta hluti eru URL-inn og Viðmiðin.

![Inngang á breytingu webhookins sem sýnir URL-stæð og frumstýring af payload](/img/admin/webhook-url-field.png)

URL er **endurpunktið eða staðsetning** sem Ultimate Multisite mun sendast **payload eða data**. Þetta er appinn sem tekur imlit.

Zapier er algengasta lausnin sem notendur nota til að gjöra tengingu við þriðja marka appa einfaldari. Á meðan þú hefur ekki plattforma eins og Zapier, þarftu að skapa sjálfskipta vinnufundi (custom function) sem mun fanga data og beita hana. Sjá þessa greinin um **hvernig á að nota Ultimate Multisite webhook með Zapier.**

Í þessum greininni sjöndum okkar grunnkonsept um hvernig webhook starfar og hvaða hendingar eru til við disponun í Ultimate Multisite. Við munu nota þriðja aðila síðu nafund [requestbin.com](https://requestbin.com/). Þessi síða leyfir okkur að skapa endpoint og fanga payload án þess að skrifa nánari kóða. _**Tilskynning: allt sem þetta gæti gerð er að sýna okkur að data hefur verið fanga.**_ Það verður ekki framkvæmt nokkinn sorðun eða aðrar ásetningar á payload-inum.

Gangi yfir [requestbin.com](https://requestbin.com/) og klikka á Create Request Bin.

Eftir að hafa klikkt á þennan hnapp munu þeir spyrja þig um innskráningu ef þú hefur reikning eða til að skrá þig. Ef þú hefur reikning, mun það leða þig beint í dashboard-inn þeirra. Á dashboard-inum sínum sjáðu þú strax endpoint eða URL sem þú getur nota í sköpuninni á webhook fyrir Ultimate Multisite.

Kopla þennan URL og fari aftur til Ultimate Multisite. Stillingi endpoint-ins á vurlagshópinn (URL field) og veldu hendingu úr drápurinn. Í þessu dæmi munum við velja **Payment Received** (Pöntun eftir gildandi).

Þessi hending er tilkynnt hvar sem notaðinn gerir betalningu. Allar tilfelli sem eru til við disponun, skjalði þeirra og payload-ir eru lista á undir síðuna. Klikka á hnappinn **Add New Webhook** (Búa til nýja webhook) til að fanga webhook-inn.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Við getum nú send sem testhendingu í endpoint þar sem við getum sjá hvort webhook sem við hefur búa til virkar. Við getum gerð þess með því að klikka á **Send Test Event** (Sendu testhendingu) undir webhook-inn sem við hefur búa til.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Þetta sýnir okkur staðfestingsvindfara sem segir að testin hafi verið átt á sítt.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Ennið þegar við skoðum _Requestbin_ síðuna sjáum að hluti (payload) hefur verið notið með nokkrum prófanlegum upplýsingum.

Þetta er grunnforgreining á því hvernig webhook og endpoints virka. Ef þú vilt skapa eina sérsniða endpoint, þurfaðu þú að skapa sérsniðna function (funksjon) til að greina upplýsingunum sem þú fær frá Ultimate Multisite.
