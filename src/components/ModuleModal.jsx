import { useState } from "react"


export default function ModuleModal({courses, setCourses, isEditing, setIsEditing, moduleName, setModuleName}) {

    

    const editCourse = () => {
        let updatedCourseId = isEditing.id;
        
        setCourses((prevCourses) => {
            return prevCourses.map((course) => {
                if(course.id === updatedCourseId) {
                    course.title = moduleName
                }
                return course
            })
        })
        setIsEditing(false)
        setModuleName('')
        document.getElementById('ModuleModal').close()
    }

    const updateCourse = () => {
        let newCourse = {
            id: courses.length + 1,
            title: moduleName,
            description: "Add Items to this module",
            type: "module"
        }
        setCourses((prevCourses) => {
            return [...prevCourses, newCourse]
        })
        setModuleName('')
        document.getElementById('ModuleModal').close()
    }

    return (<>
        <dialog id="ModuleModal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">Create a module</h3>
                <p className="font text-md text-gray-600 mb-1 ms-1">Module Name</p>
                <input
                    onChange={(e) => setModuleName(e.target.value)}
                    type="text"
                    value={moduleName}
                    className="input input-bordered w-[90%]"
                    placeholder="Module Name" />
                <div className="flex flex-row mt-6">
                    <form className="ml-auto" method="dialog">
                        <button onClick={() => {
                            setIsEditing(false)
                            setModuleName('')
                        }} className="btn btn mt-4 ">Cancel</button>
                    </form>
                    <button onClick={() => isEditing ? editCourse() : updateCourse() } className="btn btn-active btn-primary ms-4 mt-4">
                        {isEditing ? 'Save Changes' : 'Create'}
                    </button>
                </div>

            </div>

        </dialog>
    </>
    )
}