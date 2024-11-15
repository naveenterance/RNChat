import {create} from 'zustand';
import {chatData} from '../data/sampleChat';

// Define the chat state type
type TChatState = {
  messages: any[];
  sortedMessages: any[];
  addMessage: (newMessage: any) => void;
  removeMessage: (id: string) => void;
};

// Helper function to parse time and get correct Date object
const parseTime = (timeString: string) => {
  // Adjust the format if needed (e.g., converting "10:00pm" to "10:00 PM")
  const formattedTime = new Date(`1970-01-01T${timeString.toUpperCase()}`);
  return formattedTime;
};

// Create Zustand store
export const useChatStore = create<TChatState>(set => ({
  messages: chatData, // Initialize with sample data
  sortedMessages: chatData.sort(
    (a, b) => parseTime(b.time).getTime() - parseTime(a.time).getTime(),
  ),

  // Add a new message
  addMessage: newMessage => {
    set(state => {
      const updatedMessages = [...state.messages, newMessage];
      const sorted = updatedMessages.sort(
        (a, b) => parseTime(b.time).getTime() - parseTime(a.time).getTime(),
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
        (a, b) => parseTime(b.time).getTime() - parseTime(a.time).getTime(),
      );
      return {
        messages: updatedMessages,
        sortedMessages: sorted,
      };
    });
  },
}));
