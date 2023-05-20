import { writable, type Writable } from "svelte/store";

export interface Message {
    id: number;
    host: boolean;
    avatar: number;
    name: string;
    timestamp: string;
    message: string;
    color: string;
}

export const messageFeedStore: Writable<Message[]> = writable([]);