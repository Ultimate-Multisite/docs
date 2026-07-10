---
title: Pag-downgrade sa Plano
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Pagbaba sa plano (v2) {#downgrading-a-plan-v2}

_**MAHINUNGAN: Kini nga artikulo nagtumong sa Ultimate Multisite version 2.x.**_

Ang pag-downgrade sa plano o subscription usa ka kasagaran nga buhat nga mahimo himuon sa inyong mga kliyente kung sila adunay limitado nga budget o kung nagdesisyon silang dili na kinahanglan og daghang resources aron ma-run ang ilang subsite.

## Unsaon pag-downgrade sa plano {#how-to-downgrade-a-plan}

Mahimo sa inyong mga kliyente i-downgrade ang ilang plano bisan kanus-a pinaagi sa pag-login sa admin dashboard sa ilang subsite ug pag-click sa **Change** ubos sa ilang account page.

![Customer account page with Your Membership card and Change button](/img/account-page/membership-change-button.png)

Pag-click sa **Change** button, ang user/client ma-redirect sa checkout page diin sila makapili sa plano nga gusto nila usbon para sa ilang subscription.

![Downgrade plan options page on the customer side](/img/account-page/downgrade-picker.png)

Sa panig-amat, nag-downgrade kita sa plano gikan **Premium** ngadto sa **Free**.

Aron magpadayon ang user, kinahanglan lang nila i-click ang **Complete Checkout** button. Pagkahuman, ibalik kini sila sa account page nga adunay mensahe bahin sa pending change para sa membership. Ang mga kausaban molihok sa **sunod nga billing cycle** sa customer.

![Account page showing pending membership change banner](/img/account-page/pending-change.png)

### Unsa ang mahitabo kung mag-downgrade ang usa ka user sa ilang plano {#what-happens-when-a-user-downgrades-their-plan}

Importante nga masabtan nga ang pag-downgrade sa plano dili mag-usab sa kasamtangang configuration sa subsite sa user.

Dili kini awtomatikong magbag-o sa site template kay ang pag-usab sa site template kompleto nga magbuhat og hubog ug mag-reset sa subsite. Kini aron malikayan ang dili kinahanglan nga pagkawala sa data. Busa, ang disk space, themes, plugins pa gihigugma gawas lang sa posts.

Nakasabot mi nga ang imong pangunang kabalaka mao ang mga limitasyon ug quota nga imong gihimo sa matag plano, pero kinahanglan pud nato i-consider ang kadaot nga mahitabo sa subsite sa user kung among pasakaon o usbon ang bisan unsang configuration niini.

Para sa mga post nga mo-overload sa limit nga gi-set sa plano, naa kay 3 ka pamaagi: **Ipadayon lang ang posts** *,* **Ipadala sa trash** *,* o **Ipadala sa draft** *.* Mahimo nimo kini i-configure ni ubos sa Ultimate Multisite settings.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Unsa ang mahitabo sa bayad {#what-happens-to-the-payment}

Sa version 2.0, dili na kinahanglan nga maghimo og bisan unsang adjustment sa pag-proration sa bayad.

Kini tungod kay maghulat ang sistema para **matapos ang billing cycle sa kasamtangang membership sa dili pa** molihok ang bag-ong plano/membership. Ang bag-ong kantidad sa bayad alang sa bag-ong membership awtomatikong iaplay ug i-charge sa sunod nga billing cycle.
