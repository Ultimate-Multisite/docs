---
title: Crear codis de descompte
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Crear Códigos de Descompte (v2) {#creating-discount-codes-v2}

_**NOTA IMPORTANT: Aquest article es refereix a la versió 2.x d'Ultimate Multisite.**_

Amb Ultimate Multisite, pots crear códigos de descompte per donar descompontes als teus clients a les seves subscripcions. I crear-los és fàcil!

## Crear i Editar Códigos de Descompte {#creating-and-editing-discount-codes}

Per crear o editar un código de descompte, fes clic a **Ultimate Multisite > Códigos de Descompte**.

![Lista de códigos de descompte — estat buit abans de que hi hagin codes](/img/config/discount-codes-empty.png)

Aquí tindràs una llista dels códigos de descompte que ja has creat.

Pots fer clic a **Add Discount Code** per crear un nou cupó o pots editar els que tens passant el ratolí per sobre i fent clic a **Edit**.

![Lista de códigos de descompte amb accions de hover mostrant enllaços Edit i Delete](/img/config/discount-codes-list-hover.png)

![Botó Add Discount Code a l'encabezament de la pàgina](/img/config/discount-codes-add-button.png)

Seràs redirigit a la pàgina on crearàs o editaràs el teu código de cupó. En aquest exemple, en crearem un nou.

![Pàgina d'edició de código de descompte amb totes les seccions visibles](/img/config/discount-code-edit.png)

Mirem les configuracions disponibles aquí:

**Enter Discount Code:** Aquest és només el nom del teu código de descompte. No és el code que els teus clients haurà de utilitzar al formular de caixa.

**Description:** Aquí, pots descriure breument a què serveix aquest cupó.

![Campos de nom i descripció del código de descompte en la part superior de la pàgina d'edició](/img/config/discount-code-description.png)

També pots veure l'estat del código de descompte com a actiu o inactiu:

![Estat actiu del código de descompte](/img/config/discount-code-active.png)

**Coupon code:** Aquí és on defines el code que els teus clients haurà de triar durant el checkout.

![Camp de code de cupó on els clients han de triar el code al checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Aquí, pots configurar un **percentatge** o una **quantitat fixa** de diners per al teu código de descompte.

![Configuració de quantitat de descompte amb desplegable de percentatge o quantitat fixa](/img/config/discount-code-amount.png)

**Apply to renewals:** Si aquesta opció està desactivada, aquest código de descompte només es aplicarà al **primer pagament**. Tots els altres pagaments no tindran descompte. Si aquesta opció està activada, el código de descompte serà vàlid per a tots els pagaments futurs.

**Setup fee discount:** Si aquesta opció està desactivada, el cupó de code **no donarà cap descompte per la taxa de configuració** de la comanda. Si aquesta opció està activada, pots configurar el descompte (percentatge o quantitat fixa) al qual s'aplicarà aquest cupó de code a la taxa de configuració dels teus plans.

![Opcions de toggle per a aplicar a renovacions i descompte de taxa de configuració](/img/config/discount-code-renewals.png)

**Active:** Activa o desactiva manualment aquest cupó de code.

![Toggle actiu per habilitar o deshabilitar manualment el code de descompte](/img/config/discount-code-active.png)

Sota **Advanced Options**, tenim les siguientes configuracions:

![Opcions avançades del código de descompte](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Aquí, pots veure quantes vegades s'ha utilitzat el code de descompte.

  * **Max uses:** Això limitarà el nombre de vegades que els usuaris poden utilitzar aquest code de descompte. Per exemple, si posis 10 aquí, el cupó només es pot utilitzar 10 vegades. Després d'aquest límit, el code de cupó no es pot utilitzar més.

![Configuració de limitar utilitzacions amb compte d'utilitzacions actual i camp de màxim utilitzacions](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** Aquí tindràs l'opció de triar una data de inici i/o una data de caducitat per al teu cupó.

![Campos de data de inici i caducitat per programar el code de descompte](/img/config/discount-code-dates.png)

**Limit products:** Si actives **Select products**, tots els teus productes es mostraran. Tendràs l'opció de seleccionar manualment (activant o desactivant) quin producte pot acceptar aquest cupó de code. Els productes que s'hagin desactivat aquí no mostraran cap canvi si els teus clients intenten utilitzar aquest cupó de code per a ells.

![Secció de limitar productes amb interruptors de toggle per producte](/img/config/discount-code-limit-products.png)

Després de configurar totes aquestes opcions, fes clic a **Save Discount Code** per guardar el teu cupó i ja està!

![Botó Save Discount Code a la part inferior de la pàgina d'edició](/img/config/discount-code-save.png)

El cupó ja és a la teva llista i, des d'allà, pots fer clic per **editar o eliminarlo**.

![Fila de code de descompte a la llista amb accions de hover Edit i Delete](/img/config/discount-codes-list-hover.png)

###

### Utilitzar Paràmetres URL: {#using-url-parameters}

Si vols personalitzar les teves taules de preus o crear una pàgina de cupó atractiva per al teu lloc web i vols aplicar un code de descompte al teu formular de caixa automàticament, pots fer-ho mitjançant paràmetres URL.

Primer, has de rebre l'enllaç compartible del teu plan. Per fer-ho, fes clic a **Ultimate Multisite > Products** i selecciona un plan.

Fes clic al botó **Click to Copy Shareable Link**. Això et donarà l'enllaç compartible per a aquest plan específic. En el nostre cas, l'enllaç compartible donat va ser [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Pàgina de producte amb botó d'enllaç compartible](/img/config/products-list.png)

Per aplicar el teu code de descompte a aquest plan específic, només has d'afegir el paràmetre **?discount_code=XXX** a l'URL. On **XXX** és el code de cupó.

En el nostre exemple aquí, aplicarem el code de cupó **50OFF** a aquest producte específic.

L'URL per a aquest plan específic i amb el code de descompte 50OFF aplicat serà: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
