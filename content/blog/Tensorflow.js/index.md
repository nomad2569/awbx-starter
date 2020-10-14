---
title: '[Tensorflow.js] 자료조사'
category: 'Tensorflow.js'
draft: False
date: 2020-09-23 00:00:00
---

> KWEB 2020 가을학기 주제를 **웹기반 머신러닝을 활용하여 프로젝트 하기** 로 하여 **Tensorflow.js** 에 대해 조사해보았다.

---

**Tensorflow.js** 는

[A Gentle Inroduction to Tensorflow.js](https://medium.com/tensorflow/a-gentle-introduction-to-tensorflow-js-dba2e5257702)

[Udemy 강좌](https://www.udemy.com/course/tensorflowjs-crash-course-2020/learn/lecture/16712552#overview)

# Udemy 강좌 요약

## Intro

- google 이 만듦
- C++ 로 쓰임
- 모든 활동을 web 위에서 가능

ML 을 위해 CPU 와 GPU 가 필요하지만 JS 는 GPU 위에서 돌아가지 않는다.
이를 해결하기 위해서 `WebGL` 이 만들어졌다. 이는 JS 가 GPU 위에서 작동할 수 있도록 해준다.

`Tensorflow.js` 는

1. The Core Api
2. The Layer Api

를 제공하는데 1번은 Low level 이고 2번째는 쉬운 것

## Tensors

1. Scalar
2. Vector
3. Matrix
4. N-Tensor

의 generalized form 이 **tensor** 이다.

각 tensor 는

1. Rank (values)
2. shape
3. data type

을 가진다.

## Variable & Operations

`tensorflow.js` 쓰기 위해선 두 가지 방법이 있다.

1. npm 을 통해 설치
2. script tag 사용

3.
4. <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js"></script>

**실습**

## Memoty Leak
$$