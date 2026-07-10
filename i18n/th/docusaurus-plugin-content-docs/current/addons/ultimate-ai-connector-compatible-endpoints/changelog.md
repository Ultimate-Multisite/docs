---
title: บันทึกการเปลี่ยนแปลงของตัวเชื่อมต่อ AI ขั้นสุดยอดสำหรับ Endpoint ที่รองรับ
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# บันทึกการเปลี่ยนแปลง (Changelog) สำหรับ Ultimate AI Connector สำหรับ Endpoints ที่รองรับ {#ultimate-ai-connector-for-compatible-endpoints-changelog}

## เวอร์ชัน 2.0.0 — เผยแพร่เมื่อ 2026-04-24 {#version-200--released-on-2026-04-24}

* ใหม่: รองรับหลายผู้ให้บริการ (Multi-provider support) — สามารถตั้งค่า AI endpoint ได้หลายจุด และระบบจะทำการส่งคำขอ (route requests) ไปยังผู้ให้บริการต่างๆ โดยมีระบบสำรองอัตโนมัติ (automatic fallback) หากผู้ให้บริการรายใดรายหนึ่งล้มเหลว
* แก้ไข: การรวม SDK สำหรับหลายผู้ให้บริการ (Multi-provider SDK integration) โดยมีการระบุ Provider ID, URL สำหรับลงทะเบียน, และขอบเขตของ HTTP filter ที่ถูกต้องสำหรับผู้ให้บริการแต่ละราย
* แก้ไข: การ์ดผู้ให้บริการ (provider card) ใหม่จะขยายอัตโนมัติเมื่อเพิ่ม; และมีการแก้ไขปัญหา script cache busting เมื่ออัปเดต plugin
* แก้ไข: ปรับปรุง namespace ของคลาสผู้ให้บริการแบบไดนามิกสำหรับ eval() และปรับปรุงพฤติกรรมการขยายอัตโนมัติสำหรับผู้ให้บริการที่เพิ่มเข้ามาใหม่
* แก้ไข: ใช้ components ที่เสถียร (Card/CardBody/CardHeader/CardDivider) ซึ่งไม่ใช่เวอร์ชันทดลองแล้ว เพื่อให้เข้ากันได้กับ WordPress 6.9 ขึ้นไป
* แก้ไข: แทนที่ DragHandle ที่ไม่ถูกกำหนดด้วยไอคอนจับ (grip icon) แบบ unicode สำหรับการลากและจัดเรียงผู้ให้บริการใหม่
* แก้ไข: กำจัด HTTP request ที่เป็นแบบบล็อก (blocking) ซึ่งเคยทำงานทุกครั้งที่โหลดหน้าเว็บ
* ปรับปรุง: อัปเกรด GitHub Actions workflows เป็น Node.js 24

## เวอร์ชัน 1.0.0 — การเปิดตัวครั้งแรก {#version-100--initial-release}
