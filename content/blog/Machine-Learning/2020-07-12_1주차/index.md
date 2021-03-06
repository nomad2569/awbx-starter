---
title: '1주차'
date: 2020-07-02 16:21:13
category: '미래연구소'
draft: false
---

[미래연구소](http://futurelab.creatorlink.net/)

_1교시에 늦어서 2교시부터 수업을 들었다_

---

### 1교시

### 2교시

#### 영상 2. What is a neural network (C1W1L02)

주택 data set의 예시를 들며 ReLU를 배웠다.

X -> reLU -> Y 의 중첩(neural network)을 통해 Y를 결정해낼 수 있다.
EX) 선형회귀

`Input` `x` : `features`
`output` `y` : `label`

**Deep learning**은 블랙 박스의 역할이다.

=> 중간층의 인과를 정확히 설명할 순 없다.

=> **Hidden Node**

=> 가중치를 통한 분별이다

=> ML은 **features engineering**을 하기 때문에 복잡하지만, DL은 알아서 필요없는 요소의 가중치를 죽임.

이것이 **Deep learning**의 단점이자 한계라 볼 수 있으나 많은 연구를 통해 개선하는 중이다

=> 연역적인 방법이 아닌 귀납적 추론

`Standard` `Convolutonal` `recurrent NN`

- Structured Data : 엑셀 같은 것. DB
- Unstructured Data : 소리, 이미지 ,문자열

---

### 3교시

- 3교시
  한국어 영상
  현실의 데이터셋이 선형적인 분포를 띠는 경우가 많기에 **linear regression**이 효과적일 수 있다.

Ex) 공부 많이 하면 성적이 높다

어떤 가설(직선)이 정확한가>

 1. Error가 작을수록 좋다 Cost function

 SSE을 통해 양수 음수 구별 없이 한다.

 Cost(기울기, y 절편) 는 SSE을 m으로 나눈 것

 Cost가 작을수록 fit

 Cost가 가장 작은 W, b 를 찾는게 학습

 미분으로 찾을 수 있지만 많은 양의 데이터를
컴퓨터가 하기 힘듦.

 Gradient descent algorithm 으로 찾는다.

Lecutre 3

**경사하강법** : Cost function을 최소화하는데 쓰인다.

J = Cost(w,b) 에서 해당 부분의 경사를 계산하여
알파(learning rate) 만큼 내려가서 기울기가 0에
수렴하는 W를 찾아냄.

알파가 작아진다면 global minimum에 늦게 도착하겠으나 정확할 것.

알파가 커진다면 학습은 빠르지만 부정확할 수 있다.

초기점을 무엇으로 잡을 것이냐?

초기점을 잘 잡으면 학습이 빠를 것

탈출에 대한 이슈가 있음

항상 답을 찾을 수 잇는 func => convex function

Convex function이라는 것이 확인된다면 경사하강법
바로 가능
