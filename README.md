# CLIPTrace 2026

Official website source for **CLIPTrace 2026: Backdoored Vision-Language Model Detection and Target Feature Recovery Challenge**.

## Local preview

```bash
python -m http.server 8000 --directory site
```

Open <http://localhost:8000>.

## Deployment

Every push to `main` deploys `site/` to <https://cliptrace-2026.github.io/> using GitHub Pages.

The baseline is maintained separately at <https://github.com/cliptrace-2026/cliptrace-baseline>.

Site validation, link checking, reduced-motion layout inspection, and desktop/
mobile screenshots run in GitHub Actions.
