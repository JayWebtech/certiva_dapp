import { useEffect } from "react";

const useOutsideClick = (refs: React.RefObject<HTMLElement>[], callback: () => void) => {
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    const isOutsideAllRefs = refs.every(
      (ref) => ref.current && !ref.current.contains(event.target as Node),
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
