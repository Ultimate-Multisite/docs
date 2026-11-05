#!/usr/bin/env python3
"""Synchronize the guide's full source appendix and deterministic example ZIP."""
import argparse
import io
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'static/downloads/frontend-account'
GUIDE = ROOT / 'docs/user-guide/client-management/frontend-account-page.md'
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
    expected = before + BEGIN + '\n\n' + '\n\n'.join(sections) + '\n\n' + END + after
    zipped = buffer.getvalue()
    if args.write:
        GUIDE.write_text(expected)
        ARCHIVE.write_bytes(zipped)
        print('Updated full-source appendix and installable example ZIP')
    elif expected != current or not ARCHIVE.exists() or ARCHIVE.read_bytes() != zipped:
        raise SystemExit('Example artifacts are stale: run python3 scripts/build-account-example.py --write')
    else:
        print('Full source appendix and example ZIP match all five source files')


if __name__ == '__main__':
    main()
