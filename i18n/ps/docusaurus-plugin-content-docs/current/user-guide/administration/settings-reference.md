---
title: د ترتیباتو مرجع
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# د تنظیماتو مرجع

دا پاڼه هغه تنظیمات څاري چې ورځنۍ اداره او په Ultimate Multisite کې وروستي چلند بدلونونه اغېزمنوي.

## نور اختیارونه {#other-options}

د **نور اختیارونه** ساحه د **Ultimate Multisite > Settings > Login & Registration** لاندې ښکاري.

| تنظیم | تشریح |
|---|---|
| **Jumper فعال کړئ** | د admin ساحه کې د Jumper چټک تګ‌راتګ وسیله ښيي. دا وکاروئ چې نېغ په نېغه Ultimate Multisite پردو، د شبکې څیزونو، او ملاتړ شوو admin ځایونو ته ولاړ شئ. که نه غواړئ دا لنډلار ښکاره وي، دا غیرفعال کړئ. |

## د تېروتنو راپور ورکول او telemetry {#error-reporting-and-telemetry}

د تېروتنو د راپور ورکولو پخوانی opt-in تنظیم د تنظیماتو له پاڼې لرې شوی دی. بې‌نومه telemetry غیرفعاله ده او د فعالولو لپاره یې هېڅ UI سویچ نشته.

که تاسو د تنظیماتو پاڼې لپاره داخلي runbooks یا screenshots ساتئ، د پخواني error-reporting opt-in field ته اشارې لرې کړئ څو مدیران د داسې تنظیم په لټه کې نه شي چې نور شتون نه لري.

## د واردولو/صادرولو تنظیمات {#importexport-settings}

د **Import/Export** تنظیماتو ټب تشریح کوي چې کوم تنظیمات کنټرولوي او د site او network آرشیفونو لپاره نېغ په نېغه **Ultimate Multisite > Site Export** ته لینک ورکوي. د واردولو/صادرولو د پیکربندۍ لپاره د تنظیماتو ټب وکاروئ، د single-site د صادرولو/واردولو بهیر لپاره **Tools > Export & Import** وکاروئ، او کله چې بشپړ Network Export آرشیف ته اړتیا لرئ د Site Export وسیله وکاروئ.

## د Domain Seller HostAfrica د balance خبرداری {#domain-seller-hostafrica-balance-warning}

کله چې د Domain Seller addon له HostAfrica سره نښلول شوی وي، د network مدیران اوس د لغوه کېدونکي balance-low خبرداری ویني کله چې د reseller account balance د باور وړ domain ثبت یا نوي کولو پروسس لپاره ډېر ټیټ وي.

دا خبرتیا د عملیاتي خبرداري په توګه وګڼئ: مخکې له دې چې نور paid domain ثبتونه ومنئ، د HostAfrica reseller balance لوړ کړئ، بیا د Domain Seller تنظیماتو یا د domain-monitoring پردې ته راوګرځئ څو تایید کړئ چې ثبتونه او نوي کول په عادي ډول دوام کولی شي.

## د AI provider connector تنظیمات {#ai-provider-connector-settings}

د AI provider connector تنظیمات اوس یوازې ملاتړ شوي OAuth account pools ښکاره کوي:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | د OAuth تڼۍ په وسیله یو یا څو Anthropic Max accountونه ونښلوئ. کله چې sandboxed browser redirect په اتومات ډول بشپړ نه شي کړای، د manual OAuth fallback وکاروئ. |
| **OpenAI ChatGPT/Codex** | د همدې OAuth pool بهیر له لارې ChatGPT accountونه ونښلوئ. Connector-supported عملیات د account له نښلېدو وروسته د ChatGPT Codex tool calls کارولی شي. |
| **Google AI Pro** | د OAuth له لارې Google AI Pro accountونه ونښلوئ، بیا که د account لېست سمدستي تازه نه شي، connector تازه کړئ. |

Cursor Pro نور ملاتړ شوی provider نه دی. زاړه داخلي screenshots، runbooks، یا onboarding ګامونه لرې کړئ چې د Cursor Pro setup fields یا connector paths یادونه کوي.

کله چې provider accountونه زیات یا لرې کوئ، د هغه account لپاره چې تازه کېږي یا حذفېږي معتبر email address دننه کړئ او د connector-backed عملیاتو له ازمویلو مخکې د provider تنظیمات خوندي کړئ.
