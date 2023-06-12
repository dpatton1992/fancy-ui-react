import { MouseEventHandler } from 'react';

export interface MenuLinkProps {
	text?: string;
	primary?: boolean;
	href?: string;
	size?: 'small' | 'medium' | 'large';
	onClick?: MouseEventHandler<HTMLLinkElement> &
		MouseEventHandler<HTMLAnchorElement>;
	target?: string;
}
