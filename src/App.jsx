import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, Check } from 'lucide-react';
import logo from "./assets/yappyncrop.png";
import bgImage from "./assets/bgimage.png";

export default function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://tally.so/widgets/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img src={logo} alt="YAPPYN Logo" className="h-12 w-auto" />
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wide">
                                About
                            </button>
                            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wide">
                                Services
                            </button>
                            <button onClick={() => scrollToSection('case-studies')} className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wide">
                                Case Studies
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wide">
                                Contact
                            </button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <nav className="md:hidden py-4 space-y-3 border-t border-gray-800">
                            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-300 uppercase text-sm">
                                About
                            </button>
                            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-300 uppercase text-sm">
                                Services
                            </button>
                            <button onClick={() => scrollToSection('case-studies')} className="block w-full text-left py-2 text-gray-300 uppercase text-sm">
                                Case Studies
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-300 uppercase text-sm">
                                Contact
                            </button>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img src={bgImage} alt="Hero Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20"></div>
                </div>

                <div className="relative z-10 w-full px-6 lg:px-8 py-20">
                    <div className="max-w-2xl ml-32 lg:ml-128">
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                            Efficient operations,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                focused growth.
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                            We help <span className="text-blue-500 font-semibold">fast-growing companies</span> streamline operations so they can focus on what matters—<span className="text-blue-500 font-semibold">real revenue</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Schedule a Call
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-medium transition-all backdrop-blur-sm"
                            >
                                Learn More
                            </button>
                        </div>

                        <button
                            onClick={() => scrollToSection('case-studies')}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                        >
                            <span className="text-sm uppercase tracking-wide">Explore our case studies</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-4">About YAPPYN</p>
                            <h2 className="text-5xl font-bold mb-6">Operations Consulting That Actually Works</h2>
                        </div>
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                Most companies hit a scaling wall not because of market conditions or competition, but because their internal operations cannot support growth. Processes that worked at 10 people break at 50.
                            </p>
                            <p>
                                YAPPYN exists to solve this structural problem. We are operations specialists who diagnose bottlenecks, architect solutions, and build the systems that let companies scale without friction.
                            </p>
                            <p>
                                Our approach is grounded in execution, not theory. We work at ground level, embedded with your teams, implementing changes that create measurable efficiency gains. No distant advisory. No slide decks that gather dust.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work - Four Phases */}
            <section className="py-32 px-6 lg:px-8 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-4">How We Work</p>
                        <h2 className="text-5xl font-bold mb-6">Four Phases to Operational Excellence</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Every engagement follows our proven methodology. Each phase delivers concrete outcomes, not abstract recommendations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                number: '01',
                                title: 'Diagnose',
                                items: [
                                    'Map current workflows end-to-end',
                                    'Identify bottlenecks and dependencies',
                                    'Quantify time and resource losses',
                                    'Document tribal knowledge gaps'
                                ],
                                color: 'from-blue-500/20 to-transparent'
                            },
                            {
                                number: '02',
                                title: 'Architect',
                                items: [
                                    'Design optimized process flows',
                                    'Define automation opportunities',
                                    'Create implementation roadmap',
                                    'Establish success metrics'
                                ],
                                color: 'from-purple-500/20 to-transparent'
                            },
                            {
                                number: '03',
                                title: 'Build',
                                items: [
                                    'Implement new systems and tools',
                                    'Deploy process improvements',
                                    'Configure automation frameworks',
                                    'Establish visibility tooling'
                                ],
                                color: 'from-pink-500/20 to-transparent'
                            },
                            {
                                number: '04',
                                title: 'Enable',
                                items: [
                                    'Train teams on new processes',
                                    'Transfer knowledge systematically',
                                    'Monitor adoption and adjust',
                                    'Ensure sustainable operations'
                                ],
                                color: 'from-red-500/20 to-transparent'
                            }
                        ].map((phase, idx) => (
                            <div key={idx} className="relative group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                <div className="relative bg-black/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all">
                                    <div className="text-4xl font-bold text-gray-800 mb-4">{phase.number}</div>
                                    <h3 className="text-2xl font-bold mb-6">{phase.title}</h3>
                                    <ul className="space-y-3">
                                        {phase.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                                                <span className="text-gray-600 mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-32 px-6 lg:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-4">Services</p>
                        <h2 className="text-5xl font-bold mb-6">Two Ways to Work With Us</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Pricing is relative to engagement scope, not flat packaged. We work collaboratively at ground level, not as distant advisors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Service 1 */}
                        <div className="bg-gray-900/50 border-2 border-gray-800 p-10 rounded-2xl hover:border-blue-500/50 transition-all">
                            <h3 className="text-3xl font-bold mb-3">Consulting Advisory</h3>
                            <p className="text-gray-400 mb-8 text-lg">Strategic guidance and recommendations to optimize your operations.</p>

                            <div className="space-y-4 mb-10">
                                {[
                                    'Comprehensive operational audit',
                                    'Process mapping and analysis',
                                    'Improvement roadmap with priorities',
                                    'Best practice recommendations',
                                    'Implementation guidance documentation',
                                    'Quarterly review sessions'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <Check className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-gray-500 italic mb-6">Ideal for teams with execution capacity</p>

                            <button
                                onClick={() => scrollToSection('contact')}
                                className="w-full bg-transparent text-white px-6 py-3 rounded-lg border-2 border-blue-500 hover:bg-blue-500/10 transition-all font-medium text-lg"
                            >
                                Discuss Advisory
                            </button>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-gray-900/50 border-2 border-blue-500 p-10 rounded-2xl relative hover:border-blue-400 transition-all">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold mb-3">Consulting + Implementation</h3>
                            <p className="text-gray-400 mb-8 text-lg">End-to-end transformation with embedded execution support.</p>

                            <div className="space-y-4 mb-10">
                                {[
                                    'Everything in Advisory, plus:',
                                    'Hands-on implementation support',
                                    'Tool configuration and setup',
                                    'Process automation deployment',
                                    'Team training and enablement',
                                    'Ongoing optimization support'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <Check className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-gray-500 italic mb-6">For teams needing execution partnership</p>

                            <button
                                onClick={() => scrollToSection('contact')}
                                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all font-medium text-lg"
                            >
                                Discuss Implementation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section id="case-studies" className="py-32 px-6 lg:px-8 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-4">
                            Case Studies
                        </p>
                        <h2 className="text-5xl font-bold mb-6">Transformation in Practice</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Anonymized examples from real engagements. Each represents a structural shift that created measurable operational improvement.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                id: 1,
                                title: 'Process Compression',
                                situation: 'Short card summary here',
                                result: '78%',
                                metric: 'Reduction in turnaround time',
                                detail: 'Hours / days → seconds / minutes',
                                accent: 'from-blue-500 to-blue-600',

                                context: 'FULL CONTEXT PARAGRAPH HERE',

                                coreProblem: [
                                    'Manual, repetitive execution',
                                    'Hidden dependencies on other teams',
                                    'Long turnaround times for approvals',
                                    'Error-prone handoffs and excessive QA'
                                ],

                                intervention: [
                                    'Automated repetitive execution steps end-to-end',
                                    'Removed dependency on external teams',
                                    'Replaced manual drafting with rule-based automation',
                                    'Compressed workflows into deterministic paths'
                                ],

                                outcome: [
                                    'Multi-hour tasks reduced to near-zero effort',
                                    'Execution time reduced to seconds/minutes',
                                    'Approval delays eliminated',
                                    'Errors reduced via system consistency'
                                ],

                                metrics: [
                                    '~78% reduction in turnaround time',
                                    '1–2 hour tasks now automated',
                                    'Excel automations reduced to seconds',
                                    'QA effort largely removed'
                                ],

                                demonstrates: [
                                    'Diagnosing friction instead of blaming process',
                                    'Time compression via execution redesign',
                                    'Automation leverage without overengineering'
                                ]
                            }
,
                            {
                                id: 2,
                                title: 'Dependency Collapse',
                                situation: 'Operational decisions were slowed by cross-team approvals and indirect access to data.',
                                result: '96%',
                                metric: 'Reduction in decision lag',
                                detail: 'Days → hours',
                                accent: 'from-purple-500 to-purple-600',

                                context:
                                    'Operational decisions depended on multiple teams, tools, and approval layers. Access to basic data required tickets, follow-ups, and waiting cycles. Visibility into live performance was indirect and delayed.',

                                coreProblem: [
                                    'Mandatory cross-team dependencies for routine operational data',
                                    'Reliance on product and engineering bandwidth for simple insights',
                                    'Fragmented sources of truth across tools and teams',
                                    'Slow response cycles to client and internal questions',
                                    'Decisions were correct, but consistently late'
                                ],

                                intervention: [
                                    'Centralized operational data into live, self-serve dashboards',
                                    'Removed ticket-based workflows for routine decision inputs',
                                    'Established clear ownership boundaries for operational decisions',
                                    'Enabled direct interrogation of data without intermediaries',
                                    'Reduced approval layers instead of attempting to speed them up'
                                ],

                                outcome: [
                                    'Dependency on product and engineering teams eliminated',
                                    'Decision cycles reduced from days or weeks to hours',
                                    'Faster, more confident responses to clients and stakeholders',
                                    'Shift from reactive firefighting to proactive decision-making'
                                ],

                                metrics: [
                                    '~96% reduction in decision lag',
                                    'Waiting periods reduced from days to hours',
                                    'Zero-ticket access to operational data',
                                    'Improved accuracy and confidence in external communication'
                                ],

                                demonstrates: [
                                    'Removing dependencies creates speed by default',
                                    'Visibility is a direct decision accelerator',
                                    'Operational autonomy scales better than coordination'
                                ]
                            },
                            {
                                id: 3,
                                title: 'Automation Framework',
                                situation: 'Daily operations relied heavily on manual execution, Excel macros, and repeated QA, creating time leakage and error exposure.',
                                result: '90%',
                                metric: 'Overall time savings',
                                detail: 'Hours → minutes',
                                accent: 'from-pink-500 to-pink-600',

                                context:
                                    'Daily operations depended on manual edits, Excel macros, repeated QA cycles, and hand-written communications. Multiple tools were used sequentially, and output quality was tightly coupled to human attention and time availability.',

                                coreProblem: [
                                    'Manual Excel edits and macro executions',
                                    'Repetitive text drafting and formatting work',
                                    'Frequent tool switching and copy-paste workflows',
                                    'Heavy QA overhead required to catch human errors',
                                    'Processes worked only with sustained manual effort'
                                ],

                                intervention: [
                                    'Automated data preparation and transformation steps',
                                    'Converted recurring manual tasks into rule-based automation',
                                    'Standardized inputs to generate consistent outputs',
                                    'Collapsed multi-step workflows into minimal execution paths',
                                    'Focused on eliminating repetition rather than adding tooling complexity'
                                ],

                                outcome: [
                                    'Manual work reduced to exception handling only',
                                    'Output consistency improved without increasing QA effort',
                                    'Turnaround time compressed from hours to minutes',
                                    'Operators transitioned from execution roles to oversight roles'
                                ],

                                metrics: [
                                    'Excel automation reduced from minutes to seconds',
                                    'Text editing workflows reduced from hours per day to minutes',
                                    '~90% overall time savings across operational tasks',
                                    'QA effort largely eliminated due to standardized outputs'
                                ],

                                demonstrates: [
                                    'Automation acts as a force multiplier when workflows are stable',
                                    'Reducing steps lowers both execution time and error probability',
                                    'Efficiency gains come from redesign, not incremental speed-ups'
                                ]
                            }
,
                            {
                                id: 4,
                                title: 'Operational Visibility & Dependency Removal',
                                situation: 'Operational data was fragmented across teams and systems, forcing dependency on tickets and follow-ups for basic answers.',
                                result: 'Realtime',
                                metric: 'Operational visibility',
                                detail: 'Days / weeks → instant access',
                                accent: 'from-red-500 to-red-600',

                                context:
                                    'Operational data lived across multiple teams and systems. Answers required dependency on product, engineering, or analytics teams through tickets and follow-ups. Response cycles stretched from days to weeks, limiting effective client and internal communication.',

                                coreProblem: [
                                    'Delayed responses to client and internal questions',
                                    'No direct visibility into live operational performance',
                                    'Heavy reliance on other teams for basic insights',
                                    'Reactive issue handling instead of proactive investigation',
                                    'Data existed but was inaccessible to operators'
                                ],

                                intervention: [
                                    'Built centralized dashboards directly from existing databases',
                                    'Exposed live operational metrics in a single unified view',
                                    'Removed ticket-based dependency for routine operational questions',
                                    'Enabled self-serve analysis for operations stakeholders',
                                    'Optimized for faster cognition, not report volume'
                                ],

                                outcome: [
                                    'Immediate access to live operational data',
                                    'Client questions answered in real time',
                                    'Higher confidence in internal decision-making',
                                    'More effective cross-team conversations driven by shared facts'
                                ],

                                metrics: [
                                    'Dependency latency reduced from days/weeks to real time',
                                    'Client response quality shifted from reactive to informed',
                                    'Operational clarity improved from fragmented to centralized',
                                    'Zero-ticket access for routine operational insights'
                                ],

                                demonstrates: [
                                    'Visibility collapses organizational friction by default',
                                    'Access to data changes behavior, not just speed',
                                    'Operational maturity increases when teams can self-verify'
                                ]
                            }
                        ].map((study) => (
                            <div
                                key={study.id}
                                onClick={() => setSelectedCaseStudy(study)}
                                className="bg-black border border-gray-800 p-8 rounded-2xl
                     hover:border-blue-500/50 transition-all cursor-pointer group"
                            >
                                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>

                                <p className="text-gray-400 mb-6">{study.situation}</p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gray-900 p-6 rounded-lg">
                                        <div
                                            className={`text-4xl font-bold bg-gradient-to-r ${study.accent}
                            bg-clip-text text-transparent mb-2`}
                                        >
                                            {study.result}
                                        </div>
                                        <p className="text-gray-500 text-sm">{study.metric}</p>
                                    </div>

                                    <div className="bg-gray-900 p-6 rounded-lg flex items-center">
                                        <p className="text-sm text-gray-400">{study.detail}</p>
                                    </div>
                                </div>

                                {/* Read More */}
                                <div className="flex items-center justify-end gap-2 text-blue-500 group-hover:text-blue-400">
                                    <span className="text-sm font-medium">Read full case study</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Case Study Modal */}
            {selectedCaseStudy && (
                <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm">
                    <div className="absolute inset-0 flex items-center justify-center px-4 py-8">
                        <div className="bg-black border border-gray-800 w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] rounded-2xl flex flex-col overflow-hidden">

                            {/* Header */}
                            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
                                <h3 className="text-3xl font-bold">
                                    {selectedCaseStudy.title}
                                </h3>
                                <button
                                    onClick={() => setSelectedCaseStudy(null)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="px-8 py-6 overflow-y-auto space-y-10 text-gray-300 leading-relaxed">

                                {/* Context */}
                                <section>
                                    <h4 className="text-sm uppercase tracking-wide text-blue-500 mb-2">
                                        Context
                                    </h4>
                                    <p>
                                        {selectedCaseStudy.context}
                                    </p>
                                </section>

                                {/* Core Problem */}
                                <section>
                                    <h4 className="text-sm uppercase tracking-wide text-blue-500 mb-2">
                                        Core Problem
                                    </h4>
                                    <ul className="list-disc list-inside space-y-2">
                                        {selectedCaseStudy.coreProblem.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Intervention */}
                                <section>
                                    <h4 className="text-sm uppercase tracking-wide text-blue-500 mb-2">
                                        Intervention
                                    </h4>
                                    <ul className="list-disc list-inside space-y-2">
                                        {selectedCaseStudy.intervention.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Outcome */}
                                <section>
                                    <h4 className="text-sm uppercase tracking-wide text-blue-500 mb-2">
                                        Outcome
                                    </h4>
                                    <ul className="list-disc list-inside space-y-2">
                                        {selectedCaseStudy.outcome.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Metrics */}
                                <section>
                                    <h4 className="text-sm uppercase tracking-wide text-blue-500 mb-2">
                                        Key Impact Metrics
                                    </h4>
                                    <ul className="list-disc list-inside space-y-2">
                                        {selectedCaseStudy.metrics.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </section>

                                {/* What This Demonstrates */}
                                <section>
                                    <h4 className="text-sm uppercase tracking-wide text-blue-500 mb-2">
                                        What This Demonstrates
                                    </h4>
                                    <ul className="list-disc list-inside space-y-2">
                                        {selectedCaseStudy.demonstrates.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            )}

          

            {/* Contact */}
            <section id="contact" className="py-32 px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-4">
                            Contact
                        </p>
                        <h2 className="text-5xl font-bold mb-6">Work With Us</h2>
                        <p className="text-xl text-gray-400">
                            Ready to fix your operational foundation? Start a conversation about your challenges and goals.
                        </p>
                    </div>

                    <div className="bg-black border border-gray-800 rounded-2xl overflow-hidden">
                        <iframe
                            src="https://tally.so/embed/aQeLkB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                            loading="lazy"
                            width="100%"
                            height="650"
                            frameBorder="0"
                            title="Contact Us"
                        />
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-400 mb-2">Or email us directly at</p>
                        <a
                            href="mailto:yappynbusiness@gmail.com"
                            className="text-blue-500 hover:underline text-lg font-medium"
                        >
                            yappynbusiness@gmail.com
                        </a>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500">
                            We respond to all inquiries within one business day
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 py-12 px-6 lg:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center">
                            <img src={logo} alt="YAPPYN Logo" className="h-12 w-auto" />
                        </div>

                        <div className="flex items-center gap-8 text-sm text-gray-500">
                            <span>Operations Consulting</span>
                            <span>•</span>
                            <a
                                href="https://www.termsfeed.com/live/33ea9e03-f2ee-4515-ad83-4ffb377ef919"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <span>•</span>
                            <span>2025 YAPPYN. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}