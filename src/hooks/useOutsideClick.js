import { useEffect } from "react";

const useOutsideClick = (refs, callback) => {
  const handleClickOutside = (event) => {
    const isOutsideAllRefs = refs.every(
      (ref) => ref.current && !ref.current.contains(event.target)
    );
    if (isOutsideAllRefs) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [refs, callback]);
};

export default useOutsideClick;