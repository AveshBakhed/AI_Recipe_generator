import ReactMarkdown from 'react-markdown'


export default function ClaudeRecipe(props){
    return (
        <section className="recipeFull">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipeShown}</ReactMarkdown>
        </section>
    )
}