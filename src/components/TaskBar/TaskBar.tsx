import StartButton from "./StartButton";

export default function TaskBar() {
  return (
    <div
      className="fixed 
      bottom-0 left-0 right-0 w-full 
     backdrop-blur-3xl bg-gray-900/90 py-1"
    >
      <StartButton classes="ml-4"/>
    </div>
  );
}
