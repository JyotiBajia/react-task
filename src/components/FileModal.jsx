import { useState } from "react";

export default function FileModal({ setCourses, courses }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        // Perform upload logic here
        // For demonstration purposes, we're just setting the file URL
        const fileURL = URL.createObjectURL(selectedFile);

        // Create a new module with the selected file as its title
        const newModule = {
            id: courses.length + 1,
            title: selectedFile.name,
            description: "File",
            type: "module",
            url: fileURL, // Add file URL to the module
        };

        // Update courses state to add the new module
        setCourses([...courses, newModule]);

        // Close the modal
        document.getElementById("FileModal").close();
    };

    const handleEdit = (id) => {
        // Handle edit functionality here if needed
    };

    const handleDownload = (url) => {
        // Trigger file download using the provided URL
        window.open(url, '_blank');
    };

    const handleDelete = (id) => {
        // Remove the file module from the courses state
        const updatedCourses = courses.filter(course => course.id !== id);
        setCourses(updatedCourses);
    };

    return (
        <>
            <dialog id="FileModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => setSelectedFile(null)}
                        >
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg mb-4">Upload a file</h3>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="mb-4"
                    />
                    {selectedFile && (
                        <div>
                            <p>Selected file: {selectedFile.name}</p>
                            {/* Display edit, download, and delete options */}
                            <button onClick={handleUpload} className="btn btn-primary mt-2">Upload</button>
                        </div>
                    )}
                </div>
            </dialog>
        </>
    );
}
