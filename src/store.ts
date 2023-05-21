import { writable, type Writable } from "svelte/store";

export interface Message {
    id: number;
    host: boolean;
    avatar: number;
    name: string;
    timestamp: string;
    content: string;
    color: string;
}

export const chatRoomContent: Writable<Message[]> = writable([]);