from __future__ import annotations

import json
from pathlib import Path


def read_table(path: Path) -> dict[str, list[str]]:
    lines = path.read_text(encoding="utf-8").splitlines()
    header = [part.strip() for part in lines[0].split("\t")]
    data: dict[str, list[str]] = {region: [] for region in header}

    for row in lines[1:]:
        parts = row.split("\t")
        if len(parts) < len(header):
            parts += [""] * (len(header) - len(parts))
        for region, value in zip(header, parts):
            value = value.strip()
            if value:
                data[region].append(value)
    return data


def split_types(data: dict[str, list[str]]) -> dict[str, dict[str, list[str]]]:
    result: dict[str, dict[str, list[str]]] = {}

    for region, names in data.items():
        full: list[str] = []
        logistics: list[str] = []

        for name in names:
            if name.startswith("ПСЦ") or name.startswith("МРФЦ") or "ПСЦ" in name:
                target = full
            else:
                target = logistics

            if name not in target:
                target.append(name)

        result[region] = {
            "FullFilment": full,
            "Логистика": logistics,
        }

    return result


def main() -> None:
    desktop = Path.home() / "Desktop"
    source = desktop / "Новый текстовый документ (2).txt"
    if not source.exists():
        raise SystemExit(f"File not found: {source}")

    data = read_table(source)
    structured = split_types(data)
    print(json.dumps(structured, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

