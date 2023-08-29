import Header from "./components/Header"
import Challenge from "./components/Challenge"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <Header />
      <main className="bg-gray-200 p-px">
        <Challenge />
      </main>
      <Footer />
    </>
  )
}

export default App
