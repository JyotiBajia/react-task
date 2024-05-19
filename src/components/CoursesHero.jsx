import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


export default function CoursesHero({ courses, setCourses, setIsEditing, setModuleName, setLinkVal, setDisplayVal}) {
    return (
        <div className="flex flex-col">
            {courses.map(course => (
                <div key={course.id} className="shadow-lg flex flex-row items-center border rounded border-gray-300 px-4 py-1 mb-4">
                    <figure>
                        <img className="w-12 h-12 rounded" src={`https://source.unsplash.com/400x300/?${course.title}`} alt={course.title} />
                    </figure>
                    <div className="ms-2">
                        <h2 className="font-bold">{course.title}</h2>
                        <p>{course.description}</p>
                    </div>
                    <div className="ml-auto">
                        <div className="dropdown dropdown-bottom dropdown-end bg-transparent">
                            <div tabIndex={0} role="button" className="bg-transparent m-1"><BsThreeDotsVertical /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border rounded-box w-52">
                                <li onClick={() => {
                                    setIsEditing(course);
                                    course.type === 'module' && setModuleName(course.title)
                                    course.type === 'link' && setLinkVal(course.url)
                                    course.type === 'link' && setDisplayVal(course.title)
                                    course.type === 'module'
                                        ? 
                                            document.getElementById('ModuleModal').showModal()
                                        : 
                                        document.getElementById('LinkModal').showModal()

                                }}><a><CiEdit /> Edit</a></li>
                                <li onClick={() => {
                                    let updatedCourses = courses.filter((c) => c.id !== course.id)
                                    setCourses([...updatedCourses])

                                }} className="text-red-700"><a><MdDelete /> Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}