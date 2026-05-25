export interface ServiceFeature {
  iconKey: string
  title: string
  desc: string
}

export interface Service {
  slug: string
  badge: string
  title: string
  subtitle: string
  description: string
  features: ServiceFeature[]
  metaTitle: string
  metaDescription: string
}

export const services: Record<string, Service> = {
  soc: {
    slug: 'soc',
    badge: '// Security Operations',
    title: 'Security Operations',
    subtitle: 'Center (SOC)',
    description:
      'Your always-on cyber defense command center. Our SOC analysts monitor, detect, and respond to threats across your entire environment — 24 hours a day, 7 days a week, 365 days a year.',
    metaTitle: 'Security Operations Center (SOC) | Primesoc',
    metaDescription:
      '24/7 managed SOC with SIEM management, threat hunting, incident response, and endpoint detection. East Africa\'s premier Security Operations Center.',
    features: [
      {
        iconKey: 'siem',
        title: 'SIEM Management',
        desc: 'Centralised log management and correlation with advanced analytics to detect threats across your infrastructure.',
      },
      {
        iconKey: 'hunt',
        title: 'Threat Hunting',
        desc: 'Proactive, intelligence-led hunting for adversaries that have bypassed automated defences.',
      },
      {
        iconKey: 'incident',
        title: 'Incident Response',
        desc: 'Rapid containment, eradication, and recovery with forensic analysis and post-incident reporting.',
      },
      {
        iconKey: 'edr',
        title: 'Endpoint Detection & Response',
        desc: 'Advanced EDR monitoring to detect and isolate compromised endpoints in real time.',
      },
      {
        iconKey: 'alert',
        title: 'Alert Triage',
        desc: 'Expert analysts filter noise, prioritise critical alerts, and ensure zero false negatives on real threats.',
      },
      {
        iconKey: 'report',
        title: 'Monthly Reporting',
        desc: 'Executive and technical reports on your security posture, threat landscape, and SOC performance.',
      },
    ],
  },
  vapt: {
    slug: 'vapt',
    badge: '// Offensive Security',
    title: 'Vulnerability Assessment &',
    subtitle: 'Penetration Testing',
    description:
      'Know your weaknesses before attackers do. Our certified ethical hackers simulate real-world attacks across your entire attack surface — networks, applications, cloud, and people.',
    metaTitle: 'Vulnerability Assessment & Penetration Testing (VAPT) | Primesoc',
    metaDescription:
      'Comprehensive VAPT services covering network, web application, cloud, and mobile penetration testing for organisations in Kenya and East Africa.',
    features: [
      {
        iconKey: 'network',
        title: 'Network Penetration Testing',
        desc: 'External and internal network assessments identifying misconfigurations, weak credentials, and exploitable vulnerabilities.',
      },
      {
        iconKey: 'web',
        title: 'Web Application Testing',
        desc: 'OWASP Top 10 focused testing of web applications, APIs, and business logic vulnerabilities.',
      },
      {
        iconKey: 'cloud',
        title: 'Cloud Security Assessment',
        desc: 'AWS, Azure, and GCP configuration reviews to identify exposed assets and privilege escalation paths.',
      },
      {
        iconKey: 'mobile',
        title: 'Mobile App Testing',
        desc: 'Android and iOS application security testing including reverse engineering and API security review.',
      },
      {
        iconKey: 'social',
        title: 'Social Engineering',
        desc: 'Phishing simulations and physical security assessments to test your human layer of defence.',
      },
      {
        iconKey: 'report',
        title: 'Detailed Remediation Reports',
        desc: 'Clear, prioritised findings with CVSS scores, proof-of-concept exploits, and step-by-step remediation guidance.',
      },
    ],
  },
  cti: {
    slug: 'cti',
    badge: '// Threat Intelligence',
    title: 'Cyber Threat',
    subtitle: 'Intelligence (CTI)',
    description:
      'Stay ahead of adversaries with actionable intelligence. We provide strategic, tactical, and operational threat intelligence to inform your security decisions and defensive posture.',
    metaTitle: 'Cyber Threat Intelligence (CTI) | Primesoc',
    metaDescription:
      'Strategic and operational cyber threat intelligence — dark web monitoring, IOC feeds, threat actor profiling, and breach notification for businesses in Africa.',
    features: [
      {
        iconKey: 'darkweb',
        title: 'Dark Web Monitoring',
        desc: 'Continuous surveillance of dark web forums and marketplaces for leaked credentials and data mentions.',
      },
      {
        iconKey: 'actor',
        title: 'Threat Actor Profiling',
        desc: 'In-depth analysis of APT groups, ransomware operators, and threat actors targeting your industry.',
      },
      {
        iconKey: 'ioc',
        title: 'IOC Feeds',
        desc: 'Real-time indicators of compromise integrated directly into your SIEM and security controls.',
      },
      {
        iconKey: 'strategic',
        title: 'Strategic Intelligence',
        desc: 'Executive-level threat briefings on emerging risks, geopolitical threats, and industry trends.',
      },
      {
        iconKey: 'industry',
        title: 'Industry-Specific Intel',
        desc: 'Tailored intelligence relevant to your sector — finance, healthcare, government, or critical infrastructure.',
      },
      {
        iconKey: 'breach',
        title: 'Breach Notification',
        desc: "Immediate alerting when your organisation's data, credentials, or assets appear in threat actor channels.",
      },
    ],
  },
  grc: {
    slug: 'grc',
    badge: '// Governance & Compliance',
    title: 'GRC & Compliance',
    subtitle: 'Management',
    description:
      'Navigate the complex regulatory landscape with confidence. Our GRC specialists help you build robust governance frameworks, manage risk, and achieve compliance across multiple standards.',
    metaTitle: 'GRC & Compliance Management | Primesoc',
    metaDescription:
      'ISO 27001 implementation, Kenya Data Protection Act, PCI-DSS, and GDPR compliance management. Expert GRC consulting for organisations in Kenya and East Africa.',
    features: [
      {
        iconKey: 'iso',
        title: 'ISO 27001 Implementation',
        desc: 'End-to-end ISMS implementation, gap assessment, and audit readiness for ISO 27001 certification.',
      },
      {
        iconKey: 'regulatory',
        title: 'Regulatory Compliance',
        desc: 'Compliance mapping for GDPR, Kenya Data Protection Act, PCI-DSS, HIPAA, and local regulatory requirements.',
      },
      {
        iconKey: 'risk',
        title: 'Risk Management',
        desc: 'Structured risk assessment and treatment programmes aligned to ISO 31000 and NIST frameworks.',
      },
      {
        iconKey: 'policy',
        title: 'Policy Development',
        desc: 'Creation of comprehensive security policies, procedures, and standards tailored to your organisation.',
      },
      {
        iconKey: 'training',
        title: 'Security Awareness Training',
        desc: 'Engaging training programmes to build a security-conscious culture across your entire organisation.',
      },
      {
        iconKey: 'vendor',
        title: 'Third-Party Risk Management',
        desc: 'Vendor security assessments and supply chain risk management to protect your partner ecosystem.',
      },
    ],
  },
  eng: {
    slug: 'eng',
    badge: '// Security Engineering',
    title: 'Cyber Security',
    subtitle: 'Engineering & Integration',
    description:
      'Architecture, engineering, and seamless integration of security technologies into your environment. We design and build the technical foundations of your cyber defence.',
    metaTitle: 'Cyber Security Engineering & Integration | Primesoc',
    metaDescription:
      'Security architecture design, SOAR automation, IAM, cloud security engineering, and tool integration services for enterprises in Kenya and Africa.',
    features: [
      {
        iconKey: 'architecture',
        title: 'Security Architecture Design',
        desc: 'Zero-trust and defence-in-depth architecture design tailored to your environment and risk profile.',
      },
      {
        iconKey: 'integration',
        title: 'Security Tool Integration',
        desc: 'Integration of SIEM, EDR, SOAR, firewalls, and other security technologies into a cohesive ecosystem.',
      },
      {
        iconKey: 'soar',
        title: 'SOAR Automation',
        desc: 'Security Orchestration, Automation, and Response playbooks to accelerate detection and response.',
      },
      {
        iconKey: 'iam',
        title: 'Identity & Access Management',
        desc: 'Privileged access management, MFA implementation, and identity governance solutions.',
      },
      {
        iconKey: 'cloud',
        title: 'Cloud Security Engineering',
        desc: 'Secure cloud architecture design and implementation across multi-cloud and hybrid environments.',
      },
      {
        iconKey: 'dashboard',
        title: 'Security Metrics & Dashboards',
        desc: 'Custom KPI dashboards giving leadership real-time visibility into your security posture.',
      },
    ],
  },
}

export const servicesList = Object.values(services)

export function getService(slug: string): Service | undefined {
  return services[slug]
}
