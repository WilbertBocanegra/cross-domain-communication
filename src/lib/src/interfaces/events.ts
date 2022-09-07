import type { ActionE } from '../enum';

/**
 * @author Wilbert Bocanegra Velazquez / Core Team
 * @author - if you modify this file added in this comment or another comment with @author
 */

interface MessageEvents<T = unknown> {
	action: ActionE;
	data?: T;
	key: string;
	message: string;
	hasPermissions?: boolean;
}

interface ResponseEvent<T = unknown> {
	data?: T;
	key: string;
	message: string;
}

interface InputGet {
	key: string;
}

interface InputSet<T> {
	key: string;
	data: T;
}

export type { MessageEvents, ResponseEvent, InputGet, InputSet };
