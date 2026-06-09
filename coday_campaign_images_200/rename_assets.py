#!/usr/bin/env python3
"""
rename_assets.py
----------------
Liest assets.json aus dem aktuellen Verzeichnis und benennt alle
Bilddateien physisch gemäss den dort definierten Mapping-Eintraegen um.

Anforderungen:
  - Nur Standardbibliotheken (os, json)
  - Graceful Degradation: kein harter Absturz bei fehlenden Dateien
  - Terminalbericht am Ende (Erfolgreich / Uebersprungen / Fehler)
"""

import os
import json


def load_assets(json_path: str) -> list:
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    return data.get("assets", [])


def rename_assets(base_dir: str, assets: list) -> dict:
    counts = {"success": 0, "skipped": 0, "error": 0}

    for entry in assets:
        original = entry.get("original_filename", "").strip()
        new_name = entry.get("new_filename", "").strip()

        if not original or not new_name:
            print(f"[SKIP]    Unvollstaendiger Eintrag: {entry}")
            counts["skipped"] += 1
            continue

        src = os.path.join(base_dir, original)
        dst = os.path.join(base_dir, new_name)

        # Quelldatei existiert nicht
        if not os.path.exists(src):
            print(f"[SKIPPED] Datei nicht gefunden: {src}")
            counts["skipped"] += 1
            continue

        # Zieldatei existiert bereits (Kollision vermeiden)
        if os.path.exists(dst) and src != dst:
            print(f"[SKIP]    Zieldatei existiert bereits: {dst}")
            counts["skipped"] += 1
            continue

        # Keine Aenderung noetig
        if src == dst:
            print(f"[SKIP]    Quell- und Zielname identisch: {original}")
            counts["skipped"] += 1
            continue

        try:
            os.rename(src, dst)
            print(f"[OK]      {original}  ->  {new_name}")
            counts["success"] += 1
        except OSError as exc:
            print(f"[ERROR]   {original} -> {new_name}: {exc}")
            counts["error"] += 1

    return counts


def main():
    # JSON und Bilder werden im selben Verzeichnis wie dieses Script erwartet
    base_dir = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(base_dir, "assets.json")

    print("=" * 60)
    print("  rename_assets.py  –  Asset-Umbenennungs-Pipeline")
    print("=" * 60)
    print(f"  Verzeichnis : {base_dir}")
    print(f"  JSON-Quelle : {json_path}")
    print("-" * 60)

    if not os.path.exists(json_path):
        print(f"[FATAL] assets.json nicht gefunden: {json_path}")
        return

    try:
        assets = load_assets(json_path)
    except (json.JSONDecodeError, KeyError) as exc:
        print(f"[FATAL] JSON-Ladefehler: {exc}")
        return

    print(f"  Eintraege geladen: {len(assets)}")
    print("-" * 60)

    counts = rename_assets(base_dir, assets)

    print("=" * 60)
    print("  ERGEBNIS:")
    print(f"    Erfolgreich umbenannt : {counts['success']}")
    print(f"    Uebersprungen         : {counts['skipped']}")
    print(f"    Fehler                : {counts['error']}")
    print("=" * 60)


if __name__ == "__main__":
    main()
