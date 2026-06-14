---
title: Krei Discount Kodojn
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Kreado Dekonto Kodoj (v2)

_**IMPORTANTE NOTO: Ĉi tiu artikolo referas al Ultimate Multisite versio 2.x.**_

Con Ultimate Multisite vi povas krei deonto kodojn por doni al viaj klientoj diskonto sur siaj subskriboj. Kaj ilia kreado estas facila!

## Kreado kaj Edito de Deonto Kodoj

Por krei aŭ modifi deonto kodon, dirigi al **Ultimate Multisite > Discount Codes**.

![List of discount codes — ŝanĝita estado antaŭ ĉirkaŭ iu ajn kodoj ekzistas](/img/config/discount-codes-empty.png)

Tial vi havos liston de la deonto kodoj, kiujn vi 이미 kreasis.

Vi povas kliki sur **Add Discount Code** (Aggiungi Deonto Kodon), por krei novan kupon aŭ vi povas modifi tiujn, kiuj estas apud vi, per pasado sur ili kaj kliki sur **Edit** (Editi).

![List of discount codes with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

Vi estus redirekti al la paĝo, kie vi kreas aŭ modigas vian kupon kodon. En ĉi tiu ekzemplo ni kreas novan.

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

Karu ni rigardas la ŝanĝojn, kiuj estas disponiblaj ĉi tie:

**Enter Discount Code:** Ĉi tio estas nur la nomo de via deonto kodo. Tio ne estas tiu kodo, kiun viaj klientoj bezonas uzi sur la formulo de pagado (checkout form).

**Description:** Ĉiari vi povas breve skribi, ĉaŭ kion ĉi tiu kupon estas por uzado.

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

Vi ankaŭ povas vidi la deonto kodon kiel aktivan aŭ inaktivan:

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** Ĉi tio estas la loko, kie vi definas la kodon, kiun viaj klientoj bezonas intripi dum pagado.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Rabato:** Ĉiuj ĉi tio, vi povas fari la **procenton** aŭ la **fiksitan monton** de monelo por via rabatokodo.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Apliki al renovoj:** Se ĉi tiu opcio estas desligita, ĉi tiu rabatokodo aplikiĝos nur al la **unua pagaprovo**. La alia pagoj ne havu rabaton. Se ĉi tiu opcio estas akiva, la rabatokodo estus valida por ĉiuj futaj pagoj.

**Rabato por monton de montigo:** Se ĉi tiu opcio estas desligita, la rabatokodo **ne donos rabaton por la monton de montigo** de la ordo. Se ĉi tiu opcio estas akiva, vi povas fari la rabaton (procenton aŭ fiksan monton) kiun ĉi tiu rabatokodo aplikiĝos al la monton de viaj planoj.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Aktiva:** Manuele aktivi aŭ deaktivizi ĉi tiun rabatokodon.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Sub **Avancaj Opcioj**, ni havas la seguenti konfiguracioj:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limiti uzojn:**

  * **Uzo:** Ĉiuj ĉi tio, vi povas vidi, kiomfo ke la rabatokodo estis uzita.

  * **Maksimuma uzo:** Tio limigus la monton de fojoj, kiujn uzantoj povas fari kun ĉi tiu rabatokodo. Ekzemple, se vi metis 10 ĉi tie, la rabatokodo povas esti uzata nur 10 fojojn. Post ĉi tiu limito, la rabatokodo ne povas esti uzata plu.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Dat temprofiĝo kaj ekspirioj:** Ili estas la opcio al aĉeti daton komenco kaj/ aŭ ekspiriojn por via kupon.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Limiti produktojn:** Se vi aktivas **Select products**, ĉiuj viaj produktoj al vi serĉiĝos. Vi havos la opcio manuefe selekti (per aktiva aŭ deaktiva) kiu produkto povas akcepti tiun kupon kodon. Produktoj, kiuj estas deaktiva ĉi tie, ne montros nuntempe ŝanĝon se viaj klientoj provos uzi tiun kupon kodon al ili.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Post kiam vi faras ĉiuj ĉi ti opciojn, kliku sur **Save Discount Code** por salvi vian kupon kaj ĝi estas finita!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

La kupon nun estas sur via listo kaj de tie vi povas kliki por **editu aŭ dili** ĝin.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### Uzo de URL-parametroj:

Se vi volas personalizi viajn preco-tablojn aŭ konstrui belan paĝon por kupon kodojn por via ĉezen sitio kaj volas apliki tiun kupon kodon al via checkout formo aŭtomate, vi povas fari tion per URL-parametroj.

Unue, vi bezonas akuti la partablan linkon por via planon. Por tio, diru **Ultimate Multisite > Products** kaj selekti planon.

Kliku sur butonon **Click to Copy Shareable Link**. Tio donos al vi la partablan linkon al ĉi tiu specifika plano. En nia kazo, la partabla linko donita estis [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

Al apliki vian diskontkodon al ĉi tiu specifita planaro, simple aldonu la parametron **?discount_code=XXX** al la URL-o. Ĉi **XXX** estas la kuponkodo.

En nia ekzemplo, ni aldonos la kuponkodon **50OFF** al ĉi tiu specifita produkto.

La URL por ĉi tiu specifita planaro kaj kun la diskonto **50OFF** aldonita, ŝanĝiĝos kiel: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
