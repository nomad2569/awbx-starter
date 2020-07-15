---
title: 'Microservice vs Monolithic'
date: 2020-07-15 16:21:13
category: 'Microservice'
draft: false
---

# Monolithic

`A monolith` 는 우리가 구현하려는 app의 **모든 feature 들을 구현**하기 위해

1. _Routing_

2. _Middlewares_

3. _Business Logic_

4. _Database access_

가 다 들어가 있다.

> 지금까지 나는 이런 monolithic 만을 써왔다.

# Microservice

`A single microservice` 는 우리가 구현하려는 app의 **single feature 를 구현**하기 위해

1. _Routing_

2. _Middlewares_

3. _Business Logic_

4. _Database access_

를 포함한다

만약 내 앱에 service A, B, C, D 가 있다면 각각에 상응하는 middleware 들과 router 그리고 DB가 있다는 것이다.

이러한 세분화는 서비스간의 독립성을 보장하여 다른 서비스의 오류가 또 다른 서비스의 오류를 낳지 않고 그 서비스들의 작동을 보장할 수 있는 것이다.

> 여기까지 보고 " 그래 그냥 feature 들을 분리시키기만 하면 되겠지 " 라고 생각할 수 있지만 현실은 그렇지 않다.

# Challenge with microservices

## Data management between services

> 가장 중요한 문제

**microservice** 에서는 service 마다 자기 자신만의 DB를 가지고 있다.

또한, **절대로** 다른 서비스의 DB를 접근하지 않는다. 자기 자신의 DB만 접근하는 것이다.
