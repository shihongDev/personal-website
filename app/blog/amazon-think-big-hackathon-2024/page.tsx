export const metadata = {
  title: 'Reflections on Building AI Agents: Lessons from Amazon Think Big Hackathon | Shihong Liu',
  description: 'Insights and lessons learned from participating in Amazon\'s Think Big Hackathon, winning the \"Deliver Results\" award, and building AI agents over two years.'
}

export default function AmazonThinkBigHackathon2024() {
  return (
    <article className="section-spacing">
      <div className="container-readable">
        <div className="component-spacing">
          {/* Article Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 text-small text-text-tertiary mb-4">
              <span className="px-3 py-1 bg-border text-text-secondary rounded-full">
                AI Agents
              </span>
              <time dateTime="2024-06-10">
                June 10, 2024
              </time>
              <span>•</span>
              <span>7 min read</span>
            </div>
            <h1 className="text-section font-medium text-text-primary mb-6 max-w-4xl mx-auto">
              Reflections on Building AI Agents: Lessons from Amazon Think Big Hackathon
            </h1>
            <div className="w-16 h-px bg-border mx-auto"></div>
          </header>

          {/* Article Content */}
          <div className="prose prose-gray max-w-none">
            <div className="text-body text-text-secondary leading-relaxed space-y-6">
              <p>
                Recently, I participated in the Amazon Think Big Hackathon and was honored with the "Deliver Results" award. This marks my second time joining the event—me previously received the "Invent and Simplify" award in 2023. Over the past two years, I've been deeply involved in building AI agents in my life and have witnessed firsthand the rapid evolution of this field. I have received a lot of joy and I'd like to share a few reflections:
              </p>

              <h2 className="text-subsection font-medium text-text-primary mt-12 mb-6">1. Agents are not always necessary.</h2>
              <p>
                These days, it feels like every week someone announces, "Hey, I built a fantastic AI agent!"—and sure, that sounds exciting. Despite the hype, not every problem needs a full-fledged AI agent. In many cases, simpler solutions—yes, I'm calling traditional software engineering "traditional" now—are actually more effective and efficient.
              </p>
              <p>
                A simple decision-making framework I use goes like this:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Can the problem be solved with a limited set of if-else rules?</li>
                <li>If the input and output are largely deterministic, then don't overcomplicate things—skip the fancy tricks.</li>
                <li>If not, can it be addressed through a well-defined workflow?</li>
                <li>If so, great. That's still manageable and reliable.</li>
                <li>If neither applies, and the task requires flexibility, adaptability, or learning from complex patterns, then it might be time to model it with an AI agent system.</li>
              </ul>

              <h2 className="text-subsection font-medium text-text-primary mt-12 mb-6">2. Evaluation, Evaluation, Evaluation.</h2>
              <p>
                I once spoke with several CEO of AI agent company and asked, "How do you plan to improve your system?" Most of the answers were along the lines of, "We'll collect online user feedback and iterate from there." That approach can be risky—without strong offline evaluation, relying solely on live feedback may lead to failures or even rollbacks. Robust evaluation frameworks are essential. Without them, it's impossible to measure real progress or meaningfully compare different approaches. And evaluating large AI agent systems is particularly hard: sometimes the optimization target is unclear; sometimes public benchmarks don't align with real-world performance; sometimes the domain—like design or writing—relies heavily on subjective human judgment. Still, we have to start somewhere. Even if automatic evaluation is imperfect or incomplete, it's a step forward. Clear metrics, structured user studies, and consistent feedback loops are critical for moving beyond flashy demos and toward real-world reliability.
              </p>

              <h2 className="text-subsection font-medium text-text-primary mt-12 mb-6">3. Workflow vs. Reinforcement Learning?</h2>
              <p>
                There's been some debate around whether using workflows for AI agents undermines their intelligence or autonomy. I understand the skepticism—workflows often require humans to define key milestones and decompose tasks for LLMs, which limits their autonomy. However, IMO we haven't yet reached the scaling tipping point for agents. Compared to the massive amounts of textual data used to train LLMs, the available action data—especially high-quality examples—is still relatively scarce. In that context, starting with workflows isn't a bad idea. Especially in industry, where reliability often outweighs creativity, workflows can help bridge the gap by providing data until more robust learning-from-action frameworks (e.g., RL or DPO) are feasible at scale. On the other hand, our ultimate goal is to reach the level of general intelligence we often imagine AI agents are capable of. We can't possibly anticipate and handcraft every use case—but what if we want the agent to learn how to handle them intelligently? That's where reinforcement learning becomes essential.
              </p>

              <h2 className="text-subsection font-medium text-text-primary mt-12 mb-6">4. Product Mind</h2>
              <p>
                I strongly believe that developers working on AI agents must deeply understand the business problems they're trying to solve. Just as importantly, they need a product mindset—one that keeps them closely aligned with the needs and perspectives of their users. At the end of the day, an agent is just one way to solve a problem. Agent engineers shouldn't wait around for fully drafted product specs. Instead, they should proactively engage with users, learn from their pain points, and co-evolve the solution. Regular conversations with real users often reveal insights no PRD ever could.
              </p>

              <p>
                Finally, I want to emphasize that building AI agents isn't about chasing hype or creating illusions of magic. It's about reliability, completeness, and—at its best—the genuine joy that comes from creating something useful and intelligent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 