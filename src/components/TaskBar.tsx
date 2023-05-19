import winIcon from "../images/win.svg";
export default function TaskBar() {
  return (
    <div
      className="fixed 
     bottom-0 left-0 right-0 w-full 
     backdrop-blur-3xl bg-gray-900/90 py-1"
    >
      <button className=" m-0 p-1 rounded-md 
      ml-4 hover:bg-gray-800 transition-all duration-300">
        <img src={winIcon} alt="start" height={30} width={30} />
      </button>
    </div>
  );
}
