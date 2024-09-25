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
        <main className="flex flex-col w-full lg:w-auto lg:bg-zinc-50 lg:p-4 font-[family-name:var(--font-Ubuntu-Regular)] lg:rounded-2xl lg:shadow lg:flex-row">
          <ListOfSteps />
          <Suspense fallback={<Loading />}>
            <div className="max-w-[620px] lg:w-[620px] min-h-[420px] lg:h-[500px] mx-auto text-blue-950 px-4 sm:px-12 lg:px-20 rounded-lg flex flex-col gap-8 -mt-24 lg:mt-10 mb-2 bg-zinc-50">
              {children}
            </div>
          </Suspense>
        </main>
      </Suspense>
    </Provider>
  );
}
