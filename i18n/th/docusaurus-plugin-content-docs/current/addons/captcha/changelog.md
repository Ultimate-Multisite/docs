---
title: บันทึกการเปลี่ยนแปลง Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# บันทึกการเปลี่ยนแปลง Captcha

Version: 1.5.0 - เผยแพร่เมื่อ 2026-05-22
* ใหม่: ตัวจำกัดอัตราแบบหยุดเด็ดขาด (Hard-stop rate limiter) — นับทุกการร้องขอ GET และ POST ที่เกิดขึ้นบนหน้าจอที่ป้องกันด้วย captcha (เช่น wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) และตอบกลับด้วย HTTP 429 พร้อม header `Retry-After` และการหน่วงเวลาแบบสุ่ม (tarpit sleep) (1–5 วินาที โดยจำกัดสูงสุดที่ 15 วินาที)
* ใหม่: การตั้งค่า `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` เพื่อปรับช่วงเวลาการหน่วง (tarpit window)
* ใหม่: filter `wu_cap_rate_limit_whitelist_ip` เพื่อยกเว้นช่วง IP ที่เชื่อถือได้
* ใหม่: action `wu_cap_rate_limit_will_block` ที่จะทำงานทันทีก่อนที่จะส่งการตอบกลับแบบหยุดเด็ดขาด
* ใหม่: การตรวจจับ client-IP ที่ป้องกันการปลอมแปลง (Spoof-resistant client-IP detection) ฟังก์ชัน `Captcha_Core::get_client_ip()` (ซึ่งเป็นแหล่งข้อมูลที่เชื่อถือได้สำหรับคีย์ bucket ของ rate-limit, captcha siteverify `remoteip`, และแฮช IP สำหรับสถิติ) บังคับใช้โมเดลความเชื่อถือที่เข้มงวด: REMOTE_ADDR คือค่าพื้นฐาน, `CF-Connecting-IP` จะถูกยอมรับก็ต่อเมื่อ peer ทันทีอยู่ในช่วง IP ของ Cloudflare ที่ใช้งานอยู่เท่านั้น, และ `X-Forwarded-For` จะถูกยอมรับก็ต่อเมื่อ peer ทันทีอยู่ในรายการ trusted-proxy ที่ตั้งค่าไว้ในแอดมิน โดยจะทำการตรวจสอบจากขวาไปซ้าย (right-to-left walk) โดยข้าม hop ที่เชื่อถือได้/CF ก่อนจะกำหนด IP ของผู้เยี่ยมชม
* ใหม่: การตั้งค่า `cap_trust_cloudflare_headers` (ค่าเริ่มต้น OFF) — ให้เลือกเปิดใช้งานความเชื่อถือ `CF-Connecting-IP` เมื่ออยู่หลัง Cloudflare ปลั๊กอินจะแนบ snapshot CIDR ของ Cloudflare มาให้และจะรีเฟรชทุกสัปดาห์ผ่าน wp-cron พร้อม fallback หากการรีเฟรชล้มเหลว
* ใหม่: การตั้งค่า `cap_trusted_proxies` — ช่องข้อความสำหรับระบุ CIDR หรือ IP ธรรมดา (บรรทัดละรายการ, อนุญาตให้มีคอมเมนต์ `#`) สำหรับ proxy / load-balancer หน้าแรกของคุณ หากไม่มีการตั้งค่านี้ จะเพิกเฉยต่อ `X-Forwarded-For` แม้ว่า rate limiter จะเปิดใช้งานอยู่ก็ตาม
* ใหม่: การตรวจจับสถานะ Cloudflare / proxy ที่น่าจะเป็นไปได้โดยอัตโนมัติเมื่อเปิดใช้งานครั้งแรก พร้อมการแจ้งเตือนในแอดมินให้ "ใช้การตั้งค่าที่ตรวจพบ" เพียงคลิกเดียว ปลั๊กอินจะไม่เขียนทับค่าที่คุณบันทึกไว้; หากการรับส่งข้อมูลในภายหลังบ่งชี้ว่าการตั้งค่าของคุณไม่ตรงกับความเป็นจริงอีกต่อไป (เช่น Cloudflare เปลี่ยนช่วง CIDR และ CIDR proxy ของคุณล้าสมัยแล้ว) จะมีการแจ้งเตือนความไม่ตรงกันที่ไม่สามารถปิดได้ พร้อมแนะนำการอัปเดต
* แก้ไข: โหมดล่องหน (Invisible mode) จะไม่ลดระดับ `cap_security_level` เป็น FAST โดยอัตโนมัติอีกต่อไป — จะยึดตามระดับที่แอดมินตั้งค่าไว้ มี filter ใหม่คือ `wu_cap_server_security_level` สำหรับเว็บไซต์ที่ต้องการตรรกะเฉพาะตัว
* แก้ไข: ตัวนับสถิติ `rate_limits_triggered` จะเพิ่มขึ้นทุกครั้งที่มีการบล็อก ไม่ใช่แค่ในเส้นทางสำรองหลังการสำเร็จที่หายากเท่านั้น
* แก้ไข: `Captcha_Core::get_client_ip()` เป็นแหล่งข้อมูลที่เชื่อถือได้เพียงแหล่งเดียวสำหรับการระบุ IP ของผู้เยี่ยมชมทั่วทั้ง rate limiter, captcha providers (reCAPTCHA + hCaptcha `siteverify`), และสถิติ — ปิดช่องโหว่การปลอมแปลงที่การร้องขอจาก origin-server โดยตรงที่บรรทุก header `CF-Connecting-IP` ปลอม จะถูกนับเป็น bucket ของ IP ปลอมแทนที่จะเป็น peer จริง
* แก้ไข: ตัวจำกัดอัตราสำหรับหน้า checkout แบบคลาสสิกของ WooCommerce จะทำงานบน `template_redirect` (ลำดับความสำคัญ 1) แทนที่จะเป็น `woocommerce_before_checkout_form` เพราะ hook ระดับฟอร์มจะไม่ทำงานเมื่อตะกร้าสินค้าว่าง ทำให้การจราจรที่ไม่มีการเพิ่มสินค้าเลยหลบเลี่ยงตัวจำกัดอัตราไปโดยสิ้นเชิง
* แก้ไข: ตัวจำกัดอัตราสำหรับ pay-for-order ของ WooCommerce จะทำงานบน `template_redirect` แทนที่จะเป็น `woocommerce_before_pay_action` เพราะตัวหลังจะทำงานก็ต่อเมื่อ `wp_verify_nonce('woocommerce-pay')` สำเร็จ ซึ่งหมายความว่าผู้โจมตีที่ไม่ได้เข้าสู่ระบบ (ซึ่งเป็นโมเดลภัยคุกคามจริง) จะไม่เคยกระตุ้นตัวจำกัดอัตราเลย
* แก้ไข: ตัวจำกัดอัตราสำหรับ checkout ของ WooCommerce Store API (blocks) จะทำงานบน `rest_pre_dispatch` แทนที่จะเป็น `woocommerce_store_api_checkout_update_order_from_request` เพราะตัวหลังจะทำงานก็ต่อเมื่อ Store API ตรวจสอบความถูกต้องของตะกร้าสินค้าและฟิลด์การเรียกเก็บเงินแล้ว ดังนั้นบอทที่ไม่ได้เข้าสู่ระบบจึงได้รับ 400 จากตัวตรวจสอบและไม่เคยกระตุ้นตัวจำกัดอัตรา
* แก้ไข: ตัวจำกัดอัตราสำหรับ inline-login ของ Ultimate Multisite จะทำงานบน `wu_ajax_nopriv_wu_inline_login` ลำดับความสำคัญ 1 (และ mirror สำหรับผู้ที่เข้าสู่ระบบแล้ว) แทนที่จะเป็น `wu_before_inline_login` เพราะตัวหลังจะทำงานก็ต่อเมื่อ `check_ajax_referer('wu_checkout')` สำเร็จเท่านั้น ดังนั้นบอทที่ไม่ได้เข้าสู่ระบบที่ไม่มี nonce `wu_checkout` ที่ถูกต้องจึงได้รับ 403 และไม่เคยกระตุ้นตัวจำกัดอัตรา
* แก้ไข: `Rate_Limiter::enforce()` จะใช้การป้องกันแบบครั้งเดียวต่อการร้องขอ (once-per-request guard) โดยมีคีย์เป็น `surface|ip` ดังนั้น hook ต้นทางที่ทำงานสองครั้งต่อการเรนเดอร์ (เช่น `wu_setup_checkout` ใน Ultimate Multisite) จึงไม่ลดเกณฑ์ตัวจำกัดอัตราที่มีประสิทธิภาพลงครึ่งหนึ่งอีกต่อไป
* แก้ไข: ตัวจำกัดอัตราสำหรับหน้าจอต่างๆ จะไม่ตรวจสอบ `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) อีกต่อไป เพราะ filter นี้บ่งชี้ว่า "captcha ถูกจัดการโดยหน้าจออื่นแล้ว" และเป็นอิสระจากการป้องกันการท่วม (orthogonal to flood protection) — การรวม WooCommerce เคย hook ตัวนี้เพื่อข้าม captcha ของ WordPress login เมื่อมี nonce ของ Woo ซึ่งส่งผลให้การนับอัตราผิดพลาดและทำให้ POST ของ Woo หลบเลี่ยงตัวจำกัดอัตราได้ ตัวกรอง `wu_cap_rate_limit_whitelist_ip` ที่เฉพาะเจาะจงสำหรับ rate-limit เป็นการบายพาสเดียวที่ใช้ได้ในตอนนี้

Version: 1.3.2 - เผยแพร่เมื่อ 2026-01-27
* แก้ไข: Widget captcha ไม่แสดงบนฟอร์ม checkout ที่ใช้ Elementor หรือ page builder อื่นๆ
* แก้ไข: custom element ของ cap-widget ถูก strip โดยการทำ sanitization ของ wp_kses()
* ปรับปรุง: ใช้ callable content สำหรับช่อง captcha ใน checkout เพื่อข้ามการกรอง HTML
* ปรับปรุง: ทำให้ JavaScript ง่ายขึ้นพร้อม fallback สำหรับกรณีพิเศษ

Version: 1.3.1 - เผยแพร่เมื่อ 2026-01-26
* แก้ไข: โหมด invisible captcha ไม่สามารถแก้ปัญหาอัตโนมัติบนฟอร์ม checkout ของ Ultimate Multisite แบบไดนามิกได้
* ปรับปรุง: สคริปต์ checkout ของ Cap ใช้ MutationObserver เพื่อตรวจจับ widget ที่โหลดแบบไดนามิก
* ปรับปรุง: เพิ่มการดักจับปุ่ม checkout เพื่อรอ token ก่อนการส่งข้อมูล

Version: 1.3.0 - เผยแพร่เมื่อ 2026-01-27
* ใหม่: การรวม checkout ของ WooCommerce Blocks ด้วยการดักจับ Store API fetch
* ใหม่: รองรับ captcha แบบ invisible สำหรับ WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* ใหม่: หน้าการตั้งค่าแบบ standalone สำหรับใช้งานโดยไม่จำเป็นต้องมี Ultimate Multisite
* ใหม่: Jetpack Autoloader เพื่อป้องกันความขัดแย้งของ dependency
* แก้ไข: hCaptcha ไม่แสดงบน checkout ของ Ultimate Multisite แบบไดนามิก (เนื้อหาที่โหลดด้วย AJAX)
* แก้ไข: Captcha ไม่รีเฟรช/รีเซ็ตเมื่อเกิดข้อผิดพลาดในการตรวจสอบฟอร์ม
* แก้ไข: hCaptcha ไม่แสดงบนหน้า checkout ของ WooCommerce
* แก้ไข: ข้อผิดพลาด class not found ของ reCAPTCHA (เพิ่มไลบรารี PHP google/recaptcha)
* ปรับปรุง: การตรวจจับข้อผิดพลาดผ่าน WordPress hooks, MutationObserver, และ AJAX interception
* ปรับปรุง: คำอธิบายการตั้งค่าตอนนี้รวม URL ของ dashboard สำหรับ API keys แล้ว

Version: 1.2.2 - เผยแพร่เมื่อ 2026-01-24
* แก้ไข: Captcha ไม่แสดงบน Ultimate Multisite Login Form Element (ชื่อ filter ของฟอร์มไม่ตรงกัน)
* แก้ไข: HTML ของ cap widget ถูก strip โดยการทำ sanitization ของ wp_kses()
* แก้ไข: JavaScript selectors ไม่พบฟอร์มที่มีเครื่องหมายทับ (slash) ใน element IDs
* เพิ่ม: filter hook `wu_kses_allowed_html` สำหรับ classaddons เพื่อขยายแท็ก HTML ที่อนุญาต
* ลบ: ไฟล์ JavaScript ที่เป็น dead code ถูกแทนที่ด้วยสคริปต์เฉพาะผู้ให้บริการ

Version: 1.2.1 - เผยแพร่เมื่อ 2026-01-23

* แก้ไข: การตรวจสอบ token ของ Cap Captcha ล้มเหลวในสภาพแวดล้อม multisite (ตอนนี้ใช้ transients ทั่วทั้งเครือข่าย)
* แก้ไข: Captcha แสดงผลอย่างสม่ำเสมอสำหรับผู้ใช้ทุกคนโดยไม่คำนึงถึงสถานะการเข้าสู่ระบบ
* แก้ไข: ความไม่ตรงกันระหว่างการแสดงผลและการตรวจสอบ captcha ที่ทำให้เกิดข้อผิดพลาดในการ checkout

Version: 1.2.0 - เผยแพร่เมื่อ 2026-01-21

* ใหม่: Cap Captcha - captcha proof-of-work แบบโฮสต์เอง เปิดใช้งานเป็นค่าเริ่มต้นเมื่อติดตั้ง
* ใหม่: การป้องกันแบบไม่ต้องตั้งค่า (Zero-configuration protection) - เปิดใช้งาน addon และคุณจะได้รับการป้องกันทันที
* ใหม่: สถาปัตยกรรม captcha provider แบบ Polymorphic เพื่อการขยายที่ง่ายดาย
* ใหม่: การป้องกัน checkout ของ WooCommerce Store API จากการโจมตี card testing
* ใหม่: Dashboard ติดตามสถิติที่แสดงความท้าทาย, การตรวจสอบ, และการโจมตีที่ถูกบล็อก
* ใหม่: การตั้งค่าระดับความยากของ Cap Captcha (Fast, Medium, Max)
* ใหม่: Abstract base classes สำหรับ reCAPTCHA และ hCaptcha providers
* ปรับปรุง: ปรับโครงสร้างโค้ดใหม่เป็นคลาส provider แบบโมดูลาร์
* ปรับปรุง: การแยกส่วนความรับผิดชอบที่ดีขึ้นด้วยคลาส manager เฉพาะ
* แก้ไข: การปรับปรุงความปลอดภัยสำหรับ $_SERVER variable sanitization
* แก้ไข: การตั้งค่า PHPUnit test สำหรับ WordPress naming conventions

Version: 1.0.1 - เผยแพร่เมื่อ 2025-09-28

* เปลี่ยน prefix เป็น ultimate-multisite; อัปเดต text domain; เพิ่มเวอร์ชัน
