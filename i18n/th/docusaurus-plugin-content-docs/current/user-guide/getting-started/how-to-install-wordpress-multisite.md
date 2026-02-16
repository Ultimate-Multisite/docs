---
title: วิธีติดตั้ง WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# ฉันจะติดตั้ง WordPress Multisite ได้อย่างไร?

WordPress Multisite ช่วยให้คุณมีเครือข่ายเว็บไซต์หลายเว็บในการติดตั้งเดียว ฟีเจอร์นี้มีอยู่ในตัวอยู่แล้ว แต่ไม่ได้เปิดใช้งานโดยอัตโนมัติ

:::tip
Ultimate Multisite มี **[ตัวช่วยตั้งค่า Multisite ในตัว](./multisite-setup-wizard)** ที่ทำขั้นตอนทั้งหมดนี้ให้อัตโนมัติ หากคุณติดตั้ง Ultimate Multisite ไว้แล้ว เราแนะนำให้ใช้ตัวช่วยนี้แทนการทำตามขั้นตอนแบบ manual ด้านล่าง
:::

เนื่องจาก Ultimate Multisite เป็น plugin ที่ใช้งานได้เฉพาะบนเครือข่ายเท่านั้น ในบทแนะนำนี้ คุณจะได้เรียนรู้วิธีติดตั้งและตั้งค่า WordPress Multisite ด้วยตนเอง เนื้อหานี้อ้างอิงจาก [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) จาก WPBeginner

**สิ่งที่ควรพิจารณาก่อนสร้างเครือข่าย multisite ของคุณ:**

  * เลือกใช้ WordPress hosting ที่ดี! เว็บไซต์ทุกเว็บในเครือข่ายจะใช้ทรัพยากรเซิร์ฟเวอร์ร่วมกัน

  * หากคุณมีเว็บไซต์แค่ไม่กี่เว็บและมี traffic ไม่มาก shared hosting น่าจะเพียงพอสำหรับคุณ

  * ผู้ให้บริการ **Managed WordPress hosting** ส่วนใหญ่รองรับ Multisite ได้ทันที (พวกเขาติดตั้ง WordPress พร้อมเปิดใช้งานและตั้งค่า Multisite ให้คุณเรียบร้อยแล้ว) ตัวอย่างเช่น WP Engine, Closte, Cloudways เป็นต้น หากคุณไม่แน่ใจว่าผู้ให้บริการ hosting ของคุณรองรับหรือไม่ ให้ติดต่อฝ่ายสนับสนุนของพวกเขาก่อนดำเนินการตามบทแนะนำนี้

  * ควรคุ้นเคยกับการติดตั้ง WordPress และการแก้ไขไฟล์ผ่าน FTP ด้วย

_**สำคัญ**_ **:** หากคุณกำลังตั้งค่าเครือข่าย multisite บนเว็บไซต์ WordPress ที่มีอยู่แล้ว อย่าลืม:

  * สร้าง backup เว็บไซต์ WordPress ของคุณให้ครบถ้วน

  * ปิดใช้งาน plugin ทั้งหมดบนเว็บไซต์ของคุณโดยไปที่หน้า plugins แล้วเลือก _Deactivate_ จากการดำเนินการแบบกลุ่ม จากนั้นคลิก _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

ในการเปิดใช้งาน Multisite ก่อนอื่นให้เชื่อมต่อกับเว็บไซต์ของคุณโดยใช้ FTP client หรือ cPanel file manager แล้วเปิดไฟล์ wp-config.php เพื่อแก้ไข

ก่อนบรรทัด _*That's all, stop editing! Happy blogging.*_ ให้เพิ่มโค้ดต่อไปนี้:

define('WP_ALLOW_MULTISITE', true);

บันทึกและอัปโหลดไฟล์ wp-config.php กลับไปยังเซิร์ฟเวอร์

เมื่อเปิดใช้งานฟีเจอร์ multisite บนเว็บไซต์ของคุณแล้ว ตอนนี้ก็ถึงเวลาตั้งค่าเครือข่ายของคุณ

ไปที่ **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

ตอนนี้คุณต้องบอก WordPress ว่าจะใช้โครงสร้างโดเมนแบบไหนสำหรับเว็บไซต์ในเครือข่ายของคุณ: subdomain หรือ subdirectory

หากคุณเลือก subdomain คุณต้องเปลี่ยนการตั้งค่า DNS สำหรับ domain mapping และตั้งค่า _**wildcard subdomains**_ สำหรับเครือข่าย multisite ของคุณด้วย

กลับมาที่ Network Setup ตั้งชื่อให้เครือข่ายของคุณและตรวจสอบว่าที่อยู่อีเมลใน Network admin email ถูกต้อง คลิก _Install_ เพื่อดำเนินการต่อ

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

เพิ่มโค้ดนี้ที่ WordPress ให้มา ลงในไฟล์ _**wp-config.php**_ ของคุณ:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

และเพิ่มโค้ดนี้ที่ WordPress ให้มาเช่นกัน ลงในไฟล์ _**.htaccess**_ ของคุณ:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# เพิ่ม trailing slash ให้ /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

ใช้ FTP client หรือ file manager (หากคุณใช้ cPanel เป็นต้น) เพื่อคัดลอกและวางโค้ดลงในไฟล์ทั้งสองนี้

สุดท้าย ล็อกอินเข้าเว็บไซต์ WordPress ของคุณอีกครั้งเพื่อเข้าถึงเครือข่าย multisite ของคุณ

**สิ่งสำคัญคือต้องทดสอบและตรวจสอบว่าคุณสามารถสร้าง subsite บน WordPress Multisite ของคุณได้ก่อนที่จะติดตั้ง Ultimate Multisite**

ในการสร้าง subsite:

  1. เปิด wp-admin ของเว็บไซต์คุณ

  2. ไปที่ My Sites > Sites (/wp-admin/network/sites.php)

  3. คลิก Add New ที่ด้านบน

  4. กรอกข้อมูลในทุกช่อง:

  * Site Address — อย่าใช้ "www"

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — ชื่อของเว็บไซต์ สามารถเปลี่ยนได้ภายหลัง

  * Admin Email — ตั้งเป็นผู้ใช้ admin เริ่มต้นสำหรับ subsite

![แบบฟอร์มเพิ่มเว็บไซต์ใหม่ใน WordPress Multisite](/img/admin/sites-list.png)

หลังจากกรอกข้อมูลครบแล้ว คลิกปุ่ม "Add site" เมื่อสร้าง subsite ใหม่เสร็จแล้ว ให้เข้าไปดูเพื่อตรวจสอบว่า subsite ใช้งานได้ปกติ

## ปัญหาที่พบบ่อย:

### 1\. ฉันสามารถสร้างเว็บไซต์ใหม่ได้ แต่เข้าถึงไม่ได้

หากคุณเลือก subdomain คุณต้องตั้งค่า wildcard subdomains สำหรับเครือข่าย multisite ของคุณด้วย

ในการทำเช่นนั้น ให้ไปที่แผงควบคุมบัญชี hosting ของเว็บไซต์คุณ (เช่น cPanel/Plesk/Direct Admin ขึ้นอยู่กับผู้ให้บริการ hosting ของคุณ)

หาตัวเลือกสำหรับ "Domains" หรือ "Subdomains" ในแผงควบคุมบางที่อาจเรียกว่า "Domain administration"

ในช่อง subdomain ให้ใส่เครื่องหมายดอกจัน (*) จากนั้นระบบจะให้คุณเลือกชื่อโดเมนที่ต้องการเพิ่ม subdomain

document root สำหรับชื่อโดเมนที่เลือกจะถูกตรวจจับโดยอัตโนมัติ คลิกปุ่ม _Create_ หรือ _Save_ เพื่อเพิ่ม wildcard subdomain ของคุณ รายการควรแสดงเป็น "*.[mydomain.com](http://mydomain.com)"
