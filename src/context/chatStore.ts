import {create} from 'zustand';
import {chatData} from '../data/sampleChat';

// Define the chat state type
type TChatState = {
  messages: any[];
  sortedMessages: any[];
  addMessage: (newMessage: any) => void;
  removeMessage: (id: string) => void;
};

// Create Zustand store
export const useChatStore = create<TChatState>(set => ({
  messages: chatData, // Initialize with sample data
  sortedMessages: [...chatData].sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime(),
  ),

  // Add a new message
  addMessage: newMessage => {
    set(state => {
      const updatedMessages = [...state.messages, newMessage];
      const sorted = updatedMessages.sort(
        (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime(),
      );
      return {
        messages: updatedMessages,
        sortedMessages: sorted,
      };
    });
  },

  // Remove a message by ID
  removeMessage: id => {
    set(state => {
      const updatedMessages = state.messages.filter(
        message => message.id !== id,
      );
      const sorted = updatedMessages.sort(
        (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime(),
      );
      return {
        messages: updatedMessages,
        sortedMessages: sorted,
      };
    });
  },
}));
