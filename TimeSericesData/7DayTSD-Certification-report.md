---
marp: false
date: 2022. 07. 24
author: 박종범<jnubugo@gmail.com>
version: 1
---

# 7DayTSD-Certification-report.


## 개요
Uncloud graph의 Prometheus-Exporter의 시계열 데이터에 대한 시간연속성 테스트

### 절차
- 24Hour별 데이터 일관성 확인
- 7Day별 데이터 일관성 확인

### 수집 시작 시간
- 2022:07:17 08:34:28
<img width="1187" alt="스크린샷 2022-07-24 오후 2 14 10" src="https://user-images.githubusercontent.com/49029142/180633252-bf2d770b-e88c-4ba5-abf7-37a0ff0221d3.png">

### 24Hour별 데이터 일관성 검증
- 특정 시간 기준으로 1시간 단위 데이터의 연속성 비교

<img width="1180" alt="스크린샷 2022-07-24 오후 2 16 39" src="https://user-images.githubusercontent.com/49029142/180633305-3f9f29f8-0c15-4194-9081-30b1068609a1.png">

2022-07-18 12:00:00 데이터

<img width="1183" alt="스크린샷 2022-07-24 오후 2 16 51" src="https://user-images.githubusercontent.com/49029142/180633323-b3574baf-617b-4b31-97c2-0375e866a2d9.png">

2022-07-18 13:00:00 데이터

<img width="1186" alt="스크린샷 2022-07-24 오후 2 16 59" src="https://user-images.githubusercontent.com/49029142/180633339-97aa450f-fb9b-455b-9275-5728cdf33708.png">

2022-07-18 14:00:00 데이터

### 결론
1시간 단위 일관성 있는 데이터 제공 -> 백엔드 서버의 메트릭 생성으로 신규값 제공

### 신규 이슈 - TSDB 용량 문제

현재 인스턴스에 할당된 스토리지: 20GB
사용량: 2022-07-23 14:30:00 (17.97%) ~ 2022-07-24 14:30:00 (17.99%)
=> 1년이상 사용가능, 추후 NAS를 활용한 증설가능
