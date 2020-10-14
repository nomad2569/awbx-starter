---
title: '[뇌및머신러닝입문] 10회차'
category: '뇌및머신러닝입문'
date: 2020-10-13 00:00:00
draft: False
---

# Logistice Regression

output y 가 logistic sigmoid 가 probability 로 해석 될 수 있다. 0과 1사이의 값이기 때문이다.
**sigmoid function** 을 씌우면 0에서 1사이의 값이 되는데

이는 sigmoid 가

$\sigma(t) = \frac{1}{1 + e^{-t}}$ 

이기 때문이다. linear regression 과 다른점은 sigmoid 를 씌웠는지 씌우지 않았는지이다. 

loss function 으로 MSE 를 쓰지만 classification 에서는 다른 loss function 을 쓴다. 최종적인 목표는 loss function 의 값을 줄이는 것이다.

logistic cost function 