---
title: Nkwupụta Site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportare Site {#site-export}

Página de administração **Site Export** (Exportar Site) cho phép os administradores da rede empacotar um site, ou toda a rede, em um arquivo para download, útil para migração, backup ou trabalhos de transferência.

## Exportando um site {#exporting-one-site}

Vá para **Ultimate Multisite > Site Export** e escolha **Generate new Site Export** (Gerar novo Exportação de Site). Selecione o subsite que você quer exportar, depois escolha se o arquivo compactado deve incluir uploads, plugins e temas.

Quando a exportação terminar, baixe o ZIP da lista **Existing Exports** (Exports Existentes). Os ZIPs de exportação agora incluem um `index.php` que inicia sozinho e um `readme.txt`, então você pode fazer o upload do arquivo para um host novo e começar sem precisar instalar primeiro um plugin de importador separado.

## Exportando toda a rede {#exporting-the-whole-network}

Use **Network Export** (Exportação de Rede) na página Site Export quando você precisar de um único arquivo compactado contendo todos os subsites da rede. Isso é útil antes de migrações de host, exercícios de recuperação de desastres ou reconstruções em ambiente de teste onde cada subsite precisa viajar junto.

Como uma exportação de rede pode ser muito maior do que uma exportação de site única, execute-a durante um período de baixo tráfego e confirme se o armazenamento de destino tem espaço livre suficiente para uploads, plugins, temas e arquivos ZIP gerados.

### Network Import Bundles (Pacotes de Importação de Rede) {#network-import-bundles}

A partir da Ultimate Multisite 2.12.0, o Site Exporter pode gerar **network import bundles** (pacotes de importação de rede) — arquivos compactados especiais projetados para restaurar sites em toda a rede de forma simplificada. Um pacote de importação de rede contém todos os arquivos e metadados necessários para restaurar vários sites para uma nova instalação da rede.

#### Gerando um Network Import Bundle (Gerando um Pacote de Importação de Rede) {#generating-a-network-import-bundle}

1. Ia **Ultimate Multisite > Site Export**-e đi.
2. Nhấn vào **Generate new Network Export**.
3. Chọn **Network Import Bundle** làm loại xuất (export type).
4. Chọn xem có muốn bao gồm các file tải lên (uploads), plugin và theme hay không.
5. Nhấn **Generate**.
6. Tải gói ZIP bundle từ danh sách **Existing Exports**.

#### Khôi phục từ Network Import Bundle {#restoring-from-a-network-import-bundle}

Để khôi phục các trang web từ một network import bundle:

1. Cài đặt Ultimate Multisite trên host đích của bạn.
2. Hoàn tất hướng dẫn thiết lập multisite (multisite setup wizard).
3. Đi đến **Ultimate Multisite > Site Export** trên network mới.
4. Nhấn vào **Import Network Bundle**.
5. Tải file ZIP network import bundle lên.
6. Làm theo hướng dẫn cài đặt trên màn hình.
7. Quá trình import sẽ khôi phục tất cả các trang web, nội dung và cấu hình của chúng.

Network import bundles giữ lại:
- Nội dung trang web (bài viết, trang, custom post types).
- Cài đặt và tùy chọn của trang web.
- Vai trò và quyền người dùng.
- Plugin và theme (nếu có trong bundle).
- Các file tải lên media (nếu có trong bundle).
- Các bảng cơ sở dữ liệu và dữ liệu tùy chỉnh.

## Cài đặt ZIP export tự khởi động trên host mới {#installing-a-self-booting-export-zip}

Để khôi phục một file ZIP tự khởi động trên một host mới:

1. Tải nội dung của file ZIP đã xuất (exported) lên thư mục gốc web (web root) đích.
2. Mở file `index.php` vừa tải lên bằng trình duyệt.
3. Làm theo hướng dẫn cài đặt trên màn hình từ gói export có sẵn trong bundle.
4. Xem lại file `readme.txt` có sẵn trong bundle để biết các ghi chú cụ thể cho việc xuất trước khi xóa các file tạm thời.

Để biết chi tiết về cài đặt và import dành riêng cho addon, hãy xem tài liệu [Site Exporter addon documentation](/addons/site-exporter).

Đối với công cụ single-site được thêm vào Ultimate Multisite 2.9.0, hãy xem [Export & Import](/user-guide/administration/export-import).
