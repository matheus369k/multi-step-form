"use client";

import { ListOfSteps } from "@/components/list-of-steps";
import { Loading } from "@/components/loading";
import { store } from "@/redux/store";
import React, { Suspense } from "react";
import { Provider } from "react-redux";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <main className="max-h-[540px] max-w-4xl w-full h-full flex bg-zinc-50 p-4 font-[family-name:var(--font-Ubuntu-Regular)] rounded-2xl shadow">
            <ListOfSteps />
            <Suspense fallback={<Loading />}>
              <div className="max-h-[430px] max-w-[450px] w-full mx-auto pt-12 pb-6 text-blue-950">
                {children}
              </div>
            </Suspense>
          </main>
        </Suspense>
      </Provider>
  );
}
