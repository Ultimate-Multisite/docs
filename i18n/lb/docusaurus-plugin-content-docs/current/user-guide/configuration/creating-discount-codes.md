---
title: D'Discountcodes kreiere
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Rabattcodes erstelle (v2)

_**WICHTIGE NOTIZ: Dëse Artikel bezieht sich uf Ultimate Multisite version 2.x.**_

Mit Ultimate Multisite chönntet Dir Rabattcodes erstelle, um Iechte Kunde Rabatt uf Iechre Abonnements z'gä. Und d'Erstelllig ass eifach!

## Rabattcodes erstelle und bearbeite

Um en Rabattcode z'erstelle oder z'bearbeite, gaet an **Ultimate Multisite > Discount Codes**.

![Rabattcodes-Liste — leeri Zustand vor de erschte Codes](/img/config/discount-codes-empty.png)

Dort gëtt et List vun de Rabattcodes, déi Dir scho erstellt hanner.

Dir chönntet uf **Add Discount Code** klicke, um en neie Coupon z'erstelle, oder Dir chönntet d'eifachste Codes bearbeite, indem Dir drüber fahrt anere und uf **Edit** klickt.

![Rabattcodes-Liste mat Hover-Aktionen, déi Edit- und Delete-Links zeige](/img/config/discount-codes-list-hover.png)

![Add Discount Code Button i de Page Header](/img/config/discount-codes-add-button.png)

Dir wërt an d'Page redirigeiert, wo Dir Iechre Couponcode erstelle oder bearbeite chönnt. An dësem Beispill gëtt et neie erstellt.

![Rabattcode Bearbeitungs-Page mat allne Abschnitte sichtbar](/img/config/discount-code-edit.png)

Léise wéi mir déi verfügbare Einstellungen do aaluege:

**Enter Discount Code:** Dëst ass nume de Name vun Iechrem Rabattcode. Dëst ass net de Code, de Iechte Kunde an der Checkout-Form bruichen wërt.

**Description:** Hier chönntet Dir kurz beschriwwer, wéi dësen Coupon sinn.

![Rabattcode Name- und Beschriwwungsfelder am Top vun der Bearbeitungs-Page](/img/config/discount-code-description.png)

Dir chönntet de Rabattcode och als aktiv oder inaktiv aaluege:

![Rabattcode Aktiv-Status](/img/config/discount-code-active.png)

**Coupon code:** Hier definieret Dir de Code, de Iechte Kunde iwwer d'Checkout mues iitrage.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Rabatt:** Doof, du chönntet do en **Prozent** oder en **feste Betrag** für dini Rabattcode festlege.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Für Verlängerige aawende:** Wenn die Option abgstellt isch, wird dëse Rabattcode nur uf d'**ersti Zahlig** aawendet. Alli andere Zahlige händ kei Rabatt. Wenn die Option aktiv isch, gilt de Rabattcode für alli zukünftigi Zahlige.

**Setup-Gebühre Rabatt:** Wenn die Option abgstellt isch, git de Couponcode **keine Rabatt uf d'Setup-Gebühr** vo de Bestellung. Wenn die Option aktiv isch, chönntet ihr de Rabatt (Prozent oder fester Betrag) festlege, wo mit d'Setup-Gebühre vo euren Pläne aawendet wird.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Aktiv:** Aktiviered oder deaktiviered die Rabattcode manuell.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Unter **Erwiitereti Optionene** händ mir folgendi Istellige:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Nutzigsbegränzig:**

  * **Nutzige:** Do chönntet ihr gseh, wie oft de Rabattcode scho brucht worde isch.

  * **Max Nutzige:** Das begrenzt d'Anzahl vo Mol, wo Benutzer de Rabattcode chönnted bruche. Zum Bischpil, wenn ihr do 10 iigähnd, chönnt de Coupon nur 10 Mol brucht werde. Nach dere Grenze chann de Rabattcode nümme brucht werde.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Start- und Ablaufdaten:** Hier hesch du d'Möglichkeit, en Startdatum und/oder es Ablaufdatum für din Coupon hinzuzfüege.

![Start- und Ablaufdatumsfelder zum Planen vom Rabattcode](/img/config/discount-code-dates.png)

**Produkte limitieren:** Wenn du **Select products** umschaltisch, werdet dir alli dini Produkte aazeigt. Du hesch d'Möglichkeit, manuell z'wähle (durch Umschalte ein oder aus), welchi Produkt dä Couponcode akzeptiere chan. Produkte, wo do abgstellt sind, wärded kei Änderige zeige, wenn dini Chunde versueche, dä Couponcode für sie z'bruche.

![Abschnitt Limit products mit pro-Produkt-Umschaltknöpfe](/img/config/discount-code-limit-products.png)

Nachdem du alli die Optionä igstellt hesch, klick uf **Save Discount Code**, um din Coupon z'speichere – fertig!

![Save Discount Code Button am End vo de Bearbeitigsseite](/img/config/discount-code-save.png)

De Coupon isch jetz uf din Liste und devo us chasch du druf klicke, um ihn **editierä oder lösche** z'chönne.

![Couponzeile i de Liste mit Hover-Aktion Edit und Lösche](/img/config/discount-codes-list-hover.png)

###

### Mit URL-Parameter:

Wenn du dini Priisübersicht personalisiere wetsch oder en schöne Couponcode-Page für dini Website baue wetsch und dä Rabattcode automatisch uf dim Checkout-Form aawende wetsch, chasch du das über URL-Parameter mache.

Zuerst muesch du de teilbari Link für din Plan becho. Um das z'mache, gaht du zu **Ultimate Multisite > Products** und wählsch en Plan us.

Klick uf de Knopf **Click to Copy Shareable Link**. Das git dir de teilbari Link zu däm spezifische Plan. In unserem Fall isch dä teilbari Link gsi: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Produktseite mit teilbare Link-Button](/img/config/products-list.png)

Om dini Rabattcode uf dä spezifischi Plan aazwende, füeg eifach de Parameter **?discount_code=XXX** zur URL bi. Dä **XXX** isch d'Coupon-Code.

In üsem Bischpil wänd mir de Coupon-Code **50OFF** uf das spezifischi Produkt aawende.

D'URL für dä spezifischi Plan mit em 50OFF Rabattcode wird so usgseh: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
