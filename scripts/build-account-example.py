#!/usr/bin/env python3
"""Synchronize the guide, complete source reference and deterministic example ZIP."""
import argparse
import io
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'static/downloads/frontend-account'
GUIDE = ROOT / 'docs/user-guide/client-management/frontend-account-page.md'
REFERENCE = GUIDE.with_name('frontend-account-example-source.md')
ARCHIVE = ROOT / 'static/downloads/frontend-account-example.zip'
BEGIN = '<!-- BEGIN ACCOUNT EXAMPLE SOURCE -->'
END = '<!-- END ACCOUNT EXAMPLE SOURCE -->'
FILES = [
    ('ums-account-example.php', 'php'),
    ('canvas.php', 'php'),
    ('portal.css', 'css'),
    ('account-page.html', 'html'),
    ('plans-page.html', 'html'),
]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--write', action='store_true', help='Update generated artifacts')
    args = parser.parse_args()
    sections = []
    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, 'w', compression=zipfile.ZIP_DEFLATED) as archive:
        for name, language in FILES:
            source = (SOURCE / name).read_text()
            sections.append(f'### `{name}`\n\n```{language}\n{source.rstrip()}\n```')
            info = zipfile.ZipInfo(f'ums-account-example/{name}', date_time=(2026, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, source.encode())
    current = GUIDE.read_text()
    if current.count(BEGIN) != 1 or current.count(END) != 1:
        raise SystemExit('Expected exactly one source appendix marker pair')
    before, rest = current.split(BEGIN, 1)
    _, after = rest.split(END, 1)
    link = '[Open the complete five-file source reference](frontend-account-example-source.md).'
    expected = before + BEGIN + '\n\n' + link + '\n\n' + END + after
    reference = (
        '---\ntitle: Frontend Account Example — Full Source\nsidebar_position: 16\n---\n\n'
        '# Frontend account example: full source\n\n'
        'Use these exact files with the [complete setup guide](frontend-account-page.md). '
        '[Download the installable ZIP](/downloads/frontend-account-example.zip).\n\n'
        'This page is generated from the downloadable example. PHP belongs in the '
        'example plugin folder; paste the HTML into the page block editor’s Code '
        'editor. Do not put PHP in page content or edit Ultimate Multisite itself.\n\n'
        + '\n\n'.join(sections) + '\n'
    )
    zipped = buffer.getvalue()
    if args.write:
        GUIDE.write_text(expected)
        REFERENCE.write_text(reference)
        ARCHIVE.write_bytes(zipped)
        print('Updated guide link, complete source reference and installable example ZIP')
    elif (expected != current or not REFERENCE.exists() or REFERENCE.read_text() != reference
          or not ARCHIVE.exists() or ARCHIVE.read_bytes() != zipped):
        raise SystemExit('Example artifacts are stale: run python3 scripts/build-account-example.py --write')
    else:
        print('Full source reference and example ZIP match all five source files')


if __name__ == '__main__':
    main()
