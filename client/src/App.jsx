function botton(){
  return(<button>Presioname</button>)
}
function App() {
  const contador = 22
  let name= "soy vladmir"

  return (
    <div className="component">
  <h1>comprame {name} tienes {contador} años </h1>
  <botton/>
  </div>
    )
}
export default App