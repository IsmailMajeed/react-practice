import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout"
import Index from "./Pages/Index"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
