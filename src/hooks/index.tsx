"use client";

import { appDispatch, rootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<appDispatch>();
export const useAppSelector = useSelector.withTypes<rootState>();
