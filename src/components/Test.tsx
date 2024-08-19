interface TestProps {
    firstName : string
    lastName ? : string
    job : string
}

const Test : React.FC<TestProps> = ({firstName, lastName = 'Steve', job}) => {
  return (
    <div>
      <h1>Hey! My name is {firstName} {lastName } i am a {job}</h1>
    </div>
  )
}

export default Test
