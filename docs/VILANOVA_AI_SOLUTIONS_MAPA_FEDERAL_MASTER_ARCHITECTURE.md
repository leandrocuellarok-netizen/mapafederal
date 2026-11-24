# VILANOVA AI SOLUTIONS × MAPA FEDERAL
## Enterprise intelligence architecture — internal master specification
Version 1.0 | 2026-11-24
Status: architecture blueprint; not a claim that every capability is operational.

## Strategic purpose
Mapa Federal is the public territorial, economic and market intelligence platform. Vilanova AI Solutions is its enterprise-facing service layer for market intelligence, personalized business intelligence, strategic marketing and predictive business intelligence. The objective is to turn public, licensed and client-authorized information into traceable knowledge, decision support and commercial recommendations.
Working global product concept: Global Business Intelligence Engine (GBIE).
Positioning: “Know the market. Understand the competition. Anticipate the future.”
Spanish default, English-ready. Industry-agnostic, modular, multi-country and multi-sector.
The 150,000-specialist framing is an aspirational quality benchmark only, not a real team, staffing claim or certification. Named leaders are intellectual reference points, not participants or endorsers.

## Three commercial products
### 1 Market Intelligence
Sector/geographic intelligence for SMEs, corporations, investors, chambers, associations and advisors. Covers industry monitoring, competitive landscape, trends, customer/consumer changes, opportunities, risks and sector assessments.
Deliverables by engagement: weekly brief, monthly market report, competitor comparison, quarterly review, annual sector report, trend report, opportunity map and executive briefing. Dimensions: industry, geography, time window, analytical depth.

### 2 Personalized Business Intelligence
Dedicated company workspace from client-provided and authorized profile: legal/commercial name, brands, website, country, city, operating geography, industry, business model, products/services, customer segments, direct/indirect competitors and substitutes, suppliers/channels, goals, commercial challenges, monitoring frequency, preferred formats, optional financial indicators and context.
Monitor public/authorized information: websites, launches, pricing, locations, public campaigns, announcements, hiring, distribution, partnerships, acquisitions, publications, financial disclosures, regulation, reviews, demand and search trends.
Distinguish confirmed facts, derived indicators, hypotheses and forecasts.
Deliverables: alerts, weekly briefs, competitor activity, monthly assessment, opportunity studies, positioning matrices, expansion studies and executive reports.

### 3 Predictive Business Intelligence
Forecasting and scenario analysis from historical data and observable signals. Never claim certainty about the future.
When data supports it: market demand/growth, adoption, concentration, competitor expansion or launch likelihood, investment screening, customer demand, price/cost, risk and geographic expansion.
Scenarios: base, optimistic, adverse and alternative strategy. Every scenario states assumptions, drivers, defensible probabilities (or none), consequences and strategic responses.
Deliverables: forecasts, investment reports, early warnings, demand forecasts, competitive threat assessment, scenario simulation and executive briefing.

## Universal industry taxonomy
Extensible initial categories: manufacturing; industrial production; retail; wholesale; e-commerce; financial services; banking; insurance; fintech; real estate; construction; tourism; hospitality; gastronomy; healthcare; pharmaceuticals; education; training; agriculture; livestock; agribusiness; food; transport; logistics; energy; renewables; telecommunications; software; SaaS; AI; advertising; marketing; consulting; international trade; exports; mining; automotive; mobility; consumer goods; media; environmental services; security; legal services; human resources; business services; public procurement suppliers; industrial maintenance; packaging; chemicals; biotechnology.
Support dynamic categories/subcategories and mappings to external classifications. Never assume common indicators/data sources across all sectors.

## Strategic marketing intelligence
Evidence-backed frameworks: STP; marketing mix/extended mix; customer journey; CLV; CAC; retention; product-market fit; brand equity; penetration; market/product development; diversification; growth-share; positioning; value proposition; Jobs to Be Done; Blue Ocean; Five Forces; SWOT; PESTEL; Ansoff; value chain.
Segmentation: geography, lawful/non-sensitive demographic variables where appropriate, organization attributes, purchasing behavior, needs, price sensitivity, industry, size/revenue band, channels, frequency, procurement requirements and decision structure.
B2B profiles: size, sector, location, procurement, operations, buying cycle, decision unit, technology adoption and potential contract value.
TAM/SAM/SOM estimates disclose calculation method, assumptions, date, sources and confidence; not official statistics unless sourced as such.
Advertising intelligence reviews public ads/campaigns, messages, formats, channels, search visibility and available engagement. Private platform performance requires client-authorized account access.

## Intelligence data operations
Pipeline target: source registry → scheduled/incremental collection → normalization → deduplication/entity resolution → provenance and quality checks → analytical feature layer → indicators/models → review as needed → public views/client outputs.
Hourly cadence is a target architecture, not a claim of an existing continuous service. Respect source update frequency, terms, licensing, rate limits and cost. No repeated unchanged research or fabricated developments.
Execution record: execution ID, timestamp, scope/client or sector, sources, new records, material changes, duplicates, verification, anomalies, forecast updates, alerts, errors, duration and status. Daily synthesis and weekly/monthly consolidation only when actual scheduled jobs and data sources are deployed.

## Shared intelligence data model
Entities: Source, Observation, Organization, Brand, Industry, Geography, Product, CompetitorRelationship, Opportunity, InvestmentProject, Regulation, Indicator, Forecast, Scenario, Alert, ClientProfile, AnalysisRun, Report.
Observation fields: source URL/name, publisher, publication/retrieval time, geographic scope, entity links, source type, covered period, evidence reference, verification status, freshness, licensing/access classification and confidence.
Forecast fields: target variable, geography/segment, horizon, model/version, training window, data lineage, features, baseline, prediction, interval, validation metrics, assumptions, caveats, generated_at and review status.
Report links to source observations, transformations, assumptions and reviewer status.

## Predictive methodology and safeguards
Start with descriptive baselines and transparent statistical methods before complex ML. Candidates: seasonal naive, moving averages, exponential smoothing, ARIMA/SARIMA, regression, panel/econometric models, tree-based methods, calibrated classifiers. Select by target and data sufficiency.
Validation: temporal train/validation/test split, rolling-origin backtesting, naive baseline comparison, MAE/RMSE/MAPE where appropriate, calibration/interval coverage, drift monitoring, subgroup/error analysis, versioning and reproducibility. Prevent leakage and unsupported causal claims.
Weak evidence means “insufficient data” or qualitative scenarios, not fabricated probabilities. Separate observation, interpretation, inference and forecast.

## Public product roles
### Mapa Federal home
Public territorial/economic discovery: map, provincial profiles, public information, source-attributed catalogues and compact access to specialized tools. Explain enterprise services without exposing client data or sensitive IP.
### Radar IA
Public: attributed business, economic, regulatory and technology signals; sector themes, timelines, publication/retrieval dates; distinguish news, structured data, interpretation and forecasts.
Enterprise: market monitoring, competitor signals, trends, marketing intelligence and tailored synthesis under request. Do not describe static catalogues as live autonomous AI.
### Investment Finder
Public: documented opportunities/programs/projects with sector, jurisdiction, stage, validity, published amounts only, source, period and verification scope.
Enterprise: location intelligence, market/competition context, infrastructure/supply chain, regulation, workforce, investment screening and scenarios. A listing is not investment advice or guaranteed viability/returns. Preserve distinction among resources/reserves/production and announced/in-progress/operating/closed.
### Nodos Estratégicos
Shared geographic layer for ports, rail, roads, energy, industrial parks, productive hubs and other infrastructure with evidence and source provenance. Never infer capacity without evidence.

## Commercial architecture
Market Intelligence: sector subscription or scoped report.
Personalized BI: onboarding, dedicated client profile, monitoring priorities, frequency and recurring service.
Predictive BI: premium analytical project/subscription with defined targets, horizon, validation and decision brief.
All products share core infrastructure but have distinct client journeys and deliverables.
Custom reports and ad-hoc analysis are not enabled as unrestricted generation in public UI. Available as commissioned service after scope, source, method and review. No public “generate anything” prompt interface.
Vilanova AI Solutions is the commercial service identity; Mapa Federal remains the public platform.

## Privacy, security, legal and ethical rules
Use public, licensed or client-authorized sources. Respect privacy law, data protection, copyright, terms, rate limits and access controls. No private-account scraping or bypasses. No sensitive personal data or discriminatory targeting.
Client workspaces require tenant isolation, authentication, least privilege, server-side secrets, encryption at rest/in transit and audit logs. GitHub Pages/static hosting cannot securely host private client data, API keys or a multi-tenant backend.
Human review for consequential recommendations. No financial, legal, tax or investment guarantee. Record limitations and uncertainty.

## Roadmap
Phase 0: governance, taxonomy, schemas, source registry, provenance standards, threat model and consent.
Phase 1: public data quality, timestamps, evidence links, entity resolution, bilingual text and quality indicators in Radar IA/Investment Finder.
Phase 2: normalized data store, indicators, market segmentation, competitor graph, geography joins, report templates and reproducible analysis runs.
Phase 3: client workspaces, auth, tenancy, onboarding, authorized connectors, monitoring preferences, alerts and billing.
Phase 4: target-specific forecast datasets, baselines, backtests, model registry, forecast API, scenario engine, drift detection and review.
Phase 5: multi-country taxonomy, localization, cost controls, observability, audits and integrations.

## Public claim policy
Public pages may claim existing catalogues, filters and source-linked information supported by code. Planned capabilities must be marked “en desarrollo”, “hoja de ruta” or “servicio bajo solicitud”. Never claim trained models, validated forecasts, continuous client monitoring or hourly operational intelligence unless code, data, credentials, jobs and successful logs prove it.
