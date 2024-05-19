import { useState } from "react"

export default function FileModal() {


    return (<>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="FileModal" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg mb-4">Upload a file</h3>

            </div>

        </dialog>
    </>
    )
}