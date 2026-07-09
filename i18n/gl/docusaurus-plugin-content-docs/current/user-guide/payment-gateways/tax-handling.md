---
title: Xestión de impostos
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Xestión de impostos {#tax-handling}

Ultimate Multisite ten un módulo de recadación de impostos integrado no noso plugin principal, polo que se necesitas recadar impostos sobre vendas nos teus plans, paquetes e servizos, podes facelo facilmente sen recorrer á instalación de ningún complemento.

Para empresas situadas en Europa, ofrecemos un **complemento** que engade ferramentas e funcionalidades para **admitir mellor o cumprimento do VAT**.

Ultimate Multisite non presenta nin remite impostos no teu nome ao goberno; simplemente axudámosche a recadar os impostos axeitados no momento da transacción. **Aínda terás que remitir os impostos pola túa conta.**

## Activar a recadación de impostos {#enabling-tax-collection}

A recadación de impostos non está activada de forma predeterminada. Para activala, tes que ir a **Ultimate Multisite > Configuración > Impostos** e cambiar o interruptor para activar o axuste Activar impostos.

![Interruptor Activar impostos na parte superior da páxina de configuración de impostos](/img/config/settings-taxes-enable.png)

Aquí tes unha vista completa da páxina de configuración de impostos:

![Páxina completa de configuración de impostos](/img/config/settings-taxes-full.png)

Tamén podes ver a configuración de impostos para produtos individuais:

![Configuración de impostos para produtos](/img/config/settings-taxes.png)

### Impostos excluídos fronte a impostos incluídos {#tax-excluded-vs-tax-included}

De forma predeterminada, todos os prezos dos teus produtos teñen os impostos excluídos, o que significa que os impostos **non están incluídos** no prezo do produto. Se determinamos que un cliente debe pagar impostos nunha compra determinada, engadiremos os impostos **por riba** do subtotal.

Se prefires que os impostos estean incluídos no prezo do teu produto, podes facelo activando o axuste **Imposto incluído**.

![Fila do interruptor Imposto incluído debaixo do axuste Activar impostos](/img/config/settings-taxes-inclusive.png)

Non esquezas **gardar** os cambios que fixeches.

###

## Crear taxas impositivas {#creating-tax-rates}

Despois de activar a recadación de impostos, terás que crear taxas impositivas para localizacións específicas usando o noso editor de taxas impositivas.

Podes acceder ao editor facendo clic no botón **Xestionar taxas impositivas** na barra lateral da páxina de configuración de impostos.

![Ligazón Xestionar taxas impositivas no panel Taxas impositivas da páxina de configuración](/img/config/settings-taxes-manage-rates.png)

Na páxina do editor de taxas impositivas, podes engadir novas taxas impositivas facendo clic no botón **Engadir nova fila**.

![Táboa do editor de taxas impositivas co botón Engadir nova fila na parte superior](/img/config/tax-rates-editor.png)

Terás que dar a cada taxa impositiva un **título** (usado nas facturas). Despois podes escoller o **país** (obrigatorio), o **estado,** e a **cidade** (ambos opcionais) onde se cobrará este imposto. Por último, engade a **taxa impositiva en porcentaxes**.

### Categorías fiscais {#tax-categories}

Tamén podes crear varias categorías fiscais, para engadir diferentes taxas impositivas para diferentes tipos de produtos.

Fai clic para **Engadir nova categoría fiscal** , logo escribe o nome da túa categoría e preme **Crear**.

![Botón Engadir nova categoría fiscal na parte superior do editor de taxas impositivas](/img/config/tax-categories-add.png)

![Campo de entrada Nome da categoría fiscal no modal de creación de categoría](/img/config/tax-categories-create-modal.png)

Para navegar polas categorías, fai clic en **Cambiar** e selecciona a categoría á que queres engadir novos impostos.

![Botón despregable Cambiar para cambiar entre categorías fiscais](/img/config/tax-categories-switch.png)

![Despregable do selector de categoría fiscal mostrando as categorías dispoñibles](/img/config/tax-categories-select.png)

Podes definir a categoría fiscal dun produto concreto indo á **páxina de edición do produto** e despois á pestana Impostos.

![Pestana de impostos do produto con categoría fiscal e interruptor de gravable](/img/config/product-taxes.png)

Nesa mesma pantalla, podes desactivar o interruptor **É gravable?** para facerlle saber a Ultimate Multisite que non debe recadar impostos nese produto determinado.

## Compatibilidade con VAT europeo {#european-vat-support}

Como se mencionou antes, temos un complemento dispoñible para clientes da UE que teñen requisitos adicionais debido á normativa europea de VAT.

As nosas ferramentas de VAT axudan cun par de cousas importantes:

  * Carga sinxela das taxas de VAT da UE;

  * Recollida e validación do número de VAT, e inversión do suxeito pasivo para entidades exentas de VAT (como empresas con números de VAT válidos);

Para instalar ese complemento, vai a **Ultimate Multisite > Configuración** e despois fai clic na ligazón da barra lateral **Consulta os nosos complementos**.

![Barra lateral da páxina de configuración coa ligazón Consulta os nosos complementos](/img/config/settings-taxes-addons-link.png)

Serás redirixido á nosa páxina de complementos. Alí, podes buscar o **complemento Ultimate Multisite VAT** e instalalo.

<!-- Captura de pantalla non dispoñible: mosaico do complemento VAT na páxina de complementos -->

<!-- Captura de pantalla non dispoñible: diálogo Instalar agora do complemento VAT -->

Despois, vai a **Administración da rede > Plugins** e activa ese complemento en toda a rede.

<!-- Captura de pantalla non dispoñible: acción Activar na rede para o complemento VAT na páxina Plugins -->

Se volves á **pestana Configuración de impostos** , verás novas opcións dispoñibles. Activa a opción **Activar compatibilidade con VAT** para habilitar as novas ferramentas de VAT. Non esquezas **gardar** a túa configuración!

<!-- Captura de pantalla non dispoñible: interruptor Activar compatibilidade con VAT na configuración de impostos despois da activación do complemento -->

### Importar taxas impositivas de VAT {#pulling-on-vat-tax-rates}

Unha das ferramentas que engade a nosa integración é a capacidade de cargar as taxas impositivas dos estados membros da UE. Isto pódese facer visitando a páxina do editor de taxas impositivas despois de activar a compatibilidade con VAT da UE.

Na parte inferior da páxina, verás as opcións de importación de VAT. Ao seleccionar un tipo de taxa e facer clic no botón **Actualizar taxas de VAT da UE**, importarase e encherase automaticamente a táboa coas taxas impositivas de cada estado membro da UE. Despois, só tes que gardalo.

![Botón Actualizar taxas de VAT da UE na parte inferior do editor de taxas impositivas](/img/config/tax-rates-vat-pull.png)

Tamén podes editar os valores despois de importalos. Para facelo, simplemente edita a liña da táboa que necesites e fai clic para gardar os novos valores.

### Validación de VAT {#vat-validation}

Cando a compatibilidade con VAT está activada, Ultimate Multisite engadirá un campo adicional ao formulario de pagamento, debaixo do campo do enderezo de facturación. O campo só se mostrará para clientes situados na UE.

<!-- Captura de pantalla non dispoñible: campo Número de VAT no formulario de pagamento do frontend debaixo do enderezo de facturación -->

Ultimate Multisite validará entón o número de IVE e, se volve como válido, aplícase o mecanismo de investimento do suxeito pasivo e a taxa fiscal establécese no 0% nese pedido.
