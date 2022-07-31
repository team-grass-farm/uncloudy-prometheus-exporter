---
marp: false
date: 2022. 07. 30
author: 박종범<jnubugo@gmail.com>
version: 1
---

# Real-Kubernetes-Metric-test


## 개요
Metrics수집을 위한 실제 Kubernetes 환경의 구현과 배포 수행

## 절차
- Minikube를 활용한 멀티 노드 환경 구성
- 테스트 할 환경에 맞는 Pod들 구현
- 실제 구동 테스트
- 수집한 메트릭에 대한 확인




### Minikube에서의 Multi Node환경 구성
![멀티노드구성](https://user-images.githubusercontent.com/49029142/182013677-26af4731-07a4-413a-8764-f9493a3b2a27.PNG)

- 도커를 하이퍼 바이저로 사용하고 컨테이너 인터페이스는 `calico`로 지정합니다
- 노드는 홀수 원칙에 따라 3개로 지정합니다


### Deployment와 Replicaset을 활용한 Pod 환경 구현

![deployment를 위한 yaml작성](https://user-images.githubusercontent.com/49029142/182013743-a022ba6d-966d-4e8d-aef8-35a8d77c2094.PNG)

- 특정 디렉터리에 관련 파일들을 작성 하였습니다

![deployment수정](https://user-images.githubusercontent.com/49029142/182013842-fb197810-fd03-41ad-acdc-153f7557f529.PNG)

- 네임스페이스 deafult가 작성 목록이고 그 외는 메트릭으로 같이 들어갈 메트릭을 만드는 Deployment들 입니다

![Replicaset](https://user-images.githubusercontent.com/49029142/182013764-5b21fd57-a906-4413-b21b-c08702e2fd86.PNG)

![레플리카셋 컨트롤러](https://user-images.githubusercontent.com/49029142/182013938-8afd2836-d2a6-404a-834a-164f3a8da001.PNG)

- Pod를 구현하는 Replicaset과 Replicaset Controller 입니다

### 현재 시스템 동작 현황

![동작중인 노드들](https://user-images.githubusercontent.com/49029142/182013979-e798a073-cc50-4d23-91ee-95713cde03ca.PNG)

- 동작중인 노드들 상황입니다
- 
![All_22_pods](https://user-images.githubusercontent.com/49029142/182013988-9f11b21e-f6c3-42a7-a72e-3f01c8a5f0ff.PNG)

- 동작중인 파드들 상황입니다

![PC리소스 소모](https://user-images.githubusercontent.com/49029142/182013999-c6eb2e23-ff96-4cdd-add7-767d78b2cf20.PNG)

- PC 사용량 현황입니다

![가상환경 리소스 현황](https://user-images.githubusercontent.com/49029142/182014003-6782a7d8-060b-484e-bd85-cbd99fc60408.PNG)

- 가상 환경 리소스의 사용량 현황입니다

### 수집한 Metrics 현황

![클러스터의 CPU 사용 현황_1클러스터](https://user-images.githubusercontent.com/49029142/182014042-61f5342a-5707-4658-ac68-60105d94ed3c.PNG)

- 1클러스터로 구성했던 전체 파드와 노드들에 대한 CPU 사용량(클러스터) 입니다 

![노드별 CPU 사용량 - 분리필요](https://user-images.githubusercontent.com/49029142/182014071-380f887c-a594-4ea5-ae23-8727bb7814ee.PNG)

- 노드별로 분리한 CPU 사용량입니다

![노드별 MeM 사용량](https://user-images.githubusercontent.com/49029142/182014067-e01bf765-a41f-401e-abac-1b23e7647001.PNG)

- 노드별로 분리한 메모리 사용량입니다

![Container_cpu_usage_total](https://user-images.githubusercontent.com/49029142/182014094-83dbbcfb-1758-4d76-b755-c059e4e0a433.PNG)

- 컨테이너의 CPU 사용량 입니다

![Container_memory_usage_bytes](https://user-images.githubusercontent.com/49029142/182014105-e4504b61-7dcd-48eb-af1c-1ce24cbf6772.PNG)

- 컨테이너의 메모리 사용량입니다

## 결론

### 장점
- 실제 Metrics을 기반으로 한 지표 수집 가능
- 오류 상황이나 순단 등의 상황에 대한 상세하고 의미있는 지표 수집 가능

### 단점
- 24h 동작으로 인한 전기세 비용
- 메트릭 수집중인 경우 PC사용시 메트릭 지표 오염 가능성 존재
- 실제 Metrics을 모니터링을 위한 Metrics으로 만들기 위한 부하와 사용 감소에 대한 설정 필요
