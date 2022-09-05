import type { EMessage } from '../enum';
interface IMessage {
    action: string;
    type: string;
    message: string;
}
interface IMessageEvent {
    key: string;
    data: unknown;
    message: string;
    action: EMessage;
}
interface ResponseGet {
    key: string;
    data: string;
    message: string;
}
interface Input {
    key: string;
    iframe: string;
    data: unknown;
}
interface Handle {
    (input: Input): Promise<ResponseGet>;
}
export type { IMessage, IMessageEvent, Handle };
