---
title: Nodokļu apstrāde
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Nodokļu apstrāde {#tax-handling}

Ultimate Multisite mūsu pamata spraudnī ir iebūvēts nodokļu iekasēšanas modulis, tāpēc, ja jums ir jāiekasē pārdošanas nodokļi par saviem plāniem, paketēm un pakalpojumiem, to varat viegli izdarīt, neinstalējot nekādus papildinājumus.

Uzņēmumiem, kas atrodas Eiropā, mēs piedāvājam **papildinājumu**, kas pievieno rīkus un funkcijas, lai labāk **atbalstītu PVN** atbilstību.

Ultimate Multisite neiesniedz un nepārskaita nodokļus valdībai jūsu vārdā; mēs vienkārši palīdzam jums iekasēt atbilstošos nodokļus darījuma brīdī. **Jums joprojām būs pašiem jāpārskaita nodokļi.**

## Nodokļu iekasēšanas iespējošana {#enabling-tax-collection}

Nodokļu iekasēšana pēc noklusējuma nav iespējota. Lai to iespējotu, jums jādodas uz **Ultimate Multisite > Iestatījumi > Nodokļi** un jāpārslēdz, lai iespējotu iestatījumu Iespējot nodokļus.

![Iespējot nodokļus pārslēgs nodokļu iestatījumu lapas augšdaļā](/img/config/settings-taxes-enable.png)

Šeit ir pilns nodokļu iestatījumu lapas skats:

![Pilna nodokļu iestatījumu lapa](/img/config/settings-taxes-full.png)

Varat arī skatīt nodokļu iestatījumus atsevišķiem produktiem:

![Nodokļu iestatījumi produktiem](/img/config/settings-taxes.png)

### Nodoklis nav iekļauts vs. nodoklis ir iekļauts {#tax-excluded-vs-tax-included}

Pēc noklusējuma visās jūsu produktu cenās nodoklis nav iekļauts, kas nozīmē, ka nodokļi **nav iekļauti** produkta cenā. Ja noteiksim, ka klientam par konkrētu pirkumu jāmaksā nodokļi, mēs pievienosim nodokļus **papildus** starpsummai.

Ja vēlaties, lai nodokļi būtu iekļauti jūsu produkta cenā, varat to izdarīt, iespējojot iestatījumu **Iekļaujošs nodoklis**.

![Iekļaujošs nodoklis pārslēga rinda zem iestatījuma Iespējot nodokļus](/img/config/settings-taxes-inclusive.png)

Neaizmirstiet **saglabāt** veiktās izmaiņas.

###

## Nodokļu likmju izveide {#creating-tax-rates}

Pēc Nodokļu iekasēšanas iespējošanas jums būs jāizveido nodokļu likmes konkrētām atrašanās vietām, izmantojot mūsu nodokļu likmju redaktoru.

Redaktoram varat piekļūt, noklikšķinot uz pogas **Pārvaldīt nodokļu likmes** nodokļu iestatījumu lapas sānjoslā.

![Saite Pārvaldīt nodokļu likmes panelī Nodokļu likmes iestatījumu lapā](/img/config/settings-taxes-manage-rates.png)

Nodokļu likmju redaktora lapā varat pievienot jaunas Nodokļu likmes, noklikšķinot uz pogas **Pievienot jaunu rindu**.

![Nodokļu likmju redaktora tabula ar pogu Pievienot jaunu rindu augšdaļā](/img/config/tax-rates-editor.png)

Katrai nodokļu likmei būs jāpiešķir **nosaukums** (tiek izmantots rēķinos). Pēc tam varat izvēlēties **valsti** (obligāti), **štatu/reģionu** un **pilsētu** (abi nav obligāti), kur šis nodoklis tiks piemērots. Visbeidzot pievienojiet **nodokļu likmi procentos**.

### Nodokļu kategorijas {#tax-categories}

Varat arī izveidot vairākas Nodokļu kategorijas, lai pievienotu dažādas nodokļu likmes dažādiem produktu veidiem.

Noklikšķiniet, lai **Pievienot jaunu nodokļu kategoriju**, pēc tam ierakstiet savas kategorijas nosaukumu un nospiediet **Izveidot**.

![Poga Pievienot jaunu nodokļu kategoriju nodokļu likmju redaktora augšdaļā](/img/config/tax-categories-add.png)

![Nodokļu kategorijas nosaukuma ievades lauks kategorijas izveides modālajā logā](/img/config/tax-categories-create-modal.png)

Lai pārlūkotu kategorijas, noklikšķiniet uz **Pārslēgt** un atlasiet kategoriju, kurai vēlaties pievienot jaunus nodokļus.

![Pārslēgšanas nolaižamā poga, lai mainītu nodokļu kategorijas](/img/config/tax-categories-switch.png)

![Nodokļu kategoriju atlasītāja nolaižamā izvēlne, kurā redzamas pieejamās kategorijas](/img/config/tax-categories-select.png)

Varat iestatīt nodokļu kategoriju konkrētam produktam, dodoties uz **Produkta rediģēšanas lapu** un pēc tam uz cilni Nodokļi.

![Produkta nodokļu cilne ar nodokļu kategoriju un ar nodokli apliekamības pārslēgu](/img/config/product-taxes.png)

Tajā pašā ekrānā varat izslēgt pārslēgu **Vai ir apliekams ar nodokli?**, lai Ultimate Multisite zinātu, ka tam nevajadzētu iekasēt nodokļus par šo konkrēto produktu.

## Eiropas PVN atbalsts {#european-vat-support}

Kā minēts iepriekš, mums ir pieejams papildinājums klientiem ES, kuriem ir papildu prasības Eiropas PVN regulējuma dēļ.

Mūsu PVN rīki palīdz ar pāris svarīgām lietām:

  * Vienkārša ES PVN likmju ielāde;

  * PVN numura ievākšana un validācija — un reversā maksāšana PVN atbrīvotām vienībām (piemēram, uzņēmumiem ar derīgiem PVN numuriem);

Lai instalētu šo papildinājumu, dodieties uz **Ultimate Multisite > Iestatījumi** un pēc tam noklikšķiniet uz sānjoslas saites **Apskatiet mūsu papildinājumus**.

![Iestatījumu lapas sānjosla ar saiti Apskatiet mūsu papildinājumus](/img/config/settings-taxes-addons-link.png)

Jūs tiksiet novirzīts uz mūsu papildinājumu lapu. Tur varat meklēt **Ultimate Multisite PVN papildinājumu** un to instalēt.

<!-- Ekrānuzņēmums nav pieejams: PVN papildinājuma elements Papildinājumu lapā -->

<!-- Ekrānuzņēmums nav pieejams: PVN papildinājuma Instalēt tūlīt dialoglodziņš -->

Pēc tam dodieties uz **Tīkla administrators > Spraudņi** un aktivizējiet šo papildinājumu visā tīklā.

<!-- Ekrānuzņēmums nav pieejams: darbība Aktivizēt tīklā PVN papildinājumam Spraudņu lapā -->

Ja atgriezīsieties cilnē **Nodokļu iestatījumi**, redzēsiet jaunas pieejamas opcijas. Pārslēdziet opciju **Iespējot PVN atbalstu**, lai iespējotu jaunos PVN rīkus. Neaizmirstiet **saglabāt** savus iestatījumus!

<!-- Ekrānuzņēmums nav pieejams: Iespējot PVN atbalstu pārslēgs nodokļu iestatījumos pēc papildinājuma aktivizēšanas -->

### PVN nodokļu likmju ielāde {#pulling-on-vat-tax-rates}

Viens no rīkiem, ko pievieno mūsu integrācija, ir iespēja ielādēt nodokļu likmes ES dalībvalstīm. To var izdarīt, apmeklējot nodokļu likmju redaktora lapu pēc ES PVN atbalsta iespējošanas.

Lapas apakšā redzēsiet PVN ielādes opcijas. Atlasot likmes veidu un noklikšķinot uz pogas **Atjaunināt ES PVN likmes**, tabula tiks izvilkta un automātiski aizpildīta ar katras ES dalībvalsts nodokļu likmēm. Pēc tam jums tas tikai jāsaglabā.

![Poga Atjaunināt ES PVN likmes nodokļu likmju redaktora apakšdaļā](/img/config/tax-rates-vat-pull.png)

Pēc ielādes varat arī rediģēt vērtības. Lai to izdarītu, vienkārši rediģējiet vajadzīgo tabulas rindu un noklikšķiniet, lai saglabātu jaunās vērtības.

### PVN validācija {#vat-validation}

Kad PVN atbalsts ir iespējots, Ultimate Multisite pievienos papildu lauku checkout veidlapai zem norēķinu adreses lauka. Lauks tiks rādīts tikai klientiem, kas atrodas ES.

<!-- Ekrānuzņēmums nav pieejams: PVN numura lauks priekšgala checkout veidlapā zem norēķinu adreses -->

Ultimate Multisite pēc tam validēs PVN numuru, un, ja tas tiks atzīts par derīgu, tiks piemērots reverse charge mehānisms un nodokļa likme šim pasūtījumam tiks iestatīta uz 0%.
