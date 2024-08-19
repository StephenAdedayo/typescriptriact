import Count from "./components/Count"
import Form from "./components/Form"
import Test from "./components/Test"

const App: React.FC = () => {
  return (
    <div>
      <Test firstName= 'Stephen'  job= 'Software Developer' />
      <Test firstName= 'Steve' job= 'Banker' />
      <Test firstName= 'Trent'  job= 'Footballer' />
      <Test firstName= 'Ade'  job= 'Crypto Trader' />

      <Count />
      <Form />
    </div>
  )
}

export default App
