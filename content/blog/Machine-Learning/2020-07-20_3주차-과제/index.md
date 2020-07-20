---
title: '3주차 과제'
date: 2020-07-20 08:21:11
category: '미래연구소'
draft: false
---

# Cat classification

```py
!python -m pip install opencv-python
```

> cv2 설치를 위해 pip를 통해서 설치해준다

```py
import numpy as np
import matplotlib.pyplot as plt
import h5py
import cv2
import PIL.Image as pilimg

%matplotlib inline
```

## Data

### Data 업로드

```py
def load_dataset():
    train_dataset = h5py.File('images/train_catvnoncat.h5', "r")
    train_set_x_orig = np.array(train_dataset["train_set_x"][:]) # your train set features
    train_set_y= np.array(train_dataset["train_set_y"][:]) # your train set labels

    test_dataset = h5py.File('images/test_catvnoncat.h5', "r")
    test_set_x_orig = np.array(test_dataset["test_set_x"][:]) # your test set features
    test_set_y = np.array(test_dataset["test_set_y"][:]) # your test set labels

    classes = np.array([b'non-cat', b'cat']) # the list of classes

    train_set_y= train_set_y.reshape((1, train_set_y.shape[0]))
    test_set_y = test_set_y.reshape((1, test_set_y.shape[0]))

    return train_set_x_orig, train_set_y, test_set_x_orig, test_set_y, classes
```

```py
# Loading the data (cat/non-cat)
train_set_x_orig, train_set_y, test_set_x_orig, test_set_y, classes = load_dataset()
```

```py
train_set_x_orig.shape
```

```
(200, 64, 64, 3)
```

- tranining data : $(x, y)$ 성능 향상을 위한 data == 문제집
- test data : $(x,y)$ 성능 측정 => 학습을 위한 것이 아니라 점수 매기는 data == 수능
- `train_set_x_orig` : 전처리 하기 전의 날것의 data

- 이 과제에서의 dataset 설명
  - training set, test set 에는 각 m_train, m_test 개의 이미지가 존재하며 이미지들은 cat(1) or non-cat(0) 으로 label 되어져 있다.
  - 각 이미지는 (`num_px`,`num_px`,3) 으로 이루어져있는 3channel RGB 이다.
