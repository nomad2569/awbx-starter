---
title: '11주차'
category: '미래연구소'
draft: False
date: 2020-09-13 00:00:00
---

# 1교시

8시 반까지 프로젝트 준비

# 2교시

## Batch normalization

![1](./1.PNG)

moving average 를 쓴다.

Batch normalization 은 batch 에서 channel(D) 별로 일어 난다.

parameter 라고 말했지만 이것은 non-trainable 하다. 크게 중요한 내용은 아님.

실제로 학습에 이용되는 parameter는 $\beta, \gamma$ D

Z 에서 normalization 이 일어난다.

![2](./2.PNG)
![3](./3.PNG)

### Detail

$mu$ 와 $sigma^2$ 은 중요하긴 한데 learnable 하진 않다.

$gamma, beta$ 는 learnable parameter

**한 줄의 코드로 구현 가능**

## Internal Covariate Shift

> 내부. 공변량. 변화

> layer 사이 분포 변한다.

0번째 layer 에서는 표준화가 완료된. 동일한 distribution의 input을 받는다.

layer 1: distribution 에 불안정한 input 을 받는다.

줘야할 것과 업데이트 돼야 할게 일치하지 않는 다는 것.

=> Z 를 특정 분포로 제한한다.

=> w, b update 제한

=> 앞쪽 parameter 와 뒷 쪽 parameter 덜 연관.

![4](./4.PNG)

```py
tf.keras.layer.BatchNormalization()
```

layer 바로 뒤에 써준다.

### 단점

1. batch_size 가 너무 작으면 평균, 분산이 너무 부정확하다.

2. RNN 에서는 통계량이 매번 다르다.

Layer normalization 같은 것들이 등장.

# Transfer Learning

> 중요하다. 성능에 결정적인 영향을 미치는 것 중 하나

![4](./4.PNG)

그 한계들을 일부 해소해주는 것이 Transfer Learning 이다.

>> 이번 프로젝트 진행하면서 pretrained 모델 사용해 본 것이 transfer learning 이었군.
