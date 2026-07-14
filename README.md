# Astro font hash repro

Local-provider font filenames from the Fonts API depend on the project's absolute path, not just the font's content. Same project, different directory → different `/_astro/fonts/<hash>.woff2`.

```sh
git clone https://github.com/AdamLMark/astro-font-hash-repro a
git clone https://github.com/AdamLMark/astro-font-hash-repro b
cd a && npm install && npm run build && ls dist/_astro/fonts/
cd ../b && npm install && npm run build && ls dist/_astro/fonts/
```

The two `ls` outputs differ; everything else in `dist/_astro/` is identical.

Cause: `FsFontFileContentResolver.resolve()` returns `url + readFileSync(url)` for local fonts, and `BuildFontFileIdGenerator` hashes that string to name the emitted file — so the absolute path is part of the hash input.
