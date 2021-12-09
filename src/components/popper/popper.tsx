import * as PopperJS from '@popperjs/core';
import { cloneElement, useCallback, useEffect, useState } from 'react';
import { usePopper } from 'react-popper';

interface PopperParams {
    placement?: PopperJS.Placement;
    offset?: number[];
    flipWhenOverflow?: boolean;
}

const getPopperOptions = ({ placement, flipWhenOverflow, offset }: PopperParams): Partial<PopperJS.Options> => {
    const options: Partial<PopperJS.Options> = { placement };
    if (!flipWhenOverflow) {
        options.modifiers = [
            {
                name: 'flip',
                options: {
                    fallbackPlacements: placement,
                },
            },
        ];
    }
    if (offset) {
        options.modifiers = [
            {
                name: 'offset',
                options: {
                    offset,
                },
            },
        ];
    }
    return options;
};

interface Props extends PopperParams {
    toggler: React.ReactElement;
    children: React.ReactElement;
}

export const Popper = ({ toggler, children, ...popperProps }: Props) => {
    const [active, setActive] = useState(false);
    const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

    const popperOptions = getPopperOptions(popperProps);
    const { styles, attributes } = usePopper(referenceElement, popperElement, popperOptions);

    const eventListener = useCallback((e: MouseEvent) => {
        const target = e.target as Node;
        if (!referenceElement?.contains(target) && !popperElement?.contains(target)) {
            setActive(false);
        }
    }, [popperElement, referenceElement]);

    useEffect(() => {
        document.addEventListener('mousedown', eventListener);
        return () => {
            document.removeEventListener('mousedown', eventListener);
        };
    }, [eventListener]);

    const popperToggler = cloneElement(toggler, { onClick: () => setActive((x) => !x), ref: setReferenceElement });
    const popperContent = cloneElement(children, { ref: setPopperElement, style: styles.popper, ...attributes.popper });

    return (
        <>
            {popperToggler}
            {active && popperContent}
        </>
    );
};
