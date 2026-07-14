---
layout: default
title: Home
permalink: /
---

Welcome to **CLIPTrace 2026**, a competition on detecting backdoors in vision-language models and recovering the hidden target feature encoded by an attack.

Participants receive shuffled CLIP checkpoints with full white-box access. Without training data, trigger information, target prompts, or attack configurations, each team must determine which models are backdoored and reconstruct the target semantic embedding for every detected backdoor.

<div class="quick-links" aria-label="Competition quick links">
  <a href="/challenge/"><strong>Read the challenge</strong><span>Tasks, metrics, and submission format</span></a>
  <a href="https://github.com/cliptrace-2026/cliptrace-baseline"><strong>Get the baseline</strong><span>Reference code and reproducible setup</span></a>
  <a href="/timeline/"><strong>Check the timeline</strong><span>Official dates and phase status</span></a>
</div>

---

## News

* **July 14, 2026:** The CLIPTrace 2026 competition website and baseline resources are being prepared for public release.
* Registration, competition dates, and the Codabench entry will be announced after final approval.

---

## Overview

Model sharing makes powerful pretrained and post-trained models easy to reuse, but it also creates a difficult trust problem: a checkpoint may behave normally on ordinary inputs while responding maliciously to a hidden trigger. CLIPTrace turns that problem into a reproducible white-box forensics challenge.

The competition has two coupled tasks:

* **Backdoor Detection** - classify every checkpoint as clean or backdoored.
* **Target Feature Recovery** - recover the normalized 768-dimensional target embedding for each checkpoint predicted as backdoored.

The final score combines detection accuracy (**30%**) and target feature recovery (**70%**). See the [Challenge](/challenge/) page for the complete evaluation protocol.

<div class="metric-grid">
  <div><span>MODEL</span><strong>CLIP ViT-L/14@336</strong></div>
  <div><span>ACCESS</span><strong>Full white-box</strong></div>
  <div><span>OUTPUT</span><strong>768-D embedding</strong></div>
  <div><span>MODELS</span><strong>100 per phase</strong></div>
</div>

---

## Competition phases

Development and final evaluation use the same task definition and scoring rule, with different class proportions and potentially different attack distributions.

| Phase | Clean | Backdoored | Total |
|:--|--:|--:|--:|
| Development / Preliminary | 70 | 30 | 100 |
| Final | 30 | 70 | 100 |

The model order is randomized and ground-truth labels remain hidden. Every backdoored checkpoint corresponds to exactly one hidden target embedding.

---

## Award

The top three teams are expected to receive invitations to the 2026 "Computing the Future" summer program at the Institute of Computing Technology, Chinese Academy of Sciences. Final eligibility and arrangements follow the official organizer notice.

[View the ICT announcement](https://ict.cas.cn/yjsjy/zsxx/sszs/202607/t20260702_8237097.html)

---

## Organizers

CLIPTrace 2026 is organized by researchers from the Institute of Computing Technology, Chinese Academy of Sciences, with support from the Key Laboratory of Intelligent Information Processing.

<div class="organizer-section">
  <div class="organizer-grid">
    <div class="organizer-card">
      <img src="/assets/authors/zhongqi-wang.jpg" alt="Zhongqi Wang" class="organizer-photo">
      <a href="https://robin-wzq.github.io/" class="organizer-name">Zhongqi Wang</a>
    </div>
    <div class="organizer-card">
      <img src="/assets/authors/jing-yang.jpg" alt="Jing Yang" class="organizer-photo">
      <a href="https://vipl.ict.ac.cn/people/jYang/" class="organizer-name">Jing Yang</a>
    </div>
    <div class="organizer-card">
      <img src="/assets/authors/jie-zhang.png" alt="Jie Zhang" class="organizer-photo">
      <a href="https://jiezhang010.github.io/" class="organizer-name">Jie Zhang</a>
    </div>
    <div class="organizer-card">
      <img src="/assets/authors/shiguang-shan.jpg" alt="Shiguang Shan" class="organizer-photo">
      <a href="https://vipl.ict.ac.cn/people/sgshan/" class="organizer-name">Shiguang Shan</a>
    </div>
    <div class="organizer-card">
      <img src="/assets/authors/xilin-chen.png" alt="Xilin Chen" class="organizer-photo">
      <a href="https://vipl.ict.ac.cn/people/xlchen/" class="organizer-name">Xilin Chen</a>
    </div>
  </div>
</div>

---

## Resources

* [Official baseline repository](https://github.com/cliptrace-2026/cliptrace-baseline)
* [Baseline dataset on Hugging Face](https://huggingface.co/datasets/cliptrace-2026/cliptrace-baseline-data)
* Codabench competition page - **coming soon**
