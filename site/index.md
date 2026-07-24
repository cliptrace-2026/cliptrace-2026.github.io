---
layout: default
title: 首页
permalink: /
---

欢迎参加**后门模型检测与反演挑战赛**。本赛事聚焦视觉语言模型中的隐蔽后门风险，要求参赛者识别被植入后门的模型，并反演攻击者隐藏在模型中的目标语义特征。

参赛者将获得一组顺序随机打乱的 CLIP 模型检查点，并拥有完整的白盒访问权限。在不提供训练数据、触发器、目标提示词和攻击配置的条件下，参赛队伍需要判断每个模型是否包含后门，并为检测出的后门模型恢复对应的目标特征向量。

<div class="quick-links" aria-label="赛事快捷入口">
  <a href="https://www.codabench.org/competitions/17511/"><strong>进入竞赛平台</strong><span>报名、提交与官方成绩</span></a>
  <a href="https://huggingface.co/RobinWZQ/cliptrace-2026-models"><strong>下载比赛模型</strong><span>官方 CLIP 模型检查点</span></a>
  <a href="/timeline/"><strong>查看重要日期</strong><span>竞赛阶段与时间安排</span></a>
</div>

---

## 最新消息

* **正式赛程：** 2026 年 7 月 28 日至 8 月 6 日进行算法开发，8 月 7 日至 8 月 8 日由赛事方复核代码，8 月 8 日公布结果。
* **官方入口：** [Codabench 竞赛平台](https://www.codabench.org/competitions/17511/)与 [Hugging Face 比赛模型集](https://huggingface.co/RobinWZQ/cliptrace-2026-models)现已公布。

---

## 赛事概述

预训练模型和后训练模型的开放共享大幅降低了模型使用门槛，但也带来了新的可信风险：一个模型可能在普通输入上表现正常，却在遇到特定隐藏触发器时产生攻击者预设的恶意行为。本赛事将这一问题转化为可复现、可量化的白盒模型取证任务。

赛事包含两个相互关联的任务：

* **后门模型检测：** 判断每个模型是正常模型还是后门模型。
* **目标特征反演：** 为每个被预测为后门的模型恢复其隐藏目标语义特征。

最终成绩由后门检测准确率（**30%**）与目标特征反演得分（**70%**）共同组成。完整评测协议请参阅[赛题说明](/challenge/)页面。

<div class="metric-grid">
  <div><span>模型架构</span><strong>CLIP ViT-L/14@336</strong></div>
  <div><span>访问方式</span><strong>完整白盒访问</strong></div>
  <div><span>反演输出</span><strong>768 维特征向量</strong></div>
  <div><span>阶段规模</span><strong>每阶段 100 个模型</strong></div>
</div>

---

## 竞赛阶段

每个阶段包含 100 个顺序随机打乱的模型，其中后门模型数量未知。每个后门模型仅对应一个隐藏目标特征，不包含多目标后门情形。

<table class="timeline-table">
  <thead><tr><th>阶段</th><th>日期</th></tr></thead>
  <tbody>
    <tr><td>算法开发</td><td>2026 年 7 月 28 日—8 月 6 日</td></tr>
    <tr><td>赛事方代码复核</td><td>2026 年 8 月 7 日—8 月 8 日</td></tr>
    <tr><td>结果公布</td><td>2026 年 8 月 8 日</td></tr>
  </tbody>
</table>

详细安排请参阅[重要日期](/timeline/)页面，报名与提交以 [Codabench 竞赛平台](https://www.codabench.org/competitions/17511/)公告为准。

---

## 赛事奖励

本次挑战赛拟设置以下奖项：

* 一等奖：3 项，颁发证书及奖金（具体金额待定）；
* 二等奖：6 项，颁发证书及奖金（具体金额待定）；
* 三等奖：若干项，颁发证书。

线上参赛，线下领奖。优秀参赛团队将有机会受邀参加 8 月 15 日的暑期学校，并获得奖金和奖励证书。

---

## 组织者

主办单位：中国科学院计算技术研究所

承办单位：智能算法安全全国重点实验室

<div class="organizer-section">
  <div class="organizer-grid">
    <div class="organizer-card">
      <img src="/assets/authors/zhongqi-wang.jpg" alt="王中琦" class="organizer-photo">
      <a href="https://robin-wzq.github.io/" class="organizer-name">王中琦</a>
    </div>
    <div class="organizer-card">
      <img src="/assets/authors/jing-yang.jpg" alt="杨竞" class="organizer-photo">
      <a href="https://vipl.ict.ac.cn/people/jYang/" class="organizer-name">杨竞</a>
    </div>
    <div class="organizer-card">
      <img src="/assets/authors/jie-zhang.png" alt="张杰" class="organizer-photo">
      <a href="https://jiezhang010.github.io/" class="organizer-name">张杰</a>
    </div>
    <div class="organizer-card">
      <img src="/assets/authors/shiguang-shan.jpg" alt="山世光" class="organizer-photo">
      <a href="https://vipl.ict.ac.cn/people/sgshan/" class="organizer-name">山世光</a>
    </div>
    <div class="organizer-card">
      <img src="/assets/authors/xilin-chen.png" alt="陈熙霖" class="organizer-photo">
      <a href="https://vipl.ict.ac.cn/people/xlchen/" class="organizer-name">陈熙霖</a>
    </div>
  </div>
</div>

---

## 联系方式

如有问题或咨询，请通过以下方式联系我们：

* **邮箱：** [wangzhongqi23s@ict.ac.cn](mailto:wangzhongqi23s@ict.ac.cn)
* **QQ群：** 906907183

---

## 赛事资源

* [选手起步仓库与官方 baseline](https://github.com/cliptrace-2026/cliptrace-challenge)
* [基线数据集](https://huggingface.co/datasets/cliptrace-2026/cliptrace-baseline-data)
* [比赛模型集](https://huggingface.co/RobinWZQ/cliptrace-2026-models)
* [Codabench 竞赛平台](https://www.codabench.org/competitions/17511/)

