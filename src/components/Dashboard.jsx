import { useEffect, useState } from "react"
import CoursesHero from "./CoursesHero";

function NoCourses() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh]">
            <h1 className="font-bold">Nothing added here yet!</h1>
            <p>Click the [ + ] Add button to add items to this course.</p>
        </div>
    )
}

export default function Dashboard({ courses, setCourses, setIsEditing, setModuleName, setLinkVal, setDisplayVal }) {

    return (
        <>
            {
                !courses.length > 0 ?
                    <NoCourses />
                    :
                    <CoursesHero
                        setModuleName={setModuleName}
                        courses={courses}
                        setCourses={setCourses}
                        setIsEditing={setIsEditing}
                        setLinkVal={setLinkVal}
                        setDisplayVal={setDisplayVal} />
            }
        </>
    )
}