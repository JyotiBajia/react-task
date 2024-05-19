import { useState } from "react"

export default function LinkModal({ courses, setCourses, setIsEditing, isEditing, linkVal, setLinkVal, displayVal, setDisplayVal}) {



    const editCourse = () => {
        let updatedCourseId = isEditing.id;

        setCourses((prevCourses) => {
            return prevCourses.map((course) => {
                if (course.id === updatedCourseId) {
                    course.title = displayVal
                    course.url = linkVal
                }
                return course
            })
        })
        setIsEditing(false)
        setLinkVal('')
        setDisplayVal('')
        document.getElementById('LinkModal').close()
    }

    const updateCourses = (e) => {
        e.preventDefault()
        let newCourse = {
            id: courses.length + 1,
            title: displayVal,
            description: "Link",
            type: "link",
            url: linkVal
        }
        setCourses((prevCourses) => {
            return [...prevCourses, newCourse]
        })
        setLinkVal('')
        setDisplayVal('')
        document.getElementById('LinkModal').close()
    }

    return (<>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="LinkModal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">Add a Link</h3>
                <p className="font text-md text-gray-600 mb-1 ms-1 mt-8">URL</p>
                <input
                    onChange={(e) => setLinkVal(e.target.value)}
                    type="text"
                    value={linkVal}
                    className="input input-bordered w-[90%]"
                    placeholder="Paste URL here" />
                <p className="font text-md text-gray-600 mb-1 ms-1 mt-8">Display Name</p>
                <input
                    onChange={(e) => setDisplayVal(e.target.value)}
                    type="text"
                    value={displayVal}
                    className="input input-bordered w-[90%]"
                    placeholder="Display Name" />
                <div className="flex flex-row mt-6">
                    <form className="ml-auto" method="dialog">
                        <button onClick={() => {
                            setIsEditing(false)
                            setLinkVal('')
                            setDisplayVal('')
                        }} className="btn btn mt-4 ">Cancel</button>
                    </form>
                    <button onClick={isEditing ? editCourse : updateCourses} className="btn btn-active btn-primary ms-4 mt-4">
                        {isEditing ? 'Save Changes' : 'Create'}
                    </button>
                </div>

            </div>

        </dialog>
    </>
    )
}