import { useState } from "react"
import "./App.css"
import HomePage from "./home/Home"
import About from "./home/About"
import Contact from "./home/Contact"
import Work from "./home/Work"
import ProjectTemplate from "./home/ProjectTemplate"
import ProjectSpacefullTemplate from "./home/ProjectSpacefullTemplate"
import ProjectKanyeTemplate from "./home/ProjectKanyeTemplate"
import Project5ColTemplate from "./home/Project5ColTemplate"

function App() {
  const [page, setPage] = useState("home")

  const navigate = (newPage: string) => {
    setPage(newPage)
  }

  return (
    <div>
      {page === "home" && <HomePage navigate={navigate} />}
      {page === "about" && <About navigate={navigate} />}
      {page === "contact" && <Contact navigate={navigate} />}
      {page === "work" && <Work navigate={navigate} />}
      {page === "project-template" && <ProjectTemplate navigate={navigate} />}
      {page === "project-spacefull-template" && (
        <ProjectSpacefullTemplate navigate={navigate} />
      )}
      {page === "project-kanye-template" && (
        <ProjectKanyeTemplate navigate={navigate} />
      )}

      {page === "project-5col-template" && (
        <Project5ColTemplate navigate={navigate} />
      )}
    </div>
  )
}

export default App
