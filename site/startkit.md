---
layout: default
title: 参赛指南
permalink: /startkit/
---

## 官方起步工具包

官方起步工具包提供一套可复现的参考流程，用于加载模型检查点、分析模型行为、运行基线检测与反演方法，以及生成符合要求的提交文件。

---

## 代码与数据

* **官方代码：** [CLIPTrace 2026 选手起步仓库](https://github.com/cliptrace-2026/cliptrace-challenge)
* **基线数据：** [Hugging Face 数据集](https://huggingface.co/datasets/cliptrace-2026/cliptrace-baseline-data)
* **比赛模型：** [Hugging Face 比赛模型集](https://huggingface.co/RobinWZQ/cliptrace-2026-models)
* **竞赛平台：** [Codabench 竞赛页面](https://www.codabench.org/competitions/17511/)

起步仓库包含资源下载脚本、DECREE-style 检测与特征反演 baseline、固定随机种子、提交目录模板，以及提交文件检查与打包工具。代码采用直接可修改的脚本结构，方便参赛者替换或扩展 baseline。

---

## 快速开始

1. 克隆官方基线仓库；
2. 按照文档创建 Python 环境并安装项目；
3. 算法开发阶段开始后，从 [Hugging Face 比赛模型集](https://huggingface.co/RobinWZQ/cliptrace-2026-models)获取模型检查点；
4. 运行后门检测与目标特征反演流程；
5. 检查 `predictions.json` 和全部特征文件；
6. 在压缩包根目录正确组织文件，并上传至 [Codabench 竞赛平台](https://www.codabench.org/competitions/17511/)。

```bash
git clone https://github.com/cliptrace-2026/cliptrace-challenge.git
cd cliptrace-challenge
pip install -r requirements.txt
python download_resources.py
cd detection-recovery-track
bash baseline_decree.sh
```

---

## 模型输入

每个官方检查点均为完整的 Hugging Face `CLIPModel` 目录，基础模型为 `openai/clip-vit-large-patch14-336`。参赛者可以访问全部模型权重和中间特征。图像输入尺寸为 336 × 336，投影特征维度为 768。

---

## 提交前检查

上传前请确认：

* 官方清单中的全部模型标识均出现且仅出现一次；
* 分类标签为 JSON 整数 `0` 或 `1`；
* 正常模型的 `embedding_file` 为 `null`；
* 后门模型的 `embedding_file` 指向压缩包内真实存在的 `.pt` 文件；
* 每个特征文件仅包含一个形状为 `[768]` 的有限值 `torch.float32` 张量；
* 张量位于中央处理器设备上，L2 范数与 1 的差值不超过 `1e-4`；
* 压缩包根目录不存在额外的外层文件夹。

完整评分规则请参阅[赛题说明](/challenge/)，无效提交条件请参阅[规则与问答](/rules/)。

