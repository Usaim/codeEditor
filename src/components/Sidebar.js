import React from "react";

// const Sidebar = ({ files, onNewFile, onDeleteFile, onSelectFile }) => {
//   return (
//     <div className="w-1/5 p-4 bg-gray-800 text-white">
//       <h3 className="text-lg font-bold mb-4">Files</h3>
//       {files.map((file, index) => (
//         <div key={index} className="flex justify-between mb-2">
//           <button onClick={() => onSelectFile(file)}>{file}</button>
//           <button onClick={() => onDeleteFile(file)} className="text-red-500">
//             Delete
//           </button>
//         </div>
//       ))}
//       <button onClick={onNewFile} className="bg-green-500 py-2 px-4 rounded mt-4">
//         New File
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

const Sidebar = ({ files, onNewFile, onDeleteFile, onSelectFile }) => {
    return (
      <div className="w-1/5 p-4 bg-gray-800 text-white">
        <h3 className="text-lg font-bold mb-4">Files</h3>
        {Array.isArray(files) && files.length > 0 ? (
          files.map((file, index) => (
            <div key={index} className="flex justify-between mb-2">
              <button onClick={() => onSelectFile(file)}>{file}</button>
              <button onClick={() => onDeleteFile(file)} className="text-red-500">
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No files available</p>
        )}
        <button onClick={onNewFile} className="bg-green-500 py-2 px-4 rounded mt-4">
          New File
        </button>
      </div>
    );
  };
  export default Sidebar;