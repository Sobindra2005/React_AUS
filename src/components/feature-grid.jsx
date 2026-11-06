export function FeatureGrid({ index, title, description, isNormal }) {
    function clickMe(a) {
        console.log("clicked!!!", a)
    }

    function againClick() {
        console.log("clicked again")
    }

    function sum(a, b) {
        console.log(a + b)
        return a + b
    }

    return (
        <article className="feature-card">
            <div className="feature-icon">{index}</div>
            {isNormal ? <h2>Normal</h2> : <h2>Premium</h2>}
            <h3>{title}</h3>
            <p>{description}</p>
            {!isNormal && <span>Most Popular Feature</span>}
        </article>
    )
}

// export function SecondFeature() {
//     return (
//         <article className="feature-card">
//             <div className="feature-icon">02</div>
//             <h3>Track progress</h3>
//             <p>See weekly wins and stay focused on the goals that matter most.</p>
//         </article>
//     )
// }

// export function ThirdFeature() {
//     return (
//         <article className="feature-card">
//             <div className="feature-icon">03</div>
//             <h3>Learn with ease</h3>
//             <p>Access simple tools and guided resources designed for busy students.</p>
//         </article>
//     )
// }