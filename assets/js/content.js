/* Verified bilingual portfolio content; no private CV links. */
window.profileConfig = {
  "email": "fengyuanze01@hotmail.com",
  "github": "https://github.com/KaedeharaT",
  "linkedin": "",
  "publications": [],
  "resume": {
    "approved": false,
    "url": ""
  }
};
window.content = {
  "ja": {
    "title": "Feng Yuanze | AI・建築設備エンジニアリング",
    "description": "九州大学博士課程の Feng Yuanze。LLM・AI Agent アプリケーション開発、BEMS データ理解、空調・建築設備の設計とエネルギー研究。",
    "nav": [
      "ホーム",
      "自己紹介",
      "プロジェクト",
      "研究",
      "実務経験",
      "学歴",
      "スキル",
      "連絡先"
    ],
    "skip": "本文へ移動",
    "theme": "カラーテーマ",
    "system": "システム",
    "light": "ライト",
    "dark": "ダーク",
    "close": "閉じる",
    "zoom": "画像を拡大",
    "eyebrow": "AI APPLICATIONS × BUILDING SYSTEMS",
    "role": "九州大学大学院 人間環境学府 博士課程",
    "graduation": "2027年3月 修了予定",
    "headline": "建築の知識を、\n動く AI へ。",
    "intro": "ソフトウェア開発、建築エネルギー研究、空調設計・施工管理の実務経験を組み合わせ、AI を活用したアプリケーションと工学的な課題解決に取り組んでいます。",
    "projectsCta": "プロジェクトを見る",
    "contactCta": "連絡する",
    "portrait": "Feng Yuanze のプロフィール写真",
    "aboutTitle": "専門分野の課題を、検証できるソフトウェアに。",
    "about": [
      "空調設計と現場調整、発注者側の工程管理を経験し、現在は建築データの理解・分析を支援するソフトウェアを開発しています。",
      "設備原理に基づく検証、出典をたどれるデータ、人による確認を重視しています。BuildingAI では分析と診断に、HealthOps では状態を保持するワークフローに、この考え方を実装しています。"
    ],
    "educationTitle": "学歴",
    "education": [
      [
        "2023.04 — 現在",
        "九州大学大学院 人間環境学府",
        "博士課程 · 建築環境・設備分野",
        "2027年3月 修了予定"
      ],
      [
        "2017.04 — 2019.03",
        "九州大学大学院 人間環境学府",
        "修士（工学）",
        "蓄熱空調システムの運用最適化"
      ],
      [
        "2012.09 — 2016.06",
        "西華大学 建築・土木工程学院",
        "学士（工学）· 建築環境・設備工学",
        ""
      ]
    ],
    "researchTitle": "研究",
    "projectsTitle": "主な開発プロジェクト",
    "projectsIntro": "開発したソフトウェアと、その設計判断。研究の評価結果は研究セクションにまとめています。",
    "responsibility": "担当した開発",
    "features": "実装のポイント",
    "repository": "GitHub でソースを見る",
    "demo": "合成データによる実際のアプリ画面 · クリックで拡大",
    "projects": [
      {
        "name": "BuildingAI",
        "category": "建築エネルギー × Agentic AI",
        "status": "研究・分析プラットフォーム",
        "description": "異なる建物の BEMS データを、設備単位の理解・性能分析・根拠に基づく診断につなぐ Python アプリケーション。",
        "role": "LLM による列の意味推定、設備 ID の正規化、温度信号の対応付け、設備分析を実装。PyQt5・API・データ管理を統合し、Agent の読み取り専用ツール呼び出し、根拠確認、回帰テストを開発しています。",
        "points": [
          "意味推定 → 人の確認 → 設備関連付け → KPI・ルール診断という一貫した分析フロー。",
          "読み取り専用の Agent がプロジェクトの根拠と検索した参考情報を分けて提示。BAS の制御操作は行いません。",
          "図面上の検出候補は、人の確認後に設備情報と関連付け。"
        ],
        "stack": [
          "Python",
          "PyQt5",
          "FastAPI",
          "SQLite",
          "LLM / RAG",
          "YOLOv8"
        ],
        "repo": "hvac-ai-analyzer",
        "images": [
          [
            "hvac-ai-analyzer-energy-analysis.webp",
            "エネルギーと時系列の分析"
          ],
          [
            "hvac-ai-analyzer-dashboard.webp",
            "プロジェクト概要・データ準備状況"
          ],
          [
            "hvac-ai-analyzer-diagnostics.webp",
            "診断結果とプロジェクトの根拠"
          ]
        ],
        "problem": "建物やプロジェクトごとに BEMS の列名・言語・設備 ID が異なり、設備間の関係や分析に必要な信号を、そのままでは把握できません。",
        "outcome": "BEMS の意味確認、設備別 COP・ΔT・エネルギーの可視化、ルール診断と根拠の追跡を一つのアプリに統合。博士研究の手法を、複数データで繰り返し分析できる実装へ展開しています。",
        "architecture": [
          [
            "PyQt5 / FastAPI",
            "UI・API / タスクサービス"
          ],
          [
            "Python",
            "意味解析・設備・KPI・診断"
          ],
          [
            "Agent / RAG",
            "ツール呼び出し・根拠確認"
          ],
          [
            "SQLite",
            "プロジェクト・履歴・データ"
          ]
        ],
        "technical": "Python の解析サービスを、PyQt5 デスクトップ UI と FastAPI のタスク API に接続。SQLite でプロジェクト情報を管理し、LLM・RAG と決定的な工学計算を分離しています。"
      },
      {
        "name": "Executive HealthOps",
        "category": "継続ワークフロー × AI Agent",
        "status": "研究・ポートフォリオ用プロトタイプ",
        "description": "健康資料、経時的な変化、管理目標、担当者・医師の判断を、一つの継続的なワークスペースでつなぐプロトタイプ。",
        "role": "健康資料の構造化・確認・記録、履歴と出典を保持するデータモデル、確認待ちから再開する Agent ワークフロー、後続タスク編成と回帰検証を開発。",
        "points": [
          "資料の原文根拠、単位の正規化、重複・矛盾、修正履歴を保持。新しい測定で過去の基準値を上書きしません。",
          "人や医師の確認待ちで停止し、結果を受け取って元の処理を再開。冪等性・実行制限・監査記録を備えます。",
          "正式なリスクは決定的なルールで判定。実運用の臨床サービスや臨床的有効性を主張するものではありません。"
        ],
        "stack": [
          "Python",
          "Streamlit",
          "FastAPI",
          "SQLAlchemy",
          "Alembic",
          "Agent workflows"
        ],
        "repo": "executive-healthops",
        "images": [],
        "problem": "分散した健康資料、重複・矛盾のある更新、人の判断と後続タスクの分断。",
        "outcome": "資料の確認・記録、状態の永続化、確認待ちからの再開と後続タスクを実装。合成データで回帰・ブラウザ検証を実施したプロトタイプ。",
        "technical": "Streamlit の役割別ワークスペース、FastAPI、SQLAlchemy・Alembic による永続化。Agent は管理されたツールとサービスを介して実行し、正式なリスクはルールで判定します。"
      }
    ],
    "experienceTitle": "実務経験",
    "experience": [
      [
        "2022.01 — 2022.08",
        "深圳市大鵬新区建築工務署",
        "発注者側の工程・プロジェクト管理",
        "市政道路2件・橋梁1件の予算、契約、進捗・品質管理を支援。設計・施工・監理・行政の関係者を調整し、現場と設計の不整合に対する9件の設計変更について、コスト・工程への影響を確認しながら協議と審査を推進。"
      ],
      [
        "2020.04 — 2021.08",
        "日本空調サービス株式会社",
        "空調設計・施工管理エンジニア",
        "オフィス・工場など5件の改修工事に参加。冷暖房負荷計算、機器選定、空調・換気設計、施工図・機器資料の作成を担当し、調達・設置から調整、試運転、引渡しまでサプライヤーと施工会社を調整。"
      ]
    ],
    "skillsTitle": "技術・専門スキル",
    "skills": [
      {
        "title": "AI & Software",
        "rows": [
          [
            "Python 開発",
            "pandas・NumPy によるデータ処理、FastAPI・PyQt5・Streamlit によるアプリ実装。"
          ],
          [
            "LLM・Agent",
            "構造化出力、ツール呼び出し、RAG、状態を保持するワークフローと人による確認。"
          ],
          [
            "データ・検証",
            "SQLite・SQLAlchemy・Alembic、出典追跡、pytest による回帰検証。"
          ]
        ],
        "links": [
          [
            "buildingai",
            "BuildingAI"
          ],
          [
            "healthops",
            "Executive HealthOps"
          ]
        ]
      },
      {
        "title": "Building & Energy",
        "rows": [
          [
            "空調・換気設計",
            "負荷計算、機器選定、改修設計から試運転・引渡しまで。"
          ],
          [
            "エネルギー分析",
            "BEMS データ、設備 KPI、運用診断、蓄熱システムのモデル・シミュレーション。"
          ],
          [
            "プロジェクト調整",
            "予算・契約管理支援、設計変更、工程と関係者の調整。"
          ]
        ],
        "links": [
          [
            "experience",
            "実務経験"
          ],
          [
            "research",
            "研究"
          ]
        ]
      }
    ],
    "contactTitle": "お問い合わせ",
    "contactText": "AI アプリケーション開発、建築エネルギー研究、建築設備エンジニアリングに関する採用・共同研究のご相談は、メールからご連絡ください。",
    "emailLabel": "メール",
    "footer": "Feng Yuanze · 研究とエンジニアリング",
    "top": "ページ上部へ",
    "position": [
      "AI アプリケーション開発 × 建築設備エンジニアリング"
    ],
    "shortcuts": [
      [
        "buildingai",
        "BuildingAI",
        "建築データから設備分析へ"
      ],
      [
        "healthops",
        "Executive HealthOps",
        "状態を保持する Agent 開発"
      ],
      [
        "experience",
        "空調・工程管理",
        "日本と中国での実務経験"
      ]
    ],
    "quickLabel": "主な実績へのショートカット",
    "problemLabel": "課題",
    "outcomeLabel": "実装・成果",
    "architectureLabel": "技術アーキテクチャ",
    "evidenceLabel": "実装例を見る",
    "experienceLink": "実務経験を見る",
    "skillsIntro": "実際の開発・研究・実務で使っている能力。各分類から実績を確認できます。",
    "navLabel": "ページ内ナビゲーション",
    "languageLabel": "表示言語を英語に切り替え",
    "photoLabel": "プロフィール",
    "researchLink": "研究の評価を見る",
    "experiencePoints": [
      [
        "道路2件・橋梁1件で、発注者側の予算・契約・進捗・品質管理を支援。",
        "現場条件と設計の不整合について、設計・施工・監理・行政部門を調整。",
        "コストと工程への影響を追跡し、9件の設計変更の協議・審査・推進を担当。"
      ],
      [
        "オフィス・工場など5件の改修で、冷暖房負荷計算、機器選定、空調・換気設計、施工図を担当。",
        "調達・設置と現場課題の解決に向け、サプライヤー・施工会社を調整。",
        "試運転・検査・引渡しまで関わり、5件の改修工程の実施を支援。"
      ]
    ],
    "phdResearch": {
      "overviewTitle": "研究概要",
      "overview": "私の博士研究では、建築図面や BEMS の運転データから設備情報を理解し、空調設備の運用分析や省エネルギー改善につなげる手法を研究しています。YOLOv8 による図面認識、LLM によるデータ項目の意味理解、設備信号の関係復元、工学的指標に基づく診断を中心に取り組んでいます。",
      "figureTitle": "博士研究の全体像",
      "caption": "図1. 博士研究の全体像",
      "alt": "建築図面・BEMS 運転データの入力、図面認識・意味理解・設備信号の整理、工学解析、BuildingAI への応用、診断と改善検討を示す日本語の研究全体図。",
      "figureNote": "研究全体の枠組みを示す図です。すべての処理が完全自動化されていることを示すものではありません。図面の物体検出と BEMS 信号の関係復元は別の研究であり、図面対象と信号の全自動照合は実現済みとしていません。図中の画面は説明用の概念表現で、実際のアプリ画面はプロジェクト欄に掲載しています。",
      "coreTitle": "主な研究テーマ",
      "methodLabel": "手法",
      "goalLabel": "目的",
      "themes": [
        {
          "title": "建築図面の物体認識",
          "method": "YOLOv8 で空調設備・窓等を検出し、転移学習の方法を比較。",
          "goal": "建築エネルギー解析に利用する図面情報の抽出。検出結果は予測として扱い、人が確認します。"
        },
        {
          "title": "BEMS データの意味理解",
          "method": "LLM で多言語・異表記の項目を解釈し、設備 ID を正規化。設備・系統・流向を確認して供給・還りの温度を対応付け。",
          "goal": "同一設備の信号を整理して計算可能な関係を復元。根拠不足や曖昧な対応は計算を保留します。"
        },
        {
          "title": "空調設備の性能分析",
          "method": "COP・ΔT 等の工学的指標とルールを用い、計測データと設備原理から運転状態を分析。",
          "goal": "異常の可能性を検討し、省エネルギー改善の確認事項を示すこと。改善効果や故障の確定は別途検証します。"
        }
      ],
      "resultsTitle": "研究成果",
      "source": "出典：本人提供の中文 CV。開発・内部評価を含む実験結果であり、独立した外部ベンチマークや建物全般の性能保証ではありません。",
      "results": [
        {
          "label": "BEMS 列の意味識別正解率",
          "value": "85.08% → 91.36%",
          "scope": "開発・内部評価データを含む実プロジェクト10件、注釈付き382サンプル。既存の工学ルール手法と比較。"
        },
        {
          "label": "温度対応の関係 F1",
          "value": "0.6774 → 0.8286",
          "scope": "同評価の参考温度ペア35組で関係識別を比較。設備全般や図面と信号の照合精度を表す指標ではありません。"
        },
        {
          "label": "図面物体検出の最高 mAP",
          "value": "0.707",
          "scope": "2,193個の注釈付き対象を用いた YOLOv8・転移学習の比較実験。CV に mAP の IoU 条件の詳細は記載されていません。"
        }
      ],
      "validationTitle": "計算結果から対応付けの誤りを追跡",
      "validation": "温差計算の検証では、23組・約46.4万件の対応時系列を調査し、5組の供給・還りの逆転を特定。分析結果から元データと対応付けの手順に戻り、誤差の原因を追える仕組みを研究しています。",
      "applicationTitle": "研究成果の応用",
      "application": "博士研究で開発したデータ理解や設備分析の手法を、BuildingAI という建築エネルギー分析プラットフォームに応用しています。意味理解、設備別の分析、診断、可視化を組み合わせ、複数の建物データで繰り返し調査・検証できる分析基盤を開発しています。",
      "applicationLink": "BuildingAI を見る →",
      "mastersTitle": "修士研究：蓄熱空調システムの運用最適化",
      "mastersPeriod": "2017 — 2019",
      "mastersText": "5階建て・11,613 m²のオフィスを対象に、実測データ、設備モデル、コイル実験とシミュレーションを組み合わせ、氷蓄熱・水冷ヒートポンプ・帯水層蓄熱の協調運転を比較。評価した冷房月・暖房月でピーク時間帯の使用電力量を約5.2 GJ・10.4 GJ減らす条件と、総電力量が増えるトレードオフを確認しました。"
    },
    "originalSize": "原寸で表示",
    "fitSize": "全体を表示",
    "imageViewport": "拡大画像。原寸表示ではスクロールして全体を確認できます。",
    "nameJapanese": "馮元沢",
    "resumeLabel": "Resume（準備中）",
    "resumeAvailable": "Resume（PDF）",
    "resumePending": "現在ダウンロードできる Resume はありません。",
    "implementationLabel": "技術実装",
    "resultsLabel": "実装した機能・成果",
    "workflowLabel": "確認しながら進める分析フロー",
    "workflow": [
      "データを取り込む",
      "意味と設備を確認",
      "KPI・運転状態を分析",
      "根拠から診断を検討"
    ],
    "featureLabel": "重点プロジェクト"
  },
  "en": {
    "title": "Feng Yuanze | AI Applications & Building Systems",
    "description": "Feng Yuanze, PhD candidate at Kyushu University. AI application development, LLM agents, BEMS data understanding, HVAC engineering and building energy research.",
    "nav": [
      "Home",
      "About",
      "Projects",
      "Research",
      "Experience",
      "Education",
      "Skills",
      "Contact"
    ],
    "skip": "Skip to content",
    "theme": "Color theme",
    "system": "System",
    "light": "Light",
    "dark": "Dark",
    "close": "Close",
    "zoom": "Enlarge image",
    "eyebrow": "AI APPLICATIONS × BUILDING SYSTEMS",
    "role": "PhD Candidate at Kyushu University",
    "graduation": "Expected graduation · March 2027",
    "headline": "Building knowledge.\nWorking AI.",
    "intro": "I develop AI-powered applications and engineering solutions, combining software development, building energy research, and practical HVAC experience.",
    "projectsCta": "Explore my work",
    "contactCta": "Get in touch",
    "portrait": "Profile portrait of Feng Yuanze",
    "aboutTitle": "Domain expertise, implemented in software.",
    "about": [
      "My background spans HVAC design and site coordination in Japan, followed by owner-side infrastructure project coordination in China. I now turn building-data research into usable software.",
      "I focus on engineering checks, traceable data and human review. BuildingAI applies these principles to analysis and diagnostics; HealthOps applies them to persistent workflows."
    ],
    "educationTitle": "Education",
    "education": [
      [
        "2023.04 — Present",
        "Kyushu University",
        "PhD candidate · Graduate School of Human-Environment Studies",
        "Expected graduation: March 2027"
      ],
      [
        "2017.04 — 2019.03",
        "Kyushu University",
        "Master of Engineering · Graduate School of Human-Environment Studies",
        "Operational optimization of thermal-storage HVAC systems"
      ],
      [
        "2012.09 — 2016.06",
        "Xihua University",
        "BEng · Building Services Engineering",
        "School of Architecture and Civil Engineering"
      ]
    ],
    "researchTitle": "Research",
    "projectsTitle": "Featured projects",
    "projectsIntro": "Software I have developed and the decisions behind it. Method evaluation is presented separately under Research.",
    "responsibility": "My contribution",
    "features": "Implementation highlights",
    "repository": "View source on GitHub",
    "demo": "Actual application with synthetic demo data · click to enlarge",
    "projects": [
      {
        "name": "BuildingAI",
        "category": "BUILDING ENERGY × AGENTIC AI",
        "status": "Research & analysis platform",
        "description": "A Python application for turning heterogeneous building data into equipment-level understanding, performance analysis and evidence-based diagnostics.",
        "role": "Developed LLM field interpretation, equipment-ID normalization, temperature pairing and equipment analytics. Integrated the desktop UI, API and data services, and implemented read-only Agent tools, evidence checks and regression tests.",
        "points": [
          "A consistent flow from semantic interpretation and human review to equipment context, KPIs and rule-based diagnostics.",
          "A read-only Agent separates project evidence from retrieved reference material. It cannot control a BAS.",
          "Drawing detections become equipment-linked evidence only after human confirmation."
        ],
        "stack": [
          "Python",
          "PyQt5",
          "FastAPI",
          "SQLite",
          "LLM / RAG",
          "YOLOv8"
        ],
        "repo": "hvac-ai-analyzer",
        "images": [
          [
            "hvac-ai-analyzer-energy-analysis.webp",
            "Energy and time-series analysis"
          ],
          [
            "hvac-ai-analyzer-dashboard.webp",
            "Project overview and data readiness"
          ],
          [
            "hvac-ai-analyzer-diagnostics.webp",
            "Diagnostics and project evidence"
          ]
        ],
        "problem": "BEMS naming, language and equipment IDs differ between projects. Equipment relationships and the signals required for engineering calculations are difficult to interpret directly.",
        "outcome": "A runnable application integrates reviewed BEMS semantics, equipment COP/ΔT/energy views, rule diagnostics and traceable evidence. It turns doctoral methods into repeatable analysis across datasets.",
        "architecture": [
          [
            "PyQt5 / FastAPI",
            "UI, API & task services"
          ],
          [
            "Python",
            "Semantics, equipment, KPIs & diagnostics"
          ],
          [
            "Agent / RAG",
            "Tool calling & evidence review"
          ],
          [
            "SQLite",
            "Projects, history & data"
          ]
        ],
        "technical": "Python analysis services connect to a PyQt5 desktop UI and FastAPI task API, with SQLite project storage. LLM/RAG investigation remains separate from deterministic engineering calculations."
      },
      {
        "name": "Executive HealthOps",
        "category": "CONTINUING WORKFLOWS × AI AGENTS",
        "status": "Research / portfolio prototype",
        "description": "A prototype connecting health materials, longitudinal changes, management goals and accountable human and doctor decisions in a continuing workspace.",
        "role": "Developed structured intake and confirmation, provenance-preserving data models, persistent Agent workflows, resumption after human review, follow-up orchestration and regression checks.",
        "points": [
          "Retains source evidence, normalized units, duplicates, conflicts and correction history. New observations do not overwrite historical baselines.",
          "Pauses for manager or doctor confirmation and resumes the original workflow, with idempotency, bounded execution and audit receipts.",
          "Formal risk is determined by deterministic rules. This prototype does not claim clinical deployment or clinical effectiveness."
        ],
        "stack": [
          "Python",
          "Streamlit",
          "FastAPI",
          "SQLAlchemy",
          "Alembic",
          "Agent workflows"
        ],
        "repo": "executive-healthops",
        "images": [],
        "problem": "Fragmented health materials, conflicting updates and a gap between human decisions and follow-up work.",
        "outcome": "Implemented confirmed intake, persistent state, resumption after human review and follow-up tasks. A prototype verified with synthetic-data regression and browser checks.",
        "technical": "Streamlit role workspaces, FastAPI, and SQLAlchemy/Alembic persistence. Agents act through governed tools and services; formal risk remains deterministic."
      }
    ],
    "experienceTitle": "Professional experience",
    "experience": [
      [
        "2022.01 — 2022.08",
        "Shenzhen Dapeng New District Construction Bureau",
        "Owner-side engineering project coordination",
        "Supported budget, contract, schedule and quality management for two municipal road projects and one bridge. Coordinated design institutes, contractors, supervision consultants and government departments; progressed nine design changes while tracking cost, schedule and constructability impacts."
      ],
      [
        "2020.04 — 2021.08",
        "Nippon Air Conditioning Service Co., Ltd.",
        "HVAC Design & Construction Management Engineer",
        "Contributed to five renovation projects for offices and manufacturing facilities. Performed thermal load calculations, equipment selection, air-conditioning and ventilation design, and construction drawing preparation. Coordinated suppliers and contractors through procurement, installation, commissioning and handover."
      ]
    ],
    "skillsTitle": "Technical skills",
    "skills": [
      {
        "title": "AI & Software",
        "rows": [
          [
            "Python development",
            "Data processing with pandas/NumPy; applications with FastAPI, PyQt5 and Streamlit."
          ],
          [
            "LLMs & Agents",
            "Structured outputs, tool calling, RAG, persistent workflows and human review."
          ],
          [
            "Data & verification",
            "SQLite, SQLAlchemy and Alembic; provenance and pytest regression checks."
          ]
        ],
        "links": [
          [
            "buildingai",
            "BuildingAI"
          ],
          [
            "healthops",
            "Executive HealthOps"
          ]
        ]
      },
      {
        "title": "Building & Energy",
        "rows": [
          [
            "HVAC design & delivery",
            "Load calculations, equipment selection and retrofit design through commissioning and handover."
          ],
          [
            "Energy analysis",
            "BEMS data, equipment KPIs, diagnostics and thermal-storage modeling/simulation."
          ],
          [
            "Project coordination",
            "Budget and contract support, design changes, schedules and stakeholder coordination."
          ]
        ],
        "links": [
          [
            "experience",
            "Engineering experience"
          ],
          [
            "research",
            "Research"
          ]
        ]
      }
    ],
    "contactTitle": "Get in touch",
    "contactText": "For recruitment or research conversations about AI applications, building energy or building systems engineering, please reach out by email.",
    "emailLabel": "Email",
    "footer": "Feng Yuanze · Research & Engineering",
    "top": "Back to top",
    "position": [
      "AI Application Development × Building Systems Engineering"
    ],
    "shortcuts": [
      [
        "buildingai",
        "BuildingAI",
        "Building data to equipment analytics"
      ],
      [
        "healthops",
        "Executive HealthOps",
        "Persistent Agent workflows"
      ],
      [
        "experience",
        "Engineering experience",
        "HVAC delivery & project coordination"
      ]
    ],
    "quickLabel": "Shortcuts to selected work",
    "problemLabel": "Problem",
    "outcomeLabel": "Implementation & result",
    "architectureLabel": "Technical architecture",
    "evidenceLabel": "Explore the implementation",
    "experienceLink": "View engineering experience",
    "skillsIntro": "Capabilities used in actual development, research and delivery, with links to the work behind them.",
    "navLabel": "Page navigation",
    "languageLabel": "Switch display language to Japanese",
    "photoLabel": "Profile",
    "researchLink": "View research evaluation",
    "experiencePoints": [
      [
        "Supported owner-side budget, contract, schedule and quality management for 2 municipal road projects and 1 bridge.",
        "Coordinated government departments, designers, contractors and supervision consultants to resolve design/site conflicts.",
        "Progressed 9 design changes through coordination and review, tracking cost, constructability and schedule impacts."
      ],
      [
        "Contributed to 5 office and manufacturing retrofit projects through heating/cooling load calculations, equipment selection, HVAC/ventilation design and construction drawings.",
        "Coordinated suppliers and contractors on procurement, installation and site issues.",
        "Supported inspections, commissioning and handover across the 5 renovation projects."
      ]
    ],
    "phdResearch": {
      "overviewTitle": "Research overview",
      "overview": "My PhD research focuses on extracting and interpreting equipment information from architectural drawings and Building Energy Management System (BEMS) data to support HVAC performance analysis and energy efficiency investigations. My work covers YOLOv8-based drawing recognition, LLM-based semantic interpretation, equipment-signal relationship reconstruction and engineering-oriented diagnostics.",
      "figureTitle": "Overview of My PhD Research",
      "caption": "Figure 1. Overview of My PhD Research",
      "alt": "Japanese-language PhD research diagram: architectural drawings and BEMS data, drawing recognition and semantic interpretation, equipment-signal organization, engineering analysis, BuildingAI application, and diagnostic and improvement investigations.",
      "figureNote": "The Japanese diagram presents the overall research framework: inputs → data understanding → engineering analysis → platform application → outputs. It does not imply that every module is fully automated. Drawing-object detection and BEMS signal relationships are separate research tasks; fully automatic drawing-to-signal matching is not claimed. The interface illustrated in the diagram is conceptual; actual application screenshots appear under Projects.",
      "coreTitle": "Core research",
      "methodLabel": "Method",
      "goalLabel": "Goal",
      "themes": [
        {
          "title": "Architectural drawing recognition",
          "method": "Detect air-conditioning equipment and windows with YOLOv8 and compare transfer-learning methods.",
          "goal": "Extract drawing information for building energy analysis. Detections remain predictions for human review."
        },
        {
          "title": "BEMS semantic understanding",
          "method": "Interpret multilingual and inconsistent fields with LLMs, normalize equipment IDs, and pair supply/return temperatures using equipment, circuit and flow context.",
          "goal": "Organize signals by equipment and reconstruct relationships for calculation. Ambiguous or unsupported pairs are withheld."
        },
        {
          "title": "HVAC performance analysis",
          "method": "Analyze operation using engineering metrics such as COP and ΔT, deterministic rules, measurements and equipment principles.",
          "goal": "Investigate possible anomalies and identify checks for energy efficiency improvements. Fault confirmation and realized savings require further verification."
        }
      ],
      "resultsTitle": "Research results",
      "source": "Source: the author’s supplied Chinese CV. These are study-specific results, including development and internal evaluation data, not independent external benchmarks or guarantees across buildings.",
      "results": [
        {
          "label": "BEMS field semantic accuracy",
          "value": "85.08% → 91.36%",
          "scope": "10 real projects and 382 annotated samples, including development/internal evaluation data; compared with an existing engineering-rule method."
        },
        {
          "label": "Temperature-pair relationship F1",
          "value": "0.6774 → 0.8286",
          "scope": "Relationship identification on 35 reference temperature pairs in the same evaluation; not a metric for all equipment relationships or drawing-to-signal matching."
        },
        {
          "label": "Best drawing-detection mAP",
          "value": "0.707",
          "scope": "YOLOv8 transfer-learning comparisons using 2,193 annotated objects. The CV does not specify the mAP IoU setting."
        }
      ],
      "validationTitle": "Tracing calculation errors to signal relationships",
      "validation": "Investigated 23 comparable temperature pairs across approximately 464,000 paired time-series records and located five reversed supply/return pairs. I study how to trace calculation errors back to source data and the relationship-building step.",
      "applicationTitle": "Research application",
      "application": "I apply my research methods to BuildingAI, a software platform for building energy analysis. The platform brings together semantic understanding, equipment-level analytics, diagnostics and visualization to support repeatable engineering investigations across building datasets.",
      "applicationLink": "Explore BuildingAI →",
      "mastersTitle": "Master’s research: thermal-storage HVAC optimization",
      "mastersPeriod": "2017 — 2019",
      "mastersText": "Used measurements, equipment models, coil experiments and simulation for a five-story, 11,613 m² office building. Compared ice storage, water-cooled heat pumps and aquifer thermal storage. Selected simulated storage conditions reduced peak-period electricity use by about 5.2 GJ and 10.4 GJ in the evaluated cooling and heating months, while revealing a tradeoff of higher total electricity use."
    },
    "originalSize": "View original size",
    "fitSize": "Fit to view",
    "imageViewport": "Enlarged image. Scroll to inspect the image in original-size mode.",
    "nameJapanese": "馮元沢",
    "resumeLabel": "Resume (coming soon)",
    "resumeAvailable": "Resume (PDF)",
    "resumePending": "A resume is not available for download yet.",
    "implementationLabel": "Technical implementation",
    "resultsLabel": "Results",
    "workflowLabel": "A reviewable analysis workflow",
    "workflow": [
      "Import BEMS data",
      "Review semantics & equipment",
      "Analyze KPIs & operation",
      "Investigate diagnostic evidence"
    ],
    "featureLabel": "Featured project"
  }
};
