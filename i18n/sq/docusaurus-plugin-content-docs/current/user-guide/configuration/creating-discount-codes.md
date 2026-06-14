---
title: Krijimi i Kodit Ulëvizës
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Krijimi Kodit Discount (v2)

_**SHËNJE E RËNDË: Ky artikull i referohet Ultimate Multisite version 2.x.**_

Me Ultimate Multisite mund të krijoni kode discount për t'u dhënë klientëve ndonjë përfitim në abonime. Dhe krijimi i tyre është i thjeshtë!

## Krijimi dhe Redaktimi i Kodit Discount

Për të krijuar ose redaktuar një kod discount, shkoni te **Ultimate Multisite > Discount Codes**.

![Lista e kodeve discount — gjendja bosh para se ekzistojnë ndonjë kod](/img/config/discount-codes-empty.png)

Atje do të keni një listë të kodeve discount që keni krijuar tashmë.

Ju mund të klikoni te **Add Discount Code** (Shto Kod Discount) për të krijuar një kupon të ri ose mund t'i redaktojmë ato që keni duke lëvizur mausin mbi to dhe duke klikuar te **Edit** (Redakto).

![Lista e kodeve discount me veprime në hover që tregojnë linket Edit dhe Delete](/img/config/discount-codes-list-hover.png)

![Butoni Shto Kod Discount në kornizën e faqes](/img/config/discount-codes-add-button.png)

Do të drejtoheni te faqja ku do krijoni ose redaktojmë kodin tuaj kuponi. Në këtë shembull, ne do të krijojmë një të ri.

![Faqja e redaktimit të kodit discount me të gjitha seksionet e dukshme](/img/config/discount-code-edit.png)

Le të shohim opsionet që janë në dispozicion këtu:

**Enter Discount Code (Hyjeni Kodin Discount):** Kjo është thjesht emri i kodit tuaj discount. Ky nuk është kodi që klientët do të duhet ta përdorin në formularin e pagesës (checkout).

**Description (Përshkrimi):** Këtu mund të përshkruani shkurtimisht për çfarë është ky kupon.

![Fjalët e emrit dhe përshkrimit të kodit discount në krye të faqes së redaktimit](/img/config/discount-code-description.png)

Ju mund ta shihni gjithashtu kodin discount si aktiv ose i refuzuar:

![Statusi aktiv i kodit discount](/img/config/discount-code-active.png)

**Coupon code (Kodi kuponi):** Këtu keni vendndodhjen ku përcaktoni kodin që klientët do të duhet të hyjnë gjatë pagesës.

![Fjalë për kodin e kuponit ku klientët vendosin kodin në checkout](/img/config/discount-code-coupon-field.png)

**Kuponi i uljes:** Këtu mund të vendosni një **procent** ose një **shuma fikse** para për kodin tuaj të kuponit.

![Vendosja e shumës së uljes me menynë drop-down për përqindje ose shumë fikse](/img/config/discount-code-amount.png)

**Për rikuperime:** Nëse ky opsion është i fiksuar (toggled off), ky kod kuponi do të aplikohet vetëm në **pagimin e parë**. Të gjitha pagesat e tjera nuk do të kenë ulje. Nëse ky opsion është aktiv, kodi kuponi do të jetë i vlefshëm për të gjitha pagesat e ardhshme.

**Ulja e ücretit të vendosjes (Setup fee discount):** Nëse ky opsion është i fiksuar, kodi kuponi **nuk do t'i japë asnjë ulje për ücretin e vendosjes** të porosit. Nëse ky opsion është aktiv, mund të vendosni uljen (procent ose shumë fikse) që ky kod kuponi do të aplikohet në ücretin e vendosjes së planeve tuaja.

![Opsionet e menysë drop-down për rikuperime dhe uljen e ücretit të vendosjes](/img/config/discount-code-renewals.png)

**Aktiv:** Aktivizoni ose deaktivojeni manualisht këtë kod kuponi.

![Toggles aktivizimi manual të kodit kuponi](/img/config/discount-code-active.png)

Nën **Opsionet Avancive (Advanced Options)**, kemi këto cilësime:

![Opsionet avancu të kodit kuponi](/img/config/discount-code-advanced.png)

**Kufizimi i përdorimit:**

  * **Përdorime (Uses):** Këtu mund të shihni sa herë është përdorur kodi kuponi.

  * **Maksimum përdorime (Max uses):** Ky do të kufizojë sa herë përdoruesit mund të përdorin këtë kod kuponi. Për shembull, nëse vendosni 10 këtu, kuponi mund të përdoret vetëm 10 herë. Pas kësaj kufizimi, kodi kuponi nuk mund të përdoret më.

![Vendosja e kufizimit të përdorimeve me numrin aktual të përdorimeve dhe kufizimin maksimal](/img/config/discount-code-limit-uses.png)

**Data e datatë e skadimit:** Këtu do të keni opsionin të shtoni një datë fillimi dhe/ose një datë fundi për kuponin tuaj.

![Fusha për datën e fillimit dhe fundit të skedulimit të kodit kuponi](/img/config/discount-code-dates.png)

**Limit prodhimeve:** Nëse aktivizoni **Select products**, të gjitha produktet tuaja do t'ju shfaqen. Do të keni opsionin të zgjidhni manualisht (duke aktivizuar ose deaktivizuar) cilat produkti mund të pranojë këtë kod kuponi. Produktet që janë deaktivizuar këtu nuk do të shfaqin asnjë ndryshim nëse klientët tuaj provojnë të përdorin këtë kod kuponi për to.

![Seksioni Limit prodhimeve me rruçet e aktivizimit për çdo produkt](/img/config/discount-code-limit-products.png)

Pas vendosjes së të gjitha këtyre opsioneve, klikoni në **Save Discount Code** (Ruaj kodin kuponi) për të ruajtur kuponin tuaj dhe kjo është gati!

![Butoni Save Discount Code në fund të faqes e redaktimit](/img/config/discount-code-save.png)

Kuponi tani është në listën tuaj dhe, nga aty, mund ta klikoni për të **redaktuar ose fshirë** atë.

![Rresha e kodit kuponi në listë me veprime hover Edit dhe Delete](/img/config/discount-codes-list-hover.png)

###

### Përdorimi i parametrave URL:

Nëse dëshironi të personalizoni tabelat tuaja të çmimeve ose të ndërtoni një faqe të bukur për kod kuponi në faqen tuaj dhe dëshironi të aplikoni një kod kuponi automatikisht në formularin tuaj të pagesës, mund ta bëni këtë përmes parametrave URL.

Para se të filloni, duhet të merrni linkun e ndarshueshëm (shareable link) për planin tuaj. Për të bërë këtë, shkoni te **Ultimate Multisite > Products** dhe zgjidhni një plan.

Klikoni në butonin **Click to Copy Shareable Link** (Klikoni për Kopjuar Linkun e Ndarshueshëm). Kjo do t'ju jepë linkun e ndarshueshëm për këtë plan specifik. Në rastin ton, linku i ndarshueshëm i dhënë ishte [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Faqja e produktit me butonin linku të ndarshueshëm](/img/config/products-list.png)

Për të aplikuar kodin tuaj i përfitues në këtë plan specifik, thjesht shtoni parametrin **?discount_code=XXX** në URL. Ku **XXX** është kodi i kuponit.

Në shembullin tonë këtu, do të aplikojmë kodin e kuponit **50OFF** në këtë produkt specifik.

URL-ja për këtë plan dhe me kodin e kuponit 50OFF të aplikuar do të duket si: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
