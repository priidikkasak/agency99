export type CaseCategory = 'automation' | 'systems' | 'web';

export interface CaseContent {
  title: string;
  tagline: string;
  problem: string;
  approach: string;
  solution: string;
  results: string[];
  stack: string[];
  metric: string;
  metricLabel: string;
  intro: string;
  context: string;
}

export interface Case {
  slug: string;
  category: CaseCategory;
  year: string;
  en: CaseContent;
  et: CaseContent;
}

export const cases: Case[] = [
  {
    slug: 'ecom-inventory',
    category: 'automation',
    year: '2024',
    en: {
      title: 'E-commerce Inventory Sync',
      tagline: 'Multi-platform inventory management, automated end to end.',
      metric: '90%',
      metricLabel: 'reduction in manual work',
      problem: 'A mid-size e-commerce operator was manually reconciling inventory across three platforms every morning—a 2-hour daily task prone to stock discrepancies and overselling.',
      approach: 'We mapped every inventory event source, identified the reconciliation rules, and designed a single source of truth with event-driven sync.',
      solution: 'A webhook-driven pipeline that listens to inventory events across all platforms and propagates changes in real time. Conflict resolution logic handles edge cases automatically. A lightweight dashboard surfaces anomalies before they cause issues.',
      intro: 'Stock discrepancies were costing time and reputation. Manual reconciliation was the norm—until it wasn\'t.',
      context: 'The client operated three storefronts on separate platforms with no shared inventory layer. Every morning a team member spent two hours cross-referencing spreadsheets and correcting stock levels. Overselling was a recurring problem, and the fix was always manual.',
      results: [
        '90% reduction in time spent on inventory reconciliation',
        'Overselling incidents dropped from ~8/month to near zero',
        'Real-time sync latency under 30 seconds across all platforms',
        'Dashboard surfacing anomalies before customer impact'
      ],
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Webhook pipelines', 'Custom sync engine'],
    },
    et: {
      title: 'E-poe laohalduse sünkroonimine',
      tagline: 'Mitme platvormi laohaldus automatiseeritud algusest lõpuni.',
      metric: '90%',
      metricLabel: 'manuaalse töö vähenemine',
      problem: 'Keskmise suurusega e-poe operaator vastandas laoseisu käsitsi kolmel platvormil iga hommik—2-tunnine igapäevane ülesanne, mis oli altid varude lahknevustele ja ülemüügile.',
      approach: 'Kaardistasime iga laosündmuse allika, tuvastasime vastandusreeglid ja kujundasime ühtse tõeallika sündmuspõhise sünkrooniga.',
      solution: 'Webhookipõhine konveier, mis kuulab laosündmusi kõikidel platvormidel ja levitab muudatusi reaalajas. Konflikti lahendamise loogika käsitleb äärjuhuseid automaatselt. Kerge juhtpaneel tõstab esile anomaaliaid enne probleemide tekkimist.',
      intro: 'Varude lahknevused maksid aega ja mainet. Manuaalne vastandamine oli norm—kuni see ei olnud enam.',
      context: 'Klient tegutses kolmel eraldi platvormil ilma ühise laokihita. Iga hommik veetis meeskonnaliige kaks tundi tabelite ristkontrollimisel ja laoseisu korrigeerimisel. Ülemüük oli korduv probleem ja parandus oli alati manuaalne.',
      results: [
        '90% vähenemine laohalduse vastandamisele kulutatud ajas',
        'Ülemüügi intsidendid langesid ~8/kuu-lt peaaegu nulli',
        'Reaalajas sünkroonimise latentsus alla 30 sekundi kõikidel platvormidel',
        'Juhtpaneel, mis tõstab esile anomaaliaid enne kliendimõju'
      ],
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Webhook pipelines', 'Custom sync engine'],
    },
  },
  {
    slug: 'support-triage',
    category: 'automation',
    year: '2024',
    en: {
      title: 'Support Ticket Triage',
      tagline: 'AI-assisted triage handling 70% of tickets automatically.',
      metric: '70%',
      metricLabel: 'tickets handled automatically',
      problem: 'A SaaS company\'s support team was overwhelmed. First response time had crept to 6 hours, and agents spent most of their time routing and categorizing—not solving.',
      approach: 'We audited ticket patterns across 3 months of history, identified the top resolution flows, and designed a classification and routing system that could handle the majority automatically.',
      solution: 'An AI classification pipeline that reads incoming tickets, extracts intent and urgency, and routes each to the right queue or generates a direct response for known issue types. Escalation logic handles anything the model isn\'t confident about.',
      intro: 'Six-hour first response time. Agents buried in routing, not resolving. There was a cleaner way.',
      context: 'The client had grown rapidly and support volume had outpaced headcount. The team was good but the system wasn\'t. Most time was spent on categorization and routing, not on solving real problems.',
      results: [
        '70% of tickets handled automatically, without agent intervention',
        'Median first response time dropped from 6 hours to under 12 minutes',
        'Agent focus shifted to complex, high-value tickets',
        'Customer satisfaction score improved by 22 points'
      ],
      stack: ['Python', 'LLM APIs', 'Webhook integrations', 'Custom routing engine', 'TypeScript dashboard'],
    },
    et: {
      title: 'Tugiteenuse piletite triaaž',
      tagline: 'AI-toega triaaž käitleb 70% pileteid automaatselt.',
      metric: '70%',
      metricLabel: 'pileteid käideldud automaatselt',
      problem: 'SaaS-ettevõtte tugimeeskond oli ülekoormatud. Esimese vastuse aeg oli kasvanud 6 tunnini ja agendid veetsid suurema osa ajast suunamisele ja kategoriseerimisele—mitte lahendamisele.',
      approach: 'Auditisime pileti mustreid 3 kuu ajaloo põhjal, tuvastasime peamised lahendusevood ja kujundasime klassifitseerimis- ja suunamissüsteemi, mis suudaks enamust automaatselt käidelda.',
      solution: 'AI klassifitseerimise konveier, mis loeb sissetulevaid pileteid, eraldab kavatsuse ja kiireloomulisuse ning suunab iga pileti õigele järjekorralle või genereerib tuntud probleemitüüpide jaoks otse vastuse. Eskaleerimise loogika käitleb kõike, milles mudel pole kindel.',
      intro: 'Kuue tunnine esimese vastuse aeg. Agendid maetud suunamisesse, mitte lahendamisesse. Oli puhtam viis.',
      context: 'Klient oli kiiresti kasvanud ja tugiteenuse maht oli ületanud töötajate arvu. Meeskond oli hea, aga süsteem mitte. Suurema osa ajast kulus kategoriseerimisele ja suunamisele, mitte tegelike probleemide lahendamisele.',
      results: [
        '70% pileteid käideldud automaatselt, ilma agendi sekkumiseta',
        'Mediaan esimese vastuse aeg langes 6 tunnilt alla 12 minuti',
        'Agentide fookus nihkus keerulistele, kõrge väärtusega piletitele',
        'Klientide rahulolu skoor paranes 22 punkti võrra'
      ],
      stack: ['Python', 'LLM APIs', 'Webhook integrations', 'Custom routing engine', 'TypeScript dashboard'],
    },
  },
  {
    slug: 'saas-landing',
    category: 'web',
    year: '2024',
    en: {
      title: 'B2B SaaS Conversion Site',
      tagline: 'Rebuilt positioning and site structure. 3× conversion rate.',
      metric: '3×',
      metricLabel: 'increase in trial signups',
      problem: 'A B2B SaaS product had strong PMF but a website that didn\'t communicate it. Visitors were leaving without converting, and the team couldn\'t figure out why.',
      approach: 'We ran a full copy and structure audit, conducted user interviews, identified the core conversion barriers, and rebuilt the site around what buyers actually care about.',
      solution: 'A rebuilt marketing site with sharper positioning, a restructured pricing page, and a new onboarding flow designed to get users to the "aha moment" faster. Copy led with outcomes, not features.',
      intro: 'Great product. Website that didn\'t show it. Visitors left without converting. We fixed the gap.',
      context: 'The product had paying customers and strong word-of-mouth but the website wasn\'t closing. The existing site listed features without communicating value. Price page was confusing. Trial flow had too many steps.',
      results: [
        'Trial signup conversion rate tripled within 6 weeks of launch',
        'Pricing page bounce rate dropped by 41%',
        'Time-to-first-value in onboarding reduced by 3 steps',
        'Organic ranking improved for 12 target keywords'
      ],
      stack: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    },
    et: {
      title: 'B2B SaaS konversiooniline veebileht',
      tagline: 'Ümberkujundatud positsioneerimine ja saidi struktuur. 3× konversioonimäär.',
      metric: '3×',
      metricLabel: 'prooviregistreerimiste kasv',
      problem: 'B2B SaaS tootel oli tugev PMF, kuid veebileht ei kommunikeerinud seda. Külastajad lahkusid ilma konverteerimata ja meeskond ei suutnud aru saada miks.',
      approach: 'Viisime läbi täieliku koopia ja struktuuri auditi, tegime kasutajaintervjuusid, tuvastasime põhilised konversioonibarjäärid ja ülesraiusime saidi ümber selle põhjal, mis ostjatele tegelikult korda läheb.',
      solution: 'Ümberehitatud turundussait teravama positsioneerimisega, ümberstruktureeritud hinnakirjaleht ja uus sisseelamisvoog, mis on disainitud selleks, et viia kasutajad kiiremini "aha-momendini". Koopia lähtub tulemustest, mitte funktsioonidest.',
      intro: 'Suurepärane toode. Veebileht, mis seda ei näidanud. Külastajad lahkusid ilma konverteerimata. Parandanud lõhe.',
      context: 'Tootel olid maksvad kliendid ja tugev suusõnaline soovitus, kuid veebileht ei sulgend tehinguid. Olemasolev sait loetles funktsioone ilma väärtust kommunikeerimata. Hinnakirjaleht oli segadust tekitav. Proovimisvoolul oli liiga palju samme.',
      results: [
        'Proovimise registreerimise konversioonimäär kolmekordistus 6 nädala jooksul pärast käivitamist',
        'Hinnakirjalehe põrkumismäär langes 41% võrra',
        'Sisseelamise esimese väärtuse aeg vähenes 3 sammu võrra',
        'Orgaaniline edetabelikoht paranes 12 sihtvõtmesõna puhul'
      ],
      stack: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    },
  },
  {
    slug: 'ops-dashboard',
    category: 'systems',
    year: '2023',
    en: {
      title: 'Operations Visibility Dashboard',
      tagline: 'Single pane of glass for a distributed operations team.',
      metric: '20h',
      metricLabel: 'saved per week per team',
      problem: 'A scaling logistics company had operational data spread across 5 separate tools. No single view of what was happening. Weekly reporting was a manual, 4-hour exercise.',
      approach: 'We built a unified data model, identified the 12 key operational metrics, and designed a dashboard that surfaces the right information at the right time without becoming another thing to maintain.',
      solution: 'A real-time operations dashboard aggregating data from all existing systems via scheduled polling and webhook connectors. Role-based views for ops, management, and executive teams. Alerting on threshold breaches.',
      intro: 'Five tools. No single view. Four hours a week building reports by hand. We built the one thing they were missing.',
      context: 'The operations team was growing rapidly but visibility wasn\'t. Leadership made decisions based on last week\'s data. Anomalies went unnoticed until they became expensive problems.',
      results: [
        'Weekly manual reporting eliminated entirely',
        '20+ hours saved per team per week across operations and management',
        'Anomaly detection catching issues within minutes instead of days',
        'Executive and ops views rolled out to 40+ team members'
      ],
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts', 'REST connectors', 'Vercel'],
    },
    et: {
      title: 'Operatsioonide nähtavuse juhtpaneel',
      tagline: 'Ühtne vaade hajutatud operatsioonide meeskonnale.',
      metric: '20h',
      metricLabel: 'säästetud nädalas meeskonna kohta',
      problem: 'Kasvav logistikaettevõte omas operatsiooniandmeid 5 eraldi tööriistas. Puudus ühtne vaade toimuvast. Iganädalane aruandlus oli manuaalne, 4-tunnine harjutus.',
      approach: 'Lõime ühtse andmemudeli, tuvastasime 12 põhilist operatiivmõõdikut ja kujundasime juhtpaneeli, mis tõstab esile õige teabe õigel ajal, muutumata veel üheks hooldust vajavaks asjaks.',
      solution: 'Reaalajas operatsioonide juhtpaneel, mis koondab andmeid kõikidest olemasolevatest süsteemidest ajastatud küsitluse ja webhookiühenduste kaudu. Rollipõhised vaated operatsioonide, juhtimise ja juhtkonna meeskondadele. Teavitused lävenditaseme ületamisel.',
      intro: 'Viis tööriista. Ühtne vaade puudub. Neli tundi nädalas aruannete käsitsi koostamisel. Ehitasime selle ühe asja, mida neil puudus.',
      context: 'Operatsioonide meeskond kasvas kiiresti, kuid nähtavus mitte. Juhtkond tegi otsuseid eelmise nädala andmete põhjal. Anomaaliad jäid märkamata, kuni need muutusid kallisteks probleemideks.',
      results: [
        'Iganädalane manuaalne aruandlus täielikult kõrvaldatud',
        '20+ tundi säästetud meeskonna kohta nädalas operatsioonides ja juhtimises',
        'Anomaaliate tuvastamine märkab probleeme minutite, mitte päevade jooksul',
        'Juhtkonna ja operatsioonide vaated avaldatud 40+ meeskonnaliikmele'
      ],
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts', 'REST connectors', 'Vercel'],
    },
  },
  {
    slug: 'lead-pipeline',
    category: 'automation',
    year: '2024',
    en: {
      title: 'Sales Lead Qualification Pipeline',
      tagline: 'AI-scored leads. Sales team only talks to the right ones.',
      metric: '5×',
      metricLabel: 'more qualified leads reached',
      problem: 'A professional services firm was spending 60% of sales time on leads that never converted. No qualification layer meant everyone got the same attention—which meant nobody got enough.',
      approach: 'We designed a scoring model based on historical conversion data, built the enrichment and scoring pipeline, and integrated it with the existing CRM to create a simple "who to call today" list.',
      solution: 'An inbound lead enrichment and scoring pipeline. New leads are enriched with firmographic data, scored against a configurable model, and surfaced to sales ranked by likelihood to convert. Automated follow-up sequences handle lower-scored leads.',
      intro: '60% of sales time on dead-end leads. One scoring pipeline later, sales only talks to the ones who matter.',
      context: 'The firm received solid inbound volume but had no way to prioritize. Every lead looked the same in the CRM. The sales team was responsive but not selective—which hurt both conversion rates and morale.',
      results: [
        'Sales team capacity on qualified leads increased 5×',
        'Deal close rate improved from 12% to 31%',
        'Sales cycle shortened by average 18 days',
        'Automated sequences nurturing 200+ low-score leads per month'
      ],
      stack: ['Python', 'LLM APIs', 'CRM integration', 'TypeScript', 'PostgreSQL'],
    },
    et: {
      title: 'Müügivihjete kvalifitseerimise konveier',
      tagline: 'AI-hinnanguga vihjed. Müügimeeskond räägib ainult õigetega.',
      metric: '5×',
      metricLabel: 'rohkem kvalifitseeritud vihjeid jõudis müügimeeskonnani',
      problem: 'Professionaalsete teenuste firma kulutab 60% müügiajast vihjete peale, mis kunagi ei konverteerunud. Kvalifitseerimiskihi puudumine tähendas, et kõik said sama tähelepanu—mis tähendas, et keegi ei saanud piisavalt.',
      approach: 'Kujundasime hindamismudeli ajalooliste konversioonandmete põhjal, ehitasime rikastamis- ja hindamiskonveieri ning integreerisime selle olemasoleva CRM-iga lihtsa "keda täna helistada" nimekirja loomiseks.',
      solution: 'Sissetuleva vihje rikastamis- ja hindamiskonveier. Uued vihjed rikastatakse firmograafiliste andmetega, hinnatakse konfigureeritava mudeli järgi ja esitatakse müügile konverteerimise tõenäosuse järgi järjestatuna. Automatiseeritud järelmeetmejärjestused käsitlevad madalama hindega vihjeid.',
      intro: '60% müügiajast ummikteedele. Üks hindamiskonveier hiljem räägib müük ainult nendega, kes loevad.',
      context: 'Firmal oli tugev sissetulev maht, kuid puudus prioritiseerimisviis. Iga vihje nägi CRM-is ühesugune välja. Müügimeeskond oli vastutulelik, kuid mitte selektiivne—mis kahjustas nii konversioonimäärasid kui ka moraali.',
      results: [
        'Müügimeeskonna võimekus kvalifitseeritud vihjete osas kasvas 5×',
        'Tehingu sulgemismäär paranes 12%-lt 31%-le',
        'Müügitsükkel lühenes keskmiselt 18 päeva võrra',
        'Automatiseeritud järjestused toetavad 200+ madala hindega vihjet kuus'
      ],
      stack: ['Python', 'LLM APIs', 'CRM integration', 'TypeScript', 'PostgreSQL'],
    },
  },
  {
    slug: 'doc-processing',
    category: 'systems',
    year: '2023',
    en: {
      title: 'Document Extraction Pipeline',
      tagline: '500+ documents per day processed without human hands.',
      metric: '500+',
      metricLabel: 'documents processed daily',
      problem: 'A financial services firm was processing incoming documents manually—extracting data, routing to the right team, and logging outcomes. Volume was 500+ per day. The team was at capacity.',
      approach: 'We analysed document types, mapped the extraction fields and routing rules, and designed a pipeline that could handle the full flow with human review only for edge cases.',
      solution: 'A document processing pipeline using OCR and LLM-powered extraction. Incoming documents are classified, data extracted into structured format, and routed to the right workflow. Confidence scoring determines what goes to auto-processing vs. human review queue.',
      intro: 'Five hundred documents a day, processed by hand. Not anymore.',
      context: 'The team\'s growth was constrained by document processing capacity. Hiring more people wasn\'t sustainable. Accuracy requirements were high—financial data demanded precision. The existing tooling was brittle and required constant maintenance.',
      results: [
        '98% of documents processed automatically end-to-end',
        'Processing time per document reduced from 8 minutes to under 15 seconds',
        'Extraction accuracy consistently above 97% on tested document types',
        'Human review queue reduced to under 2% of daily volume'
      ],
      stack: ['Python', 'OCR', 'LLM APIs', 'PostgreSQL', 'TypeScript dashboard', 'Queue system'],
    },
    et: {
      title: 'Dokumentide töötlemise konveier',
      tagline: '500+ dokumenti päevas töödeldud ilma inimkäteta.',
      metric: '500+',
      metricLabel: 'dokumenti töödeldud päevas',
      problem: 'Finantsteenuste firma töötles saabuvaid dokumente käsitsi—eraldas andmeid, suunas õigesse meeskonda ja logis tulemusi. Maht oli 500+ päevas. Meeskond oli võimsuse piirini.',
      approach: 'Analüüsisime dokumenditüüpe, kaardistasime eraldamisväljad ja suunamisreeglid ning kujundasime konveieri, mis suudab kogu voo käidelda koos inimese ülevaatusega ainult äärjuhustes.',
      solution: 'Dokumentide töötlemise konveier, kasutades OCR-i ja LLM-toega andmete eraldamist. Saabuvad dokumendid klassifitseeritakse, andmed eraldatakse struktureeritud formaati ja suunatakse õigele töövoolule. Usalduse hindamine määrab, mis läheb automaattöötlusesse vs. inimese ülevaatuse järjekorda.',
      intro: 'Viissada dokumenti päevas, töödeldud käsitsi. Mitte enam.',
      context: 'Meeskonna kasv oli piiratud dokumentide töötlemise võimsusega. Rohkemate inimeste palkamine polnud jätkusuutlik. Täpsusnõuded olid kõrged—finantsandmed nõudsid täpsust. Olemasolevad tööriistad olid haprad ja vajadasid pidevat hooldust.',
      results: [
        '98% dokumentidest töödeldud automaatselt algusest lõpuni',
        'Töötlemisaeg dokumenti kohta vähenes 8 minutilt alla 15 sekundi',
        'Eraldamise täpsus püsivalt üle 97% testitud dokumenditüüpidel',
        'Inimese ülevaatuse järjekord vähenes alla 2% päevasest mahust'
      ],
      stack: ['Python', 'OCR', 'LLM APIs', 'PostgreSQL', 'TypeScript dashboard', 'Queue system'],
    },
  },
];

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getCasesByCategory(category: CaseCategory): Case[] {
  return cases.filter((c) => c.category === category);
}
