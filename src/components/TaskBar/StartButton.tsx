import { useState } from "react";
import winIcon from "../../images/win.svg";
import { setStartMenuVisible } from "../../store/states/StartMenuState";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";

interface Props {
  classes?: string;
}

export default function StartButton({ classes = "" }: Props) {
  const [mouseDown, setMouseDown] = useState(false);
  const { showStartMenu } = useAppSelector((state) => state.startMenu);
  const dispatch = useAppDispatch();

  function handleMouseUp() {
    setMouseDown(false);
    dispatch(setStartMenuVisible(!showStartMenu));
  }

  return (
    <button
      className={`m-0 p-1 rounded-md 
           hover:bg-gray-800 transition-all duration-300 ${classes}`}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={handleMouseUp}
    >
      <img
        src={winIcon}
        alt="start"
        height={30}
        width={30}
        className={` ${
          mouseDown ? "scale-75" : "scale-100"
        } transition-all duration-300`}
      />
    </button>
  );
}
