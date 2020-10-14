---
title: '[기계학습] [12회차] Multivariate Regression'
date: 2020-10-08 16:21:13
category: '기계학습'
draft: false
---

# MAP estimation

학생들의 키를 전부 다 조사해서 n 으로 나누는게 MLE 방식이었다. 만약 나온 값이 180. 평균 키가 180 이 나왔다면 모든 인구의 평균키와는 사뭇 다른 결과라는 것을 알 수 있다. 그렇다면 이것을 믿어야하는가? 이런 경우에 **Maximum a posteriori. MAP** estimation 을 쓴다. 해당 데이터를 관측했는대 $\theta$ 가 맞을 확률의 argmax 가 MAP 이다.

## MAP estimation for categorical distribution

conjugate prior