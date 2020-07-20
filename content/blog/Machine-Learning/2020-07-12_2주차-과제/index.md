---
title: '2주차 과제'
date: 2020-07-13 18:11:13
category: '미래연구소'
draft: false
thumbnail: "../../assets/report.png"
---

# 과제 기본 설명

```py
1. 기본
1) 기본: 'shift + enter' 로 각 셀을 실행합니다.

2) ###START CODE HERE ### 와 ### END CODE HERE ### 사이의 빈 칸에 답을 적으시면 됩니다.

3) (= X lines of code) 라고 적혀 있으면, X개의 줄 만큼의 답을 적으시면 됩니다.

4) 빈칸 이외의 부분은 건드리지 말아주세요.

5) 셀은 위에서부터 순서대로 실행해주세요.

6) 여유가 되신다면 빈칸 이외의 부분도 관심을 가지고 공부하는 것도 추천드립니다.

2. 자꾸 error 가 날 때
1) 처음부터 끝까지 순서대로 다시 실행 (특히, import 했는지 확인해보기)

2) 문제를 잘 읽었는지 확인해보기

3) 대소문자를 구별해서 적었는지 확인해주세요.

4) 튜터에게 error 부분 스샷 잘 찍어서 질문하기

3. 셀이 실행 안 될 때
1) 좌측 상단에서 kernel -> Restart kernel 실행

<빈칸에 들어갈 함수 목록>
각 함수를 찾아 가면서 문제를 풀어주세요.
1. shift + tab == np.info('궁금한 함수')

2. np.lookfor('일부만 기억나는 함수')

3. numpy 공식 문서 검색

4. 구글링

5. 튜터 질문

(검색은 왼쪽의 포맷으로 하셔야 하는데 실제 답안 작성할 때는 오른쪽 형식으로 해야 합니다.)
자세한 건 찾으면서 배우는 게 좋습니다.

1) numpy.dot / np.dot()

2) numpy.sum / np.sum()

3) numpy.ndarray.shape / X.shape

4) numpy.ndarray.T / X.T

5) numpy.ndarray.reshape / X.reshape()

6) numpy.exp / np.exp()

7) numpy.multiply / np.multiply()

8) numpy.arange / np.arange()

```

# Question 1

>**조건** : X1, A1, B1 모두 2-D array이다. X1 = A1B1(행렬 곱)의 관계를 가진다.<p/>**문제** : 해당 for loop을 vectorization 하시오.
```py
# 문제 설정

n1, m1 = 8, 4
np.random.seed(1)

X1_for_loop = np.zeros((n1,1))
A1 = np.random.rand(n1,m1)
B1 = np.random.rand(m1,1)

# for loop

for i in range(n1):
    for j in range(m1):
        X1_for_loop[i] += A1[i][j] *B1[j]

X1_for_loop
```
```py
# vectorization

### START CODE HERE ### (≈ 1 line of code)
X1_vectorization = np.dot(A1,B1)
### END CODE HERE ###
X1_vectorization
```
```py
# 해당 셀이 문제없이 실행되어야 정답입니다.

assert(X1_for_loop[5] == X1_vectorization[5])
```
---
## Solution
`A1`은 $n1,m1$ 인 행렬이고 `B1`은 $m1,1$인 행렬이다.

두 행렬을 $n1,1$으로 vectorization 하기 위해서 `A1`과 `B1`을 `np.dot` 연산을 이용하여 곱해주었다.

`A1`의 열과 `B1`의 행이 같기에 가능하다.

# Question 2

>조건: X2 = [x1, x2, ...], A2 = [exp(x1), exp(x2), ...]<p/>문제: 해당 for loop을 vectorization 하시오.

>> $exp(x) = e^x$

```py
# 기본 설정
import math

n2 = 8
np.random.seed(1)
X2 = np.random.rand(n2,1)
A2_for_loop = np.zeros((n2,1))
A2_vectorization = np.zeros((n2,1))

# for loop

for i in range(n2):
    A2_for_loop[i] = math.exp(X2[i])
    
A2_for_loop

```

```py
# vectorization

### START CODE HERE ### (≈ 1 line of code)
A2_vectorization = np.exp(X2)
### END CODE HERE ###
A2_vectorization
```

```py
# 해당 셀이 문제없이 실행되어야 정답입니다.

assert(np.array(A2_for_loop == A2_vectorization).all)

```
---
## Solution
$n2,1$ 인 행렬 X2를 exp 취하여 $e^x$ 꼴의 $n2,1$ 행렬로 만드는 것이 목적이다.


```py
np.exp (x, /, out=None, *, where=True, casting='same_kind', order='K', dtype=None, subok=True[, signature, extobj])
```
`exp` method의 input `x`가 `array_like` 일 수 있다는 것을 알았다.

# Question 3

**조건:** $$X3 = 
\begin{bmatrix}
    1 & 2 & 3 & 4 \\
    5 & 6 & 7 & 8 \\
    3 & 4 & 5 & 6 \\
\end{bmatrix}$$

**문제:** 주어진 nd array의 shape을 구하시오

```py
# 기본 설정

X3 = np.array([[1,2,3,4],[5,6,7,8],[3,4,5,6]])

### START CODE HERE ### (≈ 1 line of code)
ans = X3.shape
### END CODE HERE ###
ans
```

```py
# 해당 셀이 문제없이 실행되어야 정답입니다.

assert(ans[1]-ans[0])
```

## Solution
단순히 `array-like` 이 가지고 있는 `tuple` 인 `.shpae`을 써보는 문제였다.

문제 자체보다는, markdown으로 matrix를 표현할 수 있다는 점을 배웠다.


# Question 4

**조건:** (X를 임의의 nd array라 할 때) np.arange()와 X.reshape을 사용해보기

$$X4$$ $$ = 
\begin{bmatrix}
    0 & 1 \\
    2 & 3 \\
    4 & 5 \\
    6 & 7 \\
\end{bmatrix}$$

**문제:** 위의 nd array를 조건을 이용해서 만드시오.

```py
### START CODE HERE ### (≈ 2 line of code) (1줄로 만들어도 됩니다.)
X4 = np.array([[np.arange(0,7,2)],[np.arange(1,8,2)]]).T
### END CODE HERE ###

X4
```

## Solution 1

```py
np.arrange examples
--------
>>> np.arange(3)
array([0, 1, 2])
>>> np.arange(3.0)
array([ 0.,  1.,  2.])
>>> np.arange(3,7)
array([3, 4, 5, 6])
>>> np.arange(3,7,2)
array([3, 5])
```
`np.arange` 를 사용하여 $[0,2,4,6]$ row와 $[1,3,5,7]$ row를 만들어 `np.array`로 합친다.

이 과정까지 한다면 `X4`는 
$$ X4$$ $$= 
\begin{bmatrix}
    0 & 2 & 4 & 6 \\
    1 & 3 & 5 & 7 \\
\end{bmatrix}$$
이 될 것이다.

이 상태를 `.T` method를 사용하여 transpose 해주면 원하는 답이 나온다.


## Solution 2
> 문제 조건에서 `X.reshape`을 사용하라 했으니 사용해보자

```py
### START CODE HERE ### (≈ 2 line of code) (1줄로 만들어도 됩니다.)
X4 = np.array([[np.arange(0,7,2)],[np.arange(1,8,2)]]).reshape(2,4)
### END CODE HERE ###

X4
```
`X.reshape` 함수는 `np.reshape` 함수와 같은 역할을 할 수 있다. 

X.reshape(m,n) 을 실행한다면 같은 데이터를 가지고 $(m,n)$의 ndarray를 리턴해준다.

# Indexing & Slicing
> 당장 필요한 개념은 아니지만 향후 프로젝트와 `panda` 라이브러리에서 핵심이 되는 내용이니 잘 익혀두자.

1. index의 시작은 $0$이다.
2. $-1$은 가장 마지막 index를 의미한다. $-2$는 마지막에서 두번째 index
3. $[a:b]$ 는 a부터 b-1번째 index까지 slice하겠다는 의미이다. $( a<= x < b)$

#### 1 dimensional array
$$ Z1$$ $$ = 
\begin{bmatrix}
    9 & 5 & 7 & 6 & 2 & 0\\
\end{bmatrix}$$
```py
Z1 = np.array([9,5,7,6,2,0])
Z1
```
```py
>>> array([9, 5, 7, 6, 2, 0])
```

```py
print('Z1[0] = '+ str(Z1[0])) # 0 번째(맨 앞) 원소
print('Z1[3] = '+ str(Z1[3])) # 3 번째 원소 == 앞에서 4 번쨰 원소 
print('Z1[-1] = '+ str(Z1[-1])) # 마지막 원소 == Z1[5]
print('Z1[2:] = '+ str(Z1[2:])) # 2번째 원소부터 끝까지
print('Z1[:4] = '+ str(Z1[:4])) # 처음부터 4번째 원소 전!!까지 == 0~3번째 원소
print('Z1[1:3] = '+ str(Z1[1:3])) # 1번째 원소부터 3번째 원소 전까지 == 1~2번째 원소
```
```py
>>>
Z1[0] = 9
Z1[3] = 6
Z1[-1] = 0
Z1[2:] = [7 6 2 0]
Z1[:4] = [9 5 7 6]
Z1[1:3] = [5 7]
```

# Mini-Question

**조건:** $$M = 
\begin{bmatrix}
    2 & 4 & 6 & 8 \\
    10 & 12 & 14 & 16 \\
    18 & 20 & 22 & 24 \\
\end{bmatrix}$$

**문제:** 
```py
# 기본 설정

M = np.arange(2,25,2).reshape(3,4)
M
```

1) 22를 indexing 해보시오.(mini_ans1) 

```py
# mini_ans1

### START CODE HERE ### (≈ 1 line of code)
mini_ans1 = M[2,2]
### END CODE HERE ###
mini_ans1
```
    
2) array([10,12,14,16])을 slicing 해보시오. (mini_ans2)
    
```py
# mini_ans2

### START CODE HERE ### (≈ 1 line of code)
mini_ans2 = M[1,:]
### END CODE HERE ###
mini_ans2
```

3) array([6,14,22])를 slicing 해보시오. (mini_ans3)

```py
# mini_ans3

### START CODE HERE ### (≈ 1 line of code)
mini_ans3 = M[0:, 2]
### END CODE HERE ###
mini_ans3
```

## Solution
> . $[:]$ 과 $[0:]$ 은 같다.

# Question 5
    
**조건:** $$X5$$ $$ = 
\begin{bmatrix}
    1 & 2 & 3 & 4 \\
    5 & 6 & 7 & 8 \\
    9 & 10 & 11 & 12 \\
\end{bmatrix}$$

**문제:** 주어진 nd array의 원소들의 합을 구하시오.

```py
# 기본 설정

X5 = np.array([[1,2,3,4],[5,6,7,8],[9,10,11,12]])

### START CODE HERE ### (≈ 1 line of code)
ans5 = X6.sum()
### END CODE HERE ###

ans5

```
## Solution

`X.sum()` method를 사용한다

# Question 6
    
**조건:** $$X6 = 
\begin{bmatrix}
    1 & 2 & 3 & 4 \\
    5 & 6 & 7 & 8 \\
    9 & 10 & 11 & 12 \\
\end{bmatrix}$$

**문제:** 주어진 행렬의 전치행렬(transpose)을 구하시오.

```py
# 기본 설정

X6 = np.array([[1,2,3,4],[5,6,7,8],[9,10,11,12]])

### START CODE HERE ### (≈ 1 line of code)
ans6 = X6.T
### END CODE HERE ###

ans6
```
```py
>>> array([[ 1,  5,  9],
           [ 2,  6, 10],
           [ 3,  7, 11],
           [ 4,  8, 12]])
```
```py
# 해당 셀이 문제없이 실행되어야 정답입니다.

assert((ans6[0,1] + ans6[2,2]) == 16)
```

## Solution
> 초반이라 쉬운 것 같다.
> `X.T` 를 쓰는 문제였다. `X.transpose` 도 같은 기능을 할 것


## Question 7
      
**조건:** 
$$
X7 = 
\begin{bmatrix}
    1 & 2 & 3 & 4 \\
    5 & 6 & 7 & 8 \\
    9 & 10 & 11 & 12 \\
\end{bmatrix} \\
\text{    } 
\\

Y7 = 
\begin{bmatrix}
    2 & 2 & 2 & 2 \\
    5 & 5 & 5 & 5 \\
    7 & 7 & 7 & 7 \\
\end{bmatrix}
$$

**문제:** 주어진 행렬 간의 element wise product wise을 구하시오.
```py
# 기본 설정

X7 = np.array([[1,2,3,4],[5,6,7,8],[9,10,11,12]])
Y7 = np.array([[2,2,2,2],[5,5,5,5],[7,7,7,7]])

### START CODE HERE ### (≈ 1 line of code)
ans7 = np.multiply(X7, Y7) ## X7 * Y7
### END CODE HERE ###

ans7
```
```py
>>>
array([[ 2,  4,  6,  8],
       [25, 30, 35, 40],
       [63, 70, 77, 84]])
```

## Solution

**element wise product** 란 무엇인가?
> 같은 크기 배열 간 산술 연산.
> 같은 위치에 있는 원소들 간의 곱이다
> > Numpy 에서의 x*y 곱은 선형대수에서 쓰이는 행렬 곱이 아니다.
>
> > 선형대수에서의 행렬 곱은 `.dot` 혹은 `@` 연산이다.

# Things to think

**1. `np.sum` 에서 요소 `axis`는 무엇일까?**

```py
# 기본 설정

X = np.arange(1,13).reshape(3,4)
X
```

```py
>>>
array([[ 1,  2,  3,  4],
       [ 5,  6,  7,  8],
       [ 9, 10, 11, 12]])
```

```py
np.sum(X, axis=0)
```

```py
>>>
array([15,18,21,24])
```

```py
np.sum(X, axis=1)
```

```py
>>>
array([10,26,42])
```

위의 예시들을 봤을 때, `axis=0` 이었을 때는 1-array를 반환하는데 각 값들이 해당 **열** 원소의 합이었다.

그러나, `axis=1` 이었을 때는 return 배열의 각 값들이 해당 **행** 원소들의 합이었다.

그렇다면, 만약 3차원 배열이라면 `axis=2`가 가능할까?

**2. `np.sum`에서 `axis = 2` 는 왜 error일까?**

위 예시에서 보았듯이, `axis`는 행 원소들의 합을 구할 것인지, 열 원소들의 합을 구할 것인지 정한다.

`axis = 2` 는 행도, 열도 아닌 3차원을 가르키기에 오류가 발생한다.

```py
AxisError: axis 2 is out of bounds for array of dimension 2
```
> 오류 코드도 참조해 볼 수 있다.

**3. `np.sum`에서 `keepdims`는 무엇일까?**

```py
np.sum(X, keepdims=True)
```

```py
>>>
array([[78]])
```

```py
np.sum(X, axis=0, keepdims=True)
```

```py
>>>
array([[15,18,21,24]])
```

```py
np.sum(X, axis=1, keepdims=True)
```

```py
>>>
array([[10],
       [26],
       [42]])
```

위의 2번 예시에서 보았듯이 `axis` 요소에 값을 주면 0일 때는 열의 합을 반화하고, 1일 때는 행의 합을 반환한다.

그러나, 이번엔 `keepdims` 요소를 `True`로 만들어 보았다.


```py
keepdims: bool, optional
    If this is set to True, the axes which are reduced are left
    in the result as dimensions with size one. With this option,
    the result will broadcast correctly against the input array.
```

>위 설명을 살펴보자.
>>`keepdims` 가 `True` 로 설정되면 **축소되는 축이 남는다**. 

**4. `.reshape`에 -1이 들어가면 어떤 현상이 벌어지는가?**

```py
# 기본 설정

Y = np.arange(12)
Y
```

```py
>>>
array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11])
```

```py
Y.reshape(2,-1)
```

```py
>>>
array([[ 0,  1,  2,  3,  4,  5],
       [ 6,  7,  8,  9, 10, 11]])
```

```py
Y.reshape(-1,-1)
```

```py
>>>

ValueError: can only specify one unknown dimension

```

>위의 예시와 Error 코드를 보면 -1이 어떠한 역할을 하는지 바로 알 수 있다.

**-1 이 unknown dimesion을 지정**해주어서 reshape 해주는 것이다.

그러나, 두 개의 unknown dimension 을 지정하면 두 개 다 변수가 되어서 error가 발생한다.


**5. 이 연산은 shape이 안 맞는데 가능한 것인가?**

```py
# 기본 설정

X = np.arange(1,13).reshape(3,4)
X
```

```py
>>>
array([[ 1,  2,  3,  4],
       [ 5,  6,  7,  8],
       [ 9, 10, 11, 12]])
```

```py
X + np.array([-1,-2,-3,-4])
```

```py
>>>
array([[0, 0, 0, 0],
       [4, 4, 4, 4],
       [8, 8, 8, 8]])
```

```py
X + np.array([[-1],[-5],[-9]])
```

```py
>>>
array([[0, 1, 2, 3],
       [0, 1, 2, 3],
       [0, 1, 2, 3]])
```

예시 코드들과 결과들을 보자.

$(n,m)$ 인 행렬에 행렬을 더할 때, 만약 $(n,1)$인 행렬을 더하거나 $(1,m)$ 인 행렬을 더하더라도 자동으로 더해지는 행렬을 $(n,m)$ 으로 늘려 더하는 것을 알 수 있다.

그렇다면 위의 X 에 만약 $(2,m)$ 인 행렬을 더해본다면 어떻게 될지 구현해보았다.

```py
X + np.array([[[-1],[-5],[-9]],[[-9],[-5],[-1]]])
```

```py
>>>
array([[[ 0,  1,  2,  3],
        [ 0,  1,  2,  3],
        [ 0,  1,  2,  3]],

       [[-8, -7, -6, -5],
        [ 0,  1,  2,  3],
        [ 8,  9, 10, 11]]])
```

놀랍게도, 더해지는 array가 $(2,m)$ 일 땐 

array의 첫 행을 늘려 더한 결과와 두번째 행을 늘려 더한 결과. 

총 2개의 결과를 보여준다.

# 후기
`numpy` 라이브러리의 내장 함수들은 편리하지만 그만큼 알아야 하는 것들이 매우 많다.

처음 보는 함수를 받아들이고 그 함수가 가진 여러 가지 특징들을 잘 기억해두고, 공식 문서를 읽는 습관을 들이자.