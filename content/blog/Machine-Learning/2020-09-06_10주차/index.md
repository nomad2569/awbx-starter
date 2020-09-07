---
title: '10주차'
category: '미래연구소'
draft: False
date: 2020-09-06 00:00:00
---

## Image generator

## Parameter 조절 기능들

### Early stopping

잘 안쓰는 듯

### Learning Rate Scheuler

시간이 지날수록 Learning Rate 가 줄어든다.

- ReduceLRonPlateau

# Hyperparameter Tuning

어떤 값으로 설정하는 것이 보통 좋은가?

**Model**

- \# layer : (1~10 layers for MLP, ~152 or ~1000 layers for CNN)
- \# unit (very flexible 10 ~ 1024)

**Optimization**

_underfit 극복_

- optimizer
- learning rate (log scale 조정)

_overfit 극복_

- L2 coefficients
- dropout rate
- batch size
- epoch
