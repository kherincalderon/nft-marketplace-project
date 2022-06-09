import { useEffect } from "react";
import feather from "feather-icons";

const useIcons = () => {
  useEffect(() => {
    feather.replace();
  }, []);
}

export default useIcons