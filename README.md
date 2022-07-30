# uncloudy-prometheus-exporter

**[uncloudy-grapher](https://github.com/team-grass-farm/uncloudy-grapher)** 라이브러리를 위한 `prometheus mock metric` 생성 `node-exporter` 입니다.

## Directory Structure

```bash
├─.gitignore
├─index.js: server main file
├─LICENSE
├─package-lock.json
├─package.json
├─README.md
│
├─metric: node-exporter 메인 디렉토리
│  ├─common: common 함수 디렉토리
│  │  ├─getMetricConfig.js: metric 기본 설정 함수
│  │  └─randomValue.js: metric random value 추출 함수
│  │
│  ├─constants: 상수 디렉토리
│  │  ├─common.js: 자주 사용하는 상수
│  │  ├─labelName.js: metric 속성
│  │  ├─nodes.js: node list
│  │  ├─pods.js: pod list
│  │  └─range.js: metric value range
│  │
│  ├─node: node metric 생성 함수 디렉토리
│  │  ├─customNodeCpuTotal.js
│  │  ├─customNodeCpuUsage.js
│  │  ├─customNodeDiskLatency.js
│  │  ├─customNodeMemoryUsage.js
│  │  ├─customNodeMemoryUsageBytes.js
│  │  └─customNodeTotalMemory.js
│  │
│  └─pod: pod metric 생성 함수 디렉토리
│     ├─customPodCpuUsage.js
│     ├─customPodDiskLatency.js
│     ├─customPodMemoryUsage.js
│     ├─customPodMemoryUsageBytes.js
│     └─customPodTotalMemory.js
│
└─swagger: swagger 디렉토리
   └─swagger.json: prometheus swagger 설정 파일
```

## Prerequisites

해당 프로젝트는 **[prometheues](https://prometheus.io/)** 의 메트릭 수집을 위한 `nodeJS` 기반 `node-exporter` 입니다.

- install **[nodeJS](https://nodejs.org/ko/)**
- install **[prometheus](https://prometheus.io/docs/introduction/first_steps/)**
  - `prometheus` 설치 후 `prometheus.yaml` 파일의 target을 `node-exporter`로 설정
  - prometheus.yaml 파일의 scrape_interval 과 [INTERVAL_TIME](./metric/constants/common.js) 의 시간 동기화

## Installing uncloudy-prometheus-exporter

```bash
git clone https://github.com/team-grass-farm/uncloudy-prometheus-exporter
```

## Using uncloudy-prometheus-exporter

```bash
npm i
npm run dev
```

## Contributors

- [@rrgks6221](https://github.com/rrgks6221)
- [@100kimch](https://github.com/100kimch)
- [@jnubugo](https://github.com/jnubugo)
