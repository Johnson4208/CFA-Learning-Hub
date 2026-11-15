"""Regenerate the English UI from the canonical Vietnamese app and translation catalog."""
from pathlib import Path
import json, re
p = Path(__file__).resolve().parent
mapping = json.loads((p / 'translations.json').read_text())
source = (p / 'app.js').read_text()
pattern = re.compile('|'.join(re.escape(k) for k in sorted(mapping, key=len, reverse=True)))
(p / 'app-en.js').write_text(pattern.sub(lambda match: mapping[match.group()], source))
