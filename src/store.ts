import { writable, type Writable } from "svelte/store";
import type { Message } from "$lib/types/message";

export const chatRoomMessages: Writable<Message[]> = writable([]);