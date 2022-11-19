import { useEffect } from "react";

const TabTitle = (newtitle) => {
  useEffect(() => {
    document.title = newtitle + " | My Life Guide";
  }, [newtitle]);
};

export default TabTitle;
