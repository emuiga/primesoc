const alerts = [
  { sev: 'high',  time: '00:04', text: 'Brute-force detected — SSH / 41.89.x.x' },
  { sev: 'med',   time: '00:11', text: 'Anomalous outbound traffic — 172.16.4.8' },
  { sev: 'low',   time: '00:18', text: 'Port scan detected — TCP SYN sweep' },
  { sev: 'high',  time: '00:23', text: 'Malware signature matched — Emotet.B' },
  { sev: 'med',   time: '00:31', text: 'Lateral movement attempt blocked' },
]

export function SocConsole() {
  return (
    <div className="soc-console" role="img" aria-label="Live SOC monitoring dashboard">
      {/* Title bar */}
      <div className="console-top-bar">
        <div className="console-dots" aria-hidden="true">
          <span className="console-dot dot-red" />
          <span className="console-dot dot-yellow" />
          <span className="console-dot dot-green" />
        </div>
        <span className="console-title">SOC MONITOR v3.1</span>
        <span className="console-live" aria-label="Live">
          <span className="console-live-dot" aria-hidden="true" />
          LIVE
        </span>
      </div>

      {/* Body */}
      <div className="console-body">
        {/* Stats row */}
        <div className="console-grid">
          <div className="console-stat">
            <span className="console-stat-label">Threats Blocked</span>
            <span className="console-stat-value teal">1,247</span>
          </div>
          <div className="console-stat">
            <span className="console-stat-label">Active Incidents</span>
            <span className="console-stat-value">3</span>
          </div>
          <div className="console-stat">
            <span className="console-stat-label">Mean Response</span>
            <span className="console-stat-value green">&lt;5 min</span>
          </div>
          <div className="console-stat">
            <span className="console-stat-label">Uptime SLA</span>
            <span className="console-stat-value teal">99.9%</span>
          </div>
        </div>

        {/* Radar */}
        <div className="console-radar-wrap" aria-hidden="true">
          <div className="radar">
            <div className="radar-ring radar-ring-1" />
            <div className="radar-ring radar-ring-2" />
            <div className="radar-ring radar-ring-3" />
            <div className="radar-crosshair" />
            <div className="radar-sweep" />
            <div className="radar-blip" style={{ top: '28%', left: '62%' }} />
            <div className="radar-blip" style={{ top: '55%', left: '38%' }} />
            <div className="radar-blip threat" style={{ top: '36%', left: '24%' }} />
            <div className="radar-blip" style={{ top: '68%', left: '70%' }} />
          </div>
        </div>

        {/* Alert feed */}
        <div className="console-alerts" role="log" aria-label="Security alerts">
          {alerts.map((a, i) => (
            <div key={i} className="alert-row">
              <span className={`alert-dot ${a.sev === 'high' ? 'high' : a.sev === 'med' ? 'med' : 'low'}`} aria-hidden="true" />
              <span className="alert-time">{a.time}</span>
              <span className="alert-text">{a.text}</span>
            </div>
          ))}
          <div className="alert-row">
            <span className="alert-dot low" aria-hidden="true" />
            <span className="alert-time console-cursor" />
            <span className="alert-text" style={{ color: 'var(--teal-light)' }}>Monitoring active endpoints...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
