const pods = [
  // seoul
  {
    namespace: 'zandi-backend',
    pod: 'swagger-deployment-1771418926-7o5ns',
    instance: 'seouln01',
  },
  {
    namespace: 'zandi-backend',
    pod: 'swagger-deployment-1771418926-r18ao',
    instance: 'seouln03',
  },
  {
    namespace: 'zandi-backend',
    pod: 'nodejs-deployment-2231392811-38d2a',
    instance: 'seouln05',
  },
  {
    namespace: 'zandi-backend',
    pod: 'nodejs-deployment-2231392811-2dzos',
    instance: 'seouln02',
  },
  {
    namespace: 'zandi-backend',
    pod: 'nodejs-deployment-2231392811-29dcs',
    instance: 'seouln04',
  },
  {
    namespace: 'zandi-backend',
    pod: 'nodejs-deployment-2231392811-9jdsi',
    instance: 'seouln01',
  },
  {
    namespace: 'zandi-backend',
    pod: 'mariadb-deployment-2913201382-9sjwa',
    instance: 'seouln02',
  },
  {
    namespace: 'zandi-backend',
    pod: 'mariadb-deployment-2913201382-2sadw',
    instance: 'seouln03',
  },
  {
    namespace: 'zandi-frontend',
    pod: 'zandi-grapher-deployment-9442134208-9dxw2',
    instance: 'seouln05',
  },
  {
    namespace: 'zandi-frontend',
    pod: 'zandi-grapher-deployment-9442134208-23jfd',
    instance: 'seouln05',
  },
  {
    namespace: 'zandi-frontend',
    pod: 'zandi-grapher-deployment-9442134208-e29aw',
    instance: 'seouln03',
  },
  {
    namespace: 'zandi-frontend',
    pod: 'zandi-grapher-deployment-9442134208-5djwu',
    instance: 'seouln01',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'nodejs-deployment-3942392102-d392a',
    instance: 'seouln05',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'nodejs-deployment-3942392102-93fhs',
    instance: 'seouln01',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'nodejs-deployment-3942392102-8dhwu',
    instance: 'seouln04',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'nodejs-deployment-3942392102-i28e3',
    instance: 'seouln05',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'mysql-deployment-7532913428-d48da',
    instance: 'seouln03',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'mysql-deployment-7532913428-8saiw',
    instance: 'seouln01',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'mysql-deployment-7532913428-9dwja',
    instance: 'seouln02',
  },
  {
    namespace: 'uncloudy-frontend',
    pod: 'uncloudy-grapher-blue-deployment-3291203292-0ad92',
    instance: 'seouln01',
  },
  {
    namespace: 'uncloudy-frontend',
    pod: 'uncloudy-grapher-blue-deployment-3291203292-8sjaw',
    instance: 'seouln04',
  },
  {
    namespace: 'uncloudy-frontend',
    pod: 'uncloudy-grapher-green-deployment-7253917392-38udh',
    instance: 'seouln03',
  },
  {
    namespace: 'uncloudy-frontend',
    pod: 'uncloudy-grapher-green-deployment-7253917392-d82hw',
    instance: 'seouln04',
  },
  {
    namespace: 'infra',
    pod: 'monitoring-agent-deployment-8573293182-9dwqa',
    instance: 'seouln04',
  },
  {
    namespace: 'infra',
    pod: 'monitoring-agent-deployment-8573293182-vcus1',
    instance: 'seouln03',
  },
  {
    namespace: 'infra',
    pod: 'monitoring-agent-deployment-8573293182-dehy2',
    instance: 'seouln02',
  },
  {
    namespace: 'infra',
    pod: 'prometheus-deployment-8347123928-d9a8w',
    instance: 'seouln02',
  },
  {
    namespace: 'infra',
    pod: 'prometheus-deployment-8347123928-vn28a',
    instance: 'seouln04',
  },
  {
    namespace: 'infra',
    pod: 'grafana-deployment-5738192321-9sj2a',
    instance: 'seouln01',
  },

  // busan
  {
    namespace: 'zandi-backend',
    pod: 'swagger-deployment-1771418926-7o5ns',
    instance: 'busann01',
  },
  {
    namespace: 'zandi-backend',
    pod: 'swagger-deployment-1771418926-r18ao',
    instance: 'busann05',
  },
  {
    namespace: 'zandi-backend',
    pod: 'nodejs-deployment-2231392811-38d2a',
    instance: 'busann01',
  },
  {
    namespace: 'zandi-backend',
    pod: 'nodejs-deployment-2231392811-2dzos',
    instance: 'busann03',
  },
  {
    namespace: 'zandi-backend',
    pod: 'nodejs-deployment-2231392811-29dcs',
    instance: 'busann02',
  },
  {
    namespace: 'zandi-backend',
    pod: 'nodejs-deployment-2231392811-9jdsi',
    instance: 'busann05',
  },
  {
    namespace: 'zandi-backend',
    pod: 'mariadb-deployment-2913201382-9sjwa',
    instance: 'busann03',
  },
  {
    namespace: 'zandi-backend',
    pod: 'mariadb-deployment-2913201382-2sadw',
    instance: 'busann02',
  },
  {
    namespace: 'zandi-frontend',
    pod: 'zandi-grapher-deployment-9442134208-9dxw2',
    instance: 'busann05',
  },
  {
    namespace: 'zandi-frontend',
    pod: 'zandi-grapher-deployment-9442134208-23jfd',
    instance: 'busann01',
  },
  {
    namespace: 'zandi-frontend',
    pod: 'zandi-grapher-deployment-9442134208-e29aw',
    instance: 'busann04',
  },
  {
    namespace: 'zandi-frontend',
    pod: 'zandi-grapher-deployment-9442134208-5djwu',
    instance: 'busann05',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'nodejs-deployment-3942392102-d392a',
    instance: 'busann04',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'nodejs-deployment-3942392102-93fhs',
    instance: 'busann01',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'nodejs-deployment-3942392102-8dhwu',
    instance: 'busann04',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'nodejs-deployment-3942392102-i28e3',
    instance: 'busann01',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'mysql-deployment-7532913428-d48da',
    instance: 'busann02',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'mysql-deployment-7532913428-8saiw',
    instance: 'busann02',
  },
  {
    namespace: 'uncloudy-backend',
    pod: 'mysql-deployment-7532913428-9dwja',
    instance: 'busann03',
  },
  {
    namespace: 'uncloudy-frontend',
    pod: 'uncloudy-grapher-blue-deployment-3291203292-0ad92',
    instance: 'busann03',
  },
  {
    namespace: 'uncloudy-frontend',
    pod: 'uncloudy-grapher-blue-deployment-3291203292-8sjaw',
    instance: 'busann05',
  },
  {
    namespace: 'uncloudy-frontend',
    pod: 'uncloudy-grapher-green-deployment-7253917392-38udh',
    instance: 'busann02',
  },
  {
    namespace: 'uncloudy-frontend',
    pod: 'uncloudy-grapher-green-deployment-7253917392-d82hw',
    instance: 'busann05',
  },
  {
    namespace: 'infra',
    pod: 'monitoring-agent-deployment-8573293182-9dwqa',
    instance: 'busann04',
  },
  {
    namespace: 'infra',
    pod: 'monitoring-agent-deployment-8573293182-vcus1',
    instance: 'busann04',
  },
  {
    namespace: 'infra',
    pod: 'monitoring-agent-deployment-8573293182-dehy2',
    instance: 'busann05',
  },
  {
    namespace: 'infra',
    pod: 'prometheus-deployment-8347123928-d9a8w',
    instance: 'busann01',
  },
  {
    namespace: 'infra',
    pod: 'prometheus-deployment-8347123928-vn28a',
    instance: 'busann03',
  },
  {
    namespace: 'infra',
    pod: 'grafana-deployment-5738192321-9sj2a',
    instance: 'busann02',
  },
];

module.exports = { pods };
