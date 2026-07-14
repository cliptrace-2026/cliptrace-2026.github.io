---
layout: default
title: Getting Started
permalink: /startkit/
---

## Starter kit

The CLIPTrace starter kit provides a reproducible reference pipeline for loading checkpoints, inspecting model behavior, running the baseline detector and target recovery method, and packaging a valid submission.

---

## Repositories and data

* **Code:** [github.com/cliptrace-2026/cliptrace-baseline](https://github.com/cliptrace-2026/cliptrace-baseline)
* **Baseline data:** [huggingface.co/datasets/cliptrace-2026/cliptrace-baseline-data](https://huggingface.co/datasets/cliptrace-2026/cliptrace-baseline-data)
* **Competition platform:** Codabench link coming soon

The baseline repository contains environment instructions, a unified command-line interface, fixed random seeds, CPU smoke tests, GPU configurations, and submission utilities.

---

## Quick start

1. Clone the baseline repository.
2. Create the documented Python environment and install the project.
3. Download or link the development checkpoints when they are released.
4. Run the detector and target feature recovery pipeline.
5. Validate `predictions.json` and every submitted tensor.
6. Package the files at the root of `submission.zip` and upload through Codabench.

```bash
git clone https://github.com/cliptrace-2026/cliptrace-baseline.git
cd cliptrace-baseline
pip install -e ".[test]"
cliptrace --help
```

---

## Expected model input

Each official checkpoint is a complete Hugging Face `CLIPModel` directory based on `openai/clip-vit-large-patch14-336`. Participants have full access to model weights and intermediate features. Image inputs use 336 x 336 resolution, and the projected representation has 768 dimensions.

---

## Submission checklist

Before uploading, confirm that:

* all official model IDs appear exactly once;
* labels are JSON integers `0` or `1`;
* clean predictions use `"embedding_file": null`;
* backdoor predictions reference an existing archive-relative `.pt` file;
* each tensor is a finite CPU `float32` vector with shape `[768]`;
* each tensor has unit L2 norm within `1e-4`;
* the ZIP contains no extra enclosing directory.

For the complete scoring contract, see the [Challenge](/challenge/) page. For invalid submission conditions, see [Terms & FAQs](/rules/).
