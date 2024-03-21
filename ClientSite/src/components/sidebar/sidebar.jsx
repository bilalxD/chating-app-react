import SearchInput from "../sidebar/searchInput"
import { Conversations } from "./Conversations"
import LogoutButton from "./LogoutButton"
function sidebar() {
  return (
    <div className="border-r border-slate-400 p-4 flex flex-col">
      <SearchInput />
      <div className="divider p-2"></div>
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default sidebar