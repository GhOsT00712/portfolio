/* ============================================================
   DATA
============================================================ */
const COMMANDS = ['about','experience','skills','projects','connect','contact','help','ls','clear','whoami','cat','neofetch','history','theme','sudo','vim','emacs','exit','date','echo','man'];

const FILES = {
  'about.md':       () => renderAbout(),
  'experience.log': () => renderExperience(),
  'skills.json':    () => renderSkills(),
  'contact.vcf':    () => renderConnect(),
};

const FILE_TO_TAB = {
  'about.md': 'about',
  'experience.log': 'experience',
  'skills.json': 'skills',
  'contact.vcf': 'connect'
};

const FILE_TREE = [
  {name:'about.md',        cmd:'about',       color:'text-[#58a6ff]'},
  {name:'experience.log',  cmd:'experience',  color:'text-[#d29922]'},
  {name:'skills.json',     cmd:'skills',      color:'text-[#bc8cff]'},
  {name:'projects/',       cmd:'projects',    color:'text-[#39c5cf]'},
  {name:'contact.vcf',     cmd:'connect',     color:'text-[#3fb950]'},
  {name:'README.md',       cmd:'cat README.md', color:'text-[#6e7681]'},
];

/* ============================================================
   RENDERERS — each returns HTML string
============================================================ */
function renderAbout(){
  return `
<div class="fade-in">
<pre class="text-[#00ff9c] glow text-[10px] sm:text-xs leading-tight mb-3">
██████╗ ██╗██╗   ██╗██╗   ██╗███████╗██╗  ██╗
██╔══██╗██║╚██╗ ██╔╝██║   ██║██╔════╝██║  ██║
██████╔╝██║ ╚████╔╝ ██║   ██║███████╗███████║
██╔═══╝ ██║  ╚██╔╝  ██║   ██║╚════██║██╔══██║
██║     ██║   ██║   ╚██████╔╝███████║██║  ██║
╚═╝     ╚═╝   ╚═╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝

██████╗ ██╗   ██╗██████╗ ███████╗██╗   ██╗
██╔══██╗██║   ██║██╔══██╗██╔════╝╚██╗ ██╔╝
██║  ██║██║   ██║██████╔╝█████╗   ╚████╔╝
██║  ██║██║   ██║██╔══██╗██╔══╝    ╚██╔╝
██████╔╝╚██████╔╝██████╔╝███████╗   ██║
╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝   ╚═╝
</pre>
<div class="text-[#6e7681]">$ cat about.md</div>
<div class="mt-2 text-[#c9d1d9]">
  <div class="mb-2"><span class="text-[#6e7681]">name:</span> <span class="text-[#f0f6fc]">Piyush Dubey</span></div>
  <div class="mb-2"><span class="text-[#6e7681]">role:</span> <span class="text-[#3fb950]">Principal Platform Software Engineer @ Oracle Cloud</span></div>
  <div class="mb-2"><span class="text-[#6e7681]">focus:</span> <span class="text-[#39c5cf]">Developer Infrastructure · Distributed Systems · AI Agent Platforms · Cloud Platform Engineering</span></div>
  <div class="mb-2"><span class="text-[#6e7681]">location:</span> Bangalore, India <span class="text-[#6e7681]">·</span> <span class="text-[#3fb950]">open to relocation & visa sponsorship</span></div>
  <div class="mb-2"><span class="text-[#6e7681]">experience:</span> 13+ years</div>
</div>
<div class="mt-4 border-t border-[#1f2428] pt-3 max-w-2xl text-[#c9d1d9] leading-relaxed">
  <p class="mb-2">Platform engineer with 13+ years setting technical direction for distributed systems and AI infrastructure. I build systems other engineers depend on: cloud control-plane services, event platforms, distributed rate limiting, observability pipelines, retrieval systems, and AI agent runtimes.</p>
  <p class="mb-2">Across <span class="text-[#58a6ff]">Oracle Cloud</span>, <span class="text-[#58a6ff]">Microsoft 365</span>, and <span class="text-[#58a6ff]">Adobe</span>, I've architected platforms serving <span class="text-[#00ff9c]">220M+ monthly users</span>, owned an <span class="text-[#00ff9c]">MCP-based AI agent execution platform</span> that cut incident resolution time by 30%, and repeatedly turned per-team point solutions into shared infrastructure adopted across 20+ engineering teams.</p>
  <p>I'm strongest in environments where reliability, scale, and product velocity all matter at once — the kind of platform work where a good architecture decision makes dozens of teams faster.</p>
</div>
<div class="mt-4 grid sm:grid-cols-2 gap-2 max-w-3xl text-[12px]">
  <div class="border border-[#1f2428] p-3">
    <div class="text-[#d29922] mb-1">what I build</div>
    <div class="text-[#c9d1d9]">Backend platforms, distributed workflows, AI infrastructure, cloud automation, and service reliability systems.</div>
  </div>
  <div class="border border-[#1f2428] p-3">
    <div class="text-[#39c5cf] mb-1">how I lead</div>
    <div class="text-[#c9d1d9]">Architecture reviews, operational readiness, incident learning, design coaching, and pragmatic delivery.</div>
  </div>
  <div class="border border-[#1f2428] p-3">
    <div class="text-[#bc8cff] mb-1">recent problems</div>
    <div class="text-[#c9d1d9]">Autonomous incident resolution, durable agent execution, Terraform provider registries, multi-region event delivery, distributed rate limiting, and SLO-driven reliability engineering.</div>
  </div>
  <div class="border border-[#1f2428] p-3">
    <div class="text-[#3fb950] mb-1">best fit</div>
    <div class="text-[#c9d1d9]">Principal/staff backend roles across developer infrastructure, cloud platform engineering, AI agent systems, or distributed systems at scale.</div>
  </div>
</div>
<div class="mt-4 text-[11px] text-[#6e7681]">
  <span class="text-[#d29922]">→</span> try <span class="text-[#00ff9c] cursor-pointer" onclick="run('experience')">experience</span>, <span class="text-[#00ff9c] cursor-pointer" onclick="run('skills')">skills</span>, or <span class="text-[#00ff9c] cursor-pointer" onclick="run('projects')">projects</span>
</div>
</div>`;
}

function renderExperience(){
  const jobs = [
    {period:'JAN 2025 — PRESENT', role:'Principal Platform Software Engineer', company:'Oracle · Developer Infrastructure Platform', color:'#3fb950',
     points:[
       'Set technical direction across <span class="text-[#00ff9c]">3 Developer Infrastructure teams</span> owning cloud workload orchestration, infrastructure provisioning, and developer productivity platforms within OCI.',
       'Made the architecture call to build a self-service <span class="text-[#39c5cf]">Terraform Provider Registry</span>, decoupling <span class="text-[#00ff9c]">20+ provider teams</span> to release independently per region — collapsing release cycles from <span class="text-[#d29922]">3 months to 1 week (12×)</span> and removing a central org-wide bottleneck.',
       'Owned the architecture for a highly available <span class="text-[#39c5cf]">event-streaming platform</span> (<span class="text-[#d29922]">5K+ events/sec · 430M+ events/day · &lt;500ms end-to-end latency</span>) adopted as shared infrastructure across 20+ OCI engineering teams.',
       'Designed the platform-wide throttling layer: a Redis-backed <span class="text-[#d29922]">distributed rate limiter</span> (<span class="text-[#d29922]">10K+ QPS · &lt;5ms p99</span>) for quota enforcement, tenant isolation, and shared-state coordination — now the central rate-limiting primitive for OCI services and AI-agent workloads.',
       'Architected an <span class="text-[#bc8cff]">AI agent execution platform</span> (durable task orchestration, fault-tolerant execution, MCP tool integration) and shipped an autonomous incident-resolution agent (Codex SDK) that cut debugging effort <span class="text-[#d29922]">60%</span>, resolution time <span class="text-[#d29922]">30%</span>, and restores common failures within <span class="text-[#d29922]">15 minutes</span>.',
       'Defined the observability strategy for the platform org: built log-ingestion pipelines and automated error-classification that surface the top service-impacting failures across critical workloads, holding latency SLOs below 3s.',
       'Technical and operational owner of <span class="text-[#00ff9c]">6+ critical cloud services</span>; cross-team authority on architecture reviews, operational readiness, and incident investigations. Mentored <span class="text-[#00ff9c]">40+ engineers</span> through design reviews and technical leadership programs.',
     ]},
    {period:'MAY 2022 — DEC 2024', role:'Senior Software Engineer', company:'Microsoft · Outlook Groups Platform', color:'#d29922',
     points:[
       'Owned the architecture for the <span class="text-[#bc8cff]">Outlook Groups retrieval platform</span> powering Copilot search and Q&A across Microsoft 365 — on the serving path for <span class="text-[#d29922]">220M+ monthly active users</span>.',
       'Set and executed the optimization strategy that cut global retrieval and collaboration latency by <span class="text-[#d29922]">70%</span> via distributed caching, query-path redesign, and backend re-architecture across the serving stack.',
       'Led cross-organizational architecture across Outlook, Teams, and SharePoint, driving alignment on shared platform standards that reduced service fragmentation across three product orgs.',
       'Shipped lifecycle-management capabilities for Microsoft 365 Groups that cut infrastructure and subscription costs <span class="text-[#d29922]">~10%</span> for enterprise customers with no reliability regression.',
       'Anchored production incident response and large-scale debugging for globally distributed M365 workloads. Mentored <span class="text-[#00ff9c]">10+ engineers</span> through design reviews spanning backend infrastructure and AI-powered experiences.',
     ]},
    {period:'OCT 2016 — APR 2022', role:'Computer Scientist', company:'Adobe · Globalization Platform', color:'#39c5cf',
     points:[
       'Designed and scaled Adobe\'s centralized real-time <span class="text-[#00ff9c]">globalization platform</span> (<span class="text-[#d29922]">31 locales · 50K+ QPS</span>), replacing per-product localization with shared infrastructure and cutting <span class="text-[#d29922]">~2 weeks of localization effort per release</span> across 5+ product lines.',
       'Architected Kafka-based distributed event pipelines (retries, batching, backpressure, dead-letter handling), establishing the async-processing patterns that underpinned platform reliability and scalability.',
       'Improved resiliency through service decomposition and async processing; delivered LINE messaging integrations reaching <span class="text-[#d29922]">60% adoption</span> in targeted Japan customer segments.',
     ]},
    {period:'MAR 2013 — SEP 2016', role:'Software Engineer', company:'TCS · Healthcare Data', color:'#bc8cff',
     points:[
       'Developed healthcare data processing pipelines for patient-doctor alignment systems, improving reliability and scalability of core data flows.',
     ]},
  ];
  let html = `<div class="fade-in"><div class="text-[#6e7681]">$ cat experience.log</div>
    <div class="mt-3 mb-2 text-[#f0f6fc] text-base">Engineering Experience <span class="text-[#6e7681]">— developer infrastructure, distributed systems, AI agent platforms</span></div>`;
  jobs.forEach((j,i)=>{
    html += `
    <div class="mt-4 border-l-2 pl-4" style="border-color:${j.color}">
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span class="text-[11px] text-[#6e7681] font-vt text-base">[${j.period}]</span>
        <span class="text-[#f0f6fc] font-semibold">${j.role}</span>
        <span class="text-[#6e7681]">·</span>
        <span style="color:${j.color}" class="font-semibold">${j.company}</span>
      </div>
      <ul class="mt-2 space-y-1.5 text-[#c9d1d9] leading-relaxed">
        ${j.points.map(p=>`<li class="flex gap-2"><span class="text-[#3fb950] shrink-0 mt-0.5">▸</span><span>${p}</span></li>`).join('')}
      </ul>
    </div>`;
  });
  html += `<div class="mt-5 text-[11px] text-[#6e7681]"><span class="text-[#d29922]">→</span> full details available on <span class="lk cursor-pointer" onclick="run('connect')">LinkedIn</span></div></div>`;
  return html;
}

function renderSkills(){
  const groups = [
    {label:'LANGUAGES',       color:'#58a6ff', items:['Java','Go','Python','TypeScript']},
    {label:'BACKEND',         color:'#3fb950', items:['Spring Boot','Micronaut','Dropwizard','FastAPI','Express']},
    {label:'ARCHITECTURE',    color:'#d29922', items:['Distributed Systems','Service-Oriented Architecture','Event-Driven Architecture','Workflow Orchestration','High Availability','Fault Tolerance','API Design','Capacity Planning']},
    {label:'CLOUD & INFRA',   color:'#39c5cf', items:['OCI','Azure','AWS','Kubernetes','Docker','Terraform','Infrastructure Automation','Observability','Cloud Control Planes']},
    {label:'DATA PLATFORMS',  color:'#bc8cff', items:['Kafka','Redis','PostgreSQL','Oracle DB','Cassandra','MongoDB','Qdrant']},
    {label:'AI & LLM',        color:'#ff7b72', items:['AI Agents','Agent Runtime Systems','MCP','RAG','Semantic Search','Vector Embeddings','OpenAI SDK','Codex SDK','Tool Calling']},
  ];
  let html = `<div class="fade-in"><div class="text-[#6e7681]">$ cat skills.json | jq</div>
    <div class="mt-3 mb-3 text-[#f0f6fc]">Technical Stack</div>
    <div class="space-y-2 max-w-3xl">`;
  groups.forEach(g=>{
    html += `
    <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-[#1f2428] pb-2">
      <div class="text-[11px] w-32 shrink-0" style="color:${g.color}">${g.label}</div>
      <div class="flex flex-wrap gap-1.5">
        ${g.items.map(it=>`<span class="px-2 py-0.5 border border-[#2d333b] text-[11px] text-[#c9d1d9] hover:border-[${g.color}] hover:text-[${g.color}] transition cursor-default">${it}</span>`).join('')}
      </div>
    </div>`;
  });
  html += `</div><div class="mt-4 text-[11px] text-[#6e7681]"><span class="text-[#d29922]">→</span> strongest lanes: <span class="text-[#00ff9c]">backend platforms</span>, <span class="text-[#00ff9c]">reliability</span>, <span class="text-[#00ff9c]">cloud infrastructure</span>, and <span class="text-[#00ff9c]">agentic AI systems</span></div></div>`;
  return html;
}

function renderProjects(){
  const projects = [
    {name:'oci-agent-runtime', tag:'AI Infrastructure · Oracle', desc:'Distributed AI agent execution platform with durable task orchestration, fault-tolerant execution, and MCP-based tool integration. Shipped autonomous incident-resolution agent (Codex SDK) that triages, investigates, and remediates Sev-2 issues autonomously.', color:'#bc8cff', impact:'60% less debugging effort · 30% faster resolution · restores common failures in 15 min'},
    {name:'event-streaming-platform', tag:'Distributed Systems · Oracle', desc:'Highly available event-streaming layer with durable delivery, fault-tolerant recovery, and end-to-end latency guarantees — adopted as shared infrastructure across OCI engineering teams.', color:'#39c5cf', impact:'5K+ events/sec · 430M+ events/day · <500ms latency · 20+ teams'},
    {name:'terraform-provider-registry', tag:'Cloud Platform · Oracle', desc:'Self-service provider distribution architecture that decoupled 20+ OCI provider teams from centralized releases, enabling independent regional publishing and eliminating a central org-wide bottleneck.', color:'#d29922', impact:'3 months → 1 week release cycles (12×)'},
    {name:'m365-copilot-retrieval', tag:'RAG · Microsoft', desc:'Outlook Groups retrieval platform powering Copilot search and Q&A across Microsoft 365 — core design decisions for retrieval at global scale, with distributed caching and query-path re-architecture.', color:'#58a6ff', impact:'220M+ monthly active users · 70% latency reduction'},
    {name:'globalization-platform', tag:'High Throughput · Adobe', desc:'Centralized real-time globalization platform with Kafka-backed event pipelines replacing per-product localization across Adobe, cutting ~2 weeks of localization effort per release across 5+ product lines.', color:'#00ff9c', impact:'50K+ QPS · 31 locales · 5+ product lines'},
  ];
  let html = `<div class="fade-in"><div class="text-[#6e7681]">$ ls projects/</div>
    <div class="mt-3 mb-3 text-[#f0f6fc]">Selected Platform Work</div>
    <div class="grid sm:grid-cols-2 gap-3 max-w-4xl">`;
  projects.forEach(p=>{
    html += `
    <div class="border border-[#1f2428] transition p-3 group" style="--project-color:${p.color}" onmouseenter="this.style.borderColor=this.style.getPropertyValue('--project-color')" onmouseleave="this.style.borderColor='#1f2428'">
      <div class="flex items-baseline justify-between">
        <div class="text-[#f0f6fc] font-semibold transition" style="color:${p.color}">~/projects/${p.name}</div>
        <div class="text-[10px] text-[#6e7681]">${p.tag}</div>
      </div>
      <p class="mt-2 text-[12px] text-[#c9d1d9] leading-relaxed">${p.desc}</p>
      <div class="mt-2 text-[11px]" style="color:${p.color}">impact: ${p.impact}</div>
    </div>`;
  });
  html += `</div></div>`;
  return html;
}

function renderConnect(){
  return `
<div class="fade-in">
<div class="text-[#6e7681]">$ cat contact.vcf</div>
<div class="mt-3 mb-3 text-[#f0f6fc]">Open to staff-level backend, platform, and AI infrastructure conversations.</div>
<div class="max-w-2xl space-y-2 text-[13px]">
  <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-[#1f2428] pb-2">
    <div class="text-[#ff7b72] w-28 shrink-0">LOCATION</div>
    <span>Bangalore, India</span>
  </div>
  <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-[#1f2428] pb-2">
    <div class="text-[#3fb950] w-28 shrink-0">GMAIL</div>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=get.piyush007@gmail.com" target="_blank" rel="noopener noreferrer" onclick="return openExternal(this.href, 'gmail')" class="lk">get.piyush007@gmail.com</a>
    <button class="text-[10px] text-[#6e7681] hover:text-[#00ff9c] sm:ml-auto" onclick="copy('get.piyush007@gmail.com')">[copy]</button>
  </div>
  <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-[#1f2428] pb-2">
    <div class="text-[#39c5cf] w-28 shrink-0">GITHUB</div>
    <a href="https://github.com/GhOsT00712" target="_blank" rel="noopener noreferrer" onclick="return openExternal(this.href, 'github')" class="lk">github.com/GhOsT00712</a>
    <button class="text-[10px] text-[#6e7681] hover:text-[#00ff9c] sm:ml-auto" onclick="copy('github.com/GhOsT00712')">[copy]</button>
  </div>
  <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-[#1f2428] pb-2">
    <div class="text-[#58a6ff] w-28 shrink-0">LINKEDIN</div>
    <a href="https://www.linkedin.com/in/pidubey007" target="_blank" rel="noopener noreferrer" onclick="return openExternal(this.href, 'linkedin')" class="lk">linkedin.com/in/pidubey007</a>
    <button class="text-[10px] text-[#6e7681] hover:text-[#00ff9c] sm:ml-auto" onclick="copy('linkedin.com/in/pidubey007')">[copy]</button>
  </div>
  <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 pb-2">
    <div class="text-[#d29922] w-28 shrink-0">WEBSITE</div>
    <a href="https://piyush-dubey.is-a.dev" target="_blank" rel="noopener noreferrer" onclick="return openExternal(this.href, 'website')" class="lk">piyush-dubey.is-a.dev</a>
    <button class="text-[10px] text-[#6e7681] hover:text-[#00ff9c] sm:ml-auto" onclick="copy('piyush-dubey.is-a.dev')">[copy]</button>
  </div>
  <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 pb-2">
    <div class="text-[#bc8cff] w-28 shrink-0">MOBILITY</div>
    <span>Open to relocation and visa sponsorship</span>
  </div>
</div>
<div class="mt-5 border border-[#1f2428] p-3 max-w-2xl">
  <div class="text-[#6e7681] text-[11px] mb-1">// quick connect</div>
  <div class="text-[#c9d1d9]"><span class="text-[#3fb950]">$</span> ssh hello@piyush-dubey.is-a.dev</div>
  <div class="text-[#6e7681] text-[11px] mt-2">Best fit: <span class="text-[#3fb950]">staff/principal backend</span> · <span class="text-[#39c5cf]">platform engineering</span> · <span class="text-[#bc8cff]">AI infrastructure</span></div>
  <div class="text-[#6e7681] text-[11px] mt-1">Timezone: <span class="text-[#d29922]">IST (UTC+5:30)</span> · Response: usually within 24h</div>
</div>
</div>`;
}

function renderReadme(){
  return `<div class="fade-in text-[#c9d1d9]">
<div class="text-[#6e7681]">$ cat README.md</div>
<div class="mt-3 text-[#00ff9c] glow text-base"># portfolio.sh</div>
<p class="mt-2">Interactive terminal-style portfolio for <span class="text-[#58a6ff]">Piyush Dubey</span>, a principal platform software engineer with 13+ years setting technical direction across distributed systems, developer infrastructure, and AI agent platforms at Oracle, Microsoft, and Adobe.</p>
<div class="mt-3 text-[#d29922]">## Usage</div>
<pre class="mt-1 text-[12px]">  Type a command and press Enter.
  Try: <span class="text-[#00ff9c]">help</span> · <span class="text-[#00ff9c]">about</span> · <span class="text-[#00ff9c]">experience</span> · <span class="text-[#00ff9c]">connect</span>
  Use ↑/↓ for history · Tab for autocomplete.</pre>
<div class="mt-3 text-[#d29922]">## Notes</div>
<p class="mt-1">Built with vanilla JS and Tailwind. The content is intentionally concise: enough signal for engineering review without turning the page into a resume dump.</p>
<div class="mt-3 text-[#6e7681]">— last updated: 2026</div>
</div>`;
}

function renderHelp(){
  const cmds = [
    ['about',      'who am I, what I do'],
    ['experience', 'work history & achievements'],
    ['skills',     'tech stack & tools'],
    ['projects',   'selected platform work'],
    ['connect',    'email, social, contact info'],
    ['ls',         'list files in ~/portfolio'],
    ['cat <file>', 'print file contents'],
    ['whoami',     'quick identity check'],
    ['neofetch',   'system info, terminal-style'],
    ['history',    'show command history'],
    ['theme',      'cycle color theme'],
    ['clear',      'clear the terminal'],
    ['help',       'this message'],
  ];
  let html = `<div class="fade-in"><div class="text-[#6e7681]">$ help</div>
  <div class="mt-3 mb-2 text-[#f0f6fc]">Available commands</div>
  <div class="space-y-0.5 max-w-2xl">`;
  cmds.forEach(([c,d])=>{
    html += `<div class="flex gap-3"><span class="text-[#00ff9c] w-32 shrink-0">${c}</span><span class="text-[#6e7681]">${d}</span></div>`;
  });
  html += `</div>
  <div class="mt-4 text-[11px] text-[#6e7681]">Pro tip: click any command above to run it. Or click files in the sidebar or tabs above.</div></div>`;
  return html;
}

function renderLs(){
  return `<div class="fade-in"><div class="text-[#6e7681]">$ ls -la ~/portfolio</div>
  <div class="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-1 text-[13px]">
    <span class="text-[#58a6ff]">drwxr-xr-x</span> <span class="text-[#6e7681]">projects/</span>
    <span class="text-[#3fb950]">-rw-r--r--</span> <span class="text-[#c9d1d9] cursor-pointer hover:text-[#00ff9c]" onclick="run('about')">about.md</span>
    <span class="text-[#3fb950]">-rw-r--r--</span> <span class="text-[#c9d1d9] cursor-pointer hover:text-[#00ff9c]" onclick="run('experience')">experience.log</span>
    <span class="text-[#3fb950]">-rw-r--r--</span> <span class="text-[#c9d1d9] cursor-pointer hover:text-[#00ff9c]" onclick="run('skills')">skills.json</span>
    <span class="text-[#3fb950]">-rw-r--r--</span> <span class="text-[#c9d1d9] cursor-pointer hover:text-[#00ff9c]" onclick="run('connect')">contact.vcf</span>
    <span class="text-[#3fb950]">-rw-r--r--</span> <span class="text-[#c9d1d9] cursor-pointer hover:text-[#00ff9c]" onclick="run('cat README.md')">README.md</span>
  </div>
  <div class="mt-3 text-[11px] text-[#6e7681]">6 entries · 1 dir · 5 files</div></div>`;
}

function renderNeofetch(){
  return `<div class="fade-in flex flex-col sm:flex-row gap-4"><pre class="text-[#00ff9c] glow text-[10px] leading-none">
       _nnnn_
      dGGGGMMb
     @p~qp~~qMb
     M|@||@) M|
     @,----.JM|
    JS^\__/  qKL
   dZP        qKRb
  dZP          qKKb
 fZP            SMMb
 HZM            MMMM
 FqM            MMMM
 __| "".        |\|"s
 |    | |       | Js
 </pre>
<div class="text-[13px]">
<div class="text-[#00ff9c] glow text-base">visitor@piyush-dubey.is-a.dev</div>
<div class="text-[#6e7681]">────────────────────</div>
<div><span class="text-[#d29922]">OS</span>      portfolioOS 2026</div>
<div><span class="text-[#d29922]">Host</span>    ThinkPad X1 Carbon</div>
<div><span class="text-[#d29922]">Kernel</span>  6.7.4-arch-portfolio</div>
<div><span class="text-[#d29922]">Uptime</span>  <span id="neo-uptime">7 mins</span></div>
<div><span class="text-[#d29922]">Shell</span>   zsh 5.9</div>
<div><span class="text-[#d29922]">Editor</span>  neovim 0.10</div>
<div><span class="text-[#d29922]">Theme</span>   <span id="neo-theme">matrix</span></div>
<div><span class="text-[#d29922]">CPU</span>     13th gen i7 (8) @ 5.2GHz</div>
<div><span class="text-[#d29922]">Memory</span>  32GB · swap 8GB</div>
<div><span class="text-[#d29922]">Languages</span> Java · Go · Python · TS</div>
<div class="mt-2 flex gap-1">
  <span class="w-4 h-4 bg-[#3fb950]"></span>
  <span class="w-4 h-4 bg-[#d29922]"></span>
  <span class="w-4 h-4 bg-[#39c5cf]"></span>
  <span class="w-4 h-4 bg-[#58a6ff]"></span>
  <span class="w-4 h-4 bg-[#bc8cff]"></span>
  <span class="w-4 h-4 bg-[#ff7b72]"></span>
</div>
</div></div>`;
}

/* ============================================================
   TABS LOGIC
============================================================ */
const tabBar = document.getElementById('tab-bar');

function setActiveTab(action) {
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.remove('active');
  });
  
  const targetTab = document.querySelector(`.tab[data-action="${action}"]`);
  if (targetTab) {
    targetTab.classList.add('active');
  }
}

function createNewTab() {
  const existingCustom = document.querySelectorAll('.tab[data-custom="true"]').length;
  const tabId = `custom-${existingCustom + 1}`;
  
  const newTab = document.createElement('div');
  newTab.className = 'tab px-4 py-2 border-r border-[#1f2428] whitespace-nowrap flex items-center gap-1';
  newTab.dataset.action = tabId;
  newTab.dataset.custom = 'true';
  newTab.innerHTML = `
    <span>untitled-${existingCustom + 1}</span>
    <span class="close-btn">×</span>
  `;
  
  const newTabButton = document.querySelector('.tab[data-action="new"]');
  tabBar.insertBefore(newTab, newTabButton);
  
  switchToTab(tabId);
}

function switchToTab(action) {
  setActiveTab(action);
  
  const tab = document.querySelector(`.tab[data-action="${action}"]`);
  if (!tab) return;

  if (action === 'new') {
    createNewTab();
    return;
  }
  
  // Clear output for the new tab context
  output.innerHTML = '';
  
  if (action === 'shell') {
    output.innerHTML = `
      <div class="fade-in text-[#00ff9c] glow text-base">portfolio — zsh</div>
      <div class="text-[#6e7681] mt-2 fade-in">Type <span class="text-[#00ff9c] cursor-pointer" onclick="run('help')">help</span> to see available commands, or click a file in the sidebar.</div>
    `;
  } else if (tab.dataset.custom === 'true') {
    output.innerHTML = `<div class="fade-in text-[#6e7681] mt-2">// new empty buffer. type something...</div>`;
  } else {
    // It's a file tab (about, experience, etc.)
    run(action);
  }
  
  input.focus();
}

// Tab Click Event Listener
tabBar.addEventListener('click', (e) => {
  const closeBtn = e.target.closest('.close-btn');
  if (closeBtn) {
    e.stopPropagation();
    const tab = closeBtn.closest('.tab');
    const wasActive = tab.classList.contains('active');
    tab.remove();
    if (wasActive) {
      switchToTab('shell'); // Fallback to shell if active tab was closed
    }
    return;
  }

  const tab = e.target.closest('.tab');
  if (!tab) return;
  
  switchToTab(tab.dataset.action);
});

/* ============================================================
   TERMINAL ENGINE
============================================================ */
const output = document.getElementById('output');
const input = document.getElementById('cmd-input');
const cmdDisplay = document.getElementById('cmd-display');
let history = [];
let histIdx = -1;
const startTime = Date.now();

function print(html){
  const div = document.createElement('div');
  div.innerHTML = html;
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}

function printPrompt(cmd){
  const div = document.createElement('div');
  div.className = 'text-[#6e7681] mt-3';
  div.innerHTML = `<span class="text-[#3fb950]">visitor@piyush-dubey.is-a.dev</span>:<span class="text-[#39c5cf]">~</span>$ <span class="text-[#c9d1d9]">${escapeHtml(cmd)}</span>`;
  output.appendChild(div);
}

function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

function run(rawCmd){
  const cmd = rawCmd.trim();
  if(!cmd) return;
  printPrompt(cmd);
  history.push(cmd);
  histIdx = history.length;
  execute(cmd);
}

function execute(cmd){
  const [base, ...args] = cmd.split(/\s+/);
  const arg = args.join(' ');
  switch(base){
    case 'help': print(renderHelp()); setActiveTab('shell'); break;
    case 'about': 
      print(renderAbout()); setActiveTab('about'); break;
    case 'whoami':
      print(`<div class="fade-in"><span class="text-[#6e7681]">$ whoami</span><div class="mt-2 text-[#00ff9c]">piyush-dubey — principal platform engineer with 13+ years setting technical direction for distributed systems, AI agent infrastructure, and developer experience platforms at Oracle, Microsoft, and Adobe.</div></div>`);
      setActiveTab('shell'); break;
    case 'experience': case 'exp': 
      print(renderExperience()); setActiveTab('experience'); break;
    case 'skills': case 'stack': 
      print(renderSkills()); setActiveTab('skills'); break;
    case 'projects': case 'work': 
      print(renderProjects()); setActiveTab('projects'); break;
    case 'connect': case 'contact': 
      print(renderConnect()); setActiveTab('connect'); break;
    case 'ls': print(renderLs()); setActiveTab('shell'); break;
    case 'cat':
      if(!arg) print(`<div class="fade-in text-[#ff7b72]">cat: missing operand. Try 'ls' first.</div>`);
      else if(FILES[arg]) {
         print(FILES[arg]());
         if(FILE_TO_TAB[arg]) setActiveTab(FILE_TO_TAB[arg]);
      }
      else if(arg==='README.md') print(renderReadme());
      else print(`<div class="fade-in text-[#ff7b72]">cat: ${escapeHtml(arg)}: No such file</div>`);
      break;
    case 'neofetch': print(renderNeofetch()); setActiveTab('shell'); break;
    case 'history':
      print(`<div class="fade-in"><div class="text-[#6e7681]">$ history</div>${history.map((h,i)=>`<div><span class="text-[#6e7681]">${String(i+1).padStart(4,' ')}</span>  <span class="text-[#c9d1d9]">${escapeHtml(h)}</span></div>`).join('')}</div>`);
      setActiveTab('shell'); break;
    case 'theme': cycleTheme(); print(`<div class="fade-in text-[#00ff9c]">theme set to: <span id="theme-name-2">${currentTheme}</span></div>`); setActiveTab('shell'); break;
    case 'clear': output.innerHTML=''; setActiveTab('shell'); break;
    case 'date': print(`<div class="fade-in text-[#c9d1d9]">${new Date().toString()}</div>`); setActiveTab('shell'); break;
    case 'echo': print(`<div class="fade-in text-[#c9d1d9]">${escapeHtml(arg)}</div>`); setActiveTab('shell'); break;
    case 'sudo':
      if(arg.toLowerCase().includes('sandwich')) print(`<div class="fade-in text-[#d29922]">sudo: 🥪 sandwich delivered. Enjoy.</div>`);
      else print(`<div class="fade-in text-[#ff7b72]">[sudo] password for visitor: <span class="text-[#6e7681]">nice try.</span></div>`);
      setActiveTab('shell'); break;
    case 'vim': print(`<div class="fade-in text-[#00ff9c]">vim: exiting... (you forgot how to quit again, didn't you?)</div>`); setActiveTab('shell'); break;
    case 'emacs': print(`<div class="fade-in text-[#bc8cff]">emacs: launched. Available memory: -2GB. <span class="text-[#6e7681]">(just kidding, use what you love)</span></div>`); setActiveTab('shell'); break;
    case 'exit': print(`<div class="fade-in text-[#6e7681]">logout — see you on the other side. <span class="text-[#00ff9c]">Connect →</span> <span class="lk cursor-pointer" onclick="run('connect')">contact</span></div>`); setActiveTab('shell'); break;
    case 'man':
      print(`<div class="fade-in text-[#ff7b72]">man: no manual entry for '${escapeHtml(arg||base)}'. Try 'help' instead.</div>`);
      setActiveTab('shell'); break;
    default:
      print(`<div class="fade-in text-[#ff7b72]">zsh: command not found: ${escapeHtml(base)}</div><div class="text-[#6e7681] text-[11px] mt-1">Type <span class="text-[#00ff9c] cursor-pointer" onclick="run('help')">help</span> for available commands.</div>`);
      setActiveTab('shell');
  }
}

/* ============================================================
   INPUT HANDLING
============================================================ */
input.addEventListener('input', ()=>{
  cmdDisplay.textContent = input.value;
});
input.addEventListener('keydown', e=>{
  if(e.key==='Enter'){
    const v = input.value;
    input.value=''; cmdDisplay.textContent='';
    run(v);
  } else if(e.key==='ArrowUp'){
    e.preventDefault();
    if(histIdx>0){ histIdx--; input.value=history[histIdx]||''; cmdDisplay.textContent=input.value; }
  } else if(e.key==='ArrowDown'){
    e.preventDefault();
    if(histIdx<history.length-1){ histIdx++; input.value=history[histIdx]||''; cmdDisplay.textContent=input.value; }
    else { histIdx=history.length; input.value=''; cmdDisplay.textContent=''; }
  } else if(e.key==='Tab'){
    e.preventDefault();
    const v = input.value;
    const matches = COMMANDS.filter(c=>c.startsWith(v));
    if(matches.length===1){ input.value=matches[0]; cmdDisplay.textContent=matches[0]; }
    else if(matches.length>1){
      printPrompt(v);
      print(`<div class="fade-in text-[#6e7681]">${matches.join('   ')}</div>`);
    }
  } else if(e.key==='l' && e.ctrlKey){
    e.preventDefault(); output.innerHTML='';
  }
});
// keep focus
document.addEventListener('click', e=>{
  if(!e.target.closest('button') && !e.target.closest('a') && !e.target.closest('onclick')) input.focus();
});

/* ============================================================
   SIDEBAR FILE TREE
============================================================ */
const tree = document.getElementById('file-tree');
FILE_TREE.forEach(f=>{
  const el = document.createElement('div');
  el.className = 'file-item px-3 py-1.5 cursor-pointer flex items-center gap-2 text-[#c9d1d9]';
  el.innerHTML = `<span class="${f.color} text-xs">▸</span><span class="text-[12px]">${f.name}</span>`;
  el.onclick = ()=>{ 
    run(f.cmd); 
    document.querySelectorAll('.file-item').forEach(x=>x.classList.remove('active')); 
    el.classList.add('active'); 
  };
  tree.appendChild(el);
});

/* ============================================================
   BOOT SEQUENCE
============================================================ */
const bootLines = [
  ['[ <span class="text-[#3fb950]">OK</span> ] Reached target Local File Systems', 80],
  ['[ <span class="text-[#3fb950]">OK</span> ] Starting Portfolio Terminal Service...', 120],
  ['[ <span class="text-[#3fb950]">OK</span> ] Loaded user profile: <span class="text-[#39c5cf]">piyush-dubey</span>', 100],
  ['[ <span class="text-[#3fb950]">OK</span> ] Established secure shell · <span class="text-[#6e7681]">encryption: aes-256-gcm</span>', 90],
  ['[ <span class="text-[#d29922]">..</span> ] Mounting /home/visitor/portfolio', 140],
  ['[ <span class="text-[#3fb950]">OK</span> ] Portfolio ready. Welcome back, visitor.', 60],
];

async function boot(){
  for(const [line, delay] of bootLines){
    const div = document.createElement('div');
    div.className = 'text-[12px] text-[#6e7681] fade-in';
    div.innerHTML = line;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
    await new Promise(r=>setTimeout(r, delay));
  }
  await new Promise(r=>setTimeout(r, 200));
  print(renderAbout());
  setActiveTab('about');
  await new Promise(r=>setTimeout(r, 300));
  // hint
  const hint = document.createElement('div');
  hint.className = 'mt-4 text-[12px] text-[#6e7681] fade-in';
  hint.innerHTML = `Type <span class="text-[#00ff9c] cursor-pointer" onclick="run('help')">help</span> for all commands · <span class="text-[#00ff9c] cursor-pointer" onclick="run('cat README.md')">cat README.md</span> for usage notes`;
  output.appendChild(hint);
  input.focus();
}

/* ============================================================
   HELPERS — theme, clock, uptime, copy, toast
============================================================ */
const THEMES = {
  matrix: {green:'#00ff9c', accent:'#3fb950'},
  amber:  {green:'#ffb000', accent:'#d29922'},
  cyber:  {green:'#ff79c6', accent:'#bc8cff'},
  ocean:  {green:'#39c5cf', accent:'#58a6ff'},
};
let currentTheme = 'matrix';
function cycleTheme(){
  const keys = Object.keys(THEMES);
  currentTheme = keys[(keys.indexOf(currentTheme)+1)%keys.length];
  const t = THEMES[currentTheme];
  document.documentElement.style.setProperty('--green-br', t.green);
  document.documentElement.style.setProperty('--green', t.accent);
  document.getElementById('theme-name').textContent = currentTheme;
  document.getElementById('theme-name').style.color = t.green;
  // update cursor color
  document.querySelectorAll('.cursor').forEach(c=>c.style.background = t.green);
  document.querySelectorAll('.glow').forEach(c=>c.style.textShadow = `0 0 8px ${t.green}80, 0 0 18px ${t.green}40`);
}
document.getElementById('theme-btn').onclick = ()=>{ cycleTheme(); };

document.getElementById('sidebar-toggle').onclick = ()=>{
  document.getElementById('sidebar').classList.toggle('open');
};

function track(event, data = {}){
  try {
    const payload = JSON.stringify({ event, location: 'terminal', ...data });
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/track-click', new Blob([payload], { type: 'application/json' }));
    } else {
      fetch('/api/track-click', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(()=>{});
    }
  } catch {}
}
function copy(text){
  navigator.clipboard?.writeText(text).then(()=>toast(`copied: ${text}`)).catch(()=>toast('copy failed'));
  track('copy', { label: text, location: 'contact' });
}
function openExternal(url, label){
  toast(`opening ${label}`);
  track('external_click', { label, href: url, location: 'contact' });
  window.open(url, '_blank', 'noopener,noreferrer');
  return false;
}
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.opacity = '1'; t.style.transform = 'translateY(0)';
  clearTimeout(t._tid);
  t._tid = setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateY(8px)'; }, 2200);
}

setInterval(()=>{
  const now = new Date();
  document.getElementById('clock').textContent = now.toTimeString().slice(0,8);
  const up = Math.floor((Date.now()-startTime)/1000);
  const m = Math.floor(up/60), s = up%60;
  document.getElementById('uptime').textContent = `${m}:${String(s).padStart(2,'0')}`;
}, 1000);

/* ============================================================
   MATRIX BACKGROUND
============================================================ */
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
function resizeCanvas(){ canvas.width=innerWidth; canvas.height=innerHeight; }
resizeCanvas(); addEventListener('resize', resizeCanvas);
const chars = '01{}[]()<>=+/-*&|;:.,#abcdef0123456789'.split('');
let cols = Math.floor(innerWidth/14);
let drops = Array(cols).fill(1).map(()=>Math.random()*innerHeight);
function drawMatrix(){
  ctx.fillStyle = 'rgba(10,14,20,0.08)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.font = '12px JetBrains Mono';
  for(let i=0;i<drops.length;i++){
    const ch = chars[Math.floor(Math.random()*chars.length)];
    const x = i*14, y = drops[i];
    ctx.fillStyle = Math.random()>0.985 ? '#00ff9c' : 'rgba(0,255,156,0.6)';
    ctx.fillText(ch, x, y);
    if(y > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i] += 14;
  }
}
setInterval(drawMatrix, 60);

/* ============================================================
   TERM SIZE (cosmetic)
============================================================ */
function updateTermSize(){
  const w = Math.floor(innerWidth/8);
  const h = Math.floor(innerHeight/18);
  document.getElementById('term-size').textContent = `${w}×${h}`;
}
updateTermSize(); addEventListener('resize', updateTermSize);

/* ============================================================
   GO
============================================================ */
boot();
