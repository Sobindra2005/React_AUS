import { FeatureGrid } from "./feature-grid"

const features = [
    {
        isNormal: true,
        index: "01",
        title: "Study smarter",
        description: "Organize lessons, notes, and deadlines in one calm workspace.",
    },
    {
        isNormal: false,
        index: "02",
        title: "Track progress",
        description: "See weekly wins and stay focused on the goals that matter most.",
    },
    {
        isNormal: true,
        index: "03",
        title: "Learn with ease",
        description: "Access simple tools and guided resources designed for busy students.",
    },
];

export default function Features() {

    return (
        <section className="features">
            <div className="section-heading">
                <p className="eyebrow">Why students choose us</p>
                <h2>Everything you need to learn with clarity.</h2>
            </div>

            <div className="feature-grid">
                {
                    features.map((feature) => {
                        return (
                        <FeatureGrid key={feature.index} isNormal={feature.isNormal} index={feature.index} title={feature.title} description={feature.description} />
                    )
                    })
                }

            </div>
        </section>
    )
}