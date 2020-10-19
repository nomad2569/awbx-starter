---
title: '[기계학습] [14회차] K-means Clustering'
date: 2020-10-19 16:21:13
category: '기계학습'
draft: false
---

## K-Means Clustering Example

각각 어느 centroid  에 가까운지를 비교한다. 가까운 것 끼리 묶은 뒤에 centroid 를 cluster 의 중심으로 옮겨 반복한다. centroid 가 mean 과 같아져서 더 이상 움직일 수 없을 때 그만한다.

### Algorithm

1. initial mean 을 정한다. centroid 를 정하는 것. K 개 만큼 필요할 것이다.
2. one hot vector $z_t$ 를 사용하여 각 sample 들이 어떤 cluster 에 가장 가까운지 알아낸다.
3. 자기 자신 cluster 에 속한 sample mean 을 알아내어서 mean 을 갱신한다.

그렇다면 초기 centroid 값은 어떻게 정할까?

가장 쉬운 방법은 **random** 하게 정하는 **K 개** 를 정하는 것이다.

조금 더 복잡한 방법은 전체 데이터의 평균을 구하고, 작은 random vector 를 더하고 빼서 두 개의 centroid 가 생긴다. 만약 K 개로 나눈다 이러면 small random vector 를 k 개를 준비하여 초기 centroid 를 만들면 되겠다.

좀 더 복잡한 방법은 전체 데이터를 가지고 **PCA** 를 한다. 분산이 가장 큰 축을 찾아서, 해당 축을 기준으로 **K 등분** 을 한다. 각 등분에 속한 각각의 mean 을 구하여 그것을 centroid 로 쓴다.

마지막 방법은 K means 를 increment 하게 하는 것이다. 처음에는 **K=1**, 다음엔 **K=2** 를 한 뒤 그 상황에서 error 가 더 큰 cluster 를 찾아서 그 cluster 를 두 개의 cluster 로 분리한다. 다시 또 3 개의 cluster 를 가지고 **K=3** K-means clustering 을 한다. 그 뒤 error 가 가장 큰 cluster 를 찾아서.....

## Vector Quantization

> 만약 3.14 다 이러면 실수를 컴퓨터에 표현하기가 곤란하니깐.. 적은 비트 수로 나타내기 위해서 정량화를 하는 것이다. scalar 를 가지고 Quantize 한다. 이런다면, 실수를 가까운 정수로 quantize 할 수 있다. 하지만, vector 일 때는 어떨 것인가? 2차원이라면 바둑판의 교점들에 가까운 것에 quantize 할 수 있다. 하지만, 효율적이지 않다. **K-means** 를 쓰는 것이 가장 효과적이다!

### Encoding and Decoding

먼저 k-means 를 한다. centroid 하나를 code word, centroid 라 한다. centroid 를 다 모아둔 것을 code book 이라 한다. 먼저 code book 을 만든다.

**Encoding** : 가장 가까운 code word 를 찾는다.

code book 과 encoded 된 것이 있다면 decoding 가능하다.
하지만, error 가 발생한다.

### Reconstruction Error

원본과의 차이. 빼고 제곱하여 N 으로 나눈 것. **total reconstruction error** 이라하자. kmeans 로 하면 최소가 되는 것들을 찾을 수 잇다.

## Semiparametric Density Estimation

해당 cluster 에 속하느냐 아니냐를 0, 1. **one hot vector** 로 나타낸다.

## Association Rules

> basket analysis 에 사용된다고 말했죠 만약 맥주를 안주랑 같이 산다 이러면은

**Confidence** 높아야 좋다. 맥주를 산 사람을 맥주를 사고 안주도 산 사람으로 나눈 것.

**Support** 높아야 좋다. 전체 고객을 맥주를 사고 안주도 산 사람으로 나눈 것.

**Lift(interest)** $\frac{P(x,y)}{P(x)P(y)}$

## Apriori Algorithm

엄청나게 큰 마트. 이마트에서 database 를 이용하여 Association Rule 들이 높은 것을 찾아내려 한다.

1. **support** 가 높은 것을 뽑느다. P(a,b,c) 가 크다면, P(a,b) 도 크고 P(a,c) 도 크고, P(b,c) 도 크기 때문이다.