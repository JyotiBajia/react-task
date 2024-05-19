import { GoDatabase, GoUpload, GoPlus } from "react-icons/go";
import { IoIosLink } from "react-icons/io";

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between">
            <h1 className="text-xl m-2 font-bold">Course builder</h1>
            <div className="dropdown dropdown-bottom dropdown-end m-2 ">
                <div tabIndex={0} role="button" className="btn btn-error m-1 pe-8"><GoPlus className="text-xl" /> Add</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg border bg-base-100 rounded-box w-52">
                    <li><a onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('ModuleModal').showModal();
                    }}><GoDatabase /> Create Module</a></li>
                    <li><a onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('LinkModal').showModal();
                    }}><IoIosLink /> Add Link</a></li>
                    <li><a onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('FileModal').showModal();
                    }}><GoUpload /> Upload File</a></li>

                </ul>
            </div>
        </nav>
    )
}