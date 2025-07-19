import MessageInput from './MessageInput'
import ChatHeader from './ChatHeader'
import MessageSkeleton from '../skeleton/MessageSkeleton'

const ChatContainer = () => {
  return (
    <div className="flex flex-1 flex-col">
      <ChatHeader />
      <MessageSkeleton />
      <MessageInput />
    </div>
  )
}

export default ChatContainer