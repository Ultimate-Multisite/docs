---
title: מחבר ה-AI האולטימטיבי עבור WebLLM - יומן שינויים
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# יומן השינויים של Ultimate AI Connector עבור WebLLM {#ultimate-ai-connector-for-webllm-changelog}

## גרסה 1.1.0 — שוחררה ב-2026-04-09 {#version-110--released-on-2026-04-09}

* **חדש:** ווידג'ט צ'אט צף עם מדד סטטוס בסרגל המנהל — כל משתמש מחובר יכול להפעיל את ה-LLM בצד הלקוח ישירות מהצד הקדמי (front end).
* **חדש:** זמן ריצה (runtime) של SharedWorker — כעת מנוע MLC פועל ב-SharedWorker, כך שמספר לשוניות משתפות סשן GPU אחד במקום להתחרות עליו.
* **חדש:** מלכודת (interceptor) של middleware apiFetch — בקשות WordPress REST התואמות לתבנית AI Client SDK מנותבות באופן שקוף ל-broker המקומי של WebLLM, ללא צורך במעגל HTTP לולאה (loopback).
* **חדש:** ממשק הגדרות ווידג'ט בלוח הקישור (Connector panel) — מאפשר להפעיל ולבטל את ווידג'ט הצ'אט ולהגדיר התנהגות של הנעה אוטומטית (auto-prompt).
* **תיקון:** כפייה (Force) של אחורי מקבלת מטמון IndexedDB, כדי שמורידות משקולות המודל ישתמרו גם במקרה של הפניות CDN של HuggingFace xet ששוברות את נתיב ה-Cache API המוגדר כברירת מחדל.
* **תיקון:** דילוג על דריסת מטמון KV של context_window עבור מודלי הטמעות (embedding models) (אין להם decoder והדריסה גרמה לשגיאת זמן ריצה).
* **תיקון:** פרסום מודל מועמד להפעלה קרמית (cold-start candidate model) בנתיב /webllm/v1/models לפני שהלשונית של ה-worker נטענה, כך שמפתחי ה-SDK יראו מודל באופן מיידי.
* **תיקון:** חיבור (Hook) את WebLLM למסנן wpai_preferred_text_models, כך שפיצ'ר AI Experiments ינתב למנוע בדפדפן כאשר מוגדר מודל.
* **שיפור:** תיקוני Cache-busting, נרמול תוכן (content normalisation) וייחוס חומרה (hardware-reference) שזוהו במהלך בדיקות מקצה לקצה (end-to-end testing).

## גרסה 1.0.0 — השקה ראשונית {#version-100--initial-release}
