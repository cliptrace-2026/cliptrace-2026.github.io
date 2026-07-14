# CLIPTrace 2026

Official website source for **CLIPTrace 2026: Backdoored Vision-Language Model Detection and Target Feature Recovery Challenge**.

The website uses the public Anti-BAD Challenge Jekyll site as its visual and structural template, with CLIPTrace-specific branding, rules, resources, and organizers.

## Local preview

```bash
bundle install
bundle exec jekyll serve --source site
```

Open <http://localhost:4000>.

## Deployment

Every push to `main` builds `site/` with Jekyll and deploys the result to <https://cliptrace-2026.github.io/> using GitHub Pages.

The baseline is maintained separately at <https://github.com/cliptrace-2026/cliptrace-baseline>.

Site validation, link checking, reduced-motion inspection, and desktop/mobile screenshots run in GitHub Actions.

## Template attribution

The website template is adapted from [anti-bad/anti-bad.github.io](https://github.com/anti-bad/anti-bad.github.io), distributed under the MIT License. The original license notice is retained in `site/LICENSE`.
