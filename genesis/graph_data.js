const GRAPH_DATA = {
  "title": "GenAI literature: findings, gaps & papers",
  "stats": {
    "findings": 15,
    "gaps": 14,
    "papers": 54,
    "shared_links": 252,
    "max_shared": 8
  },
  "colors": {
    "paper": "#4C78A8",
    "shared": "#E45756"
  },
  "categoryColors": {
    "Supporting": "#54A24B",
    "Superfluous": "#F58518",
    "Novel": "#B279A2"
  },
  "nodes": [
    {
      "id": "F1",
      "label": "F1: Productivity and speed effects",
      "group": "Finding",
      "category": "Supporting",
      "title": "F1 (Finding) — Productivity and speed effects\n\nGenAI can improve throughput and reduce task time, but effects vary\nsharply by task, context, tool and measurement method; perceived\nproductivity can also diverge from objectively measured performance.\n\nCategory: Supporting\n15 paper(s): Watanabe et al. (2026), Murphy-Hill et al. (2026),\nParadis et al. (2025), Chen et al. (2026), Becker et al. (2025),\nUlfsnes et al. (2024), Heilman et al. (2026), Liang et al. (2024), Cui\net al. (2026), Hou et al. (2024), Borg et al. (2026), Wu et al.\n(2026), Zacharias et al. (2026), Giray et al. (2026), Nguyen-Duc &\nKhanna (2024)",
      "color": "#54A24B",
      "shape": "diamond",
      "value": 15
    },
    {
      "id": "F2",
      "label": "F2: Quality and maintainability trade-offs",
      "group": "Finding",
      "category": "Supporting",
      "title": "F2 (Finding) — Quality and maintainability trade-offs\n\nProductivity gains do not consistently translate into better quality\nor maintainability; evidence shows mixed quality signals, possible\ndiminishing returns, and a need to balance faster generation with\ntesting and review.\n\nCategory: Supporting\n9 paper(s): Choudhuri et al. (2025), Tabarsi et al. (2026), Cui et al.\n(2026), Borg et al. (2026), Amalfitano et al. (2026), Torun et al.\n(2026), Moreno-Lumbreras et al. (2026), Heilman et al. (2026), Chen et\nal. (2025)",
      "color": "#54A24B",
      "shape": "diamond",
      "value": 9
    },
    {
      "id": "F3",
      "label": "F3: Trust, verification and human control",
      "group": "Finding",
      "category": "Supporting",
      "title": "F3 (Finding) — Trust, verification and human control\n\nDevelopers rarely treat GenAI output as automatically trustworthy:\nthey verify, revise and supervise outputs, retain control over\nimportant decisions, and update trust based on observed correctness,\ncomprehensibility and risk.\n\nCategory: Supporting\n12 paper(s): Tang et al. (2026), Migliarini et al. (2026), Choudhuri\net al. (2025), Sabouri et al. (2025), O'Brien (2025), Long et al.\n(2026), Huang et al. (2026), Mozannar et al. (2024), Klemmer et al.\n(2024), Saari et al. (2024), Cabrero-Daniel et al. (2024), Brun et al.\n(2026)",
      "color": "#54A24B",
      "shape": "diamond",
      "value": 12
    },
    {
      "id": "F4",
      "label": "F4: Agent delegation, autonomy and failure",
      "group": "Finding",
      "category": "Supporting",
      "title": "F4 (Finding) — Agent delegation, autonomy and failure\n\nMore autonomous agents can reduce user effort and take over\nsubstantial implementation work, but their outputs are frequently\nrevised and can fail through scope overreach, project\nmisunderstanding, inaccurate reporting or vulnerable code.\n\nCategory: Supporting\n14 paper(s): Li et al. (2026), Baumann et al. (2026), Watanabe et al.\n(2026), Chen et al. (2026), Otten et al. (2026), Huang et al. (2026),\nLong et al. (2026), Becker et al. (2025), Nguyen et al. (2024), Saari\net al. (2024), Tang et al. (2026), Torun et al. (2026), Stray et al.\n(2025), Yu et al. (2026)",
      "color": "#54A24B",
      "shape": "diamond",
      "value": 14
    },
    {
      "id": "F5",
      "label": "F5: Adoption, non-use and organisational diffusion",
      "group": "Finding",
      "category": "Supporting",
      "title": "F5 (Finding) — Adoption, non-use and organisational diffusion\n\nAdoption is shaped by peer and organisational influence, perceived\nusefulness and support, while non-use is driven by poor\ncontrollability, requirement mismatch, production risk and concerns\nabout failure costs.\n\nCategory: Supporting\n7 paper(s): Giray et al. (2026), Sergeyuk et al. (2026), Huang et al.\n(2026), Liang et al. (2024), Stray et al. (2025), Hao et al. (2024),\nZakharov et al. (2025)",
      "color": "#54A24B",
      "shape": "diamond",
      "value": 7
    },
    {
      "id": "F6",
      "label": "F6: Cost and adoption economics",
      "group": "Finding",
      "category": "Supporting",
      "title": "F6 (Finding) — Cost and adoption economics\n\nGenAI adoption has a material economic dimension: organisations can\nincur substantial token/inference costs, making retention, usage\nintensity and realised value important alongside technical\nperformance.\n\nCategory: Supporting\n2 paper(s): Murphy-Hill et al. (2026), Pereira et al. (2024)",
      "color": "#54A24B",
      "shape": "diamond",
      "value": 2
    },
    {
      "id": "F7",
      "label": "F7: Skills, proficiency and workforce change",
      "group": "Finding",
      "category": "Supporting",
      "title": "F7 (Finding) — Skills, proficiency and workforce change\n\nGenAI benefits and usage patterns differ by proficiency, seniority and\nrole; effective use increasingly requires new competencies in\nprompting, evaluation, task decomposition and judgement, while junior\nwork, mentoring and reskilling may shift.\n\nCategory: Supporting\n18 paper(s): Paradis et al. (2025), Cui et al. (2026), Stray et al.\n(2025), Hassan et al. (2026), Brun et al. (2026), Kam et al. (2025),\nSergeyuk et al. (2026), Nguyen et al. (2024), Fetzer et al. (2026),\nChen et al. (2025), O'Brien (2025), Choudhuri et al. (2026), Zacharias\net al. (2026), Zakharov et al. (2025), Giray et al. (2026), Amalfitano\net al. (2026), Tabarsi et al. (2026), Liukko et al. (2024)",
      "color": "#54A24B",
      "shape": "diamond",
      "value": 18
    },
    {
      "id": "F8",
      "label": "F8: Prompting and conversational interaction",
      "group": "Finding",
      "category": "Supporting",
      "title": "F8 (Finding) — Prompting and conversational interaction\n\nEffective use is iterative rather than purely single-shot: multi-turn\nprompting, prompt refinement, versioned prompt practices and\ntool-specific editing strategies help steer outputs, though prompting\neffort and tool limits remain significant.\n\nCategory: Supporting\n11 paper(s): Subramonyam et al. (2025), Migliarini et al. (2026),\nEhsani et al. (2026), Otten et al. (2026), Hao et al. (2024), Tufano\net al. (2026), Long et al. (2026), Choudhuri et al. (2025), Liukko et\nal. (2024), Hassan et al. (2026), Ziegler et al. (2026)",
      "color": "#54A24B",
      "shape": "diamond",
      "value": 11
    },
    {
      "id": "F9",
      "label": "F9: Task, phase and use-pattern shifts",
      "group": "Finding",
      "category": "Supporting",
      "title": "F9 (Finding) — Task, phase and use-pattern shifts\n\nGenAI use is uneven across software-engineering activities:\nimplementation, debugging and learning are common, while\nrequirements/design and some review/refactoring tasks are less\nprominent; the task mix changes as tools mature.\n\nCategory: Supporting\n11 paper(s): Borg et al. (2026), Otten et al. (2026), Klemmer et al.\n(2024), Li et al. (2026), Hou et al. (2024), Hao et al. (2024), Ehsani\net al. (2026), Tabarsi et al. (2026), Tufano et al. (2026), Nguyen-Duc\n& Khanna (2024), Watanabe et al. (2026)",
      "color": "#54A24B",
      "shape": "diamond",
      "value": 11
    },
    {
      "id": "F10",
      "label": "F10: Interaction modes, context and user understanding",
      "group": "Finding",
      "category": "Supporting",
      "title": "F10 (Finding) — Interaction modes, context and user understanding\n\nHuman-AI interaction depends on task novelty, context availability and\nthe user’s mental model of the tool; acceleration and exploration\nmodes coexist, and misunderstanding context or capabilities can lead\nto over-reliance or inefficient use.\n\nCategory: Supporting\n10 paper(s): Mozannar et al. (2024), Yu et al. (2026), Ehsani et al.\n(2026), Brandebusemeyer et al. (2026), Barke et al. (2023), Zacharias\net al. (2026), Wu et al. (2026), O'Brien (2025), Tufano et al. (2026),\nMoreno-Lumbreras et al. (2026)",
      "color": "#54A24B",
      "shape": "diamond",
      "value": 10
    },
    {
      "id": "F11",
      "label": "F11: Augmentation and tool/workflow integration",
      "group": "Finding",
      "category": "Supporting",
      "title": "F11 (Finding) — Augmentation and tool/workflow integration\n\nGenAI is used in multiple augmentation roles—from tool to teammate—and\nincreasingly interacts with broader tool chains and workflows,\nchanging how developers coordinate work, seek help and distribute\neffort.\n\nCategory: Supporting\n6 paper(s): Amalfitano et al. (2026), Zakharov et al. (2025), Hassan\net al. (2026), Giray et al. (2026), Pereira et al. (2024), Ulfsnes et\nal. (2024)",
      "color": "#54A24B",
      "shape": "diamond",
      "value": 6
    },
    {
      "id": "F12",
      "label": "F12: Human experience, satisfaction and cognitive load",
      "group": "Finding",
      "category": "Supporting",
      "title": "F12 (Finding) — Human experience, satisfaction and cognitive load\n\nGenAI can lower effort and stabilise some emotional experiences, but\nsatisfaction is not guaranteed; users also report guilt, self-doubt,\nreduced fulfilment and cognitive burdens associated with checking and\ndependence.\n\nCategory: Supporting\n4 paper(s): Chen et al. (2026), Brandebusemeyer et al. (2026), Wu et\nal. (2026), Moreno-Lumbreras et al. (2026)",
      "color": "#54A24B",
      "shape": "diamond",
      "value": 4
    },
    {
      "id": "F13",
      "label": "F13: Security, privacy and responsible use",
      "group": "Finding",
      "category": "Supporting",
      "title": "F13 (Finding) — Security, privacy and responsible use\n\nGenAI introduces security, privacy, accountability and responsible-AI\nconcerns; secure use depends on prompting, review and governance, and\ndevelopers may remain overconfident even when generated code is less\nsecure.\n\nCategory: Supporting\n7 paper(s): Perry et al. (2023), Baumann et al. (2026), Klemmer et al.\n(2024), Fetzer et al. (2026), Choudhuri et al. (2026), Nguyen-Duc &\nKhanna (2024), Hou et al. (2024)",
      "color": "#54A24B",
      "shape": "diamond",
      "value": 7
    },
    {
      "id": "F14",
      "label": "F14: Model capability and comparative performance",
      "group": "Finding",
      "category": "Superfluous",
      "title": "F14 (Finding) — Model capability and comparative performance\n\nModel choice matters: newer or stronger models can provide more\ncoherent interaction and better task support, but performance remains\nmodel- and task-dependent and should not be assumed to equal human\ncapability.\n\nCategory: Superfluous\n3 paper(s): Liukko et al. (2024), Cabrero-Daniel et al. (2024), Hou et\nal. (2024)",
      "color": "#F58518",
      "shape": "diamond",
      "value": 3
    },
    {
      "id": "F15",
      "label": "F15: Analytic and conceptual frameworks",
      "group": "Finding",
      "category": "Superfluous",
      "title": "F15 (Finding) — Analytic and conceptual frameworks\n\nThe literature proposes interaction, augmentation and evaluation\nframeworks to structure GenAI use, but these frameworks mainly\norganise observed phenomena rather than establish universal causal\neffects.\n\nCategory: Superfluous\n1 paper(s): Amalfitano et al. (2026)",
      "color": "#F58518",
      "shape": "diamond",
      "value": 1
    },
    {
      "id": "G1",
      "label": "G1: Sampling and setting generalisability",
      "group": "Gap",
      "category": "Supporting",
      "title": "G1 (Gap) — Sampling and setting generalisability\n\nEvidence is often drawn from small, early-adopter, single-company or\nnarrowly bounded settings, so findings may not transfer to other\norganisations, domains, team structures, repositories or steady-state\nuse.\n\nCategory: Supporting\n25 paper(s): Kam et al. (2025), Tabarsi et al. (2026), Baumann et al.\n(2026), Tang et al. (2026), Stray et al. (2025), O'Brien (2025), Huang\net al. (2026), Liang et al. (2024), Becker et al. (2025), Paradis et\nal. (2025), Ziegler et al. (2026), Watanabe et al. (2026), Liukko et\nal. (2024), Perry et al. (2023), Borg et al. (2026), Brandebusemeyer\net al. (2026), Sabouri et al. (2025), Moreno-Lumbreras et al. (2026),\nMurphy-Hill et al. (2026), Pereira et al. (2024), Cui et al. (2026),\nKlemmer et al. (2024), Yu et al. (2026), Subramonyam et al. (2025),\nTorun et al. (2026)",
      "color": "#54A24B",
      "shape": "triangle",
      "value": 25
    },
    {
      "id": "G2",
      "label": "G2: Student and academic-task generalisability",
      "group": "Gap",
      "category": "Supporting",
      "title": "G2 (Gap) — Student and academic-task generalisability\n\nMany studies rely on students, novices, short researcher-defined tasks\nor single-university settings; professional, multi-file, team-based\nand long-running work remains underrepresented.\n\nCategory: Supporting\n9 paper(s): Mozannar et al. (2024), Barke et al. (2023), Chen et al.\n(2025), Chen et al. (2026), Brun et al. (2026), Perry et al. (2023),\nWu et al. (2026), Long et al. (2026), Saari et al. (2024)",
      "color": "#54A24B",
      "shape": "triangle",
      "value": 9
    },
    {
      "id": "G3",
      "label": "G3: Self-selection, self-report and visibility bias",
      "group": "Gap",
      "category": "Supporting",
      "title": "G3 (Gap) — Self-selection, self-report and visibility bias\n\nThe evidence base frequently depends on opt-in users, self-reports,\npublic/shared conversations or positively inclined participants,\ncreating selection and visibility biases and leaving silent or\nnon-user behaviour poorly observed.\n\nCategory: Supporting\n12 paper(s): Otten et al. (2026), Giray et al. (2026), Klemmer et al.\n(2024), Kam et al. (2025), Li et al. (2026), Hao et al. (2024), Ehsani\net al. (2026), Nguyen et al. (2024), Hou et al. (2024), Stray et al.\n(2025), Wu et al. (2026), Nguyen-Duc & Khanna (2024)",
      "color": "#54A24B",
      "shape": "triangle",
      "value": 12
    },
    {
      "id": "G4",
      "label": "G4: Causality and confounding",
      "group": "Gap",
      "category": "Supporting",
      "title": "G4 (Gap) — Causality and confounding\n\nA substantial share of results are observational or cross-sectional,\nmaking it difficult to separate GenAI effects from task mix,\nmotivation, prior skill, organisational context or other confounders.\n\nCategory: Supporting\n6 paper(s): Murphy-Hill et al. (2026), Choudhuri et al. (2025),\nChoudhuri et al. (2026), Zacharias et al. (2026), Heilman et al.\n(2026), Tang et al. (2026)",
      "color": "#54A24B",
      "shape": "triangle",
      "value": 6
    },
    {
      "id": "G5",
      "label": "G5: Measurement and outcome validity",
      "group": "Gap",
      "category": "Supporting",
      "title": "G5 (Gap) — Measurement and outcome validity\n\nStudies often use narrow proxies, subjective ratings or incomplete\noutcomes; stronger objective and multi-dimensional measures are needed\nfor productivity, quality, defects, cognitive load, satisfaction and\nreasons behind observed effects.\n\nCategory: Supporting\n15 paper(s): Brandebusemeyer et al. (2026), Moreno-Lumbreras et al.\n(2026), Heilman et al. (2026), Baumann et al. (2026), Hao et al.\n(2024), Cui et al. (2026), Li et al. (2026), Zakharov et al. (2025),\nCabrero-Daniel et al. (2024), Liang et al. (2024), Watanabe et al.\n(2026), Giray et al. (2026), Fetzer et al. (2026), Ehsani et al.\n(2026), Otten et al. (2026)",
      "color": "#54A24B",
      "shape": "triangle",
      "value": 15
    },
    {
      "id": "G6",
      "label": "G6: Longitudinal effects and evolving tools",
      "group": "Gap",
      "category": "Supporting",
      "title": "G6 (Gap) — Longitudinal effects and evolving tools\n\nLong-term effects remain uncertain because tools, models and workflows\nchange rapidly and many studies capture only short snapshots; repeated\nlongitudinal measurement is needed for trust, quality, adoption and\nworkflow evolution.\n\nCategory: Supporting\n18 paper(s): Klemmer et al. (2024), Choudhuri et al. (2026), Stray et\nal. (2025), Zakharov et al. (2025), Sabouri et al. (2025), Wu et al.\n(2026), Watanabe et al. (2026), Murphy-Hill et al. (2026), Borg et al.\n(2026), Tufano et al. (2026), Li et al. (2026), Nguyen et al. (2024),\nTabarsi et al. (2026), Paradis et al. (2025), Chen et al. (2026),\nMigliarini et al. (2026), Hassan et al. (2026), Sergeyuk et al. (2026)",
      "color": "#54A24B",
      "shape": "triangle",
      "value": 18
    },
    {
      "id": "G7",
      "label": "G7: Learning, expertise and reliance",
      "group": "Gap",
      "category": "Supporting",
      "title": "G7 (Gap) — Learning, expertise and reliance\n\nIt remains unclear whether GenAI produces durable learning and\nexpertise or increased dependence and deskilling, and how expertise,\naccountability and mentoring redistribute over time.\n\nCategory: Supporting\n8 paper(s): Long et al. (2026), Ulfsnes et al. (2024), Nguyen et al.\n(2024), Giray et al. (2026), Amalfitano et al. (2026), Huang et al.\n(2026), Choudhuri et al. (2025), Nguyen-Duc & Khanna (2024)",
      "color": "#54A24B",
      "shape": "triangle",
      "value": 8
    },
    {
      "id": "G8",
      "label": "G8: Downstream quality, maintainability and hidden-code risks",
      "group": "Gap",
      "category": "Novel",
      "title": "G8 (Gap) — Downstream quality, maintainability and hidden-code risks\n\nMore evidence is needed on long-term maintainability, code bloat,\ncognitive debt, hidden-code acceptance and whether short-term\ngeneration success creates downstream technical or review costs.\n\nCategory: Novel\n4 paper(s): Moreno-Lumbreras et al. (2026), Hassan et al. (2026), Borg\net al. (2026), Brun et al. (2026)",
      "color": "#B279A2",
      "shape": "triangle",
      "value": 4
    },
    {
      "id": "G9",
      "label": "G9: Tools, agents, interfaces and steering",
      "group": "Gap",
      "category": "Supporting",
      "title": "G9 (Gap) — Tools, agents, interfaces and steering\n\nResults are often tool- and prompt-specific; broader comparisons and\nevaluations are needed for newer agents, proactive behaviour,\nsteering/explanation interfaces, prompt strategies, guideline files\nand robustness across model versions.\n\nCategory: Supporting\n16 paper(s): Chen et al. (2025), Klemmer et al. (2024), Long et al.\n(2026), Cabrero-Daniel et al. (2024), Ziegler et al. (2026), Chen et\nal. (2026), Becker et al. (2025), Brandebusemeyer et al. (2026), Huang\net al. (2026), Hao et al. (2024), Fetzer et al. (2026), Sergeyuk et\nal. (2026), Otten et al. (2026), Mozannar et al. (2024), O'Brien\n(2025), Saari et al. (2024)",
      "color": "#54A24B",
      "shape": "triangle",
      "value": 16
    },
    {
      "id": "G10",
      "label": "G10: Cost, value and resource trade-offs",
      "group": "Gap",
      "category": "Novel",
      "title": "G10 (Gap) — Cost, value and resource trade-offs\n\nResearch rarely connects token/inference spend, safeguard cost and\nsaved developer time to realised organisational value, or studies how\nbudgets, caps and pricing changes affect delegation and adoption\nbehaviour.\n\nCategory: Novel\n10 paper(s): Heilman et al. (2026), Cui et al. (2026), Choudhuri et\nal. (2026), Becker et al. (2025), Murphy-Hill et al. (2026), Sergeyuk\net al. (2026), Migliarini et al. (2026), Hou et al. (2024), Amalfitano\net al. (2026), Yu et al. (2026)",
      "color": "#B279A2",
      "shape": "triangle",
      "value": 10
    },
    {
      "id": "G11",
      "label": "G11: Organisational governance and practitioner practice",
      "group": "Gap",
      "category": "Novel",
      "title": "G11 (Gap) — Organisational governance and practitioner practice\n\nHow organisations actually govern GenAI—setting rules, handling\nworkarounds, monitoring silent use, assigning ownership and balancing\ncompliance with productivity—has limited direct practitioner evidence.\n\nCategory: Novel\n7 paper(s): Zacharias et al. (2026), Amalfitano et al. (2026),\nMigliarini et al. (2026), Fetzer et al. (2026), Hassan et al. (2026),\nTang et al. (2026), Tufano et al. (2026)",
      "color": "#B279A2",
      "shape": "triangle",
      "value": 7
    },
    {
      "id": "G12",
      "label": "G12: Roles, workforce and education",
      "group": "Gap",
      "category": "Supporting",
      "title": "G12 (Gap) — Roles, workforce and education\n\nThe effects on junior roles, mentoring, education, oversight\nresponsibilities, job redesign and displacement remain insufficiently\ntested with affected practitioners across roles.\n\nCategory: Supporting\n3 paper(s): Tabarsi et al. (2026), Sergeyuk et al. (2026), Kam et al.\n(2025)",
      "color": "#54A24B",
      "shape": "triangle",
      "value": 3
    },
    {
      "id": "G13",
      "label": "G13: Workflow and lifecycle integration",
      "group": "Gap",
      "category": "Novel",
      "title": "G13 (Gap) — Workflow and lifecycle integration\n\nThere is limited evidence on how GenAI should be integrated across\nend-to-end software lifecycles, including specification, generation,\nverification, review, requirements/design and cross-role handoffs.\n\nCategory: Novel\n1 paper(s): Torun et al. (2026)",
      "color": "#B279A2",
      "shape": "triangle",
      "value": 1
    },
    {
      "id": "G14",
      "label": "G14: Research maturity and end-to-end validation",
      "group": "Gap",
      "category": "Supporting",
      "title": "G14 (Gap) — Research maturity and end-to-end validation\n\nSeveral proposals remain conceptual, prototype-based or\nbenchmark-focused; end-to-end field validation, replication and\ntransfer across organisations, domains and tool generations are still\nneeded.\n\nCategory: Supporting\n4 paper(s): Hassan et al. (2026), Torun et al. (2026), Subramonyam et\nal. (2025), Fetzer et al. (2026)",
      "color": "#54A24B",
      "shape": "triangle",
      "value": 4
    },
    {
      "id": "P1",
      "label": "Becker et al. (2025)",
      "group": "Paper",
      "title": "Measuring the Impact of Early-2025 AI on Experienced Open-Source\nDeveloper Productivity\n\nBecker et al. (2025) — Early-2025 AI and experienced open-source\ndevelopers\n2025 · Experiment / RCT · Speed and productivity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P2",
      "label": "Paradis et al. (2025)",
      "group": "Paper",
      "title": "How much does AI impact development speed? An enterprise-based\nrandomized controlled trial\n\nParadis et al. (2025) — Google enterprise RCT on development speed\n2025 · Experiment / RCT · Speed and productivity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P3",
      "label": "Cui et al. (2026)",
      "group": "Paper",
      "title": "The Effects of Generative AI on High-Skilled Work: Evidence from Three\nField Experiments with Software Developers\n\nCui et al. (2026) — Three field experiments with software developers\n2026 · Experiment / RCT · Speed and productivity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P4",
      "label": "Heilman et al. (2026)",
      "group": "Paper",
      "title": "GitHub Copilot and Developer Productivity: An Observational\nDose-Response Analysis\n\nHeilman et al. (2026) — Copilot dose-response at Microsoft\n2026 · Telemetry / repository mining · Speed and productivity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P5",
      "label": "Murphy-Hill et al. (2026)",
      "group": "Paper",
      "title": "Adoption and Impact of Command-Line AI Coding Agents: A Study of\nMicrosoft's Early 2026 Rollout of Claude Code and GitHub Copilot CLI\n\nMurphy-Hill et al. (2026) — Rollout of command-line AI agents at\nMicrosoft\n2026 · Telemetry / repository mining · Speed and productivity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P6",
      "label": "Borg et al. (2026)",
      "group": "Paper",
      "title": "Echoes of AI: Investigating the downstream effects of AI assistants on\nsoftware maintainability\n\nBorg et al. (2026) — Echoes of AI: effects on maintainability\n2026 · Experiment / RCT · Speed and productivity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P7",
      "label": "Chen et al. (2026)",
      "group": "Paper",
      "title": "Code with Me or for Me? How Increasing AI Automation Transforms\nDeveloper Workflows\n\nChen et al. (2026) — Code with me or for me? Copilots vs agents\n2026 · User study (lab or field) · Speed and productivity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P8",
      "label": "Otten et al. (2026)",
      "group": "Paper",
      "title": "Prompting in Practice: Investigating Software Practitioners' Use of\nGenerative AI Tools\n\nOtten et al. (2026) — Prompting in practice\n2026 · Survey · How practitioners use GenAI",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P9",
      "label": "Huang et al. (2026)",
      "group": "Paper",
      "title": "Professional Software Developers Don't Vibe, They Control: AI Agent\nUse for Coding in 2025\n\nHuang et al. (2026) — Professional developers don't vibe, they control\n2026 · Survey + observation · How practitioners use GenAI",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P10",
      "label": "Baumann et al. (2026)",
      "group": "Paper",
      "title": "SWE-chat: Coding Agent Interactions From Real Users in the Wild\n\nBaumann et al. (2026) — SWE-chat: coding-agent sessions in the wild\n2026 · Telemetry / repository mining · How practitioners use GenAI",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P11",
      "label": "Tang et al. (2026)",
      "group": "Paper",
      "title": "How Coding Agents Fail Their Users: A Large-Scale Analysis of\nDeveloper-Agent Misalignment in 20,574 Real-World Sessions\n\nTang et al. (2026) — How coding agents fail their users\n2026 · Telemetry / repository mining · How practitioners use GenAI",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P12",
      "label": "Hao et al. (2024)",
      "group": "Paper",
      "title": "An empirical study on developers' shared conversations with ChatGPT in\nGitHub pull requests and issues\n\nHao et al. (2024) — Shared ChatGPT conversations in pull requests and\nissues\n2024 · Telemetry / repository mining · How practitioners use GenAI",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P13",
      "label": "Ehsani et al. (2026)",
      "group": "Paper",
      "title": "What characteristics make ChatGPT effective for software issue\nresolution? An empirical study of task, project, and conversational\nsignals in GitHub issues\n\nEhsani et al. (2026) — What makes ChatGPT effective for issue\nresolution?\n2026 · Telemetry / repository mining · How practitioners use GenAI",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P14",
      "label": "Tufano et al. (2026)",
      "group": "Paper",
      "title": "Developers and generative AI: A study of self-admitted usage in open\nsource projects\n\nTufano et al. (2026) — Self-admitted use of ChatGPT and Copilot in\nopen source\n2026 · Telemetry / repository mining · How practitioners use GenAI",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P15",
      "label": "Liukko et al. (2024)",
      "group": "Paper",
      "title": "ChatGPT as a Full-Stack Web Developer\n\nLiukko et al. (2024) — ChatGPT as a full-stack web developer (book ch.\n9)\n2024 · Case study / action research · How practitioners use GenAI",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P16",
      "label": "Ulfsnes et al. (2024)",
      "group": "Paper",
      "title": "Transforming Software Development with Generative AI: Empirical\nInsights on Collaboration and Workflow\n\nUlfsnes et al. (2024) — Collaboration and workflow with GenAI (book\nch. 10)\n2024 · Interviews · How practitioners use GenAI",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P17",
      "label": "Cabrero-Daniel et al. (2024)",
      "group": "Paper",
      "title": "How Can Generative AI Enhance Software Management? Is It Better Done\nthan Perfect?\n\nCabrero-Daniel et al. (2024) — GenAI for software management (book ch.\n11)\n2024 · Experiment / RCT · How practitioners use GenAI",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P18",
      "label": "Barke et al. (2023)",
      "group": "Paper",
      "title": "Grounded Copilot: How Programmers Interact with Code-Generating Models\n\nBarke et al. (2023) — Grounded Copilot\n2023 · User study (lab or field) · Human–AI interaction and tool design",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P19",
      "label": "Liang et al. (2024)",
      "group": "Paper",
      "title": "A Large-Scale Survey on the Usability of AI Programming Assistants:\nSuccesses and Challenges\n\nLiang et al. (2024) — Usability of AI programming assistants\n2024 · Survey · Human–AI interaction and tool design",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P20",
      "label": "Mozannar et al. (2024)",
      "group": "Paper",
      "title": "Reading Between the Lines: Modeling User Behavior and Costs in\nAI-Assisted Programming\n\nMozannar et al. (2024) — Reading between the lines: user behaviour and\ncosts\n2024 · User study (lab or field) · Human–AI interaction and tool design",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P21",
      "label": "Wu et al. (2026)",
      "group": "Paper",
      "title": "How Do Developers Interact with AI? An Exploratory Study on Modeling\nDeveloper Programming Behavior\n\nWu et al. (2026) — How do developers interact with AI? (S-IASE model)\n2026 · User study (lab or field) · Human–AI interaction and tool design",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P22",
      "label": "Chen et al. (2025)",
      "group": "Paper",
      "title": "Need Help? Designing Proactive AI Assistants for Programming\n\nChen et al. (2025) — Need help? Proactive AI assistants for\nprogramming\n2025 · Experiment / RCT · Human–AI interaction and tool design",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P23",
      "label": "Ziegler et al. (2026)",
      "group": "Paper",
      "title": "Direct Manipulation and Natural Language Programming, Together at\nLast?\n\nZiegler et al. (2026) — Direct manipulation and natural-language\nprogramming together\n2026 · User study (lab or field) · Human–AI interaction and tool design",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P24",
      "label": "Subramonyam et al. (2025)",
      "group": "Paper",
      "title": "Prototyping with Prompts: Emerging Approaches and Challenges in\nGenerative AI Design for Collaborative Software Teams\n\nSubramonyam et al. (2025) — Prototyping with prompts\n2025 · Workshop / design study · Human–AI interaction and tool design",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P25",
      "label": "Brandebusemeyer et al. (2026)",
      "group": "Paper",
      "title": "Developers' Experience with Generative AI Beyond Productivity\nAssessment – Insights from an Empirical Mixed-Methods Field Study\n\nBrandebusemeyer et al. (2026) — Developers' experience beyond\nproductivity\n2026 · User study (lab or field) · Human–AI interaction and tool design",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P26",
      "label": "Zakharov et al. (2025)",
      "group": "Paper",
      "title": "AI in Software Engineering: Perceived Roles and Their Impact on\nAdoption\n\nZakharov et al. (2025) — Perceived roles of AI and adoption\n2025 · Survey + interviews · Human–AI interaction and tool design",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P27",
      "label": "Perry et al. (2023)",
      "group": "Paper",
      "title": "Do Users Write More Insecure Code with AI Assistants?\n\nPerry et al. (2023) — Do users write more insecure code with AI\nassistants?\n2023 · Experiment / RCT · Trust, verification and security",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P28",
      "label": "Klemmer et al. (2024)",
      "group": "Paper",
      "title": "Using AI Assistants in Software Development: A Qualitative Study on\nSecurity Practices and Concerns\n\nKlemmer et al. (2024) — AI assistants and security: interviews and\nReddit\n2024 · Interviews · Trust, verification and security",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P29",
      "label": "Sabouri et al. (2025)",
      "group": "Paper",
      "title": "Trust Dynamics in AI-Assisted Development: Definitions, Factors, and\nImplications\n\nSabouri et al. (2025) — Trust dynamics in AI-assisted development\n2025 · Survey + observation · Trust, verification and security",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P30",
      "label": "Choudhuri et al. (2025)",
      "group": "Paper",
      "title": "What Guides Our Choices? Modeling Developers' Trust and Behavioral\nIntentions Towards GenAI\n\nChoudhuri et al. (2025) — What guides our choices? Trust and\nbehavioural intentions\n2025 · Survey · Trust, verification and security",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P31",
      "label": "Yu et al. (2026)",
      "group": "Paper",
      "title": "Evaluating the quality of GenAI applications in software engineering:\na multi-case study\n\nYu et al. (2026) — Evaluating the quality of GenAI applications\n2026 · Case study / action research · Trust, verification and security",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P32",
      "label": "Giray et al. (2026)",
      "group": "Paper",
      "title": "An Empirical Study of Generative AI Adoption in Software Engineering\n\nGiray et al. (2026) — An empirical study of GenAI adoption in software\nengineering\n2026 · Survey · Adoption, organisations and governance",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P33",
      "label": "Stray et al. (2025)",
      "group": "Paper",
      "title": "Human-AI Collaboration in Software Development: A Mixed-Methods Study\nof Developers' Use of GitHub Copilot and ChatGPT\n\nStray et al. (2025) — Human–AI collaboration in a public-sector\norganisation\n2025 · Survey + interviews · Adoption, organisations and governance",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P34",
      "label": "Fetzer et al. (2026)",
      "group": "Paper",
      "title": "Responsible Engineering of Information Systems Based on Generative\nArtificial Intelligence: An Action Design Research Study at a German\nPremium Car Manufacturer\n\nFetzer et al. (2026) — Responsible engineering of GenAI-based systems\nat a car manufacturer\n2026 · Case study / action research · Adoption, organisations and governance",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P35",
      "label": "Choudhuri et al. (2026)",
      "group": "Paper",
      "title": "AI Where It Matters: Where, Why, and How Developers Want AI Support in\nDaily Work\n\nChoudhuri et al. (2026) — AI where it matters\n2026 · Survey · Adoption, organisations and governance",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P36",
      "label": "Sergeyuk et al. (2026)",
      "group": "Paper",
      "title": "Developer Needs and Feasible Features for AI Assistants in IDEs\n\nSergeyuk et al. (2026) — Developer needs and feasible features for AI\nin IDEs\n2026 · Interviews · Adoption, organisations and governance",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P37",
      "label": "Nguyen-Duc & Khanna (2024)",
      "group": "Paper",
      "title": "Value-Based Adoption of ChatGPT in Agile Software Development: A\nSurvey Study of Nordic Software Experts\n\nNguyen-Duc & Khanna (2024) — Value-based adoption of ChatGPT in Agile\ndevelopment (book ch. 12)\n2024 · Survey · Adoption, organisations and governance",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P38",
      "label": "Pereira et al. (2024)",
      "group": "Paper",
      "title": "Early Results from a Study of GenAI Adoption in a Large Brazilian\nCompany: The Case of Globo\n\nPereira et al. (2024) — GenAI adoption at Globo (book ch. 13)\n2024 · Case study / action research · Adoption, organisations and governance",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P39",
      "label": "Kam et al. (2025)",
      "group": "Paper",
      "title": "What do professional software developers need to know to succeed in an\nage of Artificial Intelligence?\n\nKam et al. (2025) — What do professional developers need to know in\nthe age of AI?\n2025 · Workshop / design study · Skills, juniors, education and identity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P40",
      "label": "Nguyen et al. (2024)",
      "group": "Paper",
      "title": "How Beginning Programmers and Code LLMs (Mis)read Each Other\n\nNguyen et al. (2024) — How beginning programmers and Code LLMs\n(mis)read each other\n2024 · User study (lab or field) · Skills, juniors, education and identity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P41",
      "label": "Zacharias et al. (2026)",
      "group": "Paper",
      "title": "Developers' Dilemma: Opportunities and Pitfalls of Generative AI for\nSoftware Development\n\nZacharias et al. (2026) — Developers' dilemma\n2026 · Interviews · Skills, juniors, education and identity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P42",
      "label": "Tabarsi et al. (2026)",
      "group": "Paper",
      "title": "LLMs' reshaping of people, processes, products, and society in\nsoftware development: a qualitative exploration with early adopters\n\nTabarsi et al. (2026) — LLMs reshaping people, processes, products and\nsociety\n2026 · Interviews · Skills, juniors, education and identity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P43",
      "label": "O'Brien (2025)",
      "group": "Paper",
      "title": "How Scientists Use Large Language Models to Program\n\nO'Brien (2025) — How scientists use large language models to program\n2025 · Survey + interviews · Skills, juniors, education and identity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P44",
      "label": "Saari et al. (2024)",
      "group": "Paper",
      "title": "Toward Guiding Students: Exploring Effective Approaches for Utilizing\nAI Tools in Programming Courses\n\nSaari et al. (2024) — Guiding students in using AI tools (book ch. 16)\n2024 · Survey · Skills, juniors, education and identity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P45",
      "label": "Hou et al. (2024)",
      "group": "Paper",
      "title": "Large Language Models for Software Engineering: A Systematic\nLiterature Review\n\nHou et al. (2024) — LLMs for software engineering: a systematic review\n2024 · Literature review / roadmap · Overviews, roadmaps and books",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P46",
      "label": "Amalfitano et al. (2026)",
      "group": "Paper",
      "title": "A Research Roadmap for Augmenting Software Engineering Processes and\nSoftware Products with Generative AI\n\nAmalfitano et al. (2026) — Research roadmap for GenAI-augmented\nsoftware engineering\n2026 · Literature review / roadmap · Overviews, roadmaps and books",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P47",
      "label": "Brun et al. (2026)",
      "group": "Paper",
      "title": "Automatically Engineering Trusted Software: A Research Roadmap\n\nBrun et al. (2026) — Automatically engineering trusted software: a\nresearch roadmap\n2026 · Literature review / roadmap · Overviews, roadmaps and books",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P49",
      "label": "Watanabe et al. (2026)",
      "group": "Paper",
      "title": "On the Use of Agentic Coding: An Empirical Study of Pull Requests on\nGitHub\n\nWatanabe et al. (2026) — On the use of agentic coding: pull requests\non GitHub\n2026 · Telemetry / repository mining · How practitioners use GenAI",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P50",
      "label": "Li et al. (2026)",
      "group": "Paper",
      "title": "Unveiling the Role of ChatGPT in Software Development: Insights from\nDeveloper–ChatGPT Interactions on GitHub\n\nLi et al. (2026) — The role of ChatGPT in software development: shared\nconversations on GitHub (DevChat)\n2026 · Telemetry / repository mining · How practitioners use GenAI",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P51",
      "label": "Moreno-Lumbreras et al. (2026)",
      "group": "Paper",
      "title": "BonsAIDE: An Extended Vision for Human–AI Interaction in IDEs\n\nMoreno-Lumbreras et al. (2026) — BonsAIDE: a vision for human–AI\ninteraction in IDEs\n2026 · User study (lab or field) · Human–AI interaction and tool design",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P52",
      "label": "Long et al. (2026)",
      "group": "Paper",
      "title": "Understanding and Enhancing CS Students' Interaction Experience with\nAI Coding Assistant Tools\n\nLong et al. (2026) — CS students' interaction with AI coding\nassistants: acceptance, behaviour and expectations\n2026 · User study (lab or field) · Skills, juniors, education and identity",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P53",
      "label": "Migliarini et al. (2026)",
      "group": "Paper",
      "title": "Ethical Prompt Engineering for AI-driven SE: Evidence-informed\nInteraction-time Governance Roadmap to 2030\n\nMigliarini et al. (2026) — Ethical prompt engineering for AI-driven\nSE: an interaction-time governance roadmap to 2030\n2026 · Literature review / roadmap · Overviews, roadmaps and books",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P54",
      "label": "Hassan et al. (2026)",
      "group": "Paper",
      "title": "Towards AI-Native Software Engineering (SE 3.0): A Vision and a\nChallenge Roadmap\n\nHassan et al. (2026) — Towards AI-native software engineering (SE\n3.0): a vision and challenge roadmap\n2026 · Literature review / roadmap · Overviews, roadmaps and books",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    },
    {
      "id": "P55",
      "label": "Torun et al. (2026)",
      "group": "Paper",
      "title": "Past, Present, and Future of Bug Tracking in the Generative AI Era\n\nTorun et al. (2026) — Past, present and future of bug tracking in the\ngenerative AI era\n2026 · Literature review / roadmap · Overviews, roadmaps and books",
      "color": "#4C78A8",
      "shape": "dot",
      "value": 1
    }
  ],
  "edges": [
    {
      "from": "F1",
      "to": "P49",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 1
    },
    {
      "from": "F1",
      "to": "P5",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 2
    },
    {
      "from": "F1",
      "to": "P2",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 3
    },
    {
      "from": "F1",
      "to": "P7",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 4
    },
    {
      "from": "F1",
      "to": "P1",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 5
    },
    {
      "from": "F1",
      "to": "P16",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 6
    },
    {
      "from": "F1",
      "to": "P4",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 7
    },
    {
      "from": "F1",
      "to": "P19",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 8
    },
    {
      "from": "F1",
      "to": "P3",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 9
    },
    {
      "from": "F1",
      "to": "P45",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 10
    },
    {
      "from": "F1",
      "to": "P6",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 11
    },
    {
      "from": "F1",
      "to": "P21",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 12
    },
    {
      "from": "F1",
      "to": "P41",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 13
    },
    {
      "from": "F1",
      "to": "P32",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 14
    },
    {
      "from": "F1",
      "to": "P37",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 15
    },
    {
      "from": "F2",
      "to": "P30",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 16
    },
    {
      "from": "F2",
      "to": "P42",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 17
    },
    {
      "from": "F2",
      "to": "P3",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 18
    },
    {
      "from": "F2",
      "to": "P6",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 19
    },
    {
      "from": "F2",
      "to": "P46",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 20
    },
    {
      "from": "F2",
      "to": "P55",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 21
    },
    {
      "from": "F2",
      "to": "P51",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 22
    },
    {
      "from": "F2",
      "to": "P4",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 23
    },
    {
      "from": "F2",
      "to": "P22",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 24
    },
    {
      "from": "F3",
      "to": "P11",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 25
    },
    {
      "from": "F3",
      "to": "P53",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 26
    },
    {
      "from": "F3",
      "to": "P30",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 27
    },
    {
      "from": "F3",
      "to": "P29",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 28
    },
    {
      "from": "F3",
      "to": "P43",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 29
    },
    {
      "from": "F3",
      "to": "P52",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 30
    },
    {
      "from": "F3",
      "to": "P9",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 31
    },
    {
      "from": "F3",
      "to": "P20",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 32
    },
    {
      "from": "F3",
      "to": "P28",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 33
    },
    {
      "from": "F3",
      "to": "P44",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 34
    },
    {
      "from": "F3",
      "to": "P17",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 35
    },
    {
      "from": "F3",
      "to": "P47",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 36
    },
    {
      "from": "F4",
      "to": "P50",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 37
    },
    {
      "from": "F4",
      "to": "P10",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 38
    },
    {
      "from": "F4",
      "to": "P49",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 39
    },
    {
      "from": "F4",
      "to": "P7",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 40
    },
    {
      "from": "F4",
      "to": "P8",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 41
    },
    {
      "from": "F4",
      "to": "P9",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 42
    },
    {
      "from": "F4",
      "to": "P52",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 43
    },
    {
      "from": "F4",
      "to": "P1",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 44
    },
    {
      "from": "F4",
      "to": "P40",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 45
    },
    {
      "from": "F4",
      "to": "P44",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 46
    },
    {
      "from": "F4",
      "to": "P11",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 47
    },
    {
      "from": "F4",
      "to": "P55",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 48
    },
    {
      "from": "F4",
      "to": "P33",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 49
    },
    {
      "from": "F4",
      "to": "P31",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 50
    },
    {
      "from": "F5",
      "to": "P32",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 51
    },
    {
      "from": "F5",
      "to": "P36",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 52
    },
    {
      "from": "F5",
      "to": "P9",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 53
    },
    {
      "from": "F5",
      "to": "P19",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 54
    },
    {
      "from": "F5",
      "to": "P33",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 55
    },
    {
      "from": "F5",
      "to": "P12",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 56
    },
    {
      "from": "F5",
      "to": "P26",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 57
    },
    {
      "from": "F6",
      "to": "P5",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 58
    },
    {
      "from": "F6",
      "to": "P38",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 59
    },
    {
      "from": "F7",
      "to": "P2",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 60
    },
    {
      "from": "F7",
      "to": "P3",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 61
    },
    {
      "from": "F7",
      "to": "P33",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 62
    },
    {
      "from": "F7",
      "to": "P54",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 63
    },
    {
      "from": "F7",
      "to": "P47",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 64
    },
    {
      "from": "F7",
      "to": "P39",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 65
    },
    {
      "from": "F7",
      "to": "P36",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 66
    },
    {
      "from": "F7",
      "to": "P40",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 67
    },
    {
      "from": "F7",
      "to": "P34",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 68
    },
    {
      "from": "F7",
      "to": "P22",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 69
    },
    {
      "from": "F7",
      "to": "P43",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 70
    },
    {
      "from": "F7",
      "to": "P35",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 71
    },
    {
      "from": "F7",
      "to": "P41",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 72
    },
    {
      "from": "F7",
      "to": "P26",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 73
    },
    {
      "from": "F7",
      "to": "P32",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 74
    },
    {
      "from": "F7",
      "to": "P46",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 75
    },
    {
      "from": "F7",
      "to": "P42",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 76
    },
    {
      "from": "F7",
      "to": "P15",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 77
    },
    {
      "from": "F8",
      "to": "P24",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 78
    },
    {
      "from": "F8",
      "to": "P53",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 79
    },
    {
      "from": "F8",
      "to": "P13",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 80
    },
    {
      "from": "F8",
      "to": "P8",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 81
    },
    {
      "from": "F8",
      "to": "P12",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 82
    },
    {
      "from": "F8",
      "to": "P14",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 83
    },
    {
      "from": "F8",
      "to": "P52",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 84
    },
    {
      "from": "F8",
      "to": "P30",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 85
    },
    {
      "from": "F8",
      "to": "P15",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 86
    },
    {
      "from": "F8",
      "to": "P54",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 87
    },
    {
      "from": "F8",
      "to": "P23",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 88
    },
    {
      "from": "F9",
      "to": "P6",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 89
    },
    {
      "from": "F9",
      "to": "P8",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 90
    },
    {
      "from": "F9",
      "to": "P28",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 91
    },
    {
      "from": "F9",
      "to": "P50",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 92
    },
    {
      "from": "F9",
      "to": "P45",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 93
    },
    {
      "from": "F9",
      "to": "P12",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 94
    },
    {
      "from": "F9",
      "to": "P13",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 95
    },
    {
      "from": "F9",
      "to": "P42",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 96
    },
    {
      "from": "F9",
      "to": "P14",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 97
    },
    {
      "from": "F9",
      "to": "P37",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 98
    },
    {
      "from": "F9",
      "to": "P49",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 99
    },
    {
      "from": "F10",
      "to": "P20",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 100
    },
    {
      "from": "F10",
      "to": "P31",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 101
    },
    {
      "from": "F10",
      "to": "P13",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 102
    },
    {
      "from": "F10",
      "to": "P25",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 103
    },
    {
      "from": "F10",
      "to": "P18",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 104
    },
    {
      "from": "F10",
      "to": "P41",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 105
    },
    {
      "from": "F10",
      "to": "P21",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 106
    },
    {
      "from": "F10",
      "to": "P43",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 107
    },
    {
      "from": "F10",
      "to": "P14",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 108
    },
    {
      "from": "F10",
      "to": "P51",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 109
    },
    {
      "from": "F11",
      "to": "P46",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 110
    },
    {
      "from": "F11",
      "to": "P26",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 111
    },
    {
      "from": "F11",
      "to": "P54",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 112
    },
    {
      "from": "F11",
      "to": "P32",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 113
    },
    {
      "from": "F11",
      "to": "P38",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 114
    },
    {
      "from": "F11",
      "to": "P16",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 115
    },
    {
      "from": "F12",
      "to": "P7",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 116
    },
    {
      "from": "F12",
      "to": "P25",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 117
    },
    {
      "from": "F12",
      "to": "P21",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 118
    },
    {
      "from": "F12",
      "to": "P51",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 119
    },
    {
      "from": "F13",
      "to": "P27",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 120
    },
    {
      "from": "F13",
      "to": "P10",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 121
    },
    {
      "from": "F13",
      "to": "P28",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 122
    },
    {
      "from": "F13",
      "to": "P34",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 123
    },
    {
      "from": "F13",
      "to": "P35",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 124
    },
    {
      "from": "F13",
      "to": "P37",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 125
    },
    {
      "from": "F13",
      "to": "P45",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 126
    },
    {
      "from": "F14",
      "to": "P15",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 127
    },
    {
      "from": "F14",
      "to": "P17",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 128
    },
    {
      "from": "F14",
      "to": "P45",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 129
    },
    {
      "from": "F15",
      "to": "P46",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 130
    },
    {
      "from": "G1",
      "to": "P39",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 131
    },
    {
      "from": "G1",
      "to": "P42",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 132
    },
    {
      "from": "G1",
      "to": "P10",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 133
    },
    {
      "from": "G1",
      "to": "P11",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 134
    },
    {
      "from": "G1",
      "to": "P33",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 135
    },
    {
      "from": "G1",
      "to": "P43",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 136
    },
    {
      "from": "G1",
      "to": "P9",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 137
    },
    {
      "from": "G1",
      "to": "P19",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 138
    },
    {
      "from": "G1",
      "to": "P1",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 139
    },
    {
      "from": "G1",
      "to": "P2",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 140
    },
    {
      "from": "G1",
      "to": "P23",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 141
    },
    {
      "from": "G1",
      "to": "P49",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 142
    },
    {
      "from": "G1",
      "to": "P15",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 143
    },
    {
      "from": "G1",
      "to": "P27",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 144
    },
    {
      "from": "G1",
      "to": "P6",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 145
    },
    {
      "from": "G1",
      "to": "P25",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 146
    },
    {
      "from": "G1",
      "to": "P29",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 147
    },
    {
      "from": "G1",
      "to": "P51",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 148
    },
    {
      "from": "G1",
      "to": "P5",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 149
    },
    {
      "from": "G1",
      "to": "P38",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 150
    },
    {
      "from": "G1",
      "to": "P3",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 151
    },
    {
      "from": "G1",
      "to": "P28",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 152
    },
    {
      "from": "G1",
      "to": "P31",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 153
    },
    {
      "from": "G1",
      "to": "P24",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 154
    },
    {
      "from": "G1",
      "to": "P55",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 155
    },
    {
      "from": "G2",
      "to": "P20",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 156
    },
    {
      "from": "G2",
      "to": "P18",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 157
    },
    {
      "from": "G2",
      "to": "P22",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 158
    },
    {
      "from": "G2",
      "to": "P7",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 159
    },
    {
      "from": "G2",
      "to": "P47",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 160
    },
    {
      "from": "G2",
      "to": "P27",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 161
    },
    {
      "from": "G2",
      "to": "P21",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 162
    },
    {
      "from": "G2",
      "to": "P52",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 163
    },
    {
      "from": "G2",
      "to": "P44",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 164
    },
    {
      "from": "G3",
      "to": "P8",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 165
    },
    {
      "from": "G3",
      "to": "P32",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 166
    },
    {
      "from": "G3",
      "to": "P28",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 167
    },
    {
      "from": "G3",
      "to": "P39",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 168
    },
    {
      "from": "G3",
      "to": "P50",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 169
    },
    {
      "from": "G3",
      "to": "P12",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 170
    },
    {
      "from": "G3",
      "to": "P13",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 171
    },
    {
      "from": "G3",
      "to": "P40",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 172
    },
    {
      "from": "G3",
      "to": "P45",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 173
    },
    {
      "from": "G3",
      "to": "P33",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 174
    },
    {
      "from": "G3",
      "to": "P21",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 175
    },
    {
      "from": "G3",
      "to": "P37",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 176
    },
    {
      "from": "G4",
      "to": "P5",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 177
    },
    {
      "from": "G4",
      "to": "P30",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 178
    },
    {
      "from": "G4",
      "to": "P35",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 179
    },
    {
      "from": "G4",
      "to": "P41",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 180
    },
    {
      "from": "G4",
      "to": "P4",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 181
    },
    {
      "from": "G4",
      "to": "P11",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 182
    },
    {
      "from": "G5",
      "to": "P25",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 183
    },
    {
      "from": "G5",
      "to": "P51",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 184
    },
    {
      "from": "G5",
      "to": "P4",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 185
    },
    {
      "from": "G5",
      "to": "P10",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 186
    },
    {
      "from": "G5",
      "to": "P12",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 187
    },
    {
      "from": "G5",
      "to": "P3",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 188
    },
    {
      "from": "G5",
      "to": "P50",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 189
    },
    {
      "from": "G5",
      "to": "P26",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 190
    },
    {
      "from": "G5",
      "to": "P17",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 191
    },
    {
      "from": "G5",
      "to": "P19",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 192
    },
    {
      "from": "G5",
      "to": "P49",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 193
    },
    {
      "from": "G5",
      "to": "P32",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 194
    },
    {
      "from": "G5",
      "to": "P34",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 195
    },
    {
      "from": "G5",
      "to": "P13",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 196
    },
    {
      "from": "G5",
      "to": "P8",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 197
    },
    {
      "from": "G6",
      "to": "P28",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 198
    },
    {
      "from": "G6",
      "to": "P35",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 199
    },
    {
      "from": "G6",
      "to": "P33",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 200
    },
    {
      "from": "G6",
      "to": "P26",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 201
    },
    {
      "from": "G6",
      "to": "P29",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 202
    },
    {
      "from": "G6",
      "to": "P21",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 203
    },
    {
      "from": "G6",
      "to": "P49",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 204
    },
    {
      "from": "G6",
      "to": "P5",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 205
    },
    {
      "from": "G6",
      "to": "P6",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 206
    },
    {
      "from": "G6",
      "to": "P14",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 207
    },
    {
      "from": "G6",
      "to": "P50",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 208
    },
    {
      "from": "G6",
      "to": "P40",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 209
    },
    {
      "from": "G6",
      "to": "P42",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 210
    },
    {
      "from": "G6",
      "to": "P2",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 211
    },
    {
      "from": "G6",
      "to": "P7",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 212
    },
    {
      "from": "G6",
      "to": "P53",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 213
    },
    {
      "from": "G6",
      "to": "P54",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 214
    },
    {
      "from": "G6",
      "to": "P36",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 215
    },
    {
      "from": "G7",
      "to": "P52",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 216
    },
    {
      "from": "G7",
      "to": "P16",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 217
    },
    {
      "from": "G7",
      "to": "P40",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 218
    },
    {
      "from": "G7",
      "to": "P32",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 219
    },
    {
      "from": "G7",
      "to": "P46",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 220
    },
    {
      "from": "G7",
      "to": "P9",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 221
    },
    {
      "from": "G7",
      "to": "P30",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 222
    },
    {
      "from": "G7",
      "to": "P37",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 223
    },
    {
      "from": "G8",
      "to": "P51",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 224
    },
    {
      "from": "G8",
      "to": "P54",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 225
    },
    {
      "from": "G8",
      "to": "P6",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 226
    },
    {
      "from": "G8",
      "to": "P47",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 227
    },
    {
      "from": "G9",
      "to": "P22",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 228
    },
    {
      "from": "G9",
      "to": "P28",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 229
    },
    {
      "from": "G9",
      "to": "P52",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 230
    },
    {
      "from": "G9",
      "to": "P17",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 231
    },
    {
      "from": "G9",
      "to": "P23",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 232
    },
    {
      "from": "G9",
      "to": "P7",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 233
    },
    {
      "from": "G9",
      "to": "P1",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 234
    },
    {
      "from": "G9",
      "to": "P25",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 235
    },
    {
      "from": "G9",
      "to": "P9",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 236
    },
    {
      "from": "G9",
      "to": "P12",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 237
    },
    {
      "from": "G9",
      "to": "P34",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 238
    },
    {
      "from": "G9",
      "to": "P36",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 239
    },
    {
      "from": "G9",
      "to": "P8",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 240
    },
    {
      "from": "G9",
      "to": "P20",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 241
    },
    {
      "from": "G9",
      "to": "P43",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 242
    },
    {
      "from": "G9",
      "to": "P44",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 243
    },
    {
      "from": "G10",
      "to": "P4",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 244
    },
    {
      "from": "G10",
      "to": "P3",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 245
    },
    {
      "from": "G10",
      "to": "P35",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 246
    },
    {
      "from": "G10",
      "to": "P1",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 247
    },
    {
      "from": "G10",
      "to": "P5",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 248
    },
    {
      "from": "G10",
      "to": "P36",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 249
    },
    {
      "from": "G10",
      "to": "P53",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 250
    },
    {
      "from": "G10",
      "to": "P45",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 251
    },
    {
      "from": "G10",
      "to": "P46",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 252
    },
    {
      "from": "G10",
      "to": "P31",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 253
    },
    {
      "from": "G11",
      "to": "P41",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 254
    },
    {
      "from": "G11",
      "to": "P46",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 255
    },
    {
      "from": "G11",
      "to": "P53",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 256
    },
    {
      "from": "G11",
      "to": "P34",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 257
    },
    {
      "from": "G11",
      "to": "P54",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 258
    },
    {
      "from": "G11",
      "to": "P11",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 259
    },
    {
      "from": "G11",
      "to": "P14",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 260
    },
    {
      "from": "G12",
      "to": "P42",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 261
    },
    {
      "from": "G12",
      "to": "P36",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 262
    },
    {
      "from": "G12",
      "to": "P39",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 263
    },
    {
      "from": "G13",
      "to": "P55",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 264
    },
    {
      "from": "G14",
      "to": "P54",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 265
    },
    {
      "from": "G14",
      "to": "P55",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 266
    },
    {
      "from": "G14",
      "to": "P24",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 267
    },
    {
      "from": "G14",
      "to": "P34",
      "kind": "paper",
      "width": 1,
      "color": {
        "color": "#BBBBBB",
        "opacity": 0.5
      },
      "id": 268
    },
    {
      "from": "F1",
      "to": "F2",
      "kind": "shared",
      "value": 3,
      "title": "F1 ↔ F2: 3 shared paper(s)\n• Heilman et al. (2026)\n• Cui et al. (2026)\n• Borg et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 269
    },
    {
      "from": "F1",
      "to": "F4",
      "kind": "shared",
      "value": 3,
      "title": "F1 ↔ F4: 3 shared paper(s)\n• Watanabe et al. (2026)\n• Chen et al. (2026)\n• Becker et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 270
    },
    {
      "from": "F1",
      "to": "F5",
      "kind": "shared",
      "value": 2,
      "title": "F1 ↔ F5: 2 shared paper(s)\n• Liang et al. (2024)\n• Giray et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 271
    },
    {
      "from": "F1",
      "to": "F6",
      "kind": "shared",
      "value": 1,
      "title": "F1 ↔ F6: 1 shared paper(s)\n• Murphy-Hill et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 272
    },
    {
      "from": "F1",
      "to": "F7",
      "kind": "shared",
      "value": 4,
      "title": "F1 ↔ F7: 4 shared paper(s)\n• Paradis et al. (2025)\n• Cui et al. (2026)\n• Zacharias et al. (2026)\n• Giray et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 273
    },
    {
      "from": "F1",
      "to": "F9",
      "kind": "shared",
      "value": 4,
      "title": "F1 ↔ F9: 4 shared paper(s)\n• Watanabe et al. (2026)\n• Hou et al. (2024)\n• Borg et al. (2026)\n• Nguyen-Duc & Khanna (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 274
    },
    {
      "from": "F1",
      "to": "F10",
      "kind": "shared",
      "value": 2,
      "title": "F1 ↔ F10: 2 shared paper(s)\n• Wu et al. (2026)\n• Zacharias et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 275
    },
    {
      "from": "F1",
      "to": "F11",
      "kind": "shared",
      "value": 2,
      "title": "F1 ↔ F11: 2 shared paper(s)\n• Ulfsnes et al. (2024)\n• Giray et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 276
    },
    {
      "from": "F1",
      "to": "F12",
      "kind": "shared",
      "value": 2,
      "title": "F1 ↔ F12: 2 shared paper(s)\n• Chen et al. (2026)\n• Wu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 277
    },
    {
      "from": "F1",
      "to": "F13",
      "kind": "shared",
      "value": 2,
      "title": "F1 ↔ F13: 2 shared paper(s)\n• Hou et al. (2024)\n• Nguyen-Duc & Khanna (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 278
    },
    {
      "from": "F1",
      "to": "F14",
      "kind": "shared",
      "value": 1,
      "title": "F1 ↔ F14: 1 shared paper(s)\n• Hou et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 279
    },
    {
      "from": "F1",
      "to": "G1",
      "kind": "shared",
      "value": 7,
      "title": "F1 ↔ G1: 7 shared paper(s)\n• Watanabe et al. (2026)\n• Murphy-Hill et al. (2026)\n• Paradis et al. (2025)\n• Becker et al. (2025)\n• Liang et al. (2024)\n• Cui et al. (2026)\n• Borg et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 280
    },
    {
      "from": "F1",
      "to": "G2",
      "kind": "shared",
      "value": 2,
      "title": "F1 ↔ G2: 2 shared paper(s)\n• Chen et al. (2026)\n• Wu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 281
    },
    {
      "from": "F1",
      "to": "G3",
      "kind": "shared",
      "value": 4,
      "title": "F1 ↔ G3: 4 shared paper(s)\n• Hou et al. (2024)\n• Wu et al. (2026)\n• Giray et al. (2026)\n• Nguyen-Duc & Khanna (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 282
    },
    {
      "from": "F1",
      "to": "G4",
      "kind": "shared",
      "value": 3,
      "title": "F1 ↔ G4: 3 shared paper(s)\n• Murphy-Hill et al. (2026)\n• Heilman et al. (2026)\n• Zacharias et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 283
    },
    {
      "from": "F1",
      "to": "G5",
      "kind": "shared",
      "value": 5,
      "title": "F1 ↔ G5: 5 shared paper(s)\n• Watanabe et al. (2026)\n• Heilman et al. (2026)\n• Liang et al. (2024)\n• Cui et al. (2026)\n• Giray et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 284
    },
    {
      "from": "F1",
      "to": "G6",
      "kind": "shared",
      "value": 6,
      "title": "F1 ↔ G6: 6 shared paper(s)\n• Watanabe et al. (2026)\n• Murphy-Hill et al. (2026)\n• Paradis et al. (2025)\n• Chen et al. (2026)\n• Borg et al. (2026)\n• Wu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 285
    },
    {
      "from": "F1",
      "to": "G7",
      "kind": "shared",
      "value": 3,
      "title": "F1 ↔ G7: 3 shared paper(s)\n• Ulfsnes et al. (2024)\n• Giray et al. (2026)\n• Nguyen-Duc & Khanna (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 286
    },
    {
      "from": "F1",
      "to": "G8",
      "kind": "shared",
      "value": 1,
      "title": "F1 ↔ G8: 1 shared paper(s)\n• Borg et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 287
    },
    {
      "from": "F1",
      "to": "G9",
      "kind": "shared",
      "value": 2,
      "title": "F1 ↔ G9: 2 shared paper(s)\n• Chen et al. (2026)\n• Becker et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 288
    },
    {
      "from": "F1",
      "to": "G10",
      "kind": "shared",
      "value": 5,
      "title": "F1 ↔ G10: 5 shared paper(s)\n• Murphy-Hill et al. (2026)\n• Becker et al. (2025)\n• Heilman et al. (2026)\n• Cui et al. (2026)\n• Hou et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 289
    },
    {
      "from": "F1",
      "to": "G11",
      "kind": "shared",
      "value": 1,
      "title": "F1 ↔ G11: 1 shared paper(s)\n• Zacharias et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 290
    },
    {
      "from": "F2",
      "to": "F3",
      "kind": "shared",
      "value": 1,
      "title": "F2 ↔ F3: 1 shared paper(s)\n• Choudhuri et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 291
    },
    {
      "from": "F2",
      "to": "F4",
      "kind": "shared",
      "value": 1,
      "title": "F2 ↔ F4: 1 shared paper(s)\n• Torun et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 292
    },
    {
      "from": "F2",
      "to": "F7",
      "kind": "shared",
      "value": 4,
      "title": "F2 ↔ F7: 4 shared paper(s)\n• Tabarsi et al. (2026)\n• Cui et al. (2026)\n• Amalfitano et al. (2026)\n• Chen et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 293
    },
    {
      "from": "F2",
      "to": "F8",
      "kind": "shared",
      "value": 1,
      "title": "F2 ↔ F8: 1 shared paper(s)\n• Choudhuri et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 294
    },
    {
      "from": "F2",
      "to": "F9",
      "kind": "shared",
      "value": 2,
      "title": "F2 ↔ F9: 2 shared paper(s)\n• Tabarsi et al. (2026)\n• Borg et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 295
    },
    {
      "from": "F2",
      "to": "F10",
      "kind": "shared",
      "value": 1,
      "title": "F2 ↔ F10: 1 shared paper(s)\n• Moreno-Lumbreras et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 296
    },
    {
      "from": "F2",
      "to": "F11",
      "kind": "shared",
      "value": 1,
      "title": "F2 ↔ F11: 1 shared paper(s)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 297
    },
    {
      "from": "F2",
      "to": "F12",
      "kind": "shared",
      "value": 1,
      "title": "F2 ↔ F12: 1 shared paper(s)\n• Moreno-Lumbreras et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 298
    },
    {
      "from": "F2",
      "to": "F15",
      "kind": "shared",
      "value": 1,
      "title": "F2 ↔ F15: 1 shared paper(s)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 299
    },
    {
      "from": "F2",
      "to": "G1",
      "kind": "shared",
      "value": 5,
      "title": "F2 ↔ G1: 5 shared paper(s)\n• Tabarsi et al. (2026)\n• Cui et al. (2026)\n• Borg et al. (2026)\n• Torun et al. (2026)\n• Moreno-Lumbreras et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 300
    },
    {
      "from": "F2",
      "to": "G2",
      "kind": "shared",
      "value": 1,
      "title": "F2 ↔ G2: 1 shared paper(s)\n• Chen et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 301
    },
    {
      "from": "F2",
      "to": "G4",
      "kind": "shared",
      "value": 2,
      "title": "F2 ↔ G4: 2 shared paper(s)\n• Choudhuri et al. (2025)\n• Heilman et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 302
    },
    {
      "from": "F2",
      "to": "G5",
      "kind": "shared",
      "value": 3,
      "title": "F2 ↔ G5: 3 shared paper(s)\n• Cui et al. (2026)\n• Moreno-Lumbreras et al. (2026)\n• Heilman et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 303
    },
    {
      "from": "F2",
      "to": "G6",
      "kind": "shared",
      "value": 2,
      "title": "F2 ↔ G6: 2 shared paper(s)\n• Tabarsi et al. (2026)\n• Borg et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 304
    },
    {
      "from": "F2",
      "to": "G7",
      "kind": "shared",
      "value": 2,
      "title": "F2 ↔ G7: 2 shared paper(s)\n• Choudhuri et al. (2025)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 305
    },
    {
      "from": "F2",
      "to": "G8",
      "kind": "shared",
      "value": 2,
      "title": "F2 ↔ G8: 2 shared paper(s)\n• Borg et al. (2026)\n• Moreno-Lumbreras et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 306
    },
    {
      "from": "F2",
      "to": "G9",
      "kind": "shared",
      "value": 1,
      "title": "F2 ↔ G9: 1 shared paper(s)\n• Chen et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 307
    },
    {
      "from": "F2",
      "to": "G10",
      "kind": "shared",
      "value": 3,
      "title": "F2 ↔ G10: 3 shared paper(s)\n• Cui et al. (2026)\n• Amalfitano et al. (2026)\n• Heilman et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 308
    },
    {
      "from": "F2",
      "to": "G11",
      "kind": "shared",
      "value": 1,
      "title": "F2 ↔ G11: 1 shared paper(s)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 309
    },
    {
      "from": "F2",
      "to": "G12",
      "kind": "shared",
      "value": 1,
      "title": "F2 ↔ G12: 1 shared paper(s)\n• Tabarsi et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 310
    },
    {
      "from": "F2",
      "to": "G13",
      "kind": "shared",
      "value": 1,
      "title": "F2 ↔ G13: 1 shared paper(s)\n• Torun et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 311
    },
    {
      "from": "F2",
      "to": "G14",
      "kind": "shared",
      "value": 1,
      "title": "F2 ↔ G14: 1 shared paper(s)\n• Torun et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 312
    },
    {
      "from": "F3",
      "to": "F4",
      "kind": "shared",
      "value": 4,
      "title": "F3 ↔ F4: 4 shared paper(s)\n• Tang et al. (2026)\n• Long et al. (2026)\n• Huang et al. (2026)\n• Saari et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 313
    },
    {
      "from": "F3",
      "to": "F5",
      "kind": "shared",
      "value": 1,
      "title": "F3 ↔ F5: 1 shared paper(s)\n• Huang et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 314
    },
    {
      "from": "F3",
      "to": "F7",
      "kind": "shared",
      "value": 2,
      "title": "F3 ↔ F7: 2 shared paper(s)\n• O'Brien (2025)\n• Brun et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 315
    },
    {
      "from": "F3",
      "to": "F8",
      "kind": "shared",
      "value": 3,
      "title": "F3 ↔ F8: 3 shared paper(s)\n• Migliarini et al. (2026)\n• Choudhuri et al. (2025)\n• Long et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 316
    },
    {
      "from": "F3",
      "to": "F9",
      "kind": "shared",
      "value": 1,
      "title": "F3 ↔ F9: 1 shared paper(s)\n• Klemmer et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 317
    },
    {
      "from": "F3",
      "to": "F10",
      "kind": "shared",
      "value": 2,
      "title": "F3 ↔ F10: 2 shared paper(s)\n• O'Brien (2025)\n• Mozannar et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 318
    },
    {
      "from": "F3",
      "to": "F13",
      "kind": "shared",
      "value": 1,
      "title": "F3 ↔ F13: 1 shared paper(s)\n• Klemmer et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 319
    },
    {
      "from": "F3",
      "to": "F14",
      "kind": "shared",
      "value": 1,
      "title": "F3 ↔ F14: 1 shared paper(s)\n• Cabrero-Daniel et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 320
    },
    {
      "from": "F3",
      "to": "G1",
      "kind": "shared",
      "value": 5,
      "title": "F3 ↔ G1: 5 shared paper(s)\n• Tang et al. (2026)\n• Sabouri et al. (2025)\n• O'Brien (2025)\n• Huang et al. (2026)\n• Klemmer et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 321
    },
    {
      "from": "F3",
      "to": "G2",
      "kind": "shared",
      "value": 4,
      "title": "F3 ↔ G2: 4 shared paper(s)\n• Long et al. (2026)\n• Mozannar et al. (2024)\n• Saari et al. (2024)\n• Brun et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 322
    },
    {
      "from": "F3",
      "to": "G3",
      "kind": "shared",
      "value": 1,
      "title": "F3 ↔ G3: 1 shared paper(s)\n• Klemmer et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 323
    },
    {
      "from": "F3",
      "to": "G4",
      "kind": "shared",
      "value": 2,
      "title": "F3 ↔ G4: 2 shared paper(s)\n• Tang et al. (2026)\n• Choudhuri et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 324
    },
    {
      "from": "F3",
      "to": "G5",
      "kind": "shared",
      "value": 1,
      "title": "F3 ↔ G5: 1 shared paper(s)\n• Cabrero-Daniel et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 325
    },
    {
      "from": "F3",
      "to": "G6",
      "kind": "shared",
      "value": 3,
      "title": "F3 ↔ G6: 3 shared paper(s)\n• Migliarini et al. (2026)\n• Sabouri et al. (2025)\n• Klemmer et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 326
    },
    {
      "from": "F3",
      "to": "G7",
      "kind": "shared",
      "value": 3,
      "title": "F3 ↔ G7: 3 shared paper(s)\n• Choudhuri et al. (2025)\n• Long et al. (2026)\n• Huang et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 327
    },
    {
      "from": "F3",
      "to": "G8",
      "kind": "shared",
      "value": 1,
      "title": "F3 ↔ G8: 1 shared paper(s)\n• Brun et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 328
    },
    {
      "from": "F3",
      "to": "G9",
      "kind": "shared",
      "value": 7,
      "title": "F3 ↔ G9: 7 shared paper(s)\n• O'Brien (2025)\n• Long et al. (2026)\n• Huang et al. (2026)\n• Mozannar et al. (2024)\n• Klemmer et al. (2024)\n• Saari et al. (2024)\n• Cabrero-Daniel et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 329
    },
    {
      "from": "F3",
      "to": "G10",
      "kind": "shared",
      "value": 1,
      "title": "F3 ↔ G10: 1 shared paper(s)\n• Migliarini et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 330
    },
    {
      "from": "F3",
      "to": "G11",
      "kind": "shared",
      "value": 2,
      "title": "F3 ↔ G11: 2 shared paper(s)\n• Tang et al. (2026)\n• Migliarini et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 331
    },
    {
      "from": "F4",
      "to": "F5",
      "kind": "shared",
      "value": 2,
      "title": "F4 ↔ F5: 2 shared paper(s)\n• Huang et al. (2026)\n• Stray et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 332
    },
    {
      "from": "F4",
      "to": "F7",
      "kind": "shared",
      "value": 2,
      "title": "F4 ↔ F7: 2 shared paper(s)\n• Nguyen et al. (2024)\n• Stray et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 333
    },
    {
      "from": "F4",
      "to": "F8",
      "kind": "shared",
      "value": 2,
      "title": "F4 ↔ F8: 2 shared paper(s)\n• Otten et al. (2026)\n• Long et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 334
    },
    {
      "from": "F4",
      "to": "F9",
      "kind": "shared",
      "value": 3,
      "title": "F4 ↔ F9: 3 shared paper(s)\n• Li et al. (2026)\n• Watanabe et al. (2026)\n• Otten et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 335
    },
    {
      "from": "F4",
      "to": "F10",
      "kind": "shared",
      "value": 1,
      "title": "F4 ↔ F10: 1 shared paper(s)\n• Yu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 336
    },
    {
      "from": "F4",
      "to": "F12",
      "kind": "shared",
      "value": 1,
      "title": "F4 ↔ F12: 1 shared paper(s)\n• Chen et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 337
    },
    {
      "from": "F4",
      "to": "F13",
      "kind": "shared",
      "value": 1,
      "title": "F4 ↔ F13: 1 shared paper(s)\n• Baumann et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 338
    },
    {
      "from": "F4",
      "to": "G1",
      "kind": "shared",
      "value": 8,
      "title": "F4 ↔ G1: 8 shared paper(s)\n• Baumann et al. (2026)\n• Watanabe et al. (2026)\n• Huang et al. (2026)\n• Becker et al. (2025)\n• Tang et al. (2026)\n• Torun et al. (2026)\n• Stray et al. (2025)\n• Yu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 339
    },
    {
      "from": "F4",
      "to": "G2",
      "kind": "shared",
      "value": 3,
      "title": "F4 ↔ G2: 3 shared paper(s)\n• Chen et al. (2026)\n• Long et al. (2026)\n• Saari et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 340
    },
    {
      "from": "F4",
      "to": "G3",
      "kind": "shared",
      "value": 4,
      "title": "F4 ↔ G3: 4 shared paper(s)\n• Li et al. (2026)\n• Otten et al. (2026)\n• Nguyen et al. (2024)\n• Stray et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 341
    },
    {
      "from": "F4",
      "to": "G4",
      "kind": "shared",
      "value": 1,
      "title": "F4 ↔ G4: 1 shared paper(s)\n• Tang et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 342
    },
    {
      "from": "F4",
      "to": "G5",
      "kind": "shared",
      "value": 4,
      "title": "F4 ↔ G5: 4 shared paper(s)\n• Li et al. (2026)\n• Baumann et al. (2026)\n• Watanabe et al. (2026)\n• Otten et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 343
    },
    {
      "from": "F4",
      "to": "G6",
      "kind": "shared",
      "value": 5,
      "title": "F4 ↔ G6: 5 shared paper(s)\n• Li et al. (2026)\n• Watanabe et al. (2026)\n• Chen et al. (2026)\n• Nguyen et al. (2024)\n• Stray et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 344
    },
    {
      "from": "F4",
      "to": "G7",
      "kind": "shared",
      "value": 3,
      "title": "F4 ↔ G7: 3 shared paper(s)\n• Huang et al. (2026)\n• Long et al. (2026)\n• Nguyen et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 345
    },
    {
      "from": "F4",
      "to": "G9",
      "kind": "shared",
      "value": 6,
      "title": "F4 ↔ G9: 6 shared paper(s)\n• Chen et al. (2026)\n• Otten et al. (2026)\n• Huang et al. (2026)\n• Long et al. (2026)\n• Becker et al. (2025)\n• Saari et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 346
    },
    {
      "from": "F4",
      "to": "G10",
      "kind": "shared",
      "value": 2,
      "title": "F4 ↔ G10: 2 shared paper(s)\n• Becker et al. (2025)\n• Yu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 347
    },
    {
      "from": "F4",
      "to": "G11",
      "kind": "shared",
      "value": 1,
      "title": "F4 ↔ G11: 1 shared paper(s)\n• Tang et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 348
    },
    {
      "from": "F4",
      "to": "G13",
      "kind": "shared",
      "value": 1,
      "title": "F4 ↔ G13: 1 shared paper(s)\n• Torun et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 349
    },
    {
      "from": "F4",
      "to": "G14",
      "kind": "shared",
      "value": 1,
      "title": "F4 ↔ G14: 1 shared paper(s)\n• Torun et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 350
    },
    {
      "from": "F5",
      "to": "F7",
      "kind": "shared",
      "value": 4,
      "title": "F5 ↔ F7: 4 shared paper(s)\n• Giray et al. (2026)\n• Sergeyuk et al. (2026)\n• Stray et al. (2025)\n• Zakharov et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 351
    },
    {
      "from": "F5",
      "to": "F8",
      "kind": "shared",
      "value": 1,
      "title": "F5 ↔ F8: 1 shared paper(s)\n• Hao et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 352
    },
    {
      "from": "F5",
      "to": "F9",
      "kind": "shared",
      "value": 1,
      "title": "F5 ↔ F9: 1 shared paper(s)\n• Hao et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 353
    },
    {
      "from": "F5",
      "to": "F11",
      "kind": "shared",
      "value": 2,
      "title": "F5 ↔ F11: 2 shared paper(s)\n• Giray et al. (2026)\n• Zakharov et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 354
    },
    {
      "from": "F5",
      "to": "G1",
      "kind": "shared",
      "value": 3,
      "title": "F5 ↔ G1: 3 shared paper(s)\n• Huang et al. (2026)\n• Liang et al. (2024)\n• Stray et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 355
    },
    {
      "from": "F5",
      "to": "G3",
      "kind": "shared",
      "value": 3,
      "title": "F5 ↔ G3: 3 shared paper(s)\n• Giray et al. (2026)\n• Stray et al. (2025)\n• Hao et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 356
    },
    {
      "from": "F5",
      "to": "G5",
      "kind": "shared",
      "value": 4,
      "title": "F5 ↔ G5: 4 shared paper(s)\n• Giray et al. (2026)\n• Liang et al. (2024)\n• Hao et al. (2024)\n• Zakharov et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 357
    },
    {
      "from": "F5",
      "to": "G6",
      "kind": "shared",
      "value": 3,
      "title": "F5 ↔ G6: 3 shared paper(s)\n• Sergeyuk et al. (2026)\n• Stray et al. (2025)\n• Zakharov et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 358
    },
    {
      "from": "F5",
      "to": "G7",
      "kind": "shared",
      "value": 2,
      "title": "F5 ↔ G7: 2 shared paper(s)\n• Giray et al. (2026)\n• Huang et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 359
    },
    {
      "from": "F5",
      "to": "G9",
      "kind": "shared",
      "value": 3,
      "title": "F5 ↔ G9: 3 shared paper(s)\n• Sergeyuk et al. (2026)\n• Huang et al. (2026)\n• Hao et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 360
    },
    {
      "from": "F5",
      "to": "G10",
      "kind": "shared",
      "value": 1,
      "title": "F5 ↔ G10: 1 shared paper(s)\n• Sergeyuk et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 361
    },
    {
      "from": "F5",
      "to": "G12",
      "kind": "shared",
      "value": 1,
      "title": "F5 ↔ G12: 1 shared paper(s)\n• Sergeyuk et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 362
    },
    {
      "from": "F6",
      "to": "F11",
      "kind": "shared",
      "value": 1,
      "title": "F6 ↔ F11: 1 shared paper(s)\n• Pereira et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 363
    },
    {
      "from": "F6",
      "to": "G1",
      "kind": "shared",
      "value": 2,
      "title": "F6 ↔ G1: 2 shared paper(s)\n• Murphy-Hill et al. (2026)\n• Pereira et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 364
    },
    {
      "from": "F6",
      "to": "G4",
      "kind": "shared",
      "value": 1,
      "title": "F6 ↔ G4: 1 shared paper(s)\n• Murphy-Hill et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 365
    },
    {
      "from": "F6",
      "to": "G6",
      "kind": "shared",
      "value": 1,
      "title": "F6 ↔ G6: 1 shared paper(s)\n• Murphy-Hill et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 366
    },
    {
      "from": "F6",
      "to": "G10",
      "kind": "shared",
      "value": 1,
      "title": "F6 ↔ G10: 1 shared paper(s)\n• Murphy-Hill et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 367
    },
    {
      "from": "F7",
      "to": "F8",
      "kind": "shared",
      "value": 2,
      "title": "F7 ↔ F8: 2 shared paper(s)\n• Hassan et al. (2026)\n• Liukko et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 368
    },
    {
      "from": "F7",
      "to": "F9",
      "kind": "shared",
      "value": 1,
      "title": "F7 ↔ F9: 1 shared paper(s)\n• Tabarsi et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 369
    },
    {
      "from": "F7",
      "to": "F10",
      "kind": "shared",
      "value": 2,
      "title": "F7 ↔ F10: 2 shared paper(s)\n• O'Brien (2025)\n• Zacharias et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 370
    },
    {
      "from": "F7",
      "to": "F11",
      "kind": "shared",
      "value": 4,
      "title": "F7 ↔ F11: 4 shared paper(s)\n• Hassan et al. (2026)\n• Zakharov et al. (2025)\n• Giray et al. (2026)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 371
    },
    {
      "from": "F7",
      "to": "F13",
      "kind": "shared",
      "value": 2,
      "title": "F7 ↔ F13: 2 shared paper(s)\n• Fetzer et al. (2026)\n• Choudhuri et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 372
    },
    {
      "from": "F7",
      "to": "F14",
      "kind": "shared",
      "value": 1,
      "title": "F7 ↔ F14: 1 shared paper(s)\n• Liukko et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 373
    },
    {
      "from": "F7",
      "to": "F15",
      "kind": "shared",
      "value": 1,
      "title": "F7 ↔ F15: 1 shared paper(s)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 374
    },
    {
      "from": "F7",
      "to": "G1",
      "kind": "shared",
      "value": 7,
      "title": "F7 ↔ G1: 7 shared paper(s)\n• Paradis et al. (2025)\n• Cui et al. (2026)\n• Stray et al. (2025)\n• Kam et al. (2025)\n• O'Brien (2025)\n• Tabarsi et al. (2026)\n• Liukko et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 375
    },
    {
      "from": "F7",
      "to": "G2",
      "kind": "shared",
      "value": 2,
      "title": "F7 ↔ G2: 2 shared paper(s)\n• Brun et al. (2026)\n• Chen et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 376
    },
    {
      "from": "F7",
      "to": "G3",
      "kind": "shared",
      "value": 4,
      "title": "F7 ↔ G3: 4 shared paper(s)\n• Stray et al. (2025)\n• Kam et al. (2025)\n• Nguyen et al. (2024)\n• Giray et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 377
    },
    {
      "from": "F7",
      "to": "G4",
      "kind": "shared",
      "value": 2,
      "title": "F7 ↔ G4: 2 shared paper(s)\n• Choudhuri et al. (2026)\n• Zacharias et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 378
    },
    {
      "from": "F7",
      "to": "G5",
      "kind": "shared",
      "value": 4,
      "title": "F7 ↔ G5: 4 shared paper(s)\n• Cui et al. (2026)\n• Fetzer et al. (2026)\n• Zakharov et al. (2025)\n• Giray et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 379
    },
    {
      "from": "F7",
      "to": "G6",
      "kind": "shared",
      "value": 8,
      "title": "F7 ↔ G6: 8 shared paper(s)\n• Paradis et al. (2025)\n• Stray et al. (2025)\n• Hassan et al. (2026)\n• Sergeyuk et al. (2026)\n• Nguyen et al. (2024)\n• Choudhuri et al. (2026)\n• Zakharov et al. (2025)\n• Tabarsi et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 380
    },
    {
      "from": "F7",
      "to": "G7",
      "kind": "shared",
      "value": 3,
      "title": "F7 ↔ G7: 3 shared paper(s)\n• Nguyen et al. (2024)\n• Giray et al. (2026)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 381
    },
    {
      "from": "F7",
      "to": "G8",
      "kind": "shared",
      "value": 2,
      "title": "F7 ↔ G8: 2 shared paper(s)\n• Hassan et al. (2026)\n• Brun et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 382
    },
    {
      "from": "F7",
      "to": "G9",
      "kind": "shared",
      "value": 4,
      "title": "F7 ↔ G9: 4 shared paper(s)\n• Sergeyuk et al. (2026)\n• Fetzer et al. (2026)\n• Chen et al. (2025)\n• O'Brien (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 383
    },
    {
      "from": "F7",
      "to": "G10",
      "kind": "shared",
      "value": 4,
      "title": "F7 ↔ G10: 4 shared paper(s)\n• Cui et al. (2026)\n• Sergeyuk et al. (2026)\n• Choudhuri et al. (2026)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 384
    },
    {
      "from": "F7",
      "to": "G11",
      "kind": "shared",
      "value": 4,
      "title": "F7 ↔ G11: 4 shared paper(s)\n• Hassan et al. (2026)\n• Fetzer et al. (2026)\n• Zacharias et al. (2026)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 385
    },
    {
      "from": "F7",
      "to": "G12",
      "kind": "shared",
      "value": 3,
      "title": "F7 ↔ G12: 3 shared paper(s)\n• Kam et al. (2025)\n• Sergeyuk et al. (2026)\n• Tabarsi et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 386
    },
    {
      "from": "F7",
      "to": "G14",
      "kind": "shared",
      "value": 2,
      "title": "F7 ↔ G14: 2 shared paper(s)\n• Hassan et al. (2026)\n• Fetzer et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 387
    },
    {
      "from": "F8",
      "to": "F9",
      "kind": "shared",
      "value": 4,
      "title": "F8 ↔ F9: 4 shared paper(s)\n• Ehsani et al. (2026)\n• Otten et al. (2026)\n• Hao et al. (2024)\n• Tufano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 388
    },
    {
      "from": "F8",
      "to": "F10",
      "kind": "shared",
      "value": 2,
      "title": "F8 ↔ F10: 2 shared paper(s)\n• Ehsani et al. (2026)\n• Tufano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 389
    },
    {
      "from": "F8",
      "to": "F11",
      "kind": "shared",
      "value": 1,
      "title": "F8 ↔ F11: 1 shared paper(s)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 390
    },
    {
      "from": "F8",
      "to": "F14",
      "kind": "shared",
      "value": 1,
      "title": "F8 ↔ F14: 1 shared paper(s)\n• Liukko et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 391
    },
    {
      "from": "F8",
      "to": "G1",
      "kind": "shared",
      "value": 3,
      "title": "F8 ↔ G1: 3 shared paper(s)\n• Subramonyam et al. (2025)\n• Liukko et al. (2024)\n• Ziegler et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 392
    },
    {
      "from": "F8",
      "to": "G2",
      "kind": "shared",
      "value": 1,
      "title": "F8 ↔ G2: 1 shared paper(s)\n• Long et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 393
    },
    {
      "from": "F8",
      "to": "G3",
      "kind": "shared",
      "value": 3,
      "title": "F8 ↔ G3: 3 shared paper(s)\n• Ehsani et al. (2026)\n• Otten et al. (2026)\n• Hao et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 394
    },
    {
      "from": "F8",
      "to": "G4",
      "kind": "shared",
      "value": 1,
      "title": "F8 ↔ G4: 1 shared paper(s)\n• Choudhuri et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 395
    },
    {
      "from": "F8",
      "to": "G5",
      "kind": "shared",
      "value": 3,
      "title": "F8 ↔ G5: 3 shared paper(s)\n• Ehsani et al. (2026)\n• Otten et al. (2026)\n• Hao et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 396
    },
    {
      "from": "F8",
      "to": "G6",
      "kind": "shared",
      "value": 3,
      "title": "F8 ↔ G6: 3 shared paper(s)\n• Migliarini et al. (2026)\n• Tufano et al. (2026)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 397
    },
    {
      "from": "F8",
      "to": "G7",
      "kind": "shared",
      "value": 2,
      "title": "F8 ↔ G7: 2 shared paper(s)\n• Long et al. (2026)\n• Choudhuri et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 398
    },
    {
      "from": "F8",
      "to": "G8",
      "kind": "shared",
      "value": 1,
      "title": "F8 ↔ G8: 1 shared paper(s)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 399
    },
    {
      "from": "F8",
      "to": "G9",
      "kind": "shared",
      "value": 4,
      "title": "F8 ↔ G9: 4 shared paper(s)\n• Otten et al. (2026)\n• Hao et al. (2024)\n• Long et al. (2026)\n• Ziegler et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 400
    },
    {
      "from": "F8",
      "to": "G10",
      "kind": "shared",
      "value": 1,
      "title": "F8 ↔ G10: 1 shared paper(s)\n• Migliarini et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 401
    },
    {
      "from": "F8",
      "to": "G11",
      "kind": "shared",
      "value": 3,
      "title": "F8 ↔ G11: 3 shared paper(s)\n• Migliarini et al. (2026)\n• Tufano et al. (2026)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 402
    },
    {
      "from": "F8",
      "to": "G14",
      "kind": "shared",
      "value": 2,
      "title": "F8 ↔ G14: 2 shared paper(s)\n• Subramonyam et al. (2025)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 403
    },
    {
      "from": "F9",
      "to": "F10",
      "kind": "shared",
      "value": 2,
      "title": "F9 ↔ F10: 2 shared paper(s)\n• Ehsani et al. (2026)\n• Tufano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 404
    },
    {
      "from": "F9",
      "to": "F13",
      "kind": "shared",
      "value": 3,
      "title": "F9 ↔ F13: 3 shared paper(s)\n• Klemmer et al. (2024)\n• Hou et al. (2024)\n• Nguyen-Duc & Khanna (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 405
    },
    {
      "from": "F9",
      "to": "F14",
      "kind": "shared",
      "value": 1,
      "title": "F9 ↔ F14: 1 shared paper(s)\n• Hou et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 406
    },
    {
      "from": "F9",
      "to": "G1",
      "kind": "shared",
      "value": 4,
      "title": "F9 ↔ G1: 4 shared paper(s)\n• Borg et al. (2026)\n• Klemmer et al. (2024)\n• Tabarsi et al. (2026)\n• Watanabe et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 407
    },
    {
      "from": "F9",
      "to": "G3",
      "kind": "shared",
      "value": 7,
      "title": "F9 ↔ G3: 7 shared paper(s)\n• Otten et al. (2026)\n• Klemmer et al. (2024)\n• Li et al. (2026)\n• Hou et al. (2024)\n• Hao et al. (2024)\n• Ehsani et al. (2026)\n• Nguyen-Duc & Khanna (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 408
    },
    {
      "from": "F9",
      "to": "G5",
      "kind": "shared",
      "value": 5,
      "title": "F9 ↔ G5: 5 shared paper(s)\n• Otten et al. (2026)\n• Li et al. (2026)\n• Hao et al. (2024)\n• Ehsani et al. (2026)\n• Watanabe et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 409
    },
    {
      "from": "F9",
      "to": "G6",
      "kind": "shared",
      "value": 6,
      "title": "F9 ↔ G6: 6 shared paper(s)\n• Borg et al. (2026)\n• Klemmer et al. (2024)\n• Li et al. (2026)\n• Tabarsi et al. (2026)\n• Tufano et al. (2026)\n• Watanabe et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 410
    },
    {
      "from": "F9",
      "to": "G7",
      "kind": "shared",
      "value": 1,
      "title": "F9 ↔ G7: 1 shared paper(s)\n• Nguyen-Duc & Khanna (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 411
    },
    {
      "from": "F9",
      "to": "G8",
      "kind": "shared",
      "value": 1,
      "title": "F9 ↔ G8: 1 shared paper(s)\n• Borg et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 412
    },
    {
      "from": "F9",
      "to": "G9",
      "kind": "shared",
      "value": 3,
      "title": "F9 ↔ G9: 3 shared paper(s)\n• Otten et al. (2026)\n• Klemmer et al. (2024)\n• Hao et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 413
    },
    {
      "from": "F9",
      "to": "G10",
      "kind": "shared",
      "value": 1,
      "title": "F9 ↔ G10: 1 shared paper(s)\n• Hou et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 414
    },
    {
      "from": "F9",
      "to": "G11",
      "kind": "shared",
      "value": 1,
      "title": "F9 ↔ G11: 1 shared paper(s)\n• Tufano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 415
    },
    {
      "from": "F9",
      "to": "G12",
      "kind": "shared",
      "value": 1,
      "title": "F9 ↔ G12: 1 shared paper(s)\n• Tabarsi et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 416
    },
    {
      "from": "F10",
      "to": "F12",
      "kind": "shared",
      "value": 3,
      "title": "F10 ↔ F12: 3 shared paper(s)\n• Brandebusemeyer et al. (2026)\n• Wu et al. (2026)\n• Moreno-Lumbreras et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 417
    },
    {
      "from": "F10",
      "to": "G1",
      "kind": "shared",
      "value": 4,
      "title": "F10 ↔ G1: 4 shared paper(s)\n• Yu et al. (2026)\n• Brandebusemeyer et al. (2026)\n• O'Brien (2025)\n• Moreno-Lumbreras et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 418
    },
    {
      "from": "F10",
      "to": "G2",
      "kind": "shared",
      "value": 3,
      "title": "F10 ↔ G2: 3 shared paper(s)\n• Mozannar et al. (2024)\n• Barke et al. (2023)\n• Wu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 419
    },
    {
      "from": "F10",
      "to": "G3",
      "kind": "shared",
      "value": 2,
      "title": "F10 ↔ G3: 2 shared paper(s)\n• Ehsani et al. (2026)\n• Wu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 420
    },
    {
      "from": "F10",
      "to": "G4",
      "kind": "shared",
      "value": 1,
      "title": "F10 ↔ G4: 1 shared paper(s)\n• Zacharias et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 421
    },
    {
      "from": "F10",
      "to": "G5",
      "kind": "shared",
      "value": 3,
      "title": "F10 ↔ G5: 3 shared paper(s)\n• Ehsani et al. (2026)\n• Brandebusemeyer et al. (2026)\n• Moreno-Lumbreras et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 422
    },
    {
      "from": "F10",
      "to": "G6",
      "kind": "shared",
      "value": 2,
      "title": "F10 ↔ G6: 2 shared paper(s)\n• Wu et al. (2026)\n• Tufano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 423
    },
    {
      "from": "F10",
      "to": "G8",
      "kind": "shared",
      "value": 1,
      "title": "F10 ↔ G8: 1 shared paper(s)\n• Moreno-Lumbreras et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 424
    },
    {
      "from": "F10",
      "to": "G9",
      "kind": "shared",
      "value": 3,
      "title": "F10 ↔ G9: 3 shared paper(s)\n• Mozannar et al. (2024)\n• Brandebusemeyer et al. (2026)\n• O'Brien (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 425
    },
    {
      "from": "F10",
      "to": "G10",
      "kind": "shared",
      "value": 1,
      "title": "F10 ↔ G10: 1 shared paper(s)\n• Yu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 426
    },
    {
      "from": "F10",
      "to": "G11",
      "kind": "shared",
      "value": 2,
      "title": "F10 ↔ G11: 2 shared paper(s)\n• Zacharias et al. (2026)\n• Tufano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 427
    },
    {
      "from": "F11",
      "to": "F15",
      "kind": "shared",
      "value": 1,
      "title": "F11 ↔ F15: 1 shared paper(s)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 428
    },
    {
      "from": "F11",
      "to": "G1",
      "kind": "shared",
      "value": 1,
      "title": "F11 ↔ G1: 1 shared paper(s)\n• Pereira et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 429
    },
    {
      "from": "F11",
      "to": "G3",
      "kind": "shared",
      "value": 1,
      "title": "F11 ↔ G3: 1 shared paper(s)\n• Giray et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 430
    },
    {
      "from": "F11",
      "to": "G5",
      "kind": "shared",
      "value": 2,
      "title": "F11 ↔ G5: 2 shared paper(s)\n• Zakharov et al. (2025)\n• Giray et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 431
    },
    {
      "from": "F11",
      "to": "G6",
      "kind": "shared",
      "value": 2,
      "title": "F11 ↔ G6: 2 shared paper(s)\n• Zakharov et al. (2025)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 432
    },
    {
      "from": "F11",
      "to": "G7",
      "kind": "shared",
      "value": 3,
      "title": "F11 ↔ G7: 3 shared paper(s)\n• Amalfitano et al. (2026)\n• Giray et al. (2026)\n• Ulfsnes et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 433
    },
    {
      "from": "F11",
      "to": "G8",
      "kind": "shared",
      "value": 1,
      "title": "F11 ↔ G8: 1 shared paper(s)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 434
    },
    {
      "from": "F11",
      "to": "G10",
      "kind": "shared",
      "value": 1,
      "title": "F11 ↔ G10: 1 shared paper(s)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 435
    },
    {
      "from": "F11",
      "to": "G11",
      "kind": "shared",
      "value": 2,
      "title": "F11 ↔ G11: 2 shared paper(s)\n• Amalfitano et al. (2026)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 436
    },
    {
      "from": "F11",
      "to": "G14",
      "kind": "shared",
      "value": 1,
      "title": "F11 ↔ G14: 1 shared paper(s)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 437
    },
    {
      "from": "F12",
      "to": "G1",
      "kind": "shared",
      "value": 2,
      "title": "F12 ↔ G1: 2 shared paper(s)\n• Brandebusemeyer et al. (2026)\n• Moreno-Lumbreras et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 438
    },
    {
      "from": "F12",
      "to": "G2",
      "kind": "shared",
      "value": 2,
      "title": "F12 ↔ G2: 2 shared paper(s)\n• Chen et al. (2026)\n• Wu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 439
    },
    {
      "from": "F12",
      "to": "G3",
      "kind": "shared",
      "value": 1,
      "title": "F12 ↔ G3: 1 shared paper(s)\n• Wu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 440
    },
    {
      "from": "F12",
      "to": "G5",
      "kind": "shared",
      "value": 2,
      "title": "F12 ↔ G5: 2 shared paper(s)\n• Brandebusemeyer et al. (2026)\n• Moreno-Lumbreras et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 441
    },
    {
      "from": "F12",
      "to": "G6",
      "kind": "shared",
      "value": 2,
      "title": "F12 ↔ G6: 2 shared paper(s)\n• Chen et al. (2026)\n• Wu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 442
    },
    {
      "from": "F12",
      "to": "G8",
      "kind": "shared",
      "value": 1,
      "title": "F12 ↔ G8: 1 shared paper(s)\n• Moreno-Lumbreras et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 443
    },
    {
      "from": "F12",
      "to": "G9",
      "kind": "shared",
      "value": 2,
      "title": "F12 ↔ G9: 2 shared paper(s)\n• Chen et al. (2026)\n• Brandebusemeyer et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 444
    },
    {
      "from": "F13",
      "to": "F14",
      "kind": "shared",
      "value": 1,
      "title": "F13 ↔ F14: 1 shared paper(s)\n• Hou et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 445
    },
    {
      "from": "F13",
      "to": "G1",
      "kind": "shared",
      "value": 3,
      "title": "F13 ↔ G1: 3 shared paper(s)\n• Perry et al. (2023)\n• Baumann et al. (2026)\n• Klemmer et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 446
    },
    {
      "from": "F13",
      "to": "G2",
      "kind": "shared",
      "value": 1,
      "title": "F13 ↔ G2: 1 shared paper(s)\n• Perry et al. (2023)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 447
    },
    {
      "from": "F13",
      "to": "G3",
      "kind": "shared",
      "value": 3,
      "title": "F13 ↔ G3: 3 shared paper(s)\n• Klemmer et al. (2024)\n• Nguyen-Duc & Khanna (2024)\n• Hou et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 448
    },
    {
      "from": "F13",
      "to": "G4",
      "kind": "shared",
      "value": 1,
      "title": "F13 ↔ G4: 1 shared paper(s)\n• Choudhuri et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 449
    },
    {
      "from": "F13",
      "to": "G5",
      "kind": "shared",
      "value": 2,
      "title": "F13 ↔ G5: 2 shared paper(s)\n• Baumann et al. (2026)\n• Fetzer et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 450
    },
    {
      "from": "F13",
      "to": "G6",
      "kind": "shared",
      "value": 2,
      "title": "F13 ↔ G6: 2 shared paper(s)\n• Klemmer et al. (2024)\n• Choudhuri et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 451
    },
    {
      "from": "F13",
      "to": "G7",
      "kind": "shared",
      "value": 1,
      "title": "F13 ↔ G7: 1 shared paper(s)\n• Nguyen-Duc & Khanna (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 452
    },
    {
      "from": "F13",
      "to": "G9",
      "kind": "shared",
      "value": 2,
      "title": "F13 ↔ G9: 2 shared paper(s)\n• Klemmer et al. (2024)\n• Fetzer et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 453
    },
    {
      "from": "F13",
      "to": "G10",
      "kind": "shared",
      "value": 2,
      "title": "F13 ↔ G10: 2 shared paper(s)\n• Choudhuri et al. (2026)\n• Hou et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 454
    },
    {
      "from": "F13",
      "to": "G11",
      "kind": "shared",
      "value": 1,
      "title": "F13 ↔ G11: 1 shared paper(s)\n• Fetzer et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 455
    },
    {
      "from": "F13",
      "to": "G14",
      "kind": "shared",
      "value": 1,
      "title": "F13 ↔ G14: 1 shared paper(s)\n• Fetzer et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 456
    },
    {
      "from": "F14",
      "to": "G1",
      "kind": "shared",
      "value": 1,
      "title": "F14 ↔ G1: 1 shared paper(s)\n• Liukko et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 457
    },
    {
      "from": "F14",
      "to": "G3",
      "kind": "shared",
      "value": 1,
      "title": "F14 ↔ G3: 1 shared paper(s)\n• Hou et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 458
    },
    {
      "from": "F14",
      "to": "G5",
      "kind": "shared",
      "value": 1,
      "title": "F14 ↔ G5: 1 shared paper(s)\n• Cabrero-Daniel et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 459
    },
    {
      "from": "F14",
      "to": "G9",
      "kind": "shared",
      "value": 1,
      "title": "F14 ↔ G9: 1 shared paper(s)\n• Cabrero-Daniel et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 460
    },
    {
      "from": "F14",
      "to": "G10",
      "kind": "shared",
      "value": 1,
      "title": "F14 ↔ G10: 1 shared paper(s)\n• Hou et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 461
    },
    {
      "from": "F15",
      "to": "G7",
      "kind": "shared",
      "value": 1,
      "title": "F15 ↔ G7: 1 shared paper(s)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 462
    },
    {
      "from": "F15",
      "to": "G10",
      "kind": "shared",
      "value": 1,
      "title": "F15 ↔ G10: 1 shared paper(s)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 463
    },
    {
      "from": "F15",
      "to": "G11",
      "kind": "shared",
      "value": 1,
      "title": "F15 ↔ G11: 1 shared paper(s)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 464
    },
    {
      "from": "G1",
      "to": "G2",
      "kind": "shared",
      "value": 1,
      "title": "G1 ↔ G2: 1 shared paper(s)\n• Perry et al. (2023)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 465
    },
    {
      "from": "G1",
      "to": "G3",
      "kind": "shared",
      "value": 3,
      "title": "G1 ↔ G3: 3 shared paper(s)\n• Kam et al. (2025)\n• Stray et al. (2025)\n• Klemmer et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 466
    },
    {
      "from": "G1",
      "to": "G4",
      "kind": "shared",
      "value": 2,
      "title": "G1 ↔ G4: 2 shared paper(s)\n• Tang et al. (2026)\n• Murphy-Hill et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 467
    },
    {
      "from": "G1",
      "to": "G5",
      "kind": "shared",
      "value": 6,
      "title": "G1 ↔ G5: 6 shared paper(s)\n• Baumann et al. (2026)\n• Liang et al. (2024)\n• Watanabe et al. (2026)\n• Brandebusemeyer et al. (2026)\n• Moreno-Lumbreras et al. (2026)\n• Cui et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 468
    },
    {
      "from": "G1",
      "to": "G6",
      "kind": "shared",
      "value": 8,
      "title": "G1 ↔ G6: 8 shared paper(s)\n• Tabarsi et al. (2026)\n• Stray et al. (2025)\n• Paradis et al. (2025)\n• Watanabe et al. (2026)\n• Borg et al. (2026)\n• Sabouri et al. (2025)\n• Murphy-Hill et al. (2026)\n• Klemmer et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 469
    },
    {
      "from": "G1",
      "to": "G7",
      "kind": "shared",
      "value": 1,
      "title": "G1 ↔ G7: 1 shared paper(s)\n• Huang et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 470
    },
    {
      "from": "G1",
      "to": "G8",
      "kind": "shared",
      "value": 2,
      "title": "G1 ↔ G8: 2 shared paper(s)\n• Borg et al. (2026)\n• Moreno-Lumbreras et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 471
    },
    {
      "from": "G1",
      "to": "G9",
      "kind": "shared",
      "value": 6,
      "title": "G1 ↔ G9: 6 shared paper(s)\n• O'Brien (2025)\n• Huang et al. (2026)\n• Becker et al. (2025)\n• Ziegler et al. (2026)\n• Brandebusemeyer et al. (2026)\n• Klemmer et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 472
    },
    {
      "from": "G1",
      "to": "G10",
      "kind": "shared",
      "value": 4,
      "title": "G1 ↔ G10: 4 shared paper(s)\n• Becker et al. (2025)\n• Murphy-Hill et al. (2026)\n• Cui et al. (2026)\n• Yu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 473
    },
    {
      "from": "G1",
      "to": "G11",
      "kind": "shared",
      "value": 1,
      "title": "G1 ↔ G11: 1 shared paper(s)\n• Tang et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 474
    },
    {
      "from": "G1",
      "to": "G12",
      "kind": "shared",
      "value": 2,
      "title": "G1 ↔ G12: 2 shared paper(s)\n• Kam et al. (2025)\n• Tabarsi et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 475
    },
    {
      "from": "G1",
      "to": "G13",
      "kind": "shared",
      "value": 1,
      "title": "G1 ↔ G13: 1 shared paper(s)\n• Torun et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 476
    },
    {
      "from": "G1",
      "to": "G14",
      "kind": "shared",
      "value": 2,
      "title": "G1 ↔ G14: 2 shared paper(s)\n• Subramonyam et al. (2025)\n• Torun et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 477
    },
    {
      "from": "G2",
      "to": "G3",
      "kind": "shared",
      "value": 1,
      "title": "G2 ↔ G3: 1 shared paper(s)\n• Wu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 478
    },
    {
      "from": "G2",
      "to": "G6",
      "kind": "shared",
      "value": 2,
      "title": "G2 ↔ G6: 2 shared paper(s)\n• Chen et al. (2026)\n• Wu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 479
    },
    {
      "from": "G2",
      "to": "G7",
      "kind": "shared",
      "value": 1,
      "title": "G2 ↔ G7: 1 shared paper(s)\n• Long et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 480
    },
    {
      "from": "G2",
      "to": "G8",
      "kind": "shared",
      "value": 1,
      "title": "G2 ↔ G8: 1 shared paper(s)\n• Brun et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 481
    },
    {
      "from": "G2",
      "to": "G9",
      "kind": "shared",
      "value": 5,
      "title": "G2 ↔ G9: 5 shared paper(s)\n• Mozannar et al. (2024)\n• Chen et al. (2025)\n• Chen et al. (2026)\n• Long et al. (2026)\n• Saari et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 482
    },
    {
      "from": "G3",
      "to": "G5",
      "kind": "shared",
      "value": 5,
      "title": "G3 ↔ G5: 5 shared paper(s)\n• Otten et al. (2026)\n• Giray et al. (2026)\n• Li et al. (2026)\n• Hao et al. (2024)\n• Ehsani et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 483
    },
    {
      "from": "G3",
      "to": "G6",
      "kind": "shared",
      "value": 5,
      "title": "G3 ↔ G6: 5 shared paper(s)\n• Klemmer et al. (2024)\n• Li et al. (2026)\n• Nguyen et al. (2024)\n• Stray et al. (2025)\n• Wu et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 484
    },
    {
      "from": "G3",
      "to": "G7",
      "kind": "shared",
      "value": 3,
      "title": "G3 ↔ G7: 3 shared paper(s)\n• Giray et al. (2026)\n• Nguyen et al. (2024)\n• Nguyen-Duc & Khanna (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 485
    },
    {
      "from": "G3",
      "to": "G9",
      "kind": "shared",
      "value": 3,
      "title": "G3 ↔ G9: 3 shared paper(s)\n• Otten et al. (2026)\n• Klemmer et al. (2024)\n• Hao et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 486
    },
    {
      "from": "G3",
      "to": "G10",
      "kind": "shared",
      "value": 1,
      "title": "G3 ↔ G10: 1 shared paper(s)\n• Hou et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 487
    },
    {
      "from": "G3",
      "to": "G12",
      "kind": "shared",
      "value": 1,
      "title": "G3 ↔ G12: 1 shared paper(s)\n• Kam et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 488
    },
    {
      "from": "G4",
      "to": "G5",
      "kind": "shared",
      "value": 1,
      "title": "G4 ↔ G5: 1 shared paper(s)\n• Heilman et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 489
    },
    {
      "from": "G4",
      "to": "G6",
      "kind": "shared",
      "value": 2,
      "title": "G4 ↔ G6: 2 shared paper(s)\n• Murphy-Hill et al. (2026)\n• Choudhuri et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 490
    },
    {
      "from": "G4",
      "to": "G7",
      "kind": "shared",
      "value": 1,
      "title": "G4 ↔ G7: 1 shared paper(s)\n• Choudhuri et al. (2025)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 491
    },
    {
      "from": "G4",
      "to": "G10",
      "kind": "shared",
      "value": 3,
      "title": "G4 ↔ G10: 3 shared paper(s)\n• Murphy-Hill et al. (2026)\n• Choudhuri et al. (2026)\n• Heilman et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 492
    },
    {
      "from": "G4",
      "to": "G11",
      "kind": "shared",
      "value": 2,
      "title": "G4 ↔ G11: 2 shared paper(s)\n• Zacharias et al. (2026)\n• Tang et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 493
    },
    {
      "from": "G5",
      "to": "G6",
      "kind": "shared",
      "value": 3,
      "title": "G5 ↔ G6: 3 shared paper(s)\n• Li et al. (2026)\n• Zakharov et al. (2025)\n• Watanabe et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 494
    },
    {
      "from": "G5",
      "to": "G7",
      "kind": "shared",
      "value": 1,
      "title": "G5 ↔ G7: 1 shared paper(s)\n• Giray et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 495
    },
    {
      "from": "G5",
      "to": "G8",
      "kind": "shared",
      "value": 1,
      "title": "G5 ↔ G8: 1 shared paper(s)\n• Moreno-Lumbreras et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 496
    },
    {
      "from": "G5",
      "to": "G9",
      "kind": "shared",
      "value": 5,
      "title": "G5 ↔ G9: 5 shared paper(s)\n• Brandebusemeyer et al. (2026)\n• Hao et al. (2024)\n• Cabrero-Daniel et al. (2024)\n• Fetzer et al. (2026)\n• Otten et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 497
    },
    {
      "from": "G5",
      "to": "G10",
      "kind": "shared",
      "value": 2,
      "title": "G5 ↔ G10: 2 shared paper(s)\n• Heilman et al. (2026)\n• Cui et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 498
    },
    {
      "from": "G5",
      "to": "G11",
      "kind": "shared",
      "value": 1,
      "title": "G5 ↔ G11: 1 shared paper(s)\n• Fetzer et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 499
    },
    {
      "from": "G5",
      "to": "G14",
      "kind": "shared",
      "value": 1,
      "title": "G5 ↔ G14: 1 shared paper(s)\n• Fetzer et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 500
    },
    {
      "from": "G6",
      "to": "G7",
      "kind": "shared",
      "value": 1,
      "title": "G6 ↔ G7: 1 shared paper(s)\n• Nguyen et al. (2024)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 501
    },
    {
      "from": "G6",
      "to": "G8",
      "kind": "shared",
      "value": 2,
      "title": "G6 ↔ G8: 2 shared paper(s)\n• Borg et al. (2026)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 502
    },
    {
      "from": "G6",
      "to": "G9",
      "kind": "shared",
      "value": 3,
      "title": "G6 ↔ G9: 3 shared paper(s)\n• Klemmer et al. (2024)\n• Chen et al. (2026)\n• Sergeyuk et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 503
    },
    {
      "from": "G6",
      "to": "G10",
      "kind": "shared",
      "value": 4,
      "title": "G6 ↔ G10: 4 shared paper(s)\n• Choudhuri et al. (2026)\n• Murphy-Hill et al. (2026)\n• Migliarini et al. (2026)\n• Sergeyuk et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 504
    },
    {
      "from": "G6",
      "to": "G11",
      "kind": "shared",
      "value": 3,
      "title": "G6 ↔ G11: 3 shared paper(s)\n• Tufano et al. (2026)\n• Migliarini et al. (2026)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 505
    },
    {
      "from": "G6",
      "to": "G12",
      "kind": "shared",
      "value": 2,
      "title": "G6 ↔ G12: 2 shared paper(s)\n• Tabarsi et al. (2026)\n• Sergeyuk et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 506
    },
    {
      "from": "G6",
      "to": "G14",
      "kind": "shared",
      "value": 1,
      "title": "G6 ↔ G14: 1 shared paper(s)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 507
    },
    {
      "from": "G7",
      "to": "G9",
      "kind": "shared",
      "value": 2,
      "title": "G7 ↔ G9: 2 shared paper(s)\n• Long et al. (2026)\n• Huang et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 508
    },
    {
      "from": "G7",
      "to": "G10",
      "kind": "shared",
      "value": 1,
      "title": "G7 ↔ G10: 1 shared paper(s)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 509
    },
    {
      "from": "G7",
      "to": "G11",
      "kind": "shared",
      "value": 1,
      "title": "G7 ↔ G11: 1 shared paper(s)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 510
    },
    {
      "from": "G8",
      "to": "G11",
      "kind": "shared",
      "value": 1,
      "title": "G8 ↔ G11: 1 shared paper(s)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 511
    },
    {
      "from": "G8",
      "to": "G14",
      "kind": "shared",
      "value": 1,
      "title": "G8 ↔ G14: 1 shared paper(s)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 512
    },
    {
      "from": "G9",
      "to": "G10",
      "kind": "shared",
      "value": 2,
      "title": "G9 ↔ G10: 2 shared paper(s)\n• Becker et al. (2025)\n• Sergeyuk et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 513
    },
    {
      "from": "G9",
      "to": "G11",
      "kind": "shared",
      "value": 1,
      "title": "G9 ↔ G11: 1 shared paper(s)\n• Fetzer et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 514
    },
    {
      "from": "G9",
      "to": "G12",
      "kind": "shared",
      "value": 1,
      "title": "G9 ↔ G12: 1 shared paper(s)\n• Sergeyuk et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 515
    },
    {
      "from": "G9",
      "to": "G14",
      "kind": "shared",
      "value": 1,
      "title": "G9 ↔ G14: 1 shared paper(s)\n• Fetzer et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 516
    },
    {
      "from": "G10",
      "to": "G11",
      "kind": "shared",
      "value": 2,
      "title": "G10 ↔ G11: 2 shared paper(s)\n• Migliarini et al. (2026)\n• Amalfitano et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 517
    },
    {
      "from": "G10",
      "to": "G12",
      "kind": "shared",
      "value": 1,
      "title": "G10 ↔ G12: 1 shared paper(s)\n• Sergeyuk et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 518
    },
    {
      "from": "G11",
      "to": "G14",
      "kind": "shared",
      "value": 2,
      "title": "G11 ↔ G14: 2 shared paper(s)\n• Fetzer et al. (2026)\n• Hassan et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 519
    },
    {
      "from": "G13",
      "to": "G14",
      "kind": "shared",
      "value": 1,
      "title": "G13 ↔ G14: 1 shared paper(s)\n• Torun et al. (2026)",
      "color": {
        "color": "#E45756",
        "opacity": 0.35
      },
      "id": 520
    }
  ]
};
