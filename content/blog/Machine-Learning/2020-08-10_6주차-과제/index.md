---
title: '6주차 과제'
category: '미래연구소'
draft: False
date: 2020-08-10 00:00:00
---

# 실습 Deep Learning Tutorial

- mnist dataset 을 받아온다
- `plt.imshow` 를 이용하여 확인한다

## 데이터 전처리

- tensorflow 는 기본적으로 `float32` 형을 사용한다. 그러므로, 데이터를 `astype` 을 사용하여 형변환해준다.
- normalize (0~1 범위로 만들어주기)
- flatten (model 만드는 과정 안에서 `Flatten` 을 써서 할 수도 있다.)

### One-hot encoding

```py
from tensorflow.keras.utils import to_categorical
```

을 사용하여 one-hot encoding 을 해준다.

```py
y_train = to_categorical(y_train, 10) # convert class vector to binary class matirx
y_test = to_categorical(y_test, 10)
```

---

이전 실습에서 배운 `Sequential` 과 `Dense` 그리고 `Flatten` 을 이용하여 model 을 구현한다.

매번 kernel 을 재시작하는 것이 귀찮기 때문에 모델 생성 자체를 함수로 만들어 둔다.

---

`model.compile` 함수를 이용한다.

- optimizer

다음 강의에서

- loss

loss 함수를 설정한다.

1. regression = 'mse'
2. binary classification = 'binary_crossentropy'
3. multiclass classification

one-hot encoding 을 안했다 = sparse_categorical_crossentropy
했다 = categorical_crossentropy

거의 다 one-hot encoding 한다.

- metrics

모델을 평가하는 지표들을 리스트로 넣어준다

## 학습

`fit` 메소드를 이용한다.

1> x: feature = input

2> y: label

3> epochs (7주차) (이전에 잠시 언급: 전체 training data를 train 하는 횟수)

4> verbose: train할 때 표시되는 bar (숫자를 추가할수록 기능이 추가되지만 보통 1을 사용

5> validation_split

- 여기서 data split을 할 수 있다.
- x로 들어가는 data 중 validation set에 할당할 비율을 할당한다. (0~1사이의 float)

6> validation_data

- 미리 data를 잘라 두었다면 'validation_data = (x_val, y_val)' 식으로 할당해도 된다.

나머지는 크게 중요하지 않습니다. (향후 등장할 개념: batch_size, callbacks)

저번에 배운 `train_test_split` 으로 test data set 을 만든 뒤에 validation_data 에 넣어준다.

이 `model.fit` 은 train 과정에서 일어나는 현상들을 기록한 데이터를 return 한다.

# 과제 : Deep Learning tutorial, Prevent overfit

실수한 것

1. output layer 의 unit 개수는 data 의 class 개수와 같아야 하는데 (10개) 기존에 하던 것과 착각해서 1개로 함

# 프로젝트 data set 주제 정하기

> kaggle 에서 골라보자

[전 세계의 인기있는 웹사이트](https://www.kaggle.com/bpali26/popular-websites-across-the-globe/discussion)

[미슐랭-레스토랑](https://www.kaggle.com/jackywang529/michelin-restaurants)
