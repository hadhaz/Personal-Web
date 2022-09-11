import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal: FC<{ children: React.ReactNode; id?: string }> = ({
  children,
  id,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  id = id ? id : "modal-overlay";
  return mounted
    ? createPortal(children, document.querySelector("#" + id) as HTMLElement)
    : null;
};

export default Portal;
