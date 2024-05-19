import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import ModuleModal from "./components/ModuleModal";
import FileModal from "./components/FileModal";
import LinkModal from "./components/LinkModal";
import { useState } from "react";

function App() {

  const [courses, setCourses] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [moduleName, setModuleName] = useState('')
  const [linkVal, setLinkVal] = useState('')
  const [displayVal, setDisplayVal] = useState('')


  return (
    <main className="px-40 py-2">
      <Navbar />
      <Dashboard
        setLinkVal={setLinkVal}
        setDisplayVal={setDisplayVal}
        setModuleName={setModuleName}
        setIsEditing={setIsEditing}
        courses={courses}
        setCourses={setCourses} />
      <ModuleModal
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        courses={courses}
        setCourses={setCourses}
        moduleName={moduleName}
        setModuleName={setModuleName} />
      <LinkModal
        linkVal={linkVal}
        setLinkVal={setLinkVal}
        displayVal={displayVal}
        setDisplayVal={setDisplayVal}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        courses={courses}
        setCourses={setCourses} />
      <FileModal />
    </main>
  )
}

export default App
