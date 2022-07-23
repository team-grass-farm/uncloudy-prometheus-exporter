---
marp: false
date: 2022. 07. 23
author: 박종범<jnubugo@gmail.com>
version: 1
---

# Server Deploy implementation statement


## 개요
Uncloud graph의 Prometheus-Exporter 배포 서버 구현

### 절차
- CSP 선택
- 클라우드 환경 구현 (Instance)
- Instance에 배포환경 구현
- 배포와 접속 (DNS변경)

### CSP선택

1. 메트릭을 항상 제공해줘야 하는 24시간 운영 가능한 서버
2. 제공하는 서비스가 아닌 Open Source로서의 최소한의 비용

<img width="946" alt="스크린샷 2022-07-23 오후 10 05 09" src="https://user-images.githubusercontent.com/49029142/180606840-526638f3-3a43-47f3-aeb3-3633d0c41f53.png">


현재 크레딧이 남은 국내 클라우드(NHN_Toast)선택




<img width="1132" alt="스크린샷 2022-07-23 오후 10 04 39" src="https://user-images.githubusercontent.com/49029142/180606872-bd0fb50f-c915-4944-b0e0-8d72bc882b7b.png">


한달 기준으로의 예상 요금 계산(24h * 30day)

### 
