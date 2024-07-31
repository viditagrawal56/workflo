"use client";

import { Provider } from "react-redux";
import { store, StoreType } from "./store";
import { useRef } from "react";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<StoreType>();
  if (!storeRef.current) {
    storeRef.current = store();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
