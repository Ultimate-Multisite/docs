---
title: Fòm Kontèk
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Fòms de Kontèkout (Checkout Forms)

Fòms de kontèkout se yon fason fasil ak fleksib pou eseye diferan apwòch lè ou ap eseye konvèti nouvo kliyan yo.

Ultimate Multisite 2.0 bay yon editè Fòm Chèkout (Checkout Form editor) ki pèmèt ou kreye genyen fòm ou vle yo, ak diferan chèf (fields), pwodwi ki ofri, elatriye.

Pou jwenn aksè a fonksyon sa a, ale nan mennu Checkout Forms la, sou bar an vyè a.

![Lòt fòm chèkout](/img/config/checkout-forms-list.png)

Sou paj sa a, ou ka wè tout fòm chèkout ou genyen.

Tab la ki gen lis la gen yon kolòn **Status** pou ou ka konfime si chak fòm la disponib kounye a pou kliyan yo:

| Statis | Signifikasyon |
|---|---|
| **Active** | Fòm sa ka itilize kote ou mete shortcode la oswa paj registrasyon an. |
| **Inactive** | Fòm sa a deja save men li disable. Kliyan yo pa ka fini achte avè l jiskaske ou re-enable li ankò.

Sèvi ak kolòn estatus anvan ou edite yon flè chat registrasyon piblik, sitou lè ou kenbe fòm chèkout (checkout) draft oswa sezon anpil bò kote fòm live ou yo.

Si ou vle kreye nouvo youn, jis klike sou "Add Checkout Form" an lopital paj la.

Ou ka chwazi youn nan twa opsyon sa yo kòm pwen kòmanse ou: etap si etap, anpil etap oswa vid. Apre sa, klike pou ale nan Editor la.

Lè ou chwazi **single step** oswa **multi-step** kòm kòmanse w, fòm la gen yon **Template Selection** a deja nan li. Filye sa a pèmèt kliyan ou chwazi yon template sit ka pandan pwosesis reyegistrasyon an. Ou ka kite l tankou se, retire l, oswa mete l ansanm ak lòt filye yo nan editè a jan ou fè ak lòt filye.

![Éditeur de formulaire de paiement](/img/config/checkout-form-editor.png)

Ou ka tou edite oswa kopye fòm ou deja genyen lè w klike sou opsyon ki anba non li la. La, ou pral jwenn tou opsyon pou copie shortcode fòm la oubyen pou elimine fòm la.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Aperçu editeur fòm checkout (Checkout Form Editor Overview)

Edit yon Fòm Chèkout (Checkout Form) la bay yon entèfas ki konplè pou ou ka bati fòm reyegis ou yo. Men yon aperçu sou layout editeur la:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Edite yon Fòm Chèkout

Ou ka kreye fòm checkout pou diferan bagay. Nan egzanp sa a, nou pral travay sou yon fòm registrasyon.

Aprè ou ale nan editè fòm chèkout (checkout form editor), bay fòm ou yon non (ki pral itilize pou referans anndan sèlman) epi yon slug (ki itilize pou kreye "shortcakes", pa egzanp).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Fòm yo fèt ak etap ak champs (fields). Ou ka ajoute yon nou etap k ap pase lè ou klike sou "Add New Checkout Step".

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Nan premye onglet nan fenèt modal la, ranpli kontni etap fòm ou a. Bay li yon ID, yon non ak yon deskripsyon. Yo itilize anpil pou kont anndan sistèm nan.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Kounye a, mete vizibilite etap la. Ou ka chwazi ant "Toujou montre", "Sèlman montre pou moun ki loge in" oswa "Sèlman montre pou yon vizitè".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Finalman, konfigire estati etap la (step style). Sa yo se desibye ki pa obligatwa.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Kounye a se lè pou nou ajoute champs nan etap premye nou an. Sen jis klike pou "Add New Field" epi chwazi kalite seksyon ou vle.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Chak champ gen paramèt diferan pou ranpli li. Pou kòmansman sa a, nou pral chwazi fye "Username".

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Konfigirasyon kontni chèf non itilizatè](/img/config/checkout-form-username-content.png)

![Konfigirasyon vizibilite chèf non itilizatè](/img/config/checkout-form-username-visibility.png)

![Estilaj fòm non (Username field style settings)](/img/config/checkout-form-username-style.png)

Ou ka ajoute yon sèl etap ak chak fld ou bezwen. Pou montre pwodwi w pou kliyan yo chwazi younen, itilize fld Pricing Table la. Si ou vle pèmèt kliyan ou chwazi yon template, ajoute fld Template Selection la. E sa sik.

![Ajoute Nouvo Filye dialog](/img/config/checkout-form-add-field-dialog.png)

_**Nòt:** username, email, password, site title, site URL, order summary, payment, ak bouton soumet se filye ki obligatwa pou kreye yon checkout form._

Lè ou ap travay sou fòm checkout ou, ou ka toujou itilize bouton Preview pou w wè kijan kliyan ou yo pral wè fòma a. Ou ka tou chanje ant "view as an existing user" (wè kòm yon itilizat ki gen kont) ak "visitor" (vizitè).

![Bouton aperçu formulaire de paiement](/img/config/checkout-form-preview-button.png)

![Modale d'aperçu du formulaire de paiement](/img/config/checkout-form-preview-modal.png)

Finalman, nan Ops Avanse ou ka konfigire mesaj pou paj "Mèsi", ajoute snippet pou swiv konversyon yo, ajoute CSS koutim pou fòm chèkout ou oswa limite li pou peyi espesifik.

![Advanced Options](/img/config/checkout-form-advanced.png)

Ou ka tou active oswa desactive fòm checkout ou manmanèlman lè ou boule opisyon sa a nan kolòn la a a drwa, oubyen detwi pèmanan fòm la.

![Active toggle](/img/config/checkout-form-active.png)

Pou detwi yon form, klike sou opsyon "delete" (detwi) nan aksyon form la:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Pa bliye pou w mete an sekirite (save) form checkout ou a!

![Bouton Sauve a](/img/config/checkout-form-save.png)

Pou w jwenn shortcode pou form ou, klike sou "Generate Shortcode" epi copie sa ki parèt nan fenèt modal la.

![Bouton Sauve ak shortcode](/img/config/checkout-form-save.png)

### Champ Tablo Pri

Chant la champ **Pricing Table** montre ou yo pwodwi ou sou fòm chèkout la pou kliyan yo ka chwazi yon plan. Lè ou modifise sa a, ou ka konfigire plizyè opsyon:

![Paramètres du champ de tableau de prix](/img/config/pricing-table-field-settings.png)

Men kijan tabli pri a parie sou fòm reyegistrasyon an frontend:

![Tableau de prix de paiement frontend](/img/config/frontend-checkout-pricing-table.png)

**Pwodwi (Products)**: Chwazi ki pwodwi ou vle montre epi kijan yo ap parèt la.

* **Fòse Diferan Durée**: Lè ou active sa, tout pwodwi yo ap montre menm jan menm si yo gen yon chanjman pri ki koresponn ak peryòd faktouring ki chwazi a kounye a. Lè ou pa active li (default), pwodwi ki pa gen okenn chanjman pou peryòd chwazi a ap rete chay.

![Table de prix forcer les durées option](/img/config/pricing-table-force-durations.png)
  * **Masquer quand Pré-sélectionné**: Cache la table de prix quand un plan a déjà été sélectionné via l'URL (par exemple, `/register/premium`).

* **Modèl Tablo Pri (Pricing Table Template)**: Chwazi modèl vizyèl ou pou tablo pri a (Liste Simple, Legacy, elatriye).

Si ou ajoute yon pwodwi nan Tab Pri (Pricing Table) anvan fòm la genyen tout chak enfòmasyon ki nesesè pou konplete pwosesis achte pwodwi sa a, editeur a kounye a montre yon avètisman. Itilize avètisman an pou ajoute chak chot ki manke anvan ou pibliye oswa kay chanjman pou yon fòm reyèl (live registration form).

### Ajoute un Bouton à Lèvèl Sélection Période

Pou ajoute yon bouton ki pèmèt ou chwazi (toggle) yon peryòd, nou pral itilize yon modil (modal) oswa yon switch. Sa vle di, ou ka fè li montre oswa ka fè li kache selon sa ou vle.

**Etapes pou ajoute toggle la:**

1. **Idantify the location (Idantifye kote pou mete li):** Kòmanse pa chwazi kote ou vle mete bouton sa a nan WordPress ou an. Èske se nan yon template, nan yon widget, oswa sou yon page espesifik?
2. **Create the toggle element (Kreye eleman toggle la):** Ou pral bezwen yon ti kòd HTML/PHP pou kreye switch la. Sa ap varye selon kijan ou vle li fonksyone (pa egzanp, si ou vle li montre yon liste de peryòd).
3. **Add the logic (Ajoute lojik la):** Men sa ki pi enpòtan: kòd la dwe konnen ki jan pou l chanje kontni sou page a lè w klike sou bouton an. Sa ap mande ou itilize yon "hook" oswa yon fonksyon WordPress pou jere atikil yo (posts) selon peryòd sa a.

**Egzanp Konsept (Conceptual Example):**

Si ou vle montre tout kontni ki pibliye nan yon mwa espesifik, kòd la ta sanble konsa:

```php
<!-- HTML pou bouton toggle la -->
<button id="period-toggle">Chwazi Peryòd</button>

<div id="content-container" style="display: none;">
    <!-- Kontni ki pral montre lè ou chwazi yon peryòd -->
    <h2>Kontni pou Mwa sa a</h2>
    <p>Sa se tout bagay ki pibliye nan mwa sa a...</p>
</div>

<script>
document.getElementById('period-toggle').addEventListener('click', function() {
    const container = document.getElementById('content-container');
    if (container.style.display === 'none') {
        container.style.display = 'block'; // Montre kontni a
    } else {
        container.style.display = 'none'; // Kache kontni a
    }
});
</script>
```

**Kijan sa fonksyone an (How it works):**

*   **HTML:** Nou mete yon bouton (`<button>`) ak yon div ki gen yon ID pou nou ka jwe avè l nan JavaScript.
*   **JavaScript:** Kòd JavaScript la se kote magik la. Li ap "kiçe" (click) sou bouton an, epi li pral chanje valè `display` div la a. Si li te kache (`none`), li pral montre (`block`), e si li te montre, li pral kache.
*   **WordPress Integration:** Anpil fwa, ou pral bezwen yon fonksyon PHP ki ap rele (hook) lè bouton an klike pou l chwazi peryòd la epi jere sa ki dwe parèt sou page a.

Asire w ke ou konprann kijan JavaScript ak WordPress yo pale ak youn lòt. Si ou gen pwoblèm nan ak yon fonksyon espesifik, di m!

Si ou fin configure [Price Variations](creating-your-first-subscription-product#price-variations) sou pwodwi w (tankou pri mensil ak annil), ou ka ajoute yon fld **Period Selection** nan fòm checkout ou a. Fld sa a montre yon bouton ki pèmèt kliyan yo chanje ant period faktouring, epi tab pri an ap rafraîchi dinamikman nan tan reyèl la.

#### Etap 1: Mete Varyasyon Pwòp Pri sou Lòt Pwòp Ou

Kouman ou ka mete diferan pri pou lòt pwòp ou yo (varyations) sou pwofò ou yo nan WordPress la, menm jan ou fè sa ak WooCommerce. Sa ede w bay kliyan ou opsyon pou chwazi kalite oswa pake ki pi bon pou yo.

**Kijan pou w mete varyasyon:**

1. **Ale nan Pwòp Ou (Products):** Klike sou "Products" an nan dashboard WordPress la epi chwazi pwofò ou vle ajoute varyasyon pou l.
2. **Ajoute Varyasyon (Add Variation):** Anba detay pwòp ou a, gen yon seksyon pou mete varyasyon. Sa k ap montre kliyan ou ke yo ka chwazi:
    * **Size (Gwosè):** Pa egzanp, pou yon t-shirt, ou ka mete "Small", "Medium", "Large".
    * **Color (Koulè):** Ou ka mete "Red", "Blue", "Green".
3. **Defini Pri a:** Pou chak varyasyon ou ajoute la, ou dwe mete pri li ak kantite (stock) ki gen pou li.

**Exemple Simple:**

Si ou vle yon ti bagay ki gen de koulè:

*   Ou mete pwofò a ("T-Shirt").
*   Sou seksyon varyasyon, ou mete "Color".
    *   Varyasyon 1: Red (Pri: 5000 X), Kantite: 10.
    *   Varyasyon 2: Blue (Pri: 5000 X), Kantite: 15.

Lè yon kliyan ap achte, li pral wè tout opsyon sa yo epi li ka chwazi koulè ou vle anvan li mete bagay la nan panier pou peye.

Anvan ou ajoute champ Sélection de Période, asire w ke nouvo pwodwi ou yo gen varyasyon pri configure. Ale nan **Ultimate Multisite > Products**, edite yon pwodwi, epi ale nan onglet **Price Variations** pou ajoute diferan peryòd faktouring (pa egzanp: Anlè ak yon pri ki pi ba).

![Tab Varyasyon Pwòp Pri sou yon pwodwi](/img/config/product-price-variations-tab.png)

#### Etap 2: Ajoute Chyen Seleksyon Periyòd la nan Fòm Checkout ou a

1. Ale nan **Ultimate Multisite > Checkout Forms** epi edite fòm checkout ou a.

2. Deskle nan etap ki genyen chèf ou a **Pricing Table** epi klike sou **Add new Field**.

3. Nan dialog chwazi tip chèf la, klike sou **Period Select**.

![Ajoute Nouvo Chèf dialog montre Seleksyon Périod](/img/config/checkout-form-add-field-dialog.png)

4. Konfigire opsyon peryòd yo. Chak opsyon bezwen:
   * **Duration** (Durasyon): Chiffre a (pa egzanp, `1`)
   * **Duration unit** (Unit durasyon): Tip pèri a (Lij, Semèn, Mwa, o An)
   * **Label** (Etikèt): Tekst ki pral wè nan kliyan yo (pa egzanp, "Monthly", "Annual")

5. Klike sou **+ Add Option** pou ajoute plis opsyon pou chwazi pèri (période). Opsyon sa yo dwe koresponn ak varyasyon pri ou fin configure sou pwodwi w la.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Chwazi yon **Period Selector Template** (Clean se defòt la, ki bay yon sélectè senp estilize pare pou ou mete CSS koutim).

7. Klike sou **Save Field**.

#### Etap 3: Mete Filye a Anwo Tablo Pri



Pou gen pi bon eksperyans pou itilizat la, asire w ke champ Sa ki chwazi Période (Period Selection) parèt **anvan** champ Tablo Pri (Pricing Table) nan etap checkout ou an. Ou ka drape (drag) champs yo pou reordonne yo nan editè fòm checkout la. Sa a ap pèmèt kliyan an anvan li wè pri yo pou petid sa ki chwazi periode la.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Kijan Li Travay sou Frontend la

---

Yon fwa ou fin configure, kliyan ki vini nan paj registrasyon ou ap wè sélectè pèri anwo tablat pri. Lè yo klike sou yon lòt pèri faktura:

Tablo pri la ap rafraîchi imedyatman pou montre pri yo pou peryòd ki chwazi a (pa bezwen recharger paj la).

Si ou pa aktif "Force Different Durations" sou champ Pricing Table la, yo pral cache tout pwodwi ki pa gen varyasyon de pri pou peryòd ki chwazi a.

* Si ou active **Force Different Durations**, tout pwodwi rete vizib menm si yo pa gen varyasyon pou peryòd ki chwazi la (yo ap montre pri dekouchat yo).

#### Pré-sélection yon Peryòd Fèman nan URL

Ou ka tou pre-sélection yon pwodwi ak peryòd fakturi atravè URL la. Ultimate Multisite sipòte modèl URL sa yo:

* `/register/premium` — Li pre-sélectionne sèlman pwodòt "Premium" la.
  * `/register/premium/12` — Li pre-sélectionne pwodòt la ak dirije 12 mwa (1 an).
  * `/register/premium/1/year` — Li pre-sélectionne pwodòt la ak yon dirije 1 an.

### Champ Sa Wout Template la

Chant **Template Selection** la pèmèt kliyan yo chwazi yon modèl sit ka lè yo ap fè achte. Kounye a, li genyen deja nan modèl fòm achte ki rele **single step** ak **multi-step** ki ajoute nan Ultimate Multisite v2.6.1.

#### Ajoute anba menm jan ou ap travay ak yon fòm ki te kreye anvan v2.6.1, oswa ki te kòmanse nan yon modèl vid:

1. Ale nan **Ultimate Multisite > Checkout Forms** epi edite fòm checkout ou a.
2. Nan etap kote detay sit la yo kolekte, klike sou **Add new Field**.
3. Chwazi **Template Selection** nan dialog tip fye a.
4. Konfigire fye a:

- **Label** — Tit la kote kliyan yo wè anwo nan gril template yo (pa egzanp, "Chwazi yon template sit").
   - **Obligatwa** — Si kliyan yo dwe chwazi yon template anvan yo ka kontinye.

#### Kijan li fonksyone

Lè yon kliyan chwazi yon template pandan pwosesis achite (checkout), Ultimate Multisite ap itilize li lè li ap prepare sit la nouvo a. Template yo ki montre la soti nan lis **Site Templates** ou (**Ultimate Multisite > Site Templates**). Sèlman template ki marake kòm disponib pou kliyan yo parèt isit.

### Domèn baz fòm chèkout (Checkout-form base domains)

Sa vle di ki domèn yo (domain names) k ap sèvi kòm baz pou tout fòm chèkout ou genyen nan WordPress ak WooCommerce. Sa se pati enpòtan an pou w konprann kijan sa fonksyone.

Ultimate Multisite v2.13.0 ap traite domèn ki configure nan champs **Site URL** kòm domèn baz rezo (network base domains). Pran konsider tout opsyon domèn ki disponib nan champ la lè ou vle kliyan yo ka kreye sit ki anba yon oswa plizyè domèn reyegisite ki pataje, tankou `example.com` ak `sites.example.com`.

Domain baz ki parèt pou checkout la pa itilize kòm domain custom pou chak sit. Lè yon kliyan kreye yon sit sous (subdirectory site) sou youn nan baz sa yo, Ultimate Multisite pa kreye yon enregistre mapped-domain ki fè anpil anjeneral pou sit sa a sèlman. Anpil sit ki gen menm baz checkout la ka rete disponib pou lòt sit ki itilize menm baz checkout la.

Gade menm domain pou host ki mapye pou chak kliyan, tankou `customer-example.com`. Kenbe domain baz fòm checkout pou host ki pale (shared) kote anpil sit ka itilize yo.

#### Retire fld la

Si ou pa ofri site templates (modèl sit), retire champ Sélection de Modèle (Template Selection) nan fòm ou a. Kounye a, kliyan yo ap resevwa modèl defòt ki configure anba **Ultimate Multisite > Settings > Site Templates**.
