// AI 追踪数据包（每周一更新）
window.AIDATA = window.AIDATA || {};

window.AIDATA['business'] = {
  "meta": {
    "title": "商业表现：AI 公司营收与盈利",
    "updated": "2026-08-31",
    "source": "Anthropic / OpenAI / xAI / Google 投资者披露 / 华尔街日报 / 彭博社 / 财报",
    "note": "ARR = 年化营收运行率。非上市公司数据来自投资者披露和媒体报道，可能存在偏差。Gemini 未单独披露 ARR，以 Google Cloud AI 相关收入估算。"
  },
  "anthropic": {
    "name": "Anthropic",
    "arr_now": "$650亿+",
    "arr_time": "2026-07底",
    "arr_mom": "+18%（6月~$550亿→7月$650亿，估）",
    "arr_qoq": "+242%（Q1末$190亿→Q2末$650亿）",
    "arr_yoy": "+1500%（2025.07 ~$40亿→2026.07 $650亿）",
    "q2_2026_revenue": "$115亿+",
    "q1_2026_revenue": "$47.3亿",
    "q2_revenue_qoq": "+143%（vs Q1 $47.3亿）",
    "q2_yoy": "~14倍（vs 2025Q2 $7.87亿）",
    "q2_operating_profit": "$5.59亿（首次单季盈利）",
    "q2_profit_qoq": "+1018%（Q1 +$0.5亿→Q2 +$5.59亿）",
    "revenue_structure": "75-85% 企业级 API",
    "valuation_secondary": "~$1.5万亿",
    "ipo_target": "朝$2万亿进行",
    "arr_timeline": [
      { "date": "2025-01", "arr": 10, "note": "$10亿" },
      { "date": "2025-06", "arr": 40, "note": "估算" },
      { "date": "2025-09", "arr": 70, "note": "$70亿" },
      { "date": "2025-12", "arr": 90, "note": "$90亿" },
      { "date": "2026-02", "arr": 140, "note": "$140亿（+55%）" },
      { "date": "2026-03", "arr": 190, "note": "$190亿" },
      { "date": "2026-04", "arr": 300, "note": "$300亿（+58%）" },
      { "date": "2026-05", "arr": 470, "note": "$470亿" },
      { "date": "2026-07", "arr": 650, "note": "$650亿+" }
    ]
  },
  "openai": {
    "name": "OpenAI",
    "arr_now": "$540亿+",
    "arr_time": "2026-08（Q3 CFO透露）",
    "arr_mom": "+35%（Q2末$400亿→Q3末~$540亿，CFO全员会）",
    "arr_qoq": "+116%（Q1末$250亿→Q3末~$540亿）",
    "arr_yoy": "+350%（2025.07 $120亿→2026.08 ~$540亿）",
    "q2_2026_revenue": "$67亿",
    "q1_2026_revenue": "$57亿",
    "q2_qoq": "+18%（较 Q1 的 35.7% 近乎腰斩）",
    "q2_revenue_yoy": "+131%（vs 2025Q2 ~$29亿）",
    "q2_operating_loss": "$123亿",
    "q1_operating_loss": "$93亿",
    "q2_loss_qoq": "+32%（亏损扩大，Q1 $93亿→Q2 $123亿）",
    "revenue_structure": "65%+ C 端订阅",
    "valuation_secondary": "~$8,520亿",
    "burn_ratio": "每赚 $1 烧掉 >$1.8",
    "profit_estimate": "2029-2030年才可能转正",
    "ipo_target": "2027年（CFO全员会：如业务加速可能更早）",
    "astra_note": "Astra（代号 mozaik-alpha-fdm）内测中，预计9月初发布，定位GPT-6/AGI门槛",
    "arr_timeline": [
      { "date": "2023", "arr": 20, "note": "$20亿" },
      { "date": "2024", "arr": 60, "note": "$60亿" },
      { "date": "2025-07", "arr": 120, "note": "$120亿" },
      { "date": "2025-12", "arr": 200, "note": "$200亿" },
      { "date": "2026-03", "arr": 250, "note": "$250亿" },
      { "date": "2026-07", "arr": 400, "note": "$400亿+" },
      { "date": "2026-08", "arr": 540, "note": "~$540亿（Q3 CFO透露）" }
    ]
  },
  "gemini": {
    "name": "Google Gemini",
    "arr_now": "未单独披露",
    "arr_time": "2026-08",
    "arr_mom": "+5%（估算，增量放缓）",
    "arr_qoq": "+25%（估算）",
    "arr_yoy": "+400%（从~$10亿到~$50-80亿）",
    "mau": "月活 >10亿",
    "mau_mom": "+3%（增量放缓）",
    "mau_qoq": "+11%（Q1 ~9亿→Q2 >10亿）",
    "note": "Gemini 未单独披露 ARR；Google Cloud Q2 2026 营收 $140亿（含 AI 基础设施），Google AI 营收估算 $50-80亿/年",
    "google_cloud_q2": "$140亿（含AI基础设施）",
    "arr_estimate": "~$50-80亿（Google AI 估算）",
    "valuation_note": "母公司 Alphabet 市值 ~$2.8万亿",
    "challenge": "人才流失严重（Jeff Dean 离职、DeepMind 创始人卸任），Gemini 3.5 Pro 被评测落后于 Claude/GPT",
    "arr_timeline": [
      { "date": "2025-06", "arr": 10, "note": "估算（Google AI）" },
      { "date": "2025-12", "arr": 20, "note": "估算" },
      { "date": "2026-07", "arr": 50, "note": "估算（$50-80亿）" }
    ]
  },
  "grok": {
    "name": "xAI (Grok)",
    "arr_now": "~$20亿（2026目标）",
    "arr_time": "2026-08",
    "arr_mom": "N/A（年度目标）",
    "arr_qoq": "+43%（Q1 ~$14亿→Q2 ~$20亿，估）",
    "arr_yoy": "+471%（2025 $3.5亿→2026目标$20亿）",
    "revenue_2025": "$3.5亿（2025全年）",
    "revenue_2026_target": "$20亿（4倍跳跃）",
    "revenue_yoy": "+471%（$3.5亿→$20亿）",
    "operating_loss_2025": "$64亿",
    "monthly_infra_spend": "~$10亿/月",
    "valuation": "~$550亿",
    "note": "增速惊人但亏损巨大，2025年运营亏损 $64亿，基础设施月支出约 $10亿",
    "arr_timeline": [
      { "date": "2025-06", "arr": 1, "note": "估算" },
      { "date": "2025-12", "arr": 3.5, "note": "$3.5亿/年" },
      { "date": "2026-08", "arr": 20, "note": "目标 $20亿" }
    ]
  },
  "profit_comparison": {
    "desc": "Anthropic 与 OpenAI 季度利润对比（亿美元），正值=盈利，负值=亏损",
    "labels": ["2025-Q1", "2025-Q2", "2025-Q3", "2025-Q4", "2026-Q1", "2026-Q2"],
    "anthropic": [-2.0, -1.5, -1.0, -0.5, 0.5, 5.59],
    "openai": [-5.0, -8.0, -10.0, -12.0, -9.3, -12.3],
    "anthropic_notes": ["亏损收窄", "亏损收窄", "亏损收窄", "接近盈亏平衡", "首次微利", "首次显著盈利"],
    "openai_notes": ["亏损扩大", "亏损扩大", "亏损扩大", "亏损扩大", "亏损收窄", "亏损再次扩大"]
  },
  "comparison": {
    "dimensions": [
      { "dim": "Q2 营收", "anthropic": "$115亿", "openai": "$67亿", "gemini": "未单独披露", "grok": "估算 ~$5亿/季" },
      { "dim": "盈利状态", "anthropic": "单季盈利 $5.59亿", "openai": "单季亏损 $123亿", "gemini": "Google Cloud 整体盈利", "grok": "年亏损 $64亿" },
      { "dim": "收入来源", "anthropic": "企业 API (75-85%)", "openai": "C端订阅 (65%+)", "gemini": "搜索+云+订阅混合", "grok": "X 平台订阅绑定" },
      { "dim": "增长驱动", "anthropic": "Claude Code / Agent", "openai": "ChatGPT / 企业版", "gemini": "Gemini App 10亿月活", "grok": "X 平台流量" },
      { "dim": "二级市场估值", "anthropic": "~$1.5万亿", "openai": "~$8,520亿", "gemini": "Alphabet ~$2.8万亿", "grok": "~$550亿" },
      { "dim": "IPO进度", "anthropic": "朝$2万亿冲刺", "openai": "2027年（可能更早）", "gemini": "母公司已上市", "grok": "未明确" },
      { "dim": "下一代模型", "anthropic": "Claude Opus 4.8", "openai": "Astra (GPT-6) 内测中，9月初发布", "gemini": "Gemini 3.5 Pro", "grok": "Grok 4" }
    ]
  },
  "others": {
    "coreweave": { "name": "CoreWeave", "metric": "Q2 营收 $25.8亿 / 在手订单 $1,040亿 / Q2净亏损$6.26亿" },
    "nscale": { "name": "Nscale", "metric": "Q2 营收 >$1亿 / 在手订单 $510亿" },
    "openrouter": { "name": "OpenRouter", "metric": "被 Stripe 以$70亿+收购，2026年AI基建最大并购" }
  }
};

window.AIDATA['compute'] = {
  "meta": {
    "title": "算力供给：GPU 价格与算力基础设施",
    "updated": "2026-08-31",
    "source": "Silicon Data / CME / RunPod / CoreWeave 财报 / 网易实测 / Data Center Watch / 摩根士丹利",
    "note": "GPU 价格基于美国市场公开报价；Silicon Data H100 Rental Index 为行业基准定价指数。"
  },
  "gpu_price_us": [
    { "gpu": "H100（1年期合约）", "price": "$2.68/GPU小时", "change": "+58%（自2025.10低点）", "mom": "+14%（7月$2.35→8月$2.68）", "qoq": "+14%（Q2 $2.35→8月$2.68）", "yoy": "+28%（2025.08 ~$2.1→2026.08 $2.68）", "time": "2026.08", "source": "Silicon Data" },
    { "gpu": "H100（RunPod 社区云）", "price": "$2.69/小时", "change": "现货即时租", "mom": null, "qoq": null, "yoy": null, "time": "2026.08.22", "source": "RunPod" },
    { "gpu": "H100（平台C）", "price": "$6.16/小时", "change": "溢价129%", "mom": null, "qoq": null, "yoy": null, "time": "2026.08.22", "source": "网易实测" },
    { "gpu": "B200（现货租赁）", "price": "$5.66/GPU小时", "change": "Silicon Data 基准价", "mom": "+19%（7月124→8月148）", "qoq": "+48%（2个月）", "yoy": "N/A（新品）", "time": "2026.08", "source": "Silicon Data" },
    { "gpu": "H200（整机月租）", "price": "~$20,000/月", "change": "—", "mom": null, "qoq": null, "yoy": null, "time": "2026.08", "source": "CoreWeave" }
  ],
  "gpu_cloud_compare": {
    "desc": "2026年8月22日同一天实测三家美国 GPU 云，同一颗 H100 时租价差超过 1 倍",
    "data": [
      { "platform": "RunPod 社区云", "price": "$2.69/小时" },
      { "platform": "平台B", "price": "待确认" },
      { "platform": "平台C", "price": "$6.16/小时" }
    ]
  },
  "gpu_price_history": {
    "desc": "H100 一年期合约价走势（美元/GPU小时），数据基于 Silicon Data H100 Rental Index",
    "source": "Silicon Data H100 Rental Index",
    "points": [
      { "date": "2025-01", "price": 2.1, "note": "估算" },
      { "date": "2025-04", "price": 1.95, "note": "估算" },
      { "date": "2025-07", "price": 1.85, "note": "估算" },
      { "date": "2025-10", "price": 1.7, "note": "低点" },
      { "date": "2026-01", "price": 1.95, "note": "回升" },
      { "date": "2026-03", "price": 2.35, "note": "+40%" },
      { "date": "2026-06", "price": 2.35, "note": "高位" },
      { "date": "2026-08", "price": 2.68, "note": "最新，+58%" }
    ]
  },
  "b200_price_history": {
    "desc": "B200 现货租赁价趋势（相对指数，以 2026-06 为基准 100）",
    "source": "Silicon Data B200 Rental Index",
    "points": [
      { "date": "2026-06", "price": 100, "note": "基准" },
      { "date": "2026-07", "price": 124, "note": "+24%" },
      { "date": "2026-08", "price": 148, "note": "+48%（2个月）" }
    ]
  },
  "cloud_providers": [
    { "company": "CoreWeave", "q2_revenue": "$25.8亿（+112% YoY）", "backlog": "$1,040亿", "valuation": "~$463亿", "note": "推理平台 ARR 数月内从 $100万→$1亿+" },
    { "company": "Nscale", "q2_revenue": ">$1亿", "backlog": "$510亿", "valuation": "目标$250亿", "note": "拟9月 IPO" }
  ],
  "compute_futures": {
    "status": "CME 算力期货 10月5日 NYMEX 挂牌（待 CFTC 批准），合约以 Silicon Data 基准指数现金结算",
    "contract": "H100 GPU 小时租赁费（730小时/月基准）+ B200 GPU 小时租赁费",
    "significance": "算力从'长协定价'走向'全球金融定价'，类似1983年原油期货",
    "h100_benchmark": "$2.68/GPU小时（Silicon Data 基准）",
    "b200_benchmark": "$5.66/GPU小时（Silicon Data 基准）"
  },
  "infrastructure": {
    "data_center_blocked": "美国 75 个 AIDC 项目受阻/延期，总价值 ~$1,300亿（Q1 2026）",
    "power_density": "AIDC 单机柜功率 20kW-100kW+",
    "global_investment": "~$16万亿 涌入 AIDC",
    "hbm_trend": "HBM 涨价，存储超级周期",
    "chip_per_rack": "单 AI 服务器机架芯片数突破 4,500 颗",
    "hyperscaler_capex_2026": "全球 AI 资本开支预计 $7,650亿，首次超油气 ($6,810亿)"
  }
};

window.AIDATA['cost'] = {
  "meta": {
    "title": "成本与定价：Token 成本与算力总支出",
    "updated": "2026-08-31",
    "source": "Silicon Data / 各厂商公开 / 开源证券 / 36氪 / 建投研报 / 公开报道",
    "note": "Token 支出指数为 Silicon Data 发布；月度趋势数据基于公开报道锚点估算；基建支出数据来自摩根士丹利及财报。"
  },
  "token_expenditure_index": {
    "status": "停滞/回落",
    "meaning": "全市场每百万 LLM Token 的加权平均支付价格",
    "trend": "AI 经济进入性价比时代，企业对 Token 消耗重回理性",
    "implication": "Token 支出 = AI 使用量 × 价格，直接绑定 GPU/DRAM/数据中心需求",
    "current_index": 88,
    "mom": "-7%（6月95→8月88）",
    "qoq": "-7%（Q2均值~99→8月88）",
    "yoy": "-12%（2025.08 ~100→2026.08 88）",
    "deepseek_pricing": "DeepSeek V4 API 8/17涨价，峰谷定价，最高涨幅 1100%，高峰输出 27元/百万Token",
    "monthly_trend": {
      "desc": "Silicon Data LLM Token 支出指数月度趋势（以 2025-01 为基准 100）",
      "labels": ["25-01", "25-03", "25-06", "25-09", "25-12", "26-02", "26-04", "26-06", "26-08"],
      "data": [100, 105, 112, 108, 115, 110, 102, 95, 88],
      "notes": {
        "25-01": "基准期，市场起步",
        "25-06": "市场狂热期，指数攀升",
        "25-12": "全年高点， Token 支出指数高位",
        "26-04": "开始回落，以量补价信号",
        "26-08": "持续回落，进入性价比时代"
      }
    }
  },
  "inference_spend_trend": {
    "desc": "推理侧总支出月度趋势（亿美元/月），= Token 消耗量 × Token 均价",
    "labels": ["25-03", "25-06", "25-09", "25-12", "26-02", "26-04", "26-06", "26-08"],
    "data": [0.3, 0.6, 1.2, 2.5, 4.0, 6.5, 9.0, 12.0],
    "annual_runrate": "~$10亿（2026.3 突破）",
    "latest_mom": "+33%（6月$9→8月$12亿/月）",
    "latest_qoq": "+85%（Q2均值~$6.5→8月$12亿/月）",
    "latest_yoy": "+3900%（2025.03 $0.3→2026.08 $12亿/月）",
    "barcelona_note": "巴克莱研报：模型公司每赚$100，云厂商拿走$35-40（AWS/Azure/GCP）",
    "judgment": "量增速度远超价降速度，总支出仍快速扩张。Agent 使单任务 Token 消耗提升数量级。"
  },
  "total_spend": {
    "inference_side": {
      "desc": "推理侧总支出 = Token 消耗量 × Token 均价",
      "openrouter_annual": "~$10亿（2026.3 突破）",
      "judgment": "量增速度远超价降速度，总支出仍快速扩张。Agent 使单任务 Token 消耗提升数量级。",
      "trend_note": "2026年以来推理侧月支出从 $4亿增至 $12亿，4个月增长3倍，主要受 Agent 工作负载驱动"
    },
    "infrastructure_side": {
      "desc": "基建侧总投入 = GPU 采购/租赁量 × GPU 单价",
      "off_balance_sheet": ">$3.1万亿（五大云厂商+英伟达+博通）",
      "google_commit": "$8,900亿（第一）",
      "hyperscaler_total": ">$2.7万亿",
      "long_term_estimate": "3-4万亿美元",
      "vs_annual_capex": "约为年资本开支的 5 倍",
      "trend_note": "Google 承诺 $8,900亿居首；行业表外承诺从年初 $2万亿增至 $3.1万亿，6个月增长55%，资本投入仍在加速"
    },
    "china_capex": [
      { "company": "腾讯", "q2_2026": "528亿元", "yoy": "+176%", "annualized": ">2,000亿元", "note": "H1合计847亿，下半年还将抬升；年初预期约1,200亿，实际远超预期" },
      { "company": "阿里巴巴", "q2_2026": "269亿元", "yoy": "—", "annualized": "~1,000亿元", "note": "配售800亿港元全部投入AI；资本开支占营收比例升至约25%" },
      { "company": "百度", "q2_2026": "114亿元", "yoy": "+200%", "annualized": "~450亿元", "note": "资本开支占营收36%，同比翻3倍，增速最快" },
      { "company": "字节跳动", "q2_2026": "年度规划2,000亿", "yoy": "—", "annualized": "~2,000亿元", "note": "上调后较原计划+25%；海外GPU采购占比超60%" }
    ],
    "china_capex_total_q2": "腾讯+阿里+百度 Q2合计 1,318亿元",
    "china_capex_trend": {
      "desc": "中国大厂 AI 资本开支合计年化走势（亿元人民币）",
      "labels": ["2024", "2025-Q1", "2025-Q4", "2026-Q1", "2026-Q2"],
      "data": [1200, 1400, 2200, 3000, 3700],
      "note": "4个季度合计年化从 ~1,400亿 增至 ~3,700亿，增长2.6倍"
    }
  },
  "trend_judgement": {
    "inference": "单价 ↓↓ × 用量 ↑↑↑ = 总支出 ↑↑（量增 > 价降，仍扩张中）",
    "infrastructure": "GPU 单价 ↑ × 采购量 ↑ = 总投入 ↑↑↑（价量齐升，加速中）",
    "conclusion": "推理侧靠量驱动，基建侧靠价量齐升驱动；$3.1万亿表外承诺锁定未来 3-5 年支出，短期不会收缩。"
  }
};

window.AIDATA['macro'] = {
  "meta": {
    "title": "宏观格局：行业景气度与产业趋势",
    "updated": "2026-08-31",
    "source": "OpenRouter / CME / 摩根士丹利 / 华尔街日报 / 中金 / 行业统计",
    "note": "宏观数据多为季度/事件性数据，以月频汇总呈现。"
  },
  "industry_dimensions": [
    { "dim": "需求景气度", "status": "历史峰值", "detail": "全球 Token 周调用量 93.3万亿，2年增长9000倍，Agent Token 消耗达人类 5.2 倍（占比71%）" },
    { "dim": "供给紧张度", "status": "全面紧张", "detail": "H100 基准价升至$2.68/h（+58%）、B200基准$5.66/h；美国75个 AIDC 项目受阻；HBM 存储超级周期" },
    { "dim": "算力成本趋势", "status": "不降反升", "detail": "GPU 租赁价持续反弹、电力成最大瓶颈、算力期货10月挂牌金融化启动" },
    { "dim": "行业营收增速", "status": "加速分化", "detail": "头部公司 ARR 合计突破 $1,000亿，Anthropic Q3 ARR ~$540亿追击 OpenAI $540亿；企业 API 跑通盈利" },
    { "dim": "资本投入力度", "status": "史无前例", "detail": "$3.1万亿表外承诺、$16万亿涌入 AIDC、AI 资本开支$7,500亿首次超油气；AI企业债逼近$5,000亿" },
    { "dim": "商业盈利能力", "status": "首现曙光", "detail": "Anthropic 首次单季盈利 $5.59亿，行业从'烧钱换增长'向'ROI 决胜'转折" }
  ],
  "bottlenecks": [
    { "type": "电力", "status": "AIDC 功率密度 20-100kW/rack，75个项目 $1,300亿受阻", "impact": "算力供给增长受限" },
    { "type": "GPU 供给", "status": "H100 基准价$2.68/h（+58%），B200 基准$5.66/h", "impact": "推理成本上升" },
    { "type": "英伟达芯片产能", "status": "Blackwell/B200 产量受限于 CoWoS 封装产能；台积电 70%+ CoWoS 产能供给英伟达，仍供不应求", "impact": "高端 AI 芯片交付周期拉长，B200 现货价格 2 个月涨 48%" },
    { "type": "台积电 CoWoS 封装", "status": "CoWoS 良率达 99%（5.5 倍光罩尺寸），但产能严重不足；HBM 订货排期至 2027 年；台积电开始将部分 CoWoS 工序外包给 OSAT 厂商", "impact": "先进封装成为 AI 芯片产能核心瓶颈，限制全行业 GPU 出货量" },
    { "type": "HBM 存储", "status": "涨价中，存储超级周期，订货排期至 2027", "impact": "GPU 产能受限" },
    { "type": "人才", "status": "核心人才流动频繁（Jeff Dean 离职、OpenAI 高管离职潮）", "impact": "组织不稳定性" }
  ],
  "trend_signals": [
    { "trend": "Agent 经济崛起", "signal": "Agent Token 占比快速攀升，成为增长核心引擎", "support": "OpenRouter" },
    { "trend": "AI 自我消费 AI", "signal": "Agent Token 消耗达人类 5.2 倍，占比从 2%冲到 71%", "support": "OpenRouter" },
    { "trend": "算力金融化", "signal": "CME 10月推出算力期货（H100$2.68+B200$5.66）", "support": "CME SER-9785" },
    { "trend": "头部模型涨价", "signal": "DeepSeek V4 API 涨价最高 1100%，引入峰谷定价", "support": "DeepSeek 公告" },
    { "trend": "Token 经济性价比化", "signal": "Silicon Data 支出指数停滞/回落，企业回归理性消耗", "support": "Silicon Data" },
    { "trend": "行业首次实现盈利", "signal": "Anthropic Q2 调整后盈利 $5.59亿", "support": "公司披露" },
    { "trend": "算力供给紧张持续", "signal": "CoreWeave $1,040亿在手订单", "support": "财报" },
    { "trend": "AI Capex 加速", "signal": "$16万亿涌入 AIDC，表外承诺 $3.1万亿，AI企业债逼近$5,000亿", "support": "高盛/行业统计" },
    { "trend": "AI 资本开支超油气", "signal": "2026年 AI $7,650亿 > 油气 $6,810亿", "support": "摩根士丹利" },
    { "trend": "先进封装成核心瓶颈", "signal": "台积电 CoWoS 产能 70%+ 供英伟达，良率 99% 但供不应求，HBM 排到 2027", "support": "中信建投研报 / 台积电财报" },
    { "trend": "先进封装市场快速扩张", "signal": "2025 年 $550 亿，预计 2031 年超 $1,200 亿，台积电开始外包 OSAT", "support": "中信建投研报" },
    { "trend": "AI 路由层并购", "signal": "Stripe $70亿+收购 OpenRouter，AI基建最大并购", "support": "彭博/Axios" },
    { "trend": "GPT-6/Astra 临近", "signal": "OpenAI Astra 内测中，预计9月初发布，定位AGI门槛", "support": "The Information/时代杂志" },
    { "trend": "行业进入 ROI 决胜期", "signal": "盈利与亏损公司并存，商业模型效率成为分水岭", "support": "中金研报" }
  ],
  "conclusions": [
    "AI 行业需求仍处爆发式增长，景气度处于历史峰值：Token 调用量指数级攀升，Agent Token 消耗已达人类 5.2 倍，AI 自我消费 AI 成为新常态",
    "Token 单价进入下降通道，但头部模型开始涨价：DeepSeek API 涨价最高 1100%引入峰谷定价，行业进入「性价比+动态定价」新阶段",
    "算力供给紧张加剧而非缓解：H100 基准价升至 $2.68/h（较低点+58%）、B200 基准$5.66/h，电力成最大瓶颈，推理成本下行不及预期",
    "先进封装成为 AI 芯片产能核心瓶颈：台积电 CoWoS 良率 99% 但产能供不应求，70%+ 供英伟达，HBM 排到 2027 年，限制全行业 GPU 出货",
    "行业商业模型分化加速：企业 API 模式跑通盈利（Anthropic），C 端订阅模式仍深度亏损（OpenAI），ROI 成为分水岭",
    "行业资本投入史无前例：$3.1万亿表外承诺锁定未来 3-5 年支出，$16万亿涌入 AIDC，短期不会收缩",
    "算力金融化是下半年最重要变化：CME 期货将重塑产业链定价方式，算力从基础设施成本变为可交易金融资产",
    "行业从'烧钱换增长'向'ROI 决胜'转折：盈利曙光初现但分化剧烈，供给紧张+资本密集投入将持续推高行业门槛"
  ]
};

window.AIDATA['output'] = {
  "meta": {
    "title": "产出与消耗：Token 产出与模型生态",
    "updated": "2026-08-31",
    "source": "OpenRouter / a16z 联合报告 / 公开报道",
    "note": "2024年1月~2025年数据为公开报告锚点；2026年数据来自 OpenRouter 周度公开数据。"
  },
  "key_metrics": {
    "openrouter_weekly_now": ">90万亿",
    "openrouter_weekly_now_mom": "+37%（7月75→8月93.3万亿）",
    "openrouter_weekly_now_qoq": "+86%（Q2均值~50→Q3首月93.3）",
    "openrouter_weekly_now_yoy": "+522%（2025.08 ~15→2026.08 93.3万亿）",
    "openrouter_weekly_2024": "~100亿",
    "growth_times": "9000倍",
    "annual_token_2026q1": ">1千万亿",
    "annual_inference_spend": "~$10亿",
    "annual_spend_mom": "+33%（月支出$9→$12亿）",
    "annual_spend_qoq": "+100%（Q1 ~$6→Q2 ~$12亿/月）",
    "annual_spend_yoy": "+3900%（2025.03 $0.3→2026.08 $12亿/月）",
    "agent_vs_human": "Agent Token 消耗达人类 5.2 倍（8月10日）",
    "agent_share": "71%（一年前仅2%）",
    "human_share": "15%（一年前57%）",
    "models_count": "90+",
    "models_count_yoy": "+50%（2025.08 ~60个→2026.08 90+）"
  },
  "growth_curve": {
    "points": [
      { "date": "2024-01", "weekly_tokens": 0.01, "note": "约100亿" },
      { "date": "2024-06", "weekly_tokens": 0.1, "note": "估算" },
      { "date": "2025-01", "weekly_tokens": 0.5, "note": "估算" },
      { "date": "2025-03", "weekly_tokens": 1.2, "note": "前十大1.24万亿" },
      { "date": "2025-06", "weekly_tokens": 3.0, "note": "估算" },
      { "date": "2025-09", "weekly_tokens": 7.0, "note": "估算" },
      { "date": "2025-12", "weekly_tokens": 15.0, "note": "全年超100万亿" },
      { "date": "2026-02", "weekly_tokens": 24.0, "note": "中国超美国" },
      { "date": "2026-05", "weekly_tokens": 55.0, "note": "估算" },
      { "date": "2026-08", "weekly_tokens": 93.3, "note": "最新" }
    ]
  },
  "ecosystem": {
    "china": {
      "weekly": "40.48万亿",
      "models": ["GLM-5.3-Flash (占19%用量)", "DeepSeek-V4", "Kimi K3 (2.8万亿参数)", "MiMo-V2.5", "Hy3"],
      "open_source": "旗舰级全量开源（GLM-5.3-Flash MIT协议开源，全球最大开源模型 Kimi K3）",
      "trend": "调用量持续上升（+9.88% WoW），GLM-5.3-Flash 全部用国产芯片推理"
    },
    "us": {
      "weekly": "9.66万亿",
      "models": ["GPT-4o/5", "Claude", "Gemini"],
      "open_source": "有限开源（Codex Harness Apache 2.0）",
      "trend": "调用量下滑（-5.85% WoW）"
    }
  },
  "open_source_share": {
    "desc": "OpenRouter 2025年度报告：开源模型使用量占比约33%，中国市场开源主导；2026年8月GLM-5.3-Flash开源后占比进一步上升",
    "milestones": [
      { "date": "2024", "event": "开源模型占比较低，闭源主导" },
      { "date": "2025-06", "event": "DeepSeek V3 发布后开源占比快速上升" },
      { "date": "2025-12", "event": "开源占比约 33%" },
      { "date": "2026-08-24", "event": "全球调用量前五全部为中国模型" },
      { "date": "2026-08-26", "event": "GLM-5.3-Flash MIT协议开源，占平台19%用量" }
    ]
  }
};

window.AIDATA['overview'] = {
  "meta": {
    "title": "数据总览：全球 AI 使用与覆盖率追踪",
    "updated": "2026-08-31",
    "framework": "6 层自上而下分析链路",
    "framework_desc": "需求与采用 → 产出与消耗 → 成本与定价 → 算力供给 → 商业表现 → 宏观格局"
  },
  "key_metrics": [
    { "label": "全球周 Token 调用量", "value": "93.3万亿", "sub": "环比 +23.9%（截至8/23）", "mom": "+37%", "qoq": "+86%", "yoy": "+522%", "delta": "up", "page": "token" },
    { "label": "Anthropic ARR", "value": "$650亿+", "sub": "首次单季盈利 $5.59亿", "mom": "+18%", "qoq": "+242%", "yoy": "+1500%", "delta": "up", "page": "business" },
    { "label": "OpenAI ARR", "value": "~$540亿", "sub": "Q3 增35%，CFO透露", "mom": "+35%", "qoq": "+116%", "yoy": "+350%", "delta": "up", "page": "business" },
    { "label": "H100 租赁价（美国）", "value": "$2.68/h", "sub": "Silicon Data 基准价", "mom": "+14%", "qoq": "+14%", "yoy": "+28%", "delta": "up", "page": "compute" },
    { "label": "CoreWeave 在手订单", "value": "$1,040亿", "sub": "Q2 营收 +112%", "mom": null, "qoq": null, "yoy": "+112%", "delta": "up", "page": "compute" },
    { "label": "算力基建表外承诺", "value": "$3.1万亿", "sub": "未来 3-5 年支出锁定", "mom": null, "qoq": "+15%", "yoy": "+55%", "delta": "up", "page": "cost" },
    { "label": "全球 AI 资本开支", "value": "$7,650亿", "sub": "2026 首次超油气", "mom": null, "qoq": null, "yoy": "+50%", "delta": "up", "page": "macro" },
    { "label": "CME 算力期货", "value": "10月挂牌", "sub": "算力金融化元年", "mom": null, "qoq": null, "yoy": "元年", "delta": "up", "page": "macro" }
  ],
  "conclusions": [
    { "title": "AI 行业需求持续爆发，景气度处于历史峰值", "desc": "全球 Token 周调用量 2 年增长 9000 倍，Agent Token 消耗已达人类 5.2 倍，行业需求侧未见放缓迹象。" },
    { "title": "Token 单价进入下降通道，但头部模型开始涨价", "desc": "Silicon Data 支出指数停滞回落，开源低价竞争加剧；但 DeepSeek API 涨价最高 1100%，行业进入「性价比+峰谷定价」新阶段。" },
    { "title": "算力供给全面紧张，成本不降反升", "desc": "H100 基准价升至 $2.68/h（较低点 +58%）、B200 基准 $5.66/h；电力成为最大瓶颈；算力期货 10 月挂牌标志金融化启动。" },
    { "title": "行业商业模型分化加速：企业 API 跑通盈利，C 端订阅仍烧钱", "desc": "Anthropic Q2 首次单季盈利 $5.59亿（企业 API），OpenAI Q2 亏损 $123亿（C 端订阅）但 Q3 ARR 回升 35%至 ~$540亿；商业效率差距拉大。" },
    { "title": "行业资本投入史无前例：$3.1万亿表外承诺锁定未来支出", "desc": "五大云厂商+英伟达+博通表外承诺超 $3.1万亿，约为年资本开支的 5 倍，短期不会收缩。" },
    { "title": "算力金融化是下半年最重要变化", "desc": "CME 算力期货 10 月挂牌，算力从长协定价走向全球金融定价，类似 1983 年原油期货，将重塑产业链定价方式。" }
  ],
  "timeline": [
    { "date": "2025-01", "event": "Anthropic ARR $10亿，OpenAI ARR $20亿" },
    { "date": "2025-10", "event": "H100 合约价跌至 $1.70/小时低点" },
    { "date": "2025-12", "event": "OpenRouter 全年超 100万亿 Token" },
    { "date": "2026-02", "event": "行业 Agent 工作负载占比快速攀升" },
    { "date": "2026-05", "event": "Anthropic ARR $470亿，融资估值 9,650亿首次超 OpenAI" },
    { "date": "2026-07", "event": "Anthropic ARR $650亿，Q2 首季盈利；OpenAI ARR $400亿" },
    { "date": "2026-08-17", "event": "DeepSeek API 涨价，峰谷定价，最高涨幅 1100%" },
    { "date": "2026-08-20", "event": "GLM-5.3-Flash 匿名空降 OpenRouter 榜首" },
    { "date": "2026-08-24", "event": "全球周 Token 93.3万亿；GLM-5.3-Flash 占 19% 用量" },
    { "date": "2026-08-26", "event": "智谱认领 Ox Alpha 并开源 GLM-5.3-Flash" },
    { "date": "2026-08-30", "event": "H100 基准价升至 $2.68/h；B200 基准 $5.66/h" }
  ],
  "sources": [
    "OpenRouter 公开数据 / Stripe 收购公告",
    "Anthropic / OpenAI / xAI 投资者披露",
    "Silicon Data 指数",
    "CME / 摩根士丹利 / 巴克莱研报",
    "财报与公开报道 / 智谱官方"
  ]
};

window.AIDATA['token'] = {
  "meta": {
    "title": "需求与采用：Token 调用量",
    "updated": "2026-08-31",
    "source": "OpenRouter 公开数据 / 各媒体公开报道汇总",
    "note": "周调用量为 OpenRouter 平台数据；月度值为周数据的月内均值估算。2025年数据为年报/公开报道回溯锚点，部分月份为估算值（标注~）。"
  },
  "monthly": {
    "labels": ["25-03", "25-06", "25-09", "25-12", "26-01", "26-02", "26-03", "26-04", "26-05", "26-06", "26-07", "26-08"],
    "global_weekly": [1.2, 3.0, 7.0, 15.0, 18.0, 24.0, 31.0, 40.0, 55.0, 68.0, 75.0, 93.3],
    "china_weekly": [0.3, 0.9, 2.0, 4.5, 5.5, 7.5, 10.0, 15.0, 22.0, 30.0, 36.0, 40.48],
    "us_weekly": [0.8, 1.8, 4.0, 8.0, 9.5, 11.0, 10.5, 12.0, 13.0, 12.5, 10.5, 9.66]
  },
  "weekly_latest": {
    "period": "2026-08-17 至 2026-08-23",
    "global": 93.3,
    "global_wow": 23.9,
    "global_mom": "+37%（7月75→8月93.3万亿）",
    "global_qoq": "+86%（Q2均值~50→Q3首月93.3）",
    "global_yoy": "+522%（2025.08 ~15万亿→2026.08 93.3万亿）",
    "china": 40.48,
    "china_wow": 9.88,
    "china_mom": "+12%（7月36→8月40.48万亿）",
    "china_qoq": "+54%（Q2均值~26→Q3首月40.48）",
    "china_yoy": "+799%（2025.08 ~4.5万亿→2026.08 40.48万亿）",
    "us": 9.66,
    "us_wow": -5.85,
    "us_mom": "-8%（7月10.5→8月9.66万亿）",
    "us_qoq": "-23%（Q2均值~12.6→Q3首月9.66）",
    "us_yoy": "+21%（2025.08 ~8万亿→2026.08 9.66万亿）",
    "china_lead_weeks": 17
  },
  "model_ranking": [
    { "rank": 1, "model": "GLM-5.3-Flash", "vendor": "智谱", "country": "中国", "note": "匿名单日登顶，占平台19%用量" },
    { "rank": 2, "model": "DeepSeek-V4-Flash", "vendor": "DeepSeek", "country": "中国", "note": "连续三周第一后让位" },
    { "rank": 3, "model": "MiMo-V2.5", "vendor": "小米", "country": "中国", "note": "周调用 10.5万亿" },
    { "rank": 4, "model": "Hy3", "vendor": "腾讯", "country": "中国" },
    { "rank": 5, "model": "DeepSeek-V4-Pro", "vendor": "DeepSeek", "country": "中国" }
  ],
  "agent_trend": {
    "desc": "自2026年2月起，智能体(Agent)产生的 Token 占比快速攀升，成为增长核心引擎。Agent Token 消耗量已达人类的 5.2 倍，占平台总量的 71%。",
    "milestones": [
      { "date": "2024-01", "event": "OpenRouter 周量 ~100亿 Token" },
      { "date": "2025-03", "event": "前十大模型周调用量 1.24 万亿 Token" },
      { "date": "2025-12", "event": "OpenRouter 全年超 100 万亿 Token" },
      { "date": "2026-02", "event": "中国模型周调用量首次超越美国；Agent Token 追平人类" },
      { "date": "2026-08", "event": "全球周调用量 93.3 万亿 Token；Agent 消耗达人类 5.2 倍" },
      { "date": "2026-08-26", "event": "GLM-5.3-Flash 开源，占 OpenRouter 19% 用量，国产芯片推理" }
    ]
  }
};
