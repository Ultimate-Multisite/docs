---
title: Njikọta Ọtụtụ Ndị Nwe Ojiji
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Njikọ Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 na-agbanwe ọtụtụ ebe njikọ maka ndị tenant nweere onwe ha, nyocha mbufe, na akpaaka nke usoro ndụ tenant.

## Usoro mbido tenant

Njikọ ndị na-emepụta ma ọ bụ na-agbanwe tenant kwesịrị iso usoro a:

1. Chọpụta ndekọ ndebanye tenant na ụdị ikewapụ.
2. Mepụta ma ọ bụ nyochaa onye odee nchekwa data tenant.
3. Bido schema tenant.
4. Nye ndị ọrụ tenant ohere.
5. Debanye ntụgharị ụzọ tenant na ụzọ filesystem.
6. Gbaa nyocha mbufe tupu igosi tenant ahụ.

Echela na tenant nweere onwe ya nwere ike iji njikọ nchekwa data netwọkụ ọzọ. Jiri ndebanye tenant na nkọwapụta onye odee nke addon nyere.

## SSO na REST hooks

Autologin tenant na-enweghị ọnọdụ na-eji token dị mkpụmkpụ nke nwere purpose claim, nchedo mmegharị JTI, oke ngwụcha oge, na mkpachi origin. Njikọ ndị na-agbakwunye bọtịnụ nbanye ma ọ bụ njikọ njikwa dịpụrụ adịpụ kwesịrị ịmepụta nleta tenant site na usoro SSO akwadoro kama iwulite URL nbanye tenant ozugbo.

Ihe omume nyocha API n'akụkụ netwọkụ na nchịkọta kwa ụbọchị dị maka ọnụ ụzọ tenant nweere onwe ha. Jiri ndekọ ndị ahụ mgbe ị na-achọpụta nsogbu na sistemụ mpụga na-akpọ endpoint usoro ndụ tenant.

## URL omume ndị ahịa nweere onwe ha

Ultimate Multisite v2.13.0 na-ebufe omume ndị ahịa sovereign-tenant azụ na saịtị isi maka usoro account, checkout, billing, invoice, saịtị, mgbanwe template, na domain-mapping. Njikọ ndị na-egosi njikọ njikwa n'akụkụ tenant kwesịrị iziga omume ndị ahụ na panel onye ahịa nke saịtị isi ma tinye ebe nlọghachi a kwadoro mgbe onye ọrụ kwesịrị inwe ike ịlaghachi na tenant mgbe ọ mechara omume ahụ.

Jiri wrapper SSO isi maka njikọ njikwa cross-domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL a mepụtara ka nwere ike ịgafe na filter site na `wu_sso_url`, nke na-anata URL SSO, onye ọrụ ugbu a, ID saịtị e zubere, na ọnọdụ redirect. Add-ons nwere ike iji filter ahụ tinye ọnọdụ pụrụ iche nke provider ma ọ bụ dochie URL broker ka ha na-echekwa nkwado token nke Ultimate Multisite.

Emepụtaghachila ọnọdụ membership, invoice, billing-address, template, ma ọ bụ domain-management n'ime tenant nweere onwe ya. Were Dashboard tenant dị ka onye mbido, were panel onye ahịa nke saịtị isi dị ka sistemụ ndekọ maka omume a na-achịkwa.

## Nnyocha mbufe

Mgbe mbufe ma ọ bụ njikọ usoro ndụ gbanwere data tenant, gbaa ọnụ ụzọ nyocha:

- `wp tenant verify-no-legacy --site=<site-id>` na-akwado na tenant adịghịzi adabere na ụzọ ochie n'akụkụ netwọkụ.
- `wp tenant verify-sovereign-push --site=<site-id>` na-akwado na ọrụ sovereign push nwere ike ịhazi ma kpochapụ.

Njikọ kwesịrị ile nyocha dara ada anya dị ka ihe na-egbochi deployment ma zere ịka tenant akara dị ka live ruo mgbe edoziiri ọdịda ahụ.

## Ihichapụ tenant

Usoro ihichapụ kwesịrị ịkpọ ụzọ teardown nke addon ka e wee sachapụ credentials nchekwa data tenant. Njikọ mpụga nwere ike iwepụ akụ provider mgbe teardown gara nke ọma, mana ha ekwesịghị ihichapụ nchekwa data host ma ọ bụ folda mgbe nyocha ma ọ bụ ọrụ async push ka na-aga.

## Database router a kwụsịrị iji

Ejiri deprecation stub dochie `Database_Router` ochie. Njikọ ọhụrụ kwesịrị ịchọpụta tenant site na site router ugbu a na API ndebanye tenant kama ịdabere na klas router ochie.
