---
layout: default
title: Terms & FAQs
permalink: /rules/
---

## Terms

Submissions must be original, fair, and reproducible. Participants retain ownership of their methods and code, while granting the organizers permission to run submitted artifacts for evaluation and verification. Final platform terms take precedence if they differ from this preview.

Participants may use public external data, pretrained models, and generated data. Every team remains responsible for complying with the licenses, privacy requirements, and usage terms of those resources.

Attempts to access hidden labels, exploit scoring infrastructure, interfere with other participants, or evade submission limits may result in disqualification.

---

## Invalid submissions

A submission may be rejected when:

* the ZIP cannot be extracted or lacks `predictions.json` at its root;
* JSON parsing fails, required fields have incorrect types, or model IDs are duplicated or missing;
* a label is not the integer `0` or `1`;
* a backdoor prediction has a missing, unsafe, or nonexistent embedding path;
* a `.pt` file cannot be safely loaded;
* a tensor has the wrong shape or type, is not on CPU, contains non-finite values, or is not normalized.

The official evaluator may assign zero recovery credit to an individual invalid embedding while rejecting structural JSON or model-list errors for the entire submission.

---

## Submission limits

* **Development phase:** up to 3 submissions per account per day.
* **Final phase:** up to 2 submissions per account per day.

Limits are enforced according to the Codabench clock and may be adjusted in the final platform configuration.

---

## Frequently asked questions

### What information is provided with each checkpoint?

Participants receive a complete CLIP checkpoint and may inspect parameters and intermediate features. Training data, true labels, target prompts, trigger information, and attack configurations are withheld.

### Do clean predictions need an embedding?

No. When `label = 0`, `embedding_file` must be `null`.

### What is the recovery vector dimension?

Exactly 768 values, saved as a single L2-normalized CPU `torch.float32` tensor.

### Are confidence scores accepted for detection?

No. Detection accepts only the discrete integer labels `0` and `1`.

### Does the challenge include multi-target backdoors?

No. Each backdoored checkpoint corresponds to one hidden target embedding.

### May teams use external resources?

Yes. Public data, external pretrained models, and generated data are allowed, provided their licenses and terms are respected.

### When will registration open?

Registration and phase dates are awaiting final approval. Monitor the [Important Dates](/timeline/) page and this repository for updates.

### Where can I report a website or baseline issue?

Use the issue tracker in the relevant GitHub repository. Competition-specific communication channels will be added when registration opens.
