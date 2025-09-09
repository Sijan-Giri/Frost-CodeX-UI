import CodexCoreSection from "./components/UI/CodexCoreSection"
import CodexSection from "./components/UI/CodexSection"
import UseCaseSection from "./components/UI/UseCaseSection"

function App() {
  return (
    <div className="overflow-x-hidden min-w-0 w-full">
      <CodexSection />
      <CodexCoreSection />
      <UseCaseSection />
    </div>
  )
}

export default App