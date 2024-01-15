import { useState } from "react";
import Dropdown from "./Dropdown";

const Multiselect = () => {

  // state showing if dropdown is open or closed
  const [dropdown, setDropdown] = useState(false);

  // managing dropdown items (list of dropdown items)
  const [items, setItems] = useState([
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "TypeScript",
    "Swift",
    "Kotlin",
    "Rust",
    "PHP",
    "HTML",
    "CSS",
    "C++",
    "Objective-C",
    "Scala",
    "Shell",
    "Perl",
  ]);

  const [filteredItems, setFilteredItems] = useState(items);

  // contains selected items

  const [selectedItems, setSelectedItems] = useState([]);


  const [input, setInput] = useState("");

 
    // handle list toggle

  const toogleDropdown = () => {
    setFilteredItems(items)
    setDropdown(!dropdown);
  };

  // handle search bar
  const handleSearch = (query) => {
    console.log(query);
    setInput(query);
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    console.log(filtered);
    setFilteredItems(filtered);
    setDropdown(true);
  };

  // adds new item to multiselect
  const addTag = (item) => {
    if (selectedItems.indexOf(item) === -1) {
      setSelectedItems(selectedItems.concat(item));
    }
    else{
      alert("Already Added..")
    }
    setDropdown(false);
    setFilteredItems(item);
    setInput("");
  };

  // handle back space
  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      setSelectedItems([...selectedItems.slice(0, -1)]);
    }
  };


  // removes item from multiselect
  const removeTag = (item) => {
    const filtered = selectedItems.filter((e) => e !== item);
    setSelectedItems(filtered);
  };

  return (
    
        <div className="w-full flex flex-col items-center mx-auto">
          <div className="w-full">
          
            <div className="flex flex-col items-center relative">
              <div className=" w-full">
                <div className="my-2    p-1 flex border border-gray-200 bg-white rounded-full ">
                 
                  <div className="flex flex-auto flex-wrap ">
                    {selectedItems.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-gray-200 rounded-full text-teal-700  border border-teal-300 "
                        >
                          <div className="text-sm font-bold leading-none max-w-full flex-initial">
                            {tag}
                          </div>

                          <div className="flex flex-auto flex-row-reverse">
                            <div onClick={() => removeTag(tag)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                              >
                              
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </div>
                          </div>
                        </div>
                      );
                    })}



                    <div className="flex-1">
                      <input
                        placeholder="Select Your Favorite Programming Language"
                        onChange={(e) => handleSearch(e.target.value)}
                        value={input}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800 rounded-3xl"
                      />
                    </div>


                  </div>

                  <div
                    className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
                    onClick={toogleDropdown}
                  >
                    <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                    <svg  viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#a520d5" stroke="#a520d5"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M12.146 6.146l0.707 0.707-4.353 4.354-4.354-4.353 0.707-0.707 3.647 3.646 3.646-3.647zM17 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5zM16 8.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5 3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z" fill="#000000"></path> </g></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {dropdown ? (
              <Dropdown list={filteredItems} addItem={addTag}></Dropdown>
            ) : null}
          </div>
      
    </div>
  );
};

export default Multiselect;
