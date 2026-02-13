#!/usr/bin/env python3
"""
Fix broken image URLs in translated documentation files.

Strategy:
- For each translated file with broken URLs, find its English counterpart
- Extract image references from both files (by line order)
- Build a mapping of broken URL → fixed replacement
- Apply replacements to the translated file

Images are not translated, so the English file's image references
are the correct replacements for all locales.
"""

import os
import re
import subprocess
import sys
from collections import defaultdict

# Paths
EN_BASE = '/home/dave/ultimate-plugins/docs/docs'
I18N_BASE = '/home/dave/ultimate-plugins/docs/i18n'

# Broken URL domains
BROKEN_DOMAINS = [
    'wp-ultimo-space.fra1.cdn.digitaloceanspaces.com',
    'downloads.intercomcdn.com',
    'support.delta.nextpress.co',
]

# Regex to match image markdown lines with broken URLs
BROKEN_URL_RE = re.compile(
    r'(?:!\[[^\]]*\]\([^)]*(?:' +
    '|'.join(re.escape(d) for d in BROKEN_DOMAINS) +
    r')[^)]*\))|'
    r'(?:\[!\[[^\]]*\]\([^)]*(?:' +
    '|'.join(re.escape(d) for d in BROKEN_DOMAINS) +
    r')[^)]*\)\]\([^)]*\))'
)

# Regex to match any image reference (for English files)
IMAGE_RE = re.compile(
    r'(?:!\[[^\]]*\]\([^)]*\))|'           # ![alt](url)
    r'(?:\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\))|'  # [![alt](url)](url)
    r'(?:<!--\s*Screenshot unavailable:[^>]*-->)'  # <!-- Screenshot unavailable: ... -->
)

# Regex to check if a line contains a broken domain
BROKEN_DOMAIN_RE = re.compile(
    '|'.join(re.escape(d) for d in BROKEN_DOMAINS)
)

# Also match the FAQ's broken link (not an image but a broken URL)
BROKEN_LINK_RE = re.compile(
    r'\[([^\]]*)\]\(https?://support\.delta\.nextpress\.co[^)]*\)'
)


def extract_image_lines(filepath):
    """Extract (line_number, line_content) for lines containing image references."""
    images = []
    with open(filepath, 'r', encoding='utf-8') as f:
        for i, line in enumerate(f):
            stripped = line.strip()
            if not stripped:
                continue
            # Check for image markdown or screenshot placeholder
            if IMAGE_RE.search(stripped) or BROKEN_DOMAIN_RE.search(stripped):
                images.append((i, line))
    return images


def extract_broken_lines(filepath):
    """Extract (line_number, line_content) for lines with broken URLs."""
    broken = []
    with open(filepath, 'r', encoding='utf-8') as f:
        for i, line in enumerate(f):
            if BROKEN_DOMAIN_RE.search(line):
                broken.append((i, line))
    return broken


def build_replacement_map(en_file, translated_file):
    """
    Build a map of old_line → new_line by matching image positions.

    Since images aren't translated, we match them by their order of appearance.
    Each broken image in the translated file maps to the image at the same
    position in the English file.
    """
    en_images = extract_image_lines(en_file)
    tr_broken = extract_broken_lines(translated_file)

    if not tr_broken:
        return {}

    # Read translated file to get all image lines (broken + ok)
    tr_images = extract_image_lines(translated_file)

    # Build positional mapping: for each image position in translated file,
    # find the corresponding English image
    replacements = {}

    # Simple approach: match by sequential position
    # The nth image in translated file corresponds to the nth image in English
    en_idx = 0
    tr_idx = 0

    while tr_idx < len(tr_images) and en_idx < len(en_images):
        tr_lineno, tr_line = tr_images[tr_idx]
        en_lineno, en_line = en_images[en_idx]

        if BROKEN_DOMAIN_RE.search(tr_line):
            replacements[tr_lineno] = en_line

        tr_idx += 1
        en_idx += 1

    return replacements


def fix_file(translated_file, replacements):
    """Apply line replacements to a file."""
    with open(translated_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    changed = 0
    for lineno, new_line in replacements.items():
        if lineno < len(lines):
            old_line = lines[lineno]
            if old_line.strip() != new_line.strip():
                # Preserve original indentation
                indent = len(old_line) - len(old_line.lstrip())
                indent_str = old_line[:indent]
                lines[lineno] = indent_str + new_line.strip() + '\n'
                changed += 1

    if changed > 0:
        with open(translated_file, 'w', encoding='utf-8') as f:
            f.writelines(lines)

    return changed


def get_translated_files():
    """Find all translated files with broken URLs."""
    result = subprocess.run(
        ['grep', '-rl', '-E',
         r'wp-ultimo-space\.fra1\.cdn\.digitaloceanspaces\.com|downloads\.intercomcdn\.com|support\.delta\.nextpress\.co',
         I18N_BASE],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        return []
    return [f.strip() for f in result.stdout.strip().split('\n') if f.strip()]


def get_relpath(filepath):
    """Extract relative doc path from a translated file path."""
    parts = filepath.split('/current/', 1)
    if len(parts) == 2:
        return parts[1]
    return None


def main():
    dry_run = '--dry-run' in sys.argv
    verbose = '-v' in sys.argv or '--verbose' in sys.argv

    if dry_run:
        print("DRY RUN - no files will be modified\n")

    translated_files = get_translated_files()
    print(f"Found {len(translated_files)} translated files with broken URLs\n")

    # Group by relative path
    by_relpath = defaultdict(list)
    for f in translated_files:
        rp = get_relpath(f)
        if rp:
            by_relpath[rp].append(f)

    total_files_fixed = 0
    total_replacements = 0
    errors = []

    for relpath in sorted(by_relpath.keys()):
        en_file = os.path.join(EN_BASE, relpath)

        if not os.path.exists(en_file):
            errors.append(f"English file not found: {en_file}")
            continue

        # Check English file has no broken URLs
        en_broken = extract_broken_lines(en_file)
        if en_broken:
            errors.append(f"English file still has {len(en_broken)} broken URLs: {relpath}")
            continue

        locale_files = by_relpath[relpath]

        if verbose:
            print(f"\n--- {relpath} ({len(locale_files)} locales) ---")

        for tr_file in sorted(locale_files):
            # Extract locale from path
            locale = tr_file.split('/i18n/')[1].split('/')[0]

            replacements = build_replacement_map(en_file, tr_file)

            if not replacements:
                if verbose:
                    print(f"  [{locale}] No replacements needed (possibly mismatched structure)")

                # Fallback: do simple string replacements for known patterns
                # This handles cases where line structure differs
                with open(tr_file, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Handle the FAQ broken link specially
                if 'support.delta.nextpress.co' in content and 'frequently-asked-questions' in tr_file:
                    new_content = re.sub(
                        r'\[([^\]]*)\]\(https?://support\.delta\.nextpress\.co[^)]*\)',
                        r'[\1](/docs/user-guide/getting-started/how-to-install-wordpress-multisite)',
                        content
                    )
                    if new_content != content:
                        if not dry_run:
                            with open(tr_file, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                        count = content.count('support.delta.nextpress.co') - new_content.count('support.delta.nextpress.co')
                        print(f"  [{locale}] Fixed {count} broken link(s) (FAQ fallback)")
                        total_files_fixed += 1
                        total_replacements += count
                continue

            if dry_run:
                print(f"  [{locale}] Would replace {len(replacements)} image(s)")
                total_files_fixed += 1
                total_replacements += len(replacements)
                if verbose:
                    for lineno, new_line in sorted(replacements.items()):
                        print(f"    L{lineno+1}: → {new_line.strip()[:80]}...")
            else:
                changed = fix_file(tr_file, replacements)
                if changed > 0:
                    print(f"  [{locale}] Fixed {changed} image(s)")
                    total_files_fixed += 1
                    total_replacements += changed
                elif verbose:
                    print(f"  [{locale}] No changes needed")

    # Summary
    print(f"\n{'=' * 60}")
    print(f"SUMMARY")
    print(f"{'=' * 60}")
    print(f"Files fixed: {total_files_fixed}")
    print(f"Total replacements: {total_replacements}")

    if errors:
        print(f"\nErrors ({len(errors)}):")
        for e in errors:
            print(f"  - {e}")

    # Verify
    if not dry_run:
        remaining = get_translated_files()
        print(f"\nRemaining files with broken URLs: {len(remaining)}")
        if remaining and verbose:
            for f in remaining[:20]:
                print(f"  {f}")
            if len(remaining) > 20:
                print(f"  ... and {len(remaining) - 20} more")


if __name__ == '__main__':
    main()
