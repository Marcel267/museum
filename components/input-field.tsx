import { Input } from "@/components/ui/input"
import EyeShown from "./eye-shown"

export function InputEmail() {
  return(
      <Input type="email" placeholder="Email" />
  )
}

export function InputUsername() {
  return(
      <Input type="username" placeholder="Nutzername" />
  )
}

export function InputUserPassword() {
  return(
      <Input type="userpassword" placeholder="Passwort" />
  )
}

export function InputUserPasswordAgain() {
  return(
      <Input type="userpasswordagain" placeholder="Passwort wiederholen" />
  )
}

export function InputUsernameOrEmail() {
  return(
      <Input type="useroremail" placeholder="Email/Nutzername" />
  )
}