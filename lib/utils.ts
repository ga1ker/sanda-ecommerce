import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isLoggedIn() {
  const token : string | null = "a7dajsdgj";
  if (token && token.length > 0 && token != null && token != undefined && token != "") {
    return true;
    getUserInfo(token)
  } else {
    return false;
  }
}

export function getUserInfo(token: string | null) {
  const username = "Gadiel";
  const email = "zenget008@gmail.com"

  console.log("token es: ", token)
}