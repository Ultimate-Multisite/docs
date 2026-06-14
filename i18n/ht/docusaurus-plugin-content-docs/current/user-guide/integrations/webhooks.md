---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Yon Première Vue sur Webhooks (v2)

_**ATTENTION: Note ke sa fonksyon ou oswa sa tèks sa a se pou moun ki gen konnen avanse.**_

Yon **webhook** se yon fason pou yon aplikasyon oswa lojike souvan tankou Ultimate Multisite bay lòt aplikasyon enfòmasyon an tan reyèl. Yon webhook voye done oswa payload nan lòt aplikasyon yo jan li rive, sa vle di ou **jwenn done a tout bon moman.**

Sa a ede ou si ou bezwen intègre oswa pase kèk done soti nan Ultimate Multisite bay yon CRM oswa sistèm lòt chak fwa yon evènman kòmanse. Pa egzanp, ou bezwen voye non ak adrès imèl itilizat la pou yon lis imèl chak fwa yon nou kont itilizat ki kreye.

## Kijan pou w kreye yon webhook

Pou kreye yon webhook, ale nan dashboard admin rezo ou an. Klike sou **Ultimate Multisite > Webhooks > Add New Webhook.**

![Paj lis Webhooks vid ak bouton Add New Webhook](/img/admin/webhooks-list-empty.png)

Lè sa a, ou ka edite konfigirasyon webhook la:

![Fòm Add New Webhook ki montre chyen Non, Event, ak URL](/img/admin/webhook-add-modal.png)

Lè w ap kreye yon nou webhook la, yo pral mande ou enfòmasyon tankou **Non, URL,** ak **Event**. Ou ka itilize nenpòt non ou vle pou webhook la. Lajmè ki pi enpòtan se URL ak Event.

![Entèfas edisyon Webhook ki montre chyen URL ak aperçu payload](/img/admin/webhook-url-field.png)

URL se **pwen nan oswa destinasyon** kote Ultimate Multisite pral voye **payload a oswa done yo**. Se aplikasyon sa a ki pral resevwa done a.

Zapier se solisyon ki pi komen itilizat pou fè entegrasyon ak aplikasyon twazyèm pati pi fasil. San yon platfòm tankou Zapier, ou pral bezwen kreye manman koutmye ou tèt ou ki pral pran done a epi pwosesis li. Gade tèks sa a sou **kijan pou itilize Ultimate Multisite webhook ak Zapier.**

Nan sa tèks sa a, nou pral gade konsept baz sou kijan yon webhook fonksyone e evènman ki disponib nan Ultimate Multisite. Nou pral itilize yon sit twazyèm pati ki rele [requestbin.com](https://requestbin.com/). Sit sa a ap pèmèt nou kreye yon endpoint epi pran payload la san nou pa bezwen fè okenn kòd. _**Disclaimer: tout sa li pral fè se montre nou ke done a resevwa.**_ Pa gen okenn pwosesis oswa okenn aksyon ki fèt sou payload la.

Ale nan [requestbin.com](https://requestbin.com/) epi klike sou Create Request Bin.

Aprè ou klike sou bouton sa a, li pral mande w pou ou login si ou deja gen yon kont oubyen register. Si ou deja gen yon kont, li pral mennen ou dirèkteman nan dashboard yo. Sou dashboard la, ou pral imedyatman wè endpoint oswa URL ou ka itilize pou kreye webhook Ultimate Multisite ou a.

Kopi URL la epi tounen nan Ultimate Multisite. Mete endpoint la sou chyen URL la epi chwazi yon evènman nan mennou (dropdown). Nan egzanp sa a, nou pral chwazi **Payment Received** (Peman resevwa).

Evènman sa a aktive chak fwa yon itilizat fè yon peman. Tout evènman ki disponib yo, deskripsyon yo, ak payload yo rele anba paj la. Klike sou bouton **Add New Webhook** pou w kayte webhook la.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Kounye a nou ka voye yon evènman teste nan endpoint la pou nou wè si webhook nou te kreye ap travay. Nou ka fè sa lè ou klike sou **Send Test Event** anba webhook nou te kreye a.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Sa montre yon fenèt konfime ke teste a reyisi.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Lè nou refè nou nan sit _Requestbin_, nou pral wè ke payload la te resevwa epi li gen kèk done test.

Sa se prensip batay ki kòmanse koupe (webhook) ak endpoint yo fonksyone. Si ou vle kreye yon custom endpoint, ou pral bezwen kreye yon fonksyon espesyal pou processe done ou resevwa soti nan Ultimate Multisite la.
