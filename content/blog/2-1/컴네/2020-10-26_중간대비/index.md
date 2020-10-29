---
title: '[컴퓨터 네트워크] 중간'
date: 2020-10-26 16:21:13
category: '컴퓨터 네트워크'
draft: false
---

# Internet transport-layer protocols

Reliable, in-order : **TCP**

Unreliable, unordered delivey : **UDP**

공통점

=> No delay guarantees

=> No bandwidth guarantees

# Multiplexing and Demultiplexing

각 computer 마다 5 개의 layer 가 있다. application - transport - network - link - physical

socket 은 application 과 transport 사이에 있다.

**multiplexing at sender** : transport layer 에서 mixed up 된다. 나중에 header 를 통해 demultiplexing 된다.

**demultiplexing at receiver** : header info 를 사용하여 correct socket 을 찾아낸다.

## TCP/UDP segment format

32 bits 의 source port # 와 destination port # 이 있다.

# UDP : segment header

# Principles of reliable data transfer

# rdt : reliable data transfer

# Pipelined Protocols : Overview

# GBN in Action

# Selective Repeat in action

# Compare ARQ Schemes

# TCP Overview

# Basic Operations

## TCP Sender
 
## TCP Receiver

# TCP - Reliable Data Transfer

# TCP connection Management

# TCP Congestion Control

# TCP Performance