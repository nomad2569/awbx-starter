---
title: '8주차'
category: '미래연구소'
draft: False
date: 2020-08-23 00:00:00
---

# CNN

사람의 시각자극 처리 방법 을 본따 만들었다.

뇌는 작은 자극들부터 반응한다.

1. **특정 feature 를 detect 하는 뉴런이 필요하다.**

뇌는 인접 정보를 읽는다.

2. **인접 feature 를 detect 하는 뉴런이 필요하다.**

뇌는 공간 정보를 계층적으로 학습한다.

3. **feature 를 계층적으로 학습할 필요가 있다.**

# Fully-Connected Layer

## 문제점

변형되면 인식하지 못함.

이미지를 전부 다 flatten 시키기 때문에 전체 feature 들의 조합만으로만 가능하다.

부분적인 분석(인접한 것)이 불가능하다는 것

**필요한 정보만 효율적으로 조금씩 읽자**

# Convolutional Layer

filter 가 input data 각 부분을 비교하면서 filter 와의 연관성을 알아냄.

element wise product 를 통해서 수치로 나타낼 수 있다.

이것을 통해 **locally-connected** 인 연산을 할 수 있어 효율적이다.

이것을 통해 Fully-Connected Layer 의 2가지 문제점이 해결되었다.

# Lecture : Convolutions over volumes

RGB 는 (3채널) 3차원 행렬을 가지기 때문에, 3차원 filter 를 준비한다.

6 \* 6 \* 3 img 라면 filter 는 3 \* 3 \* 3 인 것을 준비하는 것이다.

그 결과는 4 \* 4 인 평면 행렬이 될 것이다.

처음에 배웠던 예시와 비슷하지만, 단지 큐브로 바뀌었을 뿐이다.

filter 는 가로 세로는 다르겠지만 항상 channel 은 같을 것이다.

## 동시에 여러 필터를 사용하고 싶다면?

각 필터를 적용시켜서 각자의 아웃풋을 구한다.

그런 뒤, 각자의 아웃풋을 쌓는다.

마지막 결과는 $(n-f+1 , n-f+1 , n_c)$ 일 것이다.

$n_c$ 는 사용된 필터의 갯수

Convolution Layer 를 Dense Layer 라고 생각해도 된다

filter 가 w 의 역할을 함.

w를 찾는 것처럼 최적의 filter 를 찾는것

너무 많은 filter 가 있으면 overfitting 되므로 최적의 filter 개수도 중요학ㅆ군

앞의 layer 는 단순한 edge feature 추출

다음 layer 는 이들을 convolution 해서 더 복잡한 feature 추출

-> 공간적인 계층 구조를 학습

## hyperparameter

1. kernel_size

아까 filter 크기 . 홀수를 쓰는 것이 기본, 대부분 3x3 사용

2. filters = kernel 의 개수

> 역연산 할 때 중간점을 기준으로 하기 때문에.. padding 때문에..

## transfer learning

앞 부분의 layer 는 비슷하기 때문에 그 앞 부분 layer 를 다른 data 에서도 재활용해서 쓸 수 있다.

## padding

바깥을 0으로 덧대준다.

output size가 줄어드는 것을 막는다.

edge 부근의 feature 도 잘 추출할 수 있다.

원래의 feature를 희석하여 overfitting 을 방지 (부수적 효과)

### parameter

1. valid (default 로는 padding 을 주지 않는다)
2. same (padding으로 output size 와 input size가 같게끔 만든다.)

> padding 거의 안 쓴다. 압축하려고 쓰는건데 이거 쓰면 압축이 안됨. <p/>
> 웬만하면 안씀

## pooling - maxpooling

설정한 pool_size 안에서 가장 큰 값을 대표로하여 downsampling

### hyperparameter

1. pool_size (2,2) (3,3)
2. stride = None (default = pool_szie)
   얼마나 미끄러질건지
3. padding
   웬만하면 maxpooling 할 때 padding 을 same 을 주지는 않는다.

## stride

convolution 연산을 몇 칸씩 이동하며 진행할 것인지.

세로 가로 방향으로 (2,2) 이렇게 넣어줌.

conv 후 maxpooling 하는 것보다는 stride 가 더 연산량이 적고.. 최근 논문들에서 stride 많이 쓴다.

## Qu

32x32x3 input 에다가

5x5 filter 10개를 stride 1, padding 2 를 주어 통과시킨다면

Output volume size는 무엇일까?

32x32x10

\# parameters

(5\*5\*3 +1) + 10 = 760

(3,3) 만 써도 자동으로 channel 맞춰준다고 생각하자

pdf 에 가려져있는 숫자 추측하면서 이해해보자.

Conv2D 인 이유

: 2 Direction 오른쪽, 아래 방향으로 하기 때문에

나중엔 1D 도 배울 것. (NLP)

# matplotlib

matplotlib 을 잘 다루는 것을 목표로 하기 보다는

시각화하는 원리 와 시각화 하는 과정에서 나오는 용어를 파악하여

추후 공식 홈페이지의 코드나 설명을 읽는데 편해지는 것을 주로 하자.

Figure : 그림 그 자체

Axes : 그 안에 그릴 그림

Legend

Grid

tick

Marker

실습 자료보면서 한번 돌이켜보자
