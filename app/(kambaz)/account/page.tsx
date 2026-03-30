"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function AccountPage() {
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  useEffect(() => {
    if (!currentUser) {
      router.replace("/account/signin");
    } else {
      router.replace("/account/profile");
    }
  }, [currentUser, router]);
  return null;
}
