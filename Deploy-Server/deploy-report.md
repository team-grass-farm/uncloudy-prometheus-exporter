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
- 배포와 접속 (DNS변경)

### CSP선택

1. 메트릭을 항상 제공해줘야 하는 24시간 운영 가능한 서버
2. 제공하는 서비스가 아닌 Open Source로서의 최소한의 비용

<img width="946" alt="스크린샷 2022-07-23 오후 10 05 09" src="https://user-images.githubusercontent.com/49029142/180606840-526638f3-3a43-47f3-aeb3-3633d0c41f53.png">


현재 크레딧이 남은 국내 클라우드(NHN_Toast)선택

<img width="1207" alt="스크린샷 2022-07-23 오후 10 03 23" src="https://user-images.githubusercontent.com/49029142/180607867-0ea32110-12a1-4692-b6ca-d049c3d155c3.png">


<img width="1132" alt="스크린샷 2022-07-23 오후 10 04 39" src="https://user-images.githubusercontent.com/49029142/180606872-bd0fb50f-c915-4944-b0e0-8d72bc882b7b.png">


한달 기준으로의 예상 요금 계산(24h * 30day)

### 클라우드 환경 구현

<img width="1145" alt="스크린샷 2022-07-23 오후 10 28 03" src="https://user-images.githubusercontent.com/49029142/180607137-be1b48ee-ef88-4be8-b2fb-79d5d07a00ef.png">
조직 생성 후(Main) 프로젝트명 지정(Uncloudy-Graph)

CLI 환경 사용을 위한 API키 발급


<img width="977" alt="스크린샷 2022-07-23 오후 10 07 36" src="https://user-images.githubusercontent.com/49029142/180607329-0043f1d7-03d9-4d02-b1c6-fbbbe7cea86e.png">
가용성 영역(리전)선택 -> 서버 이름지정 -> 인스턴스 타입 선택 ->.pem(SSH키)생성) ->블록 스토리지 타입과 크기 선택(내부저장소)

```
Spec
- Ram: 1GB
- CPU: 1Core
- OS: Ubuntu Server 20.04 LTS
- Storage: HDD 20GB
```
<img width="1301" alt="스크린샷 2022-07-23 오후 10 07 51" src="https://user-images.githubusercontent.com/49029142/180607530-8c0d1c83-8e66-4d44-9896-82483496b4f3.png">
보안그룹 - 포트 지정
<img width="1373" alt="스크린샷 2022-07-23 오후 10 08 16" src="https://user-images.githubusercontent.com/49029142/180607554-e60b473e-b522-41fd-a3a9-e05fab7154a4.png">

VPC지정 (기본 설정 활용)


<img width="1411" alt="스크린샷 2022-07-23 오후 10 09 26" src="https://user-images.githubusercontent.com/49029142/180607610-8211b26c-41a3-4602-ba9b-1fd91315a570.png">

<img width="426" alt="스크린샷 2022-07-23 오후 10 08 22" src="https://user-images.githubusercontent.com/49029142/180607586-46e025b2-595d-46ee-8559-75973acfe114.png">
VPC의 서브넷 지정과 현황

<img width="1330" alt="스크린샷 2022-07-23 오후 10 10 45" src="https://user-images.githubusercontent.com/49029142/180607712-2c266a58-3442-4a22-98e0-01389897fb9f.png">
인터넷 연결을 위한 Network Gateway 생성
<img width="1369" alt="스크린샷 2022-07-23 오후 10 10 06" src="https://user-images.githubusercontent.com/49029142/180607729-0f391fd3-e3c1-4b28-901e-78a127740718.png">
Network Gateway와 네트워크 인터페이스 연결을 위한 라우터 생성

<img width="1365" alt="스크린샷 2022-07-23 오후 10 10 17" src="https://user-images.githubusercontent.com/49029142/180607805-c93a39fa-b5f4-439f-bb0d-9d08457f035b.png">

접속을 위한 플로팅IP(공인IP) 생성 * 연결
<img width="1331" alt="스크린샷 2022-07-23 오후 10 09 50" src="https://user-images.githubusercontent.com/49029142/180607819-c5424586-254b-4528-b261-f43e2760b58f.png">

연결 완료된 네트워크 인터페이스 상태 확인

<img width="1061" alt="스크린샷 2022-07-23 오후 10 01 54" src="https://user-images.githubusercontent.com/49029142/180607914-32c46ad8-425f-43e4-87ab-b77c2a2a6d71.png">
구동확인

### 배포와 접속(DNS)

<img width="1220" alt="스크린샷 2022-07-23 오후 10 05 46" src="https://user-images.githubusercontent.com/49029142/180608070-5596ede4-5cf3-45d9-8958-17cfecff16db.png">

공인 IP를 대신 할 도메인 주소 연결
<img width="1450" alt="스크린샷 2022-07-23 오후 10 52 13" src="https://user-images.githubusercontent.com/49029142/180608089-a5b36fe6-739d-4aa9-9959-b8a55b5a598f.png">
변경된 도메인 주소로 프로메테우스 서버 및 메트릭 정상 동작 확인
